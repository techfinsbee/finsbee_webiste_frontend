// import React from "react";
// import {motion} from "framer-motion";

// const moneyIcons = [
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1.png",
//     position: "top-0 left-0",
//   },
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-1.png",
//     position: "top-0 right-0",
//   },
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-2.png",
//     position: "bottom-0 left-0",
//   },
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-3.png",
//     position: "bottom-0 right-0",
//   },
// ];

// const MoneySection = () => {
//   return (
//     <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px]">
//       <div className="flex flex-col items-center gap-3.5 relative w-full">
//         <h1 className="w-full -mt-px font-extrabold text-gray-100 text-[100px] sm:text-[120px] md:text-[160px] text-center leading-normal relative tracking-[0]">
//           Finsbee.
//         </h1>
//       </div>

//       <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-4 sm:left-[10%] md:left-[212px]">
//         <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
//           {moneyIcons.slice(0, 2).map((icon, index) => (
//             <div
//               key={`top-${index}`}
//               className={`inline-flex items-center justify-center p-2 sm:p-3 relative -mt-0.5 -mb-0.5 ${index === 0 ? "-ml-0.5" : "-mr-0.5"} bg-white/10 rounded-[20px]`}
//             >
//               <div className="inline-flex items-center gap-3 relative">
//                 <img
//                   className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   alt="Money"
//                   src={icon.src}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-between w-full items-center relative">
//           {moneyIcons.slice(2, 4).map((icon, index) => (
//             <div
//               key={`bottom-${index}`}
//               className={`inline-flex items-center justify-center p-2 sm:p-3 relative -mt-0.5 -mb-0.5 ${index === 0 ? "-ml-0.5" : "-mr-0.5"} bg-white/10 rounded-[20px]`}
//             >
//               <div className="inline-flex items-center gap-3 relative">
//                 <img
//                   className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   alt="Money"
//                   src={icon.src}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <img
//         className="relative w-[800px] sm:w-[1283px] -mt-[70px] sm:-mt-[110px] z-19"
//         alt="Bottom image"
//         src="landing_page/mobile.png"
//       />
 
//       <div className="absolute right-12  h-full w-[28%] overflow-hidden pointer-events-none z-0">
//         <img
//           className="absolute right-0 bottom-30  object-cover"
//           alt="Bottom image"
//           src="landing_page/Group.svg"
//         />
//       </div>
//     </div>
//   );
// };

// export default MoneySection;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const moneyIcons = [
//   { src: "/landing_page/money-1.png" },
//   { src: "/landing_page/money-2.png" },
//   { src: "/landing_page/money-3.png" },
//   { src: "/landing_page/money-4.png" },
// ];

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.3, // animate children one by one
//       delayChildren: 0.5, // start after mobile.png moves
//       ease: "easeOut",
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const MoneySection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center relative w-full max-w-[1440px] mx-auto">
//       {/* Phone with everything inside */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative w-[800px] sm:w-[1283px]"
//       >
//         {/* Mobile frame */}
//         <Image
//           src="/landing_page/mobile.png"
//           alt="Mobile frame"
//           width={1283}
//           height={650}
//           className="w-full h-auto"
//           priority
//         />

//         {/* Content inside mobile */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4"
//         >
//           {/* Finsbee text */}
//           <motion.h1
//             variants={itemVariants}
//             className="font-extrabold text-gray-100 text-[70px] sm:text-[100px] md:text-[120px] text-center leading-none"
//           >
//             Finsbee.
//           </motion.h1>

