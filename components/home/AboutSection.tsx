import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-[800px] overflow-hidden">
      
      {/* ================= Background Image ================= */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/assets/home/bgimage.png"
          alt="Background"
          width={1919}
          height={907}
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* ================= Overlay (80%) ================= */}
      <div className="absolute inset-0 bg-[#1F6775] opacity-80" />

      {/* ================= Content ================= */}
      <div className="relative z-10 flex min-h-[700px]">
        
        {/* LEFT CONTENT */}
        <div className="w-1/2 flex items-center pl-[200px] pr-16 text-white">
          <div>
            <p className="text-sm mb-3 work-sans font-bold text-[16px]">About Us</p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Creative solutions <br />
              by professional designers
            </h2>

            <p className="text-sm text-white/90 mb-8 leading-relaxed">
              At Acoustics FX, we transform ordinary spaces into extraordinary
              experiences. With over 15 years of expertise in acoustic solutions,
              premium wooden flooring, and advanced soundproofing.
            </p>

            <button className="bg-orange-500 px-6 py-3 text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (as previously fixed) */}
        <div className="w-1/2 relative min-h-[800px]">
          <Image
            src="/assets/home/rimage.png"
            alt="Auditorium"
            width={1019}
            height={679}
            className="absolute right-0 top-1/2 -translate-y-1/2 object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
