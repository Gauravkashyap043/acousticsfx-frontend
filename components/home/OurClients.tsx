"use client";

import Image from "next/image";

export default function OurClients() {
    return (
        <section className="relative py-[100px] overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0">
                <Image
                    src="/clients-bg.jpg" // 👈 tum apni bg image lagana
                    alt="Clients Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTENT */}
            <div className="relative z-10 px-[340px]">

                {/* HEADING */}
                <h2 className="text-center text-white text-2xl font-semibold mb-16">
                    Our Valuable Clients
                </h2>

                {/* LOGOS GRID */}
                <div className="flex flex-col items-center gap-[91px]">

                    {/* ROW 1 – 5 BOXES */}
                    <div className="flex gap-[91px]">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-lg flex items-center justify-center"
                                style={{
                                    width: "185px",
                                    height: "90px",
                                }}
                            >
                                {/* CLIENT LOGO IMAGE WILL GO HERE */}
                            </div>
                        ))}
                    </div>

                    {/* ROW 2 – 4 BOXES */}
                    <div className="flex gap-[91px]">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-lg flex items-center justify-center"
                                style={{
                                    width: "185px",
                                    height: "90px",
                                }}
                            >
                                {/* CLIENT LOGO IMAGE WILL GO HERE */}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* RESPONSIVE */}
            <style jsx>{`
        @media (max-width: 1536px) {
          .responsive-padding {
            padding-left: 200px;
            padding-right: 200px;
          }
        }
      `}</style>
        </section>
    );
}
