// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Heading from "../Heading/Heading";

// const steps = [
//   {
//     id: "01",
//     title: "Download & Register App",
//     description:
//       "Pleasure exertion if believed provided to. All led out world this music while asked.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "02",
//     title: "Setup Your Profile",
//     description:
//       "Easily set up your profile and get started with personalized features.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "03",
//     title: "Explore Features",
//     description:
//       "Discover all the amazing features designed to make your experience smooth.",
//     img: "/landing_page/timeline.png",
//   },

// ];

// export default function Timeline() {
//   // target ref for scroll progress (line grows relative to this container)
//   const containerRef = useRef(null);

//   // useScroll relative to the container
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"], // adjust when progress starts/ends
//   });

//   // direct mapping 0..1 -> 0..1 (scaleY of the yellow bar)
//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
//   const progressBarRef = useRef(null);

//   return (
//     <>
//     <Heading/>
//     <section ref={containerRef} className="relative py-12 bg-white h-fit">
//       {/* vertical track (light) */}
//       <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none">
//         <div className="w-[12px] h-[1100px] bg-[#f5f0ff]" />
//       </div>

//       {/* animated yellow progress bar (single animation) */}
//       <motion.div
//         ref={progressBarRef}
//         style={{ scaleY, transformOrigin: 'top center' }}
//         className="absolute top-0 left-[50.4%] -translate-x-1/2 w-[12px] h-[1100px] rounded-full bg-yellow-400 z-10 pointer-events-none"
//       />

//       <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-36">
//         {steps.map((step, index) => {
//           const isEven = index % 2 === 0;
//           // layout: on small screens it stacks, on md+ it alternates sides
//           const containerClasses = `flex flex-col md:flex-row items-center md:items-start ${
//             isEven ? "md:flex-row" : "md:flex-row-reverse"
//           } gap-8 md:gap-16`;

//           return (
//             <div key={step.id} className={containerClasses}>
//               {/* IMAGE SIDE */}
//               <div className="w-full md:w-1/2 flex justify-center md:justify-center">
//                 <div className="w-[320px] h-[364px] md:w-64 md:h-64  flex items-center justify-center overflow-hidden">
//                   <img
//                     src={step.img}
//                     alt={step.title}
//                     className="object-contain h-full"
//                   />
//                 </div>
//               </div>

//               {/* TEXT SIDE */}
//               <div className="w-full md:w-1/2 px-2 md:px-0">
//                 <div
//                   className={`flex mb-4 ${
//                     isEven ? "justify-start" : "justify-end"
//                   }`}
//                 >
//                   <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-semibold flex items-center justify-center">
//                     {step.id}
//                   </div>
//                 </div>

//                 <h3
//                   className={`text-3xl md:text-4xl font-semibold text-gray-900 ${
//                     isEven ? "text-left" : "text-right"
//                   }`}
//                 >
//                   {step.title}
//                 </h3>

//                 <p
//                   className={`mt-3 text-gray-600 max-w-xl ${
//                     isEven ? "text-left" : "text-right md:ml-auto"
//                   }`}
//                 >
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//     </>
//   );
// }

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Heading from "../Heading/Heading";

// const steps = [
//   {
//     id: "01",
//     title: "Download & Register",
//     description:
//       "Install the FinsBee app from the Google Play Store or Apple App Store, and complete a quick and secure registration process.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "02",
//     title: "Submit Your Loan Application",
//     description:
//       "Choose your preferred loan type and fill in the necessary details to initiate your application.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "03",
//     title: "Upload Documents Securely",
//     description:
//       "Upload your PAN card and other required documents through our encrypted platform, ensuring your information remains protected.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "04",
//     title: "Loan Disbursal",
//     description:
//       "Check your loan status anytime in the FinsBee app.Just go to the Transactions section to see if your loan is under review, approved, or disbursed.",
//     img: "/landing_page/timeline.png",
//   },
// ];

// export default function Timeline() {
//   const containerRef = useRef(null);

