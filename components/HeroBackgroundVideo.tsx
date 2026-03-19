"use client";

import {useEffect, useRef} from "react";

export default function HeroBackgroundVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let cancelled = false;

    const tryPlay = async () => {
      if (cancelled) return;
      try {
        // Some mobile browsers delay autoplay until the page is "active".
        // Retrying play() on mount / visibility changes avoids "starts only after tab switch".
        await video.play();
      } catch {
        // Autoplay may still be blocked; we'll retry on events below.
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };

    const onPageShow = () => void tryPlay();
    const onCanPlay = () => void tryPlay();

    void tryPlay();
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);
    video.addEventListener("canplay", onCanPlay);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

