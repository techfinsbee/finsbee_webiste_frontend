"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppUse() {
  const [activeTop, setActiveTop] = useState(false);
  const [activeBottom, setActiveBottom] = useState(false);
  const [selected, setSelected] = useState(null);

  // Spread positions
  const cardPositions = {
    top: [
    //   { x: -220, y: -140 }, // left
    //   { x: 0, y: -200 },    // center
    //   { x: 220, y: -140 },  // right
    // Top-left
    { x: -300, y: -230 },  // Top-center
     { x: -390, y: -20 },
    { x: -300, y: 190 }    // Left-middle
    ],
    bottom: [
    //   { x: -220, y: 140 },  // left
    //   { x: 0, y: 200 },     // center
    //   { x: 220, y: 140 },   // right
    { x: 370, y: -230 },   // Top-right
    { x: 400, y: -20 },    // Right-center
    { x: 399, y: 190 }    // Bottom-right
    ],
  };

  // Helper for card animation direction
  const getCardDirection = (pos) => ({ x: pos.x, y: pos.y });

  // Animation variants for cards
  const cardVariants = (direction) => ({
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0.8,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      x: direction.x,
      y: direction.y,
      scale: 1,
      rotate: 0, // Remove random rotation for consistent animation
      transition: {
        duration: 0.4, // even faster open
        ease: "easeOut",
        type: "tween",
        stiffness: 180,
        damping: 16,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0.8,
      rotate: 0,
      transition: { duration: 0.18 }, // even faster close
    },
  });

  const topLoans = [
    { title: "Personal Loan", desc: "Housing, Education, Car, Emergency fund, Retirement, or Debt reduction." },
    { title: "Business Loan", desc: "For business growth & expansion." },
    { title: "Loan Against Security", desc: "Secure your future with loans." },
  ];

  const bottomLoans = [
    { title: "Education Loan", desc: "Support your higher studies and career goals." },
    { title: "Home Loan", desc: "Buy or renovate your dream home." },
    { title: "Car Loan", desc: "Finance your new or used vehicle." },
  ];

  return (
    <section className="flex flex-col items-center px-4 md:px-[136px] relative rounded-2xl">
      {/* ---------- Header ---------- */}
      <div className="flex flex-col items-center px-4 md:px-[136px]  ">
             <motion.header
               className="flex flex-col items-start gap-2.5 px-4 py-0 w-full max-w-[456px] mb-16"
               initial={{ opacity: 1, x: 0 }}
               whileInView={{ opacity: 1, x: -400 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               viewport={{ once: false, amount: 0.2 }}
             >
               <h3 className="font-bold text-[16px] leading-[20px] tracking-[0.5px] text-[#212121]">
                 The Results Speaks for Themselves
               </h3>
     
               <div className="flex flex-wrap w-full items-start gap-[10px]">
                 <h1 className="w-full font-bold text-[64px] leading-normal text-[#212121] font-['Lato',sans-serif]">
                   How to Get Started
                 </h1>
                 <span className="relative w-fit font-bold text-[64px] leading-normal text-[#212121] font-['Lato',sans-serif]">
                                  {/* Animated Yellow Highlight */}
                              <motion.span
                     initial={{ scaleY: 0, opacity: 0 }}        // start invisible & collapsed
                     whileInView={{ scaleY: 1, opacity: 1 }}    // grow downward & fade in
                     exit={{ scaleY: 0, opacity: 0 }}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                     viewport={{ once: false, amount: 0.8 }}
                     className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
                   />
                               
                             </span>
               </div>
     
               {/* <p className="font-normal text-[14px] leading-[18px] tracking-[0.5px] text-[#212121] font-['Lato',sans-serif]">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                 minim veniam.
               </p> */}
             </motion.header>
             {/* Remove stray <div/> and fix structure */}
             
           </div>

      {/* ---------- Mobile Section ---------- */}
      <div className="relative flex justify-center items-center w-full min-h-[840px]">
        {/* Ellipse background */}
        <div className="absolute top-[18rem] left-1/2 -translate-x-1/2 w-[820px] h-[450px] rounded-t-full bg-[#eeeaff] -z-10 overflow-hidden" />

        {/* Top overlay trigger */}
        <Image
          src={"/landing_page/loan-2.svg"}
          width={364}
          height={220}
          alt="loan overlay top"
          className="absolute mb-[10rem] left-[40%] w-[364px] h-[200px] max-w-none max-h-none -translate-x-1/2 z-10 cursor-pointer"
          onClick={() => setActiveTop(!activeTop)}
        />

        {/* Main mobile image */}
        <Image
          src={"/landing_page/m1.png"}
          width={480}
          height={601}
          alt="how to use"
          className="relative z-0 w-[480px] h-[601px] max-w-none max-h-none"
        />

        {/* Bottom overlay trigger */}
        <Image
          src={"/landing_page/loan-2.svg"}
          width={364}
          height={210}
          alt="loan overlay bottom"
          className="absolute mt-[15rem] w-[312px] h-[200px] max-w-none max-h-none left-[70%] -translate-x-1/2 z-10 cursor-pointer"
          onClick={() => setActiveBottom(!activeBottom)}
        />

        {/* ---------- Top Cards ---------- */}
        <AnimatePresence>
          {activeTop &&
            topLoans.map((loan, index) => (
              <motion.div
                key={loan.title}
                variants={cardVariants(getCardDirection(cardPositions.top[index]))}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() =>
                  setSelected(selected === loan.title ? null : loan.title)
                }
                className={`absolute w-[280px] p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selected === loan.title
                    ? "bg-white border border-gray-200 shadow-xl"
                    : "bg-white shadow-md hover:shadow-lg"
                }`}
                style={{
                  boxShadow:
                    selected === loan.title
                      ? "8px 8px 0px rgba(255, 200, 0, 0.6)"
                      : "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  {loan.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {loan.desc}
                </p>

                {selected === loan.title && (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 inline-block text-yellow-500 font-semibold text-sm underline underline-offset-2"
                  >
                    View Details →
                  </motion.a>
                )}
              </motion.div>
            ))}
        </AnimatePresence>

        {/* ---------- Bottom Cards ---------- */}
        <AnimatePresence>
          {activeBottom &&
            bottomLoans.map((loan, index) => (
              <motion.div
                key={loan.title}
                variants={cardVariants(getCardDirection(cardPositions.bottom[index]))}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() =>
                  setSelected(selected === loan.title ? null : loan.title)
                }
                className={`absolute w-[280px] p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selected === loan.title
                    ? "bg-white border border-gray-200 shadow-xl"
                    : "bg-white shadow-md hover:shadow-lg"
                }`}
                style={{
                  boxShadow:
                    selected === loan.title
                      ? "8px 8px 0px rgba(255, 200, 0, 0.6)"
                      : "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  {loan.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {loan.desc}
                </p>

                {selected === loan.title && (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 inline-block text-yellow-500 font-semibold text-sm underline underline-offset-2"
                  >
                    View Details →
                  </motion.a>
                )}
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
