"use client";

import { useEffect } from "react";

export function MouseGlow() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.documentElement;
    const setDefault = () => {
      root.style.setProperty("--mx", `${window.innerWidth / 2}px`);
      root.style.setProperty("--my", `${window.innerHeight * 0.2}px`);
      root.style.setProperty("--hero-glow-opacity", "0.9");
    };

    setDefault();

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${event.clientX}px`);
        root.style.setProperty("--my", `${event.clientY}px`);
        frame = 0;
      });
    };

    const onScroll = () => {
      const hero = document.querySelector(".hero-spotlight");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const fadeDistance = Math.max(rect.height * 0.85, 1);
      const progress = Math.min(Math.max(-rect.top / fadeDistance, 0), 1);
      const opacity = 0.9 - progress * 0.8;
      root.style.setProperty("--hero-glow-opacity", opacity.toFixed(3));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", setDefault);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", setDefault);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
