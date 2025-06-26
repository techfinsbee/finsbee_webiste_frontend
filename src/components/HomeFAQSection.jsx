import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeFAQSection = ({ COLOR }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const faqItems = [
    {
      question: "What types of loans does FundsMama offer?",
      answer: "FundsMama offers a variety of loan options including Personal Loans, Instant Payday Loans, Home Loans, Loan Against Property (LAP), and Loan Against Securities, all designed to meet your diverse financial needs with competitive rates."
    },
    {
      question: "How quickly can I get my loan approved and disbursed?",
      answer: "Most loans are approved within minutes to hours, with disbursals typically completed within 24 hours of approval, depending on the loan type and verification process."
    },
    {
      question: "What is the FMCoins reward system?",
      answer: "FMCoins is our unique reward system where you earn coins with every loan disbursement. These coins can be redeemed at Mama Mart, our in-app marketplace, for a wide range of products and services."
    },
    {
      question: "Do I need a high credit score to apply?",
      answer: "While a good credit score improves your chances, FundsMama has lending partners who provide options for individuals with varying credit profiles, including those with limited credit history."
    },
    {
      question: "How does the application process work?",
      answer: "Our application process is fully digital. Simply complete the application form, upload the required documents, receive instant approval, and get the loan amount directly in your bank account—all through our user-friendly app or website."
    },
    {
      question: "What documents will I need to apply?",
      answer: "Basic requirements include your PAN card, Aadhaar card, recent bank statements (3-6 months), and income proof such as salary slips for salaried individuals or financial statements for self-employed applicants."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(159, 206, 204, 0.05) 0%, rgba(151, 196, 202, 0.02) 100%)`
      }}
    >
      {/* Background decoration */}
      <div 
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-10" 
        style={{ 
          background: "radial-gradient(circle, rgba(143, 206, 205, 0.8) 0%, transparent 70%)"
        }}
      />
      <div 
        className="absolute top-1/2 right-0 w-32 h-32 rounded-full opacity-5" 
        style={{ 
          background: "radial-gradient(circle, rgba(147, 206, 203, 0.8) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 faq coolvetica"
            style={{ 
              color: COLOR ? " #09615D" : " #09615D",
              position: "relative",
              display: "inline-block"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Frequently Asked Questions
            <div 
              className="absolute h-1 w-32 rounded-full left-1/2 transform -translate-x-1/2" 
              style={{ 
                bottom: "-15px", 
                background: "linear-gradient(to right, #09615D,  #09615D)"
              }}
            ></div>
          </motion.h2>
          <motion.p 
            className="mt-8 text-lg md:text-xl max-w-3xl mx-auto manrope"
            style={{ color: "#555" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Get answers to common questions about our loans and services
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-teal-100"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 30px rgba(146, 191, 195, 0.1)",
                transition: { duration: 0.2 } 
              }}
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
                style={{ 
                  backgroundColor: activeIndex === index ? "rgba(130, 189, 195, 0.04)" : "white"
                }}
              >
                <h3 
                  className="text-lg font-medium pr-8"
                  style={{ 
                    color: activeIndex === index ? "#264544" : "#333",
                    fontFamily: "manrope",
                    fontWeight: 600
                  }}
                >
                  {item.question}
                </h3>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    activeIndex === index ? "bg-teal-100" : "bg-teal-100"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={activeIndex === index ? "#264544" : "#666"}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div 
                      className="p-5 pt-0 border-t border-purple-50"
                      style={{ 
                        color: "#555", 
                        fontFamily: "manrope",
                        lineHeight: "1.6"
                      }}
                    >
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
       
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq {
            font-size: 2.25rem;
          }
        }
        
        @media (max-width: 640px) {
          .faq {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeFAQSection;
