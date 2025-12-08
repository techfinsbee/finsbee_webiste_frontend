import React from 'react'
import { motion } from "framer-motion";
export default function Heading() {
  return (
    <div className="flex flex-col items-start px-4 md:px-[136px]  ">
                   <motion.div
                           className="flex flex-col items-start w-full max-w-[400px] sm:max-w-[420px] md:max-w-[440px] lg:max-w-[456px]"
                           whileInView={{ opacity: 1, x: 0.1 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           viewport={{ once: true, amount: 0.1 }}
                         >
                           <div className="flex flex-wrap w-full items-start leading-[1] sm:leading-[1] md:leading-[1]">
                             {/* <h1 className="font-bold text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] py-4 text-[#212121]">
                               The Results Speak for Themselves
                             </h1> */}
                         
                             <h1 className="w-full font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] pt-4  text-[#212121] leading-[1]">
                             How to Get Started with
                             </h1>
                         
                             <div className="inline-flex flex-col items-center relative pt-4 leading-[1]">
                               <span className="relative w-fit font-bold text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#212121] leading-[1]">
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
             {/* Remove stray <div/> and fix structure */}
             
           </div>
  )
}
