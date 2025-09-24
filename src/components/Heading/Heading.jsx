import React from 'react'
import { motion } from "framer-motion";
export default function Heading() {
  return (
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
                             with Finsbee   
                             </span>
               </div>
     
               <p className="font-normal text-[14px] leading-[18px] tracking-[0.5px] text-[#212121] font-['Lato',sans-serif]">
                 {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                 minim veniam. */}
               </p>
             </motion.header>
             {/* Remove stray <div/> and fix structure */}
             
           </div>
  )
}
