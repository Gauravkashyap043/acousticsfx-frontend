"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials-api";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchTestimonials()
      .then((data) => {
        if (!cancelled) setTestimonials(data);
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to load");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () =>
    setIndex((i) => Math.min(i + 1, Math.max(0, testimonials.length - 1)));

  if (loading) {
    return (
      <section className="px-6 sm:px-10 lg:px-[100px] py-[80px] lg:py-[100px] bg-white relative">
        <h2 className="text-left lg:text-center text-[32px] sm:text-[44px] lg:text-[60px] inter-font font-bold mb-12 lg:mb-16">
          Loved by the world&apos;s best teams
        </h2>
        <p className="text-gray-500 text-center">Loading testimonials…</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 sm:px-10 lg:px-[100px] py-[80px] lg:py-[100px] bg-white relative">
        <h2 className="text-left lg:text-center text-[32px] sm:text-[44px] lg:text-[60px] inter-font font-bold mb-12 lg:mb-16">
          Loved by the world&apos;s best teams
        </h2>
        <p className="text-gray-500 text-center">{error}</p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const cardWidth = 420;
  return (
    <section className="px-6 sm:px-10 lg:px-[100px] py-[80px] lg:py-[100px] bg-white relative">

      {/* HEADING */}
      <h2 className="text-left lg:text-center text-[32px] sm:text-[44px] lg:text-[60px] inter-font font-bold mb-12 lg:mb-16">
        Loved by the world&apos;s best teams
      </h2>

      {/* SLIDER */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 sm:gap-8 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * cardWidth}px)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item._id}
              className="min-w-[300px] sm:min-w-[340px] lg:min-w-[380px] border rounded-2xl p-6 sm:p-7 lg:p-8 bg-white"
            >
              {/* COMPANY LOGO */}
              {item.companyLogo && (
                <div className="relative w-[160px] sm:w-[180px] lg:w-[200px] h-[60px] sm:h-[70px] lg:h-[80px] mb-6">
                  <Image
                    src={item.companyLogo}
                    alt={item.company}
                    fill
                    className="object-contain"
                    unoptimized={item.companyLogo.startsWith("http")}
                  />
                </div>
              )}

              {/* TEXT */}
              <p className="text-gray-600 mb-10 leading-relaxed text-left">
                &quot;{item.text}&quot;
              </p>

              {/* USER */}
              <div className="flex items-center gap-4 text-left">
                {item.avatar && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized={item.avatar.startsWith("http")}
                    />
                  </div>
                )}
                <div className="text-left min-w-0">
                  <p className="font-medium text-sm text-left">
                    {item.name}
                  </p>
                  {item.role && (
                    <p className="text-xs text-gray-500 text-left">
                      {item.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          type="button"
          onClick={prev}
          disabled={testimonials.length <= 1}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-gray-300 rounded-md flex items-center justify-center hover:opacity-80 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image
            src="/assets/home/universalvector.svg"
            alt="Previous"
            width={34}
            height={14}
            className="rotate-180"
          />
        </button>

        <button
          type="button"
          onClick={next}
          disabled={testimonials.length <= 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-md flex items-center justify-center hover:opacity-80 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image
            src="/assets/home/universalvector.svg"
            alt="Next"
            width={34}
            height={14}
            className="invert"
          />
        </button>
      </div>
    </section>
  );
}
