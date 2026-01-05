import { useState } from 'react';
import { User, MapPin, Calendar, Flag, Heart, Home, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import type { MyKadData } from '../App';

interface MyKadDetailsProps {
  data: MyKadData | null;
  onContinue: () => void;
}

export function MyKadDetails({ data, onContinue }: MyKadDetailsProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!data) return null;

  const handleContinue = async () => {
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
      onContinue();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="border-b border-white/10 bg-black/20 px-6 py-4">
          <h2 className="flex items-center gap-3 text-xl font-bold text-white">
            <User className="h-6 w-6 text-amber-400" />
            MyKad Information
          </h2>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[140px_1fr] gap-6 p-6">

          {/* LEFT – Photo */}
          <div className="flex flex-col items-center gap-3">
            <div className="h-40 w-32 overflow-hidden rounded-xl border border-white/20 bg-black/40">
              {data.PhotoDataUrl ? (
                <img
                  src={data.PhotoDataUrl}
                  alt="MyKad"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-white/30">
                  <User />
                </div>
              )}
            </div>
            <span className="text-xs text-white/50">MyKad Photo</span>
          </div>

          {/* RIGHT – Info (single column, readable) */}
          <div className="flex flex-col gap-4 text-white">

            {/* IC */}
            <div className="rounded-lg bg-black/20 px-4 py-2">
              <div className="text-xs uppercase tracking-wider text-white/50">
                MyKad Number
              </div>
              <div className="font-mono text-lg font-bold tracking-widest text-amber-400">
                {data.IC}
              </div>
            </div>

            <InfoRow label="Full Name" value={data.Name} />
            <InfoRow label="Gender" value={data.Sex} />
            <InfoRow label="Date of Birth" value={data.BirthDate} />
            <InfoRow label="Place of Birth" value={data.BirthPlace} />
            <InfoRow label="Citizenship" value={data.Citizenship} />
            <InfoRow label="Race" value={data.Race} />
            <InfoRow label="Religion" value={data.Religion} />

            {/* Address */}
            <div className="rounded-lg bg-white/5 px-4 py-3">
              <div className="mb-1 flex items-center gap-2 text-sm text-white/50">
                <Home className="h-4 w-4" /> Address
              </div>
              <div className="leading-relaxed text-white">
                {[
                  data.Address1, 
                  data.Address2, 
                  data.Address3, 
                  data.Postcode, 
                  data.City, 
                  data.State
                ].filter(Boolean).join(', ')}
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end pt-2">
              <Button
                onClick={handleContinue}
                disabled={isGenerating}
                className="h-12 rounded-xl bg-amber-400 px-8 text-base font-semibold text-blue-900 hover:bg-amber-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Token...
                  </>
                ) : (
                  <>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable row */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/10 pb-1 text-sm">
      <span className="text-white/60">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}
