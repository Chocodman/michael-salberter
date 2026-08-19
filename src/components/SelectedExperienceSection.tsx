import React from 'react';

export const SelectedExperienceSection: React.FC = () => {
  return (
    <section id="experience-section" className="py-20 md:py-28 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      <div className="pt-12 border-t border-[#D9D7D1]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#5B2EFF]"></span>
              EXPERIENCE / CONTEXT
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-[#0A0A0A] uppercase leading-none">
              SELECTED
              <br />
              EXPERIENCE
            </h2>
          </div>

          {/* Right Column: Structured Experience Breakdown */}
          <div className="md:col-span-8 space-y-10">
            {/* 1. PROFESSIONAL WORK (SERVICE PLAN BELUX & MOKAMO SRL) */}
            <div className="pb-8 border-b border-[#D9D7D1] space-y-6">
              <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] font-semibold">
                PROFESSIONAL EXPERIENCE
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-[#0A0A0A] tracking-tight">
                    SERVICE PLAN BELUX
                  </h3>
                  <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/50 mt-1 mb-3">
                    Professional experience
                  </p>
                  <div className="font-display font-bold text-base sm:text-lg text-[#0A0A0A] uppercase tracking-tight">
                    BMW · MINI · ALDI · MediaMarkt
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-[#0A0A0A] tracking-tight">
                    MOKAMO SRL
                  </h3>
                  <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/50 mt-1 mb-3">
                    Professional experience
                  </p>
                  <div className="font-display font-bold text-base sm:text-lg text-[#0A0A0A] uppercase tracking-tight leading-snug">
                    <div>Signage, Vinyl Lettering &amp; Vehicle Wraps</div>
                    <div className="mt-1">Custom Apparel &amp; Textile Printing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. FREELANCE WORK */}
            <div className="pb-8 border-b border-[#D9D7D1]">
              <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                FREELANCE
              </div>
              <div className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-tight">
                ISDINCEUTICS · PLK × HEAVEN · EXCELSIOR
              </div>
            </div>

            {/* 3. PERSONAL PRACTICE */}
            <div>
              <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                PERSONAL PRACTICE
              </div>
              <div className="font-display font-bold text-lg sm:text-xl text-[#0A0A0A] uppercase tracking-tight">
                IPPI Beer · SLBTR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
