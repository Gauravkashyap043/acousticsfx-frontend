"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useContent } from "@/hooks/useContent";
import { HOME_HERO_KEYS } from "@/lib/content/keys";
import ConnectWithUsButton from "@/components/about/ConnectWithUsButton";
import GetQuoteButton from "@/components/about/GetQuoteButton";

interface FeatureBox {
  title: string;
  description: string;
  image: string;
  accentColor: string;
}

const FALLBACK_FEATURE_BOXES: FeatureBox[] = [
  {
    title: "Acoustic Solution",
    description:
      "Ideal for auditoriums, studios, and performance spaces where sound precision is non-negotiable.",
    image: "/assets/home/fi_11062015.png",
    accentColor: "yellow-400",
  },
  {
    title: "Floor Solution",
    description:
      "Perfect for gyms, halls, and high-traffic zones — combining aesthetics with acoustic synergy.",
    image: "/assets/home/fi_7821525.png",
    accentColor: "orange-400",
  },
  {
    title: "Sound Proofing",
    description:
      "Custom solutions for homes, offices, and commercial spaces that demand quiet confidence.",
    image: "/assets/home/fi_17991697.png",
    accentColor: "blue-400",
  },
];

const ACCENT_CLASSES: Record<string, string> = {
  "yellow-400": "bg-yellow-400 text-yellow-400",
  "orange-400": "bg-orange-400 text-orange-400",
  "blue-400": "bg-blue-400 text-blue-400",
  "gray-400": "bg-gray-400 text-gray-400",
};

export default function HomeHero() {
  const { get } = useContent(HOME_HERO_KEYS);

  const title = get("home.hero.title");
  const subtitle = get("home.hero.subtitle");
  const backgroundImage = get("home.hero.backgroundImage");

  const featureBoxes = useMemo(() => {
    const raw = get("home.hero.featureBoxes");
    if (!raw?.trim()) return FALLBACK_FEATURE_BOXES;
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed) || parsed.length === 0) return FALLBACK_FEATURE_BOXES;
      return parsed.map((item: Record<string, unknown>) => ({
        title: String(item.title ?? ""),
        description: String(item.description ?? ""),
        image: String(item.image ?? ""),
        accentColor: String(item.accentColor ?? "gray-400"),
      })) as FeatureBox[];
    } catch {
      return FALLBACK_FEATURE_BOXES;
    }
  }, [get]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage
            ? `url('${backgroundImage}')`
            : "url('/assets/home/background.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-[110px] sm:pt-[130px] lg:pt-[143px] text-center text-white">
        {/* Main Text */}
        <h1 className="max-w-7xl leading-[42px] sm:leading-[60px] lg:leading-[85px]
          text-[28px] sm:text-[40px] md:text-5xl lg:text-[76px] font-bold playfair-display">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-[14px] sm:text-[15px] md:text-base font-[400] text-gray-200 poppins-font">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <GetQuoteButton />
          <ConnectWithUsButton className="bg-[#EA8E39]" />
        </div>

        {/* Spacer */}
        <div className="h-[40px] sm:h-[50px] lg:h-[60px]" />

        {/* Feature Boxes */}
        <div className="mb-[80px] sm:mb-[100px] lg:mb-[120px] w-full">
          <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-6">
            {featureBoxes.map((box) => {
              const isHex = box.accentColor.startsWith("#");
              const barStyle = isHex
                ? { backgroundColor: box.accentColor }
                : undefined;
              const mapped = ACCENT_CLASSES[box.accentColor];
              const barClass =
                isHex
                  ? "absolute left-0 top-0 h-full w-[3px]"
                  : `absolute left-0 top-0 h-full w-[3px] ${mapped ? mapped.split(" ")[0] : "bg-gray-400"}`;
              const titleClass =
                isHex
                  ? "mb-3 text-[14px] font-[700] poppins-font text-left"
                  : `mb-3 text-[14px] font-[700] poppins-font text-left ${mapped?.split(" ")[1] ?? "text-gray-400"}`;
              const titleStyle = isHex
                ? { color: box.accentColor }
                : undefined;
              return (
                <div
                  key={box.title}
                  className="relative h-[230px] sm:h-[250px] w-full sm:w-[360px] bg-black/50 px-6 py-6"
                >
                  <span
                    className={barClass}
                    style={barStyle}
                  />
                  <Image
                    src={box.image || "/assets/home/fi_11062015.png"}
                    alt={box.title}
                    width={52}
                    height={52}
                    className="mb-4"
                  />
                  <h3 className={titleClass} style={titleStyle}>
                    {box.title}
                  </h3>
                  <p className="text-[14px] font-[400] poppins-font text-left text-gray-300">
                    {box.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
