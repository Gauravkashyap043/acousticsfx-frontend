"use client";

import Image from "next/image";

export default function AcousticWhyChooseUs() {
  return (
    <section className="w-full bg-white">
      <div className="px-[100px] py-[80px]">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Why Choose Us
          </p>
          <h2 className="text-[40px] font-semibold leading-tight text-black">
            We Cut Through Noise to create architects that are thoughtful,
            timeless & Impactful.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Left Big Card */}
          <div className="col-span-4 rounded-2xl overflow-hidden border bg-gray-100">
            <div className="relative h-[280px]">
              <Image
                src="/assets/product/2c1373ceb51ef7eae4c75ffb74b3bae0b0df0911.jpg"
                alt="Precision Built"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3">
                Precision-built environments.
                Scalable solutions. Support that never sleeps.
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Collaborative Approach</li>
                <li>• Quick turnaround</li>
                <li>• Clear Communication</li>
                <li>• Consistent Quality</li>
                <li>• Reliable Support</li>
              </ul>
            </div>
          </div>

          {/* Middle Cards */}
          <div className="col-span-5 grid grid-cols-2 gap-6">

            {[
              {
                title: "Quality",
                desc: "Uncompromising craftsmanship meets lasting performance. Every detail is engineered for excellence and trust.",
              },
              {
                title: "Service",
                desc: "We deliver end-to-end acoustic, flooring, and soundproofing solutions reliable, precise, and built to last.",
              },
              {
                title: "Innovation",
                desc: "Made from the finest raw materials, our panels enhance your space with elegance while promoting healthy living.",
              },
              {
                title: "Commitment",
                desc: "We stand by every project with unwavering dedication, ensuring excellence, reliability, and lasting impact.",
              },
              {
                title: "Trustability",
                desc: "We deliver on every promise with transparency and consistency, earning confidence that lasts a lifetime.",
              },
              {
                title: "Bespoke",
                desc: "Tailored acoustic solutions designed to fit your unique space, vision, and lifestyle with precision.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border p-6 bg-white hover:shadow-md transition"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Image Card */}
          <div className="col-span-3 rounded-2xl overflow-hidden relative">
            <Image
              src="/assets/product/766649942ea2918087cc9b635609a50b03eb0d04.jpg"
              alt="Design with intent"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute bottom-6 left-6 text-white font-medium">
              Design with intent.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

