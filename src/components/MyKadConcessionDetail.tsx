import { ArrowLeft, CheckCircle, CreditCard, Bus, Train as TrainIcon, Zap } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface MyKadConcessionDetailProps {
  onBack: () => void;
}

export function MyKadConcessionDetail({ onBack }: MyKadConcessionDetailProps) {
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
          <h1 className="text-white">Service Details</h1>
        </div>

        {/* Main Card */}
        <div className="mx-auto max-w-4xl rounded-3xl border border-green-400/20 bg-green-900/10 p-8 shadow-xl backdrop-blur-xl">
          {/* Header Section */}
          <div className="mb-8 flex items-start gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-400/20">
              <CreditCard className="h-10 w-10 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-green-400/20 px-3 py-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-green-400">Active</span>
              </div>
              <h2 className="mb-3 text-white">
                MyKad Concession (Student)
              </h2>
              <p className="text-lg text-white/70">
                50% discount on all RapidKL public transport services
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">How It Works</h3>
            <div className="space-y-3 text-white/80">
              <p>• Simply tap your MyKad at any RapidKL fare gate or card reader</p>
              <p>• Student discount is automatically applied</p>
              <p>• No need for a separate concession card</p>
              <p>• Your student status is verified through MOHE database</p>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">What's Covered</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <TrainIcon className="h-6 w-6 shrink-0 text-green-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">Rail Services (50% off)</h4>
                  <p className="text-sm text-white/60">LRT Kelana Jaya, LRT Ampang/Sri Petaling, MRT Kajang, Monorail</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Bus className="h-6 w-6 shrink-0 text-green-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">Bus Services (50% off)</h4>
                  <p className="text-sm text-white/60">All RapidKL bus routes across Klang Valley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Example */}
          <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Pricing Example</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Route</p>
                <p className="text-white">KL Sentral → KLCC</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Standard Fare</p>
                <p className="text-white/60 line-through">RM 2.50</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Student Fare</p>
                <p className="text-green-400">RM 1.25</p>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Your Eligibility</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                <span className="text-white/80">Verified as full-time university student</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                <span className="text-white/80">Valid until end of current academic year</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                <span className="text-white/80">Automatically renews each semester</span>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">No Action Required</h4>
                <p className="text-white/70">
                  This benefit is already active on your MyKad. Just tap and go!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
