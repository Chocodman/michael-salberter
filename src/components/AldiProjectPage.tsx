import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { LazyVideo } from './LazyVideo';

interface AldiProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (mediaUrl: string, title: string) => void;
}

export const AldiProjectPage: React.FC<AldiProjectPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const nextProject = projectsData.find((p) => p.slug === 'mini') || projectsData[7];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Real video asset paths
  const videoKip = '/videos/8240-003521_ALDI_2026_OLV_W20_Kippenborstfilet_Fullscale_BEFR.mp4';
  const videoKersen = '/videos/8240-003562_ALDI_2026_OLV_W21-Kersen_Fullscale_BENL.mp4';

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const [isPlaying1, setIsPlaying1] = useState(true);
  const [isMuted1, setIsMuted1] = useState(true);

  const [isPlaying2, setIsPlaying2] = useState(true);
  const [isMuted2, setIsMuted2] = useState(true);

  const togglePlay1 = () => {
    if (!videoRef1.current) return;
    if (videoRef1.current.paused) {
      videoRef1.current.play();
      setIsPlaying1(true);
    } else {
      videoRef1.current.pause();
      setIsPlaying1(false);
    }
  };

  const toggleMute1 = () => {
    if (!videoRef1.current) return;
    videoRef1.current.muted = !videoRef1.current.muted;
    setIsMuted1(videoRef1.current.muted);
  };

  const togglePlay2 = () => {
    if (!videoRef2.current) return;
    if (videoRef2.current.paused) {
      videoRef2.current.play();
      setIsPlaying2(true);
    } else {
      videoRef2.current.pause();
      setIsPlaying2(false);
    }
  };

  const toggleMute2 = () => {
    if (!videoRef2.current) return;
    videoRef2.current.muted = !videoRef2.current.muted;
    setIsMuted2(videoRef2.current.muted);
  };

  const handleOpenLarge = (src: string, title: string) => {
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
          <span className="text-[#5B2EFF] font-semibold">07</span>
          <span>/</span>
          <span>ALDI MOTION DESIGN</span>
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
              07 / CASE STUDY
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              ALDI MOTION DESIGN
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              Motion Design / Animation / Campaign Adaptation
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT STATUS</div>
              <div className="text-[#5B2EFF] font-bold">
                Professional work · ALDI · 2026
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">CLIENT</div>
                <div className="font-semibold text-[#0A0A0A]">ALDI BELGIUM</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">YEAR</div>
                <div className="font-semibold text-[#0A0A0A]">2026</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">MY CONTRIBUTION</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• MOTION DESIGN &amp; ANIMATION</div>
                <div>• TIMING &amp; TRANSITIONS</div>
                <div>• TYPOGRAPHY &amp; EASING</div>
                <div>• CAMPAIGN &amp; LANGUAGE ADAPTATION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-10 pt-8 border-t border-[#D9D7D1]">
          <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed max-w-4xl">
            Commercial motion design developed from existing campaign storyboards and translated into final online video executions.
          </p>
        </div>
      </header>

      {/* ==================================================
          01 — CONTEXT
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
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
                For ALDI, I worked from existing storyboards and developed the final motion executions.
              </p>
              <p>
                The work involved turning planned visual sequences into short, clear animations designed for online advertising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 — PROCESS
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                02 / PROCESS
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                PROCESS
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p>
                My work focused on animation, timing, transitions, typography and adapting the content to the required languages and formats.
              </p>
              <p>
                Working from an existing storyboard also meant keeping the original idea intact while making sure the final animation felt smooth and readable.
              </p>
            </div>
          </div>

          {/* Translation Pipeline Grid */}
          <div className="p-6 md:p-8 bg-[#EAE8E0] border border-[#D9D7D1]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">STEP 01</div>
                <div className="font-bold text-[#0A0A0A]">EXISTING STORYBOARD</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">PLANNED VISUAL SEQUENCES &amp; FRAMES</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">STEP 02</div>
                <div className="font-bold text-[#5B2EFF]">MOTION DESIGN</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">ANIMATION, TIMING &amp; TYPOGRAPHY</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">STEP 03</div>
                <div className="font-bold text-[#0A0A0A]">FINAL VIDEO</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">BENL &amp; BEFR FULLSCALE EXECUTIONS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — FINAL WORK (HERO VIDEO SHOWCASE)
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            <div className="md:col-span-5">
              <div className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                03 / FINAL WORK
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A]">
                FINAL WORK
              </h2>
            </div>

            <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              <p className="font-bold text-[#0A0A0A]">
                The final videos were delivered as fullscale online video assets in Dutch and French versions.
              </p>
            </div>
          </div>

          {/* PROJECT 01 — KIPPENBORSTFILET / BENL */}
          <div className="space-y-4 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D9D7D1]">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-[#0A0A0A]">
                01 — KIPPENBORSTFILET / BENL
              </h3>
              <span className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-semibold">
                DUTCH / BELGIAN-NL COMMERCIAL EXECUTION
              </span>
            </div>

            <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-3 sm:p-5 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-[#D9D7D1] shadow-inner group">
                <LazyVideo
                  ref={videoRef1}
                  src={videoKip}
                  loop
                  muted={isMuted1}
                  playsInline
                  className="w-full h-full object-contain"
                />

                {/* Custom Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white transition-opacity">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={togglePlay1}
                      className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
                      aria-label={isPlaying1 ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying1 ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button
                      onClick={toggleMute1}
                      className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
                      aria-label={isMuted1 ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted1 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <span className="font-mono-custom text-[10px] md:text-[11px] tracking-wider uppercase ml-1 hidden sm:inline text-white/90">
                      KIPPENBORSTFILET / BENL
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenLarge(videoKip, '01 — KIPPENBORSTFILET / BENL')}
                    className="px-3 py-1.5 rounded bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors focus:outline-none cursor-pointer font-mono-custom text-[10px] md:text-[11px] uppercase tracking-wider flex items-center gap-1.5"
                    aria-label="Open fullscreen"
                  >
                    <Maximize2 size={13} />
                    <span>FULLSCREEN ↗</span>
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">KIPPENBORSTFILET / BENL</span>
                <span>10.00S · 1920×1080 FULL HD · 25 FPS</span>
              </div>
            </div>
          </div>

          {/* PROJECT 02 — KERSEN / BEFR */}
          <div className="space-y-4 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D9D7D1]">
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-[#0A0A0A]">
                02 — KERSEN / BEFR
              </h3>
              <span className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-semibold">
                FRENCH / BELGIAN-FR COMMERCIAL EXECUTION
              </span>
            </div>

            <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-3 sm:p-5 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-[#D9D7D1] shadow-inner group">
                <LazyVideo
                  ref={videoRef2}
                  src={videoKersen}
                  loop
                  muted={isMuted2}
                  playsInline
                  className="w-full h-full object-contain"
                />

                {/* Custom Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white transition-opacity">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={togglePlay2}
                      className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
                      aria-label={isPlaying2 ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying2 ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button
                      onClick={toggleMute2}
                      className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
                      aria-label={isMuted2 ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted2 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <span className="font-mono-custom text-[10px] md:text-[11px] tracking-wider uppercase ml-1 hidden sm:inline text-white/90">
                      KERSEN / BEFR
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenLarge(videoKersen, '02 — KERSEN / BEFR')}
                    className="px-3 py-1.5 rounded bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors focus:outline-none cursor-pointer font-mono-custom text-[10px] md:text-[11px] uppercase tracking-wider flex items-center gap-1.5"
                    aria-label="Open fullscreen"
                  >
                    <Maximize2 size={13} />
                    <span>FULLSCREEN ↗</span>
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono-custom uppercase text-[#0A0A0A]/60 pt-2 border-t border-[#D9D7D1]/50">
                <span className="font-bold text-[#0A0A0A]">KERSEN / BEFR</span>
                <span>10.00S · 1920×1080 FULL HD · 25 FPS</span>
              </div>
            </div>
          </div>

          {/* LANGUAGE ADAPTATION HIGHLIGHT */}
          <div className="p-6 md:p-8 bg-[#ECEAE3] border border-[#D9D7D1]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5 space-y-1">
                <div className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-bold">
                  LANGUAGE ADAPTATION
                </div>
                <h4 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">
                  BENL &amp; BEFR
                </h4>
              </div>

              <div className="md:col-span-7 font-mono-custom text-xs uppercase text-[#0A0A0A]/80 leading-relaxed space-y-2">
                <p>
                  The two executions demonstrate language adaptation across Belgian retail markets (BENL &amp; BEFR).
                </p>
                <p className="text-[#0A0A0A]/60 text-[11px]">
                  The visual system, animation timing, and transition easing remain perfectly consistent while typography adapts to Dutch and French copy.
                </p>
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
                  08 / MINI
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  MINI
                </h3>
                <p className="font-mono-custom text-[11px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  TACTICAL COMMERCIAL CAMPAIGN &amp; DOOH MOTION
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
