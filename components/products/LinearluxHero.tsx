import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

interface LinearluxHeroProps {
  productTitle: string;
  subProductTitle: string;
  description: string;
}

export default function LinearluxHero({ productTitle, subProductTitle, description }: LinearluxHeroProps) {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-[#1b1b1b] text-white">
      
      {/* Background vertical panels */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-b from-[#2a2a2a] to-[#151515] border-r border-black/40"
          />
        ))}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full px-[100px] py-[80px] flex">
        
        {/* Left Social Icons */}
        <div className="flex flex-col gap-6 mt-24 mr-10 text-[#f59e0b]">
          <FaFacebookF className="cursor-pointer hover:opacity-70" />
          <FaInstagram className="cursor-pointer hover:opacity-70" />
          <FaTwitter className="cursor-pointer hover:opacity-70" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center max-w-2xl">
          
          {/* Breadcrumb */}
          <p className="text-sm text-gray-300 mb-6">
            Our Products &nbsp;•&nbsp; {productTitle} &nbsp;•&nbsp;
            <span className="text-[#f59e0b]"> {subProductTitle}</span>
          </p>

          {/* Heading */}
          <h1 className="text-[94px] playfair-display font-serif mb-6">
            {subProductTitle}
          </h1>

          {/* Description */}
          <p className="text-[20px] inter-font font-[400] leading-relaxed text-gray-300">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
}
