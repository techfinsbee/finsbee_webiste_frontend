

// app/[loan]/page.jsx   ← Server Component (NO "use client")
import { Suspense } from "react";
import DynamicLoanPage from "./DynamicLoanPage";
import Frame from "@/components/footer/Fram";
import { loansData } from "@/data/loansData";
import { notFound } from "next/navigation";


// Dynamic metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;       
  const loanSlug = resolvedParams.loan;

  const loan = loansData[loanSlug];
  if (!loan) {
  return {
    title: "Page Not Found - Finsbee",
    description: "The requested loan page does not exist.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

  const formattedTitle = loan.title || loanSlug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const ogImage = loan.ogImage || "/og-default.jpg";

  return {
    title: `${formattedTitle} - Finsbee`,
    description: loan.seoDescription || `Apply for ${formattedTitle.toLowerCase()} with quick approval and low rates at Finsbee.`,
    keywords: loan.seoKeywords || [`${formattedTitle.toLowerCase()}`, "finsbee loan", "instant loan india"],
    openGraph: {
      title: `${formattedTitle} - Finsbee`,
      description: loan.seoDescription,
      url: `https://finsbee.com/${loanSlug}`,
      siteName: "Finsbee",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${formattedTitle} Offer`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} - Finsbee`,
      description: loan.seoDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://finsbee.com/${loanSlug}`,
    },
  };
}

// Pre-render all loan pages
export async function generateStaticParams() {
  return Object.keys(loansData).map((slug) => ({
    loan: slug,
  }));
}

// Page component
export default async function LoanPage({ params }) {
  const resolvedParams = await params;
  const loanSlug = resolvedParams.loan;

  if (!loansData[loanSlug]) {
    notFound(); 
  }

  return (
    <>
     <Suspense fallback={null}>
      <DynamicLoanPage loanSlug={loanSlug} />
      </Suspense>
      <Frame />
      
    </>
  );
}
