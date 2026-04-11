import Script from "next/script";
import { Suspense } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";
import { GoogleAnalyticsPageView } from "./GoogleAnalyticsPageView";

/**
 * Google tag (gtag.js) — matches the snippet from Analytics, plus App Router page views on navigation.
 */
export function GoogleAnalytics() {
  const id = GA_MEASUREMENT_ID;
  if (!id) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsPageView measurementId={id} />
      </Suspense>
    </>
  );
}
