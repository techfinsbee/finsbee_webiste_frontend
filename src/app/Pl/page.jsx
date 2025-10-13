import PL_EMI from "@/Emi_Pages/PL_EMI";
import React from "react";


// ✅ Static metadata (works now, can be extended to dynamic later)
export const metadata = {
  title: "Personal Loan - Finsbee",
  description:
    "Explore the best personal loan offers with Finsbee. Compare benefits, eligibility, and apply smartly.",
  keywords: ["personal loan", "loan offers", "Finsbee finance"],
  openGraph: {
    title: "Personal Loan - Finsbee",
    description:
      "Explore the best personal loan offers with Finsbee. Compare benefits, eligibility, and apply smartly.",
    url: "https://new.finsbee.com/personalloan",
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
    title: "Personal Loan - Finsbee",
    description:
      "Explore the best personal loan offers with Finsbee. Compare benefits, eligibility, and apply smartly.",
    creator: "@finsbeeteam",
  },
};

export default function Page() {
  return (
    <div>
      <PL_EMI/>
    </div>
  );
}
