import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { LazyVideo } from './LazyVideo';

interface MiniProjectPageProps {
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
  aspectRatio?: '9/16' | '16/9';
  tag?: string;
  tagColor?: string;
  onOpenLarge?: (src: string, title: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  src,
  title,
  duration,
  region,
  format,
  category,
  aspectRatio = '9/16',
  tag,
  tagColor = 'bg-[#5B2EFF] text-white',
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
    <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-3 sm:p-5 flex flex-col justify-between h-full shadow-sm">
      {/* Video Container */}
      <div
        className={`relative w-full overflow-hidden bg-black border border-[#D9D7D1] shadow-inner group ${
          aspectRatio === '9/16' ? 'aspect-[9/16] max-h-[560px] mx-auto' : 'aspect-[16/9]'
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

        {/* Top Tag Badge if present */}
        {tag && (
          <div className="absolute top-3 left-3 pointer-events-none z-10">
            <span className={`font-mono-custom text-[9px] uppercase tracking-wider px-2 py-1 ${tagColor} font-semibold shadow-sm`}>
              {tag}
            </span>
          </div>
        )}

        {/* Video Overlay Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white opacity-95 sm:opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="flex items-center gap-1.5">
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
            <span className="font-mono-custom text-[10px] tracking-wider uppercase ml-1 hidden sm:inline text-white/90 truncate max-w-[140px]">
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
          <span>{category}</span>
          <span>{region}</span>
        </div>
        <h4 className="font-display font-bold text-sm sm:text-base text-[#0A0A0A] leading-snug tracking-tight mt-0.5">
          {title}
        </h4>
        <div className="flex items-center justify-between text-[#0A0A0A]/60 text-[10px] pt-2 border-t border-[#D9D7D1]/60 mt-1">
          <span>{format}</span>
          <button
            onClick={() => onOpenLarge?.(src, title)}
            className="text-[#5B2EFF] hover:underline font-semibold flex items-center gap-0.5"
          >
            <span>WATCH LARGE</span>
            <ArrowUpRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const MiniProjectPage: React.FC<MiniProjectPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const nextProject = projectsData.find((p) => p.slug === 'mediamarkt') || projectsData[5];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleOpenLarge = (src: string, title: string) => {
    if (onOpenLightbox) {
      onOpenLightbox(src, title);
    }
  };

  // V2 Selected Direction: 2 Core Language Variations
  const v2Videos: VideoCardProps[] = [
    {
      src: '/videos/V2_8240-003629_MINI_Tactical Campaign_F67_Mar26_DOOH_Goodweather_BEFR.mp4',
      title: 'V2 Selected — DOOH Good Weather (BEFR)',
      duration: '6 SEC',
      region: 'BEFR (French)',
      format: '1080×1920 9:16 DOOH',
      category: 'FINAL CLIENT SELECTED',
      aspectRatio: '9/16',
      tag: 'V2 • SELECTED (BEFR)',
      tagColor: 'bg-[#5B2EFF] text-white',
    },
    {
      src: '/videos/V2_8240-003629_MINI_Tactical Campaign_F67_Mar26_DOOH_Badweather_BENL.mp4',
      title: 'V2 Selected — DOOH Bad Weather (BENL)',
      duration: '6 SEC',
      region: 'BENL (Dutch)',
      format: '1080×1920 9:16 DOOH',
      category: 'FINAL CLIENT SELECTED',
      aspectRatio: '9/16',
      tag: 'V2 • SELECTED (BENL)',
      tagColor: 'bg-[#5B2EFF] text-white',
    },
  ];

  // V1 Creative Proposal: 2 Core Concepts
  const v1Videos: VideoCardProps[] = [
    {
      src: '/videos/V1_8240-003629_MINI_Tactical Campaign_F67_Mar26_BEFR.mp4',
      title: 'V1 Proposal — Master Cut (BEFR)',
      duration: '6 SEC',
      region: 'BEFR (French)',
      format: '1080×1920 DOOH',
      category: 'CREATIVE PROPOSAL',
      aspectRatio: '9/16',
      tag: 'V1 • MY PROPOSAL',
      tagColor: 'bg-[#0A0A0A] text-white',
    },
    {
      src: '/videos/V1_8240-003629_MINI_Tactical Campaign_F67_Mar26_BADAMOOD.mp4',
      title: 'V1 Proposal — Mood Dynamic Hook',
      duration: '6 SEC',
      region: 'NATIONAL / BE',
      format: '1080×1920 DOOH',
      category: 'CREATIVE PROPOSAL',
      aspectRatio: '9/16',
      tag: 'V1 • MOOD HOOK',
      tagColor: 'bg-[#0A0A0A] text-white',
    },
  ];

  return (
    <article className="pt-28 md:pt-36 pb-24 px-6 sm:px-10 md:px-16 max-w-[1360px] mx-auto w-full">
      {/* ==================================================
          TOP BREADCRUMB & BACK BUTTON
      ================================================== */}
      <div className="pb-8 border-b border-[#D9D7D1] flex items-center justify-between font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]">
        <button
          onClick={() => onNavigate('/')}
          className="group inline-flex items-center gap-2 text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO INDEX</span>
        </button>
        <span className="text-[#0A0A0A]/40 hidden sm:inline">PROJECT ARCHIVE — 07</span>
      </div>

      {/* ==================================================
          PROJECT TITLE & METADATA GRID
      ================================================== */}
      <div className="pt-10 pb-12 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-4xl">
              <span className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold block mb-3">
                07 / PROFESSIONAL WORK — MOTION DESIGN
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A] leading-[0.95]">
                MINI TACTICAL CAMPAIGN
              </h1>
              <p className="font-mono-custom text-xs sm:text-sm md:text-base text-[#0A0A0A]/70 uppercase tracking-tight mt-3 max-w-3xl">
                Creative Proposal, Client Selection &amp; Multi-Format Campaign Declinations
              </p>
            </div>

            {/* Quick Meta Stats Box */}
            <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-5 sm:p-6 w-full lg:w-80 shrink-0 font-mono-custom text-xs uppercase space-y-2.5 shadow-sm">
              <div className="flex justify-between border-b border-[#D9D7D1] pb-2">
                <span className="text-[#0A0A0A]/50">CLIENT</span>
                <span className="font-semibold text-[#0A0A0A]">MINI</span>
              </div>
              <div className="flex justify-between border-b border-[#D9D7D1] pb-2">
                <span className="text-[#0A0A0A]/50">YEAR</span>
                <span className="font-semibold text-[#0A0A0A]">2026</span>
              </div>
              <div className="flex justify-between border-b border-[#D9D7D1] pb-2">
                <span className="text-[#0A0A0A]/50">TYPE</span>
                <span className="font-semibold text-[#0A0A0A]">PROFESSIONAL WORK</span>
              </div>
              <div className="flex justify-between border-b border-[#D9D7D1] pb-2">
                <span className="text-[#0A0A0A]/50">FORMAT</span>
                <span className="font-semibold text-[#0A0A0A]">DOOH 9:16 &amp; YOUTUBE 16:9</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0A0A0A]/50">LANGUAGES</span>
                <span className="font-semibold text-[#0A0A0A]">BENL &amp; BEFR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          NARRATIVE PILL BAR (MY IDEA -> CLIENT SELECTION -> DECLINATIONS)
      ================================================== */}
      <div className="my-10 editorial-hero-frame">
        <div className="p-5 bg-[#0A0A0A] text-[#F3F2EE] border border-[#222222] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
            <div className="flex items-start gap-3 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4">
              <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
                01
              </span>
              <div>
                <span className="text-white/50 block text-[10px] tracking-wider">INITIAL PHASE</span>
                <strong className="text-white text-sm font-display font-bold">MY CREATIVE PROPOSAL (V1)</strong>
                <p className="text-white/70 text-[11px] normal-case mt-1 font-body">
                  Original creative ideation exploring dynamic mood and visual triggers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4">
              <span className="w-6 h-6 rounded-full bg-[#5B2EFF] text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
                02
              </span>
              <div>
                <span className="text-[#5B2EFF] block text-[10px] tracking-wider font-semibold">SELECTED PATH</span>
                <strong className="text-white text-sm font-display font-bold">CLIENT SELECTED DIRECTION (V2)</strong>
                <p className="text-white/70 text-[11px] normal-case mt-1 font-body">
                  The creative route chosen by MINI for the national rollout.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center font-bold shrink-0 text-[11px]">
                03
              </span>
              <div>
                <span className="text-white/50 block text-[10px] tracking-wider">FULL ROLLOUT</span>
                <strong className="text-white text-sm font-display font-bold">CAMPAIGN DECLINATIONS</strong>
                <p className="text-white/70 text-[11px] normal-case mt-1 font-body">
                  DOOH 9:16 vertical totems, 16:9 YouTube pre-roll, BENL &amp; BEFR languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          PROJECT INTRODUCTION & EDITORIAL CONTEXT
      ================================================== */}
      <section className="py-12 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 font-mono-custom text-xs uppercase tracking-widest text-[#0A0A0A]">
              <span className="text-[#5B2EFF] font-bold block mb-1">PROJECT CONTEXT</span>
              <span>TWO CREATIVE DIRECTIONS</span>
            </div>

            <div className="lg:col-span-8 space-y-6 text-[#0A0A0A]/90 font-body text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-[#0A0A0A] text-lg sm:text-xl">
                A tactical MINI campaign developed through two creative directions. I initially proposed V1 as my own creative concept. The client selected V2, which I then developed into the final motion executions and campaign declinations across distinct video formats.
              </p>
              <p className="text-sm sm:text-base text-[#0A0A0A]/70">
                The project encapsulates the end-to-end creative journey from exploratory ideation to polished commercial delivery. By structuring the work across contextual triggers—such as weather conditions and linguistic territories—the campaign system maintained strict brand precision while adapting dynamically to high-visibility Out-of-Home displays and digital video platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          02 / V2 — CLIENT SELECTED (MAIN FINAL CAMPAIGN)
          2 Selected DOOH Vertical Videos
      ================================================== */}
      <section className="py-16 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#D9D7D1] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold mb-2">
                <span className="px-2 py-0.5 bg-[#5B2EFF] text-white text-[10px]">MAIN CAMPAIGN</span>
                <span>02 / V2 — CLIENT SELECTED</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
                FINAL CREATIVE DIRECTION
              </h2>
            </div>
            <div className="font-mono-custom text-xs text-[#0A0A0A]/60 uppercase md:text-right max-w-md">
              V2 was the direction selected by the client and subsequently developed into the final campaign executions (Real DOOH Videos).
            </div>
          </div>

          {/* Clean 2-Column V2 DOOH Vertical Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {v2Videos.map((video, idx) => (
              <div key={idx} className="relative">
                <VideoCard {...video} onOpenLarge={handleOpenLarge} />
              </div>
            ))}
          </div>

          {/* Selected Direction Highlights */}
          <div className="mt-12 p-6 bg-[#ECEBE5] border border-[#D9D7D1]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-custom text-xs uppercase">
              <div>
                <span className="text-[#5B2EFF] block font-bold mb-1">01 / TYPOGRAPHY</span>
                <p className="text-[#0A0A0A]/70 text-[11px] normal-case font-body">
                  Clean, high-legibility geometric layouts engineered for instant roadside recognition on vertical totems.
                </p>
              </div>
              <div>
                <span className="text-[#5B2EFF] block font-bold mb-1">02 / EASED REVEALS</span>
                <p className="text-[#0A0A0A]/70 text-[11px] normal-case font-body">
                  Smooth easing physics connecting vehicle movement with tactile promotional messaging.
                </p>
              </div>
              <div>
                <span className="text-[#5B2EFF] block font-bold mb-1">03 / DUAL-LANGUAGE</span>
                <p className="text-[#0A0A0A]/70 text-[11px] normal-case font-body">
                  Unified master animation structure accommodating both Flemish (BENL) and French (BEFR) text lengths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          01 / V1 — MY CREATIVE PROPOSAL (CREATIVE EXPLORATION)
          2 Proposal DOOH Vertical Videos
      ================================================== */}
      <section className="py-16 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#D9D7D1] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono-custom text-xs uppercase tracking-widest text-[#0A0A0A]/60 font-semibold mb-2">
                <span className="px-2 py-0.5 bg-[#0A0A0A] text-white text-[10px]">MY PROPOSAL</span>
                <span>01 / V1 — CREATIVE PROPOSAL</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#0A0A0A]">
                MY CONCEPT &amp; EXPLORATION
              </h2>
            </div>
            <div className="font-mono-custom text-xs text-[#0A0A0A]/60 uppercase md:text-right max-w-md">
              This direction represents my initial creative proposal during the development phase, exploring dynamic mood and visual variations (Real DOOH Videos).
            </div>
          </div>

          {/* Clean 2-Column Exploratory DOOH Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {v1Videos.map((video, idx) => (
              <div key={idx} className="relative">
                <VideoCard {...video} onOpenLarge={handleOpenLarge} />
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 border border-dashed border-[#D9D7D1] bg-[#F3F2EE] font-mono-custom text-xs uppercase text-[#0A0A0A]/60 flex items-center gap-3">
            <Sparkles size={16} className="text-[#5B2EFF] shrink-0" />
            <span>
              Creative Note: V1 was designed as an exploratory concept to demonstrate energetic pacing and contextual triggers before the client aligned on the streamlined V2 direction.
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================
          03 / CAMPAIGN DECLINATIONS & YOUTUBE EXECUTION
      ================================================== */}
      <section className="py-16 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="mb-10 pb-6 border-b border-[#D9D7D1]">
            <span className="font-mono-custom text-xs uppercase tracking-widest text-[#5B2EFF] font-semibold block mb-2">
              03 / FULL ADAPTATION SYSTEM
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0A0A0A]">
              CAMPAIGN DECLINATIONS &amp; MULTI-FORMAT SYSTEM
            </h2>
            <p className="font-mono-custom text-xs sm:text-sm text-[#0A0A0A]/70 uppercase tracking-tight mt-2 max-w-3xl">
              How the selected V2 direction was adapted across media channels, screen orientations, languages, and environmental triggers.
            </p>
          </div>

          {/* YouTube 16:9 Horizontal Feature Player */}
          <div className="mb-14 border border-[#D9D7D1] bg-[#ECEBE5] p-5 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#D9D7D1] gap-2 font-mono-custom text-xs uppercase">
              <div>
                <span className="text-[#5B2EFF] font-bold">DIGITAL OLV / YOUTUBE PRE-ROLL</span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#0A0A0A] mt-1">
                  YOUTUBE 10-SECOND COMMERCIAL (BENL)
                </h3>
              </div>
              <div className="flex items-center gap-3 text-[#0A0A0A]/60">
                <span className="px-2 py-1 bg-white border border-[#D9D7D1]">1920×1080 (16:9)</span>
                <span className="px-2 py-1 bg-white border border-[#D9D7D1]">10 SECONDS</span>
                <span className="px-2 py-1 bg-[#0A0A0A] text-white">BENL</span>
              </div>
            </div>

            <div className="editorial-landscape-frame">
              <VideoCard
                src="/videos/8240-003629_MINI_Tactical Campaign_F67_Mar26_Youtube_BENL_10sec.mp4"
                title="MINI Tactical Campaign — 10s YouTube Commercial (BENL)"
                duration="10 SEC"
                region="BENL (Dutch)"
                format="1080p 16:9 Horizontal Format"
                category="YOUTUBE COMMERCIAL"
                aspectRatio="16/9"
                tag="YOUTUBE • 16:9"
                tagColor="bg-[#E52213] text-white"
                onOpenLarge={handleOpenLarge}
              />
            </div>
          </div>

          {/* Campaign Matrix Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono-custom text-xs uppercase">
            <div className="border border-[#D9D7D1] p-5 bg-[#ECEBE5]">
              <div className="text-[#5B2EFF] font-bold mb-2">01 / FORMATS</div>
              <div className="font-display font-bold text-lg text-[#0A0A0A] mb-1">9:16 &amp; 16:9</div>
              <p className="text-[#0A0A0A]/70 text-[11px] normal-case font-body">
                Vertical DOOH format (1080×1920) for street totems + horizontal format (1920×1080) for YouTube.
              </p>
            </div>

            <div className="border border-[#D9D7D1] p-5 bg-[#ECEBE5]">
              <div className="text-[#5B2EFF] font-bold mb-2">02 / LANGUAGES</div>
              <div className="font-display font-bold text-lg text-[#0A0A0A] mb-1">BENL &amp; BEFR</div>
              <p className="text-[#0A0A0A]/70 text-[11px] normal-case font-body">
                Complete typographic and voice-over pacing adjustments for Flemish/Dutch and Belgian French audiences.
              </p>
            </div>

            <div className="border border-[#D9D7D1] p-5 bg-[#ECEBE5]">
              <div className="text-[#5B2EFF] font-bold mb-2">03 / WEATHER TRIGGERS</div>
              <div className="font-display font-bold text-lg text-[#0A0A0A] mb-1">GOOD &amp; BAD WEATHER</div>
              <p className="text-[#0A0A0A]/70 text-[11px] normal-case font-body">
                Contextual dynamic copy tailored to trigger in real-time according to weather station forecasts.
              </p>
            </div>

            <div className="border border-[#D9D7D1] p-5 bg-[#ECEBE5]">
              <div className="text-[#5B2EFF] font-bold mb-2">04 / TIMING</div>
              <div className="font-display font-bold text-lg text-[#0A0A0A] mb-1">6 SEC &amp; 10 SEC</div>
              <p className="text-[#0A0A0A]/70 text-[11px] normal-case font-body">
                High-impact 6-second DOOH loops calibrated with 10-second non-skippable YouTube pre-rolls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PROJECT METADATA, ROLE & CREDITS
      ================================================== */}
      <section className="py-16 border-b border-[#D9D7D1]">
        <div className="editorial-hero-frame">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 font-mono-custom text-xs uppercase tracking-widest text-[#0A0A0A]">
              <span className="text-[#5B2EFF] font-bold block mb-1">SPECIFICATIONS</span>
              <span>CREDITS &amp; CONTRIBUTION</span>
            </div>

            <div className="lg:col-span-8">
              <div className="border border-[#D9D7D1] bg-[#ECEBE5] p-6 sm:p-8 space-y-6 font-mono-custom text-xs uppercase shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-[#D9D7D1] pb-6">
                  <div>
                    <span className="text-[#0A0A0A]/50 block mb-1">CLIENT</span>
                    <strong className="text-base font-display font-bold text-[#0A0A0A]">MINI</strong>
                  </div>
                  <div>
                    <span className="text-[#0A0A0A]/50 block mb-1">PROJECT TYPE</span>
                    <strong className="text-base font-display font-bold text-[#0A0A0A]">PROFESSIONAL WORK</strong>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-[#D9D7D1] pb-6">
                  <div>
                    <span className="text-[#0A0A0A]/50 block mb-1">V1 — CREATIVE PROPOSAL</span>
                    <span className="text-[#0A0A0A] font-semibold">MY OWN CREATIVE CONCEPT &amp; IDEATION</span>
                  </div>
                  <div>
                    <span className="text-[#5B2EFF] block mb-1 font-bold">V2 — CLIENT SELECTED</span>
                    <span className="text-[#0A0A0A] font-semibold">FINAL DIRECTION SELECTED BY CLIENT</span>
                  </div>
                </div>

                <div className="border-b border-[#D9D7D1] pb-6">
                  <span className="text-[#0A0A0A]/50 block mb-3">MY CONTRIBUTION</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#0A0A0A]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>Creative Proposal (V1)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>Motion Design &amp; Keyframe Rigging</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>Animation &amp; Kinetic Typography</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>Development of Selected V2 Direction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>DOOH 9:16 Vertical Totem Adaptations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>YouTube 16:9 Commercial Video Format</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>BENL &amp; BEFR Language Adaptations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5B2EFF] rounded-full"></span>
                      <span>Weather-based Contextual Declinations</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[#0A0A0A]/60 normal-case leading-relaxed font-body">
                  <strong>Footage Notice:</strong> The live-action filmed footage used in some of the videos was provided by the project/client and not filmed by me. The creative proposal (V1), motion design, animation, kinetic typography, transitions, timing, compositing, format adaptations, and campaign declinations were created by me.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          NEXT PROJECT FOOTER
      ================================================== */}
      <footer className="pt-16 md:pt-24">
        <div className="editorial-hero-frame flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#0A0A0A]/40 mb-2">
              NEXT CASE STUDY
            </div>
            <button
              onClick={() => onNavigate(`/work/${nextProject.slug}`)}
              className="group font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0A0A] hover:text-[#5B2EFF] transition-colors inline-flex items-center gap-4 text-left cursor-pointer"
            >
              <span>{nextProject.title}</span>
              <ArrowRight size={36} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <button
            onClick={() => onNavigate('/')}
            className="font-mono-custom text-xs uppercase tracking-widest px-6 py-4 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F3F2EE] transition-colors cursor-pointer"
          >
            BACK TO ALL PROJECTS
          </button>
        </div>
      </footer>
    </article>
  );
};
