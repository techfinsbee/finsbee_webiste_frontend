"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Quick & Easy Process",
    description:
      "Get loan approvals in minutes with our streamlined digital process and minimal documentation requirements.",
  },
  {
    id: 2,
    title: "Seamless Digital Experience",
    description:
      "Enjoy a paperless, hassle-free application process from the comfort of your home.",
  },
  {
    id: 3,
    title: "Exclusive Rewards Program",
    description:
      "Get rewarded with Bee Coins for every loan disbursal and transaction. Your coins are auto-invested in digital gold and can be redeemed anytime in the app. More you use FinsBee, more gold you earn!",
  },
  {
    id: 4,
    title: "Data Security",
    description:
      "Your personal and financial information is protected with bank-grade security protocols.",
  },
  {
    id: 5,
    title: "Expert Financial Advice session",
    description:
      "Affordable guidance to help you make smarter money decisions.",
  },
  {
    id: 6,
    title: "Safe & Insured Investments",
    description:
      "Digital gold & silver stored in certified vaults with full insurance.",
  },
];

export default function ExpandingCards() {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-start px-4 md:px-[136px]">
        <motion.div
          className="flex flex-col items-start w-full max-w-[400px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[456px]"
          whileInView={{ opacity: 1, x: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-wrap w-full items-start">
            {/* <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#212121]">
                            The Results Speak for Themselves
                          </h1> */}
            <h1 className="w-full font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
              Why Choose?
            </h1>

            <div className="inline-flex flex-col items-center relative">
              <span className="relative w-fit font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121]">
                <motion.span
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="absolute inset-0 bg-yellow-400 -z-10 origin-top"
                />
                Finsbee
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Large Screen: Expanding Cards */}
      <div className="hidden md:flex justify-center mx-auto w-full pt-5 pb-12 md:pb-24  md:px-[136px] gap-[15.3px]">
        {cards.map((card) => {
          const isActive = active === card.id;
          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setActive(card.id)}
              layout
              initial={{ width: 180 }}
              animate={{ width: isActive ? 363 : 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`relative cursor-pointer rounded-2xl shadow-md overflow-hidden flex flex-col justify-between ${
                isActive ? "bg-[#ffd263] text-black" : "bg-gray-100 text-black"
              }`}
              style={{ minHeight: "386px" }}
            >
              <div className="p-4">
                <span className="text-lg">∞</span>
              </div>
              <div className="p-6 flex flex-col gap-4 relative">
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.p
                      key={card.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: -280 }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="text-lg leading-relaxed absolute top-0 left-0 p-6"
                      style={{
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 300,
                        fontSize: "21px",
                        lineHeight: "30px",
                      }}
                    >
                      {card.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <h3 className="text-lg font-semibold mt-auto">{card.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Tablet: Slider */}
      <div className="md:hidden relative py-12 px-4 overflow-hidden">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[280px] max-w-[280px] h-[386px] rounded-2xl shadow-md bg-gray-100 flex flex-col justify-between snap-center p-6"
            >
              <div className="p-2">
                <span className="text-lg">∞</span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                {card.description}
              </p>
              <h3 className="text-lg font-semibold mt-auto">{card.title}</h3>
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        {/* <div className="flex justify-center mt-4 gap-2">
          {cards.map((card) => (
            <button
              key={card.id}
              className={`w-2 h-2 rounded-full ${
                active === card.id ? "bg-[#ffd263]" : "bg-gray-300"
              }`}
              onClick={() => {
                setActive(card.id);
                const slider = document.querySelector(".overflow-x-auto");
                const cardElement = document.querySelector(
                  `[data-card-id="${card.id}"]`
                );
                if (slider && cardElement) {
                  slider.scrollTo({
                    left: cardElement.offsetLeft - 16, // Adjust for padding
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}
