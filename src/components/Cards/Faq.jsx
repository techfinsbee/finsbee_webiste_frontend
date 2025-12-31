// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     question: "What exactly is Finsbee Consultation?",
//     answer:
//       "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
//   },
//   {
//     question: "How is Finsbee different from banks or agents?",
//     answer:
//       "We provide unbiased advice and do not push products for commission. Our focus is on your financial growth.",
//   },
//   {
//     question: "What are your plans and pricing?",
//     answer:
//       "We offer multiple flexible plans starting at very affordable rates. Details are available upon request.",
//   },
//   {
//     question: "Can you help me secure a lower interest rate?",
//     answer:
//       "Yes, we compare multiple lenders and negotiate to get you the best possible rate.",
//   },
//   {
//     question: "Is my information safe?",
//     answer:
//       "Absolutely. We follow strict data privacy protocols to ensure your information is always protected.",
//   },
//   {
//     question: "How do I book?",
//     answer:
//       "You can book a consultation through our website or mobile app in just a few steps.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(0); // first faq open by default

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index); // close if clicked again
//   };

//   return (
//     <section className="flex flex-col md:flex-row items-start h-[40rem] justify-between max-w-6xl mx-auto py-16 px-6 gap-12">
//       {/* Left Side Heading */}
//       <div className="md:w-1/3">
//         <h2 className="text-xl font-bold mb-4">The Results Speaks for Themselves</h2>
//         <h1 className="text-5xl font-bold text-black">
//           <span className="bg-yellow-400 px-3 py-1 rounded">FAQ’s</span>
//         </h1>
//       </div>

//       {/* Right Side FAQ Accordion */}
//       <div className="md:w-2/3 space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`border border-purple-200 rounded-lg shadow-sm overflow-hidden transition-all ${
//               openIndex === index ? "bg-white" : "bg-transparent"
//             }`}
//           >
//             {/* Header */}
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full flex justify-between items-center px-6 py-4 text-left"
//             >
//               <span
//                 className={`font-medium ${
//                   openIndex === index ? "text-purple-600" : "text-gray-700"
//                 }`}
//               >
//                 {faq.question}
//               </span>
//               {openIndex === index ? (
//                 <Minus className="text-purple-600" />
//               ) : (
//                 <Plus className="text-gray-500" />
//               )}
//             </button>

//             {/* Answer */}
//             <AnimatePresence>
//               {openIndex === index && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.4 }}
//                   className="px-6 pb-4 text-gray-600"
//                 >
//                   {faq.answer}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get loan approval and disbuserd?",
    answer:
      "Loan approvals are instant, and disbursal typically happens within 24 to 48 hours, depending on the lender and your documentation.",
  },
  {
    question: "Is the application process fully digital?",
    answer:
      "Yes, FinsBee offers a 100% paperless and digital process—apply, upload documents, and track your loan entirely online.",
  },
  {
    question: "What types of loan does finsbee offer?",
    answer:
      "FinsBee offers a variety of loan options including Personal Loans, Instant Payday Loans, Home Loans, Loan Against Property (LAP), and Loan Against Securities, all designed to meet your diverse financial needs with competitive rates.",
  },
  {
    question: "Do I need a high credit score to apply?",
    answer:
      "While a good credit score improves your chances, FinsBee has lending partners who provide options for individuals with varying credit profiles, including those with limited credit history",
  },
  {
    question: "How does the application process work?",
    answer:
      "Our application process is fully digital. Simply complete the application form, upload the required documents, receive instant approval, and get the loan amount directly in your bank account—all through our user-friendly app or website.",
  },
  {
    question: "Is my data safe with FinsBee?",
    answer:
      "Absolutely. FinsBee uses bank-grade encryption and security protocols to ensure your personal and financial information remains secure at all times.",
  },
  {
    question: "What is the 60-minute financial consultation service?",
    answer:
      "FinsBee offers a 1-on-1 session with certified financial experts to help you plan better—whether it’s loans, investments, savings, insurance, or budgeting.",
  },
  {
    question:
      "Is FinsBee’s digital gold and silver investment regulated and trustworthy?",
    answer:
      "Yes. FinsBee partners with licensed and regulated digital gold providers, ensuring your gold and silver investments are 100% compliant, secure, and backed by physical assets stored in insured, certified vaults. Your investments are fully transparent and protected under trusted financial standards.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-start h-full justify-between    lg:py-16 py-8 px-2  md:px-[136px] gap-12">
      {/* Left Side Heading */}
      <div className="md:w-1/5">
        {/* <h2 className="text-xl font-bold mb-4">
          {/* The Results Speaks for Themselves */}
        {/* </h2> */} 

        <span className="relative w-fit font-bold text-[64px] leading-normal text-[#212121] font-['Lato',sans-serif]">
          {/* Animated Yellow Highlight */}
          <motion.span
            initial={{ scaleY: 0, opacity: 0 }} // start invisible & collapsed
            whileInView={{ scaleY: 1, opacity: 1 }} // grow downward & fade in
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.8 }}
            className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
          />
          FAQ's
        </span>
      </div>

      {/* Right Side FAQ Accordion */}
      <motion.div
        layout
        className="md:w-4/5 space-y-4"
        transition={{ layout: { duration: 0.7, ease: "easeInOut" } }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            className={`border border-purple-200 rounded-lg shadow-sm overflow-hidden transition-colors ${
              openIndex === index ? "bg-white" : "bg-transparent"
            }`}
            transition={{ layout: { duration: 0.7, ease: "easeInOut" } }}
          >
            {/* Header */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span
                className={`font-medium ${
                  openIndex === index ? "text-purple-600" : "text-gray-700"
                }`}
              >
                {faq.question}
              </span>

              {/* Plus → Minus rotation */}
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Plus
                  className={`${
                    openIndex === index ? "text-purple-600" : "text-gray-500"
                  }`}
                />
              </motion.div>
            </button>

            {/* Answer with smooth open + close */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
