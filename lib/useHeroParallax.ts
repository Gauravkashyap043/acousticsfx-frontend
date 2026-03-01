"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";

/** Scroll-based Y parallax for full-width hero images. Returns ref for the section and a MotionValue for y. */
export function useHeroParallax(percent = 45) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${percent}%`]);
  return { ref, y };
}
