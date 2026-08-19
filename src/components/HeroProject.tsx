import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface HeroProjectProps {
  project: ProjectItem;
  onOpenProject: (slug: string) => void;
}

export const HeroProject: React.FC<HeroProjectProps> = ({ project, onOpenProject }) => {
  return (
    <section id="project-02-section" className="py-20 md:py-28 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      {/* 1. PROJECT INTRO HEADER */}
      <div className="mb-10 pb-6 border-b border-[#D9D7D1]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="font-mono-custom text-xl md:text-2xl font-light text-[#0A0A0A]/40">
              {project.number}
            </span>
            <div>
              <div className="flex items-center gap-3 font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-1 font-semibold">
                <span>02 / CASE STUDY</span>
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
            <span className="text-[#0A0A0A]/60 hidden sm:inline-block">BRUSSELS CRAFT BEER</span>
            <button
              onClick={() => onOpenProject(project.slug)}
              data-cursor="project"
              data-cursor-text="VIEW IPPI →"
              className="inline-flex items-center gap-2 font-semibold text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors cursor-pointer"
            >
              <span>EXPLORE CASE STUDY</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HERO VISUAL (Controlled Editorial Scale) */}
      <div className="editorial-hero-frame mb-12">
        <div
          data-cursor="project"
          data-cursor-text="VIEW PROJECT →"
          onClick={() => onOpenProject(project.slug)}
          className="group relative cursor-pointer block overflow-hidden bg-[#E2E0D8] border border-[#D9D7D1] shadow-sm"
        >
          <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-contain object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
              loading="eager"
              decoding="async"
            />

            {/* Editorial overlay badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="bg-[#0A0A0A] text-[#F3F2EE] font-mono-custom text-[10px] md:text-[11px] px-3 py-1 uppercase tracking-widest">
                HERO PACKAGING — 4-PACK CARRIER BOX
              </span>
            </div>

            {/* Interactive Corner Action */}
            <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center opacity-90 group-hover:bg-[#5B2EFF] group-hover:scale-105 transition-all duration-300">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]/50">
          <span>FIG. 01 — MASTER PACKAGING HERO / DIE-CUT CORRUGATED 4-PACK CARRIER</span>
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
                data-cursor-text="VIEW IPPI →"
                className="w-full py-3 bg-[#0A0A0A] text-white hover:bg-[#5B2EFF] transition-colors font-mono-custom text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SECONDARY VISUALS (Curated 2-Column Grid) */}
      <div className="editorial-grid-2">
        {/* Secondary 01: 4 Cans Architecture */}
        <div
          data-cursor="project"
          onClick={() => onOpenProject(project.slug)}
          className="group cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#E2E0D8]"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src="/images/IPPI_07_CANS_4.webp"
              alt="IPPI Beer 4 Cans Architecture"
              className="w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-3 bg-white/90 border-t border-[#D9D7D1] flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]">
            <span className="font-semibold">01 / CAN ARCHITECTURE</span>
            <span className="text-[#0A0A0A]/50">33CL 4-RECIPE COLLECTION</span>
          </div>
        </div>

        {/* Secondary 02: Kick-Off Can Detail */}
        <div
          data-cursor="project"
          onClick={() => onOpenProject(project.slug)}
          className="group cursor-pointer overflow-hidden border border-[#D9D7D1] bg-[#E2E0D8]"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src="/images/IPPI_06_CANS_KICK_OFF.webp"
              alt="IPPI Kick-Off Can Detail"
              className="w-full h-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-3 bg-white/90 border-t border-[#D9D7D1] flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]">
            <span className="font-semibold">02 / KICK-OFF HOPPY LAGER</span>
            <span className="text-[#0A0A0A]/50">PACKAGING MOCKUP DETAIL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
