import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { LazyVideo } from './LazyVideo';

interface MotionArchivePageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (mediaUrl: string, title: string) => void;
}

interface MotionCardProps {
  src: string;
  title: string;
  client: string;
  duration: string;
  format: string;
  aspectRatio?: '16/9' | '9/16';
  projectSlug: string;
  onNavigate: (path: string) => void;
  onOpenLarge?: (src: string, title: string) => void;
}

const MotionArchiveCard: React.FC<MotionCardProps> = ({
  src,
  title,
  client,
  duration,
  format,
  aspectRatio = '16/9',
  projectSlug,
  onNavigate,
  onOpenLarge,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-4 sm:p-5 flex flex-col justify-between shadow-sm">
      {/* Video Container */}
      <div
        className={`relative w-full overflow-hidden bg-black border border-[#D9D7D1] shadow-inner group ${
          aspectRatio === '9/16' ? 'aspect-[9/16] max-h-[520px] mx-auto' : 'aspect-[16/9]'
        }`}
      >
        <LazyVideo
          ref={videoRef}
          src={src}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-contain bg-black"
        />

        {/* Video Overlay Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white opacity-95 sm:opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
            <span className="font-mono-custom text-[10px] tracking-wider uppercase ml-1 hidden sm:inline text-white/90">
              {duration}
            </span>
          </div>

          <button
            onClick={() => onOpenLarge?.(src, title)}
            className="px-2.5 py-1 rounded bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors focus:outline-none cursor-pointer font-mono-custom text-[10px] uppercase tracking-wider flex items-center gap-1"
            aria-label="Open large video"
          >
            <Maximize2 size={12} />
            <span>EXPAND ↗</span>
          </button>
        </div>
      </div>

      {/* Video Details */}
      <div className="mt-3.5 pt-3 border-t border-[#D9D7D1] flex flex-col gap-1 font-mono-custom text-[11px] uppercase">
        <div className="flex items-center justify-between text-[#5B2EFF] font-semibold text-[10px]">
          <span>{client}</span>
          <span>{duration}</span>
        </div>
        <h4 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] leading-snug tracking-tight mt-0.5">
          {title}
        </h4>
        <div className="flex items-center justify-between text-[#0A0A0A]/60 text-[10px] pt-2 border-t border-[#D9D7D1]/60 mt-1">
          <span>{format}</span>
          <button
            onClick={() => onNavigate(`/work/${projectSlug}`)}
            className="text-[#5B2EFF] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
          >
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const MotionArchivePage: React.FC<MotionArchivePageProps> = ({ onNavigate, onOpenLightbox }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenLarge = (src: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox(src, title);
    }
  };

  return (
    <article className="pt-28 md:pt-36 pb-24 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full text-[#0A0A0A]">
      {/* Top Breadcrumbs */}
      <div className="pb-8 border-b border-[#D9D7D1] flex items-center justify-between font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]">
        <button
          onClick={() => onNavigate('/')}
          className="group inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO INDEX</span>
        </button>
        <span className="text-[#0A0A0A]/40 hidden sm:inline">ARCHIVE / MOTION DESIGN</span>
      </div>

      {/* Header */}
      <header className="py-12 md:py-20 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <span className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold block mb-3">
                SPECIALIZED DISCIPLINE ARCHIVE
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-[#0A0A0A] leading-[0.95]">
                MOTION DESIGN
              </h1>
              <p className="font-mono-custom text-xs sm:text-sm md:text-base text-[#0A0A0A]/70 uppercase tracking-tight mt-3 max-w-3xl">
                Commercial TVCs, Storyboard-to-Final Animations, DOOH Vertical Totems &amp; Multi-Format Declinations
              </p>
            </div>

            <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-5 sm:p-6 w-full lg:w-80 shrink-0 font-mono-custom text-xs uppercase space-y-2.5 shadow-sm">
              <div className="flex justify-between border-b border-[#D9D7D1] pb-2">
                <span className="text-[#0A0A0A]/50">PROJECTS</span>
                <span className="font-semibold text-[#0A0A0A]">04 FEATURED</span>
              </div>
              <div className="flex justify-between border-b border-[#D9D7D1] pb-2">
                <span className="text-[#0A0A0A]/50">REAL VIDEOS</span>
                <span className="font-semibold text-[#5B2EFF]">16 ASSETS</span>
              </div>
              <div className="flex justify-between border-b border-[#D9D7D1] pb-2">
                <span className="text-[#0A0A0A]/50">YEARS</span>
                <span className="font-semibold text-[#0A0A0A]">2025 — 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/50">LOCATION</span>
                <span className="font-semibold text-[#0A0A0A]">BRUSSELS / BE</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================================================
          01. ALDI MOTION DESIGN
      ================================================== */}
      <section className="py-16 md:py-20 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#D9D7D1] gap-4">
            <div>
              <span className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold block mb-1">
                PROJECT 01
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0A0A0A]">
                ALDI COMMERCIAL MOTION DESIGN
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/work/aldi')}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors font-mono-custom text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MotionArchiveCard
              src="/videos/8240-003562_ALDI_2026_OLV_W21-Kersen_Fullscale_BENL.mp4"
              title="ALDI — OLV W21 Kersen (BENL)"
              client="ALDI"
              duration="10 SEC"
              format="1080p 16:9 Fullscale OLV"
              projectSlug="aldi"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
            <MotionArchiveCard
              src="/videos/8240-003521_ALDI_2026_OLV_W20_Kippenborstfilet_Fullscale_BEFR.mp4"
              title="ALDI — OLV W20 Kippenborstfilet (BEFR)"
              client="ALDI"
              duration="10 SEC"
              format="1080p 16:9 Fullscale OLV"
              projectSlug="aldi"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
          </div>
        </div>
      </section>

      {/* ==================================================
          02. MINI TACTICAL CAMPAIGN
      ================================================== */}
      <section className="py-16 md:py-20 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#D9D7D1] gap-4">
            <div>
              <span className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold block mb-1">
                PROJECT 02
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0A0A0A]">
                MINI TACTICAL CAMPAIGN
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/work/mini')}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors font-mono-custom text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <MotionArchiveCard
              src="/videos/V2_8240-003629_MINI_Tactical Campaign_F67_Mar26_DOOH_Goodweather_BEFR.mp4"
              title="MINI V2 — DOOH Good Weather (BEFR)"
              client="MINI"
              duration="6 SEC"
              format="1080×1920 9:16 DOOH"
              aspectRatio="9/16"
              projectSlug="mini"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
            <MotionArchiveCard
              src="/videos/V2_8240-003629_MINI_Tactical Campaign_F67_Mar26_DOOH_Badweather_BENL.mp4"
              title="MINI V2 — DOOH Bad Weather (BENL)"
              client="MINI"
              duration="6 SEC"
              format="1080×1920 9:16 DOOH"
              aspectRatio="9/16"
              projectSlug="mini"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
            <MotionArchiveCard
              src="/videos/V1_8240-003629_MINI_Tactical Campaign_F67_Mar26_BADAMOOD.mp4"
              title="MINI V1 — Mood Dynamic Hook"
              client="MINI"
              duration="6 SEC"
              format="1080×1920 9:16 DOOH"
              aspectRatio="9/16"
              projectSlug="mini"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
          </div>

          <div className="editorial-landscape-frame">
            <MotionArchiveCard
              src="/videos/8240-003629_MINI_Tactical Campaign_F67_Mar26_Youtube_BENL_10sec.mp4"
              title="MINI Tactical Campaign — 10s YouTube Commercial (BENL)"
              client="MINI"
              duration="10 SEC"
              format="1080p 16:9 OLV"
              projectSlug="mini"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
          </div>
        </div>
      </section>

      {/* ==================================================
          03. MEDIAMARKT MOTION DESIGN
      ================================================== */}
      <section className="py-16 md:py-20 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#D9D7D1] gap-4">
            <div>
              <span className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold block mb-1">
                PROJECT 03
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0A0A0A]">
                MEDIAMARKT MOTION DESIGN
              </h2>
              <p className="font-mono-custom text-xs text-[#0A0A0A]/60 uppercase mt-1">
                Motion Design / TVC / OLV / Campaign Adaptation · Professional work · MediaMarkt BeLux · 2026
              </p>
            </div>
            <button
              onClick={() => onNavigate('/work/mediamarkt')}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors font-mono-custom text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Short description */}
          <p className="text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed mb-6 max-w-4xl">
            Commercial motion design and animation for MediaMarkt BeLux across television, online and social formats.
          </p>

          {/* Project Includes Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-[#ECEAE3] border border-[#D9D7D1] font-mono-custom text-xs uppercase">
              <span className="text-[#5B2EFF] font-bold block mb-1">SOLDEN</span>
              <span className="text-[#0A0A0A]/70 text-[11px]">15s TVCs</span>
            </div>
            <div className="p-4 bg-[#ECEAE3] border border-[#D9D7D1] font-mono-custom text-xs uppercase">
              <span className="text-[#5B2EFF] font-bold block mb-1">BACK TO SCHOOL</span>
              <span className="text-[#0A0A0A]/70 text-[11px]">5s STINGERS</span>
            </div>
            <div className="p-4 bg-[#ECEAE3] border border-[#D9D7D1] font-mono-custom text-xs uppercase">
              <span className="text-[#5B2EFF] font-bold block mb-1">MEDIA MARKT × APPLE</span>
              <span className="text-[#0A0A0A]/70 text-[11px]">INTERNATIONAL TIKTOK CAMPAIGN</span>
            </div>
          </div>

          {/* Video Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <MotionArchiveCard
              src="/videos/8240-003472_MEDIAMARKT_Solden_Juli_VERZEKERING_Apple_TVC_15sec_BEFR.mp4"
              title="MediaMarkt — Solden Assurance Apple TVC"
              client="MediaMarkt BeLux"
              duration="15 SEC"
              format="1080p 16:9 TVC"
              projectSlug="mediamarkt"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
            <MotionArchiveCard
              src="/videos/8240-003472_MEDIAMARKT_Solden_Juli_KALIBRATIE_TLC_TVC_15sec_BENL.mp4"
              title="MediaMarkt — Solden Kalibratie TLC TVC"
              client="MediaMarkt BeLux"
              duration="15 SEC"
              format="1080p 16:9 TVC"
              projectSlug="mediamarkt"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
          </div>
        </div>
      </section>

      {/* ==================================================
          04. BMW × BELGIAN RED DEVILS STADIUM LED
      ================================================== */}
      <section className="py-16 md:py-20 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#D9D7D1] gap-4">
            <div>
              <span className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold block mb-1">
                PROJECT 04
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0A0A0A]">
                BMW × RED DEVILS STADIUM LED MOTION
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/work/bmw-red-devils')}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors font-mono-custom text-xs uppercase tracking-wider font-semibold cursor-pointer"
            >
              <span>VIEW CASE STUDY</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="editorial-landscape-frame">
            <MotionArchiveCard
              src="/videos/8240-003423_BMW_RedDevils_STADIUM_LED.mp4"
              title="BMW × Red Devils — Stadium LED Ribbon &amp; Screens Animation"
              client="BMW Belux × RBFA"
              duration="LOOP"
              format="Stadium LED Perimeter Ribbon"
              projectSlug="bmw-red-devils"
              onNavigate={onNavigate}
              onOpenLarge={handleOpenLarge}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 md:pt-24">
        <div className="editorial-hero-frame flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onNavigate('/')}
            className="font-mono-custom text-xs uppercase tracking-widest px-8 py-4 bg-[#0A0A0A] text-white hover:bg-[#5B2EFF] transition-colors cursor-pointer"
          >
            ← BACK TO FULL PORTFOLIO INDEX
          </button>
        </div>
      </footer>
    </article>
  );
};
