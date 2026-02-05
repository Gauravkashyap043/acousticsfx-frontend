"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { slugify } from '@/lib/utils';
import { api } from "@/lib/api/client";

// Placeholder image as data URI
const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%239ca3af'%3ENo Image%3C/text%3E%3C/svg%3E";

// Blog interface matching the API response
interface Blog {
  _id: string;
  title: string;
  slug: string;
  heroImage: string;
  authorName: string;
  authorImage?: string;
  excerpt?: string;
  tags?: string[];
  publishedAt?: string;
  createdAt?: string;
}

export default function LatestPosts() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Image error tracking
  const [imgErrors, setImgErrors] = useState<Record<number, { post: boolean; author: boolean }>>({});

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      // Fetch all published blogs for the main listing page
      // To limit results, use: `/api/blogs?recent=true&limit=10`
      const response = await api.get<{ success: boolean; blogs: Blog[] }>("/api/blogs");
      if (response.success && response.blogs) {
        setBlogs(response.blogs);
        // Initialize image error tracking for first 9 posts only
        const initial: Record<number, { post: boolean; author: boolean }> = {};
        for (let i = 0; i < Math.min(9, response.blogs.length); i++) {
          initial[i] = { post: false, author: false };
        }
        setImgErrors(initial);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (postIdx: number, type: 'post' | 'author') => {
    setImgErrors(prev => ({
      ...prev,
      [postIdx]: {
        ...prev[postIdx],
        [type]: true
      }
    }));
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="w-full py-5 md:py-12 pb-5 md:pb-12">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <h2
          className="mb-6"
          style={{
            fontFamily: 'Lora',
            fontWeight: 700,
            fontSize: '24.24px',
            lineHeight: '33.66px',
            color: '#1C1C1C'
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Latest Post
        </h2>

        {/* GRID */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-500">Loading blogs...</div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-500">No blog posts available</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 9).map((blog, idx) => {
              const blogSlug = blog.slug || slugify(blog.title);
              return (
                <Link
                  key={blog._id}
                  href={`/resources/blogs-and-articles/${blogSlug}`}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4 block"
                  data-aos="fade-up"
                  data-aos-delay={200 + (idx * 100)}
                >
                  {/* IMAGE */}
                  <Image
                    src={imgErrors[idx]?.post ? PLACEHOLDER_IMAGE : blog.heroImage}
                    width={400}
                    height={250}
                    alt={blog.title}
                    className="rounded-lg w-full h-[200px] object-cover"
                    onError={() => handleImageError(idx, 'post')}
                  />

                  {/* TAG */}
                  {blog.tags && blog.tags.length > 0 ? (
                    <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
                      {blog.tags[0]}
                    </span>
                  ) : (
                    <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-md mt-3 inline-block">
                      Article
                    </span>
                  )}

                  {/* TITLE */}
                  <h3
                    className="mt-3"
                    style={{
                      fontFamily: 'Lora',
                      fontWeight: 700,
                      fontSize: '20.01px',
                      lineHeight: '27.79px',
                      color: '#1C1C1C'
                    }}
                  >
                    {blog.title}
                  </h3>

                  {/* AUTHOR ROW */}
                  <div className="flex items-center gap-2 mt-4">
                    {blog.authorImage ? (
                      <Image
                        src={imgErrors[idx]?.author ? PLACEHOLDER_IMAGE : blog.authorImage}
                        width={28}
                        height={28}
                        alt={blog.authorName}
                        className="rounded-full object-cover"
                        onError={() => handleImageError(idx, 'author')}
                      />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                        {blog.authorName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <p className="text-[12px] pp-400 text-gray-700">{blog.authorName}</p>
                    {(blog.publishedAt || blog.createdAt) && (
                      <>
                        <span className="text-gray-400 text-[12px]">•</span>
                        <p className="text-[12px] pp-400 text-gray-500">
                          {formatDate(blog.publishedAt || blog.createdAt)}
                        </p>
                      </>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
