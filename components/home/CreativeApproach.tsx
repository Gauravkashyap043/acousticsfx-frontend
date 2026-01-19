import Image from "next/image";

export default function CreativeApproach() {
  return (
    <section className="px-[200px] py-[100px] bg-white">
      <div className="relative flex items-center">
        
        {/* LEFT CONTENT CARD */}
        <div className="relative z-10 bg-[#FFF3E8] p-10 w-[420px]">
          <p className="text-sm mb-2">#FXacoustic solutions</p>

          <h2 className="text-2xl font-semibold mb-6">
            Creative Approach
          </h2>

          {/* Accordion items (static UI) */}
          <div className="border-t border-gray-300 py-4">
            <div className="flex justify-between items-center font-medium">
              <span>Story & Concept</span>
              <span>—</span>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Read on how we make awesome projects from scratch, through
              several series of testing and refining to make our awesome
              masterclass.
            </p>
          </div>

          <div className="border-t border-gray-300 py-4 flex justify-between">
            <span>Design and Testing</span>
            <span>+</span>
          </div>

          <div className="border-t border-b border-gray-300 py-4 flex justify-between">
            <span>Revision and Rendering</span>
            <span>+</span>
          </div>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 text-sm">
            Learn More
          </button>
        </div>

        {/* IMAGES WRAPPER */}
        <div className="relative flex ml-[-60px]">
          
          {/* CENTER IMAGE */}
          <div className="relative w-[420px] h-[520px] z-0">
            <Image
              src="/creative-main.jpg" // 👈 tumhari image
              alt="Creative Space"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT IMAGE (overlap) */}
          <div className="relative w-[260px] h-[520px] ml-[-80px]">
            <Image
              src="/creative-side.jpg" // 👈 tumhari image
              alt="Interior"
              fill
              className="object-cover grayscale"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
