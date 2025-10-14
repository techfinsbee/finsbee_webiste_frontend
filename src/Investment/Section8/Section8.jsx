// "use client";

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
//     <section className="flex flex-col items-center gap-8 pt-24 pb-40 px-[136px] relative">
//       {/* Header */}
//       <div className="flex flex-col items-start gap-2.5 px-4 w-full">
//         <h2 className="w-[456px] font-bold text-gray-800 text-base tracking-wide leading-5">
//           The Results Speaks for Themselves
//         </h2>

//         <div className="flex flex-wrap w-[458px] items-start gap-[0px_10px]">
//           <h1 className="w-[458px] font-bold text-gray-800 text-6xl">
//             Price rate of
//           </h1>

//           <div className="inline-flex flex-col items-center justify-center">
//             <div className="w-full h-[72px] bg-yellow-400" />
//             <span className="w-fit -mt-[73px] font-bold text-gray-800 text-6xl">
//               Gold and Silver
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main */}
//       <div className="flex w-[1240px] items-end gap-6 relative">
//         <div className="flex flex-col w-[640px] items-start gap-6">
//           <p className="text-gray-600 text-2xl leading-[30px]">
//             Making the right investment starts with the right knowledge.
//           </p>

//           <blockquote className="flex items-center gap-2.5 pl-4 border-l-8 border-yellow-400">
//             <p className="font-bold text-gray-800 text-xl">
//               By staying updated with real-time market prices of gold and silver,
//               you gain the power to spot opportunities and make timely decisions.
//             </p>
//           </blockquote>

//           <p className="text-gray-600 text-base tracking-wide">
//             Whether it&apos;s checking the daily gold price, analyzing silver market
//             trends, or evaluating long-term movements, accurate insights give you the
//             confidence to invest wisely and grow your wealth securely.
//           </p>

//           <div className="flex items-start gap-6 pr-[200px] w-full">
//             {priceCards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col items-center justify-center p-6 flex-1 ${card.bgColor} rounded-xl border ${card.borderColor}`}
//               >
//                 <div className="flex flex-col items-center">
//                   <div className="font-bold text-gray-600 text-3xl">
//                     {card.price}
//                   </div>
//                   <div className="text-gray-600 text-base">{card.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Chart */}
//         <div className="flex flex-col w-[982px] h-[614px] items-center justify-center gap-2.5 p-3 absolute top-[-103px] left-[664px]">
//           <img
//             src="/Investment/lp.svg"
//             alt="Rate chart showing gold and silver price trends"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="flex w-[1240px] items-start gap-2 pr-[640px]">
//         <div className="flex flex-col w-[9px] items-center py-1.5">
//           <span className="text-gray-800 text-xl">*</span>
//         </div>
//         <p className="text-gray-800 text-base tracking-wide">
//           Stay informed with live updates to make every gold investment secure
//           and every silver trade smarter.
//         </p>
//       </div>
//     </section>
//   );
// }

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
//       {/* Right Side Image */}
     
//         {/* Right Side Image */}
//         <div className="absolute right-[-136px] bottom-[77rem] w-[980px] h-[620px]">
//           <img
//             src="/Investment/lp.svg"
//             alt="Rate chart showing gold and silver price trends"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       <section className="relative flex flex-col items-start gap-16 pt-24 pb-40 px-[136px]">
//         {/* Header */}

//         <motion.header className="flex flex-col items-start gap-2.5 py-0 w-full max-w-[456px]">
//           <h3 className="font-bold text-[16px] leading-[20px] tracking-[0.5px] text-[#212121]">
//             The Results Speaks for Themselves
//           </h3>

//           <div className="flex flex-wrap w-full items-start gap-[10px]">
//             <h1 className="w-full font-bold text-[64px] leading-normal text-[#212121] font-['Lato',sans-serif]">
//               Price rate of
//             </h1>
//             <span className="relative w-fit font-bold text-[64px] leading-normal text-[#212121] font-['Lato',sans-serif]">
//               {/* Animated Yellow Highlight */}
//               <motion.span
//                 initial={{ scaleY: 0, opacity: 0 }} // start invisible & collapsed
//                 whileInView={{ scaleY: 1, opacity: 1 }} // grow downward & fade in
//                 exit={{ scaleY: 0, opacity: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 viewport={{ once: false, amount: 0.8 }}
//                 className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
//               />
//               Gold and Silver
//             </span>
//           </div>

//           <p className="font-normal text-[14px] leading-[18px] tracking-[0.5px] text-[#212121] font-['Lato',sans-serif]">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam.
//           </p>
//         </motion.header>

//         {/* Main Content */}
//         <div className="flex w-full justify-between  relative">
//           {/* Left Text + Cards */}
//           <div className="flex flex-col w-[640px] gap-6">
//             <p className="text-gray-600 text-2xl leading-[30px]">
//               Making the right investment starts with the right knowledge.
//             </p>

