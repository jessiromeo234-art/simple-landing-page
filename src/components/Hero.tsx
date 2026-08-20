import React from 'react';
import { ArrowRight, CheckCircle2, Leaf, Sparkles, ShieldCheck, Droplet, SunMedium } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onSignupClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSignupClick }) => {
  return (
    <section id="hero-section" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F3F0E8] via-[#F8F7F3] to-[#F8F7F3]">
      {/* Subtle organic background foliage pattern (CSS radial gradients) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D5A27]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#8FA382]/10 rounded-full blur-2xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eco Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5ECE3] border border-[#2D5A27]/15 text-[#244E20] text-xs font-semibold uppercase tracking-wider">
              <Leaf className="w-3.5 h-3.5 text-[#2D5A27]" />
              <span>100% Circular & Peat-Free Growing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#19321C] tracking-tight leading-[1.12]">
              Cultivate abundance, <br />
              <span className="italic font-normal text-[#2D5A27]">without leaving a footprint.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#3D5240] max-w-2xl font-light leading-relaxed">
              We design zero-waste, plastic-free tools, ancient terracotta watering vessels, and biological living soils crafted to regenerate earth from balcony to backyard.
            </p>

            {/* Key Guarantees Bullet Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#2A462C] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                <span>Zero Virgin Plastics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#2A462C] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                <span>100% Peat-Free Soils</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#2A462C] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27] shrink-0" />
                <span>Lifetime Heirloom Tools</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-explore-products-btn"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2D5A27] hover:bg-[#22471e] text-white font-medium text-base shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <span>Shop Sustainable Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-free-guide-btn"
                onClick={onSignupClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F3F6F2] text-[#244E20] border border-[#2D5A27]/25 font-medium text-base transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#437A3D]" />
                <span>Get Free 2026 Planting Guide</span>
              </button>
            </div>

            {/* Trust Quote / Stats */}
            <div className="pt-6 border-t border-[#2D5A27]/10 flex items-center gap-6 text-xs text-[#506653]">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#3B6636] text-white flex items-center justify-center text-[10px] font-bold">4.9</span>
                </div>
                <span>Rated <strong>4.9 / 5</strong> by 3,400+ regenerators</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#8FA382]" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                <span>Carbon Neutral Shipping</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#2D5A27]/15 bg-white p-3 sm:p-4">
              
              {/* Main Image with floating badges */}
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80"
                  alt="Organic sustainable gardener harvesting herbs"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122314]/80 via-transparent to-transparent" />
                
                {/* Overlay Badge Top */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 text-[#19321C] text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <SunMedium className="w-3.5 h-3.5 text-amber-600" />
                  <span>Spring 2026 Circular Release</span>
                </div>

                {/* Overlay Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#B5D6B2] font-semibold">Featured Spotlight</p>
                  <h3 className="text-lg font-serif font-bold text-white leading-snug">Terracotta Subterranean Olla Vessel</h3>
                  <p className="text-xs text-[#E1EFE0] mt-0.5">Naturally saves 70% of watering volume through porous root-tension suction.</p>
                </div>
              </div>

              {/* Stat Highlight Pill below image */}
              <div className="mt-3.5 grid grid-cols-2 gap-2 bg-[#F5F8F4] p-3 rounded-xl border border-[#2D5A27]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2D5A27] text-white flex items-center justify-center shrink-0">
                    <Droplet className="w-4 h-4 text-[#A8D5A2]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#19321C]">-70% Water</div>
                    <div className="text-[11px] text-[#556F57]">Zero runoff waste</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#3A6B34] text-white flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-[#C2E8BC]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#19321C]">0g Plastic</div>
                    <div className="text-[11px] text-[#556F57]">100% Home compostable</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Decorative organic tag floating */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#1F3D21] text-white px-4 py-3 rounded-xl shadow-lg border border-[#3E6E40] items-center gap-3 animate-bounce-slight">
              <div className="w-7 h-7 rounded-full bg-[#3B6636] flex items-center justify-center text-xs font-bold text-white">
                🌱
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-[#A3CBA0] font-semibold">Impact Guarantee</p>
                <p className="text-xs font-medium">100% Peatland bog protection</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
