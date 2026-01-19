import Image from "next/image";

export default function ProductsSection() {
  return (
    <section className="py-[100px] bg-white overflow-hidden">
      
      {/* TOP CONTENT (LEFT GAP SAME BOTH SIDES) */}
      <div className="px-[200px] mb-12">
        <div className="flex justify-between items-start">
          <div className="max-w-3xl">
            <p className="text-sm mb-3">Our Products</p>

            <h2 className="text-4xl font-bold leading-tight mb-4">
              We Cut Through Noise to create architects
              <br />
              that are thoughtful, timeless & Impactful.
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Our inspired solutions have helped shape modern acoustic design.
              Alluring spaces, internationally recognised for their architectural
              elegance and exceptional sound management live here.
            </p>

            <div className="flex gap-3">
              <button className="bg-[#1F6775] text-white px-4 py-2 text-xs">
                ACOUSTIC SOLUTION
              </button>
              <button className="border px-4 py-2 text-xs">
                FLOORING SOLUTION
              </button>
              <button className="border px-4 py-2 text-xs">
                SOUND PROOFING SOLUTION
              </button>
            </div>
          </div>

          <button className="border px-5 py-2 text-xs h-fit">
            VIEW ALL PRODUCTS →
          </button>
        </div>
      </div>

      {/* SLIDER SECTION */}
      <div className="relative pl-[200px]">
        
        {/* SLIDER TRACK */}
        <div className="flex gap-6 overflow-hidden">
          
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="min-w-[360px] bg-white border rounded-xl"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] w-full">
                <Image
                  src="/product.jpg" // 👈 tum apni image lagana
                  alt="Product"
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-semibold mb-2">Slat</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Acoustic wall panels made of wood stops reverberation and
                  spreading sound waves better than panels made of steel and glass.
                </p>

                <button className="border border-orange-500 text-orange-500 px-4 py-2 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* ARROWS */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="text-2xl">‹</button>
          <button className="text-2xl">›</button>
        </div>

      </div>
    </section>
  );
}
