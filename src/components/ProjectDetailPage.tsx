import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { projectsData } from '../data/projectsData';
import { LazyVideo } from './LazyVideo';
import { IppiBeerProjectPage } from './IppiBeerProjectPage';
import { BmwRedDevilsProjectPage } from './BmwRedDevilsProjectPage';
import { IsdinProjectPage } from './IsdinProjectPage';
import { ExcelsiorProjectPage } from './ExcelsiorProjectPage';
import { PlkProjectPage } from './PlkProjectPage';
import { AldiProjectPage } from './AldiProjectPage';
import { MediaMarktProjectPage } from './MediaMarktProjectPage';
import { MiniProjectPage } from './MiniProjectPage';
import { SlbtrProjectPage } from './SlbtrProjectPage';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onNavigate: (path: string) => void;
  onOpenLightbox?: (imageUrl: string, title: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onNavigate,
  onOpenLightbox,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Dedicated bespoke case study pages
  if (project.slug === 'ippi-beer') {
    return <IppiBeerProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'bmw-red-devils') {
    return <BmwRedDevilsProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'isdin') {
    return <IsdinProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'excelsior') {
    return <ExcelsiorProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'plk' || project.slug === 'heaven-plk') {
    return <PlkProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'aldi' || project.slug === 'aldi-motion') {
    return <AldiProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'mediamarkt' || project.slug === 'mediamarkt-motion') {
    return <MediaMarktProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'mini' || project.slug === 'mini-tactical' || project.slug === 'mini-motion') {
    return <MiniProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  if (project.slug === 'slbtr-sports-design' || project.slug === 'slbtr' || project.slug === 'sports-design') {
    return <SlbtrProjectPage onNavigate={onNavigate} onOpenLightbox={onOpenLightbox} />;
  }

  // Find next project in sequence
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const nextIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.slug]);

  return (
    <article className="pt-28 md:pt-36 pb-24 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      {/* Back button & Breadcrumbs */}
      <div className="pb-8 border-b border-[#D9D7D1] flex items-center justify-between font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]">
        <button
          onClick={() => onNavigate('/')}
          className="group inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors focus:outline-none"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO INDEX</span>
        </button>

        <div className="flex items-center gap-2 text-[#0A0A0A]/50">
          <span>PROJECT {project.number} OF 08</span>
          <span className="hidden sm:inline">/</span>
          <span className="text-[#5B2EFF] font-semibold hidden sm:inline">{project.type}</span>
        </div>
      </div>

      {/* Project Header & Metadata Table */}
      <header className="py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Title */}
          <div className="md:col-span-8">
            <div className="font-mono-custom text-3xl md:text-4xl text-[#0A0A0A]/30 mb-2 font-light">
              {project.number}
            </div>
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-[#0A0A0A] uppercase">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="font-display font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#0A0A0A]/70 uppercase mt-4 max-w-2xl leading-snug">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Right Specifications Table */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-4 pt-2 md:border-l border-[#D9D7D1] md:pl-8">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1">CATEGORIES</div>
              <div className="text-[#0A0A0A] font-semibold space-y-0.5">
                {project.categories.map((c, idx) => (
                  <div key={idx}>/ {c}</div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1">YEAR</div>
                <div className="font-semibold text-[#0A0A0A]">{project.year}</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1">TYPE</div>
                <div className="font-semibold text-[#5B2EFF]">{project.type}</div>
              </div>
            </div>

            {project.client && (
              <div className="pt-3 border-t border-[#D9D7D1]">
                <div className="text-[#0A0A0A]/40 mb-1">CLIENT / ENTITY</div>
                <div className="font-semibold text-[#0A0A0A]">{project.client}</div>
              </div>
            )}

            {project.role && (
              <div className="pt-3 border-t border-[#D9D7D1]">
                <div className="text-[#0A0A0A]/40 mb-1">ROLE & SCOPE</div>
                <div className="font-semibold text-[#0A0A0A]">{project.role}</div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 1. HERO VISUAL / VIDEO (Full-width monumental) */}
      <section className="mb-20">
        <div className="relative aspect-[16/10] md:aspect-[2.2/1] w-full overflow-hidden bg-[#E2E0D8] border border-[#D9D7D1]">
          {project.videoUrl ? (
            <div className="relative w-full h-full">
              <LazyVideo
                src={project.videoUrl}
                poster={project.videoPoster || project.heroImage}
                loop
                muted={isMuted}
                playsInline
                eager={true}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-black/80 text-white hover:bg-[#5B2EFF] transition-colors"
                  aria-label="Toggle mute"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </div>
          ) : (
            <img
              src={project.heroImage}
              alt={project.title}
              onClick={() => onOpenLightbox?.(project.heroImage, project.title)}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 hover:scale-[1.01]"
            />
          )}
        </div>
        <div className="mt-3 flex justify-between items-center font-mono-custom text-[10px] uppercase text-[#0A0A0A]/60">
          <span>HERO KEY ARTWORK — {project.title}</span>
          <span>CLICK TO EXPAND HIGH-RES</span>
        </div>
      </section>

      {/* 2. CONTEXT & CONCEPT (2-Column Editorial Block) */}
      <section className="py-16 border-t border-[#D9D7D1] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-2">
            01 / CONTEXT
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0A0A0A] uppercase tracking-tight leading-tight">
            THE BRIEF & OBJECTIVES
          </h2>
          <p className="font-mono-custom text-[12px] uppercase text-[#0A0A0A]/80 leading-relaxed mt-4">
            {project.context}
          </p>
        </div>

        <div className="md:col-span-7">
          <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-2">
            02 / CONCEPT & DIRECTION
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0A0A0A] uppercase tracking-tight leading-tight">
            VISUAL SYSTEM & ARCHITECTURE
          </h2>
          <p className="font-mono-custom text-[12px] uppercase text-[#0A0A0A]/80 leading-relaxed mt-4">
            {project.concept}
          </p>
        </div>
      </section>

      {/* 3. SECONDARY IMAGES GRID (70-80% Visual attention rule) */}
      {project.gridImages && project.gridImages.length > 0 && (
        <section className="py-12 border-t border-[#D9D7D1]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {project.gridImages.map((imgItem, idx) => (
              <div
                key={idx}
                className={`group border border-[#D9D7D1] bg-[#E2E0D8] p-3 flex flex-col justify-between ${
                  imgItem.span === 12
                    ? 'md:col-span-12'
                    : imgItem.span === 8
                    ? 'md:col-span-8'
                    : imgItem.span === 7
                    ? 'md:col-span-7'
                    : imgItem.span === 6
                    ? 'md:col-span-6'
                    : imgItem.span === 5
                    ? 'md:col-span-5'
                    : imgItem.span === 4
                    ? 'md:col-span-4'
                    : 'md:col-span-6'
                }`}
              >
                <div
                  onClick={() => onOpenLightbox?.(imgItem.url, imgItem.caption || project.title)}
                  className={`relative ${imgItem.aspect || 'aspect-[4/3]'} w-full overflow-hidden bg-black cursor-zoom-in`}
                >
                  <img
                    src={imgItem.url}
                    alt={imgItem.caption || 'Project execution detail'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {imgItem.caption && (
                  <div className="mt-3 pt-2 border-t border-[#D9D7D1] font-mono-custom text-[10px] uppercase text-[#0A0A0A]/70 flex justify-between items-center">
                    <span>{imgItem.caption}</span>
                    <span className="text-[#5B2EFF]">FIG. 0{idx + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. PROCESS & APPLICATIONS */}
      <section className="py-16 border-t border-[#D9D7D1] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-6">
          <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-2">
            03 / METHODOLOGY & CRAFT
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0A0A0A] uppercase tracking-tight">
            DESIGN PROCESS
          </h2>
          <p className="font-mono-custom text-[12px] uppercase text-[#0A0A0A]/80 leading-relaxed mt-4">
            {project.process}
          </p>
        </div>

        <div className="md:col-span-6">
          <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-2">
            04 / SCOPE DELIVERABLES
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0A0A0A] uppercase tracking-tight">
            APPLICATIONS & DECLENSIONS
          </h2>
          <div className="mt-4 space-y-2 font-mono-custom text-[11px] uppercase text-[#0A0A0A] font-medium">
            {project.applications?.map((appItem, aIdx) => (
              <div key={aIdx} className="flex items-center gap-2 py-2 border-b border-[#D9D7D1]">
                <span className="text-[#5B2EFF]">→</span>
                <span>{appItem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT PROJECT NAVIGATION BAR (Monumental Footer Link) */}
      <section className="mt-20 pt-12 border-t-2 border-[#0A0A0A]">
        <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]/50 mb-4 flex justify-between items-center">
          <span>UP NEXT IN ARCHIVE</span>
          <span>PROJECT {nextProject.number}</span>
        </div>

        <div
          onClick={() => onNavigate(`/work/${nextProject.slug}`)}
          data-cursor="project"
          data-cursor-text="NEXT PROJECT →"
          className="group cursor-pointer py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#EAE8E0] px-4 md:px-8 border border-transparent hover:border-[#D9D7D1] transition-colors"
        >
          <div>
            <div className="font-mono-custom text-xl text-[#5B2EFF] font-semibold">
              {nextProject.number}
            </div>
            <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0A0A0A] uppercase group-hover:text-[#5B2EFF] transition-colors leading-none mt-1">
              {nextProject.title}
            </h3>
            <p className="font-mono-custom text-[11px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
              {nextProject.categories.join(' / ')}
            </p>
          </div>

          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center group-hover:bg-[#5B2EFF] group-hover:scale-110 transition-all flex-shrink-0">
            <ArrowRight size={28} />
          </div>
        </div>
      </section>
    </article>
  );
};
