// // import { Lato } from "next/font/google";
// // import "./globals.css";
// // import ClientLayout from "./ClientLayout"; // Import client layout
// // import Script from "next/script"; // ✅ Import Next.js Script

// // const lato = Lato({
// //   weight: ["400", "700"],
// //   subsets: ["latin"],
// //   variable: "--font-lato",
// // });

// // export const metadata = {
// //   title: "FinsBee - Personal, Business, Home Loans & LAP",
// //   description:
// //     "FinsBee - Apply online for personal loan, business loan, home loan, and loan against property. Quick approval, low interest rates, flexible EMIs & 100% digital process.",
// //   keywords: [
// //     "bank loan provider",
// //     "instant personal loan",
// //     "business loan",
// //     "home loan",
// //     "loan against property",
// //     "low interest loans",
// //     "NBFC loan provider",
// //     "quick loans online",
// //     "EMI calculator",
// //     "digital personal loan",
// //     "unsecured business loan",
// //     "personal loan app",
// //   ],
// //   authors: [{ name: "FinsBee Team", url: "https://finsbee.com" }],
// //   openGraph: {
// //     title: "FinsBee - Personal, Business, Home Loans & LAP",
// //     description:
// //       "FinsBee - Apply online for personal loan, business loan, home loan, and loan against property. Quick approval, low interest rates, flexible EMIs & 100% digital process.",
// //     url: "https://finsbee.com",
// //     siteName: "Finsbee",
// //     images: [
// //       {
// //         url: "/favicon.svg",
// //         width: 800,
// //         height: 600,
// //       },
// //     ],
// //     locale: "en_US",
// //     type: "website",
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "FinsBee - Personal, Business, Home Loans & LAP",
// //     description:
// //       "FinsBee - Apply online for personal loan, business loan, home loan, and loan against property. Quick approval, low interest rates, flexible EMIs & 100% digital process.",
// //     creator: "@finsbeeteam",
// //   },
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en" className={lato.variable}>
// //       <head>
// //         {/* ✅ Google Tag (gtag.js) */}
// //         <Script
// //           async
// //           src="https://www.googletagmanager.com/gtag/js?id=G-WQ6D7665NN"
// //           strategy="afterInteractive"
// //         />
// //         <Script id="google-analytics" strategy="afterInteractive">
// //           {`
// //             window.dataLayer = window.dataLayer || [];
// //             function gtag(){dataLayer.push(arguments);}
// //             gtag('js', new Date());
// //             gtag('config', 'G-WQ6D7665NN');
// //           `}
// //         </Script>
// //       </head>

// //       <body className="relative min-h-screen">
// //         <ClientLayout>{children}</ClientLayout>
// //       </body>
// //     </html>
// //   );
// // }


// import { Lato } from "next/font/google";
// import "./globals.css";
// import Script from "next/script";
// import ClientLayout from "./ClientLayout";

// // ✅ Preload font for better CLS (Cumulative Layout Shift)
// const lato = Lato({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-lato",
//   display: "swap",
// });

// // ✅ Centralized SEO metadata
// export const metadata = {
//   title: "FinsBee - Personal, Business, Home Loans & LAP",
//   description:
//     "FinsBee - Apply online for personal, business, home loans, or loan against property. Get quick approval, low interest rates, and flexible EMIs through a 100% digital process.",
//   keywords: [
//     "personal loan", "business loan", "home loan", "loan against property",
//     "instant loan", "NBFC", "quick loan", "digital loan", "FinsBee loans"
//   ],
//   authors: [{ name: "FinsBee Team", url: "https://finsbee.com" }],
//   metadataBase: new URL("https://finsbee.com"),
//   openGraph: {
//     title: "FinsBee - Apply Online for Personal, Business & Home Loans",
//     description:
//       "Quick, affordable loans for every need — personal, business, or home. 100% digital, instant approvals.",
//     url: "https://finsbee.com",
//     siteName: "FinsBee",
//     images: [{ url: "/favicon.svg", width: 800, height: 600 }],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "FinsBee - Personal, Business, Home Loans & LAP",
//     description:
//       "Apply online for personal, business, or home loans — fast approvals, flexible EMIs, and digital processing.",
//     creator: "@finsbeeteam",
//   },
//   icons: {
//     icon: "/favicon.svg",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={lato.variable}>
//       <body className="relative min-h-screen antialiased bg-white text-black">
//         {/* ✅ Google Analytics Tag (Hydration Safe) */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-WQ6D7665NN"
//           strategy="afterInteractive"
//           async
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-WQ6D7665NN', {
//               page_path: window.location.pathname,
//             });
//           `}
//         </Script>

