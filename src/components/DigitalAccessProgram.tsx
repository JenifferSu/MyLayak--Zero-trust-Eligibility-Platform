import { ArrowLeft, CheckCircle, Wifi, Laptop, Smartphone, BookOpen } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface DigitalAccessProgramProps {
  onBack: () => void;
  onDetailClick: (detailType: 'student-device' | 'jendela-wifi') => void;
}

export function DigitalAccessProgram({ onBack, onDetailClick }: DigitalAccessProgramProps) {
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
          <h1 className="text-white">Digital Access Programs</h1>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Title Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-4 text-white text-[28px]">
              Internet & Device Assistance
            </h2>
            <div className="flex items-center gap-2 text-white/80">
              <span className="rounded-lg bg-green-400/20 px-3 py-1 text-sm text-green-400 text-[15px]">
                B40 Household
              </span>
              <span className="text-white/60">•</span>
              <span className="rounded-lg bg-blue-400/20 px-3 py-1 text-sm text-blue-400 text-[15px]">
                Regional Eligibility
              </span>
            </div>
          </div>

          {/* Active Programs */}
          <div className="rounded-3xl border border-green-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/20">
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div>
                <h3 className="text-white text-[20px]">Active Benefits</h3>
                <p className="text-sm text-green-400 text-[15px]">Free internet and device support programs</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Pakej Peranti Siswa */}
              <button
                onClick={() => onDetailClick('student-device')}
                className="w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Laptop className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">Pakej Peranti Siswa (Student Device)</h4>
                      <p className="text-sm text-white/60 text-[15px]">Subsidized laptop for tertiary students</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-white/50">Your Cost</p>
                    <p className="text-white">RM 450</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Market Price</p>
                    <p className="text-white/60 line-through">RM 2,500</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Subsidy</p>
                    <p className="text-green-400">RM 2,050 (82%)</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-sm text-white/60">
                    <span className="text-green-400">Status:</span> Voucher ready to redeem. Visit participating retailers.
                  </p>
                </div>
              </button>

              {/* JENDELA Wi-Fi */}
              <button
                onClick={() => onDetailClick('jendela-wifi')}
                className="w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Wifi className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">JENDELA Community WiFi</h4>
                      <p className="text-sm text-white/60 text-[15px]">Free high-speed internet access points</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Available</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60 text-[15px]">
                    <span className="text-green-400">Coverage:</span> 15 locations within 3km of your address
                  </p>
                  <div className="mt-3 flex gap-2">
                    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-xs text-white/50">Speed</p>
                      <p className="text-white">30 Mbps</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-xs text-white/50">Cost</p>
                      <p className="text-green-400">FREE</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Additional Support */}
          <div className="rounded-3xl border border-amber-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/20">
                <div className="h-3 w-3 rounded-full bg-amber-400" />
              </div>
              <div>
                <h3 className="text-white text-[20px]">Additional Support</h3>
                <p className="text-sm text-amber-400 text-[15px]">Optional programs you may be interested in</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Home Internet Subsidy */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Wifi className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">Home Internet Subsidy (Pakej Rahmah)</h4>
                      <p className="text-sm text-white/60">Discounted home broadband package</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    <span className="text-xs text-amber-400 text-[14px]">Eligible</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-white/50">Monthly Cost</p>
                    <p className="text-white">RM 30</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Speed</p>
                    <p className="text-white">100 Mbps</p>
                  </div>
                </div>
              </div>

              {/* Digital Literacy Training */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <BookOpen className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">Digital Skills Training</h4>
                      <p className="text-sm text-white/60">Free online courses and certifications</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    <span className="text-xs text-amber-400 text-[14px]">Open to All</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60">
                    Courses: Microsoft Office, Google Workspace, Coding Basics, Cybersecurity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <p className="text-white/80 text-center">
              Your eligibility is verified through household income profile. No personal data is shared with service providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}