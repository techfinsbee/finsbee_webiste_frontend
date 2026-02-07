// app/[loan]/page.jsx
import { Suspense } from "react";
import DynamicLoanPage from "./DynamicLoanPage";
import Frame from "@/components/footer/Fram";
import { notFound } from "next/navigation";
import { getLoanBySlug } from "@/app/lib/getLoanBySlug";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const loanSlug = resolvedParams.loan;

  const loan = await getLoanBySlug(loanSlug);

  if (!loan) {
    return {
      title: "Page Not Found - Finsbee",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${loan.title} - Finsbee`,
    description:
      loan.heroDescription ||
      `Apply for ${loan.title.toLowerCase()} with quick approval at Finsbee`,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://admin.finsbee.com/api/loans");
  const json = await res.json();

  return json.data.map((loan) => ({
    loan: loan.slug,
  }));
}

export default async function LoanPage({ params }) {
  const resolvedParams = await params;
  const loanSlug = resolvedParams.loan;

  const loanData = await getLoanBySlug(loanSlug);

  if (!loanData) notFound();

  return (
    <>
      <Suspense fallback={null}>
        <DynamicLoanPage loanData={loanData} loanSlug={loanSlug} />
      </Suspense>
      <Frame />
    </>
  );
}
