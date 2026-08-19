import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'michael.salberter@skynet.be';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact-section" className="py-24 md:py-36 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      <div className="pt-12 border-t border-[#D9D7D1]">
        {/* Top coordinate bar */}
        <div className="flex items-center justify-between font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 pb-6">
          <div>AVAILABLE FOR FREELANCE & STUDIO INQUIRIES</div>
          <div>EST. BRUSSELS</div>
        </div>

        {/* Huge Editorial Statement (120px typography) */}
        <div className="my-8 md:my-14 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[10vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[76px] xl:text-[86px] tracking-[-0.035em] leading-[0.9] text-[#0A0A0A] uppercase"
          >
            LET'S
            <br />
            WORK
            <br />
            <span className="text-[#5B2EFF] hover:text-[#461fe0] transition-colors">
              TOGETHER.
            </span>
          </motion.h2>
        </div>

        {/* Metadata & Direct Links Under Headline */}
        <div className="pt-10 border-t border-[#D9D7D1] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity & Location */}
          <div className="md:col-span-4">
            <div className="font-display font-extrabold text-2xl tracking-tight text-[#0A0A0A] uppercase">
              MICHAEL SALBERTER
            </div>
            <div className="font-mono-custom text-[12px] uppercase text-[#0A0A0A]/70 mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>BRUSSELS — BELGIUM</span>
            </div>
            <p className="font-mono-custom text-[11px] uppercase text-[#0A0A0A]/50 mt-4 leading-relaxed max-w-xs">
              Specialized in brand systems, sports editorial compositing, advertising campaigns & motion design.
            </p>
          </div>

          {/* Contact Links & Copy Action */}
          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              {/* EMAIL */}
              <a
                href={`mailto:${emailAddress}`}
                onClick={(e) => {
                  navigator.clipboard.writeText(emailAddress);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2500);
                }}
                data-cursor="project"
                data-cursor-text={copied ? 'COPIED!' : 'EMAIL ME'}
                className="group text-left inline-flex items-center gap-2 font-mono-custom text-[14px] md:text-[15px] font-bold uppercase text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors py-2 border-b border-[#0A0A0A] hover:border-[#5B2EFF]"
              >
                <Mail size={16} />
                <span>EMAIL →</span>
                {copied && (
                  <span className="ml-2 text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded">
                    COPIED
                  </span>
                )}
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/michael-salberter-35037220a/"
                target="_blank"
                rel="noreferrer"
                data-cursor="project"
                data-cursor-text="LINKEDIN ↗"
                className="group inline-flex items-center gap-2 font-mono-custom text-[14px] md:text-[15px] font-bold uppercase text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors py-2 border-b border-[#0A0A0A] hover:border-[#5B2EFF]"
              >
                <span>LINKEDIN →</span>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/slbtr.design"
                target="_blank"
                rel="noreferrer"
                data-cursor="project"
                data-cursor-text="INSTAGRAM ↗"
                className="group inline-flex items-center gap-2 font-mono-custom text-[14px] md:text-[15px] font-bold uppercase text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors py-2 border-b border-[#0A0A0A] hover:border-[#5B2EFF]"
              >
                <span>INSTAGRAM →</span>
              </a>
            </div>

            <div className="font-mono-custom text-[12px] uppercase text-[#0A0A0A] font-semibold bg-[#EAE8E0] px-3 py-2 border border-[#D9D7D1] inline-block">
              INSTAGRAM: <span className="text-[#5B2EFF]">@SLBTR.DESIGN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
