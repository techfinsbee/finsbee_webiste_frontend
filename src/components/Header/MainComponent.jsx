// "use client"
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// const MainContent = () => {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef();

//   const numbers = [
//     "1", // English
//     "१", // Hindi / Marathi / Sanskrit (Devanagari)
//     "૧", // Gujarati
//     "੧", // Punjabi (Gurmukhi)
//     "১", // Bengali
//     "୧", // Odia
//     "௧", // Tamil
//     // "౧",  // Telugu
//     "೧", // Kannada
//     "൧", // Malayalam
//   ];

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev === numbers.length - 1 ? 0 : prev + 1));
//     }, 300); // speed (ms)
//     return () => clearInterval(intervalRef.current);
//   }, [numbers.length]);
//   return (
//     <main className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-[120px]  p-6 sm:p-8 md:p-12 relative w-full  mx-auto">
//       <div className="flex flex-col w-full max-w-[1461px] items-center gap-6   relative">
//         <div className="flex flex-col items-center gap-3 sm:gap-5 relative w-full">
//           <div className="flex w-full max-w-[500px] sm:max-w-full justify-center items-center relative">
//             <div className="flex flex-col w-8 sm:w-11 items-center justify-center gap-2.5 relative">
//               <h1 className="relative w-full -mt-px font-bold text-gray-100 text-4xl sm:text-5xl md:text-6xl text-center tracking-[0px] leading-normal">
//                 {/* {numbers[index]} */}
//               </h1>
//             </div>
//             <h1 className="w-full  -mt-px font-bold text-gray-100 text-4xl sm:text-5xl text-center leading-normal relative tracking-[0px]">
//               Navigate Your Finances with Confidence
//             </h1>
//           </div>
//           <h2 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl  text-center leading-normal relative tracking-[0px]">
//             Smart Loans, Reliable Advice, and Safe Investment Opportunities
//           </h2>
//         </div>

//         {/* <div className="flex flex-row items-start justify-center gap-[50px] relative w-full">
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
//           </div> */}
//      <div className="flex flex-row items-start justify-center gap-[50px] relative w-full z-10">
//   {/* Google Play Store Button */}
//   <a
//     href="https://play.google.com/store/apps/details?id=com.finsbee.app"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="relative w-[150px] sm:w-[201px] h-[45px] sm:h-[59px] flex items-center justify-center cursor-pointer z-20"
//   >
//     <img
//       alt="Get it on Google Play"
//       src="/landing_page/Google Play.png"
//       className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
//     />
//   </a>

//   {/* Apple App Store Button */}
//   <a
//     href="https://apps.apple.com/in/app/finsbee/id6751536241"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="relative w-[150px] sm:w-[201px] h-[45px] sm:h-[59px] flex items-center justify-center cursor-pointer z-20"
//   >
//     <img
//       alt="Download on the App Store"
//       src="/landing_page/App Store.png"
//       className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
//     />
//   </a>
// </div>


//       </div>
//     </main>
//   );
// };

// export default MainContent;


// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const MainContent = ({ isDesktop = false }) => {
//   const [index, setIndex] = useState(0);
//   const intervalRef = useRef();

//   const numbers = [
//     "1", // English
//     "१", // Hindi / Marathi / Sanskrit (Devanagari)
//     "૧", // Gujarati
//     "੧", // Punjabi (Gurmukhi)
//     "১", // Bengali
//     "୧", // Odia
//     "௧", // Tamil
//     "೧", // Kannada
//     "൧", // Malayalam
//   ];

//   useEffect(() => {
//     if (isDesktop) {
//       intervalRef.current = setInterval(() => {
//         setIndex((prev) => (prev === numbers.length - 1 ? 0 : prev + 1));
//       }, 300);
//       return () => clearInterval(intervalRef.current);
//     }
//   }, [isDesktop]);

//   return (
//     <main className="flex items-center justify-center gap-4 sm:gap-6 md:gap-12 lg:gap-[120px] p-4 sm:p-6 md:p-12 relative w-full mx-auto">
//       <div className="flex flex-col w-full max-w-[1461px] items-center gap-4 sm:gap-5 relative">
//         <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-5 relative w-full">
//           <div className="flex w-full max-w-[500px] sm:max-w-full justify-center items-center relative">
//             <div className="flex flex-col w-8 sm:w-11 items-center justify-center gap-2.5 relative">
//               <h1 className="relative w-full -mt-px font-bold text-gray-100 text-4xl sm:text-5xl md:text-6xl text-center tracking-[0px] leading-normal">
//                 {/* {isDesktop ? numbers[index] : "1"} */}
//               </h1>
//             </div>
//             <h1 className="w-full -mt-px font-bold text-gray-100 text-2xl sm:text-5xl text-center leading-normal relative tracking-[0px]">
//               Navigate Your Finances with Confidence
//             </h1>
//           </div>
//           <h2 className="w-full font-bold text-yellow-400 text-2xl sm:text-4xl text-center leading-normal relative tracking-[0px]">
//             Smart Loans, Reliable Advice, and Safe Investment Opportunities
//           </h2>
//         </div>

