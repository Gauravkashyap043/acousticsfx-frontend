"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { api } from "@/lib/api/client";

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  heroImage?: string;
  authorName: string;
  excerpt?: string;
  publishedAt?: string;
  createdAt?: string;
}

export default function FeaturedWithAllPosts() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .get<{ success: boolean; blogs: Blog[] }>("/api/blogs")
      .then((res) => {
        if (!cancelled && res.success && res.blogs) setBlogs(res.blogs);
      })
      .catch(() => {
        if (!cancelled) setBlogs([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const featured = blogs[0];
  const allPosts = blogs.slice(1, 11);

  if (loading) {
    return (
      <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-gray-500 text-center py-12">Loading posts...</div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

        {/* LEFT – FEATURED POST (first blog from API) */}
        {featured && (
          <div className="lg:col-span-2">
            <h3 className="text-[16px] worksans-font font-bold text-gray-500 mb-6">
              Featured Post
            </h3>

            <div className="bg-white">
              <Link href={`/resources/blogs/${featured.slug}`} className="block cursor-pointer">
                <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[320px] mb-6">
                  <Image
                    src={featured.heroImage || PLACEHOLDER_IMAGE}
                    alt={featured.title}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized={featured.heroImage?.startsWith("http")}
                  />
                </div>
              </Link>

              <p className="text-[14px] inter-font font-[400] text-gray-500 mb-2">
                By {featured.authorName} &nbsp;|&nbsp; {formatDate(featured.publishedAt || featured.createdAt)}
              </p>

              <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] axiforma font-bold mb-4 text-gray-900 leading-tight">
                {featured.title}
              </h2>

              {featured.excerpt && (
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] inter-font font-[400] text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              )}

              <Link
                href={`/resources/blogs/${featured.slug}`}
                className="inline-block bg-[#F59E0B] text-white px-6 py-3 text-sm font-medium hover:bg-[#d97706] transition cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </div>
        )}

        {/* RIGHT – ALL POSTS (rest of blogs from API) */}
        <div>
          <h3 className="text-[16px] worksans-font font-bold text-gray-500 mb-6">
            All Posts
          </h3>

          <div className="space-y-6">
            {allPosts.length === 0 ? (
              <p className="text-gray-500 text-sm">No other posts yet.</p>
            ) : (
              allPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/resources/blogs/${post.slug}`}
                  className="block bg-[#FFF7ED] p-4 hover:bg-[#FFEDD5] transition cursor-pointer"
                >
                  <p className="text-[12px] inter-font font-[400] text-gray-500 mb-1">
                    By {post.authorName} &nbsp;|&nbsp; {formatDate(post.publishedAt || post.createdAt)}
                  </p>

                  <h4 className="text-[14px] axiforma font-bold text-gray-900 leading-snug">
                    {post.title}
                  </h4>
                </Link>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
