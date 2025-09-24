// import React from "react";
// import ResultsComponent from "../ResultSection/Result";
// import AppUse from "../HowToUse/AppUse";
// import Image from "next/image";

// const brandLogos = [
// //   { src: "", opacity: "opacity-80" },
//   { src: "/brand_logo/b1.png", opacity: "opacity-80" },
//   { src: "/brand_logo/b2.png", opacity: "" },
//   { src: "/brand_logo/b3.png", opacity: "" },
//   { src: "/brand_logo/b4.png", opacity: "" },
//   { src: "/brand_logo/b5.png", opacity: "" },
// ]
// const BrandSection = () => {
//   return (
//     <section
//       className="flex flex-col items-center gap-2.5 px-[136px] py-24 relative self-stretch w-full flex-[0_0_auto] z-1"
//     >
//       <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
//         <div className="inline-flex justify-center gap-2.5 pl-0 pr-8 py-2.5 flex-[0_0_auto] border-0 border-none items-center relative">
//           <div className="relative w-fit font-bold text-gray-800 text-2xl text-right tracking-[0px] leading-[30px]">
//             Trusted by
//             <br />
//             1300+ global brands
//           </div>
//         </div>

//         <div className="relative flex-1 grow h-[110px] overflow-hidden">
//           <div className="flex w-[1400px] gap-[84px] top-1 items-center relative animate-marquee">
//             {[...brandLogos, ...brandLogos].map((logo, index) => (
//               <div
//                 key={`brand-${index}`}
//                 className="inline-flex flex-col items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto]"
//               >
//                 <Image
//                   src={logo.src}
//                   alt={`Brand logo ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className={`object-contain ${logo.opacity} `}
//                   priority={index < 4} 
//                 />
//                 {/* <div
//                   className={`relative w-[100px] h-[100px] ${logo.opacity} bg-cover bg-center`}
//                   style={{ backgroundImage: `url(${logo.src})` }}
//                 /> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div>
//         <ResultsComponent />
//       </div>
//       <div>
//         <AppUse />
//       </div>
//     </section>
//   );
// };

// export default BrandSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ResultsComponent from "../ResultSection/Result";
import AppUse from "../HowToUse/AppUse";
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
    <section className="flex flex-col items-center gap-2.5 px-[136px] py-24 relative self-stretch w-full flex-[0_0_auto] z-1">
      {/* Title */}
      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex justify-center gap-2.5 pl-0 pr-8 py-2.5 flex-[0_0_auto] items-center relative">
          <div className="relative w-fit font-bold text-gray-800 text-2xl text-right tracking-[0px] leading-[30px]">
            Trusted by
            <br />
            1300+ global brands
          </div>
        </div>

        {/* Marquee */}
        <div className="relative flex-1 grow h-[110px] overflow-hidden">
          <motion.div
            className="flex w-[1400px] gap-[84px] top-1 items-center relative"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 10, // speed of marquee (lower = faster)
              ease: "linear",
            }}
          >
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div
                key={`brand-${index}`}
                className="inline-flex flex-col items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto]"
              >
                <Image
                  src={logo.src}
                  alt={`Brand logo ${index + 1}`}
                  width={100}
                  height={100}
                  className={`object-contain filter grayscale ${logo.opacity}`}
                  priority={index < 4}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Other Components */}
      <div>
        <ResultsComponent />
      </div>
      <div>
        {/* <AppUse /> */}
        <MobileBox/>
      </div>
    </section>
  );
};

export default BrandSection;
