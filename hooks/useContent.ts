"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchContentByKeys } from "@/lib/content/api";
import { CONTENT_DEFAULTS } from "@/lib/content/defaults";

export type ContentMap = Record<string, { value: string; type?: string }>;

/**
 * Fetches content by keys. Returns key-value map; use get() helper for fallback.
 */
export function useContent(keys: readonly string[]) {
  const q = useQuery({
    queryKey: ["content", [...keys]],
    queryFn: () => fetchContentByKeys(keys),
    staleTime: 2 * 60 * 1000,
  });

  const data = q.data ?? {};

  /** Get value for key with optional fallback (defaults to CONTENT_DEFAULTS[key]). */
  function get(key: string, fallback?: string): string {
    const v = data[key]?.value;
    if (v != null && v !== "") return v;
    return fallback ?? CONTENT_DEFAULTS[key] ?? "";
  }

  return {
    data,
    isLoading: q.isLoading,
    isError: q.isError,
    error: q.error,
    get,
  };
}
