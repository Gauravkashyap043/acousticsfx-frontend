"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    large: "/assets/product/gallery-image-2.png",
    small: "/assets/product/gallery-image-1.jpg",
  },
  {
    large: "/assets/product/gallery-image-1.jpg",
    small: "/assets/product/gallery-image-2.png",
  },
  {
    large: "/assets/product/gallery-image-2.png",
    small: "/assets/product/gallery-image-1.jpg",
  },
  {
    large: "/assets/product/gallery-image-1.jpg",
    small: "/assets/product/gallery-image-2.png",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = galleryImages.length;

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const currentSlide = galleryImages[currentIndex];

  return (
    <section className="w-full bg-white px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[48px] sm:py-[64px] lg:py-[80px]">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[35px] manrope font-bold">
          Gallery
        </h2>

        <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
          Get Quote
          <Image
            src="/assets/home/universalvector.svg"
            alt="Arrow"
            width={34}
            height={14}
          />
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Big Image (Left) */}
        <div className="col-span-1 sm:col-span-2 h-[280px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden relative">
          <Image
            src={currentSlide.large}
            alt="Gallery Large"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Tall Image */}
        <div className="h-[280px] sm:h-[380px] lg:h-[480px] rounded-2xl overflow-hidden relative">
          <Image
            src={currentSlide.small}
            alt="Gallery Tall"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 mt-6 sm:mt-8 text-sm text-gray-500">
        <button
          onClick={prev}
          className="hover:opacity-70 transition"
        >
          <Image
            src="/assets/home/universalvector.svg"
            alt="Previous"
            width={34}
            height={14}
            className="rotate-180"
          />
        </button>
        <span>{currentIndex + 1} / {totalSlides}</span>
        <button
          onClick={next}
          className="hover:opacity-70 transition"
        >
          <Image
            src="/assets/home/universalvector.svg"
            alt="Next"
            width={34}
            height={14}
          />
        </button>
      </div>

    </section>
  );
}
