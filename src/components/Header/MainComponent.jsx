import React, { useEffect, useRef, useState } from "react";

const MainContent = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

 const numbers = [
    "1",   // English
    "१",  // Hindi / Marathi / Sanskrit (Devanagari)
    "૧",  // Gujarati
    "੧",  // Punjabi (Gurmukhi)
    "১",  // Bengali
    "୧",  // Odia
    "௧",  // Tamil
    // "౧",  // Telugu
    "೧",  // Kannada
    "൧",  // Malayalam
    
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === numbers.length - 1 ? 0 : prev + 1));
    }, 300); // speed (ms)
    return () => clearInterval(intervalRef.current);
  }, [numbers.length]);
  return (
    <main className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-[120px] p-6 sm:p-8 md:p-12 relative w-full  mx-auto">
      <div className="flex flex-col w-full max-w-[1461px] items-center gap-6   relative">
        <div className="flex flex-col items-center gap-3 sm:gap-5 relative w-full">
          <div className="flex w-full max-w-[500px] sm:max-w-full justify-center items-center relative">
            <div className="flex flex-col w-8 sm:w-11 items-center justify-center gap-2.5 relative">
              <h1 className="relative w-full -mt-px font-bold text-gray-100 text-4xl sm:text-5xl md:text-6xl text-center tracking-[0px] leading-normal">
                {/* {numbers[index]} */}
              </h1>
            </div>
            <h1 className="w-full  -mt-px font-bold text-gray-100 text-4xl sm:text-5xl md:text-6xl text-center leading-normal relative tracking-[0px]">
             Navigate Your Finances with Confidence
            </h1>
          </div>
          <h2 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl md:text-6xl text-center leading-normal relative tracking-[0px]">
            Smart Loans, Reliable Advice, and Safe Investment Opportunities
          </h2>
        </div>

        <div className="flex flex-row items-start justify-center gap-[50px] relative w-full">
          <div className="relative w-[150px] sm:w-[201px] h-[45px] sm:h-[59px] flex items-center justify-center">
            <img
              alt="Google Play Store"
              src="landing_page/Google Play.png"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative w-[150px] sm:w-[201px] h-[45px] sm:h-[59px] flex items-center justify-center">
            <img
              alt="App Store"
              src="landing_page/App Store.png"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;


// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const MainContent = () => {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef();

//   const numbers = [
//     "1",   // English
//     "१",  // Hindi / Marathi / Sanskrit (Devanagari)
//     "૧",  // Gujarati
//     "੧",  // Punjabi (Gurmukhi)
//     "১",  // Bengali
//     "୧",  // Odia
//     "௧",  // Tamil
//     // "౧",  // Telugu
//     "೧",  // Kannada
//     "൧",  // Malayalam
//   ];

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev === numbers.length - 1 ? 0 : prev + 1));
//     }, 300); // speed (ms)
//     return () => clearInterval(intervalRef.current);
//   }, [numbers.length]);

//   return (
//     <main className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-[120px] p-6 sm:p-8 md:p-12 relative w-full max-w-[1440px] mx-auto">
//       <div className="flex flex-col w-full max-w-[1461px] items-center gap-6 relative">
//         <div className="flex flex-col items-center gap-3 sm:gap-5 relative w-full">
//           <div className="flex w-full max-w-[500px] sm:max-w-[618px] justify-center items-center relative">
//             <div className="flex flex-col w-8 sm:w-11 items-center justify-center gap-2.5 relative">
//               <h1 className="relative w-full -mt-px font-lato font-bold text-heading-1 sm:text-heading-1-sm md:text-heading-1-md text-center tracking-0 leading-normal text-tertiary-100">
//                 {numbers[index]}
//               </h1>
//             </div>
//             <h1 className="w-[300px] sm:w-[370px] -mt-px font-lato font-bold text-heading-1 sm:text-heading-1-sm md:text-heading-1-md text-center leading-normal relative tracking-0 text-tertiary-100">
//               -Place for All
//             </h1>
//           </div>
//           <h2 className="w-full font-lato font-bold text-heading-2 sm:text-heading-2-sm md:text-heading-2-md text-center leading-normal relative tracking-0 text-primary-500">
//             Loan, Insurance, Investment
//           </h2>
//         </div>

//         <div className="flex flex-row items-start justify-center gap-[50px] relative w-full">
//           <div className="relative w-[150px] sm:w-[201px] h-[45px] sm:h-[59px] flex items-center justify-center">
//             <img
//               alt="Google Play Store"
//               src="landing_page/Google Play.png"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           <div className="relative w-[150px] sm:w-[201px] h-[45px] sm:h-[59px] flex items-center justify-center">
//             <img
//               alt="App Store"
//               src="landing_page/App Store.png"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MainContent;
