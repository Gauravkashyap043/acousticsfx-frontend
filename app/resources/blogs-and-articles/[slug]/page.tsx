import type { Metadata } from "next";
import BlogsArticlesSlugClient from "./BlogsArticlesSlugClient";
import { buildBlogPostMetadata } from "@/lib/blog-post-metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return buildBlogPostMetadata(slug, `/resources/blogs-and-articles/${slug}`);
}

export default function BlogsArticlesSlugPage({ params }: Props) {
  return <BlogsArticlesSlugClient params={params} />;
}
