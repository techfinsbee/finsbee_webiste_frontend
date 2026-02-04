"use client";

import Script from "next/script";

export default function CalendlyInline() {
  return (
    <>
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Calendly Inline Widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/nikhil-finsbee/meeting-meeting"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
}
