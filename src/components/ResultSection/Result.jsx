

// // version 1 
// "use client";

// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";

// export default function ResultsComponent() {
//   const statsData = [
//     {
//       value: "INR 180cr",
//       label: "LOAN DISTRIBUTED",
//       height: "h-[180px] sm:h-[220px] md:h-[240px] lg:h-[280px]",
//       image: "/brand_logo/r1.jpg",
//       gradient: "from-[rgba(89,46,255,0.8)] to-[rgba(46,66,255,0.8)]",
//     },
//     {
//       value: "1M+",
//       label: "APP DOWNLOADS",
//       height: "h-[240px] sm:h-[280px] md:h-[300px] lg:h-[360px]",
//       image: "/brand_logo/r2.jpg",
//       gradient:
//         "from-[rgba(255,199,60,0.8)] via-[rgba(255,199,60,0.8)] to-[rgba(89,46,255,0.8)]",
//     },
//     {
//       value: "5k+",
//       label: "HAPPY CUSTOMER",
//       height: "h-[300px] sm:h-[340px] md:h-[360px] lg:h-[440px]",
//       image: "/brand_logo/r3.jpg",
//       gradient: "from-[rgba(89,46,255,0.8)] to-[rgba(46,66,255,0.8)]",
//     },
//   ];

//   return (
//     <section className="flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-[136px] py-12 md:py-24 relative rounded-2xl bg-white">
//       {/* ---------- Header ---------- */}
//       {/* <motion.div
//         className="flex flex-col items-start w-full max-w-[400px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[456px]"
//         whileInView={{ opacity: 1, x: 0.1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.1 }}
//       >
//         <div className="flex flex-wrap w-full items-start">
//           <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#212121]">
//             The Results Speak for Themselves
//           </h1>
//           <h1 className="w-full font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
//             The Results Speak for
//           </h1>

//           <div className="inline-flex flex-col items-center relative">
//             <span className="relative w-fit font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
//               <motion.span
//                 initial={{ scaleY: 0, opacity: 0 }}
//                 whileInView={{ scaleY: 1, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.8 }}
//                 className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
//               />
//               Themselves
//             </span>
//           </div>
//         </div>
//       </motion.div> */}

//       <motion.div
//   className="flex flex-col items-start w-full max-w-[400px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[456px]"
//   whileInView={{ opacity: 1, x: 0.1 }}
//   transition={{ duration: 1.5, ease: "easeOut" }}
//   viewport={{ once: true, amount: 0.1 }}
// >
//   <div className="flex flex-wrap w-full items-start leading-[1] sm:leading-[1] md:leading-[1]">
//     {/* <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] py-4 text-[#212121]">
//       The Results Speak for Themselves
//     </h1> */}

//     <h1 className="w-full font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px]  text-[#212121] leading-[1]">
//       The Results Speak for
//     </h1>

//     <div className="inline-flex flex-col items-center relative pt-4 leading-[1]">
//       <span className="relative w-fit font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121] leading-[1]">
//         <motion.span
//           initial={{ scaleY: 0, opacity: 0 }}
//           whileInView={{ scaleY: 1, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.8 }}
//           className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
//         />
//         Themselves
//       </span>
//     </div>
//   </div>
// </motion.div>


//       {/* ---------- Stats Cards ---------- */}
//       <div className="flex flex-row items-end justify-end gap-2 sm:gap-3 md:gap-3 lg:gap-4 w-full border-b-4 border-[#25136b] relative z-20 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
//         {statsData.map((stat, index) => (
//           <div
//             key={index}
//             className="inline-flex items-end flex-1"
//           >
//             <motion.div
//               className={`relative ${stat.height} w-full rounded-t-[20px] sm:rounded-t-[22px] md:rounded-t-[24px] lg:rounded-t-[28px] overflow-hidden origin-bottom`}
//               initial={{ scaleY: 0, opacity: 0 }}
//               whileInView={{ scaleY: 1, opacity: 1 }}
//               transition={{
//                 duration: 1.2,
//                 delay: index * 0.3,
//                 ease: "easeOut",
//               }}
//               viewport={{ once: true, amount: 0.1 }}
//             >
//               {/* Background Image */}
//               <Image
//                 src={stat.image}
//                 alt={stat.label}
//                 fill
//                 className="object-cover"
//                 priority={index === 0}
//               />

//               {/* Gradient Overlay */}
//               <div className={`absolute inset-0 bg-gradient-to-b ${stat.gradient}`} />

//               {/* Content */}
//               <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-7 lg:py-8">
//                 <div className="font-bold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-normal text-white font-['Lato',sans-serif]">
//                   {stat.value}
//                 </div>
//                 <div className="font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] leading-normal text-white font-['Lato',sans-serif]">
//                   {stat.label}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STRAPI_URL = "https://admin.finsbee.com";

export default function ResultsComponent() {
  const [resultsData, setResultsData] = useState({
    heading: "",
    highlight_text: "",
    cards: [],
  });

  // 🔥 CLIENT-SIDE API FETCH (same pattern as MainContent)
  useEffect(() => {
    const fetchResultsSection = async () => {
      try {
        const res = await fetch(
          "https://admin.finsbee.com/api/section-2s"
        );
        const json = await res.json();

        const section = json?.data?.[0];

        setResultsData({
          heading: section?.heading || "",
          highlight_text: section?.highlight_text || "",
          cards: section?.cards || [],
        });
      } catch (error) {
        console.error("Results section fetch failed", error);
      }
    };

    fetchResultsSection();
  }, []);

  return (
    <section className="flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-[136px] py-12 md:py-24 relative rounded-2xl bg-white">
      {/* ---------- Header ---------- */}
      <motion.div
        className="flex flex-col items-start w-full max-w-[400px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[456px]"
        whileInView={{ opacity: 1, x: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex flex-wrap w-full items-start leading-[1]">
          <h1 className="w-full font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
            {resultsData.heading}
          </h1>

          <div className="inline-flex flex-col items-center relative pt-4">
            <span className="relative w-fit font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
              <motion.span
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.8 }}
                className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
              />
              {resultsData.highlight_text}
            </span>
          </div>
        </div>
      </motion.div>

      {/* ---------- Stats Cards ---------- */}
      <div className="flex flex-row items-end justify-end gap-2 sm:gap-3 md:gap-3 lg:gap-4 w-full border-b-4 border-[#25136b] relative z-20 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
        {resultsData.cards.map((card, index) => {
          const height =
            index === 0
              ? "h-[180px] sm:h-[220px] md:h-[240px] lg:h-[280px]"
              : index === 1
              ? "h-[240px] sm:h-[280px] md:h-[300px] lg:h-[360px]"
              : "h-[300px] sm:h-[340px] md:h-[360px] lg:h-[440px]";

          const gradient =
            index === 1
              ? "from-[rgba(255,199,60,0.8)] via-[rgba(255,199,60,0.8)] to-[rgba(89,46,255,0.8)]"
              : "from-[rgba(89,46,255,0.8)] to-[rgba(46,66,255,0.8)]";

          return (
            <div key={index} className="inline-flex items-end flex-1">
              <motion.div
                className={`relative ${height} w-full rounded-t-[20px] sm:rounded-t-[22px] md:rounded-t-[24px] lg:rounded-t-[28px] overflow-hidden origin-bottom`}
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Background Image */}
                <Image
                  src={`${STRAPI_URL}${card.image}`}
                  alt={card.description}
                  fill
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${gradient}`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-7 lg:py-8">
                  <div className="font-bold text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] text-white">
                    {card.sub_heading}
                  </div>
                  <div className="font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-white">
                    {card.description}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
