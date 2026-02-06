"use client";

import { useState } from "react";
import Image from "next/image";

const finishes = [
  {
    img: "/assets/product/finish-shade-1.jpg",
    code: "31559",
    name: "Natural Teak",
    desc: "The natural look for your surface. Our versatile real wood options.",
  },
  {
    img: "/assets/product/finish-shade-3.jpg",
    code: "31608",
    name: "Douglas Pine",
    desc: "The serene texture you can rely on. Choose the ideal individuality.",
  },
  {
    img: "/assets/product/finish-shade-2.jpg",
    code: "31458",
    name: "Sonoma Oak Light",
    desc: "Continuous pressure laminate is extremely resistant to scratches.",
  },
  {
    img: "/assets/product/finish-shade-1.jpg",
    code: "31458",
    name: "Walnut Dark",
    desc: "Rich, deep tones for premium architectural interiors.",
  },
  {
    img: "/assets/product/finish-shade-3.jpg",
    code: "31560",
    name: "Cherry Wood",
    desc: "Warm, elegant finish for sophisticated spaces.",
  },
];

export default function FinishesShades() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, finishes.length - 4));
  };

  return (
    <section className="w-full bg-[#faf7f2] pl-[100px] py-[80px]">
      
      <div className="flex gap-20">
        
        {/* Left Content */}
        <div className="max-w-xs">
          <h2 className="text-[34px] inter-font font-medium mb-4">
            Finishes & Shades
          </h2>
          <p className="text-[16px] inter-font font-[500] text-gray-600 mb-8">
            Our inspired solutions have helped shape modern acoustic design.
            Alluring spaces, internationally recognised for their architectural
            elegance and exceptional sound management live here.
          </p>
        </div>

        {/* Slider */}
        <div className="flex-1 relative overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * 208}px)`,
            }}
          >
            {finishes.map((item, idx) => (
              <div key={idx} className="min-w-[200px]">
                
                {/* Slide Image */}
                <div className="w-[200px] h-[200px] rounded-lg overflow-hidden mb-4 relative bg-white">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <p className="text-[24px] inter-font font-[400] text-gray-400 mb-1">
                  {item.code}
                </p>
                <p className="text-[24px] inter-font font-[400] mb-1">
                  {item.name}
                </p>
                <p className="text-[15px] inter-font font-[500] text-gray-500 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Centered Below */}
          <div className="flex justify-center gap-6 items-center mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className="hover:opacity-70 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Image
                src="/assets/home/universalvector.svg"
                alt="Previous"
                width={34}
                height={14}
                className="rotate-180"
              />
            </button>
            <button
              onClick={next}
              disabled={index >= finishes.length - 4}
              className="hover:opacity-70 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Image
                src="/assets/home/universalvector.svg"
                alt="Next"
                width={34}
                height={14}
              />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
