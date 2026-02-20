

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const moneyIcons = [
//   { src: "/brand_logo/l1.svg" },
//   { src: "/brand_logo/l2.svg" },
//   { src: "/brand_logo/l3.svg" },
//   { src: "/brand_logo/l4.svg" },
// ];

// const commonTransition = { duration: 0.9, ease: "easeOut" };

// export default function MoneySection({ animate = false }) {
//   return (
//     <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px] overflow-hidden">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y:  160 }}
//         animate={animate ? { opacity: 1, y: 30 } : {}}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="flex flex-col items-center gap-3.5 relative w-full z-20"
//       >
//         <h1 className="w-full font-extrabold text-gray-100 text-[64px] sm:text-[100px] md:text-[160px] text-center leading-normal relative tracking-[0]">
//           Finsbee.
//         </h1>
//       </motion.div>

//       {/* Money icons */}
//       <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
//         {/* Top icons */}
//         <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
//           {moneyIcons.slice(0, 2).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0.2, y: 110 }}
//               animate={animate ? { opacity: 1, y: 0 } : {}}
//               transition={commonTransition}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom icons */}
//         <div className="flex justify-between w-full items-center relative mt-2">
//           {moneyIcons.slice(2, 4).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0.1, y: 110, x: idx === 0 ? 50 : -50 }}
//               animate={animate ? { opacity: 1, y: 0, x: 0 } : {}}
//               transition={commonTransition}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-bottom-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Phone image */}
//       <motion.img
//         initial={{ opacity: 0, y: 160, scale: 0.8 }}
//         animate={animate ? { opacity: 1, y: 0, scale: 1 } : {}}
//         transition={commonTransition}
//         className="relative w-[90%] sm:w-[80%] md:w-[1283px] max-w-[1283px] -mt-[40px] sm:-mt-[100px] z-40"
//         alt="Bottom image"
//         src="landing_page/mobile.png"
//       />
//     </div>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";

const moneyIcons = [
  { src: "/brand_logo/l1.svg" },
  { src: "/brand_logo/l2.svg" },
  { src: "/brand_logo/l3.svg" },
  { src: "/brand_logo/l4.svg" },
];

const commonTransition = { duration: 0.9, ease: "easeOut" };

export default function MoneySection({ animate = false, isDesktop = false }) {
  return (
    <div className="flex flex-col h-[300px] sm:h-[500px] md:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-100px] sm:mb-[-150px] md:mb-[-311.01px] overflow-hidden">
      {/* Heading */}
      {isDesktop ? (
        <motion.div
          initial={{ opacity: 0, y: 160 }}
          animate={animate ? { opacity: 1, y: 30 } : {}}
          transition={commonTransition}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col items-center gap-3.5 relative w-full z-20"
        >
          <h1 className="w-full font-extrabold text-gray-100 text-[64px] sm:text-[100px] md:text-[160px] text-center leading-normal relative tracking-[0]">
            Finsbee.
          </h1>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center gap-3.5 relative w-full z-20">
          <h1 className="w-full font-extrabold text-gray-100 text-[54px] sm:text-[100px] text-center leading-normal relative tracking-[0]">
            Finsbee.
          </h1>
        </div>
      )}

      {/* Money icons */}
      <div className="flex flex-col w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1088px] h-[150px] sm:h-[200px] md:h-[300px] items-center absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        {/* Top icons */}
        <div className="flex w-full max-w-[300px] sm:max-w-[400px] md:max-w-[610px] justify-between items-center relative">
          {moneyIcons.slice(0, 2).map((icon, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
            >
              <img
                src={icon.src}
                alt={`money-${idx}`}
                className="relative w-[40px] sm:w-[50px] md:w-[77px] h-[40px] sm:h-[50px] md:h-[77px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom icons */}
        <div className="flex justify-between w-full items-center relative mt-2">
          {moneyIcons.slice(2, 4).map((icon, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
            >
              <img
                src={icon.src}
                alt={`money-bottom-${idx}`}
                className="relative w-[40px] sm:w-[50px] md:w-[77px] h-[40px] sm:h-[50px] md:h-[77px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Phone image */}
      {isDesktop ? (
        <motion.img
          initial={{ opacity: 0, y: 160, scale: 0.8 }}
          animate={animate ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={commonTransition}
          className="relative w-[90%] sm:w-[80%] md:w-[1283px] max-w-[1283px] -mt-[40px] sm:-mt-[100px] z-40"
          alt="Bottom image"
          src="landing_page/top-banner-mobile.webp"
        />
      ) : (
        <img
          className="relative w-[110%] sm:w-[80%] max-w-[1283px] -mt-[40px] sm:-mt-[40px] z-40"
          alt="Bottom image"
          src="landing_page/top-banner-mobile.webp"
        />
      )}
    </div>
  );
}