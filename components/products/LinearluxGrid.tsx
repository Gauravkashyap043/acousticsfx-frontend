import Image from "next/image";
import { ParallaxImage } from "@/components/shared/ParallaxImage";

const DEFAULT_GRID_IMAGES = [
  { url: "/assets/product/linearlux-grid-3.png", alt: "Linearlux Wall" },
  { url: "/assets/product/linearlux-grid-2.png", alt: "Linearlux Panel" },
  { url: "/assets/product/linearlux-grid-1.jpg", alt: "Linearlux Ceiling" },
];

const DEFAULT_INTRO = {
  title: "NEW DESIGNS",
  subtitle: "LINEARLUX",
  body:
    "A linear grooved acoustic panel is one of the most commonly used multi-groove panels. Suitable for auditoriums, lecture halls, conference rooms, and public buildings, linear grooved acoustic panels provide a warm organic surface effect.",
};

type GridIntro = { title?: string; subtitle?: string; body?: string };
type GridImage = { url: string; alt?: string };

interface LinearluxGridProps {
  gridIntro?: GridIntro | null;
  gridImages?: GridImage[] | null;
}

export default function LinearluxGrid({ gridIntro, gridImages }: LinearluxGridProps) {
  const intro = gridIntro?.title || gridIntro?.subtitle || gridIntro?.body ? gridIntro : DEFAULT_INTRO;
  const images = gridImages?.length ? gridImages : DEFAULT_GRID_IMAGES;
  const [img0, img1, img2] = images;

  return (
    <section className="w-full bg-white px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[48px] sm:py-[64px] lg:py-[80px]">
      <div className="flex flex-col gap-6">

        {/* ROW 1 */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[740px] h-[420px] sm:h-[520px] lg:h-[600px] bg-[#1f6773] rounded-xl p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-center">
            {intro.title && (
              <p className="text-[12px] sm:text-[14px] manrope font-[400] tracking-widest mb-3">
                {intro.title}
              </p>
            )}
            {intro.subtitle && (
              <h2 className="text-[36px] sm:text-[45px] lg:text-[55px] manrope font-[700] mb-6">
                {intro.subtitle}
              </h2>
            )}
            {intro.body && (
              <p className="text-[18px] sm:text-[22px] lg:text-[28px] axiforma font-[400] leading-relaxed text-white/90">
                {intro.body}
              </p>
            )}
          </div>
          {img0?.url && (
            <div className="w-full lg:w-[540px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-xl overflow-hidden relative">
              <ParallaxImage offset={25} className="h-full w-full">
                <Image
                  src={img0.url}
                  alt={img0.alt ?? ""}
                  fill
                  className="object-cover"
                />
              </ParallaxImage>
            </div>
          )}
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {img1?.url && (
            <div className="w-full lg:w-[540px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-xl overflow-hidden relative">
              <ParallaxImage offset={25} className="h-full w-full">
                <Image
                  src={img1.url}
                  alt={img1.alt ?? ""}
                  fill
                  className="object-cover"
                />
              </ParallaxImage>
            </div>
          )}
          {img2?.url && (
            <div className="w-full lg:w-[740px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-xl overflow-hidden relative">
              <ParallaxImage offset={25} className="h-full w-full">
                <Image
                  src={img2.url}
                  alt={img2.alt ?? ""}
                  fill
                  className="object-cover"
                />
              </ParallaxImage>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
