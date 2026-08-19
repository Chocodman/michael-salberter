import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPath?: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brusselsTime, setBrusselsTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Live Brussels CET time update
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Brussels',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setBrusselsTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleNavClick = (sectionId: string, directPath?: string) => {
    setMobileMenuOpen(false);
    if (directPath) {
      onNavigate(directPath);
      return;
    }

    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#F3F2EE]/90 backdrop-blur-md swiss-border-b shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
          {/* LEFT: Name & Title */}
          <button
            onClick={() => {
              onNavigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="Michael Salberter Home"
          >
            <div className="font-display font-extrabold text-[15px] md:text-[17px] tracking-tight leading-none text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
              MICHAEL SALBERTER
            </div>
            <div className="font-mono-custom text-[10px] md:text-[11px] uppercase tracking-wider text-[#0A0A0A]/70 mt-1 leading-tight">
              GRAPHIC DESIGNER &amp; MOTION DESIGNER
            </div>
            <div className="font-mono-custom text-[9px] md:text-[10px] uppercase tracking-wider text-[#0A0A0A]/50 mt-0.5">
              BRUSSELS, BELGIUM
            </div>
          </button>

          {/* RIGHT: Navigation & Location */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex items-center gap-8">
              <button
                onClick={() => handleNavClick('work-section')}
                className="font-mono-custom text-[12px] uppercase tracking-widest text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors relative py-1 focus:outline-none group"
              >
                <span>WORK</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5B2EFF] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                onClick={() => onNavigate('/motion')}
                className="font-mono-custom text-[12px] uppercase tracking-widest text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors relative py-1 focus:outline-none group"
              >
                <span>MOTION</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5B2EFF] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                onClick={() => onNavigate('/work/slbtr')}
                className="font-mono-custom text-[12px] uppercase tracking-widest text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors relative py-1 focus:outline-none group"
              >
                <span>SLBTR</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5B2EFF] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                onClick={() => handleNavClick('about-section')}
                className="font-mono-custom text-[12px] uppercase tracking-widest text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors relative py-1 focus:outline-none group"
              >
                <span>ABOUT</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5B2EFF] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <button
                onClick={() => handleNavClick('contact-section')}
                className="font-mono-custom text-[12px] uppercase tracking-widest text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors relative py-1 focus:outline-none group flex items-center gap-1"
              >
                <span>CONTACT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B2EFF] animate-pulse"></span>
              </button>
            </nav>

            {/* FAR RIGHT: Location & CET Time */}
            <div className="pl-6 border-l border-[#D9D7D1] flex items-center gap-3">
              <div className="font-mono-custom text-[11px] uppercase tracking-wider text-[#0A0A0A] font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>BRUSSELS, BELGIUM</span>
                <span className="text-[#0A0A0A]/50 font-normal">{brusselsTime} CET</span>
              </div>
            </div>
          </div>

          {/* MOBILE: Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <span className="font-mono-custom text-[11px] text-[#0A0A0A]/70 uppercase tracking-widest">
              BRU / BE
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-2 text-[#0A0A0A] hover:text-[#5B2EFF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#F3F2EE] pt-28 px-6 pb-10 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 pb-2 border-b border-[#D9D7D1]">
                INDEX / NAVIGATION
              </div>

              <div className="flex flex-col space-y-4">
                {[
                  { label: 'WORK', target: 'work-section' },
                  { label: 'MOTION', target: 'motion-section', path: '/motion' },
                  { label: 'SLBTR', target: 'sport-section', path: '/work/slbtr' },
                  { label: 'ABOUT', target: 'about-section' },
                  { label: 'EXPERIENCE', target: 'about-section' },
                  { label: 'CONTACT', target: 'contact-section' },
                ].map((item, idx) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.target, item.path)}
                    className="text-left font-display font-black text-3xl tracking-tight text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors flex items-center justify-between py-2 border-b border-[#D9D7D1]/60 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono-custom text-xs font-normal text-[#0A0A0A]/40">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#D9D7D1]">
              <div className="flex justify-between items-center font-mono-custom text-[11px] text-[#0A0A0A]">
                <span>LOCATION: BRUSSELS, BELGIUM</span>
                <span className="text-[#5B2EFF] font-semibold">{brusselsTime} CET</span>
              </div>
              <div className="font-mono-custom text-[10px] text-[#0A0A0A]/60">
                MICHAEL SALBERTER — GRAPHIC & MOTION DESIGNER
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
