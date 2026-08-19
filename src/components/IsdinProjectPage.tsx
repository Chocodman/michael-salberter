import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

interface IsdinProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const IsdinProjectPage: React.FC<IsdinProjectPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const nextProject = projectsData.find((p) => p.slug === 'excelsior') || projectsData[3];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleImageClick = (src: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox(src, title);
    }
  };

  const isdinAsset01 = '/images/251003_isdin.webp';
  const isdinAsset02 = '/images/251003_isdin2.webp';
  const isdinAsset03 = '/images/251003_isdin3.webp';

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
          <span className="text-[#5B2EFF] font-semibold">03</span>
          <span>/</span>
          <span>ISDINCEUTICS</span>
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
              03 / CASE STUDY
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              ISDINCEUTICS
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              Art Direction / Event Communication / Layout Design
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT CREDITS</div>
              <div className="text-[#0A0A0A] font-bold">
                Freelance project · Brussels · 2025
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">TYPE</div>
                <div className="font-semibold text-[#5B2EFF]">FREELANCE PROJECT</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">YEAR</div>
                <div className="font-semibold text-[#0A0A0A]">2025</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">MY ROLE</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• ART DIRECTION</div>
                <div>• EVENT COMMUNICATION</div>
                <div>• LAYOUT DESIGN</div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-10 pt-8 border-t border-[#D9D7D1]">
          <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed max-w-4xl">
            A freelance project for ISDINCEUTICS, focused on art direction and event communication for an influencer and press event.
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
                For this project, I developed a series of roll-up banners for an ISDINCEUTICS event.
              </p>
              <p>
                The brief was to present the products in a premium environment while keeping the connection between skincare, science and beauty.
              </p>
            </div>
          </div>

          {/* Master Roll-Up Hero Display */}
          <div className="space-y-3">
            <div
              onClick={() => handleImageClick(isdinAsset01, 'ISDINCEUTICS — Event Roll-Up Master Visual')}
              className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-md bg-[#0A0E17]"
            >
              <img
                src={isdinAsset01}
                alt="ISDINCEUTICS Event Roll-Up Master Visual"
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
              <span className="font-bold text-[#0A0A0A]">EVENT ROLL-UP MASTER VISUAL</span>
              <span>VERTICAL FORMAT · LARGE-SCALE PRINT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — DIRECTION
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                02 / DIRECTION
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                DIRECTION
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                I wanted the visuals to feel sophisticated without becoming too decorative.
              </p>
              <p>
                I worked with dark blue, white and champagne gold, combined with product photography and scientific imagery.
              </p>
              <p>
                The products remain the main focus, while the rest of the composition creates the atmosphere around them.
              </p>
            </div>
          </div>

          {/* Visual Codes & Direction Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase mb-12">
            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">COLOUR PALETTE</div>
              <div className="text-[#0A0A0A] font-bold text-sm">DARK BLUE / WHITE / CHAMPAGNE GOLD</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                DEEP CHROMATIC CONTRAST WITH METALLIC ACCENTS
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">IMAGERY</div>
              <div className="text-[#0A0A0A] font-bold text-sm">PRODUCT &amp; SCIENCE</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                INTEGRATING CLINICAL RIGOUR WITH BEAUTY CODES
              </div>
            </div>

            <div className="p-6 bg-[#ECEAE3] border border-[#D9D7D1] space-y-2">
              <div className="text-[#5B2EFF] font-bold">HIERARCHY</div>
              <div className="text-[#0A0A0A] font-bold text-sm">RESTRAINED &amp; EDITORIAL</div>
              <div className="text-[#0A0A0A]/60 text-[10px] leading-relaxed">
                GENEROUS NEGATIVE SPACE AND CLEAR PRODUCT FOCUS
              </div>
            </div>
          </div>

          {/* Side-by-Side Direction Visuals (Roll-Up 01 & Roll-Up 02) */}
          <div className="editorial-grid-2 items-start">
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(isdinAsset01, 'ISDINCEUTICS — Direction Visual 01: Product & Science')}
                className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#0A0E17]"
              >
                <img
                  src={isdinAsset01}
                  alt="ISDINCEUTICS Visual Direction — Product & Science"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">FIG. 01 — PRODUCT &amp; SCIENCE FOCUS</span>
                <span>DARK BLUE / GOLD</span>
              </div>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(isdinAsset02, 'ISDINCEUTICS — Direction Visual 02: Human Ritual')}
                className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-sm bg-[#0A0E17]"
              >
                <img
                  src={isdinAsset02}
                  alt="ISDINCEUTICS Visual Direction — Human Ritual"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 rounded flex items-center gap-1.5 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="flex justify-between items-center font-mono-custom text-xs uppercase text-[#0A0A0A]/60 pt-1 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">FIG. 02 — PRODUCT &amp; HUMAN RITUAL</span>
                <span>SOPHISTICATED COMPOSITION</span>
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
                Most of the work was about composition, hierarchy and finding the right balance between the product, photography and typography.
              </p>
              <p>
                I also had to make sure the layouts worked properly as large vertical print formats.
              </p>
            </div>
          </div>

          {/* Process Breakdown Specifications Grid */}
          <div className="p-6 md:p-8 bg-[#EAE8E0] border border-[#D9D7D1] mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">01 / COMPOSITION</div>
                <div className="font-bold text-[#0A0A0A]">STRUCTURED BALANCE</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">CALIBRATED NEGATIVE SPACE</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">02 / HIERARCHY</div>
                <div className="font-bold text-[#0A0A0A]">TYPOGRAPHIC LEVELS</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">READABLE AT EVENT DISTANCE</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">03 / PRODUCT POSITIONING</div>
                <div className="font-bold text-[#0A0A0A]">CENTRAL FOCAL POINT</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">OPTICAL WEIGHT AT EYE LEVEL</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">04 / TYPOGRAPHY</div>
                <div className="font-bold text-[#0A0A0A]">SWISS EDITORIAL DISCIPLINE</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">CLEAN GEOMETRIC PROPORTIONS</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">05 / IMAGE SELECTION</div>
                <div className="font-bold text-[#0A0A0A]">CLINICAL &amp; BEAUTY HARMONY</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">COMBINING SCIENTIFIC &amp; HUMAN ASSETS</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">06 / PRINT FORMAT</div>
                <div className="font-bold text-[#5B2EFF]">LARGE VERTICAL ROLL-UPS</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">HIGH-RESOLUTION PRINT EXECUTION</div>
              </div>
            </div>
          </div>

          {/* Detailed Roll-Up Composition (Roll-Up 03) */}
          <div className="space-y-3">
            <div
              onClick={() => handleImageClick(isdinAsset03, 'ISDINCEUTICS — Process & Layout Composition: Science Meets Beauty')}
              className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-md bg-[#0A0E17]"
            >
              <img
                src={isdinAsset03}
                alt="ISDINCEUTICS Process & Layout Composition — Science Meets Beauty"
                className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center gap-2 font-mono-custom text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={12} />
                <span>EXPAND IMAGE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
              <span className="font-bold text-[#0A0A0A]">PROCESS DETAIL — ROLL-UP 03</span>
              <span>SCIENCE MEETS BEAUTY / COMPOSITION &amp; HIERARCHY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          04 — FINAL WORK (MAIN VISUAL MOMENT)
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
                The final result was a series of event roll-ups designed to work together as one visual set.
              </p>
            </div>
          </div>

          {/* 3 Roll-Ups Presented as a Coordinated Event Communication System */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {/* Roll-Up 01 */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(isdinAsset01, 'ISDINCEUTICS — Roll-Up 01: Product & Science')}
                className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-md bg-[#0A0E17]"
              >
                <img
                  src={isdinAsset01}
                  alt="ISDINCEUTICS Final Roll-Up 01"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="font-mono-custom text-xs uppercase space-y-0.5 pt-1 border-t border-[#D9D7D1]/50">
                <div className="font-bold text-[#0A0A0A]">ROLL-UP 01</div>
                <div className="text-[#5B2EFF] text-[11px] font-semibold">PRODUCT &amp; SCIENCE</div>
              </div>
            </div>

            {/* Roll-Up 02 */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(isdinAsset02, 'ISDINCEUTICS — Roll-Up 02: Human Ritual')}
                className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-md bg-[#0A0E17]"
              >
                <img
                  src={isdinAsset02}
                  alt="ISDINCEUTICS Final Roll-Up 02"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="font-mono-custom text-xs uppercase space-y-0.5 pt-1 border-t border-[#D9D7D1]/50">
                <div className="font-bold text-[#0A0A0A]">ROLL-UP 02</div>
                <div className="text-[#5B2EFF] text-[11px] font-semibold">PRODUCT &amp; HUMAN RITUAL</div>
              </div>
            </div>

            {/* Roll-Up 03 */}
            <div className="space-y-3">
              <div
                onClick={() => handleImageClick(isdinAsset03, 'ISDINCEUTICS — Roll-Up 03: Science Meets Beauty')}
                className="relative w-full overflow-hidden group cursor-pointer border border-[#D9D7D1] shadow-md bg-[#0A0E17]"
              >
                <img
                  src={isdinAsset03}
                  alt="ISDINCEUTICS Final Roll-Up 03"
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded flex items-center gap-1 font-mono-custom text-[9px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} />
                  <span>EXPAND</span>
                </div>
              </div>
              <div className="font-mono-custom text-xs uppercase space-y-0.5 pt-1 border-t border-[#D9D7D1]/50">
                <div className="font-bold text-[#0A0A0A]">ROLL-UP 03</div>
                <div className="text-[#5B2EFF] text-[11px] font-semibold">SCIENCE MEETS BEAUTY</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#ECEAE3] border border-[#D9D7D1] font-mono-custom text-xs uppercase text-[#0A0A0A]/70 text-center">
            COORDINATED EVENT COMMUNICATION SYSTEM · 3 ROLL-UP DELIVERABLES
          </div>
        </div>
      </section>

      {/* ==================================================
          NEXT PROJECT ROUTING
      ================================================== */}
      <footer className="pt-16 md:pt-20">
        <div className="editorial-hero-frame">
          <div
            onClick={() => onNavigate(`/work/${nextProject.slug}`)}
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
                  04 / EXCELSIOR
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  EXCELSIOR
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
