"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    company: "vmware",
    text:
      "When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.",
    name: "Roxanne Mustafa",
    role: "Design Team Lead at VMware",
    avatar: "/avatar-1.jpg",
  },
  {
    company: "DocuSign",
    text:
      "Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.",
    name: "Jane Ashley",
    role: "Head of Design at DocuSign",
    avatar: "/avatar-2.jpg",
  },
  {
    company: "frog",
    text:
      "As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.",
    name: "Laura Baird",
    role: "Associate Design Director at frog",
    avatar: "/avatar-3.jpg",
  },
  {
    company: "Atlassian",
    text:
      "Miro enables distributed teams to collaborate in real time, helping us move faster and stay aligned.",
    name: "Alex Morgan",
    role: "Product Design Lead",
    avatar: "/avatar-4.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => Math.max(prev - 1, 0));
  const next = () =>
    setIndex((prev) =>
      Math.min(prev + 1, testimonials.length - 3)
    );

  return (
    <section className="px-6 md:px-[50px] py-[100px] bg-white relative">

      {/* HEADING */}
      <h2 className="text-center text-[60px] inter-font font-bold mb-16">
        Loved by the world's best teams
      </h2>

      {/* SLIDER */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 420}px)`,
          }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="min-w-[380px] border rounded-2xl p-8 bg-white"
            >
              {/* COMPANY */}
              <h3 className="text-3xl font-semibold mb-6">
                {item.company}
              </h3>

              {/* TEXT */}
              <p className="text-gray-600 mb-10 leading-relaxed">
                “{item.text}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-medium text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-300 rounded-md flex items-center justify-center"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-black text-white rounded-md flex items-center justify-center"
        >
          →
        </button>
      </div>
    </section>
  );
}
