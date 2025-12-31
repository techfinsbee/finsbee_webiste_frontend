
import InvestePage from '@/LAP'


export const metadata = {
  title: "Loan Against Property - Finsbee",
  description:
    "Get high-value funding with FinsBee Loan Against Property. Unlock funds without selling your property, with attractive interest rates & flexible EMIs. Apply online today.",
  keywords: [
    "loan against property",
    "LAP loan",
    "loan against property eligibility",
    "loan against property interest rate",
    "loan against property EMI calculator",
    "mortgage loan",
    "property loan",
    "NBFC loan provider",
  ],
  openGraph: {
    title: "Loan Against Property - Finsbee",
    description:
      "Get high-value funding with FinsBee Loan Against Property. Unlock funds without selling your property, with attractive interest rates & flexible EMIs. Apply online today.",
    url: "https://finsbee.com/LAP",
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
    title: "Loan Against Property - Finsbee",
    description:
      "Get high-value funding with FinsBee Loan Against Property. Unlock funds without selling your property, with attractive interest rates & flexible EMIs. Apply online today.",
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
