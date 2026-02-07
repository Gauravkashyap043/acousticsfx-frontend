import Image from "next/image";

export default function OurApplications() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/applications-bg.jpg"
        alt="Background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[40px] sm:py-[60px] lg:py-[100px] h-full flex flex-col justify-between">

        {/* Top Content */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 text-white">
          <h2 className="text-[24px] sm:text-[28px] lg:text-3xl font-medium">
            Our Applications
          </h2>

          <p className="max-w-md text-sm text-white/80 leading-relaxed">
            FX Acoustics solutions blend performance with aesthetics,
            transforming offices, hospitality, education, and residences.
            From clarity in boardrooms to comfort at home, we craft acoustic
            experiences people truly love.
          </p>
        </div>

        {/* Slider Area */}
        <div className="relative flex items-center">

          {/* Left Arrow */}
          <button className="absolute -left-6 sm:-left-10 lg:-left-16 w-10 sm:w-12 h-10 sm:h-12 bg-white/30 flex items-center justify-center hover:opacity-80 transition">
            <Image
              src="/assets/home/universalvector.svg"
              alt="Previous"
              width={34}
              height={14}
              className="rotate-180 invert"
            />
          </button>

          {/* Cards */}
          <div className="flex gap-6 sm:gap-8 mx-auto">

            {/* Card 1 */}
            <div className="relative w-[220px] sm:w-[240px] lg:w-[260px] h-[300px] sm:h-[320px] lg:h-[340px]">
              <Image
                src="/app1.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-medium">OFFICES</h3>
                <p className="text-sm text-white/80">
                  Workplaces that work better
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-[220px] sm:w-[240px] lg:w-[260px] h-[300px] sm:h-[320px] lg:h-[340px]">
              <Image
                src="/app2.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-medium">EDUCATION</h3>
                <p className="text-sm text-white/80">
                  Create spaces to inspire
                </p>
              </div>
            </div>

            {/* Card 3 */}z
            <div className="relative w-[220px] sm:w-[240px] lg:w-[260px] h-[300px] sm:h-[320px] lg:h-[340px]">
              <Image
                src="/app3.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-medium">RETAIL</h3>
                <p className="text-sm text-white/80">
                  Workplaces that work better
                </p>
              </div>
            </div>

          </div>

          {/* Right Arrow */}
          <button className="absolute -right-6 sm:-right-10 lg:-right-16 w-10 sm:w-12 h-10 sm:h-12 bg-white/30 flex items-center justify-center hover:opacity-80 transition">
            <Image
              src="/assets/home/universalvector.svg"
              alt="Next"
              width={34}
              height={14}
              className="invert"
            />
          </button>

        </div>
      </div>
    </section>
  );
}
