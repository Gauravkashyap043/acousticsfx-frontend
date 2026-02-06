import Image from "next/image";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products-data";

interface OurAcousticPanelsProps {
  productSlug?: string;
}

export default function OurAcousticPanels({ productSlug }: OurAcousticPanelsProps = {}) {
  // Get panels from data if productSlug is provided, otherwise use default
  let panels: Array<{ title: string; desc: string; img: string; slug?: string }> = [];
  
  if (productSlug) {
    const product = getProductBySlug(productSlug);
    if (product && product.subProducts.length > 0) {
      panels = product.subProducts.map((sub) => ({
        title: sub.title,
        desc: sub.description,
        img: sub.image,
        slug: sub.slug,
      }));
    }
  }
  
  // Fallback to default panels if no productSlug or no sub-products
  if (panels.length === 0) {
    panels = [
      {
        title: "Linerlux",
        desc: "Grooved Acoustical Panels",
        img: "/assets/panels/linerlux.png",
        slug: "linearlux",
      },
      {
        title: "Acoperf",
        desc: "Perforated Acoustical Panels",
        img: "/assets/panels/acoperf.png",
        slug: "acoperf",
      },
      {
        title: "Microatlas",
        desc: "Micro Perforated Acoustical Panels",
        img: "/assets/panels/microatlas.png",
        slug: "microatlas",
      },
      {
        title: "Acoslots",
        desc: "Slotted Acoustical Panels",
        img: "/assets/panels/acoslots.png",
        slug: "acoslots",
      },
      {
        title: "Perfomax",
        desc: "Max Perforated Acoustical Panels",
        img: "/assets/panels/perfomax.png",
        slug: "perfomax",
      },
    ];
  }
  return (
    <section className="w-full bg-[#fefdfc] py-[100px]">
      <div className="mx-auto px-[100px]">

        {/* HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-[55px] axiforma font-[500] tracking-wide mb-4">
            OUR ACOUSTIC PANELS
          </h2>
          <p className="text-gray-600 text-[20px] jakarta font-[500] leading-[30px]">
            A premium workspace faced disruptive noise and poor sound clarity.
            We designed and installed bespoke acoustic panels tailored to their
            architecture. The result: enhanced productivity, elegant aesthetics,
            and a healthier environment. Proof that purposeful design delivers
            measurable impact.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-10">
          {panels.map((item, index) => {
            const CardContent = (
              <div className="bg-white border border-[#eee] rounded-md overflow-hidden relative group">
                {/* IMAGE */}
                <div className="relative w-full h-[220px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-[24px] axiforma font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[18px] inter-font font-[400] text-gray-500">
                    {item.desc}
                  </p>
                </div>

                {/* ARROW BUTTON */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full border border-[#f28c28] 
flex items-center justify-center
transition-all duration-300 ease-in-out
transform rotate-[-45deg] 
group-hover:rotate-0">
                  <Image
                    src="/assets/home/universalvector.svg"
                    alt="Arrow"
                    width={20}
                    height={8}
                    className="text-[#f28c28]"
                    style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(2171%) hue-rotate(7deg)' }}
                  />
                </div>
              </div>
            );

            // Wrap in Link if productSlug and slug are available
            if (productSlug && item.slug) {
              return (
                <Link
                  key={index}
                  href={`/products/acoustic/${productSlug}/${item.slug}`}
                  className="block"
                >
                  {CardContent}
                </Link>
              );
            }

            // For static fallback, wrap in div
            return <div key={index}>{CardContent}</div>;
          })}
        </div>

      </div>
    </section>
  );
}
