import React from 'react';
import { Leaf, Droplets, Trees, Recycle, Award } from 'lucide-react';

export const ImpactBar: React.FC = () => {
  const stats = [
    {
      icon: Recycle,
      value: '48,200+ kg',
      label: 'Single-Use Plastic Diverted',
      detail: 'Through circular upcycled fiber pots & glass vessels',
    },
    {
      icon: Droplets,
      value: '2.4M Liters',
      label: 'Irrigation Water Conserved',
      detail: 'Measured across 12,000+ deployed terracotta ollas',
    },
    {
      icon: Trees,
      value: '100% Peat-Free',
      label: 'Ancient Peat Bogs Preserved',
      detail: 'Zero wetland peat carbon release in our soil media',
    },
    {
      icon: Award,
      value: '1% For The Planet',
      label: 'Direct Habitat Restoration',
      detail: 'Funding urban pollinator corridors & school gardens',
    },
  ];

  return (
    <div id="impact-bar" className="bg-[#1D361F] text-white py-12 border-y border-[#2E5231]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest text-[#9ECE99] font-bold">
            Verified Environmental Accountability
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Our measurable collective impact to date
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                id={`impact-stat-${idx}`}
                className="bg-[#244226] p-5 rounded-xl border border-[#345B38] flex flex-col justify-between hover:border-[#4E8252] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#305532] text-[#A6E3A0] flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-[#D2E7D0] mt-1">
                    {stat.label}
                  </div>
                </div>
                <div className="text-xs text-[#95B593] mt-3 pt-3 border-t border-[#315633]">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
