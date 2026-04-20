"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchContent, type ContentMap } from "@/lib/content-api";
import { FadeIn, ScaleOnScroll } from "@/components/animations";

const CONTENT_KEYS = ["about.innovation.image"];
const DEFAULT_IMAGE = "/innovation-video.jpg";

export default function StoryInnovation() {
  const [content, setContent] = useState<ContentMap>({});

  useEffect(() => {
    fetchContent(CONTENT_KEYS).then(setContent).catch(console.error);
  }, []);

  const innovationImage = content["about.innovation.image"]?.value ?? DEFAULT_IMAGE;

  return (
    <section className="px-4 sm:px-[40px] lg:px-[100px] pt-10 pb-10 sm:pt-[80px] sm:pb-[80px] lg:pt-[100px] lg:pb-[100px] bg-[#F5F5F5]">
      {/* ================= Top Content ================= */}
      <FadeIn
        direction="up"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-14 lg:gap-20 items-start mb-8 sm:mb-14 lg:mb-16"
      >
        {/* Left Heading */}
        <div>
          <h2 className="text-[1.375rem] sm:text-[44px] lg:text-[60px] lato font-bold leading-tight sm:leading-[40px]">
            Our Story That Drives
          </h2>
          <h2 className="text-[2.25rem] sm:text-[72px] lg:text-[100px] font-bold lato text-[#ea8e39] mt-1 sm:mt-2 leading-none tracking-tight">
            INNOVATION
          </h2>
        </div>

        {/* Right Text */}
        <p className="text-gray-600 leading-relaxed lato font-normal text-sm sm:text-[18px] lg:text-[20px] max-w-xl">
          From a bold vision to an industry-leading brand, FX Acoustics has
          pioneered acoustic solutions that blend craftsmanship with cutting-edge
          technology &mdash; transforming how spaces sound and feel.
        </p>
      </FadeIn>

      {/* ================= Image / Video Section ================= */}
      <ScaleOnScroll className="relative w-full overflow-hidden rounded-lg mt-4 sm:mt-6">
        <div className="relative w-full h-[220px] sm:h-[400px] lg:h-[520px]">
          <Image
            src={innovationImage}
            alt="FX Acoustics innovation auditorium showcase"
            fill
            className="object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Play Button */}
        <button
          className="
            absolute inset-0
            flex items-center justify-center cursor-pointer
          "
          aria-label="Play video"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white/80 flex items-center justify-center hover:scale-105 transition">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-1"
            >
              <path
                d="M8 5v14l11-7-11-7z"
                fill="#111"
              />
            </svg>
          </div>
        </button>
      </ScaleOnScroll>
    </section>
  );
}
