"use client";

export default function TrustedBySection() {
  return (
    <section className="px-[50px] py-[100px] bg-white text-center">
      {/* ================= Heading ================= */}
      <h2 className="text-3xl font-semibold text-[#111] mb-4">
        Trusted By Industry Leaders
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed">
        Join our roster of satisfied clients and experience the exceptional
        results and service that have earned us the trust of industry leaders
        worldwide.
      </p>

      {/* ================= Logos ================= */}
      <div className="flex items-center justify-between gap-12">
        <LogoItem src="/logos/reet.png" alt="REET Global Advisors" />
        <LogoItem src="/logos/pidilite.png" alt="Pidilite" />
        <LogoItem src="/logos/goldman.png" alt="Goldman Sachs" />
        <LogoItem src="/logos/norwest.png" alt="Norwest Venture Partners" />
        <LogoItem src="/logos/bi.png" alt="BI" />
      </div>
    </section>
  );
}

/* ================= Logo Item ================= */
function LogoItem({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition">
      <img
        src={src}
        alt={alt}
        className="max-h-10 object-contain"
      />
    </div>
  );
}
