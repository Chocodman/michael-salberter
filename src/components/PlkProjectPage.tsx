import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface PlkProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const PlkProjectPage: React.FC<PlkProjectPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const slbtrProject = projectsData.find((p) => p.slug === 'slbtr') || projectsData[5];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleImageClick = (src: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox(src, title);
    }
  };

  // Real project asset paths
  const formatSquare = '/images/PLK_1-1.webp';
  const formatPortrait = '/images/PLK_4-5.webp';
  const formatScreen = '/images/PLK_16-9.webp';
  const mockupApplication = '/images/PLK_MOCKUP.webp';

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
          <span className="text-[#5B2EFF] font-semibold">05</span>
          <span>/</span>
          <span>PLK x HEAVEN</span>
        </div>
      </div>

      {/* ==================================================
          HEADER & METADATA TABLE
      ================================================== */}
      <header className="py-12 md:py-20 border-b border-[#D9D7D1]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Title and Identification */}
          <div className="md:col-span-8 space-y-4">
            <div className="font-mono-custom text-xs md:text-sm text-[#0A0A0A]/40 uppercase tracking-widest">
              05 / CASE STUDY
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              PLK x HEAVEN
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              Visual Design / Art Direction / Format Adaptation
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT STATUS</div>
              <div className="text-[#5B2EFF] font-bold">
                Freelance project · Brussels · 2025
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">TYPE</div>
                <div className="font-semibold text-[#0A0A0A]">FREELANCE PROJECT</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">LOCATION</div>
                <div className="font-semibold text-[#0A0A0A]">BRUSSELS</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">MY ROLE</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• VISUAL DESIGN &amp; ART DIRECTION</div>
                <div>• PHOTO COMPOSITING &amp; COLOUR</div>
                <div>• MULTI-FORMAT ADAPTATION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-10 pt-8 border-t border-[#D9D7D1]">
          <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed max-w-4xl">
            A visual identity and format adaptation project for a PLK showcase at Bloody Louis in Brussels.
          </p>
        </div>
      </header>

      {/* ==================================================
          01 — CONTEXT
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                01 / CONTEXT
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                CONTEXT
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                For this project, I wanted to create a visual that could work across several event formats without losing its impact.
              </p>
            </div>
          </div>

          {/* Master Key Visual (Square 1:1) */}
          <div className="space-y-3">
            <div
              onClick={() => handleImageClick(formatSquare, 'PLK x HEAVEN — Master Key Visual')}
              className="relative w-full aspect-square max-w-3xl mx-auto overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-md bg-[#0A0A0A] flex items-center justify-center"
            >
              <img
                src={formatSquare}
                alt="PLK x HEAVEN Master Key Visual 1:1"
                className="w-full h-full object-cover block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND KEY VISUAL</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50 max-w-3xl mx-auto">
              <span className="font-bold text-[#0A0A0A]">EVENT KEY VISUAL</span>
              <span>BLOODY LOUIS · BRUSSELS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — CONCEPT
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                02 / CONCEPT
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                CONCEPT
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                The main direction came from the contrast between the red PLK typography and the cold blue glass texture.
              </p>
              <p>
                I wanted the visual to feel energetic but still structured enough to work with all the event information.
              </p>
            </div>
          </div>

          {/* Concept Codes Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase mb-12">
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#E73946] font-bold">RED PLK TYPOGRAPHY</div>
              <div className="text-[#0A0A0A] font-bold text-sm">SLANTED &amp; ENERGETIC</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                DOMINANT TYPOGRAPHIC ANCHOR CREATING MAXIMUM IMPACT
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">COLD BLUE GLASS</div>
              <div className="text-[#0A0A0A] font-bold text-sm">TEXTURE &amp; ATMOSPHERE</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                ICY CHROMATIC BASE LAYER EVOKING NIGHTLIFE AND CLUB CULTURE
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">STRUCTURED INFORMATION</div>
              <div className="text-[#0A0A0A] font-bold text-sm">RIGOROUS HIERARCHY</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                PRECISE SPATIAL DISTRIBUTION OF TICKETING AND EVENT METADATA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — PROCESS
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                03 / PROCESS
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                PROCESS
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                I worked on the photo compositing, colour treatment, typography and the adaptation of the main visual to different formats.
              </p>
              <p>
                The same idea had to work as a square social post, a portrait format and a vertical screen.
              </p>
            </div>
          </div>

          {/* Process Breakdown Grid */}
          <div className="p-6 md:p-8 bg-[#EAE8E0] border border-[#D9D7D1]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 font-mono-custom text-xs uppercase">
              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">01 / PHOTO COMPOSITING</div>
                <div className="font-bold text-[#0A0A0A]">SUBJECT INTEGRATION</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">GLASS REFRACTIONS</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">02 / COLOUR TREATMENT</div>
                <div className="font-bold text-[#0A0A0A]">RED &amp; ICE-BLUE</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">HIGH SATURATION CONTRAST</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">03 / TYPOGRAPHY</div>
                <div className="font-bold text-[#0A0A0A]">DYNAMIC SLANTED TYPE</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">CUSTOM PLK LOGOTYPE</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">04 / HIERARCHY</div>
                <div className="font-bold text-[#0A0A0A]">EVENT DETAILS</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">BALANCED SPATIAL GRID</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">05 / ADAPTATION</div>
                <div className="font-bold text-[#5B2EFF]">MULTI-FORMAT</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">SQUARE / PORTRAIT / SCREEN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 — FINAL WORK (MAIN VISUAL SECTION)
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                04 / FINAL WORK
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                FINAL WORK
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p className="font-bold text-[#0A0A0A]">
                The final set includes the main key visual, several format adaptations and an in-situ urban display mockup.
              </p>
              <p className="font-mono-custom text-xs uppercase text-[#5B2EFF] tracking-wider">
                ONE KEY VISUAL → MULTIPLE FORMATS → ONE CONSISTENT VISUAL LANGUAGE
              </p>
            </div>
          </div>

          {/* 3-Format Showcase in Controlled 3-Col Grid */}
          <div className="editorial-grid-3 mb-16 items-start">
            {/* Format 1: Square (1:1) */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(formatSquare, 'PLK Showcase — Square Social Format (1:1)')}
                className="group relative cursor-pointer overflow-hidden transition-colors"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={formatSquare}
                    alt="PLK Showcase Square Social Format 1:1"
                    className="w-full h-full object-cover block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[#0A0A0A] font-mono-custom text-[9px] px-2 py-0.5 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity shadow-sm flex items-center gap-1">
                    <Maximize2 size={10} />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D9D7D1] space-y-0.5 font-mono-custom text-xs uppercase">
                <div className="font-bold text-[#0A0A0A]">01 / SQUARE FORMAT (1:1)</div>
                <div className="text-[#5B2EFF] text-[11px] font-semibold">SOCIAL FEED &amp; DIGITAL ASSET</div>
              </div>
            </div>

            {/* Format 2: Portrait (4:5) */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(formatPortrait, 'PLK Showcase — Portrait Format (4:5)')}
                className="group relative cursor-pointer overflow-hidden transition-colors"
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={formatPortrait}
                    alt="PLK Showcase Portrait Format 4:5"
                    className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[#0A0A0A] font-mono-custom text-[9px] px-2 py-0.5 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity shadow-sm flex items-center gap-1">
                    <Maximize2 size={10} />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D9D7D1] space-y-0.5 font-mono-custom text-xs uppercase">
                <div className="font-bold text-[#0A0A0A]">02 / PORTRAIT FORMAT (4:5)</div>
                <div className="text-[#5B2EFF] text-[11px] font-semibold">EVENT POSTER &amp; PRINT</div>
              </div>
            </div>

            {/* Format 3: Vertical Screen (9:16) */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(formatScreen, 'PLK Showcase — Screen Format (9:16)')}
                className="group relative cursor-pointer overflow-hidden transition-colors"
              >
                <div className="relative w-full overflow-hidden">
                  <img
                    src={formatScreen}
                    alt="PLK Showcase Vertical Screen Format 9:16"
                    className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[#0A0A0A] font-mono-custom text-[9px] px-2 py-0.5 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity shadow-sm flex items-center gap-1">
                    <Maximize2 size={10} />
                    <span>EXPAND</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D9D7D1] space-y-0.5 font-mono-custom text-xs uppercase">
                <div className="font-bold text-[#0A0A0A]">03 / SCREEN FORMAT (9:16)</div>
                <div className="text-[#5B2EFF] text-[11px] font-semibold">VERTICAL DISPLAY &amp; EVENT SCREEN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          05 — IN-SITU URBAN APPLICATION
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                05 / IN-SITU APPLICATION
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#0A0A0A] uppercase tracking-tight">
                URBAN DISPLAY
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="font-sans text-base md:text-lg text-[#0A0A0A]/85 leading-relaxed">
                An in-situ presentation showing the visual in an urban environment, demonstrating how the contrast and typographic hierarchy operate at a physical city scale.
              </p>
            </div>
          </div>

          {/* Large In-Situ Display Mockup */}
          <div className="space-y-3">
            <div
              onClick={() => handleImageClick(mockupApplication, 'PLK x HEAVEN — Urban Sidewalk Display Presentation')}
              className="group relative w-full cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#EAE8E0] p-4 transition-colors hover:border-[#5B2EFF] shadow-sm"
            >
              <img
                src={mockupApplication}
                alt="PLK x HEAVEN Urban Sidewalk Display Presentation"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND MOCKUP</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">URBAN SIDEWALK DISPLAY MOCKUP</span>
              <span>IN-SITU APPLICATION · BRUSSELS</span>
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
            onClick={() => onNavigate(`/work/${slbtrProject.slug}`)}
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
                  06 / SLBTR
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  SLBTR
                </h3>
                <p className="font-mono-custom text-[11px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  SPORTS VISUAL DESIGN &amp; ART DIRECTION ARCHIVE
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
