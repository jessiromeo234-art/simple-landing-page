import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, Sprout, RefreshCw, Sun, Feather, CheckCircle } from 'lucide-react';
import { SUSTAINABILITY_PILLARS } from '../data/products';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-white border-t border-[#2D5A27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EA] text-[#244E20] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sprout className="w-3.5 h-3.5" />
            <span>Our Regenerative Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#173019]">
            Gardening in harmony with natural cycles
          </h2>
          <p className="text-sm sm:text-base text-[#465E49] mt-3 leading-relaxed">
            Conventional retail gardening generates millions of tons of throwaway plastic nursery pots, mined peat moss from threatened wetlands, and toxic synthetic sprays. Verdant exists to offer an uncompromising, closed-loop alternative.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              id={`philosophy-card-${idx}`}
              className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#2D5A27]/15 flex flex-col justify-between hover:border-[#2D5A27]/40 transition-all hover:shadow-sm"
            >
              <div>
                <div className="inline-block px-2.5 py-1 rounded-md bg-[#2D5A27] text-white text-[11px] font-bold tracking-wider mb-4">
                  {pillar.stat}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#18311B] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#48604B] mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D5A27]/10 flex items-center gap-1.5 text-xs font-semibold text-[#2D5A27]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Clean Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F2F7F0] border border-[#2D5A27]/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-base font-serif font-bold text-[#19321C]">
              Backed by third-party ecological audits
            </h4>
            <p className="text-xs text-[#526B55]">
              Every seed batch, clay vessel, and tool forging is traced to ethical suppliers who pay fair living wages.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[
              '1% For The Planet Member',
              'FSC Certified Wood 100%',
              'Non-GMO Seed Pledge',
              'Zero Single-Use Plastic Cert',
            ].map((badge, idx) => (
              <span
                key={idx}
                className="bg-white text-[#21421E] px-3 py-1.5 rounded-full text-xs font-bold border border-[#2D5A27]/15 shadow-2xs"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
