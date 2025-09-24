"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ResultsComponent() {
  const statsData = [
    {
      value: "INR 180cr",
      label: "LOAN DISTRIBUTED",
      height: "h-[280px]",
      image: "/brand_logo/r1.jpg",
      gradient: "from-[rgba(89,46,255,0.8)] to-[rgba(46,66,255,0.8)]",
    },
    {
      value: "1M+",
      label: "APP DOWNLOADS",
      height: "h-[360px]",
      image: "/brand_logo/r2.jpg",
      gradient:
        "from-[rgba(255,199,60,0.8)] via-[rgba(255,199,60,0.8)] to-[rgba(89,46,255,0.8)]",
    },
    {
      value: "5k+",
      label: "HAPPY CUSTOMER",
      height: "h-[440px]",
      image: "/brand_logo/r3.jpg",
      gradient: "from-[rgba(89,46,255,0.8)] to-[rgba(46,66,255,0.8)]",
    },
  ];

  return (
    <section className="flex flex-col items-center px-4 md:px-[136px] py-24 relative rounded-2xl bg-white">
      {/* ---------- Header ---------- */}
      <motion.header
        className="flex flex-col items-start gap-2.5 px-4 py-0 w-full max-w-[456px] "
        initial={{ opacity: 1, x: 0 }} // normal position
        whileInView={{ opacity: 1, x: -400 }} // slide left when in view
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h1 className="font-bold text-[16px] leading-[20px] tracking-[0.5px] text-[#212121]">
          The Results Speaks for Themselves
        </h1>

        <div className="flex flex-wrap w-full items-start ">
          <h1 className="w-full font-bold text-[64px] leading-normal text-[#212121] font-['Lato',sans-serif]">
            The Results Speaks for
          </h1>

          <div className="inline-flex flex-col items-center relative">
           

            {/* Word */}
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
              Themselves
            </span>
          </div>
        </div>

        <p className="font-normal text-[14px] leading-[18px] tracking-[0.5px] text-[#212121] font-['Lato',sans-serif]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </motion.header>

     
   {/* ---------- Stats Cards ---------- */}
<div
  className="flex h-[370px] items-end justify-end gap-4 w-[90vw] border-b-4 border-[#25136b] relative z-20 -mt-16"
>
  {statsData.map((stat, index) => (
    <div
      key={index}
      className="inline-flex h-full items-end flex-1 max-w-[360px]"
    >
      <motion.div
        className={`relative ${stat.height} w-full rounded-t-[28px] overflow-hidden origin-bottom`}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: index * 0.3,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Background Image */}
        <Image
          src={stat.image}
          alt={stat.label}
          fill
          className="object-cover"
          priority={index === 0}
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${stat.gradient}`}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full px-12 py-8">
          <div className="font-bold text-[64px] leading-normal text-white font-['Lato',sans-serif]">
            {stat.value}
          </div>
          <div className="font-bold text-[20px] leading-normal text-white font-['Lato',sans-serif]">
            {stat.label}
          </div>
        </div>
      </motion.div>
    </div>
  ))}
</div>




    </section>
  );
}
