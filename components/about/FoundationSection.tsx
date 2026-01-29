"use client";

export default function FoundationSection() {
  return (
    <section className="px-[100px] py-[100px] bg-[#F5F5F5]">
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
        <div className="bg-white border border-gray-100 p-10 h-[420px] flex flex-col">
          <span className="text-5xl font-light text-[#111]">01</span>

          <h3 className="mt-6 text-xl font-semibold text-[#111]">
            Our Mission
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm">
            Our mission at FX Acoustics is to blend functionality with aesthetics
            to create superior acoustic products that enhance the auditory and
            visual experience of any space. We are dedicated to delivering
            exceptional craftsmanship, personalized service, and sustainable
            solutions that exceed expectations.
          </p>
        </div>

        {/* -------- Card 02 (Image Card) -------- */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="/assets/about/bgfoundation.png"
            alt="Our Vision"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text on Image */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="text-5xl font-light">02</span>
            <h3 className="mt-3 text-xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              At FX Acoustics, we envision becoming the foremost provider of
              innovative and decorative acoustic solutions — transforming spaces
              into environments that are both aesthetically striking and
              acoustically perfected.
            </p>
          </div>
        </div>

        {/* -------- Card 03 -------- */}
        <div className="bg-white border border-gray-100 p-10 h-[420px] flex flex-col">
          <span className="text-5xl font-light text-[#111]">03</span>

          <h3 className="mt-6 text-xl font-semibold text-[#111]">
            Our Values
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm">
            At FX Acoustics, our values bridge vision and purpose. Integrity
            builds trust, Innovation drives future-ready solutions, and
            Collaboration empowers us to co-create with architects and clients.
            We remain Customer-Centric, placing aspirations at the heart of
            every design decision.
          </p>
        </div>

      </div>
    </section>
  );
}
