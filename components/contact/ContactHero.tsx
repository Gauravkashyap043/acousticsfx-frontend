"use client";

import {
  Phone,
  Mail,
  Smartphone,
  AtSign,
  Headphones,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/contact-bg.jpg')", // apni image yahan lagana
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className="
          relative z-10
          px-[50px] py-[100px]
          h-full
          flex flex-col justify-center
          text-white
        "
      >
        {/* Breadcrumb */}
        <p className="text-sm text-white/80 mb-6">
          Home <span className="mx-2">•</span>{" "}
          <span className="text-orange-400">Contact Us</span>
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-light mb-2">
          Have a Question or confusion:
        </h2>

        <h1 className="text-5xl font-semibold mb-12">
          Contact Us
        </h1>

        {/* Icons Row */}
        <div className="flex gap-10 items-center">
          <ContactIcon icon={<Smartphone size={28} />} />
          <ContactIcon icon={<Mail size={28} />} />
          <ContactIcon active icon={<Phone size={28} />} />
          <ContactIcon icon={<AtSign size={28} />} />
          <ContactIcon icon={<Headphones size={28} />} />
        </div>
      </div>
    </section>
  );
}

/* ================= Reusable Icon ================= */
function ContactIcon({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`
        w-20 h-20 rounded-full
        flex items-center justify-center
        backdrop-blur-md
        border border-white/30
        ${active
          ? "bg-cyan-400/60 shadow-lg shadow-cyan-400/40"
          : "bg-white/20"
        }
      `}
    >
      {icon}
    </div>
  );
}
