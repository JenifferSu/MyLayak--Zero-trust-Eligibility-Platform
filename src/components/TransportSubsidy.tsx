import { ArrowLeft, CheckCircle, XCircle, Bus, Train, CreditCard } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface TransportSubsidyProps {
  onBack: () => void;
  onDetailClick: (detailType: 'mykad-concession' | 'ktm-student-pass') => void;
}

export function TransportSubsidy({ onBack, onDetailClick }: TransportSubsidyProps) {
  return (
    <div className="min-h-screen w-screen overflow-hidden relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={backgroundImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-12">
        {/* Header */}
        <div className="mx-auto max-w-4xl mb-8 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all hover:bg-white/20"
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
          <h1 className="text-white">Transport Subsidy Programs</h1>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Title Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-4 text-white text-[28px]">
              Public Transportation Subsidies
            </h2>
            <div className="flex items-center gap-2 text-white/80">
              <span className="rounded-lg bg-green-400/20 px-3 py-1 text-sm text-green-400 text-[15px]">
                B40 Household
              </span>
              <span className="text-white/60">•</span>
              <span className="rounded-lg bg-amber-400/20 px-3 py-1 text-sm text-amber-400 text-[15px]">
                Active Student
              </span>
            </div>
          </div>

          {/* Active Subsidies */}
          <div className="rounded-3xl border border-green-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/20">
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div>
                <h3 className="text-white text-[20px]">Active Subsidies</h3>
                <p className="text-sm text-green-400 text-[15px]">You're eligible for reduced public transport fares</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* MyKad Concession Card */}
              <button
                onClick={() => onDetailClick('mykad-concession')}
                className="w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <CreditCard className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">MyKad Concession (Student)</h4>
                      <p className="text-sm text-white/60 text-[15px]">50% discount on all RapidKL services</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Active</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60 text-[15px]">
                    <span className="text-green-400">Coverage:</span> LRT, MRT, Monorail, Bus (RapidKL Network)
                  </p>
                </div>
              </button>

              {/* KTM Komuter Student Pass */}
              <button
                onClick={() => onDetailClick('ktm-student-pass')}
                className="w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Train className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">KTM Komuter Student Pass</h4>
                      <p className="text-sm text-white/60 text-[15px]">Unlimited monthly pass for KTMB services</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-white/50">Monthly Rate</p>
                    <p className="text-white">RM 40.00</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Standard Rate</p>
                    <p className="text-white/60 line-through">RM 100.00</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Upcoming Benefits */}
          <div className="rounded-3xl border border-amber-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/20">
                <div className="h-3 w-3 rounded-full bg-amber-400" />
              </div>
              <div>
                <h3 className="text-white text-[20px]">Upcoming Benefits</h3>
                <p className="text-sm text-amber-400 text-[15px]">Available when you graduate</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* B40 Adult Pass */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Bus className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">B40 Adult Monthly Pass</h4>
                      <p className="text-sm text-white/60">Unlimited travel on integrated transit</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    <span className="text-xs text-amber-400 text-[14px]">Eligible (Non-Student)</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60">
                    Will be automatically activated when student status expires
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <p className="text-white/80 text-center">
              Your eligibility is auto-verified through MOHE & LHDN. No additional documents needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}