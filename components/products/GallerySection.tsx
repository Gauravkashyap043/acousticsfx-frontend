import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full bg-white px-[100px] py-[80px]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[35px] manrope font-bold">Gallery</h2>

        <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
          Get Quote
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* Big Image (Left) */}
        <div className="col-span-2 h-[480px] rounded-2xl overflow-hidden relative">
          <Image
            src="/assets/product/5a3611e63e5e59fe36b4503b6deca73408c7e27a.png"
            alt="Gallery Large"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Tall Image */}
        <div className="h-[480px] rounded-2xl overflow-hidden relative">
          <Image
            src="/assets/product/57486c20ec26568fc83000581836ce234b25487a (1).jpg"
            alt="Gallery Tall"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
        <button className="hover:text-black transition">←</button>
        <span>1 / 35</span>
        <button className="hover:text-black transition">→</button>
      </div>

    </section>
  );
}