//         {/* ✅ Main client layout */}
//         <ClientLayout>{children}</ClientLayout>
//       </body>
//     </html>
//   );
// }


// import { Lato } from "next/font/google";
// import "./globals.css";
// import ClientLayout from "./ClientLayout";
// import AnalyticsScript from "./AnalyticsScript"; 

// const lato = Lato({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-lato",
//   display: "swap",
// });

// export const metadata = {
//   title: "FinsBee - Personal, Business, Home Loans & LAP",
//   description:
//     "FinsBee - Apply online for personal, business, home loans, or loan against property. Get quick approval, low interest rates, and flexible EMIs through a 100% digital process.",
//   keywords: [
//     "personal loan", "business loan", "home loan", "loan against property",
//     "instant loan", "NBFC", "quick loan", "digital loan", "FinsBee loans"
//   ],
//   authors: [{ name: "FinsBee Team", url: "https://finsbee.com" }],
//   metadataBase: new URL("https://finsbee.com"),
//   openGraph: {
//     title: "FinsBee - Apply Online for Personal, Business & Home Loans",
//     description:
//       "Quick, affordable loans for every need — personal, business, or home. 100% digital, instant approvals.",
//     url: "https://finsbee.com",
//     siteName: "FinsBee",
//     images: [{ url: "/favicon.svg", width: 800, height: 600 }],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "FinsBee - Personal, Business, Home Loans & LAP",
//     description:
//       "Apply online for personal, business, or home loans — fast approvals, flexible EMIs, and digital processing.",
//     creator: "@finsbeeteam",
//   },
//   icons: {
//     icon: "/favicon.svg",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={lato.variable}>
//       <body className="relative min-h-screen antialiased bg-white text-black">
//         {/* ✅ Hydration-safe analytics client component */}
//         <AnalyticsScript />

//         {/* ✅ Client layout */}
//         <ClientLayout>{children}</ClientLayout>
//       </body>
//     </html>
//   );
// }


import { Lato } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import AnalyticsScript from "./AnalyticsScript";
import GTMNoScript from "./GTMNoScript";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: "FinsBee - Personal, Business, Home Loans & LAP",
  description:
    "FinsBee - Apply online for personal, business, home loans, or loan against property. Get quick approval, low interest rates, and flexible EMIs through a 100% digital process.",
  keywords: [
    "personal loan", "business loan", "home loan", "loan against property",
    "instant loan", "NBFC", "quick loan", "digital loan", "FinsBee loans"
  ],
  authors: [{ name: "FinsBee Team", url: "https://finsbee.com" }],
  metadataBase: new URL("https://finsbee.com"),
  openGraph: {
    title: "FinsBee - Apply Online for Personal, Business & Home Loans",
    description:
      "Quick, affordable loans for every need — personal, business, or home. 100% digital, instant approvals.",
    url: "https://finsbee.com",
    siteName: "FinsBee",
    images: [{ url: "/favicon.svg", width: 800, height: 600 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinsBee - Personal, Business, Home Loans & LAP",
    description:
      "Apply online for personal, business, or home loans — fast approvals, flexible EMIs, and digital processing.",
    creator: "@finsbeeteam",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        {/* ✅ Analytics scripts in head */}
        <AnalyticsScript />
      </head>
      <body className="relative min-h-screen antialiased bg-white text-black">
        {/* ✅ GTM noscript in body */}
        <GTMNoScript />
        
        {/* ✅ Client layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}