"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function CaseStudies() {
  return (
    <section className="py-[100px] bg-white overflow-hidden">
      
      {/* TOP CONTENT */}
      <div className="px-[200px] mb-14">
        <div className="flex justify-between items-start gap-20">
          
          <h2 className="text-5xl font-semibold leading-tight max-w-xl">
            CASE STUDIES THAT <br /> INSPIRE US
          </h2>

          <div className="max-w-md">
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              A premium workspace faced disruptive noise and poor sound clarity.
              We designed and installed bespoke acoustic panels tailored to their
              architecture. The result: enhanced productivity, elegant aesthetics,
              and a healthier environment.
            </p>

            <button className="border px-4 py-2 text-xs">
              VIEW ALL CASESTUDIES →
            </button>
          </div>

        </div>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative pl-[200px]">
        
        <Splide
          options={{
            perPage: 3,
            gap: "24px",
            arrows: true,
            pagination: false,
            drag: true,
            rewind: false,
            trimSpace: false, // 🔑 LEFT BOUNDARY LOCK
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          className="case-slider"
        >
          
          {[1, 2, 3, 4].map((item) => (
            <SplideSlide key={item}>
              <div className="max-w-[420px]">
                
                {/* IMAGE */}
                <div className="relative h-[260px] w-full mb-4">
                  <Image
                    src="/case.jpg" // 👈 apni image lagana
                    alt="Case Study"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <h3 className="font-semibold text-lg mb-1">
                  Architecture
                </h3>
                <p className="text-sm text-gray-600">
                  The interior of the apartments.
                </p>

              </div>
            </SplideSlide>
          ))}

        </Splide>
      </div>
    </section>
  );
}
