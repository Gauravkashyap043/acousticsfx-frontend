import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="px-[200px] py-[100px]">

        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-sm text-orange-500 mb-3">Case Studies</p>
            <h2 className="text-4xl font-medium leading-snug text-gray-900">
              Exploring the Intersection of <br /> Form & Function
            </h2>
          </div>

          <div className="flex items-center gap-3 text-orange-500 cursor-pointer mt-2">
            <span className="text-sm">View All</span>
            <span className="w-8 h-8 border border-orange-400 rounded-full flex items-center justify-center">
              ↗
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-14">

          {/* Card 1 */}
          <div>
            <Image
              src="/case1.jpg"
              alt=""
              width={500}
              height={400}
              className="w-full h-[320px] object-cover"
            />
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              The Power of Symmetry in Architectural Design
            </h3>
            <div className="mt-4 flex items-center gap-2 text-orange-500 text-sm cursor-pointer">
              <span>Read More</span>
              <span>↗</span>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <Image
              src="/case2.jpg"
              alt=""
              width={500}
              height={400}
              className="w-full h-[320px] object-cover"
            />
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              Smart Homes & AI: The Future of Residential Design
            </h3>
            <div className="mt-4 flex items-center gap-2 text-orange-500 text-sm cursor-pointer">
              <span>Read More</span>
              <span>↗</span>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <Image
              src="/case3.jpg"
              alt=""
              width={500}
              height={400}
              className="w-full h-[320px] object-cover"
            />
            <h3 className="mt-6 text-lg font-medium text-gray-900">
              The Role of Texture & Materials in Architecture
            </h3>
            <div className="mt-4 flex items-center gap-2 text-orange-500 text-sm cursor-pointer">
              <span>Read More</span>
              <span>↗</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
