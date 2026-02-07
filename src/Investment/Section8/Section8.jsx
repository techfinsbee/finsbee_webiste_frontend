

// "use client";
// import { motion } from "framer-motion";

// export default function Section8() {
//   const priceCards = [
//     {
//       price: "₹/10g",
//       label: "Current Gold Price",
//       bgColor: "bg-yellow-50",
//       borderColor: "border-yellow-300",
//     },
//     {
//       price: "₹/10g",
//       label: "Current Silver Price",
//       bgColor: "bg-purple-50",
//       borderColor: "border-purple-300",
//     },
//   ];

//   return (
//     <>
//       {/* Wrapper to prevent overflow */}
//       <div className="relative overflow-x-hidden">
//         {/* Right Side Image */}
//         <div className="hidden xl:block absolute right-[-136px] bottom-[10rem] w-[980px] h-[620px] z-10">
//           <img
//             src="/Investment/lp.svg"
//             alt="Rate chart showing gold and silver price trends"
//             className="w-full h-full object-contain"
//           />
//         </div>

//         <section className="relative flex flex-col items-start gap-16  pb-40 px-2 lg:px-[136px]">
//           {/* Header */}
//           <motion.header className="flex flex-col items-start gap-2 sm:gap-3 py-0 w-full max-w-full sm:max-w-[400px] md:max-w-[456px] px-4 sm:px-0">
//             {/* Subheading */}
//             <h3 className="font-bold text-sm sm:text-base md:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] text-[#212121]">
//               The Results Speaks for Themselves
//             </h3>

//             {/* Heading */}
//             <div className="flex flex-wrap w-full items-start gap-[6px] sm:gap-[10px]">
//               <h1 className="w-full font-bold text-3xl sm:text-5xl md:text-[64px] leading-snug sm:leading-tight text-[#212121] font-['Lato',sans-serif]">
//                 Price rate of
//               </h1>

//               <span className="relative w-fit font-bold text-3xl sm:text-5xl md:text-[64px] leading-snug sm:leading-tight text-[#212121] font-['Lato',sans-serif]">
//                 {/* Animated Yellow Highlight */}
//                 <motion.span
//                   initial={{ scaleY: 0, opacity: 0 }}
//                   whileInView={{ scaleY: 1, opacity: 1 }}
//                   exit={{ scaleY: 0, opacity: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: false, amount: 0.8 }}
//                   className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
//                 />
//                 Gold and Silver
//               </span>
//             </div>


//           </motion.header>


//           {/* Main Content */}
//           <div className="flex w-full justify-between relative">
//             {/* Left Text + Cards */}
//             <div className="flex flex-col w-[640px] gap-6">
//               <p className="text-gray-600 text-2xl leading-[30px]">
//                 Making the right investment starts with the right knowledge.
//               </p>

//               <blockquote className="flex items-center gap-2.5 pl-4 border-l-8 border-yellow-400">
//                 <p className="font-bold text-gray-800 text-xl">
//                   By staying updated with real-time market prices of gold and
//                   silver, you gain the power to spot opportunities and make timely
//                   decisions.
//                 </p>
//               </blockquote>

//               <p className="text-gray-600 text-base tracking-wide">
//                 Whether it&apos;s checking the daily gold price, analyzing silver
//                 market trends, or evaluating long-term movements, accurate
//                 insights give you the confidence to invest wisely and grow your
//                 wealth securely.
//               </p>

//               <div className="flex gap-6 w-full">
//                 {priceCards.map((card, index) => (
//                   <div
//                     key={index}
//                     className={`flex flex-col justify-between p-6 ${card.bgColor} rounded-xl border ${card.borderColor}`}
//                   >
//                     <div className="font-bold text-gray-600 text-3xl">
//                       {card.price}
//                     </div>
//                     <div className="text-gray-600 text-base">{card.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex w-full max-w-[1240px] items-start gap-2">
//             <span className="text-gray-800 text-xl">*</span>
//             <p className="text-gray-800 text-base tracking-wide">
//               Stay informed with live updates to make every gold investment secure
//               and every silver trade smarter.
//             </p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }



"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

/* -----------------------------------------------
   COMPONENT
----------------------------------------------- */
export default function Section8({ priceCards = [], headers, footer }) {
  /* -----------------------------------------------
     NORMALIZE PRICE CARDS (SCALABLE)
  ----------------------------------------------- */
  const normalizedPriceCards = useMemo(() => {
    return priceCards.map((card) => ({
      label: card.label || "",
      price: card.price || "",
      type: card.type, // gold | silver (future ready)
      bgColor:
        card.type === "silver" ? "bg-purple-50" : "bg-yellow-50",
      borderColor:
        card.type === "silver"
          ? "border-purple-300"
          : "border-yellow-300",
    }));
  }, [priceCards]);

  return (
    <>
      {/* Wrapper to prevent overflow */}
      <div className="relative overflow-x-hidden">

        {/* Right Side Image (STATIC – UI SAFE) */}
        <div className="hidden xl:block absolute right-[-136px] bottom-[10rem] w-[980px] h-[620px] z-10">
          <img
            src="/Investment/lp.svg"
            alt="Rate chart showing gold and silver price trends"
            className="w-full h-full object-contain"
          />
        </div>

        <section className="relative flex flex-col items-start gap-16 pb-40 px-2 lg:px-[136px]">

          {/* HEADER */}
          <motion.header className="flex flex-col items-start gap-2 sm:gap-3 w-full max-w-full sm:max-w-[400px] md:max-w-[456px] px-4 sm:px-0">

            {/* Subheading */}
            <h3 className="font-bold text-sm sm:text-base tracking-[0.5px] text-[#212121]">
              {headers?.title1}
            </h3>

            {/* Heading */}
            <div className="flex flex-wrap w-full items-start gap-[6px] sm:gap-[10px]">
              <h1 className="w-full font-bold text-3xl sm:text-5xl md:text-[64px] text-[#212121]">
                {headers?.title2}
              </h1>

              <span className="relative w-fit font-bold text-3xl sm:text-5xl md:text-[64px] text-[#212121]">
                {/* Animated Yellow Highlight */}
                <motion.span
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.8 }}
                  className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
                />
                {headers?.yellowText}
              </span>
            </div>
          </motion.header>

          {/* MAIN CONTENT */}
          <div className="flex w-full justify-between relative">

            {/* LEFT TEXT + CARDS */}
            <div className="flex flex-col w-[640px] gap-6">

              <p className="text-gray-600 text-2xl leading-[30px]">
                {footer?.title1}
              </p>

              <blockquote className="flex items-center gap-2.5 pl-4 border-l-8 border-yellow-400">
                <p className="font-bold text-gray-800 text-xl">
                  {footer?.title2}
                </p>
              </blockquote>

              <p className="text-gray-600 text-base tracking-wide">
                {footer?.title4}
              </p>

              {/* PRICE CARDS */}
              <div className="flex gap-6 w-full">
                {normalizedPriceCards.map((card, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-between p-6 ${card.bgColor} rounded-xl border ${card.borderColor}`}
                  >
                    <div className="font-bold text-gray-600 text-3xl">
                      {card.price}
                    </div>
                    <div className="text-gray-600 text-base">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* FOOTER NOTE */}
          <div className="flex w-full max-w-[1240px] items-start gap-2">
            <span className="text-gray-800 text-xl">*</span>
            <p className="text-gray-800 text-base tracking-wide">
              Stay informed with live updates to make every gold investment secure
              and every silver trade smarter.
            </p>
          </div>

        </section>
      </div>
    </>
  );
}
