
// import { Lato } from "next/font/google";
// import "./globals.css";
// import { Navbar } from "@/Investment/Navbar";

// const lato = Lato({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-lato",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={lato.variable}>
//       <body className="relative min-h-screen">
//         {/* Floating Navbar */}
//         {/* <Navbar /> */}

//         {/* Page content (behind navbar) */}
//         <main className="relative z-0">{children}</main>
//       </body>
//     </html>
//   );
// }


import { Lato } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

// Global metadata for all pages (can be overridden per page)
export const metadata = {
  title: "Finsbee - Your Investment Companion",
  description: "Invest smartly with Finsbee. Check gold, silver, loans, and more.",
  keywords: ["investment", "gold", "silver", "loans", "finance"],
  authors: [{ name: "Finsbee Team", url: "https://finsbee.com" }],
  openGraph: {
    title: "Finsbee - Your Investment Companion",
    description: "Invest smartly with Finsbee. Check gold, silver, loans, and more.",
    url: "https://new.finsbee.com",
    siteName: "Finsbee",
    images: [
      {
        url: "https://new.finsbee.com/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finsbee - Your Investment Companion",
    description: "Invest smartly with Finsbee. Check gold, silver, loans, and more.",
    creator: "@finsbeeteam",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <head>
        {/* Page title and favicon */}
        <title>FinsBee - Your Investment Companion</title>
       
        <meta name="description" content="Invest smartly with Finsbee. Check gold, silver, loans, and more." />
        <meta name="keywords" content="investment,gold,silver,loans,finance" />
      </head>
      <body className="relative min-h-screen">
        {/* Floating Navbar */}
        <Navbar/>

        {/* Page content (behind navbar) */}
        <main className="relative z-0">{children}</main>
      </body>
    </html>
  );
}
