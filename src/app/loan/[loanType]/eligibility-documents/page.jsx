// import EligibilityDocumentsUI from "@/components/loan/EligibilityDocumentsUI";
// import { notFound } from "next/navigation";
// import { loanEligibilityDocuments} from "@/data/loanEligibilityDocuments";


// export default function Page({ params }) {
//   const { loanType } = params;

//   const data = loanEligibilityDocuments[loanType];
//   if (!data) return notFound();

//   // 👇 Flatten documents for UI compatibility
//   const documents = {
//     salaried: data.documents.salaried || {},
//     selfEmployed: data.documents.selfEmployed || {},
//   };

//   return (
//     <EligibilityDocumentsUI
//       eligibility={data.eligibility}
//       documents={documents}
//     />
//   );
// }



import { notFound } from "next/navigation";
import { loanEligibilityDocuments } from "@/data/loanEligibilityDocuments";
import EligibilityDocumentsUI from "@/components/loan/EligibilityDocumentsUI";

export default async function Page({ params }) {
  const { loanType } = await params; // ✅ FIXED

  const data = loanEligibilityDocuments[loanType];
  if (!data) return notFound();

  return (
    <EligibilityDocumentsUI
      eligibility={data.eligibility}
      documents={data.documents}
    />
  );
}
