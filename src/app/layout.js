
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
  title: "FinsBee - Personal, Business, Home Loans & LAP",
  description:
    "FinsBee - Apply online for personal loan, business loan, home loan, and loan against property. Quick approval, low interest rates, flexible EMIs & 100% digital process.",
  keywords: [
    "bank loan provider",
    "instant personal loan",
    "business loan",
    "home loan",
    "loan against property",
    "low interest loans",
    "NBFC loan provider",
    "quick loans online",
    "EMI calculator",
    "digital personal loan",
    "unsecured business loan",
    "personal loan app",
  ],
  authors: [{ name: "FinsBee Team", url: "https://finsbee.com" }],
  openGraph: {
    title: "FinsBee - Personal, Business, Home Loans & LAP",
    description:
      "FinsBee - Apply online for personal loan, business loan, home loan, and loan against property. Quick approval, low interest rates, flexible EMIs & 100% digital process.",
    url: "https://finsbee.com",
    siteName: "Finsbee",
    images: [
      {
        url: "/favicon.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinsBee - Personal, Business, Home Loans & LAP",
    description:
      "FinsBee - Apply online for personal loan, business loan, home loan, and loan against property. Quick approval, low interest rates, flexible EMIs & 100% digital process.",
    creator: "@finsbeeteam",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="relative min-h-screen ">
        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="relative w-full">{children}</main>
      </body>
    </html>
  );
}
