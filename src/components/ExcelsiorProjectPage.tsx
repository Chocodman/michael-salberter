import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface ExcelsiorProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const ExcelsiorProjectPage: React.FC<ExcelsiorProjectPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const plkProject = projectsData.find((p) => p.slug === 'plk') || projectsData[4];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleImageClick = (src: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox(src, title);
    }
  };

  const labelArtwork = '/images/Etiquette Excel 4.webp';
  const mockupFront = '/images/Mockup.webp';
  const mockupPerspective = '/images/Mockup2.webp';

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
          <span className="text-[#5B2EFF] font-semibold">04</span>
          <span>/</span>
          <span>EXCELSIOR</span>
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
              04 / CASE STUDY
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              EXCELSIOR
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              Brand Identity / Packaging / Art Direction
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT STATUS</div>
              <div className="text-[#5B2EFF] font-bold">
                Freelance project · Brussels · 2024–2025
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">TYPE</div>
                <div className="font-semibold text-[#0A0A0A]">FREELANCE PROJECT</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">YEAR</div>
                <div className="font-semibold text-[#0A0A0A]">2024–2025</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">SCOPE</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• BRAND IDENTITY &amp; EMBLEM</div>
                <div>• BOTTLE LABEL ARCHITECTURE</div>
                <div>• 3D PACKAGING PRESENTATIONS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-10 pt-8 border-t border-[#D9D7D1]">
          <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed max-w-4xl">
            A personal beer branding project exploring a more premium and minimal direction for a Belgian beer.
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
                Excelsior started as an exploration of Belgian beer packaging.
              </p>
              <p>
                I wanted to move away from the more illustrated and traditional craft beer look and try something much more restrained.
              </p>
            </div>
          </div>

          {/* Master Bottle Packaging Presentation Hero */}
          <div className="space-y-3">
            <div
              onClick={() => handleImageClick(mockupFront, 'EXCELSIOR — Bottle Packaging Mockup (Front Presentation)')}
              className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-md bg-[#E2E0D8]"
            >
              <img
                src={mockupFront}
                alt="Excelsior Bottle Packaging Mockup — Front Presentation"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND IMAGE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">EXCELSIOR BOTTLE PACKAGING</span>
              <span>BELGIAN BEER BRANDING</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — CONCEPT (CONTRAST AS CENTRAL PRINCIPLE)
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
                The idea was to build the identity around contrast.
              </p>
              <p>
                A dark bottle, a strong central mark, large typography and a very limited colour palette.
              </p>
              <p>
                I wanted the label to feel premium without relying on too many details.
              </p>
            </div>
          </div>

          {/* Core Design Idea Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase mb-12">
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">DARK BOTTLE</div>
              <div className="text-[#0A0A0A] font-bold text-sm">DEEP GLASS SURFACE</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                DEEP MONOCHROMATIC BASE FOR MAXIMUM GRAPHIC CONTRAST
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">CENTRAL EMBLEM</div>
              <div className="text-[#0A0A0A] font-bold text-sm">STRONG FOCAL MARK</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                ICONIC BADGE GEOMETRY ANCHORING THE BOTTLE PRESENCE
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">TYPOGRAPHY</div>
              <div className="text-[#0A0A0A] font-bold text-sm">LARGE SCALE &amp; RESTRAINT</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                GENEROUS NEGATIVE SPACE AND PRECISE HIERARCHY
              </div>
            </div>
          </div>

          {/* Perspective Packaging View Demonstrating Contrast */}
          <div className="space-y-3">
            <div
              onClick={() => handleImageClick(mockupPerspective, 'EXCELSIOR — Perspective Staging (Demonstrating Contrast)')}
              className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#E2E0D8]"
            >
              <img
                src={mockupPerspective}
                alt="Excelsior Perspective Staging — Contrast in Context"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">PACKAGING IN SITU</span>
              <span>CONTRAST BETWEEN DARK BOTTLE &amp; GRAPHIC SYSTEM</span>
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
                I worked on the label structure, typography, emblem and different bottle mockups.
              </p>
              <p>
                A big part of the process was finding the right balance between the graphic elements and the empty space.
              </p>
            </div>
          </div>

          {/* Label Artwork Display */}
          <div className="space-y-3 mb-12">
            <div
              onClick={() => handleImageClick(labelArtwork, 'EXCELSIOR — Beer Label Artwork & Layout Structure')}
              className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#FAF8F5] p-6 sm:p-12 flex items-center justify-center"
            >
              <img
                src={labelArtwork}
                alt="Excelsior Beer Label Artwork & Layout Structure"
                className="max-w-2xl w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND LABEL</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">LABEL STRUCTURE &amp; TYPOGRAPHY</span>
              <span>SYMMETRICAL ARCHITECTURE / CENTRAL EMBLEM</span>
            </div>
          </div>

          {/* Design Decisions & Hierarchy Grid */}
          <div className="p-6 md:p-8 bg-[#EAE8E0] border border-[#D9D7D1]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono-custom text-xs uppercase">
              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">01 / CENTRAL EMBLEM</div>
                <div className="font-bold text-[#0A0A0A]">PRIMARY BADGE</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">DISTINCTIVE SYMBOL</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">02 / WORDMARK</div>
                <div className="font-bold text-[#0A0A0A]">EXCELSIOR</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">STRUCTURED TYPE</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">03 / PALETTE</div>
                <div className="font-bold text-[#0A0A0A]">LIMITED COLOUR</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">BLACK &amp; WHITE</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">04 / NEGATIVE SPACE</div>
                <div className="font-bold text-[#5B2EFF]">RESTRAINT</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">EMPTY SPACE AS DESIGN</div>
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
                The final result is a complete bottle identity with the label artwork, visual system and realistic packaging mockups.
              </p>
            </div>
          </div>

          {/* 2-Column Final Packaging Presentation */}
          <div className="editorial-grid-2 mb-12">
            {/* Mockup 01: Front-Facing Hero View */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(mockupFront, 'EXCELSIOR — Final Bottle Packaging (Front-Facing)')}
                className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#E2E0D8]"
              >
                <img
                  src={mockupFront}
                  alt="Excelsior Final Bottle Packaging — Front View"
                  className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">FRONT PRESENTATION</span>
                <span>HERO BOTTLE MOCKUP</span>
              </div>
            </div>

            {/* Mockup 02: Perspective Staging */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(mockupPerspective, 'EXCELSIOR — Final Bottle Packaging (Perspective & Staging)')}
                className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#E2E0D8]"
              >
                <img
                  src={mockupPerspective}
                  alt="Excelsior Final Bottle Packaging — Perspective & Staging"
                  className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">PERSPECTIVE STAGING</span>
                <span>ATMOSPHERIC PACKAGING CONTEXT</span>
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
            onClick={() => onNavigate(`/work/${plkProject.slug}`)}
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
                  05 / PLK x HEAVEN
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  PLK x HEAVEN
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
