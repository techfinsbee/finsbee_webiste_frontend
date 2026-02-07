// "use client";

// import { useRouter } from "next/navigation";
// import MainContent from "./components/MainContent";
// import TableSection from "./components/TableSection";
// import EmiCalculator from "./components/EmiCalculator";
// import LoanCalculatorButtons from "./components/Buttons";
// import Frame from "@/components/footer/Fram";
// // import { emiData } from "@/data/emiData";


// // export default function EmiPage({ emi }) {

// //   const data = emiData[emi];
// export default function EmiPage({ data }) {
//     const router = useRouter();
//   if (!data) return null;

//   return (
//     <div className="flex flex-col relative">

//       {/* HERO */}
//       <div
//         className="flex flex-col h-[33rem] md:h-[48rem] lg:h-[600px]
//         pt-20 sm:pt-28 md:pt-40
//         rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[120px]"
//         style={{
//           background: `
//             radial-gradient(100% 100% at 50% 100%, rgba(89,46,255,1), rgba(49,25,140,0.7)),
//             url(${data.backgroundImage}) center/cover
//           `,
//         }}
//       >
//         <MainContent
//           title={data.title}
//           description={data.description}
//           features={data.features}
//         />
//       </div>

//       {/* EMI CALCULATOR */}
//       <div className="lg:px-[156px] w-full -mt-20">
//         <EmiCalculator applyRoute={data.applyRoute} />
//       </div>

//       {/* BANK + NBFC TABLES */}
//       <TableSection
//         bankTableHeading={data.bankTableHeading}
//         nbfcTableHeading={data.nbfcTableHeading}
//         // loanLabel={data.loanLabel}
//         bankData={data.bankData}
//         nbfcData={data.nbfcData}
//       />

//       {/* OTHER EMI BUTTONS */}
//       <LoanCalculatorButtons currentEmi={emi} />

//       <Frame />
//     </div>
//   );
// }


"use client";

import MainContent from "./components/MainContent";
import TableSection from "./components/TableSection";
import EmiCalculator from "./components/EmiCalculator";
import LoanCalculatorButtons from "./components/Buttons";
import Frame from "@/components/footer/Fram";

export default function EmiPage({ data, allPages }) {
  if (!data) return null;

  return (
    <div className="flex flex-col relative">

      {/* HERO */}
      <div
        className="flex flex-col h-[33rem] md:h-[48rem] lg:h-[600px]
        pt-20 sm:pt-28 md:pt-40
        rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[120px]"
        style={{
          background: `
            radial-gradient(100% 100% at 50% 100%, rgba(89,46,255,1), rgba(49,25,140,0.7)),
            url(${data.backgroundImage}) center/cover
          `,
        }}
      >
        <MainContent
          title={data.title}
          description={data.description}
          features={data.features}
          icon={data.icon}
        />
      </div>

      {/* EMI CALCULATOR */}
      <div className="lg:px-[156px] w-full -mt-20">
        <EmiCalculator applyRoute={data.applyRoute} />
      </div>

      {/* TABLES */}
      <TableSection
        bankTableHeading={data.bankTableHeading}
        nbfcTableHeading={data.nbfcTableHeading}
        bankData={data.bankData}
        nbfcData={data.nbfcData}
      />

      {/* OTHER EMI PAGES */}
      <LoanCalculatorButtons
        currentSlug={data.slug}
        pages={allPages}
      />

      <Frame />
    </div>
  );
}
