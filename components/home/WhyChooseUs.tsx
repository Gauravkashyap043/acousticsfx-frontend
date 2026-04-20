"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { fetchContent, type ContentMap } from "@/lib/content-api";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/animations";

import "swiper/css";
import "swiper/css/pagination";

interface CardData {
  icon: string;
  title: string;
  description: string;
}

const CONTENT_KEYS = [
  "home.whyChooseUs.icon1",
  "home.whyChooseUs.icon2",
  "home.whyChooseUs.icon3",
  "home.whyChooseUs.icon4",
  "home.whyChooseUs.icon5",
  "home.whyChooseUs.icon6",
];

const DEFAULT_CARDS: CardData[] = [
  {
    icon: "/assets/home/quaone.svg",
    title: "Quality",
    description:
      "Every FX Acoustics creation begins with a pursuit of perfection. Our acoustical panels, soundproofing systems, and architectural façades are crafted with meticulous precision, using premium materials that promise enduring performance and timeless elegance. Quality isn’t an aspect—it is our identity.",
  },
  {
    icon: "/assets/home/quatwo.svg",
    title: "Service",
    description:
      "We believe exceptional spaces are built on exceptional support. From acoustic consultation to manufacturing and installation, our service experience is seamless, attentive, and deeply personalized. We guide you at every step, ensuring your project unfolds effortlessly with absolute precision.",
  },
  {
    icon: "/assets/home/quathr.svg",
    title: "Innovation",
    description:
      "Innovation fuels our artistry. Through advanced acoustic engineering, state-of-the-art manufacturing, and globally inspired design, we create solutions that elevate environments—enhancing clarity, comfort, and visual harmony. Each product is a fusion of technology and refined craftsmanship.",
  },
  {
    icon: "/assets/home/quafour.svg",
    title: "Commitment",
    description:
      "Our commitment extends beyond delivery—it lives in every detail we stand behind. We honor every project with integrity, consistency, and an unwavering dedication to excellence, ensuring that each space benefits from long-lasting acoustic and architectural value.",
  },
  {
    icon: "/assets/home/quafive.svg",
    title: "Trustability",
    description:
      "Trust is earned through honesty and flawless execution. Over the years, architects, designers, corporates, and institutions have chosen us for our transparency, reliability, and manufacturing consistency. With FX Acoustics, what you envision is exactly what you receive—crafted with care and delivered with certainty.",
  },
  {
    icon: "/assets/home/quasix.svg",
    title: "Bespoke",
    description:
      "Luxury lies in customization. Our bespoke acoustical panels and tailor-made façade systems are designed to reflect your individual vision, architecture, and sensory experience. From texture to tone, every element is shaped with intention—creating spaces that sound exquisite and look extraordinary.",
  },
];

function ChooseUsCard({ card }: { card: CardData }) {
  return (
    <HoverScale className="group rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm bg-white h-full">
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf4f6] transition-all duration-300 group-hover:bg-[#3090A3] mb-3 sm:mb-4">
        <Image
          src={card.icon}
          alt={card.title}
          width={32}
          height={30}
          className="size-6 sm:size-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
        />
      </div>
      <h3 className="mb-1.5 sm:mb-2 font-bold text-lg text-[#1F6775] leading-snug sm:text-[22px] lg:text-[25px] inter-font">
        {card.title}
      </h3>
      <p className="text-sm font-normal leading-[1.55] text-gray-600 inter-font sm:text-base sm:leading-relaxed lg:text-[18px]">
        {card.description}
      </p>
    </HoverScale>
  );
}

function WhyChooseUsMobileCarousel({ cards }: { cards: CardData[] }) {
  const paginationRef = useRef<HTMLDivElement>(null);

  const paginationClassName = [
    "flex w-full flex-wrap items-center justify-center gap-0",
    "[&_.swiper-pagination-bullet]:mx-0.5 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-gray-300! [&_.swiper-pagination-bullet]:opacity-100!",
    "[&_.swiper-pagination-bullet-active]:w-6! [&_.swiper-pagination-bullet-active]:rounded-full! [&_.swiper-pagination-bullet-active]:bg-[#3090A3]!",
  ].join(" ");

  return (
    <div className="flex w-full flex-col-reverse gap-4">
      <div ref={paginationRef} className={paginationClassName} />
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        autoHeight
        loop={cards.length > 1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          const p = swiper.params.pagination;
          if (paginationRef.current && p && typeof p === "object") {
            p.el = paginationRef.current;
          }
        }}
        className="w-full overflow-visible"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.title} className="h-auto!">
            <ChooseUsCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function WhyChooseUs() {
  const [content, setContent] = useState<ContentMap>({});

  useEffect(() => {
    fetchContent(CONTENT_KEYS).then(setContent).catch(console.error);
  }, []);

  const cards = DEFAULT_CARDS.map((card, i) => ({
    ...card,
    icon: content[CONTENT_KEYS[i]]?.value ?? card.icon,
  }));

  return (
    <section className="px-4 sm:px-10 lg:px-[100px] py-8 sm:py-16 lg:py-[100px] bg-white">
      {/* Heading */}
      <FadeIn direction="up" duration={0.6} className="max-w-4xl mb-6 sm:mb-12 lg:mb-16">
        <p className="text-[13px] sm:text-[15px] mb-2 sm:mb-3 text-gray-600 worksans-font font-bold">
          Why Choose Us
        </p>

        <h2 className="text-[1.125rem] leading-snug sm:text-[34px] sm:leading-tight lg:text-[40px] font-bold text-gray-900 axiforma">
          We Cut Through Noise to create architects that are thoughtful, timeless & Impactful.
        </h2>
      </FadeIn>

      {/* Mobile: swipe + autoplay + dots below card (same pattern as HomeHero) */}
      <div className="sm:hidden">
        <WhyChooseUsMobileCarousel cards={cards} />
      </div>

      {/* sm+: staggered grid */}
      <StaggerContainer className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
        {cards.map((card) => (
          <StaggerItem key={card.title} direction="up">
            <ChooseUsCard card={card} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}