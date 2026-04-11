"use client";

import React, { useState, useEffect } from "react";
import { use } from "react";
import { BlogDetailLayout } from "@/components/resources";
import BlogDetailHero from "@/components/resources/BlogDetailHero";
import Testimonials from "@/components/home/Testimonials";
import ConnectWithExperts from "@/components/home/ConnectWithExperts";
import { api } from "@/lib/api/client";

interface BlogSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Blog {
  title: string;
  heroImage?: string;
}

export default function BlogsArticlesSlugClient({ params }: BlogSlugPageProps) {
  const { slug } = use(params);
  const [blogTitle, setBlogTitle] = useState<string | null>(null);
  const [blogHeroImage, setBlogHeroImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await api.get<{ success: boolean; blog: Blog }>(
          `/api/blogs/slug/${slug}`
        );
        if (response.success && response.blog) {
          setBlogTitle(response.blog.title);
          setBlogHeroImage(response.blog.heroImage || null);
        }
      } catch (err) {
        console.error("Failed to fetch blog data:", err);
      }
    };

    if (slug) {
      fetchBlogData();
    }
  }, [slug]);

  return (
    <>
      <BlogDetailHero
        blogTitle={blogTitle || undefined}
        heroImage={blogHeroImage || undefined}
      />

      <div className="relative z-10">
        <BlogDetailLayout slug={slug} />
      </div>

      <Testimonials />
      <ConnectWithExperts />
    </>
  );
}
