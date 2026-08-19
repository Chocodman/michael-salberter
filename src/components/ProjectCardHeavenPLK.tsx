import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardHeavenPLKProps {
  project: ProjectItem;
  onOpenProject: (slug: string) => void;
}

export const ProjectCardHeavenPLK: React.FC<ProjectCardHeavenPLKProps> = ({ project, onOpenProject }) => {
  return (
    <section className="py-20 md:py-28 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      <div className="pt-10 border-t border-[#D9D7D1]">
        {/* 1. PROJECT INTRO HEADER */}
        <div className="mb-10 pb-6 border-b border-[#D9D7D1]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-baseline gap-4 md:gap-6">
              <span className="font-mono-custom text-xl md:text-2xl font-light text-[#0A0A0A]/40">
                {project.number}
              </span>
              <div>
                <div className="flex items-center gap-3 font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-1 font-semibold">
                  <span>05 / CASE STUDY</span>
                  <span>—</span>
                  <span>{project.type}</span>
                </div>
                <h2
                  onClick={() => onOpenProject(project.slug)}
                  className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors cursor-pointer leading-none uppercase"
                >
                  {project.title}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 font-mono-custom text-[11px] uppercase">
              <span className="text-[#0A0A0A]/60 hidden sm:inline-block">HEAVEN PRESENTS · BLOODY LOUIS</span>
              <button
                onClick={() => onOpenProject(project.slug)}
                data-cursor="project"
                data-cursor-text="VIEW PLK →"
                className="inline-flex items-center gap-2 font-semibold text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors cursor-pointer"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. MAIN HERO VISUAL (Controlled Contained Square 1:1) */}
        <div className="editorial-square-frame mb-12">
          <div
            data-cursor="project"
            data-cursor-text="VIEW PROJECT →"
            onClick={() => onOpenProject(project.slug)}
            className="group relative cursor-pointer block overflow-hidden bg-[#E2E0D8] border border-[#D9D7D1] shadow-sm"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="/images/PLK_1-1.webp"
                alt="PLK Showcase Key Visual System"
                className="w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                loading="lazy"
                decoding="async"
              />

              {/* Editorial Overlay Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="bg-[#0A0A0A] text-[#F3F2EE] font-mono-custom text-[10px] md:text-[11px] px-3 py-1 uppercase tracking-widest">
                  01 / CORE VISUAL SYSTEM — 1:1 SQUARE MASTER
                </span>
              </div>

              {/* Interactive Corner Action */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center opacity-90 group-hover:bg-[#5B2EFF] group-hover:scale-105 transition-all duration-300">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]/50">
            <span>FIG. 01 — CORE SQUARE KEY VISUAL (1:1) / HEAVEN PRESENTS PLK</span>
            <span>BRUSSELS, BE</span>
          </div>
        </div>

        {/* 3. PROJECT INFORMATION BLOCK */}
        <div className="editorial-hero-frame mb-14 p-6 md:p-8 bg-[#EAE8E0]/70 border border-[#D9D7D1]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Metadata Grid (7 cols) */}
            <div className="md:col-span-7 grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
                  PROJECT
                </div>
                <div className="font-display font-bold text-base text-[#0A0A0A] uppercase">
                  {project.title}
                </div>
              </div>

              <div>
                <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
                  YEAR
                </div>
                <div className="font-mono-custom font-semibold text-sm text-[#0A0A0A]">
                  {project.year}
                </div>
              </div>

              <div>
                <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
                  ROLE
                </div>
                <div className="font-mono-custom text-xs text-[#0A0A0A] font-medium leading-relaxed">
                  {project.role}
                </div>
              </div>

              <div>
                <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1">
                  CLIENT
                </div>
                <div className="font-mono-custom text-xs text-[#0A0A0A] font-medium">
                  {project.client}
                </div>
              </div>

              <div className="col-span-2 pt-2 border-t border-[#D9D7D1]/60">
                <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#0A0A0A]/50 mb-1.5">
                  DISCIPLINES
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="font-mono-custom text-[10px] uppercase px-2.5 py-1 bg-white border border-[#D9D7D1] text-[#0A0A0A]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Description (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between h-full pt-1 md:border-l md:border-[#D9D7D1]/60 md:pl-8">
              <div>
                <div className="font-mono-custom text-[10px] uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                  PROJECT OVERVIEW
                </div>
                <p className="text-xs sm:text-sm text-[#0A0A0A]/80 font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D9D7D1]/60">
                <button
                  onClick={() => onOpenProject(project.slug)}
                  data-cursor="project"
                  data-cursor-text="VIEW PLK →"
                  className="w-full py-3 bg-[#0A0A0A] text-white hover:bg-[#5B2EFF] transition-colors font-mono-custom text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>EXPLORE CASE STUDY</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SECONDARY VISUALS (Curated Contained Portrait 2-Column Grid) */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            {/* Secondary 01: 4:5 Poster */}
            <div
              data-cursor="project"
              onClick={() => onOpenProject(project.slug)}
              className="group cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#E2E0D8]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D9D7D1]">
                <img
                  src="/images/PLK_4-5.webp"
                  alt="PLK Showcase Portrait Format"
                  className="w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  loading="lazy"
                decoding="async"
                />
              </div>
              <div className="p-3 bg-white/90 border-t border-[#D9D7D1] flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]">
                <span className="font-semibold">02 / PORTRAIT POSTER</span>
                <span className="text-[#0A0A0A]/50">4:5 PROMOTIONAL PRINT</span>
              </div>
            </div>

            {/* Secondary 02: Urban Totem Mockup */}
            <div
              data-cursor="project"
              onClick={() => onOpenProject(project.slug)}
              className="group cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#E2E0D8]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D9D7D1]">
                <img
                  src="/images/PLK_MOCKUP.webp"
                  alt="PLK Urban Sidewalk Display"
                  className="w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  loading="lazy"
                decoding="async"
                />
              </div>
              <div className="p-3 bg-white/90 border-t border-[#D9D7D1] flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]">
                <span className="font-semibold">03 / IN SITU APPLICATION</span>
                <span className="text-[#0A0A0A]/50">URBAN SIDEWALK TOTEM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
