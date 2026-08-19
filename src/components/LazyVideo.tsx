import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';

export interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  autoplayWhenVisible?: boolean;
  rootMargin?: string;
  eager?: boolean;
}

export const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(({
  src,
  poster,
  className = '',
  autoplayWhenVisible = true,
  rootMargin = '300px',
  loop = true,
  muted = true,
  playsInline = true,
  eager = false,
  ...props
}, ref) => {
  const localRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useImperativeHandle(ref, () => localRef.current as HTMLVideoElement);

  useEffect(() => {
    if (eager) {
      setShouldLoad(true);
      return;
    }

    const el = localRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            if (autoplayWhenVisible && el) {
              el.play().catch(() => {});
            }
          } else {
            if (autoplayWhenVisible && el && !el.paused) {
              el.pause();
            }
          }
        });
      },
      { rootMargin, threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoplayWhenVisible, rootMargin, eager]);

  return (
    <video
      ref={localRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      preload={shouldLoad ? (autoplayWhenVisible ? 'auto' : 'metadata') : 'none'}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={className}
      {...props}
    />
  );
});

LazyVideo.displayName = 'LazyVideo';
