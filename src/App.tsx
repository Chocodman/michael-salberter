import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HeroProject } from './components/HeroProject';
import { IntroSection } from './components/IntroSection';
import { ProjectCardBMW } from './components/ProjectCardBMW';
import { ProjectCardISDIN } from './components/ProjectCardISDIN';
import { ProjectCardExcelsior } from './components/ProjectCardExcelsior';
import { MotionSection } from './components/MotionSection';
import { ProjectCardHeavenPLK } from './components/ProjectCardHeavenPLK';
import { SportSection } from './components/SportSection';
import { AboutSection } from './components/AboutSection';
import { SelectedExperienceSection } from './components/SelectedExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { MotionArchivePage } from './components/MotionArchivePage';
import { LightboxModal } from './components/LightboxModal';
import { projectsData } from './data/projectsData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    mediaUrl?: string;
    title?: string;
    moreWorkItem?: MoreWorkItem | null;
  }>({
    isOpen: false,
  });

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find active project if route is /work/:slug
  const activeSlug = currentPath.startsWith('/work/') ? currentPath.replace('/work/', '').replace(/\/$/, '') : null;
  const currentProject = activeSlug
    ? projectsData.find(
        (p) =>
          p.slug === activeSlug ||
          (activeSlug === 'slbtr' && (p.slug === 'slbtr' || p.slug === 'slbtr-sports-design')) ||
          (activeSlug === 'slbtr-sports-design' && (p.slug === 'slbtr' || p.slug === 'slbtr-sports-design')) ||
          (activeSlug === 'plk' && (p.slug === 'plk' || p.slug === 'heaven-plk')) ||
          (activeSlug === 'heaven-plk' && (p.slug === 'plk' || p.slug === 'heaven-plk'))
      )
    : null;

  // Retrieve indexed projects for homepage display
  const ippiProject = projectsData.find((p) => p.slug === 'ippi-beer') || projectsData[0];
  const bmwProject = projectsData.find((p) => p.slug === 'bmw-red-devils') || projectsData[1];
  const isdinProject = projectsData.find((p) => p.slug === 'isdin') || projectsData[2];
  const excelsiorProject = projectsData.find((p) => p.slug === 'excelsior') || projectsData[3];
  const plkProject = projectsData.find((p) => p.slug === 'plk' || p.slug === 'heaven-plk') || projectsData[5];
  const slbtrProject = projectsData.find((p) => p.slug === 'slbtr-sports-design' || p.slug === 'slbtr') || projectsData[6];

  const handleOpenLightbox = (mediaUrl: string, title?: string) => {
    setLightboxState({
      isOpen: true,
      mediaUrl,
      title: title || 'VIEW MEDIA',
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F2EE] text-[#0A0A0A] selection:bg-[#5B2EFF] selection:text-white flex flex-col justify-between relative">
      {/* Interactive Desktop Magnetic Cursor */}
      <CustomCursor />

      {/* Sticky Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Content Router */}
      <main className="flex-grow w-full">
        {currentPath === '/motion' ? (
          <MotionArchivePage onNavigate={navigate} onOpenLightbox={handleOpenLightbox} />
        ) : currentProject ? (
          <ProjectDetailPage project={currentProject} onNavigate={navigate} onOpenLightbox={handleOpenLightbox} />
        ) : (
          <>
            {/* 1. Hero Section with Integrated Version 03 Interactive Selector */}
            <HeroSection onNavigate={navigate} />

            {/* 2. Featured Project 01: BMW × Red Devils */}
            <ProjectCardBMW
              project={bmwProject}
              onOpenProject={(slug) => navigate(`/work/${slug}`)}
            />

            {/* 11. Minimal Statement / Intro */}
            <IntroSection />

            {/* 12. Featured Project 02: IPPI BEER */}
            <HeroProject
              project={ippiProject}
              onOpenProject={(slug) => navigate(`/work/${slug}`)}
            />

            {/* 13. Project 03: ISDIN */}
            <ProjectCardISDIN
              project={isdinProject}
              onOpenProject={(slug) => navigate(`/work/${slug}`)}
            />

            {/* 13b. Project 04: EXCELSIOR */}
            <ProjectCardExcelsior
              project={excelsiorProject}
              onOpenProject={(slug) => navigate(`/work/${slug}`)}
            />

            {/* 14. Motion Section (05: MOTION DESIGN - Dark Mode Transition) */}
            <MotionSection
              onOpenProject={(slug) => navigate(`/work/${slug}`)}
            />

            {/* 15. Project 06: PLK */}
            <ProjectCardHeavenPLK
              project={plkProject}
              onOpenProject={(slug) => navigate(`/work/${slug}`)}
            />

            {/* 16 - 18. Sport Editorial Section (20% visual weight) */}
            <SportSection
              slbtrProject={slbtrProject}
              onOpenProject={(slug) => navigate(`/work/${slug}`)}
            />

            {/* 19 & 20. About Section */}
            <AboutSection />

            {/* Selected Experience Section */}
            <SelectedExperienceSection />

            {/* 21. Contact Statement */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 22. Footer */}
      <Footer />

      {/* High-Resolution Artwork & Video Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false })}
        mediaUrl={lightboxState.mediaUrl}
        title={lightboxState.title}
      />
    </div>
  );
}