//           {/* Money icons grid */}
//           <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[260px] items-center">
//             {/* Top row */}
//             <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center">
//               {moneyIcons.slice(0, 2).map((icon, i) => (
//                 <motion.div
//                   key={`top-${i}`}
//                   variants={itemVariants}
//                   className="inline-flex items-center justify-center p-2 sm:p-3 bg-white/10 rounded-[20px]"
//                 >
//                   <Image
//                     src={icon.src}
//                     alt={`Money ${i}`}
//                     width={77}
//                     height={77}
//                     className="w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             {/* Bottom row */}
//             <div className="flex justify-between w-full items-center mt-6">
//               {moneyIcons.slice(2, 4).map((icon, i) => (
//                 <motion.div
//                   key={`bottom-${i}`}
//                   variants={itemVariants}
//                   className="inline-flex items-center justify-center p-2 sm:p-3 bg-white/10 rounded-[20px]"
//                 >
//                   <Image
//                     src={icon.src}
//                     alt={`Money ${i + 2}`}
//                     width={77}
//                     height={77}
//                     className="w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Decorative group on right */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
//         className="absolute right-12 h-full w-[28%] overflow-hidden pointer-events-none"
//       >
//         <Image
//           src="/landing_page/Group.svg"
//           alt="Decoration"
//           width={400}
//           height={400}
//           className="absolute right-0 bottom-30 object-cover"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default MoneySection;


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const moneyIcons = [
//   { src: "/landing_page/money-1.png" },
//   { src: "/landing_page/money-2.png" },
//   { src: "/landing_page/money-3.png" },
//   { src: "/landing_page/money-4.png" },
// ];

// // Container for stagger effect
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//       ease: "easeOut",
//     },
//   },
// };

// // Animation for each item (start below + fade in)
// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const MoneySection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center relative w-full max-w-[1440px] mx-auto">
//       {/* Mobile frame (animates in) */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative w-[800px] sm:w-[1283px]"
//       >
//         <Image
//           src="/landing_page/mobile.png"
//           alt="Mobile frame"
//           width={1283}
//           height={650}
//           className="w-full h-auto"
//           priority
//         />

//         {/* Inner content (text + icons) */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4"
//         >
//           {/* Finsbee title */}
//           <motion.h1
//             variants={itemVariants}
//             className="font-extrabold text-gray-100 text-[70px] sm:text-[100px] md:text-[120px] text-center leading-none"
//           >
//             Finsbee.
//           </motion.h1>

//           {/* Money icons */}
//           <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[260px] items-center">
//             {/* Top row */}
//             <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center">
//               {moneyIcons.slice(0, 2).map((icon, i) => (
//                 <motion.div
//                   key={`top-${i}`}
//                   variants={itemVariants}
//                   className="inline-flex items-center justify-center p-2 sm:p-3 bg-white/10 rounded-[20px]"
//                 >
//                   <Image
//                     src={icon.src}
//                     alt={`Money ${i}`}
//                     width={77}
//                     height={77}
//                     className="w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>

//             {/* Bottom row */}
//             <div className="flex justify-between w-full items-center mt-6">
//               {moneyIcons.slice(2, 4).map((icon, i) => (
//                 <motion.div
//                   key={`bottom-${i}`}
//                   variants={itemVariants}
//                   className="inline-flex items-center justify-center p-2 sm:p-3 bg-white/10 rounded-[20px]"
//                 >
//                   <Image
//                     src={icon.src}
//                     alt={`Money ${i + 2}`}
//                     width={77}
//                     height={77}
//                     className="w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Decorative element */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
//         className="absolute right-12 h-full w-[28%] overflow-hidden pointer-events-none"
//       >
//         <Image
//           src="/landing_page/Group.svg"
//           alt="Decoration"
//           width={400}
//           height={400}
//           className="absolute right-0 bottom-30 object-cover"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default MoneySection;



// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// // Money icons with same original design
// const moneyIcons = [
//   { src: "/landing_page/money-1.png", position: "top-0 left-0" },
//   { src: "/landing_page/money-2.png", position: "top-0 right-0" },
//   { src: "/landing_page/money-3.png", position: "bottom-0 left-0" },
//   { src: "/landing_page/money-4.png", position: "bottom-0 right-0" },
// ];

// // Container variant to stagger child animations
// const containerVariants = {
//   hidden: { opacity: 1 }, // keep container visible
//   visible: {
//     transition: { staggerChildren: 0.25, delayChildren: 0.25 },
//   },
// };

// // Each item starts 50px lower + invisible
// const itemVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// const MoneySection = () => {
//   return (
//     <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px]">
//       {/* Heading */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="flex flex-col items-center gap-3.5 relative w-full"
//       >
//         <motion.h1
//           variants={itemVariants}
//           className="w-full -mt-px font-extrabold text-gray-100 text-[100px] sm:text-[120px] md:text-[160px] text-center leading-normal relative tracking-[0]"
//         >
//           Finsbee.
//         </motion.h1>
//       </motion.div>

//       {/* Icons grid (inside mobile area) */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-4 sm:left-[10%] md:left-[212px]"
//       >
//         {/* Top row */}
//         <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
//           {moneyIcons.slice(0, 2).map((icon, index) => (
//             <motion.div
//               key={`top-${index}`}
//               variants={itemVariants}
//               className={`inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px] ${
//                 index === 0 ? "-ml-0.5" : "-mr-0.5"
//               }`}
//             >
//               <div className="inline-flex items-center gap-3 relative">
//                 <Image
//                   className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   alt={`Money-${index}`}
//                   src={icon.src}
//                   width={77}
//                   height={77}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom row */}
//         <div className="flex justify-between w-full items-center relative">
//           {moneyIcons.slice(2, 4).map((icon, index) => (
//             <motion.div
//               key={`bottom-${index}`}
//               variants={itemVariants}
//               className={`inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px] ${
//                 index === 0 ? "-ml-0.5" : "-mr-0.5"
//               }`}
//             >
//               <div className="inline-flex items-center gap-3 relative">
//                 <Image
//                   className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                   alt={`Money-${index + 2}`}
//                   src={icon.src}
//                   width={77}
//                   height={77}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Mobile image */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         <Image
//           className="relative w-[800px] sm:w-[1283px] -mt-[70px] sm:-mt-[110px] z-19"
//           alt="Bottom image"
//           src="/landing_page/mobile.png"
//           width={1283}
//           height={650}
//           priority
//         />
//       </motion.div>

//       {/* Decorative right group */}
//       <motion.div
//         initial={{ opacity: 0, y: 100 , x:50}}
//         animate={{ opacity: 1, y: 0 , x:0}}
//         transition={{ duration: 0.7, ease: "easeOut", }}
//         className="absolute right-12 h-full w-[28%] overflow-hidden pointer-events-none z-0"
//       >
//         <Image
//           className="absolute right-0 bottom-30 object-cover"
//           alt="Decoration"
//           src="/landing_page/Group.svg"
//           width={400}
//           height={400}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default MoneySection;




// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const moneyIcons = [
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1.png",
//     position: "top-0 left-0",
//   },
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-1.png",
//     position: "top-0 right-0",
//   },
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-2.png",
//     position: "bottom-0 left-0",
//   },
//   {
//     src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-3.png",
//     position: "bottom-0 right-0",
//   },
// ];

// const animationVariant = {
//   hidden: { opacity: 0, y: 110, scale: 0.9 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   }),
// };

// const MoneySection = () => {
//   return (
//     <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px] overflow-hidden">
//       {/* Heading */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={animationVariant}
//         custom={0}
//         className="flex flex-col items-center gap-3.5 relative w-full"
//       >
//         <h1 className="w-full font-extrabold text-gray-100 text-[100px] sm:text-[120px] md:text-[160px] text-center leading-normal relative tracking-[0]">
//           Finsbee.
//         </h1>
//       </motion.div>

//       {/* Money Icons */}
//       <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-4 sm:left-[10%] md:left-[212px]">
//         {/* Top Icons */}
//         <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
//           {moneyIcons.slice(0, 2).map((icon, index) => (
//             <motion.div
//               key={`top-${index}`}
//               initial="hidden"
//               animate="visible"
//               variants={animationVariant}
//               custom={index + 1}
//               className={`inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]`}
//             >
//               <img
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                 alt="Money"
//                 src={icon.src}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Icons with extra inward spacing animation */}
//         <div className="flex justify-between w-full items-center relative">
//           {moneyIcons.slice(2, 4).map((icon, index) => (
//             <motion.div
//               key={`bottom-${index}`}
//               initial={{ opacity: 0, y: 110, x: index === 0 ? 50 : -50 }} // closer inward
//               animate={{ opacity: 1, y: 0, x: 0 }}
//               transition={{
//                 delay: 0.4 + index * 0.2,
//                 duration: 0.8,
//                 ease: "easeOut",
//               }}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//                 alt="Money"
//                 src={icon.src}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Phone Image */}
//       <motion.img
//         initial="hidden"
//         animate="visible"
//         variants={animationVariant}
//         custom={3}
//         className="relative w-[800px] sm:w-[1283px] -mt-[70px] sm:-mt-[110px] z-19"
//         alt="Bottom image"
//         src="landing_page/mobile.png"
//       />

//       {/* Background Group SVG */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={animationVariant}
//         custom={4}
//         className="absolute right-12 h-full w-[28%] overflow-hidden pointer-events-none z-0"
//       >
//         <img
//           className="absolute right-0 bottom-30 object-cover"
//           alt="Bottom image"
//           src="landing_page/Group.svg"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default MoneySection;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const moneyIcons = [
//   { src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1.png" },
//   { src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-1.png" },
//   { src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-2.png" },
//   { src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-3.png" },
// ];

// const commonTransition = { duration: 1, ease: "easeOut" };

// export default function MoneySection() {
//   return (
//     <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px] overflow-hidden">
//       {/* Heading (ends slightly higher than its DOM position to match screenshot) */}
//       <motion.div
//         initial={{ opacity: 0, y: 150 }}
//         animate={{ opacity: 1, y: 25 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="flex flex-col items-center gap-3.5 relative w-full z-20"
//       >
//         <h1 className="w-full font-extrabold text-gray-100 text-[100px] sm:text-[120px] md:text-[160px] text-center leading-normal relative tracking-[0]">
//           Finsbee.
//         </h1>
//       </motion.div>

//       {/* Money icons container (keeps layout positions; elements animate transform only) */}
//       <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-4 sm:left-[10%] md:left-[212px] z-30 pointer-events-none">
//         {/* Top icons */}
//         <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
//           {moneyIcons.slice(0, 2).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 170 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={commonTransition}
//               style={{ willChange: "transform, opacity" }}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom icons: start 50px closer (x offset), then spread to final positions */}
//         <div className="flex justify-between w-full items-center relative mt-2">
//           {moneyIcons.slice(2, 4).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 250, x: idx === 0 ? 50 : -50 }}
//               animate={{ opacity: 1, y: 0, x: 0 }}
//               transition={commonTransition}
//               style={{ willChange: "transform, opacity" }}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-bottom-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Phones — animate up into the same final position you already have */}
//       <motion.img
//         initial={{ opacity: 0, y: 90, scale: 0.985 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="relative w-[800px] sm:w-[1283px] -mt-[70px] sm:-mt-[110px] z-40"
//         alt="Bottom image"
//         src="landing_page/mobile.png"
//       />

//       {/* Arrow background — made visible on white with mix-blend & drop shadow */}
//       <motion.div
//         initial={{ opacity: 0, y: 110 }}
//         animate={{ opacity: 0.9, y: 0 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="absolute right-12 h-full w-[28%] overflow-hidden pointer-events-none z-10"
//       >
//         <img
//           src="landing_page/Group.svg"
//           alt="arrow-bg"
//           className="absolute right-0 bottom-30 object-cover opacity-90 mix-blend-multiply filter drop-shadow-lg"
//         />
//       </motion.div>
//     </div>
//   );
// }


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const moneyIcons = [
//   { src: "/brand_logo/l1.svg" },
//   { src: "/brand_logo/l2.svg" },
//   { src: "/brand_logo/l3.svg" },
//   { src: "/brand_logo/l4.svg" },
// ];

// const commonTransition = { duration: 0.9, ease: "easeOut" };

// export default function MoneySection() {
//   return (
//     <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px] overflow-hidden">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 110 }}
//         animate={{ opacity: 1, y: -24 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="flex flex-col items-center gap-3.5 relative w-full z-20"
//       >
//         <h1 className="w-full font-extrabold  text-gray-100 text-[100px] sm:text-[120px] md:text-[160px] text-center leading-normal relative tracking-[0]">
//           Finsbee.
//         </h1>
//       </motion.div>

//       {/* Money icons */}
//       <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-4 sm:left-[10%] md:left-[212px] z-30 pointer-events-none">
//         {/* Top icons */}
//         <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
//           {moneyIcons.slice(0, 2).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0.2, y: 110 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={commonTransition}
//               style={{ willChange: "transform, opacity" }}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom icons */}
//         <div className="flex justify-between w-full items-center relative mt-2">
//           {moneyIcons.slice(2, 4).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0.2, y: 110, x: idx === 0 ? 50 : -50 }}
//               animate={{ opacity: 1, y: 0, x: 0 }}
//               transition={commonTransition}
//               style={{ willChange: "transform, opacity" }}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-bottom-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Phone image */}
//       <motion.img
//         initial={{ opacity: 0, y: 160, scale: 0.985 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="relative w-[800px] sm:w-[1283px] -mt-[70px] sm:-mt-[160px] z-40"
//         alt="Bottom image"
//         src="landing_page/mobile.png"
//       />

//       {/* Background arrows */}
//       <motion.div
//         initial={{ opacity: 0, y: 110 }}
//         animate={{ opacity: 0.9, y: 0 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="absolute right-12 h-full w-[28%] overflow-hidden pointer-events-none z-10"
//       >
//         <img
//           src="landing_page/Group.svg"
//           alt="arrow-bg"
//           className="absolute right-0 bottom-30 object-cover opacity-90 mix-blend-multiply filter drop-shadow-lg"
//         />
//       </motion.div>
//     </div>
//   );
// }


// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const moneyIcons = [
//   { src: "/brand_logo/l1.svg" },
//   { src: "/brand_logo/l2.svg" },
//   { src: "/brand_logo/l3.svg" },
//   { src: "/brand_logo/l4.svg" },
// ];

// const commonTransition = { duration: 0.9, ease: "easeOut" };

// export default function MoneySection() {
//   return (
//     <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px] overflow-hidden">
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 110 }}
//         animate={{ opacity: 1, y: -24 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="flex flex-col items-center gap-3.5 relative w-full z-20"
//       >
//         <h1 className="w-full font-extrabold text-gray-100 text-[64px] sm:text-[100px] md:text-[160px] text-center leading-normal relative tracking-[0]">
//           Finsbee.
//         </h1>
//       </motion.div>

