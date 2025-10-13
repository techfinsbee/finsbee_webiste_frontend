// import React from "react";
// import { benefitCards } from "./Constant";

// const BenefitCards = () => {
//   return (
//     <section className="flex flex-col items-center gap-2.5 px-[136px] py-0 relative self-stretch w-full flex-[0_0_auto] mt-[-60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
//       <div className="flex flex-col items-center gap-2.5 px-12 py-0 relative self-stretch w-full flex-[0_0_auto]">
//         <div className="flex items-center justify-center gap-8 p-12 relative self-stretch w-full flex-[0_0_auto] rounded-[28px_28px_0px_0px] shadow-[0px_-12px_11px_#00000026] bg-[linear-gradient(180deg,rgba(255,238,195,1)_0%,rgba(250,250,250,0)_100%)] bg-white border-0">
//           <div className="flex items-center justify-center gap-8 relative self-stretch w-full flex-[0_0_auto] p-0">
//             {benefitCards.map((card, index) => (
//               <div
//                 key={card.title}
//                 className={`flex flex-col h-[162px] items-start justify-center gap-2 p-4 relative flex-1 grow ${
//                   index < benefitCards.length - 1
//                     ? "border-r [border-right-style:solid] border-[#ffd97c]"
//                     : ""
//                 }`}
//               >
//                 <img
//                   className="relative w-12 h-12 mt-[-5.50px]"
//                   alt={card.title}
//                   src={card.icon}
//                 />
//                 <h3 className="relative w-fit font-bold-title-1 font-[number:var(--bold-title-1-font-weight)] text-foundationtertiarytertiary-500 text-[length:var(--bold-title-1-font-size)] tracking-[var(--bold-title-1-letter-spacing)] leading-[var(--bold-title-1-line-height)] whitespace-nowrap [font-style:var(--bold-title-1-font-style)]">
//                   {card.title}
//                 </h3>
//                 <p className="relative self-stretch mb-[-4.50px] font-regular-title-2 font-[number:var(--regular-title-2-font-weight)] text-foundationtertiarytertiary-400 text-[length:var(--regular-title-2-font-size)] tracking-[var(--regular-title-2-letter-spacing)] leading-[var(--regular-title-2-line-height)] [font-style:var(--regular-title-2-font-style)]">
//                   {card.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BenefitCards;


import React from "react";
import { benefitCards } from "./Constant";

const BenefitCards = () => {
  return (
    <section className="flex flex-col items-center gap-2.5 px-4 sm:px-8 md:px-[136px] py-0 w-full mt-5 lg:mt-[-60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 w-full rounded-[20px] lg:rounded-[28px_28px_0px_0px] shadow-[0px_-12px_11px_#00000026] bg-[linear-gradient(180deg,rgba(255,238,195,1)_0%,rgba(250,250,250,0)_100%)] bg-white border-0">
          {benefitCards.map((card, index) => (
            <div
              key={card.title}
              className={`flex flex-col items-start justify-center gap-2 p-4 sm:p-6 w-full sm:w-[48%] md:w-[45%] lg:flex-1 h-auto ${
                index < benefitCards.length - 1
                  ? "lg:border-r lg:[border-right-style:solid] lg:border-[#ffd97c]"
                  : ""
              }`}
            >
              <img
                className="w-10 h-10 sm:w-12 sm:h-12"
                alt={card.title}
                src={card.icon}
              />
              <h3 className="font-bold text-[#212121] text-lg sm:text-xl">
                {card.title}
              </h3>
              <p className="text-[#555] text-sm sm:text-base leading-snug">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;
