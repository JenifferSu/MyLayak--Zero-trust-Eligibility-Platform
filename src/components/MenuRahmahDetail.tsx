import { ArrowLeft, CheckCircle, UtensilsCrossed, MapPin, DollarSign, Store } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface MenuRahmahDetailProps {
  onBack: () => void;
}

export function MenuRahmahDetail({ onBack }: MenuRahmahDetailProps) {
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
              <UtensilsCrossed className="h-10 w-10 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-green-400/20 px-3 py-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-green-400">Available Nationwide</span>
              </div>
              <h2 className="mb-3 text-white">
                Menu Rahmah
              </h2>
              <p className="text-lg text-white/70">
                Affordable RM 5 set meals at participating restaurants
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Fixed Price Meals</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-xs text-white/50 mb-2">Menu Rahmah Price</p>
                <p className="text-green-400 text-[42px]">RM 5</p>
                <p className="text-white/60">Per complete set meal</p>
              </div>
              <div className="flex-1 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-xs text-white/50 mb-2">Typical Restaurant Price</p>
                <p className="text-white/60 line-through text-[32px]">RM 12</p>
                <p className="text-white/60">For similar meal</p>
              </div>
              <div className="flex-1 rounded-xl border border-green-400/20 bg-green-400/10 p-6 text-center">
                <p className="text-xs text-white/50 mb-2">You Save</p>
                <p className="text-green-400 text-[32px]">RM 7</p>
                <p className="text-green-400">58% discount</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Typical Set Meal Includes</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Main dish (protein + vegetables)</p>
                  <p className="text-sm text-white/60">Chicken, fish, or beef with vegetables</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Steamed white rice or noodles</p>
                  <p className="text-sm text-white/60">Generous portion</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Drinking water</p>
                  <p className="text-sm text-white/60">Free plain water included</p>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/5 p-3">
              <p className="text-sm text-white/70">
                <span className="text-amber-400">Note:</span> Menu varies by restaurant. All meals meet minimum nutrition standards.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">How to Order</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Visit any participating restaurant</p>
                  <p className="text-sm text-white/60">Look for "Menu Rahmah" signage at entrance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Ask for "Menu Rahmah"</p>
                  <p className="text-sm text-white/60">Available for dine-in and takeaway</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Pay only RM 5 per set</p>
                  <p className="text-sm text-white/60">No registration or ID required</p>
                </div>
              </div>
            </div>
          </div>

          {/* Network Coverage */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Participating Outlets</h3>
            <div className="mb-4 rounded-xl border border-green-400/20 bg-green-400/5 p-4 text-center">
              <p className="text-green-400 text-[32px]">2,500+</p>
              <p className="text-white/60">Restaurants nationwide</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Store className="h-5 w-5 text-green-400" />
                <span className="text-white">Mamak restaurants</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Store className="h-5 w-5 text-green-400" />
                <span className="text-white">Chinese kopitiams</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Store className="h-5 w-5 text-green-400" />
                <span className="text-white">Nasi kandar shops</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Store className="h-5 w-5 text-green-400" />
                <span className="text-white">Mixed rice stalls</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Store className="h-5 w-5 text-green-400" />
                <span className="text-white">Fast food chains</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <Store className="h-5 w-5 text-green-400" />
                <span className="text-white">Cafeterias</span>
              </div>
            </div>
          </div>

          {/* Nearby Locations */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Nearby Participating Restaurants</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-white">Restoran Nasi Kandar Al-Bismi</p>
                  <p className="text-sm text-white/60">0.5 km • Seksyen 7, Shah Alam</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-white">Warung Pak Din</p>
                  <p className="text-sm text-white/60">0.8 km • Seksyen 15, Shah Alam</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-white">MyBurgerLab (Shah Alam)</p>
                  <p className="text-sm text-white/60">1.2 km • Seksyen 13, Shah Alam</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <div className="flex-1">
                  <p className="text-white">Restoran Yong Tau Foo</p>
                  <p className="text-sm text-white/60">1.5 km • Seksyen 24, Shah Alam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="flex items-start gap-3">
              <DollarSign className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">Available to All Malaysians</h4>
                <p className="text-white/70">
                  Menu Rahmah is open to everyone, regardless of income level. No verification required - just order and pay RM 5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
