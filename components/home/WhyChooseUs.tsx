"use client";

import Image from "next/image";
import { useContent } from "@/hooks/useContent";
import { HOME_WHY_CHOOSE_US_ICON_KEYS } from "@/lib/content/keys";

const ICON_KEYS = [
  "home.whyChooseUs.icon1",
  "home.whyChooseUs.icon2",
  "home.whyChooseUs.icon3",
  "home.whyChooseUs.icon4",
  "home.whyChooseUs.icon5",
  "home.whyChooseUs.icon6",
] as const;

const CARDS = [
  { title: "Quality", body: "Uncompromising craftsmanship meets lasting performance. Every detail is engineered for excellence and trust." },
  { title: "Service", body: "We deliver end-to-end acoustic, flooring, and soundproofing solutions reliable, precise, and built to last." },
  { title: "Innovation", body: "Made from the finest raw materials, our panels enhance your space with elegance while promoting healthy living." },
  { title: "Commitment", body: "We stand by every project with unwavering dedication, ensuring excellence, reliability, and lasting impact." },
  { title: "Trustability", body: "We deliver on every promise with transparency and consistency, earning confidence that lasts a lifetime." },
  { title: "Bespoke", body: "Tailored acoustic solutions designed to fit your unique space, vision, and lifestyle with precision." },
];

export default function WhyChooseUs() {
  const { get } = useContent(HOME_WHY_CHOOSE_US_ICON_KEYS);

  return (
    <section className="px-6 sm:px-10 lg:px-[100px] py-[80px] lg:py-[100px] bg-white">

      {/* Heading */}
      <div className="max-w-4xl mb-12 lg:mb-16">
        <p className="text-[15px] mb-3 text-gray-600 worksans-font font-bold">
          Why Choose Us
        </p>

        <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold leading-tight text-gray-900 axiforma">
          We Cut Through Noise to create architects
          <br />
          that are thoughtful, timeless & Impactful.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {CARDS.map((card, i) => (
        <div key={card.title} className="group rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#eaf4f6] group-hover:bg-[#3090A3] transition-all duration-300 flex items-center justify-center mb-4">
            <Image src={get(ICON_KEYS[i]) || `/assets/home/quaone.svg`} alt={card.title} width={32} height={30} />
          </div>
          <h3 className="font-bold text-[25px] mb-2 text-[#1F6775] inter-font">
            {card.title}
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed inter-font font-[400]">
            {card.body}
          </p>
        </div>
        ))}

      </div>
    </section>
  );
}
