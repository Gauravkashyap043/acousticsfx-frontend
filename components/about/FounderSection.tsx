"use client";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="px-[100px] py-[100px] bg-white">
      <div className="grid grid-cols-2 gap-20 items-center">
        {/* ================= Left Image ================= */}
        <div className="relative">
          <img
            src="/assets/about/Image (5).png" // apni image yahan lagana
            alt="Founder"
            className="w-full h-[520px] object-cover rounded-lg"
          />

          {/* Award Badge */}

          <div className="absolute -bottom-10 -right-10">
            <div
              className="
      w-[229px] 
      h-[229px] 
      rounded-full 
      bg-[#1F6775] 
      border-4 
      border-white 
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-2
      text-white 
      shadow-lg
    "

            >
              {/* Icon / Image */}
              <div className="w-12 h-12 rounded-full bg-[#F2F5F629] flex items-center justify-center p-2">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/assets/about/Vector.svg" // yahan apni image daal dena
                    alt="Award Icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* #1 */}
              <span className="text-[45px] leading-none lato font-bold">#1</span>

              {/* Text */}
              <span className="text-[16px] lato font-bold leading-tight">
                Best Award
              </span>

              <span className="text-[16px] lato font-bold leading-tight">
                2023
              </span>
            </div>
          </div>

        </div>

        {/* ================= Right Content ================= */}
        <div>
          <p className="text-[15px] text-gray-500 worksans-font font-bold mb-4">Meet our founder</p>

          <h2 className="text-[30px] axiforma font-bold text-[#111] leading-snug mb-6">
            Creating harmony between{" "}
            <span className="text-teal-700">Innovation and Integrity shaping spaces that
            inspire trust.</span>
           
          </h2>

          <p className="text-gray-600 lato font-[400] text-[20px] leading-relaxed mb-4">
            At FX Acoustics, our journey began with a simple belief: sound has
            the power to shape how we live, work, and feel. Every panel, every
            design, and every solution we create is driven by a commitment to
            clarity, elegance, and impact.
          </p>

          <p className="text-gray-600  lato font-[400] text-[20px] leading-relaxed mb-4">
            We don’t just build acoustic products — we craft experiences.
            Experiences that empower architects, designers, and businesses to
            imagine spaces that are thoughtful, timeless, and future-ready.
            Our promise is rooted in integrity, innovation, and collaboration.
          </p>

          <p className="text-gray-600  lato font-[400] text-[20px] leading-relaxed mb-6">
            As we continue to grow, our vision remains unchanged: to cut through
            the noise and deliver solutions that inspire trust, elevate design,
            and leave a lasting impression.
          </p>

          <p className="text-sm text-[#EA8E39] font-medium lato font-[400] text-[20px] italic">
            — Rahul, Founder & Creative Lead
          </p>
        </div>
      </div>
    </section>
  );
}
