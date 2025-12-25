import { ArrowLeft, CheckCircle, Train, MapPin, Calendar, CreditCard } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface KTMStudentPassDetailProps {
  onBack: () => void;
}

export function KTMStudentPassDetail({ onBack }: KTMStudentPassDetailProps) {
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
              <Train className="h-10 w-10 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-green-400/20 px-3 py-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-green-400">Active</span>
              </div>
              <h2 className="mb-3 text-white">
                KTM Komuter Student Pass
              </h2>
              <p className="text-lg text-white/70">
                Unlimited monthly pass for all KTMB Komuter services
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Monthly Pass Pricing</h3>
            <div className="flex items-end gap-4">
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Student Rate</p>
                <p className="text-white text-[32px]">RM 40</p>
                <p className="text-xs text-green-400">60% discount</p>
              </div>
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Standard Rate</p>
                <p className="text-white/60 line-through text-[24px]">RM 100</p>
                <p className="text-xs text-white/50">Adult monthly pass</p>
              </div>
              <div className="flex-1 rounded-xl border border-green-400/20 bg-green-400/10 p-4">
                <p className="text-xs text-white/50 mb-1">Monthly Savings</p>
                <p className="text-green-400 text-[24px]">RM 60</p>
                <p className="text-xs text-green-400">Every month</p>
              </div>
            </div>
          </div>

          {/* Coverage */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">What's Included</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Unlimited rides on all KTM Komuter routes</p>
                  <p className="text-sm text-white/60">Port Klang, Batu Caves, Rawang, Tanjung Malim lines</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Valid for entire calendar month</p>
                  <p className="text-sm text-white/60">Activate anytime, expires end of month</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Integrated with Touch 'n Go card</p>
                  <p className="text-sm text-white/60">Easy tap-in, tap-out access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Popular Student Routes</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-white">KL Sentral ↔ Bangi (UKM)</p>
                  <p className="text-sm text-white/60">35-40 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-white">KL Sentral ↔ Serdang (UPM)</p>
                  <p className="text-sm text-white/60">25-30 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-white">Rawang ↔ KL Sentral</p>
                  <p className="text-sm text-white/60">45 minutes</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Purchase */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">How to Purchase</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Visit any KTM station counter</p>
                  <p className="text-sm text-white/60">Bring your MyKad and student ID</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Request "Student Monthly Pass"</p>
                  <p className="text-sm text-white/60">Your eligibility will be verified automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Pay RM 40 and receive your pass</p>
                  <p className="text-sm text-white/60">Valid immediately until end of month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Renewal Info */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">Monthly Renewal</h4>
                <p className="text-white/70">
                  Pass must be renewed each month. Purchase before the 1st to avoid disruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
