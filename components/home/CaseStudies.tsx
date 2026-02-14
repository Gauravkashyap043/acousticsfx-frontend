"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideType } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import { api } from "@/lib/api/client";
import { useContent } from "@/hooks/useContent";
import { HOME_CASE_STUDIES_KEYS } from "@/lib/content/keys";

interface CaseStudyItem {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const FALLBACK_CASE_STUDIES: { slug: string; image: string; title: string; desc: string }[] = [
  { slug: "1", image: "/assets/home/image 5.png", title: "Architecture", desc: "The interior of the apartments." },
  { slug: "2", image: "/assets/home/Image.png", title: "Acoustic Design", desc: "Custom acoustic panels for offices." },
  { slug: "3", image: "/assets/home/image 6.png", title: "Workspace", desc: "Modern workspace noise solutions." },
  { slug: "4", image: "/assets/home/image 5.png", title: "Auditorium", desc: "Sound clarity for large auditoriums." },
];

export default function CaseStudies() {
  const splideRef = useRef<SplideType | null>(null);
  const { get } = useContent(HOME_CASE_STUDIES_KEYS);
  const sectionHeading = get("home.caseStudies.heading");
  const sectionSubheading = get("home.caseStudies.subheading");
  const ctaLabel = get("home.caseStudies.ctaLabel");
  const [caseStudies, setCaseStudies] = useState<{ slug: string; image: string; title: string; desc: string }[]>(FALLBACK_CASE_STUDIES);

  useEffect(() => {
    api
      .get<{ caseStudies: CaseStudyItem[] }>("/api/resources")
      .then((res) => {
        const list = res?.caseStudies ?? [];
        if (list.length > 0) {
          setCaseStudies(
            list.map((c) => ({
              slug: c.slug,
              image: c.image || "/assets/home/image 5.png",
              title: c.title,
              desc: c.description || "",
            }))
          );
        }
      })
      .catch(() => { });
  }, []);

  return (
    <section className="py-[80px] lg:py-[100px] bg-white overflow-hidden">

      {/* TOP CONTENT */}
      <div className="px-6 sm:px-10 lg:px-[200px] mb-14">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20">

          <h2 className="text-[34px] sm:text-[44px] lg:text-[60px] font-[400] leading-tight axiforma max-w-xl">
            {sectionHeading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < sectionHeading.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="max-w-md">
            <p className="text-[16px] sm:text-[18px] lg:text-[21px] font-[500] text-gray-600 leading-relaxed mb-6 jakarta">
              {sectionSubheading}
            </p>

            <Link href="/resources/casestudy" className="border px-4 py-2 text-xs inline-block">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative pl-6 sm:pl-10 lg:pl-[360px]">
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
            <SplideSlide key={item.slug}>
              <Link href={`/resources/casestudy#${item.slug}`} className="block max-w-[420px]">
                {/* IMAGE */}
                <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] w-full mb-4">
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
              </Link>
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
