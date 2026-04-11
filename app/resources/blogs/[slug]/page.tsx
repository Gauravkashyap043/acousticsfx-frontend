import type { Metadata } from "next";
import BlogSlugClient from "./BlogSlugClient";
import { buildBlogPostMetadata } from "@/lib/blog-post-metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return buildBlogPostMetadata(slug, `/resources/blogs/${slug}`);
}

export default function BlogSlugPage({ params }: Props) {
  return <BlogSlugClient params={params} />;
}
