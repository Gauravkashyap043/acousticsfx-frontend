"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Sends gtag config for client-side navigations only. The inline script’s
 * gtag('config', id) already records the first full page load.
 * Must be wrapped in <Suspense> when using useSearchParams (Next.js requirement).
 */
export function GoogleAnalyticsPageView({
  measurementId,
}: {
  measurementId: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const skipInitial = useRef(true);

  useEffect(() => {
    if (!measurementId || typeof window === "undefined" || !window.gtag) return;
    const query = searchParams?.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    if (skipInitial.current) {
      skipInitial.current = false;
      return;
    }

    window.gtag("config", measurementId, {
      page_path: path,
    });
  }, [pathname, searchParams, measurementId]);

  return null;
}
