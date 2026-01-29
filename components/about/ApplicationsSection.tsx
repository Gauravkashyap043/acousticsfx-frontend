"use client";

export default function ApplicationsSection() {
  return (
    <section className="relative px-[100px] py-[90px] overflow-hidden">
      
      {/* ================= Background Image + Fade ================= */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/about/sliderbg.jpg" // <-- yahan apni faded bg image
          alt="Applications Background"
          className="w-full h-full object-cover"
        />
        {/* White fade overlay */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      {/* ================= Heading ================= */}
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-[45px] worksans-font font-bold text-[#111]">
          Our Applications
        </h2>

        <p className="text-gray-600 max-w-lg leading-relaxed worksans-font font-[400] text-[20px]">
          FX Acoustics solutions blend performance with aesthetics,
          transforming offices, hospitality, education, and residences.
          From clarity in boardrooms to comfort at home, we craft acoustic
          experiences people truly love.
        </p>
      </div>

      {/* ================= Cards + Arrows ================= */}
      <div className="relative mt-6 px-20">
        <div className="grid grid-cols-3 gap-6">
          <ApplicationCard
            title="OFFICES"
            subtitle="Workplaces that work better"
            image="/assets/about/Rectangle 59.png"
          />

          <ApplicationCard
            title="EDUCATION"
            subtitle="Create spaces to inspire"
            image="/assets/about/6d475af8e833a39bf05332dcf051bd2d05e4d822.png"
          />

          <ApplicationCard
            title="RETAIL"
            subtitle="Workplaces that work better"
            image="/assets/about/90c93904193b3102144eed3522817c9a15dbd531.png"
          />
        </div>

        {/* ================= Navigation Arrows ================= */}
        <button className="absolute left-[-0px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow flex items-center justify-center hover:bg-white transition text-sm">
          ←
        </button>

        <button className="absolute right-[-0px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 shadow flex items-center justify-center hover:bg-white transition text-sm">
          →
        </button>
      </div>
    </section>
  );
}

/* ================= Reusable Card ================= */
function ApplicationCard({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div className="relative h-[320px] overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Text */}
      <div className="absolute bottom-5 left-5 text-white">
        <h3 className="text-lg font-semibold tracking-wide">
          {title}
        </h3>
        <p className="text-xs text-white/80 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
