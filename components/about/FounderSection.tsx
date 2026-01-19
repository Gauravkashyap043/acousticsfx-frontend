"use client";

export default function FounderSection() {
  return (
    <section className="px-[200px] py-[100px] bg-white">
      <div className="grid grid-cols-2 gap-20 items-center">
        {/* ================= Left Image ================= */}
        <div className="relative">
          <img
            src="/founder.jpg" // apni image yahan lagana
            alt="Founder"
            className="w-full h-[520px] object-cover rounded-lg"
          />

          {/* Award Badge */}
          <div className="absolute -bottom-10 -right-10">
            <div className="w-32 h-32 rounded-full bg-teal-700 text-white flex flex-col items-center justify-center shadow-lg">
              <span className="text-2xl font-bold">#1</span>
              <span className="text-xs mt-1">Best Award</span>
              <span className="text-xs">2023</span>
            </div>
          </div>
        </div>

        {/* ================= Right Content ================= */}
        <div>
          <p className="text-sm text-gray-500 mb-4">Meet our founder</p>

          <h2 className="text-3xl font-semibold text-[#111] leading-snug mb-6">
            Creating harmony between{" "}
            <span className="text-teal-700">Innovation</span> and{" "}
            <span className="text-teal-700">Integrity</span>, shaping spaces that
            inspire trust.
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At FX Acoustics, our journey began with a simple belief: sound has
            the power to shape how we live, work, and feel. Every panel, every
            design, and every solution we create is driven by a commitment to
            clarity, elegance, and impact.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            We don’t just build acoustic products — we craft experiences.
            Experiences that empower architects, designers, and businesses to
            imagine spaces that are thoughtful, timeless, and future-ready.
            Our promise is rooted in integrity, innovation, and collaboration.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            As we continue to grow, our vision remains unchanged: to cut through
            the noise and deliver solutions that inspire trust, elevate design,
            and leave a lasting impression.
          </p>

          <p className="text-sm text-orange-500 font-medium">
            — Rahul, Founder & Creative Lead
          </p>
        </div>
      </div>
    </section>
  );
}
