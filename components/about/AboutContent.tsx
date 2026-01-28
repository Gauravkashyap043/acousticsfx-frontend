"use client";

export default function AboutContent() {
  return (
    <section className="px-[50px] py-[100px] bg-white">
      {/* ================= Section 1 ================= */}
      <div className="grid grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <p className="text-[15px] text-[#183B56] font-[700] tracking-widest text-gray-500 worksans-font uppercase mb-4">
            Our Story
          </p>

          <h2 className="text-[40px] text-[#183B56] mb-6 axiforma font-[500]">
            The Power of Purity Source
          </h2>

          <p className="text-[#183B56] worksans-font font-[400] text-[16px] leading-relaxed mb-4">
            Fx Acoustics Inc. is a premium manufacturer of high-performance
            solutions, blending cutting-edge sound control with elegant design.
            From NRC-certified panels to turnkey acoustic interiors, we
            specialize in transforming spaces across India and beyond.
          </p>

          <p className="text-[#183B56] worksans-font font-[400] text-[16px] leading-relaxed mb-4">
            Proudly Made in India and globally trusted, we have built our
            reputation on craftsmanship, reliability, and customer
            satisfaction.
          </p>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-end">
          {/* Big Image */}
          <div className="relative z-10 left-[-200px]">
            <img
              src="/assets/about/Image (1).png"
              alt="Auditorium"
              className="object-cover"
              style={{ width: 525, height: 566 }}
            />
          </div>

          {/* Small Overlap Image */}
          <div className="absolute -bottom-16 right-2">
            <img
              src="/assets/about/Image (2).png"
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
              src="/assets/about/Image (3).png"
              alt="Interior"
              className="object-cover"
              style={{ width: 505, height: 466 }}
            />
          </div>

          {/* Small Overlap Image */}
          <div className="absolute -bottom-16 left-100">
            <img
              src="/assets/about/Image (4).png"
              alt="Studio"
              className="object-cover"
              style={{ width: 350, height: 400 }}
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-[15px] text-[#183B56] font-[700] tracking-widest text-gray-500 worksans-font uppercase mb-4">
            Our Story
          </p>

          <h2 className="text-[40px] text-[#183B56] mb-6 axiforma font-[500]">
            The Power of Purity Source
          </h2>

          <p className="text-[#183B56] worksans-font font-[400] text-[16px] leading-relaxed mb-4">
            Fx Acoustics Inc. is a premium manufacturer of high-performance
            solutions, blending cutting-edge sound control with elegant design.
            From NRC-certified panels to turnkey acoustic interiors, we
            specialize in transforming spaces across India and beyond.
          </p>

          <p className="text-[#183B56] worksans-font font-[400] text-[16px] leading-relaxed mb-4">
            Proudly Made in India and globally trusted, we have built our
            reputation on craftsmanship, reliability, and customer
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
