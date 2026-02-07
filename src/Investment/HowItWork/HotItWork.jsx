
import React from "react";

export const HowItWork = ({ steps = [], headers }) => {
  if (!steps.length) return null;
 

  return (
    <section className="relative flex flex-col items-center px-4 md:px-[136px] py-24 bg-white">
     
      <header className="sticky top-1/3 flex flex-col items-center gap-4 text-center z-10 pointer-events-none">
  <div className="z-10">
    <div className="text-base font-bold text-gray-800 tracking-wide leading-5 uppercase">
      {headers?.title1}
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight z-10">
      {headers?.title2}
    </div>

    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  bg-yellow-400 text-gray-800 leading-tight z-10">
      {headers?.yellowText}
    </div>
  </div>
</header>


      {/* Cards */}
      <div className="flex flex-col items-start justify-center w-full gap-32 mt-40 z-20">
       {steps
          .sort((a, b) => a.order - b.order)
          .map((step) => (
          <div
            key={step.order}
            className={`flex w-full items-center ${
              step.alignment === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="w-96 bg-yellow-200 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105">
              <div className="flex flex-col items-start justify-center gap-6 pt-8 pb-12 px-8">
                <div className="flex items-center justify-between p-1 w-full">
                  <img
                    className="w-6 h-6"
                    alt="Vuesax broken blend"
                    src="https://c.animaapp.com/mfri9b23av3tcq/img/vuesax-broken-blend.svg"
                  />
                  <div className="text-2xl font-bold text-gray-800 leading-7 whitespace-nowrap">
                    {step.stepNumber}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 w-full">
                  <p className="text-2xl font-normal text-gray-800 leading-7">
                    {step.description}
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 leading-normal">
                    {step.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};




// "use client";
// import React from "react";

// export const HowItWork = ({ steps = [], headers }) => {
//   if (!steps.length) return null;

//   return (
//     <section className="relative flex flex-col items-center px-4 md:px-[136px] py-24 bg-white">
      
//       {/* HEADER (CMS DRIVEN) */}
//       <header className="sticky top-1/3 flex flex-col items-center gap-4 text-center z-10 pointer-events-none">
//         <div className="text-base font-bold text-gray-800 tracking-wide leading-5 uppercase">
//           {headers?.title1}
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
//             {headers?.title2}
//           </div>

//           {headers?.yellowText && (
//             <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-yellow-400 text-gray-800 leading-tight">
//               {headers.yellowText}
//             </div>
//           )}

//           {headers?.title4 && (
//             <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
//               {headers.title4}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* STEPS */}
//       <div className="flex flex-col items-start justify-center w-full gap-32 mt-40 z-20">
        // {steps
        //   .sort((a, b) => a.order - b.order)
        //   .map((step) => (
//             <div
//               key={step.order}
//               className={`flex w-full items-center ${
//                 step.alignment === "right"
//                   ? "justify-end"
//                   : "justify-start"
//               }`}
//             >
//               <div className="w-96 bg-yellow-200 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105">
//                 <div className="flex flex-col items-start justify-center gap-6 pt-8 pb-12 px-8">
                  
//                   {/* Step Header */}
//                   <div className="flex items-center justify-between p-1 w-full">
//                     <img
//                       className="w-6 h-6"
//                       alt="Step icon"
//                       src="https://c.animaapp.com/mfri9b23av3tcq/img/vuesax-broken-blend.svg"
//                     />
//                     <div className="text-2xl font-bold text-gray-800 leading-7">
//                       {step.stepNumber}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col items-start gap-6 w-full">
//                     <p className="text-2xl font-normal text-gray-800 leading-7">
//                       {step.description}
//                     </p>
//                     <h3 className="text-xl font-bold text-gray-800 leading-normal">
//                       {step.title}
//                     </h3>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </section>
//   );
// };
