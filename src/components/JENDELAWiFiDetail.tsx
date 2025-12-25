import { ArrowLeft, CheckCircle, Wifi, MapPin, Clock, Smartphone } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface JENDELAWiFiDetailProps {
  onBack: () => void;
}

export function JENDELAWiFiDetail({ onBack }: JENDELAWiFiDetailProps) {
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
              <Wifi className="h-10 w-10 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-green-400/20 px-3 py-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-green-400">Available Now</span>
              </div>
              <h2 className="mb-3 text-white text-[20px]">
                JENDELA Community WiFi
              </h2>
              <p className="text-lg text-white/70 text-[15px] -mt-1">
                Free high-speed internet at public hotspots nationwide
              </p>
            </div>
          </div>

          {/* Service Details */}
          <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">What You Get</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs text-white/50 mb-2">Speed</p>
                <p className="text-white text-[28px]">30</p>
                <p className="text-white/60">Mbps</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-xs text-white/50 mb-2">Data Limit</p>
                <p className="text-white text-[28px]">∞</p>
                <p className="text-white/60">Unlimited</p>
              </div>
              <div className="rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-center">
                <p className="text-xs text-white/50 mb-2">Cost</p>
                <p className="text-green-400 text-[28px]">FREE</p>
                <p className="text-green-400/80">Always</p>
              </div>
            </div>
          </div>

          {/* Nearby Locations */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Nearby WiFi Locations (15 spots)</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Perpustakaan Awam Selangor</p>
                  <p className="text-sm text-white/60">0.8 km away • Open 9 AM - 9 PM</p>
                </div>
                <div className="rounded-full bg-green-400/20 px-3 py-1">
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Dewan Komuniti Taman Megah</p>
                  <p className="text-sm text-white/60">1.2 km away • Open 24/7</p>
                </div>
                <div className="rounded-full bg-green-400/20 px-3 py-1">
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Pejabat Pos Shah Alam</p>
                  <p className="text-sm text-white/60">1.5 km away • Open 8 AM - 5 PM</p>
                </div>
                <div className="rounded-full bg-green-400/20 px-3 py-1">
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Balai Raya Seksyen 7</p>
                  <p className="text-sm text-white/60">2.1 km away • Open 24/7</p>
                </div>
                <div className="rounded-full bg-green-400/20 px-3 py-1">
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-white">Masjid An-Nur Shah Alam</p>
                  <p className="text-sm text-white/60">2.4 km away • Open 5 AM - 11 PM</p>
                </div>
                <div className="rounded-full bg-green-400/20 px-3 py-1">
                  <span className="text-xs text-green-400">Online</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-white/60">+ 10 more locations within 3km</p>
            </div>
          </div>

          {/* How to Connect */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">How to Connect</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Look for "JENDELA WiFi" network</p>
                  <p className="text-sm text-white/60">Available at all designated public locations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Connect to the network</p>
                  <p className="text-sm text-white/60">No password required</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Accept terms and conditions</p>
                  <p className="text-sm text-white/60">One-time setup, then auto-connect</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">4</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Start browsing!</p>
                  <p className="text-sm text-white/60">Enjoy unlimited free internet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best For */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">What You Can Do</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white">Video calls</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white">Online classes</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white">HD streaming</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-white">File downloads</span>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
            <div className="flex items-start gap-3">
              <Smartphone className="h-5 w-5 text-blue-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white mb-2">No Registration Required</h4>
                <p className="text-white/70">
                  JENDELA WiFi is free for all Malaysians. No login, no data caps, no hidden charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}