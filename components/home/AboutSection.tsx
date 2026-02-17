import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="relative w-full overflow-hidden 
      py-14 lg:py-0 lg:min-h-screen"
    >

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

      {/* ================= Overlay ================= */}
      <div className="absolute inset-0 bg-[#1F6775] opacity-80" />

      {/* ================= Content ================= */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:min-h-screen">

        {/* LEFT CONTENT */}
        <div
          className="w-full lg:w-1/2 flex items-center 
          px-6 sm:px-10 lg:pl-[50px] lg:pr-16 
          text-left text-white"
        >
          <div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] mb-3 font-bold work-sans">
              About Us
            </p>

            <h2
              className="text-[26px] sm:text-[32px] lg:text-[38px] 
              font-bold mb-5 lg:mb-6 leading-tight axiforma"
            >
              Creative solutions <br className="hidden lg:block" />
              by professional designers
            </h2>

            <p
              className="text-[15px] sm:text-[16px] lg:text-[18px] 
              text-[#E2D9C8] mb-7 lg:mb-8 leading-relaxed axiforma font-[400]"
            >
              At Acoustics FX, we transform ordinary spaces into extraordinary experiences.
              With over 15 years of expertise in acoustic solutions, premium wooden flooring,
              and advanced soundproofing, we blend science with design to deliver environments
              that inspire focus, comfort, and performance.
            </p>

            <button className="bg-orange-500 px-6 py-3 text-white text-[14px] sm:text-[15px] cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="w-full lg:w-1/2 flex items-center 
          px-6 sm:px-10 lg:px-0 mt-12 lg:mt-0"
        >
          <div className="relative w-full">
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
