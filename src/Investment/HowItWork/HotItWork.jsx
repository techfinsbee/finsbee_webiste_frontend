// import React from "react";

// export const HowItWork = () => {
//   const steps = [
//     {
//       stepNumber: "Step 1",
//       title: "Download & Sign Up",
//       description:
//         "Start by downloading the FinsBee app and creating your account. Trusted by thousands, it's the best platform for digital gold and silver investments.",
//       alignment: "left",
//     },
//     {
//       stepNumber: "Step 2",
//       title: "Choose Your Investment",
//       description:
//         "With just a few taps, turn your savings into lasting wealth. Select the amount to invest and decide between the timeless security of digital gold or the growth potential of digital silver. Every transaction is seamless, secure, and puts you in control.",
//       alignment: "right",
//     },
//     {
//       stepNumber: "Step 3",
//       title: "Track Real-Time Prices",
//       description:
//         "Stay updated with live gold and silver rates directly in the app. Instantly check prices per gram or kilogram to know the right time to buy, sell, or hold, ensuring every decision is smart and transparent.",
//       alignment: "left",
//     },
//     {
//       stepNumber: "Step 4",
//       title: "Invest & Secure Your Future",
//       description:
//         "With FinsBee, every gram of digital gold and silver you purchase is stored in certified vaults and fully protected with insurance, ensuring the highest level of safety for your wealth. Your investments are kept secure, transparent, and worry-free, so you can focus on building a stronger tomorrow",
//       alignment: "right",
//     },
//   ];

//   return (
//     <section className="flex flex-col items-center px-4 md:px-32 py-24 bg-white min-h-screen">
//       <header className="flex flex-col items-center gap-2.5 px-4 py-40 w-full max-w-none">
//         <div className="opacity-0 translate-y-4 animate-fade-in">
//           <div className="text-base font-bold text-gray-800 text-center tracking-wide leading-5 uppercase">
//             Type of
//           </div>
//         </div>

//         <div className="flex flex-wrap items-start justify-center gap-2.5">
//           <div className="opacity-0 translate-y-4 animate-fade-in animation-delay-200">
//             <div className="text-6xl font-bold text-gray-800 text-center leading-normal">
//               Gold &amp; Silver
//             </div>
//           </div>

//           <div className="opacity-0 translate-y-4 animate-fade-in animation-delay-400">
//             <div className="inline-flex flex-col items-center justify-center">
//               <div className="w-full h-px bg-yellow-500 opacity-0" />
//               <div className="text-6xl font-bold text-gray-800 leading-normal">
//                 Investments with FinsBee
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="flex flex-col items-start justify-center w-full max-w-6xl -mt-40">
//         {steps.map((step, index) => (
//           <div
//             key={step.stepNumber}
//             className={`flex w-full items-center gap-2.5 ${index > 0 ? "-mt-12" : ""} ${
//               step.alignment === "right" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div className={`opacity-0 translate-y-4 animate-fade-in animation-delay-${600 + index * 200}`}>
//               <div className="w-96 bg-yellow-200 rounded-3xl shadow-lg">
//                 <div className="flex flex-col items-start justify-center gap-6 pt-8 pb-12 px-8">
//                   <div className="flex items-center justify-between p-1 w-full">
//                     <img
//                       className="w-6 h-6"
//                       alt="Vuesax broken blend"
//                       src="https://c.animaapp.com/mfri9b23av3tcq/img/vuesax-broken-blend.svg"
//                     />
//                     <div className="text-2xl font-bold text-gray-800 leading-7 whitespace-nowrap">
//                       {step.stepNumber}
//                     </div>
//                   </div>

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
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };


import React from "react";

export const HowItWork = () => {
  const steps = [
    {
      stepNumber: "Step 1",
      title: "Download & Sign Up",
      description:
        "Start by downloading the FinsBee app and creating your account. Trusted by thousands, it's the best platform for digital gold and silver investments.",
      alignment: "left",
    },
    {
      stepNumber: "Step 2",
      title: "Choose Your Investment",
      description:
        "With just a few taps, turn your savings into lasting wealth. Select the amount to invest and decide between the timeless security of digital gold or the growth potential of digital silver. Every transaction is seamless, secure, and puts you in control.",
      alignment: "right",
    },
    {
      stepNumber: "Step 3",
      title: "Track Real-Time Prices",
      description:
        "Stay updated with live gold and silver rates directly in the app. Instantly check prices per gram or kilogram to know the right time to buy, sell, or hold, ensuring every decision is smart and transparent.",
      alignment: "left",
    },
    {
      stepNumber: "Step 4",
      title: "Invest & Secure Your Future",
      description:
        "With FinsBee, every gram of digital gold and silver you purchase is stored in certified vaults and fully protected with insurance, ensuring the highest level of safety for your wealth. Your investments are kept secure, transparent, and worry-free, so you can focus on building a stronger tomorrow",
      alignment: "right",
    },
  ];

  return (
    <section className="relative flex flex-col items-center px-4 md:px-[136px] py-24 bg-white">
      {/* Sticky Heading */}
      {/* <header className="sticky top-1/3 flex flex-col items-center gap-4 text-center z-10 pointer-events-none">
        <div className="z-10">
          <div className="text-base font-bold text-gray-800 tracking-wide leading-5 uppercase">
            Type of
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold text-gray-800 leading-normal z-10">
            Gold &amp; Silver
          </div>
          <div className="text-6xl font-bold text-gray-800 leading-normal z-10">
            Investments with FinsBee
          </div>
        </div>
      </header> */}
      <header className="sticky top-1/3 flex flex-col items-center gap-4 text-center z-10 pointer-events-none">
  <div className="z-10">
    <div className="text-base font-bold text-gray-800 tracking-wide leading-5 uppercase">
      Type of
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight z-10">
      Gold &amp; Silver
    </div>

    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  bg-yellow-400 text-gray-800 leading-tight z-10">
      Investments with FinsBee
    </div>
  </div>
</header>


      {/* Cards */}
      <div className="flex flex-col items-start justify-center w-full gap-32 mt-40 z-20">
        {steps.map((step, index) => (
          <div
            key={step.stepNumber}
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
