import Image from "next/image";

export default function ProductHero() {
  return (
    <section className="w-full bg-white">

      {/* Breadcrumb */}
      <div className="px-[200px] pt-[40px] text-sm text-gray-500">
        <span className="hover:text-black cursor-pointer">Home</span>
        <span className="mx-2">•</span>
        <span className="text-orange-500">Our Products</span>
      </div>

      {/* Main Content */}
      <div className="relative px-[100px] py-[100px] text-center">

        {/* Social Icons */}
        <div className="absolute left-[60px] top-1/2 -translate-y-1/2 flex flex-col gap-4 text-orange-500">
          <span className="cursor-pointer">f</span>
          <span className="cursor-pointer">◎</span>
          <span className="cursor-pointer">t</span>
        </div>

        {/* Heading */}
        <h1 className="text-[86px] font-[500] playfair-display text-gray-800">
          Where <span className="italic font-light">design</span> meets emotion
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-500 inter-font font-[400] text-[26px] leading-relaxed">
          We design spaces that unite function and beauty, creating interiors and
          architecture that bring your lifestyle and vision to life.
        </p>
      </div>

      {/* Image */}
      <div className="px-[00px] pb-[00px]">
        <Image
          src="/assets/product/product-hero-alt.jpg"
          alt="Interior Design"
          width={1920}
          height={900}
          className="w-full h-[500px] object-cover"
        />
      </div>
    </section>
  );
}
