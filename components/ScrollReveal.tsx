"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  /** Optional delay in ms before animation runs (for stagger) */
  delay?: number;
  /** Optional class name for the wrapper */
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${revealed ? "scroll-reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: revealed ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