//             <blockquote className="flex items-center gap-2.5 pl-4 border-l-8 border-yellow-400">
//               <p className="font-bold text-gray-800 text-xl">
//                 By staying updated with real-time market prices of gold and
//                 silver, you gain the power to spot opportunities and make timely
//                 decisions.
//               </p>
//             </blockquote>

//             <p className="text-gray-600 text-base tracking-wide">
//               Whether it&apos;s checking the daily gold price, analyzing silver
//               market trends, or evaluating long-term movements, accurate
//               insights give you the confidence to invest wisely and grow your
//               wealth securely.
//             </p>

//             <div className="flex gap-6 w-full">
//               {priceCards.map((card, index) => (
//                 <div
//                   key={index}
//                   className={`flex flex-col  justify-between p-6  ${card.bgColor} rounded-xl border ${card.borderColor}`}
//                 >
//                   <div className="font-bold text-gray-600 text-3xl">
//                     {card.price}
//                   </div>
//                   <div className="text-gray-600 text-base">{card.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

        
//         </div>

//         {/* Footer */}
//         <div className="flex w-full max-w-[1240px] items-start gap-2">
//           <span className="text-gray-800 text-xl">*</span>
//           <p className="text-gray-800 text-base tracking-wide">
//             Stay informed with live updates to make every gold investment secure
//             and every silver trade smarter.
//           </p>
//         </div>
//       </section>

//     </>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function Section8() {
  const priceCards = [
    {
      price: "₹/10g",
      label: "Current Gold Price",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
    },
    {
      price: "₹/10g",
      label: "Current Silver Price",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
    },
  ];

  return (
    <>
      {/* Wrapper to prevent overflow */}
      <div className="relative overflow-x-hidden">
        {/* Right Side Image */}
        <div className="hidden 2xl:absolute right-[-136px] bottom-[10rem] w-[980px] h-[620px]">
          <img
            src="/Investment/lp.svg"
            alt="Rate chart showing gold and silver price trends"
            className="w-full h-full object-contain"
          />
        </div>
        <section className="relative flex flex-col items-start gap-16 pt-24 pb-40 px-2 lg:px-[136px]">
          {/* Header */}
         <motion.header className="flex flex-col items-start gap-2 sm:gap-3 py-0 w-full max-w-full sm:max-w-[400px] md:max-w-[456px] px-4 sm:px-0">
  {/* Subheading */}
  <h3 className="font-bold text-sm sm:text-base md:text-[16px] leading-[18px] sm:leading-[20px] tracking-[0.5px] text-[#212121]">
    The Results Speaks for Themselves
  </h3>

  {/* Heading */}
  <div className="flex flex-wrap w-full items-start gap-[6px] sm:gap-[10px]">
    <h1 className="w-full font-bold text-3xl sm:text-5xl md:text-[64px] leading-snug sm:leading-tight text-[#212121] font-['Lato',sans-serif]">
      Price rate of
    </h1>

    <span className="relative w-fit font-bold text-3xl sm:text-5xl md:text-[64px] leading-snug sm:leading-tight text-[#212121] font-['Lato',sans-serif]">
      {/* Animated Yellow Highlight */}
      <motion.span
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        exit={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.8 }}
        className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
      />
      Gold and Silver
    </span>
  </div>

  {/* Optional paragraph (kept commented for future use) */}
  {/* <p className="font-normal text-xs sm:text-sm md:text-[14px] leading-[18px] tracking-[0.5px] text-[#212121] font-['Lato',sans-serif]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p> */}
</motion.header>


          {/* Main Content */}
          <div className="flex w-full justify-between relative">
            {/* Left Text + Cards */}
            <div className="flex flex-col w-[640px] gap-6">
              <p className="text-gray-600 text-2xl leading-[30px]">
                Making the right investment starts with the right knowledge.
              </p>

              <blockquote className="flex items-center gap-2.5 pl-4 border-l-8 border-yellow-400">
                <p className="font-bold text-gray-800 text-xl">
                  By staying updated with real-time market prices of gold and
                  silver, you gain the power to spot opportunities and make timely
                  decisions.
                </p>
              </blockquote>

              <p className="text-gray-600 text-base tracking-wide">
                Whether it&apos;s checking the daily gold price, analyzing silver
                market trends, or evaluating long-term movements, accurate
                insights give you the confidence to invest wisely and grow your
                wealth securely.
              </p>

              <div className="flex gap-6 w-full">
                {priceCards.map((card, index) => (
                  <div
                    key={index}
                    className={`flex flex-col justify-between p-6 ${card.bgColor} rounded-xl border ${card.borderColor}`}
                  >
                    <div className="font-bold text-gray-600 text-3xl">
                      {card.price}
                    </div>
                    <div className="text-gray-600 text-base">{card.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
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