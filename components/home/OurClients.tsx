"use client";

import Image from "next/image";

const allLogos = [
  "/assets/home/client_1.svg",
  "/assets/home/client_1 (1).svg",
  "/assets/home/client_1 (2).svg",
  "/assets/home/client_1 (3).svg",
  "/assets/home/client_1 (4).svg",
  "/assets/home/client_1 (5).svg",
  "/assets/home/client_1 (6).svg",
  "/assets/home/client_1 (7).svg",
  "/assets/home/client_1 (4).svg",
];

export default function OurClients() {
  return (
    <section className="relative h-[420px] sm:h-[500px] lg:h-[580px] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/assets/home/mask.jpg"
          alt="Clients Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#1d4a77]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-white/10" />

      {/* CONTENT */}
      <div className="relative z-10 h-full px-6 sm:px-10 lg:px-[340px] flex flex-col justify-center">

        <h2 className="text-center text-white text-2xl font-semibold mb-10 sm:mb-14 lg:mb-16">
          Our Valuable Clients
        </h2>

        {/* ================= DESKTOP (STATIC) ================= */}
        <div className="hidden lg:flex flex-col items-center gap-[91px]">

          <div className="flex justify-center gap-[91px]">
            {allLogos.slice(0, 5).map((logo, index) => (
              <LogoCard key={index} logo={logo} />
            ))}
          </div>

          <div className="flex justify-center gap-[91px]">
            {allLogos.slice(5).map((logo, index) => (
              <LogoCard key={index} logo={logo} />
            ))}
          </div>

        </div>

        {/* ================= MOBILE / TABLET (SLIDER) ================= */}
        <div className="lg:hidden overflow-hidden">
          <div className="flex w-max animate-client-marquee gap-6 sm:gap-10">
            {[...allLogos, ...allLogos].map((logo, index) => (
              <LogoCard key={index} logo={logo} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function LogoCard({ logo }: { logo: string }) {
  return (
    <div
      className="bg-white rounded-lg flex items-center justify-center shadow-sm p-4 shrink-0"
      style={{ width: "185px", height: "90px" }}
    >
      <div className="relative w-full h-full">
        <Image src={logo} alt="Client Logo" fill className="object-contain" />
      </div>
    </div>
  );
}
