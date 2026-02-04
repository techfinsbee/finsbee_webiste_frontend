


// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Heading from "../Heading/Heading";

// const steps = [
//   {
//     id: "01",
//     title: "Download & Register",
//     description:
//       "Download the Finsbee app from Google Play Store or Apple App Store and complete a quick, secure registration.",
//     img: "/landing_page/step-1.webp",
//   },
//   {
//     id: "02",
//     title: "Submit Your Loan Application",
//     description:
//       "Select your preferred loan type and fill in the basic details to start your online loan application.",
//     img: "/landing_page/step-2.webp",
//   },
//   {
//     id: "03",
//     title: "Submit Your Information",
//     description:
//       "Share your PAN, KYC, income, and other required information through our encrypted platform so lenders can assess your profile.",
//     img: "/landing_page/step-3.webp",
//   },
//   {
//     id: "04",
//     title: " Loan Disbursal & Tracking",
//     description:
//       "Track your loan status anytime in the Finsbee app under the Track Application section to see if it is under review, approved, or disbursed.",
//     img: "/landing_page/step-4.webp",
//   },
// ];

// export default function Timeline() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end start"],
//   });
//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <>
//       <Heading />
//       <section ref={containerRef} className="relative pb-12 pt-2 md:pt-5 md:pb-24   bg-white h-fit">

//         <div className="absolute left-1/2 -translate-x-1/2 top-0 hidden md:block pointer-events-none z-10">
//           {/* Grey Track */}
//           <div className="relative w-[12px] h-[85rem] bg-[#f5f0ff] rounded-full overflow-hidden">
//             {/* Grey Caps */}
//             <span className="absolute top-0 left-0 w-[12px] h-[12px] bg-[#f5f0ff] rounded-full" />
//             <span className="absolute bottom-0 left-0 w-[12px] h-[12px] bg-[#f5f0ff] rounded-full" />

//             {/* Yellow Progress */}
//             <motion.div
//               style={{ scaleY, transformOrigin: "top" }}
//               className="absolute inset-0 bg-yellow-400 rounded-full"
//             >
//               {/* Yellow Caps */}
//               <span className="absolute top-0 left-0 w-[12px] h-[12px]  bg-yellow-400 rounded-full" />
//               <span className="absolute bottom-0 left-0 w-[12px] h-[12px] bg-yellow-400 rounded-full" />
//             </motion.div>
//           </div>
//         </div>


//         <div className="max-w-6xl mx-auto px-6 md:px-8 md:space-y-24">
//           {steps.map((step, index) => {
//             const isEven = index % 2 === 0;
//             const containerClasses = `flex flex-col md:flex-row items-center md:items-start ${isEven ? "flex-col" : "md:flex-row-reverse"
//               } gap-8 md:gap-16`;

//             return (
//               <motion.div
//                 key={step.id}
//                 className={containerClasses}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 {/* IMAGE SIDE */}
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-center order-2 md:order-none">
//                   <motion.div
//                     className="w-[320px] h-[364px] md:w-64 md:h-64 flex items-center justify-center overflow-hidden"
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     viewport={{ once: true }}
//                   >
//                     <img
//                       src={step.img}
//                       alt={step.title}
//                       className="object-contain h-full"
//                     />
//                   </motion.div>
//                 </div>

//                 {/* TEXT SIDE (no X-direction animation now) */}
//                 <motion.div
//                  className="w-full md:w-1/2 px-2 md:px-0 order-1 md:order-none"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.3 }}
//                   viewport={{ once: true }}
//                 >
//                   <div
//                     className={`flex mb-4 ${isEven ? "justify-start" : "justify-end"
//                       }`}
//                   >
//                     <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-semibold flex items-center justify-center">
//                       {step.id}
//                     </div>
//                   </div>

//                   <h3
//                     className={`text-3xl md:text-4xl font-semibold text-gray-900 ${isEven ? "text-left" : "text-right"
//                       }`}
//                   >
//                     {step.title}
//                   </h3>

//                   <p
//                     className={`mt-3 text-gray-600 max-w-xl ${isEven ? "text-left" : "text-right md:ml-auto"
//                       }`}
//                   >
//                     {step.description}
//                   </p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// }



"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "../Heading/Heading";

const STRAPI_URL = "https://admin.finsbee.com";

export default function Timeline() {
  const containerRef = useRef(null);

  const [steps, setSteps] = useState([]);

  // 🔥 CLIENT-SIDE API FETCH (same pattern as your other components)
  useEffect(() => {
    const fetchHomepageSteps = async () => {
      try {
        const res = await fetch(
          "https://admin.finsbee.com/api/homepage-steps"
        );
        const json = await res.json();

        const sortedSteps = (json?.data || [])
          .sort((a, b) => a.order - b.order)
          .map((step) => ({
            id: step.step_id.padStart(2, "0"),
            title: step.title,
            description: step.description,
            img: `${STRAPI_URL}${step.img}`,
          }));

        setSteps(sortedSteps);
      } catch (error) {
        console.error("Homepage steps fetch failed", error);
      }
    };

    fetchHomepageSteps();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <Heading />

      <section
        ref={containerRef}
        className="relative pb-12 pt-2 md:pt-5 md:pb-24 bg-white h-fit"
      >
        {/* ---------- CENTER LINE ---------- */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 hidden md:block pointer-events-none z-10">
          <div className="relative w-[12px] h-[85rem] bg-[#f5f0ff] rounded-full overflow-hidden">
            <span className="absolute top-0 left-0 w-[12px] h-[12px] bg-[#f5f0ff] rounded-full" />
            <span className="absolute bottom-0 left-0 w-[12px] h-[12px] bg-[#f5f0ff] rounded-full" />

            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-yellow-400 rounded-full"
            >
              <span className="absolute top-0 left-0 w-[12px] h-[12px] bg-yellow-400 rounded-full" />
              <span className="absolute bottom-0 left-0 w-[12px] h-[12px] bg-yellow-400 rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="max-w-6xl mx-auto px-6 md:px-8 md:space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const containerClasses = `flex flex-col md:flex-row items-center md:items-start ${
              isEven ? "flex-col" : "md:flex-row-reverse"
            } gap-8 md:gap-16`;

            return (
              <motion.div
                key={step.id}
                className={containerClasses}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* IMAGE SIDE */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-center order-2 md:order-none">
                  <motion.div
                    className="w-[320px] h-[364px] md:w-64 md:h-64 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={step.img}
                      alt={step.title}
                      className="object-contain h-full"
                    />
                  </motion.div>
                </div>

                {/* TEXT SIDE */}
                <motion.div
                  className="w-full md:w-1/2 px-2 md:px-0 order-1 md:order-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`flex mb-4 ${
                      isEven ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-semibold flex items-center justify-center">
                      {step.id}
                    </div>
                  </div>

                  <h3
                    className={`text-3xl md:text-4xl font-semibold text-gray-900 ${
                      isEven ? "text-left" : "text-right"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-3 text-gray-600 max-w-xl ${
                      isEven ? "text-left" : "text-right md:ml-auto"
                    }`}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
