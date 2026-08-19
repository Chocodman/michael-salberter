import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface IppiBeerProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const IppiBeerProjectPage: React.FC<IppiBeerProjectPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const isdinProject = projectsData.find((p) => p.slug === 'isdin') || projectsData[2];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleImageClick = (src: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox(src, title);
    }
  };

  return (
    <article className="pt-28 md:pt-36 pb-24 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full text-[#0A0A0A]">
      {/* Top Breadcrumb Navigation */}
      <div className="pb-8 border-b border-[#D9D7D1] flex items-center justify-between font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]">
        <button
          onClick={() => onNavigate('/')}
          className="group inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO INDEX</span>
        </button>

        <div className="flex items-center gap-3 text-[#0A0A0A]/50">
          <span className="text-[#5B2EFF] font-semibold">02</span>
          <span>/</span>
          <span>IPPI BEER</span>
        </div>
      </div>

      {/* ==================================================
          PROJECT HEADER & METADATA
      ================================================== */}
      <header className="py-12 md:py-20 border-b border-[#D9D7D1]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Title and Identification */}
          <div className="md:col-span-8 space-y-4">
            <div className="font-mono-custom text-xs md:text-sm text-[#0A0A0A]/40 uppercase tracking-widest">
              02 / CASE STUDY
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              IPPI BEER
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              33cl Can Packaging · 4-Pack Carrier · Digital &amp; Social Assets · Apparel &amp; Accessories
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT STATUS</div>
              <div className="text-[#5B2EFF] font-bold">
                PERSONAL PROJECT · 2026
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">LOCATION</div>
                <div className="font-semibold text-[#0A0A0A]">BRUSSELS</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">YEAR</div>
                <div className="font-semibold text-[#0A0A0A]">2026</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">DISCIPLINES</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• BRAND STRATEGY &amp; IDENTITY</div>
                <div>• LOGO &amp; VISUAL SYSTEM</div>
                <div>• PACKAGING &amp; PRODUCT ARCHITECTURE</div>
                <div>• DIGITAL, SOCIAL &amp; MERCHANDISING</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================================================
          INTRODUCTION — BRAND IDENTITY & PACKAGING SYSTEM
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                CORE CONCEPT
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                BRAND IDENTITY &amp;<br />PACKAGING SYSTEM
              </h2>
              <div className="mt-4 inline-block px-3 py-1 bg-[#5B2EFF]/10 border border-[#5B2EFF]/20 font-mono-custom text-[11px] uppercase tracking-wider text-[#5B2EFF] font-bold">
                “JOIN THE PLAYGROUND”
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                IPPI Beer is a personal branding project built around sport, community and the culture that exists around the game.
              </p>
              <p>
                I wanted to create a beer brand from the ground up, but I didn't want it to look like a traditional craft brewery. Sport was an important starting point for me, especially the people, places and moments that exist around it.
              </p>
              <p>
                The idea eventually became “Join the Playground”.
              </p>
              <p>
                For me, a playground is more than a sports field. It can be a pitch, a bar, a bench, a locker room or simply a place where people meet and spend time together. That idea became the foundation of the brand and gave me room to develop IPPI beyond the beer itself.
              </p>
            </div>
          </div>

          {/* Master Range Hero Preview */}
          <div className="space-y-3">
            <div
              onClick={() => handleImageClick('/images/IPPI_07_CANS_4.webp', 'IPPI BEER — 4-Can Product Family')}
              className="relative w-full aspect-[16/9] overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#EAE8E0] flex items-center justify-center"
            >
              <img
                src="/images/IPPI_07_CANS_4.webp"
                alt="IPPI BEER 4-Can Packaging Family: Kick-Off, Long Game, Overtime, Third Half"
                className="w-full h-full object-contain p-4 sm:p-6 md:p-8 block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND IMAGE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-semibold text-[#0A0A0A]">THE IPPI BEER COLLECTION</span>
              <span>COMPLETE 4-CAN PACKAGING ARCHITECTURE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          01 — BRAND IDENTITY
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                01 / BRAND IDENTITY
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                BRAND IDENTITY
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                The final identity is built around a simple circular symbol and a strong wordmark.
              </p>
              <p>
                The symbol was one of the most difficult parts of the project. I explored many different directions before arriving at the final shape. The circle became a way of expressing movement, community and the idea of a shared space, while the opening gives the mark a more dynamic feel.
              </p>
            </div>
          </div>

          {/* Master Logotype */}
          <div className="space-y-3 mb-12">
            <div
              onClick={() => handleImageClick('/images/IPPI_01_LOGO_PRIMARY.webp', 'IPPI BEER — Master Logotype')}
              className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] bg-[#FAF8F5] p-6 sm:p-12 shadow-sm flex items-center justify-center"
            >
              <img
                src="/images/IPPI_01_LOGO_PRIMARY.webp"
                alt="IPPI BEER Primary Horizontal Logotype"
                className="max-w-2xl w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">MASTER LOGOTYPE</span>
              <span>PRIMARY HORIZONTAL LOCKUP</span>
            </div>
          </div>

          {/* Symbol & Logo Variations Matrix */}
          <div className="editorial-grid-2 mb-12 items-start">
            {/* Symbol & Emblem Lockups */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick('/images/IPPI_02_LOGO_VARIATIONS2.webp', 'IPPI BEER — Symbol & Lockups')}
                className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] bg-[#FAF8F5] p-6 sm:p-8 shadow-sm"
              >
                <img
                  src="/images/IPPI_02_LOGO_VARIATIONS2.webp"
                  alt="IPPI BEER Primary Emblem and Secondary Mark"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">SYMBOL</span>
                <span>PRIMARY EMBLEM &amp; SECONDARY MARK</span>
              </div>
            </div>

            {/* Colour Variations */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick('/images/IPPI_02_LOGO_VARIATIONS.webp', 'IPPI BEER — Colour Variations')}
                className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] bg-[#FAF8F5] p-6 sm:p-8 shadow-sm"
              >
                <img
                  src="/images/IPPI_02_LOGO_VARIATIONS.webp"
                  alt="IPPI BEER Colour Variations"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">COLOUR VARIATIONS</span>
                <span>PRIMARY COLOUR / DARK / LIGHT</span>
              </div>
            </div>
          </div>

          {/* Identity System Rules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
            <div className="p-6 bg-[#EAE8E0] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">CLEAR SPACE</div>
              <div className="text-[#0A0A0A] font-bold text-sm">1X</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                DEFINED PROPORTIONAL MARGINS ACROSS ALL TOUCHPOINTS
              </div>
            </div>

            <div className="p-6 bg-[#EAE8E0] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">MINIMUM SIZE</div>
              <div className="text-[#0A0A0A] font-bold text-sm">PRINT &amp; DIGITAL</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                43 MM FOR PRINT / 120 PX FOR DIGITAL APPLICATIONS
              </div>
            </div>

            <div className="p-6 bg-[#EAE8E0] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">LOGO SYSTEM</div>
              <div className="text-[#0A0A0A] font-bold text-sm">MODULAR LOCKUPS</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                DIFFERENT LOCKUPS FOR DIFFERENT APPLICATIONS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — VISUAL SYSTEM
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                02 / VISUAL SYSTEM
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                VISUAL SYSTEM
              </h2>
              <p className="font-display font-semibold text-lg sm:text-xl text-[#0A0A0A]/70 uppercase mt-2">
                BRAND KIT &amp; SYSTEM RULES
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p className="font-bold text-[#0A0A0A]">
                A visual system designed to keep IPPI recognisable across different applications.
              </p>
              <p>
                The visual identity needed to work everywhere, from a can to a website, a poster, a cap or a piece of clothing.
              </p>
              <p>
                I kept the system deliberately simple. The goal was not to add more elements, but to create a small set of recognisable elements that could be used consistently across the brand.
              </p>
            </div>
          </div>

          {/* System Rules Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase mb-12">
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-1">
              <div className="text-[#5B2EFF] font-bold">LOGO</div>
              <div className="text-[#0A0A0A] font-semibold">CLEAR SPACE / SCALE / LOCKUPS</div>
            </div>
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-1">
              <div className="text-[#5B2EFF] font-bold">COLOUR PALETTE</div>
              <div className="text-[#0A0A0A] font-semibold">PRIMARY COLOURS / ACCENTS</div>
            </div>
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-1">
              <div className="text-[#5B2EFF] font-bold">TYPOGRAPHY</div>
              <div className="text-[#0A0A0A] font-semibold">GEOMETRIC / CONTEMPORARY / SPORT-INSPIRED</div>
            </div>
          </div>

          {/* Brand Kit Visual Presentations */}
          <div className="space-y-10">
            {/* Brand Kit Page 01: Logo Architecture */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick('/images/IPPI_BRAND_KIT_PAGE_01.webp', 'IPPI BEER — Brand Kit: Logo Architecture & System Rules')}
                className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm"
              >
                <img
                  src="/images/IPPI_BRAND_KIT_PAGE_01.webp"
                  alt="IPPI BEER Brand Kit Logo Architecture and System Rules"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">SYSTEM SPECIFICATION 01</span>
                <span>LOGO ARCHITECTURE / CLEAR SPACE / SCALABILITY</span>
              </div>
            </div>

            {/* Brand Kit Pages 02 & 03: Colour Palette & Typography */}
            <div className="editorial-grid-2 items-start">
              {/* Page 02: Colour Palette */}
              <div className="space-y-3">
                <div
                  onClick={() => handleImageClick('/images/IPPI_BRAND_KIT_PAGE_02.webp', 'IPPI BEER — Brand Kit: Colour Palette')}
                  className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm"
                >
                  <img
                    src="/images/IPPI_BRAND_KIT_PAGE_02.webp"
                    alt="IPPI BEER Brand Kit Colour Palette"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                  <span className="font-bold text-[#0A0A0A]">COLOUR PALETTE</span>
                  <span>PRIMARY COLOURS &amp; ACCENTS</span>
                </div>
              </div>

              {/* Page 03: Typography */}
              <div className="space-y-3">
                <div
                  onClick={() => handleImageClick('/images/IPPI_BRAND_KIT_PAGE_03.webp', 'IPPI BEER — Brand Kit: Typography System')}
                  className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm"
                >
                  <img
                    src="/images/IPPI_BRAND_KIT_PAGE_03.webp"
                    alt="IPPI BEER Brand Kit Typography & Graphic System"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                  <span className="font-bold text-[#0A0A0A]">TYPOGRAPHY &amp; MESH</span>
                  <span>GEOMETRIC &amp; SPORT-INSPIRED TYPE SYSTEM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — PACKAGING (MAIN VISUAL SECTION)
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          {/* Section Heading */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                03 / PACKAGING
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                PACKAGING
              </h2>
              <p className="font-display font-semibold text-lg sm:text-xl text-[#0A0A0A]/70 uppercase mt-2">
                THE 33CL CAN FAMILY
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p className="font-bold text-[#0A0A0A]">
                A SINGLE PACKAGING SYSTEM ACROSS FOUR DIFFERENT BEERS
              </p>
              <p>
                The packaging was the most important part of the project because it was where the identity really had to prove itself.
              </p>
              <p>
                Each beer has its own colour and graphic treatment, but the same core elements are kept throughout the range. This creates a family of products rather than four unrelated cans.
              </p>
            </div>
          </div>

          {/* Full Range Can Family Lineup */}
          <div className="space-y-3 mb-16">
            <div
              onClick={() => handleImageClick('/images/IPPI_07_CANS_4.webp', 'IPPI BEER — The 33cl Can Family')}
              className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#EAE8E0]"
            >
              <img
                src="/images/IPPI_07_CANS_4.webp"
                alt="IPPI BEER Complete Can Family Lineup: Kick-Off, Long Game, Overtime, Third Half"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND CAN FAMILY</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">ONE BRAND + FOUR BEERS + ONE SYSTEM</span>
              <span>33CL CAN ARCHITECTURE</span>
            </div>
          </div>

          {/* The Four Beers Information & Individual Cans */}
          <div className="mb-16">
            <div className="mb-8 pb-3 border-b border-[#D9D7D1] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-[#0A0A0A]">
                THE FOUR BEERS
              </h3>
              <span className="font-mono-custom text-xs uppercase text-[#0A0A0A]/50">
                RECIPES &amp; FLAVOUR ARCHITECTURES
              </span>
            </div>

            {/* Grid of Cans */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
              {/* 01 / KICK-OFF */}
              <div className="space-y-4">
                <div
                  onClick={() => handleImageClick('/images/IPPI_06_CANS_KICK_OFF.webp', 'IPPI BEER — 01 / Kick-Off')}
                  className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#FAF8F5] p-4"
                >
                  <img
                    src="/images/IPPI_06_CANS_KICK_OFF.webp"
                    alt="01 / KICK-OFF Hoppy Lager 3.8%"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="font-mono-custom text-xs uppercase space-y-1">
                  <div className="font-bold text-sm text-[#0A0A0A]">01 / KICK-OFF</div>
                  <div className="text-[#5B2EFF] font-semibold">HOPPY LAGER · 3.8%</div>
                </div>
              </div>

              {/* 02 / LONG GAME */}
              <div className="space-y-4">
                <div
                  onClick={() => handleImageClick('/images/IPPI_06_CANS_LONG_GAME.webp', 'IPPI BEER — 02 / Long Game')}
                  className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#FAF8F5] p-4"
                >
                  <img
                    src="/images/IPPI_06_CANS_LONG_GAME.webp"
                    alt="02 / LONG GAME Belgian Hefeweizen 4.5%"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="font-mono-custom text-xs uppercase space-y-1">
                  <div className="font-bold text-sm text-[#0A0A0A]">02 / LONG GAME</div>
                  <div className="text-[#5B2EFF] font-semibold">BELGIAN HEFEWEIZEN · 4.5%</div>
                </div>
              </div>

              {/* 04 / THIRD HALF */}
              <div className="space-y-4">
                <div
                  onClick={() => handleImageClick('/images/IPPI_06_CANS_THIRD_HALF.webp', 'IPPI BEER — 04 / Third Half')}
                  className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#FAF8F5] p-4"
                >
                  <img
                    src="/images/IPPI_06_CANS_THIRD_HALF.webp"
                    alt="04 / THIRD HALF Mango Passion Ale 5.9%"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="font-mono-custom text-xs uppercase space-y-1">
                  <div className="font-bold text-sm text-[#0A0A0A]">04 / THIRD HALF</div>
                  <div className="text-[#5B2EFF] font-semibold">MANGO PASSION ALE · 5.9%</div>
                </div>
              </div>
            </div>

            {/* Full 4-Recipe Specification Table */}
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono-custom text-xs uppercase">
                <div className="space-y-1 border-l-2 border-[#E73946] pl-3">
                  <div className="font-bold text-[#0A0A0A]">01 / KICK-OFF</div>
                  <div className="text-[#0A0A0A]/70 text-[11px]">HOPPY LAGER · 3.8%</div>
                </div>
                <div className="space-y-1 border-l-2 border-[#1D3357] pl-3">
                  <div className="font-bold text-[#0A0A0A]">02 / LONG GAME</div>
                  <div className="text-[#0A0A0A]/70 text-[11px]">BELGIAN HEFEWEIZEN · 4.5%</div>
                </div>
                <div className="space-y-1 border-l-2 border-[#E36829] pl-3">
                  <div className="font-bold text-[#0A0A0A]">03 / OVERTIME</div>
                  <div className="text-[#0A0A0A]/70 text-[11px]">TROPICAL IPA · 6%</div>
                </div>
                <div className="space-y-1 border-l-2 border-[#6B2D8A] pl-3">
                  <div className="font-bold text-[#0A0A0A]">04 / THIRD HALF</div>
                  <div className="text-[#0A0A0A]/70 text-[11px]">MANGO PASSION ALE · 5.9%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Carrier Packaging (4-Pack Die-Cut Carrier) */}
          <div className="pt-12 border-t border-[#D9D7D1] space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 space-y-3">
                <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold">
                  MULTIPACK PACKAGING
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-[#0A0A0A]">
                  4-PACK DIE-CUT CARRIER
                </h3>
              </div>

              <div className="md:col-span-7 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
                <p>
                  The multipack extends the same visual system to a larger format while keeping the different beers easy to recognise.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => handleImageClick('/images/IPPI_08_4PACK.webp', 'IPPI BEER — 4-Pack Die-Cut Carrier')}
                className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#EAE8E0]"
              >
                <img
                  src="/images/IPPI_08_4PACK.webp"
                  alt="IPPI BEER 4-Pack Die-Cut Carrier Outer Packaging"
                  className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>EXPAND CARRIER</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">4-PACK CORRUGATED CARRIER BOX</span>
                <span>DIE-CUT STRUCTURAL PACKAGING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 — APPLICATIONS (DIGITAL & MERCHANDISING)
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="mb-12 font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold">
            04 / APPLICATIONS
          </div>

          <div className="space-y-20">
            {/* 1. Digital & Social Media Direction */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 space-y-2">
                  <div className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-bold">
                    DIGITAL &amp; SOCIAL
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase tracking-tight">
                    BUILDING THE BRAND BEYOND THE CAN
                  </h3>
                </div>

                <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
                  <p>
                    The social media direction was designed to feel more like a lifestyle brand than a traditional brewery.
                  </p>
                  <p>
                    The beer is always present, but the content also focuses on sport, people, moments and the atmosphere around the brand.
                  </p>
                </div>
              </div>

              {/* Instagram 9-Grid Visual */}
              <div className="space-y-3">
                <div
                  onClick={() => handleImageClick('/images/IPPI_17_SOCIAL_MEDIA.webp', 'IPPI BEER — Social Media Lifestyle & Product Storytelling')}
                  className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm flex items-center justify-center bg-[#FAF8F5]"
                >
                  <img
                    src="/images/IPPI_17_SOCIAL_MEDIA.webp"
                    alt="IPPI BEER Instagram Social Media Lifestyle Design Feed"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND SOCIAL GRID</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
                  <span className="font-bold text-[#0A0A0A]">DIGITAL STORYTELLING</span>
                  <span>9-GRID INSTAGRAM CURATION SYSTEM</span>
                </div>
              </div>
            </div>

            {/* 2. Merchandising — Extending the Brand */}
            <div className="space-y-8 pt-16 border-t border-[#D9D7D1]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5 space-y-2">
                  <div className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-bold">
                    MERCHANDISING
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase tracking-tight">
                    EXTENDING THE BRAND BEYOND THE PRODUCT
                  </h3>
                </div>

                <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
                  <p>
                    I also wanted to see whether the identity could work outside the beer itself.
                  </p>
                  <p>
                    Moving the system onto clothing and everyday objects became a useful test: if the identity only works on a can, it is not really a complete brand system.
                  </p>
                </div>
              </div>

              {/* 3 Specified Merchandising Products */}
              <div className="editorial-grid-3">
                {/* Product 01: Windbreaker */}
                <div className="space-y-4">
                  <div
                    onClick={() => handleImageClick('/images/IPPI_18_MERCH.webp', 'IPPI BEER — Windbreaker')}
                    className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm flex items-center justify-center bg-[#FAF8F5] p-4"
                  >
                    <img
                      src="/images/IPPI_18_MERCH.webp"
                      alt="IPPI BEER Windbreaker — Midnight Navy"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="font-mono-custom text-xs uppercase space-y-1">
                    <div className="font-bold text-sm text-[#0A0A0A]">WINDBREAKER</div>
                    <div className="text-[#5B2EFF] font-semibold">MIDNIGHT NAVY</div>
                  </div>
                </div>

                {/* Product 02: Structured Cap */}
                <div className="space-y-4">
                  <div
                    onClick={() => handleImageClick('/images/IPPI_18_MERCH1.webp', 'IPPI BEER — Structured Cap')}
                    className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm flex items-center justify-center bg-[#FAF8F5] p-4"
                  >
                    <img
                      src="/images/IPPI_18_MERCH1.webp"
                      alt="IPPI BEER Structured Cap — Heather Charcoal"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="font-mono-custom text-xs uppercase space-y-1">
                    <div className="font-bold text-sm text-[#0A0A0A]">STRUCTURED CAP</div>
                    <div className="text-[#5B2EFF] font-semibold">HEATHER CHARCOAL</div>
                  </div>
                </div>

                {/* Product 03: Insulated Flask */}
                <div className="space-y-4">
                  <div
                    onClick={() => handleImageClick('/images/IPPI_18_MERCH2.webp', 'IPPI BEER — Insulated Flask')}
                    className="w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm flex items-center justify-center bg-[#FAF8F5] p-4"
                  >
                    <img
                      src="/images/IPPI_18_MERCH2.webp"
                      alt="IPPI BEER Insulated Flask — 750 ML"
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="font-mono-custom text-xs uppercase space-y-1">
                    <div className="font-bold text-sm text-[#0A0A0A]">INSULATED FLASK</div>
                    <div className="text-[#5B2EFF] font-semibold">750 ML</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          NEXT PROJECT ROUTING
      ================================================== */}
      <footer className="pt-16 md:pt-20">
        <div className="editorial-hero-frame">
          <div
            onClick={() => onNavigate(`/work/${isdinProject.slug}`)}
            className="group block p-8 md:p-12 bg-[#ECEAE3] hover:bg-[#E5E3DC] border border-[#D9D7D1] transition-all duration-300 cursor-pointer shadow-sm"
          >
            <div className="flex items-center justify-between font-mono-custom text-xs uppercase tracking-widest text-[#0A0A0A]/50 mb-4">
              <span>NEXT PROJECT</span>
              <span className="text-[#5B2EFF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                VIEW CASE STUDY <ArrowRight size={14} />
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="font-mono-custom text-xs text-[#5B2EFF] font-semibold mb-1">
                  03 / ISDINCEUTICS
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  ISDINCEUTICS
                </h3>
              </div>

              <div className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-semibold">
                VIEW CASE STUDY ↗
              </div>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
};