//   // progress bar grows as section scrolls
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });
//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <>
//       <Heading />
//       <section ref={containerRef} className="relative py-10 bg-white h-fit">
//         {/* vertical track */}
//         <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 pointer-events-none">
//           <div className="w-[12px] h-[1450px] rounded-full bg-[#f5f0ff]" />
//         </div>

//         {/* animated yellow progress bar */}
//         <motion.div
//           style={{ scaleY, transformOrigin: "top center" }}
//           className="absolute inset-y-0 left-[50.3%] -translate-x-1/2 w-[12px]  rounded-full bg-yellow-400 z-10 pointer-events-none"
//         />

//         <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-36">
//           {steps.map((step, index) => {
//             const isEven = index % 2 === 0;
//             const containerClasses = `flex flex-col md:flex-row items-center md:items-start ${
//               isEven ? "md:flex-row" : "md:flex-row-reverse"
//             } gap-8 md:gap-16`;

//             return (
//               <motion.div
//                 key={step.id}
//                 className={containerClasses}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 {/* IMAGE SIDE */}
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-center">
//                   <motion.div
//                     className="w-[320px] h-[364px] md:w-64 md:h-64 flex items-center  justify-center overflow-hidden"
//                     initial={{ scale: 0.9, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
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

//                 {/* TEXT SIDE */}
//                 <motion.div
//                   className="w-full md:w-1/2 px-2 md:px-0"
//                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.3 }}
//                   viewport={{ once: true }}
//                 >
//                   <div
//                     className={`flex mb-4 ${
//                       isEven ? "justify-start" : "justify-end"
//                     }`}
//                   >
//                     <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-semibold flex items-center justify-center">
//                       {step.id}
//                     </div>
//                   </div>

//                   <h3
//                     className={`text-3xl md:text-4xl font-semibold text-gray-900 ${
//                       isEven ? "text-left" : "text-right"
//                     }`}
//                   >
//                     {step.title}
//                   </h3>

//                   <p
//                     className={`mt-3 text-gray-600 max-w-xl ${
//                       isEven ? "text-left" : "text-right md:ml-auto"
//                     }`}
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

// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Heading from "../Heading/Heading";

// const steps = [
//   {
//     id: "01",
//     title: "Download & Register",
//     description:
//       "Install the FinsBee app from the Google Play Store or Apple App Store, and complete a quick and secure registration process.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "02",
//     title: "Submit Your Loan Application",
//     description:
//       "Choose your preferred loan type and fill in the necessary details to initiate your application.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "03",
//     title: "Upload Documents Securely",
//     description:
//       "Upload your PAN card and other required documents through our encrypted platform, ensuring your information remains protected.",
//     img: "/landing_page/timeline.png",
//   },
//   {
//     id: "04",
//     title: "Loan Disbursal",
//     description:
//       "Check your loan status anytime in the FinsBee app. Just go to the Transactions section to see if your loan is under review, approved, or disbursed.",
//     img: "/landing_page/timeline.png",
//   },
// ];

// export default function Timeline() {
//   const containerRef = useRef(null);

//   // Progress bar animation starts when component enters viewport
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end start"],
//   });
//   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   return (
//     <>
//       <Heading />
//       <section ref={containerRef} className="relative py-10 bg-white h-fit">
//         {/* Vertical gray track with circles at start and end */}
//         <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[12px] pointer-events-none hidden md:block ">
//           <div className="w-[12px] h-full rounded-full bg-[#f5f0ff]" />
//           {/* Top circle */}
//           <div className="absolute top-0 w-[12px] h-[12px] rounded-full bg-[#f5f0ff]" />
//           {/* Bottom circle */}
//           <div className="absolute bottom-0 w-[12px] h-[12px] rounded-full bg-[#f5f0ff]" />
//         </div>

//         {/* Animated yellow progress bar with circles at start and end */}
//         <motion.div
//           style={{ scaleY, transformOrigin: "top center" }}
//           className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[12px] hidden md:block rounded-full pointer-events-none z-10"
//         >
//           <div className="w-[12px] h-full rounded-full bg-yellow-400" />
//           {/* Top circle */}
//           <div className="absolute top-0 w-[12px] h-[12px] rounded-full bg-yellow-400" />
//           {/* Bottom circle */}
//           <div className="absolute bottom-0 w-[12px] h-[12px] rounded-full bg-yellow-400" />
//         </motion.div>

