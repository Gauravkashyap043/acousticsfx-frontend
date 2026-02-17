"use client";

import Image from "next/image";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What kind of clients do you work with?",
      a: "Read on how we make awesome projects from scratch, through several series of testing and refining to make our awesome masterclass.",
    },
    { q: "What services do you offer?", a: "Answer content here." },
    { q: "How do you price your projects?", a: "Answer content here." },
    { q: "What is your typical project timeline?", a: "Answer content here." },
    { q: "Can we collaborate remotely?", a: "Answer content here." },
    {
      q: "Do you accept one-off architect tasks or only full projects?",
      a: "Answer content here.",
    },
    {
      q: "How many concepts or revisions are included?",
      a: "Answer content here.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-[100px] py-[80px] lg:py-[100px] bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2">
          <p className="text-[16px] mb-3 inter-font font-[500]">FAQs</p>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[54px] font-bold mb-4 inter-font font-[500]">
            Wondering How We Work?
          </h2>

          <p className="text-[16px] text-gray-600 mb-6 max-w-md inter-font font-[500]">
            Answers to common questions about our process, services,
            and how we work.
          </p>

          <button className="bg-[#EA8E39] text-white px-6 py-3 text-[20px] mb-10 worksans-font cursor-pointer">
            Contact Us
          </button>

          {/* IMAGE */}
          <div className="relative overflow-hidden w-full max-w-[551.55px] aspect-[551.55/443.52]">
            <Image
              src="/assets/home/Design.png"
              alt="FAQ Visual"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left cursor-pointer"
                >
                  <span className="font-medium inter-font text-[16px] sm:text-[18px] lg:text-[20px]">
                    {index + 1}. {item.q}
                  </span>
                  <span className="text-xl">
                    {openIndex === index ? "—" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-[16px] sm:text-[17px] lg:text-[18px] axiforma text-gray-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
