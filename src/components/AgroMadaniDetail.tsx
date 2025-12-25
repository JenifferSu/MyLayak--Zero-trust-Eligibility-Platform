import { ArrowLeft, CheckCircle, ShoppingBasket, MapPin, Calendar, Package } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface AgroMadaniDetailProps {
  onBack: () => void;
}

export function AgroMadaniDetail({ onBack }: AgroMadaniDetailProps) {
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
              <ShoppingBasket className="h-10 w-10 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-green-400/20 px-3 py-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-green-400">Active - Monthly Benefit</span>
              </div>
              <h2 className="mb-3 text-white">
                Agro Madani Food Basket
              </h2>
              <p className="text-lg text-white/70">
                Monthly essential groceries package for B40 households
              </p>
            </div>
          </div>

          {/* Package Value */}
          <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Monthly Package</h3>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-6">
              <div>
                <p className="text-white/60 mb-1">Total Value</p>
                <p className="text-white text-[32px]">RM 150</p>
                <p className="text-sm text-white/60">worth of groceries</p>
              </div>
              <div className="h-16 w-px bg-white/20" />
              <div className="text-right">
                <p className="text-white/60 mb-1">Your Cost</p>
                <p className="text-green-400 text-[32px]">FREE</p>
                <p className="text-sm text-green-400">100% subsidy</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">What's in the Basket</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Rice (10kg)</p>
                  <p className="text-sm text-white/60">Local Grade A</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Cooking Oil (3kg)</p>
                  <p className="text-sm text-white/60">Palm oil</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Flour (2kg)</p>
                  <p className="text-sm text-white/60">All-purpose</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Sugar (2kg)</p>
                  <p className="text-sm text-white/60">White refined</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Eggs (30 pieces)</p>
                  <p className="text-sm text-white/60">Grade A</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Chicken (2kg)</p>
                  <p className="text-sm text-white/60">Frozen whole</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Milk Powder (900g)</p>
                  <p className="text-sm text-white/60">Full cream</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Package className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white">Salt (1kg)</p>
                  <p className="text-sm text-white/60">Iodized</p>
                </div>
              </div>
            </div>
          </div>

          {/* Collection Schedule */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Collection Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Calendar className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white mb-1">Next Collection Date</p>
                  <p className="text-white/60">1st - 7th of every month</p>
                  <p className="text-sm text-green-400 mt-2">Next: January 1-7, 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white mb-1">Nearest Collection Center</p>
                  <p className="text-white/60">Pusat Agro Madani Shah Alam</p>
                  <p className="text-sm text-white/50 mt-1">Seksyen 15, Shah Alam, Selangor</p>
                  <p className="text-sm text-green-400 mt-1">2.3 km from your address</p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Collect */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">How to Collect</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Visit the collection center during schedule</p>
                  <p className="text-sm text-white/60">Operating hours: 9 AM - 5 PM (weekdays), 9 AM - 1 PM (weekends)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Bring your MyKad</p>
                  <p className="text-sm text-white/60">Your B40 status will be verified automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Collect your basket</p>
                  <p className="text-sm text-white/60">One basket per household per month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Centers */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Other Collection Centers Nearby</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <span className="text-white/80">Pusat Agro Madani Klang</span>
                <span className="text-sm text-white/60">8.5 km</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <span className="text-white/80">Pusat Agro Madani Petaling Jaya</span>
                <span className="text-sm text-white/60">12.1 km</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <span className="text-white/80">Pusat Agro Madani Subang Jaya</span>
                <span className="text-sm text-white/60">15.3 km</span>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">Auto-Eligible</h4>
                <p className="text-white/70">
                  As a verified B40 household, you're automatically eligible. No application or registration required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
