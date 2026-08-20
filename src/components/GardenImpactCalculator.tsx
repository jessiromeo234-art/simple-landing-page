import React, { useState } from 'react';
import { Calculator, Sparkles, Droplets, Trash2, Trees, ArrowRight, Check } from 'lucide-react';

interface GardenImpactCalculatorProps {
  onSelectProductRecommendation: (category: string) => void;
}

export const GardenImpactCalculator: React.FC<GardenImpactCalculatorProps> = ({
  onSelectProductRecommendation,
}) => {
  const [gardenType, setGardenType] = useState<'balcony' | 'raised-bed' | 'backyard' | 'homestead'>('raised-bed');
  const [useOllas, setUseOllas] = useState(true);
  const [usePeatFree, setUsePeatFree] = useState(true);
  const [useBokashi, setUseBokashi] = useState(true);
  const [useNaturalDefense, setUseNaturalDefense] = useState(true);

  // Multipliers based on garden size
  const multipliers = {
    balcony: { water: 350, plastic: 18, peat: 25, compostKg: 80 },
    'raised-bed': { water: 1200, plastic: 48, peat: 90, compostKg: 240 },
    backyard: { water: 3400, plastic: 110, peat: 220, compostKg: 450 },
    homestead: { water: 8200, plastic: 240, peat: 580, compostKg: 1100 },
  };

  const current = multipliers[gardenType];

  const calculatedWater = useOllas ? current.water : 0;
  const calculatedPlastic = (usePeatFree ? current.plastic * 0.7 : 0) + (useNaturalDefense ? current.plastic * 0.3 : 0);
  const calculatedPeat = usePeatFree ? current.peat : 0;
  const calculatedCompost = useBokashi ? current.compostKg : 0;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#2D5A27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5ECE3] text-[#244E20] text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Eco Footprint Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#19321C]">
            See what your garden can save this year
          </h2>
          <p className="text-sm sm:text-base text-[#465E49] mt-2">
            Switching from standard big-box gardening supplies to circular, peat-free alternatives prevents landfill plastic and stores carbon immediately.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#2D5A27]/15 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C4830] mb-3">
                1. Select your growing space size:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'balcony', label: 'Balcony / Patio', sub: 'Under 25 sq ft' },
                  { id: 'raised-bed', label: 'Raised Beds', sub: '25–100 sq ft' },
                  { id: 'backyard', label: 'Backyard Garden', sub: '100–500 sq ft' },
                  { id: 'homestead', label: 'Permaculture Plot', sub: '500+ sq ft' },
                ].map((type) => (
                  <button
                    key={type.id}
                    id={`garden-type-${type.id}`}
                    onClick={() => setGardenType(type.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      gardenType === type.id
                        ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-xs'
                        : 'bg-[#F9F8F5] text-[#344E37] border-[#2D5A27]/15 hover:bg-[#EEF4ED]'
                    }`}
                  >
                    <div className="text-xs font-bold leading-snug">{type.label}</div>
                    <div className={`text-[10px] mt-0.5 ${gardenType === type.id ? 'text-[#C9E7C5]' : 'text-[#647C67]'}`}>
                      {type.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2C4830] mb-3">
                2. Which sustainable habits will you adopt?
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    state: useOllas,
                    toggle: () => setUseOllas(!useOllas),
                    title: 'Terracotta Subterranean Olla Irrigation',
                    desc: 'Cuts surface evaporation and eliminates wasteful spraying',
                  },
                  {
                    state: usePeatFree,
                    toggle: () => setUsePeatFree(!usePeatFree),
                    title: '100% Peat-Free Soil & Biodegradable Pots',
                    desc: 'Stops single-use plastic seedling cell trays and protects bogs',
                  },
                  {
                    state: useBokashi,
                    toggle: () => setUseBokashi(!useBokashi),
                    title: 'Airtight Living Bokashi Fermentation',
                    desc: 'Recycles 100% kitchen scraps into living microbial fertilizer',
                  },
                  {
                    state: useNaturalDefense,
                    toggle: () => setUseNaturalDefense(!useNaturalDefense),
                    title: 'Botanical Glass-Bottled Neem Defense',
                    desc: 'Protects pollinator insects and ends toxic chemical runoff',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={item.toggle}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                      item.state
                        ? 'bg-[#F2F7F1] border-[#2D5A27]/30 text-[#1C361F]'
                        : 'bg-white border-gray-200 text-gray-400 opacity-60'
                    }`}
                  >
                    <div className="pr-3">
                      <div className="text-xs font-bold">{item.title}</div>
                      <div className="text-[11px] text-[#556F57]">{item.desc}</div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        item.state
                          ? 'bg-[#2D5A27] text-white border-[#2D5A27]'
                          : 'bg-white border-gray-300'
                      }`}
                    >
                      {item.state && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-[#1B341E] text-white p-6 sm:p-8 rounded-2xl border border-[#2E5432] space-y-6">
            <div className="flex items-center justify-between border-b border-[#2C5030] pb-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#9ECE99] font-bold">
                  Estimated 1-Year Conservation
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-0.5">
                  Your Ecological Dividend
                </h3>
              </div>
              <Sparkles className="w-5 h-5 text-[#9ECE99]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#244527] p-4 rounded-xl border border-[#37613C]">
                <div className="flex items-center gap-1.5 text-xs text-[#A8D5A2] font-semibold mb-1">
                  <Droplets className="w-4 h-4" />
                  <span>Water Conserved</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {calculatedWater.toLocaleString()} L
                </div>
                <div className="text-[10px] text-[#93B691] mt-0.5">Equivalent to {Math.round(calculatedWater / 65)} deep showers</div>
              </div>

              <div className="bg-[#244527] p-4 rounded-xl border border-[#37613C]">
                <div className="flex items-center gap-1.5 text-xs text-[#A8D5A2] font-semibold mb-1">
                  <Trash2 className="w-4 h-4" />
                  <span>Plastic Prevented</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {Math.round(calculatedPlastic)} items
                </div>
                <div className="text-[10px] text-[#93B691] mt-0.5">Seed cells & synthetic bottles</div>
              </div>

              <div className="bg-[#244527] p-4 rounded-xl border border-[#37613C]">
                <div className="flex items-center gap-1.5 text-xs text-[#A8D5A2] font-semibold mb-1">
                  <Trees className="w-4 h-4" />
                  <span>Peat Bog Protected</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {calculatedPeat} kg
                </div>
                <div className="text-[10px] text-[#93B691] mt-0.5">Wetland carbon storage retained</div>
              </div>

              <div className="bg-[#244527] p-4 rounded-xl border border-[#37613C]">
                <div className="flex items-center gap-1.5 text-xs text-[#A8D5A2] font-semibold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Organic Food Diverted</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {calculatedCompost} kg
                </div>
                <div className="text-[10px] text-[#93B691] mt-0.5">Kept out of methane-rich landfills</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#products"
                className="w-full py-3 px-4 rounded-xl bg-[#E7F3E5] hover:bg-white text-[#173019] text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Find Starter Essentials for {gardenType.replace('-', ' ').toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
