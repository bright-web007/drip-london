'use client';

import { useEffect, useRef } from 'react';

export const LayoutHeader = () => {
  const headerVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const currentVideo = headerVideo.current;
    const handleIntersection = (entries: { isIntersecting: boolean }[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentVideo?.play();
        } else {
          currentVideo?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        muted
        loop
        preload="none"
        ref={headerVideo}
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/video/homepage.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
