// "use client";
// import React, { useState } from "react";
// import { features } from "./Constant";

// import EmiCalculator from "./components/EMI_Calculator";




// const MainContent = () => {


//   return (
//     <>
//       <main className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-12 lg:px-32 py-4 lg:py-12 relative w-full">
//         <div className="flex flex-col items-center gap-12 relative flex-1">
//           <div className="flex flex-col lg:flex-row items-start justify-between relative w-full">
//             <section className="flex flex-col w-full lg:w-[600px] items-start relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
//               <h1 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl md:text-6xl text-start leading-normal tracking-[0px]">
//                 Personal Loan EMI Calculator
//               </h1>
//               <p className="text-[#FFEEC3] text-lg md:text-xl">
//                 Get a Personal Loan of up to Rs. 50 Lakhs to pursue your dreams.
//                 Quick approval, minimal documentation, and competitive interest
//                 rates.
//               </p>
//             </section>

//             <aside className="flex flex-col w-full lg:w-[471px] items-start gap-3.5 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
//               <div className="flex flex-col lg:flex-row items-start justify-between relative w-full">
//                 <div className="flex flex-col items-start gap-3.5 relative flex-1">
//                   {features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-3 font-extralight text-white py-0 relative w-full"
//                     >
//                       <img
//                         className="w-6 h-6"
//                         alt="Tick icon"
//                         src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg"
//                       />
//                       <span className="flex-1 text-[#FFEEC3]">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </aside>
//           </div>
//         </div>
//       </main>
//       <div className="px-2 md:px-5 lg:px-[156px] w-full">
//         <EmiCalculator />
//       </div>

//     </>
//   );
// };
// export default MainContent;


"use client";
import React from "react";
import { features } from "./Constant";
import { useSearchParams } from "next/navigation"; 
import EmiCalculator from "./components/EMI_Calculator";

const MainContent = () => {
  // ← NEW: Read dynamic title from URL query params
  const searchParams = useSearchParams();
  const dynamicTitle = searchParams.get("title") || "Personal Loan EMI Calculator";

  return (
    <>
      <main className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-12 lg:px-32 py-4 lg:py-12 relative w-full">
        <div className="flex flex-col items-center gap-12 relative flex-1">
          <div className="flex flex-col lg:flex-row items-start justify-between relative w-full">
            <section className="flex flex-col w-full lg:w-[600px] items-start relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              {/* ← DYNAMIC H1 */}
              <h1 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl md:text-6xl text-start leading-normal tracking-[0px]">
                {dynamicTitle}
              </h1>
              <p className="text-[#FFEEC3] text-lg md:text-xl">
                Calculate your monthly EMI instantly. Adjust loan amount, interest rate, and tenure to find the perfect repayment plan for your needs.
              </p>
            </section>

            <aside className="flex flex-col w-full lg:w-[471px] items-start gap-3.5 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <div className="flex flex-col lg:flex-row items-start justify-between relative w-full">
                <div className="flex flex-col items-start gap-3.5 relative flex-1">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 font-extralight text-white py-0 relative w-full"
                    >
                      <img
                        className="w-6 h-6"
                        alt="Tick icon"
                        src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg"
                      />
                      <span className="flex-1 text-[#FFEEC3]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <div className="px-2 md:px-5 lg:px-[156px] w-full">
        <EmiCalculator />
      </div>
    </>
  );
};

export default MainContent;