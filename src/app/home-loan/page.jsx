import InvestePage from '@/Hl'



// ✅ Home Loan Metadata
export const metadata = {
  title: "Home Loan - Finsbee",
  description:
    "Turn your dream home into reality with FinsBee home loans. Enjoy low interest rates, long tenures, flexible repayment & a 100% paperless digital process. Apply now.",
  keywords: [
    "home loan",
    "home loan EMI calculator",
    "low interest home loan",
    "instant home loan",
    "housing loan",
    "home renovation loan",
    "apply home loan online",
    "documents required for home loan",
    "bank loan provider",
  ],
  openGraph: {
    title: "Home Loan - Finsbee",
    description:
      "Turn your dream home into reality with FinsBee home loans. Enjoy low interest rates, long tenures, flexible repayment & a 100% paperless digital process. Apply now.",
    url: "https://finsbee.com/HL",
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
    title: "Home Loan - Finsbee",
    description:
      "Turn your dream home into reality with FinsBee home loans. Enjoy low interest rates, long tenures, flexible repayment & a 100% paperless digital process. Apply now.",
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

