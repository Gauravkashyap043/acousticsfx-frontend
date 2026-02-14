/**
 * Content API: fetch key-value content from backend GET /api/content?keys=...
 */

const raw = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
const API_BASE = raw.replace(/\/$/, "");

export type ContentEntry = { value: string; type?: string };
export type ContentMap = Record<string, ContentEntry>;

export async function fetchContentByKeys(
  keys: readonly string[]
): Promise<ContentMap> {
  if (keys.length === 0) return {};
  const query = keys.join(",");
  const url = `${API_BASE.replace(/\/$/, "")}/api/content?keys=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? res.statusText);
  }
  return res.json() as Promise<ContentMap>;
}
