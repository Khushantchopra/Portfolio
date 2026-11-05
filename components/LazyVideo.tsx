"use client";

import { useEffect, useRef } from "react";

type Props = { src: string; poster: string; width: number; height: number; label: string };

/** Muted looping film: loads nothing until near view, plays in view, pauses out of it. */
export default function LazyVideo({ src, poster, width, height, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.3 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video ref={ref} muted loop playsInline controls preload="none" poster={poster} width={width} height={height} aria-label={label}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
