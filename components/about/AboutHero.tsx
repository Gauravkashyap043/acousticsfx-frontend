"use client";

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/your-image.jpg')", // apni image yahan lagana
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="
          relative z-10
          px-[200px] py-[100px]
          flex flex-col
          items-center justify-center
          text-white text-center
        "
      >
        {/* Heading */}
        <h1 className="text-5xl font-serif leading-tight max-w-3xl">
          Partner in Future Readiness
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg max-w-2xl text-white/90">
          Empowering tomorrow’s spaces with acoustic solutions that blend
          precision, elegance, and performance.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button className="border border-white px-6 py-3 text-sm hover:bg-white hover:text-black transition">
            Get Quote →
          </button>

          <button className="bg-orange-500 px-6 py-3 text-sm hover:bg-orange-600 transition">
            Connect With Us →
          </button>
        </div>
      </div>
    </section>
  );
}
