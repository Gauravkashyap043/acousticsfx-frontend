import Image from "next/image";

export default function AcousticSolutions() {
  return (
    <section className="w-full bg-white">
      <div className="px-[200px] py-[100px]">

        {/* Top Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          <button className="px-6 py-2 text-sm border border-[#1F6775] bg-[#1F6775] text-white">
            ACOUSTIC SOLUTIONS
          </button>
          <button className="px-6 py-2 text-sm border border-gray-300 text-gray-600">
            FLOORMOUNT SOLUTIONS
          </button>
          <button className="px-6 py-2 text-sm border border-gray-300 text-gray-600">
            SOUND PROOFING SOLUTIONS
          </button>
        </div>

        {/* Heading */}
        <div className="mb-14">
          <p className="text-sm text-gray-500 mb-2">Acoustic Solutions</p>
          <h2 className="text-4xl font-medium leading-tight">
            Explore Our Acoustic <br /> Masterpieces
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-20">

{/* LEFT COLUMN */}
<div className="flex flex-col gap-y-20">

  {/* Card 1 */}
  <div>
    <Image
      src="/acoustic1.jpg"
      alt=""
      width={600}
      height={450}
      className="w-full h-[320px] object-cover"
    />
    <p className="mt-4 text-sm text-orange-500">• Wood Acoustic Panel</p>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
      Acoustic wall panels made of wood stops reverberation and spreading
      sound waves better than panels made of steel and glass or concrete.
    </p>
    <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
      →
    </div>
  </div>

  {/* Card 3 */}
  <div>
    <Image
      src="/acoustic3.jpg"
      alt=""
      width={600}
      height={450}
      className="w-full h-[320px] object-cover"
    />
    <p className="mt-4 text-sm text-orange-500">• Baffle & Clouds</p>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
      Acoustic wall panels made of wood stops reverberation and spreading
      sound waves better than panels made of steel and glass or concrete.
    </p>
    <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
      →
    </div>
  </div>

</div>

{/* RIGHT COLUMN (60px DOWN) */}
<div className="flex flex-col gap-y-20 mt-[60px]">

  {/* Card 2 */}
  <div>
    <Image
      src="/acoustic2.jpg"
      alt=""
      width={600}
      height={450}
      className="w-full h-[320px] object-cover"
    />
    <p className="mt-4 text-sm text-orange-500">• Fabric Acoustic Panel</p>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
      Acoustic wall panels made of wood stops reverberation and spreading
      sound waves better than panels made of steel and glass or concrete.
    </p>
    <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
      →
    </div>
  </div>

  {/* Card 4 */}
  <div>
    <Image
      src="/acoustic4.jpg"
      alt=""
      width={600}
      height={450}
      className="w-full h-[320px] object-cover"
    />
    <p className="mt-4 text-sm text-orange-500">• Wood Wool Acoustic Panel</p>
    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
      Acoustic wall panels made of wood stops reverberation and spreading
      sound waves better than panels made of steel and glass or concrete.
    </p>
    <div className="mt-4 w-10 h-10 border border-orange-400 rounded-full flex items-center justify-center text-orange-400">
      →
    </div>
  </div>

</div>

</div>

      </div>
    </section>
  );
}
