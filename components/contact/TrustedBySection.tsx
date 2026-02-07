"use client";

export default function TrustedBySection() {
  return (
    <section className="px-[16px] sm:px-[40px] lg:px-[100px] py-[60px] sm:py-[80px] lg:py-[100px] bg-white text-center">

      {/* ================= Heading ================= */}
      <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#111] mb-4 poppins">
        Trusted By Industry Leaders
      </h2>

      <p className="text-gray-500 max-w-2xl worksans-font font-[400] text-[16px] sm:text-[18px] lg:text-[20px] mx-auto mb-10 sm:mb-12 lg:mb-14 leading-relaxed">
        Join our roster of satisfied clients and experience the exceptional
        results and service that have earned us the trust of industry leaders
        worldwide.
      </p>

      {/* ================= Logos ================= */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-12">
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
        className="max-h-12 sm:max-h-14 lg:max-h-15 object-contain"
      />
    </div>
  );
}
