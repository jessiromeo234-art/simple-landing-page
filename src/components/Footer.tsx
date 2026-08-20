import React from 'react';
import { Sprout, Leaf, Heart, ArrowUp, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenSignup: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSignup }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#142A16] text-[#D8EADB] pt-16 pb-12 border-t border-[#234226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#234427]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-serif text-2xl font-bold">
              <div className="w-8 h-8 rounded-full bg-[#2D5A27] text-white flex items-center justify-center">
                <Sprout className="w-4 h-4 text-[#C4ECC0]" />
              </div>
              <span>Verdant<span className="text-[#64AB5E]">.</span></span>
            </div>
            <p className="text-xs sm:text-sm text-[#A0C4A4] leading-relaxed max-w-sm">
              We design zero-waste, plastic-free tools, ancient terracotta watering vessels, and living soil biology to help gardeners regenerate the earth from balcony to backyard.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#BEDBBE]">
              <span className="flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-[#64AB5E]" /> 100% Peat-Free
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#64AB5E]" /> Zero Virgin Plastic
              </span>
              <span>•</span>
              <span>1% For The Planet</span>
            </div>
          </div>

          {/* Quick links: Catalog */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sustainable Catalog
            </h4>
            <ul className="space-y-2 text-xs text-[#A2C7A6]">
              <li><a href="#products" className="hover:text-white transition-colors">Ancient Terracotta Ollas</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Peat-Free Coconut Seed Trays</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Heritage Ash & Recycled Tools</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Kitchen Bokashi Fermenters</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Native Pollinator Seeds</a></li>
            </ul>
          </div>

          {/* Quick links: Learn & Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Regenerative Guides
            </h4>
            <ul className="space-y-2 text-xs text-[#A2C7A6]">
              <li><a href="#calculator" className="hover:text-white transition-colors">Garden Impact Calculator</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Why Peat-Free Matters</a></li>
              <li><a href="#signup" className="hover:text-white transition-colors">2026 Sowing Handbook (PDF)</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Composting Scraps FAQ</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Grower Testimonials</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Stay in the Loop
            </h4>
            <p className="text-xs text-[#A2C7A6]">
              Join 12,000+ growers receiving seasonal planting alerts and exclusive member discounts.
            </p>
            <button
              onClick={onOpenSignup}
              className="w-full py-2.5 px-3.5 rounded-xl bg-[#2D5A27] hover:bg-[#397232] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get Free 28-Page Guide</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7DA181]">
          <div>
            © {new Date().getFullYear()} Verdant Sustainable Gardening Co. All rights reserved. 
            Crafted for circularity.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
