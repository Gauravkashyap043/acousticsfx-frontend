import Image from "next/image";

export default function LinearluxGrid() {
  return (
    <section className="w-full bg-white px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[48px] sm:py-[64px] lg:py-[80px]">
      <div className="flex flex-col gap-6">

        {/* ROW 1 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT BIG */}
          <div className="w-full lg:w-[740px] h-[420px] sm:h-[520px] lg:h-[600px] bg-[#1f6773] rounded-xl p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-center">
            <p className="text-[12px] sm:text-[14px] manrope font-[400] tracking-widest mb-3">
              NEW DESIGNS
            </p>
            <h2 className="text-[36px] sm:text-[45px] lg:text-[55px] manrope font-[700] mb-6">
              LINEARLUX
            </h2>
            <p className="text-[18px] sm:text-[22px] lg:text-[28px] axiforma font-[400] leading-relaxed text-white/90">
              A linear grooved acoustic panel is one of the most commonly used
              multi-groove panels. Suitable for auditoriums, lecture halls,
              conference rooms, and public buildings, linear grooved acoustic
              panels provide a warm organic surface effect.
            </p>
          </div>

          {/* RIGHT SMALL */}
          <div className="w-full lg:w-[540px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-xl overflow-hidden relative">
            <Image
              src="/assets/product/linearlux-grid-3.png"
              alt="Linearlux Wall"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT SMALL */}
          <div className="w-full lg:w-[540px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-xl overflow-hidden relative">
            <Image
              src="/assets/product/linearlux-grid-2.png"
              alt="Linearlux Panel"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT BIG */}
          <div className="w-full lg:w-[740px] h-[420px] sm:h-[520px] lg:h-[600px] rounded-xl overflow-hidden relative">
            <Image
              src="/assets/product/linearlux-grid-1.jpg"
              alt="Linearlux Ceiling"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
