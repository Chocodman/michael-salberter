import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Maximize2, Play, Pause } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { LazyVideo } from './LazyVideo';

interface BmwRedDevilsProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const BmwRedDevilsProjectPage: React.FC<BmwRedDevilsProjectPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const ippiProject = projectsData.find((p) => p.slug === 'ippi-beer') || projectsData[1];
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

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
          <span className="text-[#5B2EFF] font-semibold">01</span>
          <span>/</span>
          <span>BMW × BELGIAN RED DEVILS</span>
        </div>
      </div>

      {/* ==================================================
          HEADER & METADATA
      ================================================== */}
      <header className="py-12 md:py-20 border-b border-[#D9D7D1]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Title and Identification */}
          <div className="md:col-span-8 space-y-4">
            <div className="font-mono-custom text-xs md:text-sm text-[#0A0A0A]/40 uppercase tracking-widest">
              01 / CASE STUDY
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              BMW ×<br />
              BELGIAN RED DEVILS
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              Campaign Adaptation / Visual Design / Digital / Print / Motion
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT CREDITS</div>
              <div className="text-[#0A0A0A] font-bold leading-relaxed">
                Professional work · BMW Belgium - Service Plan Belux
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">ROLE</div>
                <div className="font-semibold text-[#5B2EFF]">CAMPAIGN ADAPTATION</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">TIMELINE</div>
                <div className="font-semibold text-[#0A0A0A]">2025–2026</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">SCOPE OF WORK</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• VISUAL DESIGN (PLAYER × CAR)</div>
                <div>• DIGITAL FORMAT ADAPTATION</div>
                <div>• PRINT &amp; PHYSICAL MOCKUPS</div>
                <div>• STADIUM LED MOTION ADAPTATION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-10 pt-8 border-t border-[#D9D7D1]">
          <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed max-w-4xl">
            A professional campaign project for BMW Belgium and the Belgian Red Devils, where I worked on visual adaptations across digital, print, physical applications and motion.
          </p>
        </div>
      </header>

      {/* ==================================================
          02 — CONTEXT
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-4">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                02 — CONTEXT
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                CONTEXT
              </h2>
            </div>

            <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                This project was part of the BMW × Belgian Red Devils campaign.
              </p>
              <p>
                I worked within an existing campaign direction and was responsible for developing several of the visual applications around it.
              </p>
              <p>
                The main part of my work was the Player × Car series, where I created individual compositions combining Belgian players with different BMW models while keeping the campaign consistent.
              </p>
            </div>
          </div>

          {/* Master Campaign Key Visual */}
          <div className="mt-12 space-y-3">
            <div
              onClick={() =>
                handleImageClick(
                  '/images/8240-003423_BMW_RedDevils_DIGITAL_SOME_Link_HEADER_1920x1080px_BEFR.webp',
                  'BMW × Belgian Red Devils — Campaign Key Visual'
                )
              }
              className="relative w-full aspect-[16/9] overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
            >
              <img
                src="/images/8240-003423_BMW_RedDevils_DIGITAL_SOME_Link_HEADER_1920x1080px_BEFR.webp"
                alt="BMW × Belgian Red Devils Campaign Key Visual"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND IMAGE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-semibold text-[#0A0A0A]">MASTER CAMPAIGN KEY VISUAL</span>
              <span>1920 × 1080 PX · LANDSCAPE BANNER</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — SECTION 01: PLAYER × CAR (MAIN VISUAL MOMENT)
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          {/* Section Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                03 — SECTION 01
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                PLAYER × CAR
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                This was probably the biggest part of my contribution to the project.
              </p>
              <p>
                I worked on the compositions from the source material through to the final visuals: player cut-outs, colour matching, lighting, atmosphere and the integration of the cars.
              </p>
              <p>
                Each visual had to feel different because of the player and the car, but still look like part of the same campaign.
              </p>
            </div>
          </div>

          {/* Large System Overview Grid */}
          <div className="mb-16 md:mb-24 space-y-3">
            <div className="flex items-center justify-between font-mono-custom text-xs uppercase tracking-wider text-[#0A0A0A]/60 pb-2 border-b border-[#D9D7D1]">
              <span className="font-bold text-[#0A0A0A]">CAMPAIGN MODULAR SYSTEM OVERVIEW</span>
              <span className="text-[#5B2EFF]">17+ PLAYER × CAR VARIATIONS</span>
            </div>

            <div
              onClick={() =>
                handleImageClick(
                  '/images/8240-003423_BMW_RedDevils_SOCIAL_EXPORT_PREVIEW2.webp',
                  'BMW × Belgian Red Devils — Complete Player × Car System Overview'
                )
              }
              className="relative w-full aspect-[2/1] md:aspect-[16/9] overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
            >
              <img
                src="/images/8240-003423_BMW_RedDevils_SOCIAL_EXPORT_PREVIEW2.webp"
                alt="BMW × Belgian Red Devils Complete Player × Car System Overview"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND SYSTEM OVERVIEW</span>
              </div>
            </div>

            <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-2 leading-relaxed">
              Overview showing the scale, consistency and modular structure across multiple BMW electric models, player positions and custom colourways.
            </p>
          </div>

          {/* Selected Player × Car Visuals Header */}
          <div className="mb-10 pb-4 border-b border-[#D9D7D1] flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#5B2EFF] font-semibold">
                CURATED SELECTION
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-[#0A0A0A]">
                SELECTED PLAYER × CAR VISUALS
              </h3>
            </div>
            <div className="font-mono-custom text-xs uppercase text-[#0A0A0A]/50">
              SELECTED EXAMPLES FROM THE LARGER SYSTEM
            </div>
          </div>

          {/* 6 Selected Artworks with EXACT Required Captions */}
          <div className="space-y-16 md:space-y-24">
            {/* 01 / DOKU (Square Showcase) */}
            <div className="editorial-square-frame">
              <div className="space-y-3">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/01_KV_IX1_DOKU_COLOR_DAYTONABLUE.webp',
                      '01 / JÉRÉMY DOKU × BMW iX1 — Daytona Blue'
                    )
                  }
                  className="relative w-full aspect-square overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
                >
                  <img
                    src="/images/01_KV_IX1_DOKU_COLOR_DAYTONABLUE.webp"
                    alt="01 / JÉRÉMY DOKU × BMW iX1 — Daytona Blue"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND IMAGE</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A] pt-2 border-t border-[#D9D7D1]/50 font-bold">
                  <span>01 / JÉRÉMY DOKU × BMW iX1 — Daytona Blue</span>
                  <span className="text-[#5B2EFF] font-semibold text-[11px]">BMW iX1</span>
                </div>
              </div>
            </div>

            {/* 02 & 03: THEATE + WITSEL (2-Column Pair) */}
            <div className="editorial-grid-2">
              {/* 02 / THEATE */}
              <div className="space-y-3">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/01_KV_IX2_THEATE_COLOR_THUNDER.webp',
                      '02 / ARTHUR THEATE × BMW iX2 — Thunder'
                    )
                  }
                  className="relative w-full aspect-square overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
                >
                  <img
                    src="/images/01_KV_IX2_THEATE_COLOR_THUNDER.webp"
                    alt="02 / ARTHUR THEATE × BMW iX2 — Thunder"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A] pt-2 border-t border-[#D9D7D1]/50 font-bold">
                  <span>02 / ARTHUR THEATE × BMW iX2 — Thunder</span>
                </div>
              </div>

              {/* 03 / WITSEL */}
              <div className="space-y-3">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/01_KV_IX2_WITSEL_WILDBERRY.webp',
                      '03 / AXEL WITSEL × BMW iX2 — Wildberry'
                    )
                  }
                  className="relative w-full aspect-square overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
                >
                  <img
                    src="/images/01_KV_IX2_WITSEL_WILDBERRY.webp"
                    alt="03 / AXEL WITSEL × BMW iX2 — Wildberry"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A] pt-2 border-t border-[#D9D7D1]/50 font-bold">
                  <span>03 / AXEL WITSEL × BMW iX2 — Wildberry</span>
                </div>
              </div>
            </div>

            {/* 04 / DE KETELAERE (Square Showcase) */}
            <div className="editorial-square-frame">
              <div className="space-y-3">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/8240-003423_BMW_RedDevils_03__I5TOURING_DEKETELAERE_DAYTONA.webp',
                      '04 / CHARLES DE KETELAERE × BMW i5 TOURING — Daytona'
                    )
                  }
                  className="relative w-full aspect-square overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
                >
                  <img
                    src="/images/8240-003423_BMW_RedDevils_03__I5TOURING_DEKETELAERE_DAYTONA.webp"
                    alt="04 / CHARLES DE KETELAERE × BMW i5 TOURING — Daytona"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND IMAGE</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A] pt-2 border-t border-[#D9D7D1]/50 font-bold">
                  <span>04 / CHARLES DE KETELAERE × BMW i5 TOURING — Daytona</span>
                  <span className="text-[#5B2EFF] font-semibold text-[11px]">BMW i5 TOURING</span>
                </div>
              </div>
            </div>

            {/* 05 & 06: TIELEMANS + MOREIRA (2-Column Pair) */}
            <div className="editorial-grid-2">
              {/* 05 / TIELEMANS */}
              <div className="space-y-3">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/8240-003423_BMW_RedDevils_03_I4_TIELEMANS_TELESTO.webp',
                      '05 / YOURI TIELEMANS × BMW i4 — Telesto'
                    )
                  }
                  className="relative w-full aspect-square overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
                >
                  <img
                    src="/images/8240-003423_BMW_RedDevils_03_I4_TIELEMANS_TELESTO.webp"
                    alt="05 / YOURI TIELEMANS × BMW i4 — Telesto"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A] pt-2 border-t border-[#D9D7D1]/50 font-bold">
                  <span>05 / YOURI TIELEMANS × BMW i4 — Telesto</span>
                </div>
              </div>

              {/* 06 / MOREIRA */}
              <div className="space-y-3">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/8240-003423_BMW_RedDevils_03_I5TOURING_MOREIRA_MALDIVESBLUE.webp',
                      '06 / DIEGO MOREIRA × BMW i5 TOURING — Maldives Blue'
                    )
                  }
                  className="relative w-full aspect-square overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
                >
                  <img
                    src="/images/8240-003423_BMW_RedDevils_03_I5TOURING_MOREIRA_MALDIVESBLUE.webp"
                    alt="06 / DIEGO MOREIRA × BMW i5 TOURING — Maldives Blue"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A] pt-2 border-t border-[#D9D7D1]/50 font-bold">
                  <span>06 / DIEGO MOREIRA × BMW i5 TOURING — Maldives Blue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 — SECTION 02: DIGITAL
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                04 — SECTION 02
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                DIGITAL
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                I also adapted the campaign to several digital formats, including social assets, email signatures, …
              </p>
              <p>
                The challenge was mainly keeping the same visual impact while working with very different formats and proportions.
              </p>
            </div>
          </div>

          {/* Digital Format Applications Showcase */}
          <div className="space-y-10">
            {/* Social Media Link Header — Square (600x600px) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#ECEAE3] p-6 md:p-8 border border-[#D9D7D1]">
              <div className="md:col-span-5">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/8240-003423_BMW_RedDevils_DIGITAL_SOME_Link_HEADER_600x600px_BENL.webp',
                      'BMW × Belgian Red Devils — Social Link Header (600×600px)'
                    )
                  }
                  className="relative aspect-square max-w-[320px] mx-auto overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-sm group cursor-pointer"
                >
                  <img
                    src="/images/8240-003423_BMW_RedDevils_DIGITAL_SOME_Link_HEADER_600x600px_BENL.webp"
                    alt="BMW Social Link Header 600x600px"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={10} />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-3 font-mono-custom">
                <div className="text-xs text-[#5B2EFF] font-semibold uppercase tracking-wider">
                  SQUARE SOCIAL ASSET · 600 × 600 PX
                </div>
                <h3 className="font-display font-black text-2xl md:text-3xl uppercase text-[#0A0A0A]">
                  SOCIAL MEDIA VISUAL
                </h3>
                <p className="text-xs uppercase text-[#0A0A0A]/65 leading-relaxed">
                  Digital square adaptation designed for social feeds and link headers, re-architecting the player cutout, vehicle placement and RBFA emblem for compact viewports.
                </p>
              </div>
            </div>

            {/* Outlook Email Signatures (764x141px) */}
            <div className="bg-[#ECEAE3] p-6 md:p-8 border border-[#D9D7D1] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono-custom text-xs uppercase">
                <span className="font-display font-bold text-xl text-[#0A0A0A]">
                  OUTLOOK EMAIL SIGNATURES
                </span>
                <span className="text-[#5B2EFF] font-semibold">764 × 141 PX · HORIZONTAL DIGITAL ASSETS</span>
              </div>

              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/65 leading-relaxed max-w-2xl">
                Corporate digital adaptations developed for official BMW Belux email communications, preserving the high-contrast campaign typography and vehicle profile within strict vertical constraints.
              </p>

              <div className="space-y-4 pt-2">
                {/* Signature 01 */}
                <div className="space-y-2">
                  <div
                    onClick={() =>
                      handleImageClick(
                        '/images/8240-003423_BMW_RedDevils_DIGITAL_OUTLOOK_SIGNATURE_764x141px_1.webp',
                        'BMW Outlook Email Signature 01'
                      )
                    }
                    className="relative w-full aspect-[764/141] overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-sm group cursor-pointer"
                  >
                    <img
                      src="/images/8240-003423_BMW_RedDevils_DIGITAL_OUTLOOK_SIGNATURE_764x141px_1.webp"
                      alt="BMW Outlook Email Signature 01"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="font-mono-custom text-[10px] uppercase text-[#0A0A0A]/50">
                    FIG. 01 — BMW OUTLOOK SIGNATURE (EXECUTION 01)
                  </div>
                </div>

                {/* Signature 02 */}
                <div className="space-y-2">
                  <div
                    onClick={() =>
                      handleImageClick(
                        '/images/8240-003423_BMW_RedDevils_DIGITAL_OUTLOOK_SIGNATURE_764x141px_2.webp',
                        'BMW Outlook Email Signature 02'
                      )
                    }
                    className="relative w-full aspect-[764/141] overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-sm group cursor-pointer"
                  >
                    <img
                      src="/images/8240-003423_BMW_RedDevils_DIGITAL_OUTLOOK_SIGNATURE_764x141px_2.webp"
                      alt="BMW Outlook Email Signature 02"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="font-mono-custom text-[10px] uppercase text-[#0A0A0A]/50">
                    FIG. 02 — BMW OUTLOOK SIGNATURE (EXECUTION 02)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          05 — SECTION 03: PRINT & PHYSICAL APPLICATIONS
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                05 — SECTION 03
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                PRINT &amp; PHYSICAL APPLICATIONS
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                For the physical applications, I prepared the artwork and mockups for different placements.
              </p>
              <p>
                This included print production, showroom applications and a selfie wall activation.
              </p>
            </div>
          </div>

          {/* Prominent Real-World Physical Mockups (2-Column Large Display) */}
          <div className="editorial-grid-2">
            {/* Showroom POS Grizly Mockup */}
            <div className="space-y-3">
              <div
                onClick={() =>
                  handleImageClick(
                    '/images/8240-003423_BMW_RedDevils_PRINT_GRIZLY_MOCKUP_BLack.webp',
                    'Showroom / POS Application — Grizly Display Mockup'
                  )
                }
                className="relative w-full aspect-[2752/1536] overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
              >
                <img
                  src="/images/8240-003423_BMW_RedDevils_PRINT_GRIZLY_MOCKUP_BLack.webp"
                  alt="Showroom / POS Application — Grizly Display Mockup"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/70 pt-2 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">SHOWROOM / POS APPLICATION</span>
                <span>GRIZLY DISPLAY MOCKUP</span>
              </div>
            </div>

            {/* Selfie Wall Activation */}
            <div className="space-y-3">
              <div
                onClick={() =>
                  handleImageClick(
                    '/images/8240-003423_BMW_RedDevils_PRINT_SELFIE_WALL_MOCKUP.webp',
                    'Physical Activation — Matchday Selfie Wall Mockup'
                  )
                }
                className="relative w-full aspect-[5504/3072] overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-md group cursor-pointer"
              >
                <img
                  src="/images/8240-003423_BMW_RedDevils_PRINT_SELFIE_WALL_MOCKUP.webp"
                  alt="Physical Activation — Matchday Selfie Wall Mockup"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/70 pt-2 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">SELFIE WALL ACTIVATION</span>
                <span>MATCHDAY PHYSICAL ACTIVATION MOCKUP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          06 — SECTION 04: STADIUM MOTION
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                06 — SECTION 04
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                STADIUM MOTION
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                I also worked on the stadium LED adaptation.
              </p>
              <p>
                The format was very different from the other assets: an ultra-wide LED ribbon designed to run around the stadium. I had to adapt the campaign so that the movement remained readable and effective in that environment.
              </p>
            </div>
          </div>

          {/* Primary Motion Video Player — Ultra-Wide 24:1 Canvas */}
          <div className="space-y-6">
            <div className="bg-[#050A14] p-4 sm:p-6 md:p-8 border border-[#D9D7D1] shadow-md space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-white/80 font-mono-custom text-xs uppercase pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5B2EFF] animate-ping"></span>
                  <span className="text-white font-semibold tracking-wider">ULTRA-WIDE STADIUM LED RIBBON</span>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-[11px]">
                  <span>3456 × 144 PX</span>
                  <span>•</span>
                  <span>24:1 PANORAMIC</span>
                  <span>•</span>
                  <button
                    onClick={toggleVideoPlay}
                    className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-[10px] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                    <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div
                onClick={toggleVideoPlay}
                className="relative w-full aspect-[24/1] bg-[#002855] overflow-hidden border border-[#004080] shadow-inner group cursor-pointer flex items-center justify-center"
              >
                <LazyVideo
                  ref={videoRef}
                  src="/videos/8240-003423_BMW_RedDevils_STADIUM_LED.mp4"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-2 font-mono-custom text-[11px] uppercase tracking-wider">
                    {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                    <span>{isPlaying ? 'CLICK TO PAUSE' : 'CLICK TO PLAY'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stadium Motion Technical Specification */}
            <div className="bg-[#ECEAE3] p-6 md:p-8 border border-[#D9D7D1]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
                <div className="space-y-1">
                  <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">ENVIRONMENT</div>
                  <div className="font-bold text-[#0A0A0A]">KING BAUDOUIN STADIUM</div>
                  <div className="text-[#0A0A0A]/60 text-[11px]">PERIMETER LED SYSTEM</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">CANVAS DIMENSIONS</div>
                  <div className="font-bold text-[#0A0A0A]">3456 × 144 PX</div>
                  <div className="text-[#0A0A0A]/60 text-[11px]">24:1 CONTINUOUS LOOP</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">ADAPTATION LOGIC</div>
                  <div className="font-bold text-[#5B2EFF]">SYNCHRONIZED MOVEMENT</div>
                  <div className="text-[#0A0A0A]/60 text-[11px]">READABLE AT STADIUM SCALE</div>
                </div>
              </div>
            </div>

            {/* Supporting Animated Sequence (.gif) */}
            <div className="pt-6 border-t border-[#D9D7D1]/60">
              <div className="flex items-center justify-between mb-4 font-mono-custom text-xs uppercase">
                <span className="text-[#0A0A0A]/60 font-semibold">SUPPORTING MATCHDAY ANIMATION PREVIEW</span>
                <span className="text-[#5B2EFF]">ANIMATED SEQUENCE</span>
              </div>

              <div className="editorial-landscape-frame">
                <div
                  onClick={() =>
                    handleImageClick(
                      '/images/8240-003423_BMW_RedDevils_GIF.gif',
                      'BMW × Belgian Red Devils — Supporting Animated Matchday Sequence'
                    )
                  }
                  className="relative w-full aspect-[16/9] overflow-hidden bg-[#0A0E17] border border-[#D9D7D1] shadow-sm group cursor-pointer"
                >
                  <img
                    src="/images/8240-003423_BMW_RedDevils_GIF.gif"
                    alt="BMW × Belgian Red Devils Supporting Animated Matchday Sequence"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          07 — FINAL SECTION
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                07 — FINAL
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                FINAL
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                This project explores how a single campaign can evolve across multiple formats while maintaining a consistent visual identity.
              </p>
              <p>
                I developed and adapted the campaign across different applications, translating the core visual language into a range of digital and physical outputs.
              </p>
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
            onClick={() => onNavigate(`/work/${ippiProject.slug}`)}
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
                  02 / IPPI BEER
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  IPPI BEER
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
