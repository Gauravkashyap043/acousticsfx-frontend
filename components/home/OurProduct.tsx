"use client";

import Image from "next/image";
import { useRef } from "react";

/* 🔹 PRODUCT DATA (HAR SLIDE KI ALAG IMAGE) */
const products = [
  {
    id: 1,
    title: "Slat",
    image: "/assets/home/homeone.png",
  },
  {
    id: 2,
    title: "Wave Panel",
    image: "/assets/home/hometwo.png",
  },
  {
    id: 3,
    title: "Groove Panel",
    image: "/assets/home/homethree.png",
  },
];

export default function ProductsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <section className="py-[100px] bg-[#F5F5F5] overflow-hidden">

      {/* TOP CONTENT */}
      <div className="px-[200px] mb-12">
        <div className="flex justify-between items-start">
          <div className="max-w-3xl">
            <p className="text-sm mb-3">Our Products</p>

            <h2 className="text-4xl font-bold leading-tight mb-4">
              We Cut Through Noise to create architects
              <br />
              that are thoughtful, timeless & Impactful.
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              Our inspired solutions have helped shape modern acoustic design.
              Alluring spaces, internationally recognised for their architectural
              elegance and exceptional sound management live here.
            </p>

            <div className="flex gap-3">
              <button className="bg-[#1F6775] text-white px-4 py-2 text-xs">
                ACOUSTIC SOLUTION
              </button>
              <button className="border px-4 py-2 text-xs">
                FLOORING SOLUTION
              </button>
              <button className="border px-4 py-2 text-xs">
                SOUND PROOFING SOLUTION
              </button>
            </div>
          </div>

          <button className="border px-5 py-2 text-xs h-fit">
            VIEW ALL PRODUCTS →
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="relative pl-[200px]">

        {/* TRACK */}
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[575px] bg-white"
            >
              {/* IMAGE */}
              <div className="relative w-[575px] h-[392px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-6 text-center">
                <h3 className="text-lg font-semibold mb-3">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6 max-w-[520px] mx-auto">
                  Acoustic wall panels made of wood stops reverberation and spreading
                  sound waves better than panels made of steel and glass or concrete.
                </p>

                <div className="flex justify-center gap-10 mb-6 text-xs text-gray-600">
                  <div>
                    <p className="uppercase text-[10px] mb-1">Category</p>
                    <p className="font-medium">Slats</p>
                  </div>

                  <div>
                    <p className="uppercase text-[10px] mb-1">Fire Rating</p>
                    <p className="font-medium">Group 1, 2 or 3</p>
                  </div>

                  <div>
                    <p className="uppercase text-[10px] mb-1">Sound Profile</p>
                    <p className="font-medium">NRC – 0.75</p>
                  </div>
                </div>

                <button className="border border-orange-500 text-orange-500 px-6 py-2 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE ARROWS */}
        <div className="flex justify-center gap-8 mt-10">
          <button
            onClick={scrollLeft}
            className="flex items-center justify-center"
          >
            <Image
              src="/assets/home/Vector.svg"
              alt="Previous"
              width={10}
              height={10}
              className="rotate-180 block"
            />
          </button>

          <button
            onClick={scrollRight}
            className="flex items-center justify-center"
          >
            <Image
              src="/assets/home/Vector.svg"
              alt="Next"
              width={10}
              height={10}
              className="block"
            />
          </button>
        </div>


      </div>
    </section>
  );
}
