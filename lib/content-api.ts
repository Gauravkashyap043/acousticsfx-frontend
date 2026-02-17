import { api } from "./api/client";

export type ContentMap = Record<string, { value: string; type?: string }>;

export async function fetchContent(keys: string[]): Promise<ContentMap> {
  if (keys.length === 0) return {};
  return api.get<ContentMap>(`/api/content?keys=${keys.join(",")}`);
}
