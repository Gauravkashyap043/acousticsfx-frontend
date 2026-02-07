"use client";

export default function StoryInnovation() {
  return (
    <section className="px-[16px] sm:px-[40px] lg:px-[100px] pt-[60px] sm:pt-[80px] lg:pt-[100px] bg-[#F5F5F5]">

      {/* ================= Top Content ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start mb-12 sm:mb-14 lg:mb-16">

        {/* Left Heading */}
        <div>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[60px] lato font-bold leading-[40px]">
            Our Story That Drives
          </h2>
          <h2 className="text-[56px] sm:text-[72px] lg:text-[100px] font-bold lato text-[#ea8e39] mt-2">
            INNOVATION
          </h2>
        </div>

        {/* Right Text */}
        <p className="text-gray-600 leading-relaxed lato font-[400] text-[16px] sm:text-[18px] lg:text-[20px] max-w-xl">
          Circuit is flexible and affordable and offers you exceptional support
          to achieve your career goals. Circuit is a Global training provider
          based across the UK that specialises.
        </p>
      </div>

      {/* ================= Image / Video Section ================= */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src="/innovation-video.jpg"
          alt="Innovation Auditorium"
          className="w-full h-[280px] sm:h-[400px] lg:h-[520px] object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Play Button */}
        <button
          className="
            absolute inset-0
            flex items-center justify-center
          "
          aria-label="Play video"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white/80 flex items-center justify-center hover:scale-105 transition">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-1"
            >
              <path
                d="M8 5v14l11-7-11-7z"
                fill="#111"
              />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}
