import React, { useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreWorkItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaUrl?: string;
  imageUrl?: string; // backwards compatibility
  title?: string;
  moreWorkItem?: MoreWorkItem | null;
  isVideo?: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  mediaUrl,
  imageUrl,
  title,
  moreWorkItem,
  isVideo: explicitIsVideo,
}) => {
  // Determine actual media source
  const src = moreWorkItem ? moreWorkItem.image : (mediaUrl || imageUrl || '');
  const currentTitle = moreWorkItem ? moreWorkItem.title : title;

  // Auto-detect video from URL or prop
  const isVideo = explicitIsVideo || (
    typeof src === 'string' && (
      src.toLowerCase().endsWith('.mp4') ||
      src.toLowerCase().endsWith('.webm') ||
      src.toLowerCase().endsWith('.mov') ||
      src.includes('/videos/')
    )
  );

  // Close modal on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/92 backdrop-blur-md cursor-zoom-out select-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-6xl w-full flex flex-col items-center justify-center cursor-default max-h-[94vh]"
        >
          {/* Header Bar */}
          <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/20 font-mono-custom text-[11px] uppercase tracking-widest text-white/80">
            <div className="flex items-center gap-2.5 truncate pr-4">
              <span className="w-2 h-2 rounded-full bg-[#5B2EFF] shrink-0"></span>
              <span className="truncate font-semibold text-white">{currentTitle || (isVideo ? 'VIDEO PLAYBACK' : 'ORIGINAL ARTWORK')}</span>
              {isVideo && (
                <span className="px-2 py-0.5 bg-[#5B2EFF] text-white text-[9px] font-bold rounded">
                  VIDEO
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-[10px] text-white/40 font-mono-custom">
                ESC TO CLOSE
              </span>
              <button
                onClick={onClose}
                className="p-1.5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 transition-colors focus:outline-none cursor-pointer rounded"
                aria-label="Close viewer"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Media Content Container */}
          <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-hidden">
            {isVideo ? (
              <video
                src={src}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="max-h-[78vh] w-auto max-w-full object-contain mx-auto bg-black rounded shadow-2xl"
              />
            ) : (
              <img
                src={src}
                alt={currentTitle || 'Artwork View'}
                loading="eager"
                decoding="async"
                className="max-h-[78vh] w-auto max-w-full object-contain mx-auto select-none rounded shadow-2xl"
              />
            )}
          </div>

          {/* Details footer if MoreWorkItem */}
          {moreWorkItem && (
            <div className="w-full mt-3 pt-3 border-t border-white/20 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center font-mono-custom text-white">
              <div className="sm:col-span-8">
                <div className="text-[10px] text-[#5B2EFF] uppercase font-semibold">
                  {moreWorkItem.category} — {moreWorkItem.year}
                </div>
                <div className="font-display font-extrabold text-lg uppercase mt-0.5">
                  {moreWorkItem.title}
                </div>
                <div className="text-[11px] text-white/70 uppercase mt-0.5">
                  {moreWorkItem.details}
                </div>
              </div>

              <div className="sm:col-span-4 sm:text-right text-[10px] uppercase text-white/50">
                <span>{moreWorkItem.type}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
