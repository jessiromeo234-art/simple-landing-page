import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-[#2D5A27]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Semantic Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF3EA] text-[#244E20] text-xs font-semibold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18311B]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#48624B] mt-2">
            Everything you need to know about our circular materials, plastic-free delivery, and living soil biology.
          </p>
        </header>

        {/* Semantic HTML5 Accordion using details & summary */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              id={`faq-item-${idx}`}
              open={idx === 0}
              className="group rounded-2xl border border-[#2D5A27]/15 bg-white open:bg-[#FAF8F5] open:border-[#2D5A27]/30 transition-colors"
            >
              <summary className="p-5 flex items-center justify-between gap-4 cursor-pointer select-none">
                <span className="text-base font-serif font-bold text-[#19321C]">
                  {faq.question}
                </span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-[#EBF2EA] text-[#2D5A27] group-open:rotate-180 group-open:bg-[#2D5A27] group-open:text-white transition-all duration-200">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </summary>

              <div className="px-5 pb-5 pt-1 text-sm text-[#3E5641] leading-relaxed border-t border-[#2D5A27]/10">
                <p>{faq.answer}</p>
                <div className="mt-3 inline-block text-[11px] font-semibold text-[#2D5A27] uppercase tracking-wider bg-[#E5EFE3] px-2.5 py-0.5 rounded-full">
                  Category: {faq.category}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Aside Callout box */}
        <aside className="mt-10 p-6 rounded-2xl bg-[#F2F7F0] border border-[#2D5A27]/15 text-center space-y-2">
          <h4 className="text-base font-serif font-bold text-[#19321C]">
            Have a question about your specific micro-climate or soil type?
          </h4>
          <p className="text-xs text-[#4F6852]">
            Our in-house master regenerative agronomists are available to guide your planting transition.
          </p>
          <div className="pt-2">
            <a
              href="#signup"
              className="inline-block text-xs font-bold text-[#2D5A27] hover:underline"
            >
              Sign up for our newsletter to ask our soil team directly →
            </a>
          </div>
        </aside>

      </div>
    </section>
  );
};

