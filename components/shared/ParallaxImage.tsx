"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  children: React.ReactNode;
  /** Parallax movement as percentage of scroll (e.g. 30 = image moves 30% over the scroll range). Positive = same direction as scroll. */
  offset?: number;
  /** Optional class for the outer wrapper (needs overflow-hidden and height from parent if not set). */
  className?: string;
}

/**
 * Wraps an Image (or any node) and applies scroll-based Y parallax.
 * Parent should provide height and overflow-hidden (e.g. section with h-[400px] overflow-hidden).
 */
export function ParallaxImage({
  children,
  offset = 30,
  className = "",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${offset}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`.trim()}>
      <motion.div className="h-full w-full" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
