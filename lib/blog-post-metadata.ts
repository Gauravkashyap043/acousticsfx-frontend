import type { Metadata } from "next";
import { api } from "@/lib/api/client";
import { SITE_URL } from "@/lib/site-url";
import { SEO_KEYWORDS_BLOG_POST } from "@/lib/seo-keywords";

export async function buildBlogPostMetadata(
  slug: string,
  canonicalPath: string
): Promise<Metadata> {
  const canonical = `${SITE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  try {
    const res = await api.get<{
      success: boolean;
      blog: {
        title: string;
        excerpt?: string;
        heroImage?: string;
      };
    }>(`/api/blogs/slug/${encodeURIComponent(slug)}`);

    if (!res.success || !res.blog) {
      return {
        title: "Blog",
        alternates: { canonical },
      };
    }

    const { title, excerpt, heroImage } = res.blog;
    const description =
      excerpt && excerpt.length > 0
        ? excerpt.slice(0, 160)
        : `${title} — Expert acoustic insights from FX Acoustics India.`.slice(
            0,
            160
          );

    return {
      title,
      description,
      keywords: SEO_KEYWORDS_BLOG_POST,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: "article",
        ...(heroImage ? { images: [{ url: heroImage }] } : {}),
      },
    };
  } catch {
    return {
      title: "Blog",
      alternates: { canonical },
    };
  }
}
