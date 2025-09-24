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
            "Get rewarded with Bee Coins for every loan disbursal and transaction.Your coins are auto-invested in digital gold and can be redeemed anytime in the app.More you use FinsBee, more gold you earn!",
    },
    {
        id: 4,
        title: "Data Security",
        description:
            "Your personal and financial information is protected with bank-grade security protocols",
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
                            Why Choose
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
                            Finsbee?
                        </span>
                    </div>

                    <p className="font-normal text-[14px] leading-[18px] tracking-[0.5px] text-[#212121] font-['Lato',sans-serif]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam.
                    </p>
                </motion.header>
                {/* Remove stray <div/> and fix structure */}

            </div>
            <div className="flex  mx-auto w-[1140.5px] h-[386px]  gap-[15.3px] ">
                {cards.map((card) => {
                    const isActive = active === card.id;
                    return (
                        <motion.div
                            key={card.id}
                            onMouseEnter={() => setActive(card.id)}
                            layout
                            initial={{ width: 240 }}
                            animate={{ width: isActive ? 390 : undefined }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`relative cursor-pointer rounded-2xl shadow-md overflow-hidden flex flex-col justify-between ${isActive ? "bg-[#ffd263] text-black" : "bg-gray-100 text-black"
                                }`}
                            style={{
                                minHeight: "386px",
                                width: isActive ? "264px" : undefined,
                            }}
                        >
                            {/* Top Icon */}
                            <div className="p-4">
                                <span className="text-lg">∞</span>
                            </div>

                            {/* Content */}
                            <div
                                className="p-6 flex flex-col gap-4 relative"
                            >
                                {/* Animate Presence for description */}
                                <AnimatePresence mode="wait">
                                    {isActive && (
                                        <motion.p
                                            key={card.id} // ensures re-animation on switch
                                            initial={{ opacity: 0, y: 40 }} // start lower + hidden
                                            animate={{ opacity: 1, y: -250 }} // move up + fade in
                                            exit={{ opacity: 0, y: 40 }} // move down + fade out
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="text-lg leading-relaxed absolute top-0 left-0 p-6"
                                            style={{
                                                fontFamily: "Lato, sans-serif",
                                                fontWeight: 300,
                                                fontStyle: "normal",
                                                fontSize: "24px",
                                                lineHeight: "30px",
                                                letterSpacing: "0px",
                                            }}
                                        >
                                            {card.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>

                                {/* Title always visible */}
                                <h3 className="text-lg font-semibold mt-auto">{card.title}</h3>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
}
