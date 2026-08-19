import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-24 md:py-36 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      <div className="pt-12 border-t border-[#D9D7D1]">
        {/* ==================================================
            ABOUT SECTION
        ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* LEFT: Heading & Studio Metadata */}
          <div className="md:col-span-4">
            <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#5B2EFF]"></span>
              PROFILE / MANIFESTO
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#0A0A0A] uppercase leading-none">
              ABOUT
            </h2>

            <div className="mt-8 font-mono-custom text-[11px] uppercase text-[#0A0A0A]/50 space-y-1">
              <div>MICHAEL SALBERTER</div>
              <div>BRUSSELS — BELGIUM</div>
              <div>GRAPHIC DESIGNER &amp; MOTION DESIGNER</div>
            </div>
          </div>

          {/* RIGHT: Statement & Bio */}
          <div className="md:col-span-8 space-y-6">
            <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-[34px] tracking-tight leading-[1.15] text-[#0A0A0A] uppercase">
              MICHAEL SALBERTER
              <br />
              <span className="text-[#0A0A0A]/80">GRAPHIC DESIGNER &amp; MOTION DESIGNER</span>
              <br />
              <span className="text-[#5B2EFF]">BRUSSELS — BELGIUM</span>
            </h3>

            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl tracking-tight leading-[1.25] text-[#0A0A0A]/90 uppercase">
              I work across branding, campaigns, art direction, digital, print and motion.
            </p>

            <div className="font-mono-custom text-[12px] md:text-[13px] uppercase text-[#0A0A0A]/75 leading-relaxed space-y-4 pt-2">
              <p>
                I’m particularly interested in sport and the culture around it, but I also take a lot of inspiration from fashion, music, photography, and contemporary visual culture.
              </p>
              <p>
                I like working on both sides of design: developing an idea and making sure it actually works in the final format.
              </p>
              <p>
                That can mean building an identity from scratch, adapting a campaign to different formats, preparing something for print, creating a motion asset or figuring out how a brand should look on a piece of clothing.
              </p>
              <p>
                I’m still early in my career, so I’m constantly learning. I like feedback, I like looking at references and I’m usually happiest when a project gives me something new to figure out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
