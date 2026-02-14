"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { api } from "@/lib/api/client";
import { useContent } from "@/hooks/useContent";
import { HOME_LATEST_BLOGS_KEYS } from "@/lib/content/keys";

interface BlogItem {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  heroImage: string;
  authorName?: string;
  publishedAt?: string;
  createdAt?: string;
}

const FALLBACK_BLOGS: { id: string; slug: string; tag: string; date: string; title: string; desc: string; image: string }[] = [
  { id: "1", slug: "fallback-1", tag: "Insights", date: "May 30, 2025", title: "The Power of Restraint in Architecture", desc: "A look at how simplicity can sharpen communication.", image: "/assets/home/Container2.png" },
  { id: "2", slug: "fallback-2", tag: "Digital Architect", date: "May 23, 2025", title: "Architecting for Calm: UX Beyond the Screen", desc: "An exploration of how subtle interaction shapes user emotion.", image: "/assets/home/Container.png" },
  { id: "3", slug: "fallback-3", tag: "Strategy", date: "May 16, 2025", title: "Building a Timeless Identity", desc: "A guide to creating brands that transcend trends.", image: "/assets/home/Container3.png" },
];

export default function LatestBlogs() {
  const { get } = useContent(HOME_LATEST_BLOGS_KEYS);
  const sectionHeading = get("home.latestBlogs.heading");
  const sectionSubheading = get("home.latestBlogs.subheading");
  const ctaLabel = get("home.latestBlogs.ctaLabel");
  const [blogs, setBlogs] = useState<{ id: string; slug: string; tag: string; date: string; title: string; desc: string; image: string }[]>(FALLBACK_BLOGS);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    api
      .get<{ success: boolean; blogs: BlogItem[] }>("/api/blogs")
      .then((res) => {
        if (res?.success && res.blogs?.length > 0) {
          setBlogs(
            res.blogs.slice(0, 9).map((b) => ({
              id: b._id,
              slug: b.slug,
              tag: b.tags?.[0] ?? "Blog",
              date: b.publishedAt ? new Date(b.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : b.createdAt ? new Date(b.createdAt).toLocaleDateString() : "",
              title: b.title,
              desc: b.excerpt ?? "",
              image: b.heroImage || "/assets/home/Container2.png",
            }))
          );
        }
      })
      .catch(() => {});
  }, []);

  const activeBlog = blogs[activeIndex];
  if (!activeBlog) return null;

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % blogs.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? blogs.length - 1 : prev - 1
    );

  return (
    <section className="px-6 sm:px-10 lg:px-[100px] py-[80px] lg:py-[100px] bg-white">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
        <div>
          <p className="text-[16px] font-bold mb-3 worksans-font">
            {sectionHeading}
          </p>

          <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] axiforma font-bold max-w-2xl">
            {sectionSubheading}
          </h2>
        </div>

        <Link href="/resources?tab=blogs" className="border px-5 py-2 text-sm h-fit inline-block">
          {ctaLabel}
        </Link>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ACTIVE SLIDE (ALL SCREENS) */}
        <div className="relative rounded-2xl overflow-hidden h-[320px] sm:h-[380px] lg:h-[420px]">
          <Image
            src={activeBlog.image}
            alt={activeBlog.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-0 p-4 sm:p-6 text-white max-w-xl">
            <p className="text-[14px] font-[400] mb-1 inter-font">
              {activeBlog.date}
            </p>
            <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold mb-2 inter-font">
              {activeBlog.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-white/90 inter-font font-[500]">
              {activeBlog.desc}
            </p>
          </div>

          <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full">
            {activeBlog.tag}
          </span>
        </div>

        {/* ================= SIDE BLOGS (DESKTOP ONLY) ================= */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {blogs
            .filter((_, i) => i !== activeIndex)
            .map((blog) => (
              <Link
                key={blog.id}
                href={`/resources/blogs/${blog.slug}`}
                className="cursor-pointer block"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(blogs.findIndex((b) => b.id === blog.id));
                }}
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

                <p className="text-xs text-gray-500 mb-1">
                  {blog.date}
                </p>
                <h4 className="font-semibold text-sm mb-1">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {blog.desc}
                </p>
              </Link>
            ))}
        </div>
      </div>

      {/* ================= ARROWS ================= */}
      <div className="flex justify-center lg:justify-end gap-4 mt-10">
        <button
          onClick={prev}
          className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center"
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
          onClick={next}
          className="w-12 h-12 bg-black rounded-md flex items-center justify-center"
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
