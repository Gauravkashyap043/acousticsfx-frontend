"use client";

export default function TrustedBySection() {
  return (
    <section className="px-[100px] py-[100px] bg-white text-center">
      {/* ================= Heading ================= */}
      <h2 className="text-[40px] font-bold text-[#111] mb-4 poppins">
        Trusted By Industry Leaders
      </h2>

      <p className="text-gray-500 max-w-2xl worksans-font font-[400] text-[20px] mx-auto mb-14 leading-relaxed">
        Join our roster of satisfied clients and experience the exceptional
        results and service that have earned us the trust of industry leaders
        worldwide.
      </p>

      {/* ================= Logos ================= */}
      <div className="flex items-center justify-between gap-12">
        <LogoItem src="/assets/about/image 7.png" alt="REET Global Advisors" />
        <LogoItem src="/assets/about/image 5 (1).png" alt="Pidilite" />
        <LogoItem src="/assets/about/image 3.png" alt="Goldman Sachs" />
        <LogoItem src="/assets/about/image 1 (1).png" alt="Norwest Venture Partners" />
        <LogoItem src="/assets/about/image 2.png" alt="BI" />
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
    <div className="flex items-center justify-center transition">
      <img
        src={src}
        alt={alt}
        className="max-h-15 object-contain"
      />
    </div>
  );
}
