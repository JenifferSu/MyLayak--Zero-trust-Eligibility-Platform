import { ArrowLeft, CheckCircle, Laptop, ShoppingBag, FileText, AlertCircle } from 'lucide-react';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

interface StudentDeviceDetailProps {
  onBack: () => void;
}

export function StudentDeviceDetail({ onBack }: StudentDeviceDetailProps) {
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
              <Laptop className="h-10 w-10 text-green-400" />
            </div>
            <div className="flex-1">
              <div className="mb-2 inline-flex items-center gap-2 rounded-lg bg-green-400/20 px-3 py-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm text-green-400">Voucher Ready</span>
              </div>
              <h2 className="mb-3 text-white text-[20px]">
                Pakej Peranti Siswa (Student Device Package)
              </h2>
              <p className="text-lg text-white/70 text-[15px] -mt-1">
                Government-subsidized laptop program for B40 students
              </p>
            </div>
          </div>

          {/* Subsidy Breakdown */}
          <div className="mb-8 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Subsidy Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-white/70">Market Price (Retail)</span>
                <span className="text-white text-[20px]">RM 2,500</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-green-400/20 bg-green-400/10 p-4">
                <span className="text-white/70">Government Subsidy</span>
                <span className="text-green-400 text-[20px]">- RM 2,050</span>
              </div>
              <div className="h-px bg-white/20" />
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-white">Your Cost</span>
                <span className="text-white text-[28px]">RM 450</span>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-green-400/10 p-3 text-center">
              <p className="text-green-400">You save 82% (RM 2,050)</p>
            </div>
          </div>

          {/* Device Specifications */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Device Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Processor</p>
                <p className="text-white">Intel Core i5 or AMD Ryzen 5</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Memory (RAM)</p>
                <p className="text-white">8GB DDR4</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Storage</p>
                <p className="text-white">256GB SSD</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Display</p>
                <p className="text-white">14" Full HD (1920x1080)</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Operating System</p>
                <p className="text-white">Windows 11 Home</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/50 mb-1">Warranty</p>
                <p className="text-white">2 years manufacturer</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-sm text-white/60">
                <span className="text-green-400">Includes:</span> Microsoft Office 365 Student License (4 years)
              </p>
            </div>
          </div>

          {/* How to Redeem */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">How to Redeem Your Voucher</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Visit participating retailers</p>
                  <p className="text-sm text-white/60">Courts, Harvey Norman, Dell Official Store, HP Official Store</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Show your MyKad and student ID</p>
                  <p className="text-sm text-white/60">Your eligibility will be verified on the spot</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Choose your device from approved models</p>
                  <p className="text-sm text-white/60">Multiple brands and configurations available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/20 shrink-0">
                  <span className="text-green-400">4</span>
                </div>
                <div className="flex-1">
                  <p className="text-white mb-1">Pay only RM 450</p>
                  <p className="text-sm text-white/60">Government subsidy applied automatically</p>
                </div>
              </div>
            </div>
          </div>

          {/* Participating Retailers */}
          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-white text-[20px]">Participating Retailers</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <ShoppingBag className="h-5 w-5 text-green-400" />
                <span className="text-white">Courts Malaysia</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <ShoppingBag className="h-5 w-5 text-green-400" />
                <span className="text-white">Harvey Norman</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <ShoppingBag className="h-5 w-5 text-green-400" />
                <span className="text-white">Dell Official Store</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <ShoppingBag className="h-5 w-5 text-green-400" />
                <span className="text-white">HP Official Store</span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="text-white">Important Information</h4>
                <ul className="space-y-1 text-sm text-white/70">
                  <li>• Voucher valid for current academic year only</li>
                  <li>• One device per student (lifetime limit)</li>
                  <li>• Device must be used for educational purposes</li>
                  <li>• Cannot be resold within 2 years of purchase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}