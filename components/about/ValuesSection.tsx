"use client";

import {
  ShieldCheck,
  Rocket,
  Users,
  HeartHandshake,
  Leaf,
  Star,
} from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="px-[200px] py-[100px] bg-white">
      {/* ================= Heading ================= */}
      <div className="max-w-3xl mb-20">
        <p className="text-sm text-gray-500 mb-4">Our Values</p>

        <h2 className="text-4xl font-semibold text-[#111] leading-tight">
          We Build Values That Are Timeless, Thoughtful & Impactful.
        </h2>
      </div>

      {/* ================= Values Grid ================= */}
      <div className="grid grid-cols-3 gap-y-20 gap-x-16">
        {/* Card 1 */}
        <ValueCard
          icon={<ShieldCheck size={28} />}
          title="Integrity"
          text="We uphold the highest standards of honesty and transparency, ensuring trust in every solution we deliver."
        />

        {/* Card 2 */}
        <ValueCard
          icon={<Rocket size={28} />}
          title="Innovation"
          text="We constantly push boundaries, blending advanced acoustics with design thinking to deliver future-ready solutions."
        />

        {/* Card 3 */}
        <ValueCard
          icon={<Users size={28} />}
          title="Collaboration"
          text="We work hand-in-hand with architects, designers, and clients, creating solutions that thrive on shared vision."
        />

        {/* Card 4 */}
        <ValueCard
          icon={<HeartHandshake size={28} />}
          title="Customer-centric"
          text="We place our clients at the heart of every solution, designing experiences that reflect their needs and aspirations."
        />

        {/* Card 5 */}
        <ValueCard
          icon={<Leaf size={28} />}
          title="Sustainability"
          text="We design solutions that respect the environment, balancing performance with responsibility for a greener future."
        />

        {/* Card 6 */}
        <ValueCard
          icon={<Star size={28} />}
          title="Excellence"
          text="We strive for the highest standards in every detail, delivering acoustic solutions that set benchmarks in quality and design."
        />
      </div>
    </section>
  );
}

/* ================= Reusable Card ================= */
function ValueCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="text-orange-500 mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-[#111] mb-3">{title}</h3>

      <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
        {text}
      </p>
    </div>
  );
}
