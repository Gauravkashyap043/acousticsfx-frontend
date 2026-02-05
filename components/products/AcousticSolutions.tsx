import Image from "next/image";
import Link from "next/link";

export default function AcousticSolutions() {
  return (
    <section className="w-full bg-white">
      <div className="px-[100px] py-[100px]">

        {/* Top Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <Link href="/products/acoustic">

            <button className="px-6 py-2 text-[10px] axiforma border border-[#1F6775] bg-[#1F6775] text-white">
              ACOUSTIC SOLUTIONS
            </button>
          </Link>
          <button className="px-6 py-2 text-[10px] axiforma border border-gray-300 text-gray-600">
            FLOORMOUNT SOLUTIONS
          </button>
          <button className="px-6 py-2 text-[10px] axiforma border border-gray-300 text-gray-600">
            SOUND PROOFING SOLUTIONS
          </button>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <p className="text-[18px] manrope font-[500] text-[#1F6775] text-gray-500 mb-2">Acoustic Solutions</p>
          <h2 className="text-[45px] font-semibold manrope leading-tight">
            Explore Our Acoustic <br /> Masterpieces
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-20">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-y-20">

            {/* Card 1 */}
            <Link href="/products/acoustic/wood-acoustic-panel" className="block">
              <Image
                src="/assets/product/Rectangle 4.png"
                alt=""
                width={600}
                height={600}
                className="w-full max-w-[600px] h-auto object-cover"

              />
              <p className="mt-4 text-[18px] manrope text-[#EA8E39] font-[400] text-orange-500">• Wood Acoustic Panel</p>
              <p className="mt-2 text-[18px] manrope font-[400] text-gray-500 leading-relaxed">
                Acoustic wall panels made of wood stops reverberation and spreading
                sound waves better than panels made of steel and glass or concrete.
              </p>
              <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
                →
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/products/acoustic/baffle-clouds" className="block">
              <Image
                src="/assets/product/Rectangle 4 (2).png"
                alt=""
                width={600}
                height={450}
                className="w-[600px] max-w-full h-auto object-cover"

              />
              <p className="mt-4 text-[18px] manrope text-[#EA8E39] font-[400] text-orange-500">• Baffle & Clouds</p>
              <p className="mt-2 text-[18px] manrope font-[400] text-gray-500 leading-relaxed">
                Acoustic wall panels made of wood stops reverberation and spreading
                sound waves better than panels made of steel and glass or concrete.
              </p>
              <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
                →
              </div>
            </Link>

            {/* Card 5 */}
            <Link href="/products/acoustic/baffle-clouds" className="block">
              <Image
                src="/assets/product/Rectangle 4 (4).png"
                alt=""
                width={600}
                height={450}
                className="w-[600px] max-w-full h-auto object-cover"

              />
              <p className="mt-4 text-[18px] manrope text-[#EA8E39] font-[400] text-orange-500">• Baffle & Clouds</p>
              <p className="mt-2 text-[18px] manrope font-[400] text-gray-500 leading-relaxed">
                Acoustic wall panels made of wood stops reverberation and spreading
                sound waves better than panels made of steel and glass or concrete.
              </p>
              <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
                →
              </div>
            </Link>

          </div>

          {/* RIGHT COLUMN (60px DOWN) */}
          <div className="flex flex-col gap-y-20 mt-[60px]">

            {/* Card 2 */}
            <Link href="/products/acoustic/fabric-acoustic-panel" className="block">
              <Image
                src="/assets/product/Rectangle 4 (1).png"
                alt=""
                width={600}
                height={450}
                className="w-[600px] max-w-full h-auto object-cover"

              />
              <p className="mt-4 text-[18px] manrope text-[#EA8E39] font-[400] text-orange-500">• Fabric Acoustic Panel</p>
              <p className="mt-2 text-[18px] manrope font-[400] text-gray-500 leading-relaxed">
                Acoustic wall panels made of wood stops reverberation and spreading
                sound waves better than panels made of steel and glass or concrete.
              </p>
              <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
                →
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/products/acoustic/wood-wool-acoustic-panel" className="block">
              <Image
                src="/assets/product/rect3.png"
                alt=""
                width={600}
                height={450}
                className="w-[600px] max-w-full h-auto object-cover"

              />
              <p className="mt-4 text-[18px] manrope text-[#EA8E39] font-[400] text-orange-500">• Wood Wool Acoustic Panel</p>
              <p className="mt-2 text-[18px] manrope font-[400] text-gray-500 leading-relaxed">
                Acoustic wall panels made of wood stops reverberation and spreading
                sound waves better than panels made of steel and glass or concrete.
              </p>
              <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
                →
              </div>
            </Link>


            {/* Card 6 */}
            <Link href="/products/acoustic/wood-wool-acoustic-panel" className="block">
              <Image
                src="/assets/product/Rectangle 4 (5).png"
                alt=""
                width={600}
                height={450}
                className="w-[600px] max-w-full h-auto object-cover"

              />
              <p className="mt-4 text-[18px] manrope text-[#EA8E39] font-[400] text-orange-500">• Wood Wool Acoustic Panel</p>
              <p className="mt-2 text-[18px] manrope font-[400] text-gray-500 leading-relaxed">
                Acoustic wall panels made of wood stops reverberation and spreading
                sound waves better than panels made of steel and glass or concrete.
              </p>
              <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
                →
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
