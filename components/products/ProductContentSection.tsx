import Image from "next/image";

interface ProductContentSectionProps {
  title: string;
  description: string;
}

export default function ProductContentSection({
  title,
  description,
}: ProductContentSectionProps) {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto py-[100px]">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* LEFT CONTENT – 100px padding */}
          <div className="col-span-6 pl-[100px]">
            <h2 className="text-[65px] playfair-display text-black mb-6">
              {title}
            </h2>

            <p className="text-[32px] poppins-font font-[400] leading-[45px] text-gray-600 ">
              {description}
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-span-6 pr-0 grid grid-cols-3 gap-x-4 gap-y-2">
            {/* COLUMN 1 */}
            <div className="flex items-center">
              <div className="relative w-full aspect-[240/340] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/product/product-feature-2.png"
                  alt="Acoustic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* COLUMN 2 – TWO SEPARATE IMAGES */}
            <div className="flex flex-col gap-2">
              <div className="relative w-full aspect-[240/340] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/product/product-feature-1.png"
                  alt="Acoustic Top"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-full aspect-[240/340] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/product/product-feature-3.png"
                  alt="Acoustic Bottom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex items-center">
              <div className="relative w-full aspect-[240/340] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/product/product-feature-4.png"
                  alt="Acoustic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
