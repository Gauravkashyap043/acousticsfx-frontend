"use client";

import Image from "next/image";

export default function OurClients() {
  const row1Logos = [
    "/assets/home/client_1.svg",
    "/assets/home/client_1 (1).svg",
    "/assets/home/client_1 (2).svg",
    "/assets/home/client_1 (3).svg",
    "/assets/home/client_1 (4).svg",
  ];

  const row2Logos = [
    "/assets/home/client_1 (5).svg",
    "/assets/home/client_1 (6).svg",
    "/assets/home/client_1 (7).svg",
    "/assets/home/client_1 (4).svg",
  ];

  return (
    <section className="relative h-[420px] sm:h-[500px] lg:h-[580px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/assets/home/mask.jpg"
          alt="Clients Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#1d4a77]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-white/10" />

      {/* CONTENT */}
      <div className="relative z-10 h-full px-6 sm:px-10 lg:px-[340px] flex flex-col justify-center">

        {/* HEADING */}
        <h2 className="text-center text-white text-2xl font-semibold mb-10 sm:mb-14 lg:mb-16">
          Our Valuable Clients
        </h2>

        {/* LOGOS */}
        <div className="flex flex-col items-center gap-10 sm:gap-14 lg:gap-[91px]">

          {/* ROW 1 */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-[91px]">
            {row1Logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex items-center justify-center shadow-sm p-4"
                style={{ width: "185px", height: "90px" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-[91px]">
            {row2Logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex items-center justify-center shadow-sm p-4"
                style={{ width: "185px", height: "90px" }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 6}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
