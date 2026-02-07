"use client";

import { useState } from "react";
import Image from "next/image";

export default function CreativeApproach() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-[12.5vw] py-12 lg:py-[6.25vw] bg-[#F5F5F5] overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center max-w-[1600px] xl:max-w-none mx-auto">

        {/* LEFT CONTENT CARD */}
        <div
          className="relative z-30 bg-[#FFF3E8] p-6 lg:p-10 shadow-lg flex-shrink-0 w-full lg:w-auto"
          style={{
            width: "clamp(500px, 40.9vw, 655px)",
            height: "clamp(550px, 44.3vw, 709px)",
          }}
        >
          <p className="text-sm mb-2">#FXacoustic solutions</p>

          <h2 className="text-2xl font-semibold mb-6">
            Creative Approach
          </h2>

          {/* ACCORDION ITEM 1 */}
          <div className="border-t border-gray-300 py-4">
            <button
              onClick={() => toggleAccordion(0)}
              className="flex w-full justify-between items-center font-medium"
            >
              <span>Story & Concept</span>
              <span className="text-xl">
                {openIndex === 0 ? "−" : "+"}
              </span>
            </button>

            {openIndex === 0 && (
              <p className="text-sm text-gray-600 mt-3">
                Read on how we make awesome projects from scratch, through
                several series of testing and refining to make our awesome
                masterclass.
              </p>
            )}
          </div>

          {/* ACCORDION ITEM 2 */}
          <div className="border-t border-gray-300 py-4">
            <button
              onClick={() => toggleAccordion(1)}
              className="flex w-full justify-between items-center font-medium"
            >
              <span>Design and Testing</span>
              <span className="text-xl">
                {openIndex === 1 ? "−" : "+"}
              </span>
            </button>

            {openIndex === 1 && (
              <p className="text-sm text-gray-600 mt-3">
                We test and validate every design to ensure optimal
                performance and acoustic accuracy.
              </p>
            )}
          </div>

          {/* ACCORDION ITEM 3 */}
          <div className="border-t border-b border-gray-300 py-4">
            <button
              onClick={() => toggleAccordion(2)}
              className="flex w-full justify-between items-center font-medium"
            >
              <span>Revision and Rendering</span>
              <span className="text-xl">
                {openIndex === 2 ? "−" : "+"}
              </span>
            </button>

            {openIndex === 2 && (
              <p className="text-sm text-gray-600 mt-3">
                Final revisions and high-quality rendering for
                presentation-ready outputs.
              </p>
            )}
          </div>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 text-sm">
            Learn More
          </button>
        </div>

        {/* IMAGES WRAPPER */}
        <div
          className="relative flex-1 min-w-0 mt-10 lg:mt-0 w-full"
          style={{ height: "clamp(700px, 56.25vw, 900px)" }}
        >

          {/* SMALL IMAGE (BACK) */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-0 hidden sm:block"
            style={{
              width: "clamp(350px, 31.25vw, 500px)",
              height: "clamp(525px, 46.875vw, 750px)",
            }}
          >
            <Image
              src="/assets/home/banTwo.png"
              alt="Interior"
              fill
              className="object-cover grayscale"
            />
          </div>

          {/* BIG IMAGE (FRONT) */}
          <div
            className="absolute z-10 top-1/2 -translate-y-1/2 right-0 sm:right-[80px] lg:right-[clamp(180px,16.25vw,260px)]"
            style={{
              width: "clamp(320px, 80vw, 667px)",
              height: "clamp(420px, 90vw, 835px)",
            }}
          >
            <Image
              src="/assets/home/banImage.png"
              alt="Creative Space"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
