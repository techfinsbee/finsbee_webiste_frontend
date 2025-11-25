// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// export default function Section3() {
//   return (
//     <>
//       <div className="flex flex-col items-center px-2 md:px-[136px]">
       
//         <motion.div
//           className="flex flex-col items-start w-full max-w-[400px] mb-10 sm:max-w-[420px] md:max-w-[440px] lg:max-w-[456px]"
//           whileInView={{ opacity: 1, x: 0.1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.1 }}
//         >
//           <div className="flex flex-wrap w-full items-start">
//             <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#212121]">
//               Types of
//             </h1>
//             <h1 className="w-full font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
//               Your Gateway
//             </h1>

//             <div className="inline-flex flex-col items-center relative">
//               <span className="relative w-full font-bold text-[30px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
//                 <motion.span
//                   initial={{ scaleY: 0, opacity: 0 }}
//                   whileInView={{ scaleY: 1, opacity: 1 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.8 }}
//                   className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
//                 />
//                 to Wealth
//               </span>
//             </div>
//             <div className="inline-flex flex-col items-center relative">
//               <h1 className="font-bold text-[30px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
//                 in Gold & Silver
//               </h1>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       <div className="bg-white -mt-10">
//         {/* Main Container */}
//         <section className="flex flex-col items-center px-4 md:px-32 ">
//           {/* Header Section */}

//           {/* Content Cards Section */}
//           <div className="w-full max-w-6xl items-end grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-[#EEEAFF] h-[336px]  rounded-2xl p-12">
//               <p className="text-gray-800 text-xl leading-relaxed">
//                 Whether you wish to buy gold online as a symbol of timeless
//                 security or explore the dynamic growth potential of silver
//                 investment, our platform ensures your journey is safe, reliable,
//                 and effortless. Every transaction is backed by secure systems,
//                 transparent pricing, and a guarantee of purity, giving you
//                 confidence in every decision you make.
//               </p>
//             </div>

//             <div className="bg-[#FFEEC3] rounded-2xl p-12">
//               <p className="text-gray-800 text-xl leading-relaxed">
//                 With FinsBee, investing is more than just making a purchase;
//                 it's about creating a route to long-term prosperity. We empower
//                 you to diversify, safeguard, and boost your financial path by
//                 offering safe online gold investments as well as flexible
//                 alternatives to acquire digital gold and silver online. By
//                 combining proven financial advice with modern digital
//                 convenience, we enable you to invest with clarity, confidence,
//                 and complete control. At FinsBee, you don't simply buy gold or
//                 silver; you also have the option to invest in your future with
//                 elegance and security.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function Section3() {
  return (
    <>
      {/* Title Section */}
      <div className="flex flex-col items-start px-4 sm:px-8 md:px-[100px] lg:px-[136px] mt-10 ">
        <motion.div
          // className="flex flex-col items-start w-full max-w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mb-10 text-center md:text-left"
           className="flex flex-col items-start gap-2 sm:gap-3 py-0 w-full max-w-full sm:max-w-[400px] md:max-w-[456px] px-4 sm:px-0"
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col sm:flex-wrap w-full items-center md:items-start gap-2">
            <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[16px] text-[#212121] uppercase tracking-wide">
              Types of
            </h1>

            <h1 className="font-bold text-[26px] sm:text-[38px] md:text-[48px] lg:text-[64px] text-[#212121] leading-snug">
              Your Gateway
            </h1>

            <div className="inline-flex flex-col items-center md:items-start relative">
              <span className="relative w-full font-bold text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-[#212121] leading-tight">
                <motion.span
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="absolute inset-0 bg-yellow-400 -z-10 origin-top rounded-md"
                />
                to Wealth
              </span>
            </div>

            <div className="inline-flex flex-col items-center md:items-start relative">
              <h1 className="font-bold text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-[#212121] leading-tight">
                in Gold & Silver
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="bg-white mt-0 sm:mt-4">
        <section className="flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-32 pb-12">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card */}
            <div className="bg-[#EEEAFF] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                Whether you wish to buy gold online as a symbol of timeless
                security or explore the dynamic growth potential of silver
                investment, our platform ensures your journey is safe, reliable,
                and effortless. Every transaction is backed by secure systems,
                transparent pricing, and a guarantee of purity, giving you
                confidence in every decision you make.
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-[#FFEEC3] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
                With FinsBee, investing is more than just making a purchase; it's
                about creating a route to long-term prosperity. We empower you
                to diversify, safeguard, and boost your financial path by
                offering safe online gold investments as well as flexible
                alternatives to acquire digital gold and silver online. By
                combining proven financial advice with modern digital
                convenience, we enable you to invest with clarity, confidence,
                and complete control. At FinsBee, you don't simply buy gold or
                silver; you also have the option to invest in your future with
                elegance and security.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
