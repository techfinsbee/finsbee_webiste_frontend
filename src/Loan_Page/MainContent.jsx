// import React from "react";
// import { features } from "./Constant";

// const MainContent = () => {
//   return (
//     <main className="flex items-center gap-[120px] px-[136px] py-12 relative self-stretch w-full flex-[0_0_auto]">
//       <div className="flex flex-col items-center gap-[50px] relative flex-1 grow">
//         <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
//           <section className="flex flex-col w-[600px] items-start  relative self-stretch translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
//             <h1 className="w-full font-bold text-[#FFD263] text-3xl sm:text-4xl md:text-6xl text-start leading-normal relative tracking-[0px]">
//               Personal Loan 
//             </h1>
//             <div>
            
//             </div>
//             <p className="self-stretch text-[#FFEEC3]  text-[20px] relative ">
//               Get a Personal Loan of up to Rs. 50 Lakhs to pursue your dreams.
//               Quick approval, minimal documentation, and competitive interest
//               rates.
//             </p>
//           </section>
//           <aside className="flex flex-col w-[471px] items-start gap-3.5 px-0 py-6 relative self-stretch translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
//             <div className="flex items-start justify-between relative flex-1 self-stretch w-full grow">
//               <div className="flex flex-col items-start gap-3.5 relative flex-1 self-stretch grow">
//                 {features.map((feature) => (
//                   <div
//                     key={feature}
//                     className="flex items-center gap-3 font-extralight text-white pl-0 pr-6 py-0 relative self-stretch w-full flex-[0_0_auto]"
//                   >
//                     <img
//                       className="relative w-6 h-6"
//                       alt="Vuesax broken tick"
//                       src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg"
//                     />
//                     <span className="relative flex-1 font-regular-text font-[number:var(--regular-text-font-weight)] text-primary-light text-[length:var(--regular-text-font-size)] tracking-[var(--regular-text-letter-spacing)] leading-[var(--regular-text-line-height)] [font-style:var(--regular-text-font-style)]">
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
//                 <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-0 relative flex-1 self-stretch w-full grow">
//                   <button className="flex flex-col h-6 items-start gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors">
//                     <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mb-[-1.00px]">
//                       <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] border-b-2 [border-bottom-style:solid] border-[#ffc73c]">
//                         <span className="relative text-[#FFD263]  w-fit font-bold-title-3 font-[number:var(--bold-title-3-font-weight)] text-foundationsecondarysecondary-500 text-[length:var(--bold-title-3-font-size)] tracking-[var(--bold-title-3-letter-spacing)] leading-[var(--bold-title-3-line-height)] [font-style:var(--bold-title-3-font-style)]">
//                           Check Eligibility Criteria
//                         </span>
//                       </div>
//                       <img
//                         className="absolute w-3 h-3 top-0.5 -left-5"
//                         alt="Vuesax broken arrow"
//                         src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
//                       />
//                     </div>
//                   </button>
//                   <button className="flex flex-col h-6 items-start gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors">
//                     <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mb-[-1.00px]">
//                       <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] border-b-2 [border-bottom-style:solid] border-[#ffc73c]">
//                         <span className="relative w-fit text-[#FFD263]  font-bold-title-3 font-[number:var(--bold-title-3-font-weight)] text-foundationsecondarysecondary-500 text-[length:var(--bold-title-3-font-size)] tracking-[var(--bold-title-3-letter-spacing)] leading-[var(--bold-title-3-line-height)] [font-style:var(--bold-title-3-font-style)]">
//                           Check Document Required
//                         </span>
//                       </div>
//                       <img
//                         className="absolute w-3 h-3 top-0.5 -left-5"
//                         alt="Vuesax broken arrow"
//                         src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
//                       />
//                     </div>
//                   </button>
//                 </div>
//                 <div className="flex items-center justify-around  gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
//                   <div className="flex items-center gap-2.5 relative flex-1 self-stretch grow">
//                     <button className="inline-flex items-center bg-[#FFD263] justify-center gap-2.5 px-7 py-4 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-foundationsecondarysecondary-400 rounded-[28px] border border-solid border-[#ffe5a5] hover:bg-foundationsecondarysecondary-500 h-auto transition-colors">
//                       <span className="relative w-fit   font-bold-title-1 font-[number:var(--bold-title-1-font-weight)] text-foundationtertiarytertiary-500 text-[length:var(--bold-title-1-font-size)] tracking-[var(--bold-title-1-letter-spacing)] leading-[var(--bold-title-1-line-height)] whitespace-nowrap [font-style:var(--bold-title-1-font-style)]">
//                         Calculate EMI
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default MainContent;
"use client";
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Eligibility = ({ onClose }) => {
  const eligibilityCriteria = [
    {
      title: "For Salaried Individuals",
      image: "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
      criteria: [
        "Age: 21-58 years",
        "Minimum monthly income: ₹15,000",
        "At least 6 months in current job",
        "Credit Score: 650+",
      ],
    },
    {
      title: "For Self-Employed Individuals",
      image: "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
      criteria: [
        "Age: 21-65 years",
        "Minimum monthly income: ₹20,000",
        "Business running for 2+ years",
        "Credit Score: 650+",
      ],
    },
  ];

  const modalRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={modalRef}
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-[90%] max-w-5xl bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center mb-10">
          <p className="text-gray-600 font-bold text-sm tracking-wide uppercase">
            The Results Speaks for Themselves
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Eligibility Criteria
          </h1>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col lg:flex-row items-start gap-0 w-full">
          {eligibilityCriteria.map((section, index) => (
            <div
              key={index}
              className={`flex-1 bg-white p-6 ${
                index === 0
                  ? "lg:border-r border-dashed border-gray-300 lg:rounded-r-none rounded-lg lg:rounded-l-lg"
                  : "lg:border-l-0 lg:rounded-l-none rounded-lg lg:rounded-r-lg"
              } ${index > 0 ? "mt-6 lg:mt-0" : ""}`}
            >
              <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                {/* Text Content */}
                <div className="flex flex-col gap-6 flex-1">
                  <h2 className="text-xl md:text-2xl font-normal text-gray-800">
                    {section.title}
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {section.criteria.map((criterion, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-800 text-base">
                          {criterion}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className="flex items-center justify-center flex-shrink-0">
                  <img
                    className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-lg"
                    alt="Professional illustration"
                    src={section.image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const App = () => {
  const [showEligibility, setShowEligibility] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <button
        onClick={() => setShowEligibility(true)}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
      >
        Show Eligibility
      </button>

      <AnimatePresence>
        {showEligibility && (
          <Eligibility onClose={() => setShowEligibility(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
