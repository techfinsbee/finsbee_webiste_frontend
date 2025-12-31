import InvestePage from "@/bl";

import React from "react";



export const metadata = {
  title: "Business loan- FinsBee",
  description:
    "Get instant business loans up to ₹50 Lakh with FinsBee. Apply online with minimal documentation, flexible repayment options, low interest rates & quick disbursal.",
  keywords: [
    "Business loan",
    "instant business loan",
    "business loan apply online",
    "low interest business loan",
    "business fast loan",
    "digital business loan",
    "business loan EMI calculator",
    "salary advance loan",
    "emergency loan",
    "business loan eligibility",
    "business loan in Delhi",
    "business loan in Mumbai",
    "business loan in Bangalore",
    "business loan in Pune",
  ],
  openGraph: {
    title: "business Loan - FinsBee",
    description:
      "Get instant business loans up to ₹50 Lakh with FinsBee. Apply online with minimal documentation, flexible repayment options, low interest rates & quick disbursal.",
    url: "https://finsbee.com/business-loan",
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
    title: "business Loan - FinsBee",
    description:
      "Get instant business loans up to ₹50 Lakh with FinsBee. Apply online with minimal documentation, flexible repayment options, low interest rates & quick disbursal.",
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
