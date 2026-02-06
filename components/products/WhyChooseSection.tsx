import Image from "next/image";

interface WhyChooseSectionProps {
  title: string;
  description: string;
}

export default function WhyChooseSection({
  title,
  description,
}: WhyChooseSectionProps) {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="mx-auto px-[100px]">
        <div className="grid grid-cols-12 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="col-span-6">
            <div className="relative w-[550px] h-[700px] rounded-xl overflow-hidden">
              <Image
                src="/assets/product/why-choose-1.jpg"
                alt={`Why Choose ${title}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-6">
            <h2 className="text-[40px] inter-font font-medium leading-tight mb-4">
              Why Choose {title}
            </h2>

            <p className="text-gray-600 text-[20px] inter-font font-[400] leading-[28px] mb-10 max-w-md">
              {description}
            </p>

            <div className="space-y-6">
              {[
                "Premium Quality Materials",
                "Expert Craftsmanship",
                "Customizable Solutions",
                "Sustainable Design",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#EA8E39] flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-[18px] inter-font font-[400] text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
