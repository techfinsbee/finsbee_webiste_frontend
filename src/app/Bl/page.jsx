import React from "react";
import InvestePage from "../../Loan_Page";

// ✅ Personal Loan Metadata (as per your provided meta tags)
export const metadata = {
  title: "Personal Loan - FinsBee",
  description:
    "Get instant personal loans up to ₹50 Lakh with FinsBee. Apply online with minimal documentation, flexible repayment options, low interest rates & quick disbursal.",
  keywords: [
    "personal loan",
    "instant personal loan",
    "personal loan apply online",
    "low interest personal loan",
    "personal fast loan",
    "digital personal loan",
    "personal loan EMI calculator",
    "salary advance loan",
    "emergency loan",
    "personal loan eligibility",
    "personal loan in Delhi",
    "personal loan in Mumbai",
    "personal loan in Bangalore",
    "personal loan in Pune",
  ],
  openGraph: {
    title: "Personal Loan - FinsBee",
    description:
      "Get instant personal loans up to ₹50 Lakh with FinsBee. Apply online with minimal documentation, flexible repayment options, low interest rates & quick disbursal.",
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
    title: "Personal Loan - FinsBee",
    description:
      "Get instant personal loans up to ₹50 Lakh with FinsBee. Apply online with minimal documentation, flexible repayment options, low interest rates & quick disbursal.",
    creator: "@finsbeeteam",
  },
};

export default function Page() {
  return (
    <div>
      <InvestePage />
    </div>
  );
}
