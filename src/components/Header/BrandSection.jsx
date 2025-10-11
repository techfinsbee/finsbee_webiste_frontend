// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import ResultsComponent from "../ResultSection/Result";
// import { MobileBox } from "../HowToUse/mobileAnimation";

// const brandLogos = [
//   { src: "/brand_logo/b1.png", opacity: "opacity-80" },
//   { src: "/brand_logo/b2.png", opacity: "" },
//   { src: "/brand_logo/b3.png", opacity: "" },
//   { src: "/brand_logo/b4.png", opacity: "" },
//   { src: "/brand_logo/b5.png", opacity: "" },
// ];

// const BrandSection = () => {
//   return (
//     <section className="flex flex-col items-center gap-2.5 px-4 md:px-[136px] py-24 relative w-full z-1">
//       {/* Title + Marquee */}
//       <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">
//         {/* Title */}
//         <div className="flex justify-center md:justify-start w-full md:w-auto">
//           <div className="font-bold text-gray-800 text-2xl md:text-2xl text-center md:text-left leading-[30px]">
//             Trusted by
//             <br />
//             1300+ global brands
//           </div>
//         </div>

//         {/* Marquee */}
//         <div className="relative flex-1 grow overflow-hidden px-0 md:px-0"> {/* inner padding handled in motion div */}
//           <div className="relative h-[110px] w-full overflow-hidden">
//             <motion.div
//               className="flex w-[1400px] gap-[84px] top-1 items-center relative px-[136px]" // ✅ padding both ends
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 10, // speed of marquee
//                 ease: "linear",
//               }}
//             >
//               {[...brandLogos, ...brandLogos].map((logo, index) => (
//                 <div
//                   key={`brand-${index}`}
//                   className="inline-flex flex-col items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto]"
//                 >
//                   <Image
//                     src={logo.src}
//                     alt={`Brand logo ${index + 1}`}
//                     width={100}
//                     height={100}
//                     className={`object-contain filter grayscale ${logo.opacity}`}
//                     priority={index < 4}
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Other Components */}
//       {/* <div className="w-full">
//         <ResultsComponent />
//       </div>

//       <div className="w-full">
//         <MobileBox />
//       </div> */}
//     </section>
//   );
// };

// export default BrandSection;


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import ResultsComponent from "../ResultSection/Result";
// import { MobileBox } from "../HowToUse/mobileAnimation";

// const brandLogos = [
//   { src: "/brand_logo/b1.png", opacity: "opacity-80" },
//   { src: "/brand_logo/b2.png", opacity: "" },
//   { src: "/brand_logo/b3.png", opacity: "" },
//   { src: "/brand_logo/b4.png", opacity: "" },
//   { src: "/brand_logo/b5.png", opacity: "" },
// ];

// const BrandSection = () => {
//   return (
//     <section className="flex flex-col items-center gap-2.5 px-4 sm:px-8 md:px-16 lg:px-[136px] py-24 relative w-full z-1">
//       {/* Title + Marquee */}
//       <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">
//         {/* Title */}
//         <div className="flex justify-center md:justify-start w-full md:w-auto">
//           <div className="font-bold text-gray-800 text-2xl md:text-2xl text-center md:text-left leading-[30px]">
//             Trusted by
//             <br />
//             1300+ global brands
//           </div>
//         </div>

//         {/* Marquee */}
//         <div className="relative flex-1 grow overflow-hidden">
//           <div className="relative h-[110px] w-full overflow-hidden">
//             <motion.div
//               className="flex  gap-[84px] top-1 items-center relative"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 10,
//                 ease: "linear",
//               }}
//             >
//               {[...brandLogos, ...brandLogos].map((logo, index) => (
//                 <div
//                   key={`brand-${index}`}
//                   className="inline-flex flex-col items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto]"
//                 >
//                   <Image
//                     src={logo.src}
//                     alt={`Brand logo ${index + 1}`}
//                     width={100}
//                     height={100}
//                     className={`object-contain filter grayscale ${logo.opacity}`}
//                     priority={index < 4}
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Other Components */}
//       {/* <div className="w-full">
//         <ResultsComponent />
//       </div>

//       <div className="w-full">
//         <MobileBox />
//       </div> */}
//     </section>
//   );
// };

// export default BrandSection;


"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ResultsComponent from "../ResultSection/Result";
import { MobileBox } from "../HowToUse/mobileAnimation";

const brandLogos = [
  { src: "/brand_logo/b1.png", opacity: "opacity-80" },
  { src: "/brand_logo/b2.png", opacity: "" },
  { src: "/brand_logo/b3.png", opacity: "" },
  { src: "/brand_logo/b4.png", opacity: "" },
  { src: "/brand_logo/b5.png", opacity: "" },
];

const BrandSection = () => {
  return (
    <section className="flex flex-col items-center gap-2 sm:gap-2.5 px-2 sm:px-4 md:px-8 lg:px-[136px] py-12 sm:py-16 md:py-20 lg:py-24 relative w-full z-1">
      {/* Title + Marquee */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 sm:gap-5 md:gap-6">
        {/* Title */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <div className="font-bold text-gray-800 text-lg sm:text-xl md:text-2xl text-center md:text-left leading-[24px] sm:leading-[28px] md:leading-[30px]">
            Trusted by
            <br />
            1300+ global brands
          </div>
        </div>

        {/* Marquee */}
        <div className="relative flex-1 grow overflow-hidden">
          <div className="relative h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] w-full overflow-hidden">
            <motion.div
              className="flex gap-[40px] sm:gap-[60px] md:gap-[72px] lg:gap-[84px] top-1 items-center relative"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <div
                  key={`brand-${index}`}
                  className="inline-flex flex-col items-center justify-center gap-2 px-2 sm:px-3 md:px-4 py-2 relative flex-[0_0_auto]"
                >
                  <Image
                    src={logo.src}
                    alt={`Brand logo ${index + 1}`}
                    width={60}
                    height={60}
                    className={`object-contain filter grayscale ${logo.opacity} w-[60px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-[60px] sm:h-[80px] md:h-[90px] lg:h-[100px]`}
                    priority={index < 4}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Other Components */}
      {/* <div className="w-full">
        <ResultsComponent />
      </div>

      <div className="w-full">
        <MobileBox />
      </div> */}
    </section>
  );
};

export default BrandSection;