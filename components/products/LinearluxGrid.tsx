import Image from "next/image";

export default function LinearluxGrid() {
  return (
    <section className="w-full bg-white px-[100px] py-[80px]">
      <div className="flex flex-col gap-6">

        {/* ROW 1 */}
        <div className="flex gap-6">
          {/* LEFT BIG */}
          <div className="w-[740px] h-[600px] bg-[#1f6773] rounded-xl p-10 text-white flex flex-col justify-center">
            <p className="text-[14px] manrope font-[400] tracking-widest mb-3">
              NEW DESIGNS
            </p>
            <h2 className="text-[55px] manrope font-[700] mb-6">
              LINEARLUX
            </h2>
            <p className="text-[28px] axiforma font-[400] leading-relaxed text-white/90">
              A linear grooved acoustic panel is one of the most commonly used
              multi-groove panels. Suitable for auditoriums, lecture halls,
              conference rooms, and public buildings, linear grooved acoustic
              panels provide a warm organic surface effect.
            </p>
          </div>

          {/* RIGHT SMALL */}
          <div className="w-[540px] h-[600px] rounded-xl overflow-hidden relative">
            <Image
              src="/assets/product/ea6a6466588d5e106bb10da2aaa56f6035dff19f.png"
              alt="Linearlux Wall"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex gap-6">
          {/* LEFT SMALL */}
          <div className="w-[540px] h-[600px] rounded-xl overflow-hidden relative">
            <Image
              src="/assets/product/d90c06f639c18614bb63f0a9e00b44c483f0255d.png"
              alt="Linearlux Panel"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT BIG */}
          <div className="w-[740px] h-[600px] rounded-xl overflow-hidden relative">
            <Image
              src="/assets/product/591c5ff1b802805d62b06026cf89469e0d4fe77a.jpg"
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
