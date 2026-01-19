import Image from "next/image";

export default function Section() {
  return (
    <section className="px-[200px] py-[100px]">
      <div className="flex items-center gap-10">
        
        {/* Left Image */}
        <div className="w-1/2">
          <Image
            src="/assets/home/image 1.png"
            alt="Library"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-1/2">
          <p className="text-[15px] uppercase mb-2 worksans-font font-bold">Services Provided by us</p>

          <h2 className="text-[47px] worksans-font font-bold mb-4 leading-[55px]">
            Engineered for Performance.
            Designed for Impact.
          </h2>

          <p className="text-[15px] font-[400] worksans-font leading-[25px] mb-6">
            From sports arenas to studios, our acoustic and flooring solutions
            transform spaces into high-functioning, visually striking environments.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 worksans-font font-semibold text-[19px]">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
