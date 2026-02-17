import { api } from "./api/client";

export interface BlogSummary {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  heroImage: string;
  tags?: string[];
  publishedAt?: string;
  createdAt?: string;
}

interface BlogsResponse {
  success: boolean;
  blogs: BlogSummary[];
}

export async function fetchLatestBlogs(limit = 3): Promise<BlogSummary[]> {
  const data = await api.get<BlogsResponse>(`/api/blogs?limit=${limit}`);
  return data.blogs ?? [];
}
