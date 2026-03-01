"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { useHeroParallax } from "@/lib/useHeroParallax";

interface ProductHeroSectionProps {
  title: string;
  description: string;
  heroImage?: string;
  breadcrumbText?: string;
}

export default function ProductHeroSection({
  title,
  description,
  heroImage = "/assets/product/product-hero.png",
  breadcrumbText,
}: ProductHeroSectionProps) {
  const { ref: sectionRef, y: bgY } = useHeroParallax(45);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src={heroImage}
          alt={`${title} Background`}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Vector Line */}
      <ParallaxImage offset={20} className="absolute top-0 right-0 hidden sm:block">
        <Image
          src="/assets/product/vector-decoration.svg"
          alt="Decorative Line"
          width={420}
          height={420}
          className="opacity-80"
        />
      </ParallaxImage>

      {/* Content */}
      <div className="relative z-10 mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] h-full flex items-center">
        <div className="text-white">
          {/* Breadcrumb */}
          <p className="text-sm text-white/70 mb-4">
            Our Products <span className="mx-2">•</span>
            <span className="text-[#EA8E39]">{breadcrumbText || title}</span>
          </p>

          {/* Heading */}
          <h1 className="playfair-display font-[800] text-[42px] sm:text-[64px] lg:text-[90px] leading-tight mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] inter-font font-[300] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-white max-w-[65ch]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
