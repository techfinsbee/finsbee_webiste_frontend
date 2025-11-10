"use client";

import Script from "next/script";

export default function AnalyticsScript() {
  return (
    <>
      {/* ✅ Google Analytics 4 (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VFKPBY1M68"
        strategy="afterInteractive"
      />

      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VFKPBY1M68', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
