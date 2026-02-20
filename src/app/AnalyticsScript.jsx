
// "use client";

// import Script from "next/script";

// export default function AnalyticsScript() {
//   return (
//     <>
//       {/*  Google Tag Manager */}
//       <Script id="gtm" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-W93PH36K');
//         `}
//       </Script>

//       {/* Google Analytics 4 (gtag.js) */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=G-VFKPBY1M68"
//         strategy="afterInteractive"
//       />

//       <Script id="ga4-init" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-VFKPBY1M68', {
//             page_path: window.location.pathname,
//           });
//         `}
//       </Script>

//       {/*  Ahrefs Analytics */}
//       <Script
//         src="https://analytics.ahrefs.com/analytics.js"
//         data-key="awOZ8E3NVNTQM2Rdaja3mw"
//         strategy="afterInteractive"
//         async
//       />
//     </>
//   );
// }
