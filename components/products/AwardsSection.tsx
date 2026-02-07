import Image from "next/image";

export default function AwardsSection() {
  return (
    <section className="w-full bg-[#1F6775]">
      <div className="px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[20px] sm:py-[24px] lg:py-[30px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">

          {/* Left Vertical Text */}
          <div className="flex items-center">
            <span className="rotate-0 lg:rotate-[-90deg] text-white/60 tracking-widest text-sm">
              Awards
            </span>
          </div>

          {/* Awards Items */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 lg:gap-16">

            {/* Award 1 */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/product/german-design-award.svg"
                alt="Award"
                width={1}
                height={1}
                unoptimized
                style={{ width: "auto", height: "auto" }}
              />
              <div className="text-white">
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">German Design Award</p>
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">2021</p>
              </div>
            </div>

            {/* Award 2 */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/product/a-design-award.svg"
                alt="Award"
                width={1}
                height={1}
                unoptimized
                style={{ width: "auto", height: "auto" }}
              />
              <div className="text-white">
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">Gold A’ Design Award</p>
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">2021</p>
              </div>
            </div>

            {/* Award 3 */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/product/if-design-award.svg"
                alt="Award"
                width={1}
                height={1}
                unoptimized
                style={{ width: "auto", height: "auto" }}
              />
              <div className="text-white">
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">IF Design Award</p>
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">2020</p>
              </div>
            </div>

            {/* Award 4 */}
            <div className="flex items-center gap-4">
              <Image
                src="/assets/product/good-design-award.svg"
                alt="Award"
                width={1}
                height={1}
                unoptimized
                style={{ width: "auto", height: "auto" }}
              />
              <div className="text-white">
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">Good Design Award</p>
                <p className="font-[400] inter-font text-[16px] sm:text-[18px]">2019</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
