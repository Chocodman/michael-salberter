import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section id="work-section" className="py-24 md:py-36 px-6 md:px-10 max-w-[1360px] mx-auto w-full">
      <div className="pt-12 border-t border-[#D9D7D1] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
        {/* LEFT: SELECTED WORK */}
        <div className="md:col-span-5">
          <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-3 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-[#5B2EFF]"></span>
            SELECTED WORK
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.95] text-[#0A0A0A] uppercase">
            SELECTED
            <br />
            WORK
          </h2>
          <div className="font-mono-custom text-[12px] md:text-[13px] uppercase text-[#0A0A0A]/60 mt-6 leading-relaxed max-w-sm">
            <span>A selection of personal, freelance and professional projects developed between 2024 and 2026.</span>
          </div>
        </div>

        {/* RIGHT: Statement & Disciplines */}
        <div className="md:col-span-7">
          <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-tight leading-[1.25] text-[#0A0A0A] uppercase">
            I like moving between different kinds of projects. Some start with a blank page and require a full identity. Others already have an established direction and are about finding the right solution for every format.
          </p>

          <div className="mt-10 pt-8 border-t border-[#D9D7D1] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-[11px] uppercase text-[#0A0A0A]/70">
            <div>
              <div className="text-[#0A0A0A] font-bold mb-1">01 / BRANDING</div>
              <div>Identities, packaging &amp; visual systems</div>
            </div>
            <div>
              <div className="text-[#0A0A0A] font-bold mb-1">02 / CAMPAIGNS</div>
              <div>Art direction, campaign design &amp; visual adaptations</div>
            </div>
            <div>
              <div className="text-[#0A0A0A] font-bold mb-1">03 / MOTION</div>
              <div>Animation, commercials, DOOH &amp; digital content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
