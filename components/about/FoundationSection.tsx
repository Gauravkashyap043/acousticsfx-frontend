"use client";

export default function FoundationSection() {
  return (
    <section className="px-[200px] py-[100px] bg-white">
      {/* ================= Top Heading Row ================= */}
      <div className="grid grid-cols-2 gap-20 mb-20 items-start">
        <h2 className="text-4xl font-semibold text-[#111] leading-tight">
          Our Foundation of Trust & Innovation
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-xl">
          At FX Acoustics, our values bridge vision with purpose, shaping spaces
          that resonate beyond sound. Integrity, Innovation, Collaboration, and
          Customer-Centricity guide every solution we craft with care.
        </p>
      </div>

      {/* ================= Cards Section ================= */}
      <div className="grid grid-cols-3 gap-16 items-start">
        {/* -------- Card 01 -------- */}
        <div className="bg-white p-10 border border-gray-100">
          <span className="text-5xl font-light text-gray-300">01</span>

          <h3 className="mt-6 text-xl font-semibold text-[#111]">
            Our Mission
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm">
            Our mission at FX Acoustics is to blend functionality with aesthetics
            to create superior acoustic products that enhance the auditory and
            visual experience of any space. We are dedicated to delivering
            exceptional craftsmanship, personalized service, and sustainable
            solutions.
          </p>
        </div>

        {/* -------- Card 02 (Image Card) -------- */}
        <div className="relative">
          <img
            src="/vision.jpg" // apni image yahan lagana
            alt="Our Vision"
            className="w-full h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-5xl font-light">02</span>
            <h3 className="mt-2 text-xl font-semibold">Our Vision</h3>
          </div>
        </div>

        {/* -------- Card 03 -------- */}
        <div className="bg-white p-10 border border-gray-100">
          <span className="text-5xl font-light text-gray-300">03</span>

          <h3 className="mt-6 text-xl font-semibold text-[#111]">
            Our Values
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm">
            At FX Acoustics, our values bridge vision and purpose. Integrity
            builds trust, Innovation drives future-ready solutions, and
            Collaboration empowers us to co-create with architects and clients.
            Together, these principles shape spaces that are timeless and
            impactful.
          </p>
        </div>
      </div>
    </section>
  );
}
