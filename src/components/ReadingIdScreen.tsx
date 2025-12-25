import { useEffect, useState } from 'react';
import { CreditCard, QrCode, CheckCircle, AlertTriangle } from 'lucide-react';
import type { LoginMethod } from '../App';

interface ReadingIdScreenProps {
  loginMethod: LoginMethod;
  onComplete: () => void;
}

type QRScanState = 'idle' | 'scanning' | 'valid' | 'invalid';

export function ReadingIdScreen({ loginMethod, onComplete }: ReadingIdScreenProps) {
  const [qrScanState, setQrScanState] = useState<QRScanState>('idle');

  useEffect(() => {
    if (loginMethod === 'mykad') {
      // MyKad flow - simple 2 second delay
      const timer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    } else if (loginMethod === 'qr') {
      // QR Code flow - multi-step process
      // Step 1: Idle - "Scan your Digital ID" (1 second)
      const idleTimer = setTimeout(() => {
        setQrScanState('scanning');
      }, 1000);

      // Step 2: Scanning - "Verifying secure tag…" (2 seconds)
      const scanningTimer = setTimeout(() => {
        // Simulate valid result (you can add logic for invalid state if needed)
        setQrScanState('valid');
      }, 3000);

      // Step 3: Valid result - "Authentic ID Verified" (1.5 seconds before proceeding)
      const validTimer = setTimeout(() => {
        onComplete();
      }, 4500);

      return () => {
        clearTimeout(idleTimer);
        clearTimeout(scanningTimer);
        clearTimeout(validTimer);
      };
    }
  }, [onComplete, loginMethod]);

  const getQRContent = () => {
    switch (qrScanState) {
      case 'idle':
        return {
          icon: <QrCode className="h-32 w-32 text-amber-400" />,
          title: 'Scan your Digital ID',
          showAnimation: true,
          bgColor: 'bg-amber-400'
        };
      case 'scanning':
        return {
          icon: <QrCode className="h-32 w-32 text-blue-400" />,
          title: 'Verifying secure tag…',
          showAnimation: true,
          bgColor: 'bg-blue-400'
        };
      case 'valid':
        return {
          icon: <CheckCircle className="h-32 w-32 text-green-400" />,
          title: 'Authentic ID Verified',
          showAnimation: false,
          bgColor: 'bg-green-400'
        };
      case 'invalid':
        return {
          icon: <AlertTriangle className="h-32 w-32 text-red-400" />,
          title: 'Fake or Unverified QR',
          showAnimation: false,
          bgColor: 'bg-red-400'
        };
    }
  };

  // For MyKad flow
  if (loginMethod === 'mykad') {
    return (
      <div className="flex min-h-screen items-center justify-center p-12">
        <div className="w-full max-w-2xl">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-16 text-center shadow-2xl backdrop-blur-xl">
            {/* Animation Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <CreditCard className="h-32 w-32 text-amber-400" />
                {/* Pulsing rings animation */}
                <div className="absolute inset-0 animate-ping rounded-full bg-amber-400/20" />
                <div className="absolute inset-0 animate-pulse rounded-full bg-amber-400/10" />
              </div>
            </div>

            {/* Text */}
            <h2 className="mb-4 text-white text-[20px]">
              Reading your MyDigital ID...
            </h2>
            
            {/* Loading indicator */}
            <div className="mx-auto mt-8 flex w-64 justify-center gap-2">
              <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.3s]" />
              <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400 [animation-delay:-0.15s]" />
              <div className="h-3 w-3 animate-bounce rounded-full bg-amber-400" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For QR code flow
  const content = getQRContent();

  return (
    <div className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-16 text-center shadow-2xl backdrop-blur-xl">
          {/* Animation Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {content.icon}
              {/* Pulsing rings animation - only show for idle and scanning states */}
              {content.showAnimation && (
                <>
                  <div className={`absolute inset-0 animate-ping rounded-full ${content.bgColor}/20`} />
                  <div className={`absolute inset-0 animate-pulse rounded-full ${content.bgColor}/10`} />
                </>
              )}
            </div>
          </div>

          {/* Text */}
          <h2 className="mb-4 text-white text-[20px]">
            {content.title}
          </h2>
          
          {/* Loading indicator - only show for idle and scanning states */}
          {content.showAnimation && (
            <div className="mx-auto mt-8 flex w-64 justify-center gap-2">
              <div className={`h-3 w-3 animate-bounce rounded-full ${content.bgColor} [animation-delay:-0.3s]`} />
              <div className={`h-3 w-3 animate-bounce rounded-full ${content.bgColor} [animation-delay:-0.15s]`} />
              <div className={`h-3 w-3 animate-bounce rounded-full ${content.bgColor}`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}