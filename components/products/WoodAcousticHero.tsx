import Image from "next/image";

export default function WoodAcousticHero() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/assets/product/product-hero.png"
        alt="Wood Acoustic Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Vector Line */}
      <Image
        src="/assets/product/vector-decoration.svg"
        alt="Decorative Line"
        width={420}
        height={420}
        className="absolute top-0 right-0 opacity-80"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-[100px] h-full flex items-center">
        <div className=" text-white">

          {/* Breadcrumb */}
          <p className="text-sm text-white/70 mb-4">
            Home <span className="mx-2">•</span>
            <span className="text-[#EA8E39]">Resources</span>
          </p>

          {/* Heading */}
          <h1 className="playfair-display font-[800] text-[90px] leading-tight mb-6">
            Resources & Insights
          </h1>

          {/* Description */}
          <p className="text-[20px] inter-font font-[300] leading-[28px] text-white max-w-[65ch]">
            Discover the latest articles, insights, and expert knowledge about acoustic solutions, architectural design, and innovative sound management technologies. Stay updated with industry trends and best practices.
          </p>

        </div>
      </div>
    </section>
  );
}
