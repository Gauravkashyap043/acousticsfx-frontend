import Image from "next/image";

export default function ServiceProvider() {
  return (
    <section className="px-6 sm:px-10 lg:px-[100px] py-[80px] lg:py-[100px]">
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="w-full lg:w-1/2">
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
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <p className="text-[15px] uppercase mb-2 worksans-font text-black font-bold">
            Services Provided by us
          </p>

          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] worksans-font text-black font-bold mb-4 leading-[38px] sm:leading-[46px] lg:leading-[55px]">
            Engineered for Performance.
            <br />
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
