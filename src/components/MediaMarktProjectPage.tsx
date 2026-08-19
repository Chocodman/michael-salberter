import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { LazyVideo } from './LazyVideo';

interface MediaMarktProjectPageProps {
  onNavigate: (path: string) => void;
  onOpenLightbox?: (mediaUrl: string, title: string) => void;
}

interface VideoCardProps {
  src: string;
  title: string;
  duration: string;
  region: string;
  format: string;
  category: string;
  onOpenLarge?: (src: string, title: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, title, duration, region, format, category, onOpenLarge }) => {
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
    <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-3 sm:p-5 flex flex-col justify-between shadow-sm">
      {/* Video Player */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border border-[#D9D7D1] shadow-inner group">
        <LazyVideo
          ref={videoRef}
          src={src}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-contain"
        />

        {/* Video Overlay Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white transition-opacity">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-colors focus:outline-none cursor-pointer"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <span className="font-mono-custom text-[10px] tracking-wider uppercase ml-1 hidden sm:inline text-white/90">
              {region} · {duration}
            </span>
          </div>

          <button
            onClick={() => onOpenLarge?.(src, title)}
            className="px-2.5 py-1 rounded bg-white/20 hover:bg-white/30 backdrop-blur-md transition-colors focus:outline-none cursor-pointer font-mono-custom text-[10px] uppercase tracking-wider flex items-center gap-1"
            aria-label="Open fullscreen video"
          >
            <Maximize2 size={11} />
            <span>EXPAND ↗</span>
          </button>
        </div>
      </div>

      {/* Video Details */}
      <div className="mt-3 pt-2.5 border-t border-[#D9D7D1] flex flex-col gap-1 font-mono-custom text-xs uppercase">
        <div className="flex items-center justify-between text-[#5B2EFF] font-semibold text-[11px]">
          <span>{category}</span>
          <span>{duration}</span>
        </div>
        <h4 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] leading-snug tracking-tight">
          {title}
        </h4>
        <div className="flex items-center justify-between text-[#0A0A0A]/60 pt-1.5 border-t border-[#D9D7D1]/50 text-[10px]">
          <span>{region} · {format}</span>
          <button
            onClick={() => onOpenLarge?.(src, title)}
            className="text-[#5B2EFF] hover:underline font-semibold cursor-pointer"
          >
            FULLSCREEN ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export const MediaMarktProjectPage: React.FC<MediaMarktProjectPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const nextProject = projectsData.find((p) => p.slug === 'bmw-red-devils') || projectsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenLarge = (src: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox(src, title);
    }
  };

  const soldenVideos: VideoCardProps[] = [
    {
      src: '/videos/8240-003472_MEDIAMARKT_Solden_Juli_KALIBRATIE_TLC_TVC_15sec_BENL.mp4',
      title: 'Solden — Kalibratie TLC',
      duration: '15S',
      region: 'BENL (Dutch)',
      format: '1080p 16:9',
      category: '15S TVC'
    },
    {
      src: '/videos/8240-003472_MEDIAMARKT_Solden_Juli_LEVERING_WHIRPOOL_TVC_15sec_BENL.mp4',
      title: 'Solden — Levering Whirlpool',
      duration: '15S',
      region: 'BENL (Dutch)',
      format: '1080p 16:9',
      category: '15S TVC'
    },
    {
      src: '/videos/8240-003472_MEDIAMARKT_Solden_Juli_VERZEKERING_Apple_TVC_15sec_BEFR.mp4',
      title: 'Solden — Assurance Apple',
      duration: '15S',
      region: 'BEFR (French)',
      format: '1080p 16:9',
      category: '15S TVC'
    },
    {
      src: '/videos/8240-003472_MEDIAMARKT_Solden_Juli_VERZEKERING_TVC_15sec_BENL.mp4',
      title: 'Solden — Verzekering',
      duration: '15S',
      region: 'BENL (Dutch)',
      format: '1080p 16:9',
      category: '15S TVC'
    }
  ];

  const back2SchoolVideos: VideoCardProps[] = [
    {
      src: '/videos/8240-003725_MEDIAMARKT_Back2School_W32-38_TVC_OFFERS_16-9_5s_BENL.mp4',
      title: 'Back to School — Offers',
      duration: '5S',
      region: 'BENL (Dutch)',
      format: '1080p 16:9',
      category: '5S STINGER'
    },
    {
      src: '/videos/8240-003725_MEDIAMARKT_Back2School_W32-38_TVC_POINTS-BENEFITS_16-9_5s_NLNL.mp4',
      title: 'Back to School — Points & Benefits',
      duration: '5S',
      region: 'NLNL (Netherlands)',
      format: '1080p 16:9',
      category: '5S STINGER'
    }
  ];

  const appleVideo: VideoCardProps = {
    src: '/videos/8240-003838_MEDIAMARKT_Apple x Back2School_International campaign_Week34_2026_batterylife_TIKTOK_16-9_FR.mp4',
    title: 'MediaMarkt × Apple — Battery Life',
    duration: '19.5S',
    region: 'FR (French / International)',
    format: '1080p 16:9',
    category: 'TIKTOK CAMPAIGN'
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
          <span className="text-[#5B2EFF] font-semibold">09</span>
          <span>/</span>
          <span>MEDIAMARKT MOTION DESIGN</span>
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
              09 / CASE STUDY
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[#0A0A0A] uppercase">
              MEDIAMARKT MOTION DESIGN
            </h1>
            <p className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-[#0A0A0A]/90 uppercase tracking-tight pt-2">
              Motion Design / TVC / OLV / Campaign Adaptation
            </p>
          </div>

          {/* Project Metadata */}
          <div className="md:col-span-4 font-mono-custom text-[11px] uppercase space-y-6 pt-2 md:pl-6">
            <div>
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">PROJECT STATUS</div>
              <div className="text-[#5B2EFF] font-bold">
                Professional work · MediaMarkt BeLux · 2026
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D9D7D1]">
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">CLIENT</div>
                <div className="font-semibold text-[#0A0A0A]">MEDIAMARKT BELUX</div>
              </div>
              <div>
                <div className="text-[#0A0A0A]/40 mb-1 tracking-wider">YEAR</div>
                <div className="font-semibold text-[#0A0A0A]">2026</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9D7D1]">
              <div className="text-[#0A0A0A]/40 mb-1.5 tracking-wider">MY CONTRIBUTION</div>
              <div className="text-[#0A0A0A] font-semibold space-y-1">
                <div>• ANIMATION &amp; COMPOSITING</div>
                <div>• KINETIC TYPOGRAPHY &amp; TIMING</div>
                <div>• CAMPAIGN &amp; LANGUAGE ADAPTATION</div>
                <div>• MULTI-FORMAT VIDEO PRODUCTION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="mt-10 pt-8 border-t border-[#D9D7D1]">
          <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed max-w-4xl">
            Commercial motion design and animation for MediaMarkt BeLux across television, online and social formats.
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
                I worked on several MediaMarkt campaigns, mainly translating existing storyboards into final animated videos.
              </p>
              <p>
                The projects covered different campaigns, formats and durations, including Solden, Back to School and Apple partner campaigns.
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
                My role included animation, compositing, kinetic typography, timing and language adaptations.
              </p>
              <p>
                Working on retail campaigns also meant keeping everything very clear and readable, even when the animation was fast and there was a lot of information on screen.
              </p>
            </div>
          </div>

          {/* Process Flow Grid */}
          <div className="p-6 md:p-8 bg-[#EAE8E0] border border-[#D9D7D1]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">STEP 01</div>
                <div className="font-bold text-[#0A0A0A]">EXISTING STORYBOARD</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">PLANNED VISUAL SEQUENCES &amp; FRAMING</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">STEP 02</div>
                <div className="font-bold text-[#5B2EFF]">ANIMATION / COMPOSITING</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">KINETIC TYPOGRAPHY, TIMING &amp; TRANSITIONS</div>
              </div>

              <div className="space-y-1">
                <div className="text-[#0A0A0A]/40 text-[10px] tracking-wider">STEP 03</div>
                <div className="font-bold text-[#0A0A0A]">FINAL EXECUTION</div>
                <div className="text-[#0A0A0A]/65 text-[11px]">MULTI-FORMAT &amp; MULTI-LANGUAGE BROADCAST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 — FINAL WORK
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
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
                The work includes TVCs, short promotional stingers and digital campaign assets in different languages and formats.
              </p>
            </div>
          </div>

          {/* ==================================================
              04 — SOLDEN (15S TVCS)
          ================================================== */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D9D7D1] mb-8">
              <div>
                <span className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-bold block mb-1">
                  PROJECT GROUP 01
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-[#0A0A0A]">
                  SOLDEN
                </h3>
              </div>
              <span className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60">
                15S TVCS · 4 BROADCAST EXECUTIONS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {soldenVideos.map((video, idx) => (
                <VideoCard key={idx} {...video} onOpenLarge={handleOpenLarge} />
              ))}
            </div>
          </div>

          {/* ==================================================
              05 — BACK TO SCHOOL (5S STINGERS)
          ================================================== */}
          <div className="mb-20 pt-12 border-t border-[#D9D7D1]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D9D7D1] mb-8">
              <div>
                <span className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-bold block mb-1">
                  PROJECT GROUP 02
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-[#0A0A0A]">
                  BACK TO SCHOOL
                </h3>
              </div>
              <span className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60">
                5S STINGERS · SHORT-FORM PROMOTIONAL MOTION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {back2SchoolVideos.map((video, idx) => (
                <VideoCard key={idx} {...video} onOpenLarge={handleOpenLarge} />
              ))}
            </div>
          </div>

          {/* ==================================================
              06 — MEDIA MARKT × APPLE (TIKTOK CAMPAIGN)
          ================================================== */}
          <div className="pt-12 border-t border-[#D9D7D1]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[#D9D7D1] mb-8">
              <div>
                <span className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-bold block mb-1">
                  PROJECT GROUP 03
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-[#0A0A0A]">
                  MEDIA MARKT × APPLE
                </h3>
              </div>
              <span className="font-mono-custom text-xs uppercase text-[#0A0A0A]/60">
                INTERNATIONAL TIKTOK CAMPAIGN · DIGITAL &amp; SOCIAL MOTION
              </span>
            </div>

            <div className="max-w-3xl mx-auto">
              <VideoCard {...appleVideo} onOpenLarge={handleOpenLarge} />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          07 — CLOSING
      ================================================== */}
      <section className="py-16 md:py-24 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="p-8 md:p-12 bg-[#ECEAE3] border border-[#D9D7D1]">
            <div className="max-w-3xl space-y-4">
              <div className="font-mono-custom text-xs uppercase text-[#5B2EFF] font-bold">
                CAMPAIGN SYNTHESIS
              </div>
              <p className="font-display font-bold text-xl sm:text-2xl text-[#0A0A0A] leading-relaxed uppercase">
                The different executions demonstrate the ability to adapt motion design across television, online and social formats while maintaining clarity and consistency.
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
                  01 / BMW × BELGIAN RED DEVILS
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#5B2EFF] transition-colors">
                  BMW × BELGIAN RED DEVILS
                </h3>
                <p className="font-mono-custom text-[11px] uppercase tracking-wider text-[#0A0A0A]/60 mt-2">
                  CAMPAIGN ADAPTATION / VISUAL DESIGN / MULTI-FORMAT
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
