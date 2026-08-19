import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate?: (path: string) => void;
}

interface HeroProjectItem {
  id: string;
  title: string;
  shortTitle?: string;
  path: string;
  category: string;
  asset: string;
  isVideo: boolean;
  objectPosition?: string;
}

const heroProjects: HeroProjectItem[] = [
  {
    id: '01',
    title: 'BMW × BELGIAN RED DEVILS',
    shortTitle: 'BMW × RED DEVILS',
    path: '/work/bmw-red-devils',
    category: 'CAMPAIGN / SPORTS / MOTION',
    asset: '/images/8240-003423_BMW_RedDevils_DIGITAL_SOME_Link_HEADER_1920x1080px_BEFR.webp',
    isVideo: false,
    objectPosition: 'center',
  },
  {
    id: '02',
    title: 'IPPI BEER',
    shortTitle: 'IPPI BEER',
    path: '/work/ippi-beer',
    category: 'BRANDING / PACKAGING',
    asset: '/images/IPPI_07_CANS_4.webp',
    isVideo: false,
    objectPosition: 'center 50%',
  },
  {
    id: '03',
    title: 'ISDIN',
    shortTitle: 'ISDIN',
    path: '/work/isdin',
    category: 'ART DIRECTION / EVENT',
    asset: '/images/251003_isdin.webp',
    isVideo: false,
    objectPosition: 'center 18%',
  },
  {
    id: '04',
    title: 'EXCELSIOR',
    shortTitle: 'EXCELSIOR',
    path: '/work/excelsior',
    category: 'BRANDING / PACKAGING',
    asset: '/images/Etiquette Excel 4.webp',
    isVideo: false,
    objectPosition: 'center',
  },
  {
    id: '05',
    title: 'PLK',
    shortTitle: 'PLK',
    path: '/work/plk',
    category: 'VISUAL DESIGN / ART DIRECTION',
    asset: '/images/PLK_1-1.webp',
    isVideo: false,
    objectPosition: 'center 30%',
  },
  {
    id: '06',
    title: 'SLBTR',
    shortTitle: 'SLBTR',
    path: '/work/slbtr',
    category: 'SPORTS DESIGN',
    asset: '/images/RSCA_CUP_FINAL_25.webp',
    isVideo: false,
    objectPosition: 'center 22%',
  },
  {
    id: '07',
    title: 'ALDI',
    shortTitle: 'ALDI',
    path: '/work/aldi',
    category: 'MOTION / COMMERCIAL',
    asset: '/videos/8240-003562_ALDI_2026_OLV_W21-Kersen_Fullscale_BENL.mp4',
    isVideo: true,
    objectPosition: 'center',
  },
  {
    id: '08',
    title: 'MINI',
    shortTitle: 'MINI',
    path: '/work/mini',
    category: 'MOTION / AUTOMOTIVE',
    asset: '/videos/8240-003629_MINI_Tactical Campaign_F67_Mar26_Youtube_BENL_10sec.mp4',
    isVideo: true,
    objectPosition: 'center',
  },
  {
    id: '09',
    title: 'MEDIAMARKT',
    shortTitle: 'MEDIAMARKT',
    path: '/work/mediamarkt',
    category: 'MOTION / COMMERCIAL',
    asset: '/videos/8240-003472_MEDIAMARKT_Solden_Juli_VERZEKERING_Apple_TVC_15sec_BEFR.mp4',
    isVideo: true,
    objectPosition: 'center',
  },
];

