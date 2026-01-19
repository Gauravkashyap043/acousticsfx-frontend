"use client";

export default function AboutContent() {
  return (
    <section className="px-[200px] py-[100px] bg-white">
      {/* ================= Section 1 ================= */}
      <div className="grid grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Our Story
          </p>

          <h2 className="text-4xl font-serif text-[#0c2d48] mb-6">
            The Power of Purity Source
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Fx Acoustics Inc. is a premium manufacturer of high-performance
            solutions, blending cutting-edge sound control with elegant design.
            From NRC-certified panels to turnkey acoustic interiors, we
            specialize in transforming spaces across India and beyond.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Proudly Made in India and globally trusted, we have built our
            reputation on craftsmanship, reliability, and customer
            satisfaction.
          </p>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-end">
          {/* Big Image */}
          <div className="relative z-10">
            <img
              src="/img-big-1.jpg"
              alt="Auditorium"
              className="object-cover"
              style={{ width: 525, height: 566 }}
            />
          </div>

          {/* Small Overlap Image */}
          <div className="absolute -bottom-16 -right-16">
            <img
              src="/img-small-1.jpg"
              alt="Hallway"
              className="object-cover"
              style={{ width: 400, height: 500 }}
            />
          </div>
        </div>
      </div>

      {/* ================= Section 2 ================= */}
      <div className="grid grid-cols-2 gap-20 items-center mt-40">
        {/* Left Images */}
        <div className="relative">
          {/* Big Image */}
          <div className="relative z-10">
            <img
              src="/img-big-2.jpg"
              alt="Interior"
              className="object-cover"
              style={{ width: 525, height: 566 }}
            />
          </div>

          {/* Small Overlap Image */}
          <div className="absolute -bottom-16 left-40">
            <img
              src="/img-small-2.jpg"
              alt="Studio"
              className="object-cover"
              style={{ width: 400, height: 500 }}
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            Our Background
          </p>

          <h2 className="text-4xl font-serif text-[#0c2d48] mb-6">
            The Power of Purity Source
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Fx Acoustics was founded with a singular vision: to create high
            quality, decorative acoustic solutions that seamlessly marry
            functionality with aesthetics.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our commitment to craftsmanship, innovation, and customer
            satisfaction has fueled our growth and established Fx Acoustics as a
            trusted name in the industry.
          </p>
        </div>
      </div>
    </section>
  );
}