//         <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-36">
//           {steps.map((step, index) => {
//             const isEven = index % 2 === 0;
//             const containerClasses = `flex flex-col md:flex-row items-center md:items-start ${
//               isEven ? "md:flex-row" : "md:flex-row-reverse"
//             } gap-8 md:gap-16`;

//             return (
//               <motion.div
//                 key={step.id}
//                 className={containerClasses}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 {/* IMAGE SIDE */}
//                 <div className="w-full md:w-1/2 flex justify-center md:justify-center">
//                   <motion.div
//                     className="w-[320px] h-[364px] md:w-64 md:h-64 flex items-center justify-center overflow-hidden"
//                     initial={{ scale: 0.9, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
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

//                 {/* TEXT SIDE */}
//                 <motion.div
//                   className="w-full md:w-1/2 px-2 md:px-0"
//                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8, delay: 0.3 }}
//                   viewport={{ once: true }}
//                 >
//                   <div
//                     className={`flex mb-4 ${
//                       isEven ? "justify-start" : "justify-end"
//                     }`}
//                   >
//                     <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-semibold flex items-center justify-center">
//                       {step.id}
//                     </div>
//                   </div>

//                   <h3
//                     className={`text-3xl md:text-4xl font-semibold text-gray-900 ${
//                       isEven ? "text-left" : "text-right"
//                     }`}
//                   >
//                     {step.title}
//                   </h3>

//                   <p
//                     className={`mt-3 text-gray-600 max-w-xl ${
//                       isEven ? "text-left" : "text-right md:ml-auto"
//                     }`}
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

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "../Heading/Heading";

const steps = [
  {
    id: "01",
    title: "Download & Register",
    description:
      "Install the FinsBee app from the Google Play Store or Apple App Store, and complete a quick and secure registration process.",
    img: "/landing_page/timeline.png",
  },
  {
    id: "02",
    title: "Submit Your Loan Application",
    description:
      "Choose your preferred loan type and fill in the necessary details to initiate your application.",
    img: "/landing_page/timeline.png",
  },
  {
    id: "03",
    title: "Basic Information Submission",
    description:
      "Provide your basic details, such as your name, contact information, and any other required information, in the designated fields to help us process your request smoothly and accurately.",
    img: "/landing_page/timeline.png",
  },
  {
    id: "04",
    title: "Loan Disbursal",
    description:
      "Check your loan status anytime in the FinsBee app. Just go to the Transactions section to see if your loan is under review, approved, or disbursed.",
    img: "/landing_page/timeline.png",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <Heading />
      <section ref={containerRef} className="relative py-10 bg-white h-fit">
        {/* Vertical gray track */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[12px] pointer-events-none hidden md:block ">
          <div className="w-[12px] h-full rounded-full bg-[#f5f0ff]" />
          <div className="absolute top-0 w-[12px] h-[12px] rounded-full bg-[#f5f0ff]" />
          <div className="absolute bottom-0 w-[12px] h-[12px] rounded-full bg-[#f5f0ff]" />
        </div>

        {/* Animated progress bar */}
        <motion.div
          style={{ scaleY, transformOrigin: "top center" }}
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[12px] hidden md:block rounded-full pointer-events-none z-10"
        >
          <div className="w-[12px] h-full rounded-full bg-yellow-400" />
          <div className="absolute top-0 w-[12px] h-[12px] rounded-full bg-yellow-400" />
          <div className="absolute bottom-0 w-[12px] h-[12px] rounded-full bg-yellow-400" />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 space-y-36">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const containerClasses = `flex flex-col md:flex-row items-center md:items-start ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
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
                <div className="w-full md:w-1/2 flex justify-center md:justify-center">
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

                {/* TEXT SIDE (no X-direction animation now) */}
                <motion.div
                  className="w-full md:w-1/2 px-2 md:px-0"
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
