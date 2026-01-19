"use client";

import Image from "next/image";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    tag: "Insights",
    date: "May 30, 2025",
    title: "The Power of Restraint in Architecture",
    desc:
      "A look at how simplicity can sharpen communication, increase impact, and build longer-lasting brands.",
    image: "/blog-1.jpg",
  },
  {
    id: 2,
    tag: "Digital Architect",
    date: "May 23, 2025",
    title: "Architecting for Calm: UX Beyond the Screen",
    desc:
      "An exploration of how subtle interaction, whitespace, and visual pacing shape user emotion.",
    image: "/blog-2.jpg",
  },
  {
    id: 3,
    tag: "Strategy",
    date: "May 16, 2025",
    title: "Building a Timeless Identity",
    desc:
      "A guide to creating brands that transcend trends, focusing on core values instead.",
    image: "/blog-3.jpg",
  },
];

export default function LatestBlogs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBlog = blogs[activeIndex];
  const sideBlogs = blogs.filter((_, i) => i !== activeIndex);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % blogs.length);
  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? blogs.length - 1 : prev - 1
    );

  return (
    <section className="px-6 lg:px-[200px] py-[100px] bg-white">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <p className="text-sm mb-3">Our Latest Blogs</p>
          <h2 className="text-4xl font-bold max-w-2xl">
            A place to share knowledge about acoustic, noise & flooring
            solutions.
          </h2>
        </div>

        <button className="border px-5 py-2 text-sm h-fit">
          VIEW ALL BLOGS →
        </button>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* BIG ACTIVE CARD */}
        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[420px]">
          <Image
            src={activeBlog.image}
            alt={activeBlog.title}
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-0 p-6 text-white max-w-xl">
            <p className="text-sm mb-1">{activeBlog.date}</p>
            <h3 className="text-xl font-semibold mb-2">
              {activeBlog.title}
            </h3>
            <p className="text-sm text-white/90">
              {activeBlog.desc}
            </p>
          </div>

          {/* TAG */}
          <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full">
            {activeBlog.tag}
          </span>
        </div>

        {/* RIGHT SMALL SLIDER */}
        <div className="flex flex-col gap-6">
          {sideBlogs.map((blog) => (
            <div
              key={blog.id}
              className="cursor-pointer"
              onClick={() =>
                setActiveIndex(blogs.findIndex((b) => b.id === blog.id))
              }
            >
              <div className="relative h-[160px] rounded-xl overflow-hidden mb-3">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                <span className="absolute top-3 right-3 bg-white text-xs px-3 py-1 rounded-full">
                  {blog.tag}
                </span>
              </div>

              <p className="text-xs text-gray-500 mb-1">{blog.date}</p>
              <h4 className="font-semibold text-sm mb-1">
                {blog.title}
              </h4>
              <p className="text-sm text-gray-600">
                {blog.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <div className="flex justify-end gap-4 mt-10">
        <button
          onClick={prev}
          className="w-12 h-12 bg-gray-200 rounded-md"
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-12 h-12 bg-black text-white rounded-md"
        >
          →
        </button>
      </div>
    </section>
  );
}
