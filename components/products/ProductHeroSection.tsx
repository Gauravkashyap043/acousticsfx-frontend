import Image from "next/image";

interface ProductHeroSectionProps {
  title: string;
  description: string;
  heroImage?: string;
  breadcrumbText?: string;
}

export default function ProductHeroSection({
  title,
  description,
  heroImage = "/assets/product/Image.png",
  breadcrumbText,
}: ProductHeroSectionProps) {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt={`${title} Background`}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Vector Line */}
      <Image
        src="/assets/product/Vector 1.svg"
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
            Our Products <span className="mx-2">•</span>
            <span className="text-[#EA8E39]">{breadcrumbText || title}</span>
          </p>

          {/* Heading */}
          <h1 className="playfair-display font-[800] text-[90px] leading-tight mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-[20px] inter-font font-[300] leading-[28px] text-white max-w-[65ch]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
