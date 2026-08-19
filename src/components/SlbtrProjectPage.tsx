import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { LazyVideo } from './LazyVideo';

interface SlbtrProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const SlbtrProjectPage: React.FC<SlbtrProjectPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const aldiProject = projectsData.find((p) => p.slug === 'aldi') || projectsData[6];

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
          <span className="text-[#5B2EFF] font-semibold">06</span>
          <span>/</span>
          <span>SLBTR — SPORTS DESIGN</span>
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
              06 / VISUAL ARCHIVE
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              SLBTR — SPORTS DESIGN
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              Football / Graphic Design / Art Direction
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT TYPE</div>
              <div className="text-[#5B2EFF] font-bold">
                PERSONAL PROJECT / VISUAL PRACTICE
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">ROLE</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• GRAPHIC DESIGNER / ART DIRECTION</div>
                <div>• PHOTO COMPOSITING / RETOUCHING</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">CATEGORY</div>
                <div className="font-semibold text-[#0A0A0A]">SPORTS DESIGN</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">TIMELINE</div>
                <div className="font-semibold text-[#0A0A0A]">2025 — 2026</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================================================
          INTRODUCTION
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-2">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold">
                SLBTR
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                FOOTBALL, IMAGE &amp; EXPERIMENTATION
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                SLBTR is my personal space for working with football imagery.
              </p>
              <p>
                I started it to experiment with sports design outside of client work and to explore different ways of turning football photography into graphic compositions.
              </p>
              <p>
                The projects range from matchday visuals and player portraits to more editorial and experimental images.
              </p>
              <p>
                I use them to work on composition, colour, lighting, typography, atmosphere and photo compositing, while trying to keep the emotion of the game at the centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          01 / AUGUST 2026 — CAPTAIN AMERICA YOURI
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                01 / AUGUST 2026
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                CAPTAIN AMERICA YOURI
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                INTERNATIONAL MATCHDAY
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal matchday visual created around the Belgium vs USA fixture.
              </p>
              <p>
                The main image is built around a close-up of Youri Tielemans, using the stadium and trophy imagery to create a more cinematic atmosphere.
              </p>
              <p>
                I then adapted the composition into a social post and a 9:16 story while keeping the same visual direction.
              </p>
            </div>
          </div>

          {/* Master Main Visual */}
          <div className="max-w-[620px] mx-auto w-full mb-8">
            <div
              onClick={() => handleImageClick('/images/USA_BELGIUM_BASE.webp', 'CAPTAIN AMERICA YOURI — FIG. 01A — MAIN VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/USA_BELGIUM_BASE.webp"
                alt="CAPTAIN AMERICA YOURI Main Visual"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>
            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 01A — MAIN VISUAL</span>
              <span className="text-[#5B2EFF]">AUGUST 2026</span>
            </div>
          </div>

          {/* Social Post + 9:16 Story Adaptations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[620px] mx-auto items-start">
            {/* Social Post */}
            <div>
              <div
                onClick={() => handleImageClick('/images/USA_BELGIUM_POST.webp', 'CAPTAIN AMERICA YOURI — FIG. 01B — SOCIAL POST')}
                className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
              >
                <img
                  src="/images/USA_BELGIUM_POST.webp"
                  alt="CAPTAIN AMERICA YOURI Social Post Adaptation"
                  className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">FIG. 01B — SOCIAL POST</span>
                <span>FEED ADAPTATION</span>
              </div>
            </div>

            {/* 9:16 Story */}
            <div>
              <div
                onClick={() => handleImageClick('/images/USA_BELGIUM_STORY.webp', 'CAPTAIN AMERICA YOURI — FIG. 01C — 9:16 STORY')}
                className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
              >
                <img
                  src="/images/USA_BELGIUM_STORY.webp"
                  alt="CAPTAIN AMERICA YOURI 9:16 Story Adaptation"
                  className="w-full h-auto block max-h-[380px] mx-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">FIG. 01C — 9:16 STORY</span>
                <span>MOBILE / 9:16</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 / AUGUST 2025 — ANDERLECHT × SHERIFF TIRASPOL
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                02 / AUGUST 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                ANDERLECHT × SHERIFF TIRASPOL
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                MATCHDAY — UEFA CONFERENCE LEAGUE
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal matchday visual for Anderlecht's game against Sheriff Tiraspol.
              </p>
              <p>
                I focused on creating a strong purple atmosphere around the player and the stadium, using motion, light and texture to make the image feel more intense.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/250807FAFAAFA.webp', 'ANDERLECHT × SHERIFF TIRASPOL — FIG. 02 — MATCHDAY VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/250807FAFAAFA.webp"
                alt="Anderlecht x Sheriff Tiraspol UEFA Conference League Matchday Visual"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 02 — MATCHDAY VISUAL</span>
              <span className="text-[#5B2EFF]">AUGUST 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 / AUGUST 2025 — ANDERLECHT × ZULTE WAREGEM
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                03 / AUGUST 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                ANDERLECHT × ZULTE WAREGEM
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                MATCHDAY — JUPILER PRO LEAGUE
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal matchday composition built around Anderlecht's purple identity.
              </p>
              <p>
                The image combines the player, the stadium and graphic elements inspired by a football pitch, with a more playful typographic treatment.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/250811.webp', 'ANDERLECHT × ZULTE WAREGEM — FIG. 03 — MATCHDAY VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/250811.webp"
                alt="Anderlecht x Zulte Waregem Matchday Visual"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 03 — MATCHDAY VISUAL</span>
              <span className="text-[#5B2EFF]">AUGUST 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 / AUGUST 2025 — NATHAN NGOY
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                04 / AUGUST 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                NATHAN NGOY
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                PLAYER PORTRAIT / MATCHDAY
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal visual focused on Nathan Ngoy.
              </p>
              <p>
                The composition is built around a large player portrait, a secondary action shot and a strong red colour treatment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[620px] mx-auto items-start">
            {/* Main Portrait Artwork */}
            <div>
              <div
                onClick={() => handleImageClick('/images/NGOY.webp', 'NATHAN NGOY — FIG. 04 — MAIN VISUAL')}
                className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
              >
                <img
                  src="/images/NGOY.webp"
                  alt="Nathan Ngoy Sports Portrait Artwork"
                  className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} />
                  <span>EXPAND ARTWORK</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">FIG. 04 — MAIN VISUAL</span>
                <span className="text-[#5B2EFF]">PORTRAIT</span>
              </div>
            </div>

            {/* Vertical Story Adaptation */}
            <div>
              <div
                onClick={() => handleImageClick('/images/NGOYSTORY.webp', 'NATHAN NGOY — FIG. 04B — 9:16 STORY')}
                className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
              >
                <img
                  src="/images/NGOYSTORY.webp"
                  alt="Nathan Ngoy Vertical Story Artwork"
                  className="w-full h-auto block max-h-[380px] mx-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">FIG. 04B — 9:16 STORY</span>
                <span>MOBILE / 9:16</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          05 / AUGUST 2025 — YOURI TIELEMANS
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                05 / AUGUST 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                YOURI TIELEMANS
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                SPORTS EDITORIAL / PLAYER PORTRAIT
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal editorial piece built around Youri Tielemans.
              </p>
              <p>
                Instead of focusing on a single match, I wanted to treat the player more like an editorial subject, mixing different moments and images into one composition.
              </p>
              <p>
                The result combines photography, typography and graphic blocks while keeping the player as the main focus.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/YOURI_ASTON_VILLA.webp', 'YOURI TIELEMANS — FIG. 05 — EDITORIAL VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/YOURI_ASTON_VILLA.webp"
                alt="Youri Tielemans Aston Villa Sports Editorial Artwork"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 05 — EDITORIAL VISUAL</span>
              <span className="text-[#5B2EFF]">AUGUST 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          06 / MAY 2025 — RCSC - STANDARD DE LIEGE
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                06 / MAY 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                RCSC - STANDARD DE LIEGE
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                MATCHDAY — EUROPE PLAY-OFFS
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal matchday visual for Charleroi.
              </p>
              <p>
                Here, I wanted the atmosphere to do most of the work, using rain, stadium lighting and contrast to create a more dramatic image.
              </p>
              <p>
                The player remains at the centre, with the environment built around him.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/STANDARD.webp', 'RCSC - STANDARD DE LIEGE — FIG. 06 — MATCHDAY VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/STANDARD.webp"
                alt="RCSC - Standard de Liege Matchday Visual Artwork"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 06 — MATCHDAY VISUAL</span>
              <span className="text-[#5B2EFF]">MAY 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          07 / MAY 2025 — RSCA — CROKY CUP FINAL
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                07 / MAY 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                RSCA — CROKY CUP FINAL
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                MATCHDAY — CROKY CUP FINAL
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal visual created for the 2025 Belgian Cup Final between Club Brugge and RSC Anderlecht.
              </p>
              <p>
                The goal was to make the final feel like a bigger event than a regular matchday, with a darker atmosphere and a more cinematic treatment.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/RSCA_CUP_FINAL_25.webp', 'RSCA — CROKY CUP FINAL — FIG. 07 — FINAL MATCHDAY VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/RSCA_CUP_FINAL_25.webp"
                alt="RSCA Croky Cup Final Matchday Artwork"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 07 — FINAL MATCHDAY VISUAL</span>
              <span className="text-[#5B2EFF]">MAY 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          08 / MARCH 2025 — DOKU × HAZARD - Tatooine
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                08 / MARCH 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                DOKU × HAZARD - Tatooine
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                SPORTS EDITORIAL — BELGIAN NATIONAL TEAM
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal football editorial bringing together Jérémy Doku and Eden Hazard.
              </p>
              <p>
                I wanted to create a visual connection between two generations of Belgian football rather than simply making a player poster.
              </p>
              <p>
                The desert of Tatooine (star wars) setting, colour treatment and composition were used to create a completely different environment around the two players.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/DOKUXEDEN.webp', 'DOKU × HAZARD - Tatooine — FIG. 08 — EDITORIAL VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/DOKUXEDEN.webp"
                alt="Doku x Hazard Tatooine Belgian National Team Tribute Artwork"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 08 — EDITORIAL VISUAL</span>
              <span className="text-[#5B2EFF]">MARCH 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          09 / MARCH 2025 — JUVENTUS × GENOA
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                09 / MARCH 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                JUVENTUS × GENOA
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                MATCHDAY — SERIE A
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal Juventus matchday composition presented here as a physical poster.
              </p>
              <p>
                I worked around a central player portrait and several supporting images, keeping the composition mostly monochrome to reinforce the Juventus identity.
              </p>
              <p>
                The final design was also shown in context through a physical mockup.
              </p>
              <div className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-semibold pt-1">
                29 MARCH 2025 · TURIN
              </div>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/JUVENTUS%20MOCKUP.jpg', 'JUVENTUS × GENOA — FIG. 09 — POSTER & PHYSICAL MOCKUP')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/JUVENTUS%20MOCKUP.jpg"
                alt="Juventus x Genoa Serie A Matchday Poster in Physical Mockup Context"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 09 — POSTER</span>
              <span className="text-[#5B2EFF]">29 MARCH 2025 · TURIN</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          10 / JUNE 2025 — KEVIN DE BRUYNE
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                10 / JUNE 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                KEVIN DE BRUYNE
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                SPORTS EDITORIAL / PLAYER PORTRAIT
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal visual study around Kevin De Bruyne.
              </p>
              <p>
                I wanted to explore a more editorial approach, combining several close-ups and action images with a looser typographic treatment.
              </p>
              <p>
                The different crops create a kind of visual collage around the player.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/KDB.webp', 'KEVIN DE BRUYNE — FIG. 10 — EDITORIAL VISUAL')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/KDB.webp"
                alt="Kevin De Bruyne Player Portrait Sports Design Artwork"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 10 — EDITORIAL VISUAL</span>
              <span className="text-[#5B2EFF]">JUNE 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          11 / MAY 2025 — LUKAKU × DE BRUYNE
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                11 / MAY 2025
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                LUKAKU × DE BRUYNE
              </h2>
              <p className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60 mt-1">
                SPORTS EDITORIAL / PLAYER COMPOSITING
              </p>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                A personal football editorial bringing together Romelu Lukaku and Kevin De Bruyne.
              </p>
              <p>
                The main idea was to create a visual relationship between the two players rather than simply placing them next to each other to announce the signature of KDB to Napoli.
              </p>
              <p>
                I used the landscape, light trails and colour treatment to give the composition a more atmospheric and cinematic feel.
              </p>
            </div>
          </div>

          <div className="max-w-[620px] mx-auto w-full">
            <div
              onClick={() => handleImageClick('/images/LUKAKUKDB.webp', 'LUKAKU × DE BRUYNE — FIG. 11 — EDITORIAL COMPOSITION')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-3 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src="/images/LUKAKUKDB.webp"
                alt="Lukaku x De Bruyne Sports Design Artwork"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} />
                <span>EXPAND ARTWORK</span>
              </div>
            </div>

            <div className="mt-2 flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">FIG. 11 — EDITORIAL COMPOSITION</span>
              <span className="text-[#5B2EFF]">MAY 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          MY APPROACH
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-2">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold">
                MY APPROACH
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                WORKING WITH FOOTBALL IMAGERY
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                Most of these projects start with an image rather than a complete brief.
              </p>
              <p>
                I usually begin by looking for a strong photograph, then build the composition around it.
              </p>
              <p>
                From there, I work on the background, lighting, colour treatment, textures and typography until everything feels like part of the same image.
              </p>
              <p>
                I'm particularly interested in the moment where photography starts to feel more like graphic design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHAT I EXPLORE
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="mb-12 font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold">
            WHAT I EXPLORE
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold text-sm">PHOTO COMPOSITING</div>
              <div className="text-[#0A0A0A]/70 text-[11px] leading-relaxed lowercase first-letter:uppercase">
                Combining different images into one coherent scene.
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold text-sm">COLOUR &amp; LIGHT</div>
              <div className="text-[#0A0A0A]/70 text-[11px] leading-relaxed lowercase first-letter:uppercase">
                Using colour and lighting to change the mood of the original photography.
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold text-sm">TYPOGRAPHY</div>
              <div className="text-[#0A0A0A]/70 text-[11px] leading-relaxed lowercase first-letter:uppercase">
                Using type as part of the composition rather than just as information.
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold text-sm">ATMOSPHERE</div>
              <div className="text-[#0A0A0A]/70 text-[11px] leading-relaxed lowercase first-letter:uppercase">
                Adding depth, texture, motion and environmental elements to create a stronger visual world.
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2 sm:col-span-2 md:col-span-2">
              <div className="text-[#5B2EFF] font-bold text-sm">FORMAT ADAPTATION</div>
              <div className="text-[#0A0A0A]/70 text-[11px] leading-relaxed lowercase first-letter:uppercase">
                Taking the same idea into different formats, from posters and social posts to 9:16 stories.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          AN ONGOING PRACTICE
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-2">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold">
                AN ONGOING PRACTICE
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                AN ONGOING PRACTICE
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                SLBTR is still a personal project and an ongoing way for me to experiment.
              </p>
              <p>
                I don't want every piece to look exactly the same. Some are cleaner, some are more atmospheric and some are much more experimental.
              </p>
              <p>
                What connects them is my interest in football, photography and graphic design, and the fact that I'm always trying to find a better way of translating the emotion of the game into an image.
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
            onClick={() => onNavigate(`/work/${aldiProject.slug}`)}
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
                  07 / ALDI
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  ALDI
                </h3>
                <p className="font-mono-custom text-[11px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  COMMERCIAL MOTION DESIGN &amp; DIGITAL CAMPAIGNS
                </p>
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