// Soft, continuous editorial easing curve (580ms duration)
const softEase = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  // Default active project is 01 IPPI BEER
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = heroProjects[activeIndex];

  const scrollToWork = () => {
    const el = document.getElementById('hero-project-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.pathname = path;
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + heroProjects.length) % heroProjects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroProjects.length);
  };

  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex flex-col justify-between pt-28 md:pt-36 pb-8 md:pb-12 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full select-none">
      {/* 1. TOP METADATA / BREADCRUMB */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: softEase }}
        className="w-full font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]"
      >
        <div className="flex items-center gap-2 text-[#0A0A0A]/70">
          <span className="text-[#5B2EFF] font-semibold">01</span>
          <span>—</span>
          <span>SELECTED WORK · BRUSSELS / BELGIUM · 2026</span>
        </div>
      </motion.div>

      {/* 2. MAIN TYPOGRAPHIC DISPLAY & EDITORIAL HORIZONTAL STRIP */}
      <div className="my-auto py-6 md:py-10">
        
        {/* Main Title - MICHAEL SALBERTER & Exact Intro Copy */}
        <div className="mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: softEase }}
            className="font-display font-black text-[11vw] sm:text-[9vw] md:text-[6.8vw] lg:text-[76px] xl:text-[86px] text-[#0A0A0A] tracking-[-0.035em] leading-[0.9] uppercase"
          >
            <span className="block">MICHAEL</span>
            <span className="block">SALBERTER</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: softEase }}
            className="mt-6 md:mt-8 max-w-3xl"
          >
            <p className="font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-[#0A0A0A] uppercase">
              Graphic Designer &amp; Motion Designer based in Brussels.
            </p>
          </motion.div>
        </div>

        {/* ==================================================
            EDITORIAL HORIZONTAL PROJECT SELECTOR STRIP
            (Soft Continuous Switching & Synchronized Layout)
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: softEase }}
          className="w-full"
        >
          <div className="border border-[#D9D7D1] bg-[#F0EFEA] h-[134px] sm:h-[146px] md:h-[158px] flex items-stretch overflow-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shadow-none">
            
            {/* Leftmost Stepper Control */}
            <div className="w-9 sm:w-11 md:w-12 shrink-0 border-r border-[#D9D7D1]/70 bg-[#EAE8E2]/60 flex flex-col items-center justify-between py-2 sm:py-2.5 font-mono-custom text-[10px] select-none h-full">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="text-[#0A0A0A]/50 hover:text-[#5B2EFF] transition-colors p-1 focus:outline-none cursor-pointer"
              >
                <ChevronUp size={13} />
              </button>

              <div className="flex flex-col items-center gap-1">
                <span className="text-[#5B2EFF] font-bold tracking-wider text-[11px]">
                  {activeProject.id}
                </span>
                <span className="text-[#0A0A0A]/30 text-[9px]">
                  {heroProjects[(activeIndex + 1) % heroProjects.length].id}
                </span>
                <span className="text-[#0A0A0A]/20 text-[9px] hidden sm:inline">
                  {heroProjects[(activeIndex + 2) % heroProjects.length].id}
                </span>
              </div>

              <button
                onClick={handleNext}
                aria-label="Next project"
                className="text-[#0A0A0A]/50 hover:text-[#5B2EFF] transition-colors p-1 focus:outline-none cursor-pointer"
              >
                <ChevronDown size={13} />
              </button>
            </div>

            {/* Continuous Horizontal Strip of ALL 9 Projects (01 through 09) */}
            <div className="flex-1 flex items-stretch min-w-0 h-full overflow-hidden">
              {heroProjects.map((project, index) => {
                const isActive = activeIndex === index;

                if (isActive) {
                  {/* ACTIVE PROJECT SPREAD (Simultaneous Soft Expansion: 580ms) */}
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      transition={{ layout: { duration: 0.58, ease: softEase } }}
                      onClick={() => handleProjectClick(project.path)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Open case study for ${project.id} ${project.title}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleProjectClick(project.path);
                        }
                      }}
                      className="flex-[4] min-w-[300px] sm:min-w-[380px] md:min-w-[460px] lg:min-w-[520px] bg-[#FAF9F5] flex items-stretch border-r border-[#D9D7D1] relative h-full cursor-pointer focus:outline-none overflow-hidden"
                    >
                      {/* Smooth Gliding Violet Accent Indicator */}
                      <motion.div
                        layoutId="active-strip-indicator"
                        transition={{ duration: 0.58, ease: softEase }}
                        className="absolute top-0 left-0 right-0 h-[2px] bg-[#5B2EFF] z-20"
                      />

                      {/* Left: Real Media Frame (Progressive Soft Reveal Mask) */}
                      <motion.div
                        initial={{ clipPath: 'inset(0% 100% 0% 0%)', opacity: 0.9 }}
                        animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.05, ease: softEase }}
                        className="w-[48%] h-full shrink-0 relative overflow-hidden border-r border-[#D9D7D1]/70 bg-[#111111]"
                      >
                        <AnimatePresence mode="wait">
                          {project.isVideo ? (
                            <motion.video
                              key={project.id}
                              initial={{ opacity: 0, scale: 1.01 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.32, ease: softEase }}
                              src={project.asset}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                              style={{ objectPosition: project.objectPosition || 'center' }}
                              className="w-full h-full object-cover block"
                            />
                          ) : (
                            <motion.img
                              key={project.id}
                              initial={{ opacity: 0, scale: 1.01 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.32, ease: softEase }}
                              src={project.asset}
                              alt={project.title}
                              loading="eager"
                              decoding="async"
                              style={{ objectPosition: project.objectPosition || 'center' }}
                              className="w-full h-full object-cover block select-none"
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Right: Editorial Information Area (Soft Staggered Settle) */}
                      <div
                        className="w-[52%] p-3.5 sm:p-4 md:p-5 flex flex-col justify-between text-left min-w-0 bg-[#FAF9F5] h-full"
                      >
                        {/* Top: Project Number / Index tag */}
                        <motion.div
                          initial={{ opacity: 0, x: 4 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.38, delay: 0.1, ease: softEase }}
                          className="font-mono-custom text-[10px] text-[#5B2EFF] font-bold tracking-wider"
                        >
                          PROJECT {project.id}
                        </motion.div>

                        {/* Middle: Title & Category grouped intentionally */}
                        <div className="py-1">
                          <motion.h3
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.42, delay: 0.16, ease: softEase }}
                            className="font-display font-black text-base sm:text-lg md:text-xl lg:text-[22px] text-[#0A0A0A] uppercase tracking-tight truncate leading-[1.1] group-hover:text-[#5B2EFF] transition-colors"
                          >
                            {project.title}
                          </motion.h3>

                          <motion.div
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.22, ease: softEase }}
                            className="font-mono-custom text-[9px] sm:text-[10px] md:text-[11px] text-[#0A0A0A]/60 uppercase tracking-wider mt-1 truncate"
                          >
                            {project.category}
                          </motion.div>
                        </div>

                        {/* Bottom: Subtle Typographic CTA */}
                        <motion.div
                          initial={{ opacity: 0, x: 6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.38, delay: 0.28, ease: softEase }}
                          className="font-mono-custom text-[10px] sm:text-[11px] text-[#5B2EFF] font-semibold flex items-center gap-1 self-start group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight size={12} />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                }

                {/* INACTIVE COMPACT PROJECT CELL (Simultaneous Soft Compression: 580ms) */}
                return (
                  <motion.button
                    key={project.id}
                    layout
                    transition={{ layout: { duration: 0.58, ease: softEase } }}
                    onClick={() => handleProjectClick(project.path)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onPointerEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleProjectClick(project.path);
                      }
                    }}
                    aria-label={`Select and open project ${project.id} ${project.title}`}
                    className="flex-1 min-w-[42px] sm:min-w-[50px] md:min-w-[58px] lg:min-w-[66px] max-w-[100px] border-r border-[#D9D7D1]/60 p-2.5 sm:p-3 flex flex-col justify-between text-left cursor-pointer hover:bg-[#EAE8E2]/70 transition-colors focus:outline-none h-full border-t-2 border-t-transparent"
                  >
                    <div>
                      <div className="font-mono-custom text-[10px] sm:text-[11px] text-[#0A0A0A]/40 mb-1">
                        {project.id}
                      </div>
                      <div className="font-mono-custom font-semibold text-[9px] sm:text-[10px] uppercase text-[#0A0A0A]/70 leading-tight line-clamp-3">
                        {project.shortTitle || project.title}
                      </div>
                    </div>

                    <div className="w-full h-0.5 bg-transparent" />
                  </motion.button>
                );
              })}
            </div>

          </div>
        </motion.div>
      </div>

      {/* 3. BOTTOM EDITORIAL BAR WITH FINE DIVIDER */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: softEase }}
        className="w-full pt-4 border-t border-[#D9D7D1] flex items-center font-mono-custom text-[10px] sm:text-[11px] uppercase tracking-wider text-[#0A0A0A]"
      >
        {/* Bottom Left: Scroll Trigger */}
        <button
          onClick={scrollToWork}
          className="group inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors focus:outline-none cursor-pointer"
          aria-label="Scroll to work"
        >
          <span className="font-semibold">↓ SCROLL · VISUAL COMMUNICATION</span>
        </button>
      </motion.div>
    </section>
  );
};
