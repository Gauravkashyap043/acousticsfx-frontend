/**
 * Google Analytics 4 (gtag.js).
 * Override with NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. another property or staging).
 */
const DEFAULT_GA_MEASUREMENT_ID = "G-4F7JEES1SP";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || DEFAULT_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js" | "set" | "consent",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function isGaEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

/** Fire a GA4 custom event (optional). */
export function gaEvent(
  action: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
}
