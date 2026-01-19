import { Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import GTMNoScript from "./GTMNoScript";
import MixpanelProvider from "@/components/MixpanelProvider";

/* =============================
   FONT
============================= */
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

/* =============================
   SEO METADATA  ✅ REQUIRED
============================= */
export const metadata = {
  title: {
    default: "FinsBee – Personal, Business & Home Loans",
    template: "%s | FinsBee",
  },
  description:
    "FinsBee helps you apply online for personal, business, home loans and loan against property with instant approvals and low interest rates.",
  keywords: [
    "personal loan",
    "business loan",
    "home loan",
    "loan against property",
    "instant loan india",
    "finsbee",
  ],
  metadataBase: new URL("https://finsbee.com"),
  openGraph: {
    title: "FinsBee – Apply Online for Loans",
    description:
      "Fast, secure and digital loans for personal, business and home needs.",
    url: "https://finsbee.com",
    siteName: "FinsBee",
    images: ["/favicon.svg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinsBee – Digital Loan Platform",
    description:
      "Apply for loans online with instant approval and flexible EMIs.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

/* =============================
   ANALYTICS IDS
============================= */
const GTM_ID = "GTM-W93PH36K";
const GA_ID = "G-VFKPBY1M68";
const AHREFS_KEY = "awOZ8E3NVNTQM2Rdaja3mw";

/* =============================
   ROOT LAYOUT
============================= */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];
w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script
          id="ga4"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
            `,
          }}
        />

        {/* Ahrefs */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={AHREFS_KEY}
          async
          strategy="lazyOnload"
        />

        {/* Preload hero image */}
        <link
          rel="preload"
          as="image"
          href="/booking/home_hero_bg.avif"
          type="image/avif"
        />
      </head>

      <body className="relative min-h-screen antialiased bg-white text-black">
        <GTMNoScript />
        <MixpanelProvider>
          <ClientLayout>{children}</ClientLayout>
        </MixpanelProvider>
      </body>
    </html>
  );
}

// import { Lato } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";
// import ClientLayout from "./ClientLayout";
// import GTMNoScript from "./GTMNoScript";
// import MixpanelProvider from "@/components/MixpanelProvider";



// const lato = Lato({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-lato",
//   display: "swap",
// });

// const GTM_ID = "GTM-W93PH36K";
// const GA_ID = "G-VFKPBY1M68";
// const AHREFS_KEY = "awOZ8E3NVNTQM2Rdaja3mw";


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={lato.variable}>
//       <head>
//         {/* =============================
//             Google Tag Manager
//         ============================== */}
//         <Script
//           id="gtm"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
// (function(w,d,s,l,i){w[l]=w[l]||[];
// w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
// var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
// j.async=true;
// j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
// f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','${GTM_ID}');
//             `,
//           }}
//         />

//         {/* =============================
//             Google Analytics (GA4)
//         ============================== */}
//         <Script
//           src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
//           strategy="lazyOnload"
//         />

//         <Script
//           id="ga4"
//           strategy="lazyOnload"
//           dangerouslySetInnerHTML={{
//             __html: `
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', '${GA_ID}', {
//   page_path: window.location.pathname,
// });
//             `,
//           }}
//         />

//         {/* =============================
//             Ahrefs Analytics
//         ============================== */}
//         <Script
//           src="https://analytics.ahrefs.com/analytics.js"
//           data-key={AHREFS_KEY}
//           async
//           strategy="lazyOnload"
//         />

      


//         {/* =============================
//             Preload Hero Image
//         ============================== */}
//         <link
//           rel="preload"
//           as="image"
//           href="/booking/home_hero_bg.avif"
//           type="image/avif"
//         />
//       </head>

//       <body className="relative min-h-screen antialiased bg-white text-black">
//         {/* GTM NoScript must be FIRST */}
//         <GTMNoScript />
//        <MixpanelProvider>
//         <ClientLayout>{children}</ClientLayout>
//        </MixpanelProvider>
//       </body>
//     </html>
//   );
// }
