import React, { useState, useEffect } from 'react';
import { Mail, Sparkles, CheckCircle2, Download, BookOpen, ArrowRight, Gift, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SignupData } from '../types';

interface EmailSignupSectionProps {
  onSuccessToast?: (msg: string) => void;
}

export const EmailSignupSection: React.FC<EmailSignupSectionProps> = ({ onSuccessToast }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gardenType, setGardenType] = useState<SignupData['gardenType']>('raised-bed');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Peat-Free Living Soil',
    'Water Conservation & Ollas',
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Check if previously signed up from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('verdant_subscriber');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.email) {
          setEmail(parsed.email);
          setName(parsed.name || '');
          setIsSubmitted(true);
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const interestsOptions = [
    'Peat-Free Living Soil',
    'Water Conservation & Ollas',
    'Native Pollinator Corridors',
    'Kitchen Bokashi Fermentation',
    'Heirloom Vegetable Varieties',
    'Natural Organic Pest Defense',
  ];

  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant local API registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const subData: SignupData = {
        email,
        name,
        gardenType,
        interests: selectedInterests,
        optedInForGuide: true,
      };
      localStorage.setItem('verdant_subscriber', JSON.stringify(subData));

      // Trigger celebratory eco-green confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#2D5A27', '#8FA382', '#E2BA55', '#3E6E40', '#FFFFFF'],
        });
      } catch (err) {
        // ignore confetti errors
      }

      if (onSuccessToast) {
        onSuccessToast('Welcome! Your 15% discount code and starter guide are unlocked.');
      }
    }, 700);
  };

  const handleDownloadSimulatedGuide = () => {
    // Generate simulated guide content
    const guideText = `
=====================================================
VERDANT: ZERO-WASTE REGENERATIVE GARDENING HANDBOOK
Edition: Spring 2026
Prepared for: ${name || 'Valued Regenerator'} (${email})
=====================================================

1. LIVING SOIL FORMULA (100% PEAT-FREE)
- 40% Aged Forest Bark & Leaf Humus
- 30% Washed Coconut Coir (Buffered)
- 20% Biochar Inoculated with Bokashi EM-1 Microbes
- 10% Worm Castings & Endomycorrhizal Fungi

2. WATER PRESERVATION SECRETS
- Subterranean Ollas deliver water at root level.
- Save 70% evaporation by mulching 2 inches of barley straw.
- Gravity drip systems eliminate pump electricity.

3. YOUR 15% WELCOME COUPON:
Use Code: VERDANT15 at checkout.

Thank you for healing the soil with us!
Verdant Sustainable Gardening
www.verdant-gardens.example
`;
    const blob = new Blob([guideText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Verdant-Zero-Waste-Gardening-Guide.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="signup" className="py-16 md:py-24 bg-gradient-to-b from-[#F8F7F3] via-[#F2ECE1] to-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#18311B] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#2E5432] relative">
          
          {/* Subtle botanical glow background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3F7539]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A8D5A2]/10 rounded-full blur-2xl pointer-events-none -ml-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-14 relative z-10 items-center">
            
            {/* Left Column: Offer & Guide Preview */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#294B2C] border border-[#3E6C42] text-[#A6E3A0] text-xs font-semibold uppercase tracking-wider">
                <Gift className="w-3.5 h-3.5 text-[#E0C068]" />
                <span>Free Field Guide + 15% Off</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Join the Regenerative Gardeners Collective
              </h2>

              <p className="text-sm sm:text-base text-[#D4E8D2] font-light leading-relaxed">
                Receive our curated seasonal sowing calendar, organic pest prevention recipes, and insider invitations to limited-edition heirloom releases.
              </p>

              {/* Free PDF Booklet Mockup Card */}
              <div className="bg-[#244527] p-4 rounded-2xl border border-[#3A673E] flex items-center gap-4">
                <div className="w-16 h-20 rounded-lg bg-[#2E5531] border border-[#48784C] flex flex-col items-center justify-center text-center p-1.5 shadow-md shrink-0">
                  <BookOpen className="w-6 h-6 text-[#E0C068] mb-1" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-tighter leading-tight">
                    28-Page Guide
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white leading-snug">
                    "The Zero-Waste Gardener's Field Handbook"
                  </div>
                  <p className="text-[11px] text-[#A8C7A5]">
                    Includes DIY Bokashi setup, peat-free potting mixes, and native companion planting cheat-sheets.
                  </p>
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-2 text-xs text-[#BED8BC]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A6E3A0] shrink-0" />
                  <span>Instant 15% discount code for your first sustainable order</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A6E3A0] shrink-0" />
                  <span>Monthly zero-waste tips customized to your garden size</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A6E3A0] shrink-0" />
                  <span>Strict zero-spam pledge (unsubscribe in 1-click anytime)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form or Unlocked Confirmation State */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                /* Unlocked Confirmation Card */
                <div
                  id="signup-success-card"
                  className="bg-[#224225] p-6 sm:p-8 rounded-2xl border border-[#39633C] text-center space-y-5 animate-scale"
                >
                  <div className="w-16 h-16 rounded-full bg-[#2E5832] text-[#9EE297] flex items-center justify-center mx-auto shadow-inner">
                    <Sparkles className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#9EE297] font-bold">
                      Welcome to the Collective!
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mt-1">
                      You're all set{name ? `, ${name}` : ''}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#CFE4CD] mt-1.5 max-w-md mx-auto">
                      We've confirmed <strong>{email}</strong> for our seasonal dispatches. Your 15% discount code and digital guide are unlocked below.
                    </p>
                  </div>

                  {/* Coupon Code Banner */}
                  <div className="bg-[#1A331D] p-4 rounded-xl border border-[#356138] max-w-sm mx-auto flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-[#8CB788] font-bold">
                        15% Off Promo Code
                      </div>
                      <div className="text-lg font-mono font-bold text-[#E7C770]">
                        VERDANT15
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText('VERDANT15');
                        if (onSuccessToast) onSuccessToast('Code VERDANT15 copied to clipboard!');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#2E5832] hover:bg-[#3B6C40] text-xs font-semibold text-white transition-colors"
                    >
                      Copy Code
                    </button>
                  </div>

                  {/* Download Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      id="download-guide-btn"
                      onClick={handleDownloadSimulatedGuide}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#9EE297] hover:bg-[#B3EEAC] text-[#132A15] font-bold text-sm shadow-md transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download 28-Page Field Guide (.txt)</span>
                    </button>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-[#A1C59E] hover:text-white underline transition-colors"
                    >
                      Update subscriber preferences
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Signup Form */
                <form
                  id="email-signup-form"
                  onSubmit={handleSubmit}
                  className="bg-[#203D23] p-6 sm:p-8 rounded-2xl border border-[#365D39] space-y-5"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-white">
                      Claim Your Free Guide & 15% Voucher
                    </h3>
                    <p className="text-xs text-[#B5D4B2]">
                      Fill out your gardening focus so we can tailor seasonal advice to your climate.
                    </p>
                  </div>

                  {/* Name & Email inputs with semantic labels */}
                  <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-0 p-0 m-0">
                    <div>
                      <label htmlFor="signup-name-input" className="block text-xs font-semibold text-[#D4E8D2] mb-1.5">
                        Your Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="signup-name-input"
                        name="subscriber_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rowan"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#172E19] text-white text-xs placeholder-[#719371] border border-[#345B37] focus:outline-none focus:ring-2 focus:ring-[#9EE297]"
                      />
                    </div>

                    <div>
                      <label htmlFor="signup-email-input" className="block text-xs font-semibold text-[#D4E8D2] mb-1.5">
                        Email Address <span className="text-[#E7C770]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="signup-email-input"
                          name="subscriber_email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@domain.com"
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#172E19] text-white text-xs placeholder-[#719371] border border-[#345B37] focus:outline-none focus:ring-2 focus:ring-[#9EE297]"
                        />
                        <Mail className="w-4 h-4 text-[#719371] absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </fieldset>

                  {/* Garden Type Radio / Selector */}
                  <fieldset className="border-0 p-0 m-0">
                    <legend className="block text-xs font-semibold text-[#D4E8D2] mb-1.5">
                      Your Primary Growing Environment:
                    </legend>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                      {[
                        { id: 'balcony', label: 'Balcony' },
                        { id: 'raised-bed', label: 'Raised Bed' },
                        { id: 'backyard', label: 'Backyard' },
                        { id: 'indoor', label: 'Indoor Herbs' },
                        { id: 'allotment', label: 'Allotment' },
                      ].map((t) => (
                        <button
                          type="button"
                          key={t.id}
                          id={`signup-type-${t.id}`}
                          onClick={() => setGardenType(t.id as any)}
                          className={`py-2 px-2 text-[11px] font-medium rounded-lg border text-center transition-all cursor-pointer ${
                            gardenType === t.id
                              ? 'bg-[#9EE297] text-[#132A15] border-[#9EE297] font-bold'
                              : 'bg-[#18311B] text-[#B0D1AE] border-[#2F5432] hover:bg-[#254528]'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  {/* Topics of Interest Checkboxes */}
                  <fieldset className="border-0 p-0 m-0">
                    <legend className="block text-xs font-semibold text-[#D4E8D2] mb-1.5">
                      Topics you'd love to learn about:
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {interestsOptions.map((opt) => {
                        const isChecked = selectedInterests.includes(opt);
                        return (
                          <div
                            key={opt}
                            onClick={() => handleInterestToggle(opt)}
                            className={`p-2 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors text-xs ${
                              isChecked
                                ? 'bg-[#294E2C] border-[#447A48] text-white font-medium'
                                : 'bg-[#172E19] border-[#2C4F2F] text-[#8EAFA0]'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isChecked
                                  ? 'bg-[#9EE297] text-[#132A15] border-[#9EE297]'
                                  : 'bg-transparent border-[#4D7550]'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3 h-3 text-[#132A15]" />}
                            </div>
                            <span className="text-[11px]">{opt}</span>
                          </div>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* Error display */}
                  {errorMessage && (
                    <div className="text-xs text-rose-300 bg-rose-950/60 p-2.5 rounded-lg border border-rose-800">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-signup-form-btn"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#9EE297] hover:bg-[#B1ECA8] text-[#132A15] font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Securing your guide...</span>
                      ) : (
                        <>
                          <span>Unlock Free Guide & 15% Code</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Privacy / Security Notice */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#7EA67C]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9EE297]" />
                    <span>Zero spam guaranteed. We respect your inbox as much as the earth.</span>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
