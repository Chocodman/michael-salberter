import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full border-t border-[#D9D7D1]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono-custom text-[11px] uppercase tracking-wider text-[#0A0A0A]">
        {/* Left Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div className="font-semibold text-[#0A0A0A]">
            © 2026 MICHAEL SALBERTER
          </div>
          <div className="text-[#0A0A0A]/60 hidden sm:block">/</div>
          <div className="text-[#0A0A0A]/80">
            GRAPHIC DESIGNER & MOTION DESIGNER
          </div>
        </div>

        {/* Center / Right Location & Back to Top */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end pt-4 md:pt-0 border-t md:border-t-0 border-[#D9D7D1]">
          <div className="text-[#0A0A0A]/70">
            BRUSSELS / BELGIUM
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="project"
            data-cursor-text="TOP ↑"
            className="inline-flex items-center gap-2 font-semibold text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors group focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center group-hover:bg-[#5B2EFF] transition-colors">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
