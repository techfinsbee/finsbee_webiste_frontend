import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import Form from "./Home/Form";
const WhyChooseUs = ({ COLOR, TXTCOLOR }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    console.log("Toggling Form:", !isFormVisible);
    setIsFormVisible(!isFormVisible);
  };

  // SVG icons defined inline to avoid dependency on external files
  const icons = {
    quick: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    rates: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {/* Improved Rupee symbol */}
        <path d="M6 4h12" /> {/* Top horizontal line */}
        <path d="M6 8h12" /> {/* Middle horizontal line */}
        <path d="M9 4c4 0 4 6 0 6" /> {/* Curve of the R */}
        <path d="M9 10l6 8" /> {/* Diagonal leg */}
      </svg>
    ),
    digital: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    rewards: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
    trust: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    security: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  };

  const features = [
    {
      id: 1,
      icon: "quick",
      title: "Quick & Easy Process",
      description:
        "Get loan approvals in minutes with our streamlined digital process and minimal documentation requirements.",
      color: COLOR ? "#18ADA5" : "#4CAF50",
    },
    {
      id: 2,
      icon: "rates",
      title: "Competitive Interest Rates",
      description:
        "Access the best loan offers from multiple lenders with interest rates tailored to your profile.",
      color: COLOR ? "#09615D" : "#388E3C",
    },
    {
      id: 3,
      icon: "digital",
      title: "Seamless Digital Experience",
      description:
        "Enjoy a paperless, hassle-free application process from the comfort of your home.",
      color: COLOR ? "#68E6DF" : "#66BB6A",
    },
    {
      id: 4,
      icon: "rewards",
      title: "Exclusive Rewards Program",
      description:
        "Earn FMCoins with each loan disbursement and transaction, redeemable for exciting products.",
      color: COLOR ? "#18ADA5" : "#4CAF50",
    },
    {
      id: 5,
      icon: "trust",
      title: "Trusted Banking Partners",
      description:
        "We've partnered with India's leading banks and NBFCs to offer you reliable financial solutions.",
      color: COLOR ? "#09615D" : "#388E3C",
    },
    {
      id: 6,
      icon: "security",
      title: "Data Security",
      description:
        "Your personal and financial information is protected with bank-grade security protocols.",
      color: COLOR ? "#68E6DF" : "#66BB6A",
    },
  ];

  // Animation variants with improved easing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Navigation controls for mobile slider
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  return (
    <section
      id="why-choose-us"
      className="py-20 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: COLOR
          ? `radial-gradient(circle at top left, rgba(24, 173, 165, 0.1), transparent 70%),
           radial-gradient(circle at bottom right, rgba(24, 173, 165, 0.05), transparent 70%)`
          : `radial-gradient(circle at top left, rgba(178, 255, 142, 0.2), transparent 70%),
           radial-gradient(circle at bottom right, rgba(178, 255, 142, 0.1), transparent 70%)`,
      }}
    >
      {/* Background decoration elements */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10"
        style={{
          background: COLOR
            ? "radial-gradient(circle, #18ADA5 0%, transparent 70%)"
            : "radial-gradient(circle, #4CAF50 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10"
        style={{
          background: COLOR
            ? "radial-gradient(circle, #09615D 0%, transparent 70%)"
            : "radial-gradient(circle, #388E3C 0%, transparent 70%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 coolvetica"
            style={{
              color: COLOR ? "#09615D" : "#112A00",
              position: "relative",
              display: "inline-block",
            }}
          >
            Why Choose FundsMama
            <div
              className="absolute h-1 w-24 rounded-full left-1/2 transform -translate-x-1/2"
              style={{
                bottom: "-15px",
                background: COLOR ? "#18ADA5" : "#b2ff8e",
              }}
            ></div>
          </h2>
          <p
            className="mt-8 text-lg md:text-xl max-w-3xl mx-auto manrope"
            style={{ color: COLOR ? "#333" : "#333" }}
          >
            Your journey to financial empowerment and exclusive rewards starts
            with us. Here's why thousands of Indians choose FundsMama for their
            needs.
          </p>
        </motion.div>

        {/* Desktop view: Grid layout */}
        <motion.div
          ref={ref}
          className="hidden ml-14 mr-14 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl group"
              style={{
                border: `1px solid ${
                  COLOR ? "rgba(24, 173, 165, 0.1)" : "rgba(178, 255, 142, 0.2)"
                }`,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="h-2"
                style={{
                  background: `linear-gradient(to right, ${feature.color}, ${feature.color}30)`,
                }}
              ></div>
              <div className="p-7 relative">
                <div
                  className="w-16 h-16 mb-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}05)`,
                    border: `2px solid ${feature.color}20`,
                    color: feature.color,
                  }}
                >
                  {icons[feature.icon]}
                </div>
                <h3
                  className="text-xl font-bold mb-3 coolvetica transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: COLOR ? "#09615D" : "#163312" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 manrope leading-relaxed"
                  style={{ fontWeight: "500" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile view: Horizontal slider */}
        <div className="md:hidden mt-8">
          <div className="relative px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                style={{
                  border: `1px solid ${
                    COLOR
                      ? "rgba(24, 173, 165, 0.1)"
                      : "rgba(178, 255, 142, 0.2)"
                  }`,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="h-2"
                  style={{
                    background: `linear-gradient(to right, ${features[activeIndex].color}, ${features[activeIndex].color}30)`,
                  }}
                ></div>
                <div className="p-7 relative">
                  <div
                    className="w-16 h-16 mb-5 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${features[activeIndex].color}20, ${features[activeIndex].color}05)`,
                      border: `2px solid ${features[activeIndex].color}20`,
                      color: features[activeIndex].color,
                    }}
                  >
                    {icons[features[activeIndex].icon]}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 coolvetica"
                    style={{ color: COLOR ? "#09615D" : "#163312" }}
                  >
                    {features[activeIndex].title}
                  </h3>
                  <p
                    className="text-gray-600 manrope leading-relaxed"
                    style={{ fontWeight: "500" }}
                  >
                    {features[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile navigation controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white"
                style={{
                  color: COLOR ? "#18ADA5" : "#4CAF50",
                }}
                aria-label="Previous feature"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors`}
                    style={{
                      backgroundColor:
                        activeIndex === index
                          ? COLOR
                            ? "#18ADA5"
                            : "#4CAF50"
                          : COLOR
                          ? "rgba(24, 173, 165, 0.2)"
                          : "rgba(76, 175, 80, 0.2)",
                    }}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white"
                style={{
                  color: COLOR ? "#18ADA5" : "#4CAF50",
                }}
                aria-label="Next feature"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <button
            className="px-10 py-4 rounded-full text-white font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl coolvetica flex items-center justify-center mx-auto"
            style={{
              background: COLOR
                ? "linear-gradient(135deg, #18ADA5, #09615D)"
                : "linear-gradient(135deg, #b2ff8e, #163312)",
              boxShadow: COLOR
                ? "0 10px 20px rgba(24, 173, 165, 0.3)"
                : "0 10px 20px rgba(178, 255, 142, 0.3)",
            }}
          >
            
            <button onClick={toggleFormVisibility}>
            <span className="text-sm sm:text-base md:text-lg">
              
              Start Your Journey Today
            </span>
            </button>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
      {
        <Form
          isFormVisible={isFormVisible}
          onClose={() => setIsFormVisible(false)}
        />
      }
      <style jsx>{`
        @media (max-width: 768px) {
          .coolvetica {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .coolvetica {
            font-size: 2rem;
          }
        }

        /* Custom hover effect for card scaling */
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
