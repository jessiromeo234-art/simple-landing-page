import React from 'react';
import { Star, CheckCircle, Quote, Sprout } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#F8F7F3] border-t border-[#2D5A27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EA] text-[#244E20] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sprout className="w-3.5 h-3.5" />
            <span>Community Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18321B]">
            From passionate growers like you
          </h2>
          <p className="text-sm sm:text-base text-[#465E49] mt-2">
            Over 3,400 regenerators have transitioned their gardens to 100% plastic-free, circular care with Verdant.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              id={`review-card-${rev.id}`}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-[#2D5A27]/15 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#69826C]">{rev.date}</span>
                </div>

                {/* Comment quote */}
                <p className="text-sm text-[#253E28] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="mt-6 pt-4 border-t border-[#2D5A27]/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#18311B]">{rev.author}</span>
                    <span className="text-[10px] bg-[#E8F3E6] text-[#224A1F] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <div className="text-[11px] text-[#557059]">{rev.gardenerType} • {rev.location}</div>
                </div>

                <div className="text-[10px] text-right text-[#345B31] font-semibold max-w-[100px] truncate">
                  {rev.productName}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
