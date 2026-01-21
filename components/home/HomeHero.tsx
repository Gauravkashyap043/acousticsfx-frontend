import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('../../assets/home/background.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 pt-[143px] text-center text-white">

        {/* Main Text */}
        <h1 className="max-w-7xl leading-[85px] text-3xl font-bold md:text-5xl lg:text-[76px] playfair-display">
          We take pride in building stylish and featured acoustic solution.
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] font-[400] text-gray-200 md:text-base poppins-font">
          Our solutions are engineered for clarity, comfort, and visual harmony.
          Whether it’s a studio, auditorium, or workspace, we bring together
          design precision and acoustic mastery to elevate every square foot.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="border poppins-font font-[400] border-white px-6 py-3 text-[18px] transition hover:bg-white hover:text-black">
            Get Quote →
          </button>

          <button className="bg-[#EA8E39] px-6 py-3 text-[18px] poppins-font font-[400] transition hover:bg-orange-600">
            Connect With Us →
          </button>
        </div>

        {/* Spacer to push boxes down */}
        <div className="h-[60px]" />


        {/* Feature Boxes */}

<div className="mb-[120px] w-full">
<div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-6">

  {/* Box 1 */}
  <div className="relative h-[250px] w-[360px] bg-black/50 px-6 py-6">
    <span className="absolute left-0 top-0 h-full w-[3px] bg-yellow-400" />

    <Image
      src="/assets/home/fi_11062015.png"
      alt="Acoustic Solution"
      width={52}
      height={52}
      className="mb-4"
    />

    <h3 className="mb-3 text-[14px] font-[700] poppins-font text-left text-yellow-400">
      Acoustic Solution
    </h3>

    <p className="text-[14px] font-[400] poppins-font text-left text-gray-300">
      Ideal for auditoriums, studios, and performance spaces where sound
      precision is non-negotiable.
    </p>
  </div>

  {/* Box 2 */}
  <div className="relative h-[250px] w-[360px] bg-black/50 px-6 py-6">
    <span className="absolute left-0 top-0 h-full w-[3px] bg-orange-400" />

    <Image
      src="/assets/home/fi_7821525.png"
      alt="Floor Solution"
      width={52}
      height={52}
      className="mb-4"
    />

    <h3 className="mb-3 text-[14px] font-[700] poppins-font text-left text-orange-400">
      Floor Solution
    </h3>

    <p className="text-[14px] font-[400] poppins-font text-left text-gray-300">
      Perfect for gyms, halls, and high-traffic zones — combining aesthetics
      with acoustic synergy.
    </p>
  </div>

  {/* Box 3 */}
  <div className="relative h-[250px] w-[360px] bg-black/50 px-6 py-6">
    <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-400" />

    <Image
      src="/assets/home/fi_17991697.png"
      alt="Sound Proofing"
      width={52}
      height={52}
      className="mb-4"
    />

    <h3 className="mb-3 text-[14px] font-[700] poppins-font text-left text-blue-400">
      Sound Proofing
    </h3>

    <p className="text-[14px] font-[400] poppins-font text-left text-gray-300">
      Custom solutions for homes, offices, and commercial spaces that demand
      quiet confidence.
    </p>
  </div>

</div>

</div>


      </div>
    </section>
  );
}
