"use client";

import { useEffect, useState } from "react";
import { fetchContent, type ContentMap } from "@/lib/content-api";
import { FadeIn } from "@/components/animations";

const CONTENT_KEYS = [
  "contact.hero.heading",
  "contact.hero.subtitle",
  "contact.hero.backgroundImage",
];

const DEFAULTS: Record<string, string> = {
  "contact.hero.heading": "Have a Question or confusion:",
  "contact.hero.subtitle": "Contact Us",
  "contact.hero.backgroundImage": "/assets/contacts/1d173913fbb7b4adf7587f36d280e8edcf59765a.png",
};

function val(content: ContentMap, key: string) {
  return content[key]?.value ?? DEFAULTS[key] ?? "";
}

export default function ContactHero() {
  const [content, setContent] = useState<ContentMap>({});

  useEffect(() => {
    fetchContent(CONTENT_KEYS).then(setContent).catch(console.error);
  }, []);

  const bgImage = val(content, "contact.hero.backgroundImage");

  return (
    <section
      className="relative w-full min-h-[48vh] sm:min-h-[65vh] lg:min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <FadeIn
        direction="up"
        duration={0.7}
        className="
          relative z-10
          px-4 sm:px-[40px] lg:px-[100px]
          py-10 sm:py-[80px] lg:py-[100px]
          h-full
          flex flex-col justify-center
          text-white
        "
      >
        {/* Breadcrumb */}
        <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">
          Home <span className="mx-2">•</span>{" "}
          <span className="text-orange-400">Contact Us</span>
        </p>

        {/* Heading */}
        <h2 className="text-lg sm:text-[32px] lg:text-4xl font-light mb-1 sm:mb-2 leading-snug">
          {val(content, "contact.hero.heading")}
        </h2>

        <h1 className="text-[1.625rem] sm:text-[44px] lg:text-5xl font-semibold mb-6 sm:mb-12 leading-tight">
          {val(content, "contact.hero.subtitle")}
        </h1>
      </FadeIn>
    </section>
  );
}
