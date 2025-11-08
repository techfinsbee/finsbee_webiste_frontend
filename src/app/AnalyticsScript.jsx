// "use client";

// import Script from "next/script";

// export default function AnalyticsScript() {
//   return (
//     <>
//       {/* ✅ Google Analytics Tag (Hydration Safe) */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-WQ6D7665NN"
//         strategy="afterInteractive"
//         async
//       />
//       <Script id="google-analytics" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-WQ6D7665NN', {
//             page_path: window.location.pathname,
//           });
//         `}
//       </Script>
//     </>
//   );
// }



"use client";

import Script from "next/script";

export default function AnalyticsScript() {
  return (
    <>
      {/* ✅ Google Tag Manager - Script inside <head> */}
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W93PH36K');
        `}
      </Script>

      {/* ✅ Google Tag Manager (noscript) - For non-JS users */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W93PH36K"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
}
