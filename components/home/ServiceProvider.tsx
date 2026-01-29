import Image from "next/image";

export default function ServiceProvider() {
  return (
    <section className="px-[100px] py-[100px]">
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
        <div className="w-[60%]">
          <p className="text-[15px] uppercase mb-2 worksans-font text-black font-bold">Services Provided by us</p>

          <h2 className="text-[40px] worksans-font text-black font-bold mb-4 leading-[55px]">
            Engineered for Performance.
            Designed for Impact.
          </h2>

          <p className="text-[15px] font-[400] worksans-font leading-[25px] mb-6 text-[#4F4F4F]">
            From sports arenas to studios, our acoustic and flooring solutions
            transform spaces into high-functioning, visually striking environments.
          </p>

          <button className="bg-[#EA8E39] text-white px-6 py-3 worksans-font font-semibold text-[19px]">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
