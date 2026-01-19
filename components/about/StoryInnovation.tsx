"use client";

export default function StoryInnovation() {
  return (
    <section className="px-[200px] py-[100px] bg-white">
      {/* ================= Top Content ================= */}
      <div className="grid grid-cols-2 gap-20 items-start mb-16">
        {/* Left Heading */}
        <div>
          <h2 className="text-4xl font-semibold text-[#111] leading-tight">
            Our Story That Drives
          </h2>
          <h2 className="text-5xl font-bold text-orange-500 mt-2">
            INNOVATION
          </h2>
        </div>

        {/* Right Text */}
        <p className="text-gray-600 leading-relaxed max-w-xl">
          Circuit is flexible and affordable and offers you exceptional support
          to achieve your career goals. Circuit is a Global training provider
          based across the UK that specialises.
        </p>
      </div>

      {/* ================= Image / Video Section ================= */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src="/innovation-video.jpg" // apni image yahan lagana
          alt="Innovation Auditorium"
          className="w-full h-[520px] object-cover"
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
          <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center hover:scale-105 transition">
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
