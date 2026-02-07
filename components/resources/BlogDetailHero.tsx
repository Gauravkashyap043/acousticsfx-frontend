import Image from "next/image";

interface BlogDetailHeroProps {
  blogTitle?: string;
  heroImage?: string;
}

export default function BlogDetailHero({ blogTitle, heroImage }: BlogDetailHeroProps) {
  // Always use the same background image as Wood Acoustic Panel hero
  const backgroundImage = "/assets/product/product-hero.png";

  return (
    <section className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Blog Background"
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
        className="absolute top-0 right-0 opacity-80 hidden sm:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] h-full flex items-center">
        <div className="text-white">
          {/* Breadcrumb */}
          <p className="text-sm text-white/70 mb-4">
            Home <span className="mx-2">•</span>
            <span className="text-[#EA8E39]">Resources</span>
            <span className="mx-2">•</span>
            <span className="text-white/70">Blogs & Articles</span>
          </p>

          {/* Heading */}
          <h1 className="playfair-display font-[800] text-[42px] sm:text-[64px] lg:text-[90px] leading-tight mb-6">
            {blogTitle || "Blog Article"}
          </h1>

          {/* Description */}
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] inter-font font-[300] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-white max-w-[65ch]">
            Discover the latest insights, expert knowledge, and industry trends in acoustic solutions and architectural design.
          </p>
        </div>
      </div>
    </section>
  );
}
