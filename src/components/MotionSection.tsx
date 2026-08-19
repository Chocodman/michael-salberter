import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Film } from 'lucide-react';
import { motionShowcaseData } from '../data/projectsData';
import { LazyVideo } from './LazyVideo';

interface MotionSectionProps {
  onOpenProject: (slug: string) => void;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ onOpenProject }) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    // Intersection Observer to pause/play videos when entering/exiting viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(videoRefs.current).forEach((video: HTMLVideoElement | null) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
      setActiveVideoId(id);
    } else {
      video.pause();
      setActiveVideoId(null);
    }
  };

  const getProjectSlug = (id: string, client: string) => {
    if (client.toLowerCase().includes('aldi')) return 'aldi';
    if (client.toLowerCase().includes('mediamarkt')) return 'mediamarkt';
    if (client.toLowerCase().includes('mini')) return 'mini';
    if (client.toLowerCase().includes('bmw')) return 'bmw-red-devils';
    return 'aldi';
  };

  return (
    <section
      id="motion-section"
      className="dark-mode-section bg-[#0A0A0A] text-[#F3F2EE] py-24 md:py-36 px-6 sm:px-10 md:px-16 transition-colors duration-500 w-full"
    >
      <div className="max-w-[1360px] mx-auto w-full">
        {/* Top Header Transition */}
        <div className="pb-12 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono-custom text-[11px] uppercase tracking-widest text-[#5B2EFF] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5B2EFF] animate-ping"></span>
              <span>05 / MOTION DESIGN</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.95] text-white uppercase">
              MOTION
              <br />
              DESIGN
            </h2>
          </div>

          <div className="md:max-w-xl font-mono-custom text-[12px] uppercase text-white/70 space-y-3 leading-relaxed">
            <p className="text-white font-bold text-sm sm:text-base">
              A selection of motion work I’ve worked on professionally.
            </p>
            <p className="text-white/60 leading-relaxed">
              From TV commercials and online campaigns to DOOH and stadium screens, these projects are mostly about taking an existing idea and making it work through movement.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenProject('motion')}
                data-cursor="project"
                data-cursor-text="MOTION ↗"
                className="inline-flex items-center gap-2 font-mono-custom text-[12px] uppercase tracking-widest font-bold text-white bg-[#5B2EFF] hover:bg-[#461fe0] transition-colors px-4 py-2 cursor-pointer"
              >
                <span>VIEW MOTION ARCHIVE</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Motion Grid: Controlled 2-Column Editorial Layout */}
        <div className="mt-14 editorial-grid-2">
          {motionShowcaseData.map((item, index) => {
            const slug = getProjectSlug(item.id, item.client);
            return (
              <div
                key={item.id}
                className="group border border-[#222222] bg-[#111111] p-4 md:p-5 flex flex-col justify-between transition-colors hover:border-[#333333] shadow-sm"
              >
                {/* Video Player Frame */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black mb-5">
                  <LazyVideo
                    ref={(el) => (videoRefs.current[item.id] = el)}
                    src={item.videoUrl}
                    poster={item.poster}
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="bg-black/80 backdrop-blur-sm text-white font-mono-custom text-[10px] px-2.5 py-1 uppercase tracking-wider">
                      0{index + 1} / {item.year}
                    </span>
                    <span className="bg-[#5B2EFF] text-white font-mono-custom text-[10px] px-2 py-0.5 uppercase tracking-wider font-semibold">
                      VIDEO
                    </span>
                  </div>

                  {/* Controls Bar Overlay */}
                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => togglePlay(item.id)}
                      className="w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#5B2EFF] transition-colors cursor-pointer"
                      aria-label="Play/Pause"
                    >
                      {activeVideoId === item.id ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#5B2EFF] transition-colors cursor-pointer"
                      aria-label="Mute/Unmute"
                    >
                      {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                  </div>
                </div>

                {/* Video Metadata */}
                <div className="pt-3 border-t border-[#222222] font-mono-custom text-xs">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold text-white uppercase text-sm tracking-tight">{item.title}</div>
                    <div className="text-[#5B2EFF] text-[11px] font-semibold">{item.duration}</div>
                  </div>
                  <div className="text-white/60 text-[11px] uppercase">{item.client} — {item.format}</div>
                  <div className="mt-3 pt-2 border-t border-[#222222] flex items-center justify-between">
                    <span className="text-white/40 text-[10px] uppercase">{item.role}</span>
                    <button
                      onClick={() => onOpenProject(slug)}
                      className="text-[#5B2EFF] hover:text-white text-[11px] font-bold uppercase flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
