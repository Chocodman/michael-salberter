import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'project' | 'link' | 'video'>('default');
  const [cursorText, setCursorText] = useState('VIEW PROJECT →');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const videoEl = target.closest('[data-cursor="video"]');
      const linkEl = target.closest('a, button, [data-cursor="link"]');

      if (projectEl) {
        setCursorType('project');
        const customText = projectEl.getAttribute('data-cursor-text') || 'VIEW PROJECT →';
        setCursorText(customText);
      } else if (videoEl) {
        setCursorType('video');
        setCursorText('PLAY REEL');
      } else if (linkEl) {
        setCursorType('link');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {cursorType === 'project' || cursorType === 'video' ? (
        <motion.div
          className="fixed flex flex-col items-center justify-center rounded-full bg-[#0A0A0A] text-white shadow-2xl backdrop-blur-sm border border-white/20 px-3 text-center"
          animate={{
            x: position.x - 55,
            y: position.y - 55,
            width: 110,
            height: 110,
            scale: 1,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.4 }}
        >
          <span className="font-mono-custom text-[10px] tracking-widest font-semibold uppercase leading-tight text-[#F3F2EE]">
            {cursorText.split(' ').map((word, i) => (
              <span key={i} className="block">
                {word === '→' ? <span className="text-[#5B2EFF] text-sm">→</span> : word}
              </span>
            ))}
          </span>
        </motion.div>
      ) : cursorType === 'link' ? (
        <motion.div
          className="fixed rounded-full bg-[#5B2EFF] opacity-70 mix-blend-difference"
          animate={{
            x: position.x - 18,
            y: position.y - 18,
            width: 36,
            height: 36,
          }}
          transition={{ type: 'spring', damping: 28, stiffness: 400, mass: 0.3 }}
        />
      ) : (
        <motion.div
          className="fixed rounded-full bg-[#0A0A0A] border border-white/40"
          animate={{
            x: position.x - 5,
            y: position.y - 5,
            width: 10,
            height: 10,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.2 }}
        />
      )}
    </div>
  );
};
