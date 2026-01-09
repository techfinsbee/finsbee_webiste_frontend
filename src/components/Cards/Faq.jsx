"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Finsbee?",
    answer:
      "Finsbee is a fintech platform that helps users discover and apply for financial products by connecting them with partner banks, NBFCs, and authorized investment providers.",
  },
  {
    question: "Is Finsbee a bank or NBFC?",
    answer:
      "No. Finsbee is not a bank or NBFC. It acts as a technology platform that facilitates access to financial products offered by its partners.",
  },
  {
    question: "Does Finsbee provide loans or investments directly?",
    answer:
      "No. All loans and investments are provided by Finsbee’s partner institutions. Final approval and execution are handled by the respective partners.",
  },
  {
    question: "What products are available on Finsbee?",
    answer: {
      intro: "Finsbee offers access to:",
      points: [
        "Personal Loans",
        "Home Loans",
        "Business Loans",
        "Loan Against Property (LAP)",
        "Loan Against Securities (LAS)",
        "Digital Gold",
        "1-on-1 Financial Consultation",
        "Free Online Financial Classes",
      ],
    },
  },
  {
    question: "Can I apply for multiple products on Finsbee?",
    answer:
      " Yes. Eligible users can apply for multiple products, subject to partner criteria.",
  },
  {
    question: "Who can use Finsbee?",
    answer:
      "Any eligible Indian resident with valid KYC details can use Finsbee to explore financial products.",
  },
  {
    question: "How do I apply for a product on Finsbee?",
    answer:
      "You can apply online by submitting basic personal or business details. Finsbee shares your request with suitable partner providers.",
  },
  {
    question:
      "Does applying through Finsbee affect my credit score?",
    answer:
      "Checking eligibility does not affect your credit score. However, lenders may perform credit checks during loan processing.",
  },
  {
    question:
      "Does Finsbee charge any fees to users?",
    answer:
      "No. Finsbee does not charge users for applying or exploring products on the platform.",
  },
  {
    question:
      "Are there any hidden charges?",
    answer:
      "No. Any fees or charges are levied by partner institutions and are disclosed as per their policies.",
  },
  {
    question:
      "Is my personal and financial data safe with Finsbee?",
    answer:
      "Yes. Finsbee uses secure technology and follows strict data protection practices.",
  },
  {
    question:
      " Does Finsbee share my data with third parties?",
    answer:
      "User data is shared only with authorized partner institutions after obtaining consent.",
  },
  {
    question:
      "What should I do if I face technical issues on the platform?",
    answer:
      "You can retry after some time or reach out to Finsbee customer support for assistance.",
  },
  {
    question:
      "Can I track my application status on Finsbee",
    answer:
      "Yes. You can view updates or receive communication regarding your application status. ",
  },
  {
    question:
      "Is Finsbee compliant with regulations?",
    answer:
      "Yes. Finsbee operates in compliance with applicable laws and works only with regulated financial institutions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row items-start h-full justify-between pb-12  md:pb-24   px-2  md:px-[136px] gap-12">
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
                  {/* <div className="px-6 pb-4 text-gray-600">{faq.answer}</div> */}
                  <div className="px-6 pb-4 text-gray-600">
                    {typeof faq.answer === "string" ? (
                      <p>{faq.answer}</p>
                    ) : (
                      <>
                        {faq.answer.intro && (
                          <p className="mb-2 font-medium text-gray-800">
                            {faq.answer.intro}
                          </p>
                        )}

                        <ul className="list-disc pl-6 space-y-1">
                          {faq.answer.points.map((point, i) => (
                            <li key={i} className="text-gray-700">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
