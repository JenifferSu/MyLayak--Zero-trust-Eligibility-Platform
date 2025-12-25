import { ArrowLeft, CheckCircle, ShoppingBasket, UtensilsCrossed, Apple, Package } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface FoodAssistanceProps {
  onBack: () => void;
  onDetailClick: (detailType: 'agro-madani' | 'menu-rahmah') => void;
}

export function FoodAssistance({ onBack, onDetailClick }: FoodAssistanceProps) {
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
          <h1 className="text-white">Food Assistance Programs</h1>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Title Card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <h2 className="mb-4 text-white text-[28px]">
              Food Support & Subsidy
            </h2>
            <div className="flex items-center gap-2 text-white/80">
              <span className="rounded-lg bg-green-400/20 px-3 py-1 text-sm text-green-400 text-[15px]">
                B40 Household
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
                <h3 className="text-white text-[20px]">Active Food Programs</h3>
                <p className="text-sm text-green-400 text-[15px]">Monthly food support for your household</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Agro Madani */}
              <button
                onClick={() => onDetailClick('agro-madani')}
                className="w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <ShoppingBasket className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">Agro Madani Food Basket</h4>
                      <p className="text-sm text-white/60 text-[15px]">Monthly grocery essentials package</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Active</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60 text-[15px] mb-3">
                    <span className="text-green-400">Collection:</span> Monthly at designated Agro Madani centers
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-white/50">Package Value</p>
                      <p className="text-white">RM 150 worth</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-xs text-white/50">Your Cost</p>
                      <p className="text-green-400">FREE</p>
                    </div>
                  </div>
                </div>
              </button>

              {/* Menu Rahmah */}
              <button
                onClick={() => onDetailClick('menu-rahmah')}
                className="w-full rounded-2xl border border-white/20 bg-white/5 p-6 text-left transition-all duration-300 hover:scale-[1.02] hover:border-green-400/50 hover:bg-white/10"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <UtensilsCrossed className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">Menu Rahmah</h4>
                      <p className="text-sm text-white/60 text-[15px]">Subsidized meals at participating restaurants</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-green-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-xs text-green-400 text-[14px]">Available</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="mb-3 flex gap-4">
                    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2">
                      <p className="text-xs text-white/50">Set Meal Price</p>
                      <p className="text-white">RM 5.00</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2">
                      <p className="text-xs text-white/50">Typical Price</p>
                      <p className="text-white/60 line-through">RM 12.00</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/60">
                    <span className="text-green-400">Network:</span> 2,500+ restaurants nationwide
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="rounded-3xl border border-amber-400/30 bg-white/10 p-8 shadow-xl backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/20">
                <div className="h-3 w-3 rounded-full bg-amber-400" />
              </div>
              <div>
                <h3 className="text-white text-[20px]">Additional Food Support</h3>
                <p className="text-sm text-amber-400 text-[15px]">Seasonal and emergency assistance</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Rahmah Sales */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Package className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">Rahmah Sales Program</h4>
                      <p className="text-sm text-white/60">Monthly sales with discounted essential items</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    <span className="text-xs text-amber-400 text-[14px]">Eligible</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60">
                    <span className="text-amber-400">Items:</span> Rice, cooking oil, flour, sugar, chicken, eggs (up to 40% discount)
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    <span className="text-amber-400">Schedule:</span> First weekend of every month
                  </p>
                </div>
              </div>

              {/* Fresh Produce Voucher */}
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Apple className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-[18px]">Fresh Produce Voucher</h4>
                      <p className="text-sm text-white/60">RM 50 monthly voucher for fruits & vegetables</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    <span className="text-xs text-amber-400 text-[14px]">Pending Rollout</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-white/60">
                    <span className="text-amber-400">Status:</span> Program launching in Q1 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <h4 className="mb-3 text-white text-[18px]">How to Redeem</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>• Agro Madani: Show your MyKad at collection centers</p>
              <p>• Menu Rahmah: Request "Menu Rahmah" at participating outlets</p>
              <p>• Rahmah Sales: Check announcements for nearby locations</p>
            </div>
            <p className="mt-4 text-white/60 text-center">
              All programs are auto-verified through your B40 household status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}