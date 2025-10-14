
import InvestePage from "@/Loan_Page";
import React from "react";


export const metadata = {
  title: "Personal Loan - Finsbee",
  description:
    "Explore the best personal loan offers with Finsbee. Compare benefits, eligibility, and apply smartly.",
  keywords: ["personal loan", "loan offers", "Finsbee finance"],
  openGraph: {
    title: "Personal Loan - Finsbee",
    description:
      "Explore the best personal loan offers with Finsbee. Compare benefits, eligibility, and apply smartly.",
    url: "https://finsbee.com/Pl",
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
    title: "Personal Loan - Finsbee",
    description:
      "Explore the best personal loan offers with Finsbee. Compare benefits, eligibility, and apply smartly.",
    creator: "@finsbeeteam",
  },
};

export default function Page() {
  return (
    <div>
     <InvestePage/>
    </div>
  );
}