//       {/* Money icons */}
//       <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
//         {/* Top icons */}
//         <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
//           {moneyIcons.slice(0, 2).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0.2, y: 110 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={commonTransition}
//               style={{ willChange: "transform, opacity" }}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom icons */}
//         <div className="flex justify-between w-full items-center relative mt-2">
//           {moneyIcons.slice(2, 4).map((icon, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0.2, y: 110, x: idx === 0 ? 50 : -50 }}
//               animate={{ opacity: 1, y: 0, x: 0 }}
//               transition={commonTransition}
//               style={{ willChange: "transform, opacity" }}
//               className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
//             >
//               <img
//                 src={icon.src}
//                 alt={`money-bottom-${idx}`}
//                 className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Phone image */}
//       <motion.img
//         initial={{ opacity: 0, y: 160, scale: 0.985 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="relative w-[90%] sm:w-[80%] md:w-[1283px] max-w-[1283px] -mt-[40px] sm:-mt-[100px] z-40"
//         alt="Bottom image"
//         src="landing_page/mobile.png"
//       />

//       {/* Background arrows */}
//       <motion.div
//         initial={{ opacity: 0, y: 110 }}
//         animate={{ opacity: 0.9, y: 0 }}
//         transition={commonTransition}
//         style={{ willChange: "transform, opacity" }}
//         className="absolute right-4 sm:right-12 h-full w-[40%] sm:w-[28%] overflow-hidden pointer-events-none z-10"
//       >
//         <img
//           src="landing_page/Group.svg"
//           alt="arrow-bg"
//           className="absolute right-0 bottom-0 object-cover opacity-90 mix-blend-multiply filter drop-shadow-lg"
//         />
//       </motion.div>
//     </div>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";

