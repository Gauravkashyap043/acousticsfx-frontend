import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[60px] sm:py-[80px] lg:py-[100px]">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 sm:mb-12 lg:mb-16 gap-6 lg:gap-0">
          <div>
            <p className="text-[18px] sm:text-[21px] manrope text-[#EA8E39] font-[500] mb-3">
              Case Studies
            </p>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[55px] font-semibold manrope leading-snug text-gray-900">
              Exploring the Intersection of <br /> Form & Function
            </h2>
          </div>

          <div className="flex items-center gap-3 text-orange-500 cursor-pointer mt-0 lg:mt-2">
            <span className="text-sm">View All</span>
            <span className="w-8 h-8 border border-orange-400 rounded-full flex items-center justify-center">
              ↗
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14">

          {/* Card 1 */}
          <div>
            <Image
              src="/assets/product/case-study-1.jpg"
              alt=""
              width={500}
              height={400}
              className="w-full h-[260px] sm:h-[300px] lg:h-[320px] object-cover"
            />
            <h3 className="mt-6 text-[22px] sm:text-[23px] lg:text-[25px] font-semibold text-gray-900">
              The Power of Symmetry in Architectural Design
            </h3>
            <div className="mt-4 flex items-center gap-2 text-orange-500 text-[18px] sm:text-[20px] font-[500] manrope cursor-pointer">
              <span>Read More</span>
              <span>↗</span>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <Image
              src="/assets/product/product-card-6.png"
              alt=""
              width={500}
              height={400}
              className="w-full h-[260px] sm:h-[300px] lg:h-[320px] object-cover"
            />
            <h3 className="mt-6 text-[22px] sm:text-[23px] lg:text-[25px] font-semibold text-gray-900">
              Smart Homes & AI: The Future of Residential Design
            </h3>
            <div className="mt-4 flex items-center gap-2 text-[#EA8E39] text-[18px] sm:text-[20px] font-[500] manrope cursor-pointer">
              <span>Read More</span>
              <span>↗</span>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <Image
              src="/assets/product/product-card-1.png"
              alt=""
              width={500}
              height={400}
              className="w-full h-[260px] sm:h-[300px] lg:h-[320px] object-cover"
            />
            <h3 className="mt-6 text-[22px] sm:text-[23px] lg:text-[25px] font-semibold text-gray-900">
              The Role of Texture & Materials in Architecture
            </h3>
            <div className="mt-4 flex items-center gap-2 text-[#EA8E39] text-[18px] sm:text-[20px] font-[500] manrope cursor-pointer">
              <span>Read More</span>
              <span>↗</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
