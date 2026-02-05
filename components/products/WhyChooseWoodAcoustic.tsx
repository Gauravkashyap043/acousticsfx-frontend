import Image from "next/image";

export default function WhyChooseWoodAcoustic() {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="mx-auto px-[100px]">
        <div className="grid grid-cols-12 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="col-span-6">
            <div className="relative w-[550px] h-[700px] rounded-xl overflow-hidden">
              <Image
                src="/assets/product/fc82bb294900c89aefa6327da4c2bd5a3ae3c576.jpg"
                alt="Why Choose Wood Acoustic Panel"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-6">
            <h2 className="text-[40px] inter-font font-medium leading-tight mb-4">
              Why Choose Wood Acoustic Panel
            </h2>

            <p className="text-gray-600 text-[20px] inter-font font-[400] leading-[28px] mb-10 max-w-md">
              With its strong professional focus, a New York School of Interior
              Design education gives you access to internships
            </p>

            {/* POINTS */}
            <div className="space-y-8">

              {/* ITEM 1 */}
              <div className="flex gap-5">
                <span className="text-[#C28A6A] text-[22px] font-medium">
                  1.
                </span>
                <div>
                  <h4 className="text-[30px] font-medium mb-1 inter-font">
                    High Quality Home Furnitures
                  </h4>
                  <p className="text-gray-600 text-[18px] inter-font font-[400] leading-[24px] max-w-sm">
                    Complete your design journey and get unwavering support
                    from our dedicated care team.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-5">
                <span className="text-[#C28A6A] text-[22px] font-medium">
                  2.
                </span>
                <div>
                  <h4 className="text-[30px] font-medium mb-1 inter-font">
                    Unique Designs
                  </h4>
                  <p className="text-gray-600 text-[18px] inter-font font-[400] leading-[24px] max-w-sm">
                    Explore design ideas and co-create your dream home with
                    our experienced designers
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex gap-5">
                <span className="text-[#C28A6A] text-[22px] font-medium">
                  3.
                </span>
                <div>
                  <h4 className="text-[30px] font-medium mb-1 inter-font">
                    Lowest Price List
                  </h4>
                  <p className="text-gray-600 text-[18px] inter-font font-[400] leading-[24px] max-w-sm">
                    Get beautiful interiors for your new home in just
                    45 days. That’s our delivery guarantee.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
