// import React from "react";
// import InvestmentOptionsSection  from "./Investment";
// import  LoanApplicationSection  from "./Loan";

// export default function Frame() {
//   return (
//     <main className="flex flex-col min-h-screen items-start gap-8 pt-0 pb-12 px-[136px] relative rounded-[120px_0px_0px_0px] bg-gradient-to-r from-[#31198C] to-[#592EFF]">
//       <InvestmentOptionsSection />
//       <LoanApplicationSection/>
//     </main>
//   );
// }



// import React from "react";
// import InvestmentOptionsSection from "./Investment";
// import LoanApplicationSection from "./Loan";

// export default function Frame() {
//   return (
//     <main className="flex flex-col min-h-screen items-start gap-8 pt-0 pb-12 p sm:px-8 md:px-16 lg:px-32 xl:px-[136px] relative lg:rounded-tl-[120px] bg-gradient-to-r from-[#31198C] to-[#592EFF]">
//       <InvestmentOptionsSection />
//       <LoanApplicationSection />
//     </main>
//   );
// }

import React from "react";
import InvestmentOptionsSection from "./Investment";
import LoanApplicationSection from "./Loan";

export default function Frame() {
  return (
    <main className="flex flex-col min-h-screen items-start gap-8 pt-0 pb-12 p sm:px-8 md:px-16 lg:px-32 xl:px-[136px] relative lg:rounded-tl-[120px] bg-linear-to-r from-[#31198C] to-[#592EFF]">
      <InvestmentOptionsSection />
      <LoanApplicationSection />
    </main>
  );
}