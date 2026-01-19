"use client";

export default function ApplicationsSection() {
  return (
    <section className="relative px-[200px] py-[100px] bg-white">
      {/* ================= Heading ================= */}
      <div className="flex justify-between items-start mb-12">
        <h2 className="text-4xl font-semibold text-[#111]">
          Our Applications
        </h2>

        <p className="text-gray-600 max-w-xl leading-relaxed">
          FX Acoustics solutions blend performance with aesthetics,
          transforming offices, hospitality, education, and residences.
          From clarity in boardrooms to comfort at home, we craft acoustic
          experiences people truly love.
        </p>
      </div>

      {/* ================= Cards ================= */}
      <div className="relative">
        <div className="grid grid-cols-3 gap-8">
          {/* Card 1 */}
          <ApplicationCard
            title="OFFICES"
            subtitle="Workplaces that work better"
            image="/app-office.jpg"
          />

          {/* Card 2 */}
          <ApplicationCard
            title="EDUCATION"
            subtitle="Create spaces to inspire"
            image="/app-education.jpg"
          />

          {/* Card 3 */}
          <ApplicationCard
            title="RETAIL"
            subtitle="Workplaces that work better"
            image="/app-retail.jpg"
          />
        </div>

        {/* ================= Navigation Arrows ================= */}
        <button className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
          ←
        </button>

        <button className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow flex items-center justify-center hover:bg-gray-100 transition">
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
    <div className="relative h-[360px] overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Text */}
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-xl font-semibold tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-white/80 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

