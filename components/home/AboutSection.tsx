import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* ================= Background Image ================= */}
      <div className="absolute inset-0">
        <Image
          src="/assets/home/bgimage.png"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* ================= Overlay (80%) ================= */}
      <div className="absolute inset-0 bg-[#1F6775] opacity-80" />

      {/* ================= Content ================= */}
      <div className="relative z-10 flex min-h-screen">
        
        {/* LEFT CONTENT */}
        <div className="w-1/2 flex items-center pl-[50px] pr-16 text-white">
          <div>
            <p className="text-sm mb-3 work-sans font-bold text-[16px]">
              About Us
            </p>

            <h2 className="text-[38px] font-bold mb-6 leading-tight axiforma">
              Creative solutions <br />
              by professional designers
            </h2>

            <p className="text-[18px] text-[#E2D9C8] mb-8 leading-relaxed axiforma font-[400]">
              At Acoustics FX, we transform ordinary spaces into extraordinary experiences. With over 15 years of expertise in acoustic solutions, premium wooden flooring, and advanced soundproofing, we blend science with design to deliver environments that inspire focus, comfort, and performance. Every project reflects our commitment to clarity, elegance, and innovation — trusted by architects, designers, and clients across industries.
            </p>

            <button className="bg-orange-500 px-6 py-3 text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE — SAME TOP/BOTTOM GAP, ONLY HORIZONTAL STRETCH */}
        <div className="w-1/2 relative flex items-center pr-0">
          <div className="relative w-full max-w-full">
            <Image
              src="/assets/home/rimage.png"
              alt="Auditorium"
              width={1019}
              height={679}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
