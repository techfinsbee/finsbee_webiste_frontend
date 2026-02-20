"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Heading from "./MobileHeading";
import Link from "next/link";

export const MobileBox = () => {
    const [activeSide, setActiveSide] = useState("left"); // 'none', 'left', 'right'

    // Loan cards for left side
    const leftLoanCards = [
        {
            title: "Personal Loan",
            description:
                "Fast approvals, flexible EMI plans, and zero collateral—smart financing made simple.",
            path: "/apply-for-personal-loan-online",
        },
        {
            title: "Business Loan",
            description:
                "Accelerate your business growth with personalized financing and prompt disbursement you can rely on",
            path: "/apply-for-business-loan",
        },
        {
            title: "Home Loan",
            description:
                "Make your dream home a reality—enjoy flexible repayment plans, minimal paperwork, and a hassle-free approval process!",
            path: "/apply-for-home-loan",
        },
    ];

    const rightLoanCards = [
        {
            title: "Loan against Property",
            description:
                "Unlock your property's true potential with competitive rates and a smooth, stress-free application process.",
            path: "/apply-for-loan-against-property",
        },
        {
            title: "Loan Against Security",
            description:
                "Maximize your investments without selling—enjoy competitive LTV ratios and borrower-friendly terms.",
            path: "/apply-for-loan-against-securities",
        },
        {
            title: "Medical Loan",
            description:
                "At FinsBee, we offer instant Medical Loans to help you cover urgent treatments, surgeries, or hospitalization costs.",
            path: "/apply-for-personal-loan-online",
        },
    ];

    const loanOptions = [
        {
            icon: "/landing_page/coin.svg",
            label: "Personal Loan",
        },
        {
            icon: "/landing_page/building.svg",
            label: "Business Loan",
        },
        {
            icon: "/landing_page/security-card.svg",
            label: "Loan Against Security",
        },
        {
            icon: "/landing_page/building.svg",
            label: "Loan against Property",
        },
        {
            icon: "/landing_page/coin.svg",
            label: "Medical Loan",
        },
        {
            icon: "/landing_page/security-card.svg",
            label: "Home Loan",
        },
    ];

    const allLoanCards = [...leftLoanCards, ...rightLoanCards];

    const iconMap = loanOptions.reduce((acc, opt) => {
        acc[opt.label] = opt.icon;
        return acc;
    }, {});

    // Common structure for loan card
    const LoanCard = ({ card, isActive, direction }) => (

      <Link href={card.path} className="block w-full">
        <motion.div
            className={`flex flex-col h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] ${direction} gap-2.5 w-full`}
            variants={loanCardVariants}
            initial="hidden"
            animate={isActive ? "visible" : "inactive"}
        >
            <div className="relative">
                <div className="absolute w-[264px] h-[112px] sm:h-[128px] md:h-[144px] lg:h-[160px] top-[5px] rounded-xl shadow-lg shadow-purple-500/20" />
                <div
                    className={`w-[264px] h-[112px] sm:h-[128px] md:h-[144px] lg:h-[160px] bg-white rounded-xl shadow-lg shadow-purple-500/15 border-0 p-6 flex flex-col justify-center gap-4 ${
                        isActive ? "opacity-100" : "opacity-10"
                    }`}
                >
                    <div className="font-bold text-gray-700 text-base leading-5 tracking-wide">
                        {card.title}
                    </div>
                    <div className="text-gray-500 text-sm leading-[18px] tracking-wide">
                        {card.description}
                    </div>
                </div>
            </div>
        </motion.div>

      </Link>
    );

   

    const leftDirection = "items-end pl-4 pr-0 gap-30";
    const rightDirection = "items-start pr-4 gap-30";

    const DefaultCard = ({ isTop, isActive, onClick, cards }) => {
        const baseClass =
            "absolute bg-gray-50/95 rounded-2xl border border-white shadow-lg shadow-black/25 p-3 cursor-pointer";
        const topPos = "top-[154px] left-[70px] w-[312px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]";
        const bottomPos = "top-[344px] left-[10rem] w-[312px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]";

        return (
            <motion.div
                className={`${baseClass} ${isTop ? topPos : bottomPos}`}
                initial={{
                    backgroundColor: "rgba(249, 250, 251, 0.95)",
                    x: 0,
                    y: 0,
                }}
                animate={
                    isActive
                        ? {
                            backgroundColor: "#fbbf24",
                            x: 0,
                            y: 0,
                            width: "312px",
                            height: isTop ? "80px sm:100px md:120px lg:140px" : "80px sm:100px md:120px lg:140px",
                            top: isTop ? "154px" : "344px",
                            left: isTop ? "70px" : "10rem",
                            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
                        }
                        : {
                            backgroundColor: "rgba(249, 250, 251, 0.95)",
                            x: 0,
                            y: 0,
                            width: "312px",
                            height: isTop ? "80px sm:100px md:120px lg:140px" : "80px sm:100px md:120px lg:140px",
                            top: isTop ? "154px" : "344px",
                            left: isTop ? "70px" : "10rem",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }
                }
                transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    type: "tween",
                }}
                onClick={onClick}
                style={{
                    left: isActive && !isTop ? "10rem" : isTop ? "70px" : "10rem",
                    top: isTop ? "154px" : "344px",
                }}
            >
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-yellow-300/70 rounded-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    />
                )}
                <div className="flex items-center justify-between w-full h-full relative z-10">
                    {cards.map((card, index) => (
                        <div
                            key={`${isTop ? "top" : "bottom"}-${index}`}
                            className="flex flex-col w-24 h-[68px] sm:h-[88px] md:h-[108px] lg:h-[128px] items-center gap-3 p-2 rounded-2xl"
                        >
                            <div
                                className={`border flex items-center justify-center p-3 rounded-2xl shadow-sm shadow-purple-500/5 ${isActive
                                    ? "bg-yellow-100 border-orange-100"
                                    : "bg-white/50 border-purple-100"
                                    }`}
                            >
                                <img className="w-7 h-7" alt={card.title} src={iconMap[card.title]} />
                            </div>
                            <div className="text-gray-700 text-xs text-center tracking-wide leading-normal">
                                {card.title}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        );
    };

    // Animation variants for loan cards
    const loanCardVariants = {
        hidden: {
            x: 299,
            y: 50,
            opacity: 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 70,
                damping: 20,
            },
        },
        inactive: {
            x: 299,
            y: 50,
            opacity: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 70,
                damping: 20,
            },
        },
    };

    // Right column animation
    const rightColumnVariants = {
        hidden: { x: -300, y: 50, opacity: 1 },
        right: {
            x: 170,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 70,
                damping: 20,
            },
        },
        inactive: {
            x: -550,
            y: 50,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 70,
                damping: 20,
            },
        },
    };

    // Left column animation
    const leftColumnVariants = {
        hidden: { x: 0, y: 50, opacity: 1 },
        left: {
            x: -170,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
                type: "spring",
                stiffness: 70,
                damping: 20,
            },
        },
        inactive: { x: 100, y: 50, opacity: 1 },
    };

    // Variants for mobile/tablet cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <>
            <Heading />
            <div className="   px-4 sm:px-8 pb-12 md:pb-24 md:px-16 lg:px-[136px] w-full max-w-7xl mx-auto relative">
                {/* Desktop View */}
                <div className="hidden lg:block relative w-full h-[500px] sm:h-[600px] md:h-[723px] lg:h-[800px] pt-8">
                    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[723px] lg:h-[800px] ">
                        {/* Background Circle */}
                        <div className="absolute top-[150px] left-1/2 -translate-x-1/2 flex items-center justify-center p-2.5">
                            <div className="w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] md:w-[840px] md:h-[580px] bg-purple-50 rounded-t-full" />
                        </div>

                        {/* Loan Cards Container */}
                        <div className="absolute top-0 left-0 w-full h-[400px] sm:h-[500px] md:h-[640px] lg:h-[720px] flex items-center justify-center">
                            {/* Left Column */}
                            <motion.div
                                className={`flex flex-col w-full max-w-[390px] ${
                                    activeSide === "left"
                                        ? leftDirection
                                        : "w-full max-w-[456px] opacity-10 items-end"
                                }`}
                                variants={leftColumnVariants}
                                initial="hidden"
                                animate={activeSide === "left" ? "left" : "inactive"}
                            >
                                {leftLoanCards.map((card, index) => (
                                    <LoanCard
                                        key={`left-${index}`}
                                        card={card}
                                        isActive={activeSide === "left"}
                                        direction={
                                            index === 0
                                                ? "items-end"
                                                : index === 1
                                                ? "items-start -mt-25"
                                                : "items-end -mt-20"
                                        }
                                    />
                                ))}
                            </motion.div>

                            {/* Right Column */}
                            <motion.div
                                className={`flex flex-col w-full max-w-[390px] ${
                                    activeSide === "right"
                                        ? rightDirection
                                        : "w-full max-w-[456px] opacity-10 items-start"
                                }`}
                                variants={rightColumnVariants}
                                initial="hidden"
                                animate={activeSide === "right" ? "right" : "inactive"}
                            >
                                {rightLoanCards.map((card, index) => (
                                    <LoanCard
                                        key={`right-${index}`}
                                        card={card}
                                        isActive={activeSide === "right"}
                                        direction={
                                            index === 0
                                                ? "items-start"
                                                : index === 1
                                                ? "items-end -mt-20"
                                                : "items-start pl-16 -mt-20"
                                        }
                                    />
                                ))}
                            </motion.div>

                            {/* Left Column */}
                            {/* <motion.div
                                className={`flex flex-col w-full max-w-[390px] ${activeSide === "left" ? leftDirection : "opacity-0"}`}
                                variants={leftColumnVariants}
                                initial="hidden"
                                animate={activeSide === "left" ? "left" : "inactive"}
                            >
                                {leftLoanCards.map((card, index) => (
                                    <LoanCard
                                        key={`left-${index}`}
                                        card={card}
                                        isActive={activeSide === "left"}
                                        direction={
                                            index === 0
                                                ? "items-end"
                                                : index === 1
                                                    ? "items-start -mt-25"
                                                    : "items-end -mt-20"
                                        }
                                        side="left"
                                    />
                                ))}
                            </motion.div>

                            {/* Right 
                            <motion.div
                                className={`flex flex-col w-full max-w-[390px] ${activeSide === "right" ? rightDirection : "opacity-0"}`}
                                variants={rightColumnVariants}
                                initial="hidden"
                                animate={activeSide === "right" ? "right" : "inactive"}
                            >
                                {rightLoanCards.map((card, index) => (
                                    <LoanCard
                                        key={`right-${index}`}
                                        card={card}
                                        isActive={activeSide === "right"}
                                        direction={
                                            index === 0
                                                ? "items-start"
                                                : index === 1
                                                    ? "items-end -mt-20"
                                                    : "items-start pl-16 -mt-20"
                                        }
                                        side="right"
                                    />
                                ))}
                            </motion.div> */}

                            {/* Center Phone Image */}
                            <div className="absolute w-[480px] h-[400px] sm:h-[500px] md:h-[601px] lg:h-[700px] top-[50px] left-1/2 -translate-x-1/2">
                                <div
                                    className="relative h-[390px] sm:h-[490px] md:h-[590px] lg:h-[690px] bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: "url(/landing_page/loan-options.webp)" }}
                                >
                                    {activeSide === "left" && (
                                        <motion.div
                                            className="relative bg-white rounded-2xl w-[312px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]"
                                            initial={{ opacity: 0, left: "4.5rem", top: "11rem" }}
                                            animate={{
                                                opacity: 0.7,
                                                left: "3rem",
                                                top: "11rem",
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 70,
                                                damping: 18,
                                            }}
                                        />
                                    )}

                                    {activeSide === "right" && (
                                        <motion.div
                                            className="relative bg-white rounded-2xl w-[312px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px]"
                                            initial={{ opacity: 0, left: "11rem", top: "23rem" }}
                                            animate={{
                                                opacity: 0.7,
                                                left: "11.5rem",
                                                top: "23rem",
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 70,
                                                damping: 18,
                                            }}
                                        />
                                    )}

                                    {/* Default Cards */}
                                    <DefaultCard
                                        isTop={true}
                                        isActive={activeSide === "left"}
                                        onClick={() =>
                                            setActiveSide(activeSide === "left" ? "none" : "left")
                                        }
                                        cards={leftLoanCards}
                                    />
                                    <DefaultCard
                                        isTop={false}
                                        isActive={activeSide === "right"}
                                        onClick={() =>
                                            setActiveSide(activeSide === "right" ? "none" : "right")
                                        }
                                        cards={rightLoanCards}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Dynamic Arrow/Label */}
                        <motion.div
                            key={activeSide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute flex items-start"
                            style={{
                                top:
                                    activeSide === "none"
                                        ? 232
                                        : activeSide === "right"
                                            ? 224
                                            : 452,
                                left:
                                    activeSide === "none"
                                        ? 200
                                        : activeSide === "right"
                                            ? 172
                                            : 750,
                            }}
                        >
                            {activeSide === "left" ? (
                                <>
                                    <img
                                        className="w-[30px] h-[25px] sm:w-[45px] sm:h-[37px] z-0 object-cover -ml-[13px]"
                                        alt="Arrow"
                                        src="/landing_page/arrow1.svg"
                                    />
                                    <div className="text-gray-700 text-xl tracking-normal leading-normal z-10">
                                        more loan
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className={`text-gray-700 text-xl tracking-normal leading-normal z-10 ${
                                            activeSide === "right" ? "-mt-1" : ""
                                        }`}
                                    >
                                        {activeSide === "none"
                                            ? "Click here"
                                            : activeSide === "right"
                                                ? "Loan Option"
                                                : ""}
                                    </div>
                                    <img
                                        className={`w-[30px] h-[25px] sm:w-[45px] sm:h-[37px] z-0 object-cover ${activeSide === "right"
                                           ? "-ml-1"                                          : activeSide === "none"
                                                ? "-ml-2"
                                                : ""
                                        }`}
                                        alt="Arrow"
                                        src={
                                            activeSide === "right"
                                                ? "/landing_page/arrow2.svg"
                                                : "/landing_page/arrow1.svg"
                                        }
                                    />
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Tablet and Mobile View */}
                <div className="flex flex-col items-center pt-4  lg:hidden">

                    <motion.div
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {allLoanCards.map((card, index) => (
                            <Link href={card.path} key={index} className="block">
                            <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(128, 0, 128, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white rounded-2xl shadow-lg shadow-purple-500/20 border border-purple-100/50 p-6 flex flex-col gap-4 cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        {iconMap[card.title] && (
                                            <div className="bg-purple-50 rounded-full p-3">
                                                <img
                                                    src={iconMap[card.title]}
                                                    alt={card.title}
                                                    className="w-8 h-8"
                                                />
                                            </div>
                                        )}
                                        <h3 className="font-bold text-gray-700 text-lg leading-6 tracking-wide">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-5 tracking-wide">
                                        {card.description}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};