export default function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('../../assets/home/background.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="max-w-7xl leading-[85px] text-3xl md:text-5xl lg:text-[76px] font-bold playfair-display">
          We take pride in building stylish and featured acoustic solution.
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] font-[400] md:text-base text-gray-200 poppins-font">
          Our solutions are engineered for clarity, comfort, and visual harmony.
          Whether it’s a studio, auditorium, or workspace, we bring together
          design precision and acoustic mastery to elevate every square foot.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="border border-white px-6 py-3 text-sm transition hover:bg-white hover:text-black">
            Get Quote →
          </button>

          <button className="bg-orange-500 px-6 py-3 text-sm transition hover:bg-orange-600">
            Connect With Us →
          </button>
        </div>

        {/* Bottom Feature Boxes */}
        <div className="absolute bottom-0 left-0 w-full ">
          <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-6 py-6">

            {/* Box 1 */}
            <div className="relative h-[249px] w-[367px] bg-black/50 px-6 py-6">
              {/* Left Border */}
              <span className="absolute left-0 top-0 h-full w-[3px] bg-yellow-400" />

              {/* Icon */}
              <div className="mb-4 text-yellow-400">
                {/* replace with image/svg if needed */}
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="26" height="26" rx="4" />
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-yellow-400">
                Acoustic Solution
              </h3>

              <p className="text-sm leading-relaxed text-gray-300">
                Ideal for auditoriums, studios, and performance spaces where sound
                precision is non-negotiable.
              </p>
            </div>

            {/* Box 2 */}
            <div className="relative h-[249px] w-[367px] bg-black/50 px-6 py-6">
              <span className="absolute left-0 top-0 h-full w-[3px] bg-orange-400" />

              <div className="mb-4 text-orange-400">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="6" y="3" width="20" height="26" />
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-orange-400">
                Floor Solution
              </h3>

              <p className="text-sm leading-relaxed text-gray-300">
                Perfect for gyms, halls, and high-traffic zones — combining aesthetics
                with acoustic synergy.
              </p>
            </div>

            {/* Box 3 */}
            <div className="relative h-[249px] w-[367px] bg-black/50 px-6 py-6">
              <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-400" />

              <div className="mb-4 text-blue-400">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="16" cy="16" r="12" />
                </svg>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-blue-400">
                Sound Proofing
              </h3>

              <p className="text-sm leading-relaxed text-gray-300">
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
