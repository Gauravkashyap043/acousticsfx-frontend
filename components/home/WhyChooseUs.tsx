import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="px-[50px] py-[100px] bg-white">

      {/* Heading */}
      <div className="max-w-4xl mb-16">
        <p className="text-[15px] mb-3 text-gray-600 worksans-font font-bold">
          Why Choose Us
        </p>

        <h2 className="text-[38px] font-bold leading-tight text-gray-900 axiforma">
          We Cut Through Noise to create architects
          <br />
          that are thoughtful, timeless & Impactful.
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="group rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#eaf4f6] group-hover:bg-[#3090A3] transition-all duration-300 flex items-center justify-center mb-4">
            <Image
              src="/assets/home/quaone.svg"
              alt="Quality"
              width={32}
              height={30}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-[25px] mb-2 text-[#1F6775] inter-font">
            Quality
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed inter-font font-[400]">
            Uncompromising craftsmanship meets lasting performance.
            Every detail is engineered for excellence and trust.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#eaf4f6] group-hover:bg-[#3090A3] transition-all duration-300 flex items-center justify-center mb-4">
            <Image
              src="/assets/home/quatwo.svg"
              alt="Service"
              width={32}
              height={30}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-[25px] mb-2 text-[#1F6775] inter-font">
            Service
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed inter-font font-[400]">
            We deliver end-to-end acoustic, flooring, and soundproofing
            solutions reliable, precise, and built to last.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#eaf4f6] group-hover:bg-[#3090A3] transition-all duration-300 flex items-center justify-center mb-4">
            <Image
              src="/assets/home/quathr.svg"
              alt="Innovation"
              width={32}
              height={30}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-[25px] mb-2 text-[#1F6775] inter-font">
            Innovation
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed inter-font font-[400]">
            Made from the finest raw materials, our panels enhance
            your space with elegance while promoting healthy living.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#eaf4f6] group-hover:bg-[#3090A3] transition-all duration-300 flex items-center justify-center mb-4">
            <Image
              src="/assets/home/quafour.svg"
              alt="Commitment"
              width={32}
              height={30}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-[25px] mb-2 text-[#1F6775] inter-font">
            Commitment
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed inter-font font-[400]">
            We stand by every project with unwavering dedication,
            ensuring excellence, reliability, and lasting impact.
          </p>
        </div>

        {/* Card 5 */}
        <div className="group rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#eaf4f6] group-hover:bg-[#3090A3] transition-all duration-300 flex items-center justify-center mb-4">
            <Image
              src="/assets/home/quafive.svg"
              alt="Trustability"
              width={32}
              height={30}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-[25px] mb-2 text-[#1F6775] inter-font">
            Trustability
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed inter-font font-[400]">
            We deliver on every promise with transparency and
            consistency, earning confidence that lasts a lifetime.
          </p>
        </div>

        {/* Card 6 */}
        <div className="group rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#eaf4f6] group-hover:bg-[#3090A3] transition-all duration-300 flex items-center justify-center mb-4">
            <Image
              src="/assets/home/quasix.svg"
              alt="Bespoke"
              width={32}
              height={30}
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-[25px] mb-2 text-[#1F6775] inter-font">
            Bespoke
          </h3>
          <p className="text-[18px] text-gray-600 leading-relaxed inter-font font-[400]">
            Tailored acoustic solutions designed to fit your unique
            space, vision, and lifestyle with precision.
          </p>
        </div>

      </div>
    </section>
  );
}
