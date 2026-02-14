"use client";

import { useContent } from "@/hooks/useContent";
import { ABOUT_HERO_KEYS } from "@/lib/content/keys";
import ConnectWithUsButton from "./ConnectWithUsButton";
import GetQuoteButton from "./GetQuoteButton";

export default function AboutHero() {
  const { get } = useContent(ABOUT_HERO_KEYS);

  const heading = get("about.hero.heading");
  const subtitle = get("about.hero.subtitle");
  const backgroundImage = get("about.hero.backgroundImage");

  return (
    <section
      className="relative w-full min-h-[65vh] sm:min-h-[72vh] lg:min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage
          ? `url('${backgroundImage}')`
          : "url('/assets/about/empty-flat-interrior-with-elements-decoration 1 (1).png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="
          relative z-10
          px-[16px] sm:px-[40px] lg:px-[100px]
          py-[60px] sm:py-[80px] lg:py-[100px]
          flex flex-col
          items-center justify-center
          text-white text-center
        "
      >
        {/* Heading */}
        <h1 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[90px] font-bold leading-tight max-w-9xl playfair-display">
          {heading}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] poppins-font font-[400] max-w-2xl text-white/90">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <GetQuoteButton />
          <ConnectWithUsButton />
        </div>
      </div>
    </section>
  );
}
