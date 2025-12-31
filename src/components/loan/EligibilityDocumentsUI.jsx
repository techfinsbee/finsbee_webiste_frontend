

// "use client";

// import Eligibility from "./Eligibility";
// import DocumentRequired from "./DocumentRequired";
// import PageHero from "@/components/common/PageHero";

// const EligibilityDocumentsUI = ({ eligibility, documents }) => {
//   return (
//     <div className="relative">

//       {/* HERO */}
//       <PageHero
//         title="Eligibility & Document Requirements"
//         bgImage="/loan_Page/hero-bg.jpg"
//         // abstractImage="/loan_Page/abstract.png"
//       />

//       {/* FLOATING CONTENT */}
//       <div className="relative z-20 -mt-20 sm:-mt-35 md:-mt-40">
        
//         {/* Eligibility Card */}
//         <Eligibility data={eligibility} />

//         {/* Divider */}
//         <div className="w-full flex justify-center px-4 md:px-[136px] my-10">
//           <hr className="border-t-2 w-[300px] border-gray-300" />
//         </div>

//         {/* Documents Card */}
//         <DocumentRequired data={documents} />
//       </div>
//     </div>
//   );
// };

// export default EligibilityDocumentsUI;




"use client";

import { usePathname } from "next/navigation";
import Eligibility from "./Eligibility";
import DocumentRequired from "./DocumentRequired";
import PageHero from "@/components/common/PageHero";
import { LOAN_SLUG_TO_NAME } from "../Navbar_Component/Nav";
import Frame from "../footer/Fram";

const EligibilityDocumentsUI = ({ eligibility, documents }) => {
  const pathname = usePathname();

  /**
   * Expected route format:
   * /loan/{loan-slug}/eligibility-documents
   */
  const loanSlug = pathname.split("/")[2]; // ✅ always safe for /loan/*
  const loanName = LOAN_SLUG_TO_NAME[loanSlug];

  const title = loanName
    ? `Eligibility & Document Requirements For ${loanName}`
    : "Eligibility & Document Requirements";

  return (
    <div className="relative">
      <PageHero
        title={title}
        bgImage="/landing_page/bgg.webp"
      />

      <div className="relative z-20 -mt-15 sm:-mt-30 md:-mt-45">
        <Eligibility data={eligibility} />

        <div className="w-full flex justify-center px-4 md:px-[136px] my-10">
          <hr className="border-t-2 w-[300px] border-gray-300" />
        </div>

        <DocumentRequired data={documents} />
      </div>
      <Frame/>
    </div>
  );
};

export default EligibilityDocumentsUI;
