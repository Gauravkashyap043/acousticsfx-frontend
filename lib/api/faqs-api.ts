import { api } from "./client";

export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  order?: number;
  isPublished?: boolean;
}

interface FaqListResponse {
  faqs: FaqItem[];
}

export async function getFaqs(): Promise<FaqItem[]> {
  const data = await api.get<FaqListResponse>("/api/faqs");
  return data.faqs ?? [];
}