const moneyIcons = [
  { src: "/brand_logo/l1.svg" },
  { src: "/brand_logo/l2.svg" },
  { src: "/brand_logo/l3.svg" },
  { src: "/brand_logo/l4.svg" },
];

const commonTransition = { duration: 0.9, ease: "easeOut" };

export default function MoneySection({ animate = false }) {
  return (
    <div className="flex flex-col h-[500px] sm:h-[650px] items-center justify-end relative w-full max-w-[1440px] mx-auto mb-[-200px] sm:mb-[-311.01px] overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y:  160 }}
        animate={animate ? { opacity: 1, y: 30 } : {}}
        transition={commonTransition}
        style={{ willChange: "transform, opacity" }}
        className="flex flex-col items-center gap-3.5 relative w-full z-20"
      >
        <h1 className="w-full font-extrabold text-gray-100 text-[64px] sm:text-[100px] md:text-[160px] text-center leading-normal relative tracking-[0]">
          Finsbee.
        </h1>
      </motion.div>

      {/* Money icons */}
      <div className="flex flex-col w-full max-w-[800px] sm:max-w-[1088px] h-[200px] sm:h-[300px] items-center absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        {/* Top icons */}
        <div className="flex w-full max-w-[400px] sm:max-w-[610px] justify-between items-center relative">
          {moneyIcons.slice(0, 2).map((icon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.2, y: 110 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={commonTransition}
              className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
            >
              <img
                src={icon.src}
                alt={`money-${idx}`}
                className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom icons */}
        <div className="flex justify-between w-full items-center relative mt-2">
          {moneyIcons.slice(2, 4).map((icon, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.2, y: 110, x: idx === 0 ? 50 : -50 }}
              animate={animate ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={commonTransition}
              className="inline-flex items-center justify-center p-2 sm:p-3 relative bg-white/10 rounded-[20px]"
            >
              <img
                src={icon.src}
                alt={`money-bottom-${idx}`}
                className="relative w-[50px] sm:w-[77px] h-[50px] sm:h-[77px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Phone image */}
      <motion.img
        initial={{ opacity: 0, y: 160, scale: 0.8 }}
        animate={animate ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={commonTransition}
        className="relative w-[90%] sm:w-[80%] md:w-[1283px] max-w-[1283px] -mt-[40px] sm:-mt-[100px] z-40"
        alt="Bottom image"
        src="landing_page/mobile.png"
      />
    </div>
  );
}
