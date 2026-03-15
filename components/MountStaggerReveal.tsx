"use client";

import { Children, useEffect, useState } from "react";

type MountStaggerRevealProps = {
  children: React.ReactNode;
  /** Delay in ms between each child revealing */
  staggerMs?: number;
  /** Optional class for the wrapper around each child */
  className?: string;
};

export default function MountStaggerReveal({
  children,
  staggerMs = 100,
  className = ""
}: MountStaggerRevealProps) {
  const count = Children.count(children);
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (count === 0) return;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      timeouts.push(
        setTimeout(() => setRevealed((r) => Math.min(r + 1, count)), i * staggerMs)
      );
    }
    return () => timeouts.forEach(clearTimeout);
  }, [count, staggerMs]);

  return (
    <>
      {Children.map(children, (child, i) => (
        <div
          className={`scroll-reveal ${i < revealed ? "scroll-reveal--visible" : ""} ${className}`}
        >
          {child}
        </div>
      ))}
    </>
  );
}
