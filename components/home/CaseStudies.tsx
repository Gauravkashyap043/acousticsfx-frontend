"use client";

import Image from "next/image";
import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideType } from "@splidejs/splide";
import "@splidejs/react-splide/css";

export default function CaseStudies() {
  const splideRef = useRef<SplideType | null>(null);

  const caseStudies = [
    {
      id: 1,
      image: "/assets/home/image 5.png",
      title: "Architecture",
      desc: "The interior of the apartments.",
    },
    {
      id: 2,
      image: "/assets/home/Image.png",
      title: "Acoustic Design",
      desc: "Custom acoustic panels for offices.",
    },
    {
      id: 3,
      image: "/assets/home/image 6.png",
      title: "Workspace",
      desc: "Modern workspace noise solutions.",
    },
    {
      id: 4,
      image: "/assets/home/image 5.png",
      title: "Auditorium",
      desc: "Sound clarity for large auditoriums.",
    },
  ];

  return (
    <section className="py-[100px] bg-white overflow-hidden">

      {/* TOP CONTENT */}
      <div className="px-[200px] mb-14">
        <div className="flex justify-between items-start gap-20">
          <h2 className="text-[60px] font-[400] leading-tight axiforma max-w-xl">
            CASE STUDIES THAT <br /> INSPIRE US
          </h2>

          <div className="max-w-md">
            <p className="text-[21px] font-[500] text-gray-600 leading-relaxed mb-6 jakarta">
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

      {/* SLIDER */}
      <div className="relative pl-[360px]">
        <Splide
          options={{
            perPage: 3,
            gap: "24px",
            arrows: false,
            pagination: false,
            drag: true,
            trimSpace: false,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          onMounted={(splide) => {
            splideRef.current = splide;
          }}
        >
          {caseStudies.map((item) => (
            <SplideSlide key={item.id}>
              <div className="max-w-[420px]">

                {/* IMAGE */}
                <div className="relative h-[260px] w-full mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <h3 className="font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* CUSTOM IMAGE ARROWS */}
        <div className="flex justify-center gap-8 mt-10">
          <button
            onClick={() => splideRef.current?.go("<")}
            className="flex items-center justify-center"
          >
            <Image
              src="/assets/home/Vector.svg"
              alt="Previous"
              width={10}
              height={10}
              className="rotate-180 block"
            />
          </button>

          <button
            onClick={() => splideRef.current?.go(">")}
            className="flex items-center justify-center"
          >
            <Image
              src="/assets/home/Vector.svg"
              alt="Next"
              width={10}
              height={10}
              className="block"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
