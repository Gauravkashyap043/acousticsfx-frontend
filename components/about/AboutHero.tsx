"use client";

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[65vh] sm:min-h-[72vh] lg:min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/about/empty-flat-interrior-with-elements-decoration 1 (1).png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="
          relative z-10
          px-[16px] sm:px-[40px] lg:px-[100px]
          py-[60px] sm:py-[80px] lg:py-[100px]
          flex flex-col
          items-center justify-center
          text-white text-center
        "
      >
        {/* Heading */}
        <h1 className="text-[36px] sm:text-[56px] md:text-[72px] lg:text-[90px] font-bold leading-tight max-w-9xl playfair-display">
          Partner in Future Readiness
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] poppins-font font-[400] max-w-2xl text-white/90">
          Empowering tomorrow’s spaces with acoustic solutions that blend
          precision, elegance, and performance.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="border border-white px-6 py-3 text-[16px] sm:text-[18px] poppins-font font-[400] hover:bg-white hover:text-black transition cursor-pointer">
            Get Quote →
          </button>

          <button className="bg-orange-500 px-6 py-3 text-[16px] sm:text-[18px] poppins-font font-[400] hover:bg-orange-600 transition cursor-pointer">
            Connect With Us →
          </button>
        </div>
      </div>
    </section>
  );
}
