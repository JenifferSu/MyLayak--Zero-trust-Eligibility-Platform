import { ArrowLeft, CheckCircle, XCircle, Heart, Home, Utensils, Phone } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface SeniorCareProgramProps {
  onBack: () => void;
}

export function SeniorCareProgram({ onBack }: SeniorCareProgramProps) {
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
          <h1 className="text-white">Senior Care Services</h1>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl">
          {/* Not Eligible Message */}
          <div className="rounded-3xl border border-red-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-400/20">
                <XCircle className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h2 className="text-white text-[28px]">
                  Senior Care Program
                </h2>
                <p className="text-red-400 text-[18px]">Not Eligible - Age Requirement</p>
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="mb-8 rounded-2xl border border-red-400/20 bg-red-400/5 p-6">
              <h3 className="mb-4 text-white text-[20px]">Eligibility Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <XCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                  <div className="flex-1">
                    <p className="text-white">Minimum Age: 60 years old</p>
                    <p className="text-sm text-red-400">You are currently under the required age</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Services (Preview) */}
            <div className="mb-6">
              <h3 className="mb-4 text-white text-[20px]">Services Available for Seniors</h3>
              <p className="mb-4 text-white/60">The following services will be available when you meet the age requirement:</p>
              
              <div className="space-y-4">
                {/* Home Care Support */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-60">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Home className="h-5 w-5 text-white/70" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[18px]">Home Care Support</h4>
                      <p className="text-sm text-white/60 text-[15px]">Weekly visits from trained caregivers</p>
                      <div className="mt-2 text-sm text-white/50">
                        Includes: Health monitoring, medication assistance, daily living support
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meal Delivery */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-60">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Utensils className="h-5 w-5 text-white/70" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[18px]">Subsidized Meal Delivery</h4>
                      <p className="text-sm text-white/60 text-[15px]">Nutritious meals delivered daily</p>
                      <div className="mt-2 text-sm text-white/50">
                        Cost: RM 3.00 per meal (regular price: RM 12.00)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Response */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-60">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Phone className="h-5 w-5 text-white/70" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[18px]">24/7 Emergency Response</h4>
                      <p className="text-sm text-white/60 text-[15px]">Personal emergency alert system</p>
                      <div className="mt-2 text-sm text-white/50">
                        FREE wearable device with one-touch emergency contact
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Activities */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-60">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Heart className="h-5 w-5 text-white/70" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-[18px]">Community Activity Center</h4>
                      <p className="text-sm text-white/60 text-[15px]">Access to senior activity programs</p>
                      <div className="mt-2 text-sm text-white/50">
                        Activities: Exercise classes, social events, health seminars
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Notice */}
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
              <p className="text-white/80 text-center">
                Your eligibility will be automatically updated when you reach 60 years old. No application needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