//         <div className="flex flex-row items-start justify-center gap-6 sm:gap-8 md:gap-[50px] relative w-full z-10">
//           {/* Google Play Store Button */}
//           <a
//             href="https://play.google.com/store/apps/details?id=com.finsbee.app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative w-[120px] sm:w-[150px] md:w-[201px] h-[40px] sm:h-[45px] md:h-[59px] flex items-center justify-center cursor-pointer z-20"
//           >
//             <img
//               alt="Get it on Google Play"
//               src="/landing_page/Google Play.png"
//               className={`w-full h-full object-contain ${isDesktop ? "hover:scale-105 transition-transform duration-200" : ""}`}
//             />
//           </a>

//           {/* Apple App Store Button */}
//           <a
//             href="https://apps.apple.com/in/app/finsbee/id6751536241"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative w-[120px] sm:w-[150px] md:w-[201px] h-[40px] sm:h-[45px] md:h-[59px] flex items-center justify-center cursor-pointer z-20"
//           >
//             <img
//               alt="Download on the App Store"
//               src="/landing_page/App Store.png"
//               className={`w-full h-full object-contain ${isDesktop ? "hover:scale-105 transition-transform duration-200" : ""}`}
//             />
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MainContent;



"use client";

import React, { useEffect, useRef, useState } from "react";

const MainContent = ({ isDesktop = false }) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  const [heroData, setHeroData] = useState({
    heading: "",
    sub_heading: "",
    icons: [],
  });
const STRAPI_URL = "https://admin.finsbee.com";
  const numbers = [
    "1",
    "१",
    "૧",
    "੧",
    "১",
    "୧",
    "௧",
    "೧",
    "൧",
  ];

  // 🔁 Number animation (UNCHANGED)
  useEffect(() => {
    if (isDesktop) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev === numbers.length - 1 ? 0 : prev + 1));
      }, 300);

      return () => clearInterval(intervalRef.current);
    }
  }, [isDesktop]);

  // 🔥 CLIENT-SIDE API FETCH
  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const res = await fetch("https://admin.finsbee.com/api/hero-section");
        const json = await res.json();

        setHeroData({
          heading: json?.data?.heading || "",
          sub_heading: json?.data?.sub_heading || "",
          icons: json?.data?.icons || [],
        });
      } catch (error) {
        console.error("Hero section fetch failed", error);
      }
    };

    fetchHeroSection();
  }, []);

  return (
    <main className="flex items-center justify-center gap-4 sm:gap-6 md:gap-12 lg:gap-[120px] p-4 sm:p-6 md:p-12 relative w-full mx-auto">
      <div className="flex flex-col w-full max-w-[1461px] items-center gap-4 sm:gap-5 relative">
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-5 relative w-full">
          <div className="flex w-full max-w-[500px] sm:max-w-full justify-center items-center relative">
            <div className="flex flex-col w-8 sm:w-11 items-center justify-center gap-2.5 relative">
              <h1 className="relative w-full -mt-px font-bold text-gray-100 text-4xl sm:text-5xl md:text-6xl text-center tracking-[0px] leading-normal">
                {/* {isDesktop ? numbers[index] : "1"} */}
              </h1>
            </div>

            <h1 className="w-full -mt-px font-bold text-gray-100 text-2xl sm:text-5xl text-center leading-normal relative tracking-[0px]">
              {heroData.heading}
            </h1>
          </div>

          <h2 className="w-full font-bold text-yellow-400 text-2xl sm:text-4xl text-center leading-normal relative tracking-[0px]">
            {heroData.sub_heading}
          </h2>
        </div>

        <div className="flex flex-row items-start justify-center gap-6 sm:gap-8 md:gap-[50px] relative w-full z-10">
          {/* Google Play */}
          {heroData.icons[1] && (
            <a
              href="https://play.google.com/store/apps/details?id=com.finsbee.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[120px] sm:w-[150px] md:w-[201px] h-[40px] sm:h-[45px] md:h-[59px] flex items-center justify-center cursor-pointer z-20"
            >
              <img
                alt="Get it on Google Play"
                src={`${STRAPI_URL}${heroData.icons?.[1]}`}
                className={`w-full h-full object-contain ${
                  isDesktop
                    ? "hover:scale-105 transition-transform duration-200"
                    : ""
                }`}
              />
            </a>
          )}

          {/* App Store */}
          {heroData.icons[0] && (
            <a
              href="https://apps.apple.com/in/app/finsbee/id6751536241"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[120px] sm:w-[150px] md:w-[201px] h-[40px] sm:h-[45px] md:h-[59px] flex items-center justify-center cursor-pointer z-20"
            >
              <img
                alt="Download on the App Store"
                src={`${STRAPI_URL}${heroData.icons?.[0]}`}
                className={`w-full h-full object-contain ${
                  isDesktop
                    ? "hover:scale-105 transition-transform duration-200"
                    : ""
                }`}
              />
            </a>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
