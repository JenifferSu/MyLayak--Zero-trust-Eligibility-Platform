import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, Camera, Loader2 } from 'lucide-react';
import jsQR from 'jsqr';

interface QRScannerScreenProps {
  onBack: () => void;
  onValid: () => void;
}

type ScanStatus = 'idle' | 'scanning' | 'valid' | 'invalid' | 'expired' | 'error';

export function QRScannerScreen({ onBack, onValid }: QRScannerScreenProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState<ScanStatus>('idle');
  const [message, setMessage] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  // CONFIG
  const SECRET = new TextEncoder().encode('CHANGE_ME_SECRET');
  const N = 37;
  const BORDER = 4;
  const HIDDEN_BITS = 64;
  const TIME_WINDOW = 60;

  // HELPERS
  async function handleContinue() {
    setIsGenerating(true);
    try {
      // Trigger backend simulation of QKD token generation and verification
      const response = await fetch('/run/qkd-demo');
      const result = await response.json();
      
      console.log("%c BB84 QKD & PQC Token Simulation ", "background: #222; color: #bada55; font-size: 14px; font-weight: bold; padding: 4px; border-radius: 4px;");
      console.log(result.output);
    } catch (err) {
      console.error("Failed to run QKD demo:", err);
    } finally {
      setIsGenerating(false);
      onValid();
    }
  }

  function getEmbedCoords() {
    const n = 37;
    const coords: Array<[number, number]> = [];
    const bad = (x: number, y: number) =>
      (x <= 8 && y <= 8) ||
      (x >= n - 9 && y <= 8) ||
      (x <= 8 && y >= n - 9) ||
      x === 6 ||
      y === 6 ||
      (x >= 28 && x <= 32 && y >= 28 && y <= 32) ||
      (y === 8 && (x <= 8 || x >= n - 8)) ||
      (x === 8 && (y <= 8 || y >= n - 8));
    for (let y = n - 1; y >= 0; y--) {
      for (let x = n - 1; x >= 0; x--) {
        if (bad(x, y)) continue;
        coords.push([x, y]);
        if (coords.length === HIDDEN_BITS) return coords;
      }
    }
    return coords;
  }

  async function hmac32(msg: string) {
    const key = await crypto.subtle.importKey('raw', SECRET, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(msg));
    const view = new DataView(sig as ArrayBuffer);
    return view.getUint32(0, false);
  }

  function bitsToInt(bits: number[]) {
    let v = 0 >>> 0;
    for (const b of bits) v = ((v << 1) | (b & 1)) >>> 0;
    return v >>> 0;
  }

  // HOMOGRAPHY & SAMPLING
  function solveLinearSystem8(A: number[][], b: number[]) {
    const M = A.map((row, i) => row.concat([b[i]]));
    const n = 8;
    for (let col = 0; col < n; col++) {
      let pivot = col;
      for (let r = col + 1; r < n; r++) {
        if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
      }
      if (Math.abs(M[pivot][col]) < 1e-12) return null;
      if (pivot !== col) [M[pivot], M[col]] = [M[col], M[pivot]];
      const div = M[col][col];
      for (let c = col; c <= n; c++) M[col][c] /= div;
      for (let r = 0; r < n; r++) {
        if (r === col) continue;
        const factor = M[r][col];
        for (let c = col; c <= n; c++) M[r][c] -= factor * M[col][c];
      }
    }
    return M.map(row => row[n]);
  }

  function computeHomography(srcCorners: {u:number, v:number}[], dstCorners: {x:number, y:number}[]) {
    const A: number[][] = [];
    const b: number[] = [];
    for (let i = 0; i < 4; i++) {
      const {u, v} = srcCorners[i];
      const {x, y} = dstCorners[i];
      A.push([u, v, 1, 0, 0, 0, -x*u, -x*v]);
      b.push(x);
      A.push([0, 0, 0, u, v, 1, -y*u, -y*v]);
      b.push(y);
    }
    const h = solveLinearSystem8(A, b);
    if (!h) return null;
    return {
      h11: h[0], h12: h[1], h13: h[2],
      h21: h[3], h22: h[4], h23: h[5],
      h31: h[6], h32: h[7],
      map(u: number, v: number) {
        const den = this.h31*u + this.h32*v + 1;
        return {
          x: (this.h11*u + this.h12*v + this.h13) / den,
          y: (this.h21*u + this.h22*v + this.h23) / den
        };
      }
    };
  }

  function clamp(v: number, lo: number, hi: number){ return Math.max(lo, Math.min(hi, v)); }

  function sampleDark(imgData: ImageData, w: number, h: number, x: number, y: number) {
    let sum = 0, cnt = 0;
    const xi = Math.round(x), yi = Math.round(y);
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const xx = clamp(xi + dx, 0, w - 1);
        const yy = clamp(yi + dy, 0, h - 1);
        const idx = (yy * w + xx) * 4;
        const r = imgData.data[idx], g = imgData.data[idx+1], b = imgData.data[idx+2];
        const lum = 0.299*r + 0.587*g + 0.114*b;
        sum += lum; cnt++;
      }
    }
    const avg = sum / cnt;
    return avg < 128 ? 1 : 0;
  }

  async function tryExtractAndVerify(imgData: ImageData, w: number, h: number, qr: any) {
    const payload = qr.data;
    const coords = getEmbedCoords();
    const L = qr.location;
    const dst = [
      {x: L.topLeftCorner.x,     y: L.topLeftCorner.y},
      {x: L.topRightCorner.x,    y: L.topRightCorner.y},
      {x: L.bottomRightCorner.x, y: L.bottomRightCorner.y},
      {x: L.bottomLeftCorner.x,  y: L.bottomLeftCorner.y},
    ];

    const variants = [
      {name:"noQZ-boundary",   S:N,               off:0,      center:0.5},
      {name:"noQZ-centers",    S:N-1,             off:0,      center:0.0},
      {name:"QZ-boundary",     S:N+2*BORDER,      off:BORDER, center:0.5},
      {name:"QZ-centers",      S:N+2*BORDER-1,    off:BORDER, center:0.0},
    ];

    const now = Math.floor(Date.now()/1000);

    for (const v of variants) {
      const src = [
        {u: 0,   v: 0},
        {u: v.S, v: 0},
        {u: v.S, v: v.S},
        {u: 0,   v: v.S},
      ];
      const H = computeHomography(src, dst);
      if (!H) continue;

      const bits = coords.map(([mx, my]) => {
        const u = (mx + v.off + v.center);
        const vv = (my + v.off + v.center);
        const p = H.map(u, vv);
        return sampleDark(imgData, w, h, p.x, p.y);
      });

      const ts  = bitsToInt(bits.slice(0, 32));
      const tag = bitsToInt(bits.slice(32));
      const expected = await hmac32(`${payload}|${ts}`);

      if (tag === expected) {
         return { 
           payload, ts, tag, expected, 
           okStego: true, 
           variant: v.name,
           okTime: Math.abs(now - ts) <= TIME_WINDOW
         };
      }
    }
    return { payload, okStego: false };
  }

  useEffect(() => {
    let raf = 0;
    setStatus('scanning');
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then((stream) => {
        if (!videoRef.current) return;
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(() => {});
        const tick = async () => {
          raf = requestAnimationFrame(tick);
          if (!videoRef.current || !canvasRef.current) return;
          const v = videoRef.current;
          const c = canvasRef.current;
          const w = v.videoWidth;
          const h = v.videoHeight;
          if (!w || !h) return;
          c.width = w;
          c.height = h;
          const ctx = c.getContext('2d', { willReadFrequently: true });
          if (!ctx) return;
          ctx.drawImage(v, 0, 0, w, h);
          const imgData = ctx.getImageData(0, 0, w, h);
          const qr = jsQR(imgData.data, w, h, { inversionAttempts: "attemptBoth" });
          if (!qr) return;
          
          try {
            const res = await tryExtractAndVerify(imgData, w, h, qr);
            
            if (!res.okStego) {
              console.log('[-] Stego mismatch. Payload:', res.payload);
              setStatus('invalid');
              setMessage('Fake QR: stega mismatch');
              return;
            }

            const now = Math.floor(Date.now() / 1000);
            const ts = res.ts!;
            
            console.log('[+] visible payload:', res.payload);
            console.log('[+] variant:', res.variant);
            console.log('[+] timestamp:', ts, 'diff:', Math.abs(now - ts));
            console.log('[+] tag:', res.tag!.toString(16));
            console.log('[+] expected:', res.expected!.toString(16));

            if (!res.okTime) {
              setStatus('expired');
              setMessage('Expired QR: time window exceeded');
              return;
            }

            setStatus('valid');
            setMessage('Authentic ID Verified');
          } catch (e: any) {
            setStatus('error');
            setMessage(e?.message || 'Scan error');
          }
        };
        raf = requestAnimationFrame(tick);
      })
      .catch((e) => {
        setStatus('error');
        setMessage(e.message || 'Camera error');
      });
    return () => {
      cancelAnimationFrame(raf);
      const v = videoRef.current;
      const s = v?.srcObject as MediaStream | null;
      s?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
          <div className="flex items-center gap-2 text-white/70">
            <Camera className="h-5 w-5" />
            <span>Webcam Scanner</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-6">
            {status === 'valid' && (
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-400" />
                <h2 className="text-white text-[24px]">Identity verified successfully</h2>
              </div>
            )}
            {status === 'invalid' && (
              <div className="flex items-center gap-3">
                <XCircle className="h-8 w-8 text-red-400" />
                <h2 className="text-white text-[24px]">Invalid QR</h2>
              </div>
            )}
            {status === 'expired' && (
              <div className="flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-amber-400" />
                <h2 className="text-white text-[24px]">Expired QR</h2>
              </div>
            )}
            {status === 'scanning' && (
              <div className="flex items-center gap-3">
                <Camera className="h-8 w-8 text-white" />
                <h2 className="text-white text-[24px]">Scanning QR...</h2>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-red-400" />
                <h2 className="text-white text-[24px]">Scan error</h2>
              </div>
            )}
          </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-white/20 bg-black/20 p-3">
          <video ref={videoRef} className="w-full rounded-xl" playsInline muted />
          <canvas ref={canvasRef} className="hidden" />
        </div>

        <div className="mt-6">
          <p className="text-white/80">{message}</p>
        </div>

        <div className="mt-8 flex items-center gap-4">
          {status === 'valid' && (
            <button
              onClick={handleContinue}
              disabled={isGenerating}
              className="h-14 rounded-xl bg-amber-400 px-10 text-blue-900 transition-all duration-300 hover:scale-105 hover:bg-amber-300 hover:shadow-2xl text-[18px] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Generating...</span>
                </div>
              ) : (
                'Continue'
              )}
            </button>
          )}
          <button
            onClick={() => window.location.reload()}
            className="h-14 rounded-xl bg-white/10 px-10 text-white border border-white/20 transition-all duration-300 hover:bg-white/20 text-[18px]"
          >
            Retry
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
