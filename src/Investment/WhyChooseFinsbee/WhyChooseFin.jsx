// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const WhyChooseFinsbee = () => {
//   const [hoveredCard, setHoveredCard] = useState(0);

// const investmentOptions = [
//   {
//     title: "Digital Gold & Silver",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content:
//       "The simplest way to buy digital gold online or buy digital silver online.",
//   },
//   {
//     title: "Gold & Silver ETFs",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Invest in Gold & Silver ETFs for long-term growth.",
//   },
//   {
//     title: "Sovereign Gold Bonds (SGBs)",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Earn interest with Sovereign Gold Bonds issued by the government.",
//   },
//   {
//     title: "Digital Silver Trading",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Trade digital silver easily with minimal fees.",
//   },
//   {
//     title: "Physical Gold & Silver",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Buy physical gold & silver and store safely.",
//   },
// ];

//   const smallWidth = 224;
//   const smallHeight = 384;
//   const expandedWidth = 336;
//   const expandedHeight = 573;

// // Text (inside content, slight diagonal slide)
// const textVariants = {
//   initial: { opacity: 0, x: 30, y: 30 },
//   animate: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: { duration: 0., ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     x: 30,
//     y: 30,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
// };

// // Purple (always from bottom → up)
// const purpleVariants = {
//   initial: { opacity: 0, y: 60, x: 60 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     x:0,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: 60,
//     x: 60,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
// };

// // Yellow (always from top → down)
// const yellowVariants = {
//   initial: { opacity: 0, y: -60 , x: -60},
//   animate: {
//     opacity: 1,
//     y: 0,
//     x:0,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -60,
//     x:-60,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
// };

//   return (
//     <section className="flex flex-col items-center gap-12 px-[136px] py-24 relative">
//       {/* Header */}
//       <header className="text-center max-w-xl mx-auto">
//         <h2 className="text-sm font-bold text-gray-800 mb-2">
//           The Results Speaks for Themselves
//         </h2>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
//           Why Choose <br />
//           <span className="text-yellow-500">Finsbee?</span>
//         </h1>
//         {/* <p className="mt-4 text-gray-600 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p> */}
//       </header>

//       {/* Cards */}
//       <motion.div
//         layout
//         className="flex flex-row items-end w-[1280px] h-[573px] justify-center gap-3 max-w-7xl"
//         onMouseLeave={() => setHoveredCard(0)}
//       >
//         {investmentOptions.map((option, index) => {
//           const isActive = hoveredCard === index;
//           const width = isActive ? expandedWidth : smallWidth;
//           const height = isActive ? expandedHeight : smallHeight;

//           return (
//             <motion.div
//               key={index}
//               layout
//               onMouseEnter={() => setHoveredCard(index)}
//               animate={{ width, height }}
//               transition={{ type: "spring", stiffness: 250, damping: 25 }}
//               className="relative rounded-2xl border border-black cursor-pointer flex flex-col justify-between p-0 z-0 overflow-hidden"
//               style={{
//                 backgroundImage: `linear-gradient(180deg, ${
//                   isActive
//                     ? "rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%"
//                     : "rgba(255,199,60,0.1) 0%, rgba(0,0,0,1) 100%"
//                 }), url(${option.backgroundImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div
//                 className={`flex flex-col h-full justify-between ${
//                   isActive ? "px-6 py-8" : "px-4 py-8"
//                 } w-full`}
//               >
//                 {/* Top section (Text vs Icon) */}
//                 <AnimatePresence >
//                   {isActive ? (
//                     <motion.h3
//                       key="content"
//                       variants={textVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex-1 font-bold text-white text-3xl text-center leading-normal z-10"
//                     >
//                       {option.content}
//                     </motion.h3>
//                   ) : (
//                     <motion.img
//                       key="icon"
//                       variants={yellowVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       src={option.icon}
//                       alt="icon"
//                       className="w-6 h-6 mx-auto"
//                     />
//                   )}
//                 </AnimatePresence>

//                 {/* Bottom section (Purple vs Yellow card) */}
//                 <AnimatePresence >
//                   {isActive ? (
//                     <motion.div
//                       key="purple"
//                       variants={purpleVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20 justify-center relative"
//                     >
//                       <div className="flex flex-col items-center justify-center gap-6 p-6 w-full bg-purple-600 rounded-2xl border-8 border-black/30 z-10">
//                         <div className="text-white font-bold text-xl text-center">
//                           {option.title}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="yellow"
//                       variants={yellowVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex flex-col items-center justify-center gap-6 px-3 py-4 w-full rounded-xl border-4 border-transparent bg-gradient-to-b from-yellow-400 to-white"
//                     >
//                       <div className="text-gray-800 font-bold text-xl text-center">
//                         {option.title}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const WhyChooseFinsbee = () => {
//   // On mobile, default is -1 (no card expanded). On desktop, keep hover.
//   const [activeCard, setActiveCard] = useState(-1);

//   const investmentOptions = [
//     {
//       title: "Digital Gold & Silver",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       content:
//         "The simplest way to buy digital gold online or buy digital silver online.",
//     },
//     {
//       title: "Gold & Silver ETFs",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       content: "Invest in Gold & Silver ETFs for long-term growth.",
//     },
//     {
//       title: "Sovereign Gold Bonds (SGBs)",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       content: "Earn interest with Sovereign Gold Bonds issued by the government.",
//     },
//     {
//       title: "Digital Silver Trading",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       content: "Trade digital silver easily with minimal fees.",
//     },
//     {
//       title: "Physical Gold & Silver",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       content: "Buy physical gold & silver and store safely.",
//     },
//   ];

//   // Responsive widths/heights
//   const smallMobileWidth = 150;
//   const smallMobileHeight = 240;
//   const expandedMobileWidth = 320;
//   const expandedMobileHeight = 400;

//   const smallDesktopWidth = 224;
//   const smallDesktopHeight = 384;
//   const expandedDesktopWidth = 336;
//   const expandedDesktopHeight = 573;

//   // Framer Motion Variants (with smoother duration)
//   const textVariants = {
//     initial: { opacity: 0, x: 30, y: 30 },
//     animate: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     },
//     exit: {
//       opacity: 0,
//       x: 30,
//       y: 30,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     },
//   };
//   const purpleVariants = {/* unchanged */};
//   const yellowVariants = {/* unchanged */};

//   // Detect mobile
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   // Handler for both click/tap and hover
//   const handleCardActivate = (index) => setActiveCard(index);
//   const handleCardDeactivate = () => setActiveCard(-1);

//   return (
//     <section className="flex flex-col items-center gap-10 px-4 md:px-24 py-12 md:py-24 relative w-full">
//       {/* Header */}
//       <header className="text-center max-w-xl mx-auto mb-2">
//         <h2 className="text-sm font-bold text-gray-800 mb-2">
//           The Results Speaks for Themselves
//         </h2>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
//           Why Choose <br />
//           <span className="text-yellow-500">Finsbee?</span>
//         </h1>
//       </header>
//       {/* Cards */}
//       <motion.div
//         layout
//         className="
//           flex flex-wrap md:flex-nowrap items-end md:justify-center gap-3 w-full
//           max-w-[1280px] md:h-[573px] h-auto
//         "
//         onMouseLeave={handleCardDeactivate}
//       >
//         {investmentOptions.map((option, index) => {
//           // Responsive width/height
//           const isActive = activeCard === index;
//           const width = isMobile
//             ? isActive ? expandedMobileWidth : smallMobileWidth
//             : isActive ? expandedDesktopWidth : smallDesktopWidth;
//           const height = isMobile
//             ? isActive ? expandedMobileHeight : smallMobileHeight
//             : isActive ? expandedDesktopHeight : smallDesktopHeight;

//           return (
//             <motion.div
//               key={index}
//               layout
//               tabIndex={0}
//               onMouseEnter={() => !isMobile && handleCardActivate(index)}
//               onClick={() => isMobile && handleCardActivate(index)}
//               animate={{ width, height }}
//               transition={{ type: "spring", stiffness: 200, damping: 30 }}
//               className="
//                 relative rounded-2xl border border-black cursor-pointer
//                 flex flex-col justify-between p-0 z-0 overflow-hidden
//                 bg-white w-full md:w-auto
//                 shadow-md
//               "
//               style={{
//                 maxWidth: isMobile ? "97vw" : "336px",
//                 minWidth: isMobile ? "140px" : "224px",
//                 backgroundImage: `linear-gradient(180deg, ${
//                   isActive
//                     ? "rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%"
//                     : "rgba(255,199,60,0.1) 0%, rgba(0,0,0,1) 100%"
//                 }), url(${option.backgroundImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div
//                 className={`flex flex-col h-full justify-between ${isActive ? "px-4 py-6" : "px-3 py-5"} w-full`}
//               >
//                 <AnimatePresence>
//                   {isActive ? (
//                     <motion.h3
//                       key="content"
//                       variants={textVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex-1 font-bold text-white text-lg md:text-3xl text-center leading-normal z-10"
//                     >
//                       {option.content}
//                     </motion.h3>
//                   ) : (
//                     <motion.img
//                       key="icon"
//                       variants={yellowVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       src={option.icon}
//                       alt="icon"
//                       className="w-6 h-6 mx-auto"
//                     />
//                   )}
//                 </AnimatePresence>
//                 <AnimatePresence>
//                   {isActive ? (
//                     <motion.div
//                       key="purple"
//                       variants={purpleVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20 justify-center relative"
//                     >
//                       <div className="text-white font-bold text-md md:text-xl p-5 w-full bg-purple-600 rounded-2xl border-4 border-black/30 z-10 text-center">
//                         {option.title}
//                       </div>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="yellow"
//                       variants={yellowVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl border-2 border-transparent bg-gradient-to-b from-yellow-400/70 to-white"
//                     >
//                       <div className="text-gray-800 font-bold text-md md:text-xl text-center">
//                         {option.title}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const investmentOptions = [
//   {
//     title: "Digital Gold & Silver",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "The simplest way to buy digital gold online or buy digital silver online.",
//   },
//   {
//     title: "Gold & Silver ETFs",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Invest in Gold & Silver ETFs for long-term growth.",
//   },
//   {
//     title: "Sovereign Gold Bonds (SGBs)",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Earn interest with Sovereign Gold Bonds issued by the government.",
//   },
//   {
//     title: "Digital Silver Trading",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Trade digital silver easily with minimal fees.",
//   },
//   {
//     title: "Physical Gold & Silver",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Buy physical gold & silver and store safely.",
//   },
// ];

// // Animation variants for cards
// const textVariants = {
//   initial: { opacity: 0, x: 30, y: 30 },
//   animate: {
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     x: 30,
//     y: 30,
//     transition: { duration: 0.4, ease: "easeInOut" },
//   },
// };
// const purpleVariants = {
//   initial: { opacity: 0, y: 60, x: 60 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: 60,
//     x: 60,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
// };
// const yellowVariants = {
//   initial: { opacity: 0, y: -60, x: -60 },
//   animate: {
//     opacity: 1,
//     y: 0,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
//   exit: {
//     opacity: 0,
//     y: -60,
//     x: -60,
//     transition: { duration: 0.6, ease: "easeInOut" },
//   },
// };

// const smoothSpring = {
//   type: "spring",
//   stiffness: 80,
//   damping: 18,
// };

// // Text block
// const textVariants = {
//   initial: { opacity: 0, x: 20, y: 20 },
//   animate: { opacity: 1, x: 0, y: 0, transition: smoothSpring },
//   exit: { opacity: 0, x: 0, y: 0, transition: smoothSpring }, // ❗ NO movement
// };

// // Purple box
// const purpleVariants = {
//   initial: { opacity: 0, y: 40, x: 40 },
//   animate: { opacity: 1, y: 0, x: 0, transition: smoothSpring },
//   exit: { opacity: 0, y: 0, x: 0, transition: smoothSpring }, // ❗ NO movement
// };

// // Yellow box
// const yellowVariants = {
//   initial: { opacity: 0, y: -40, x: -40 },
//   animate: { opacity: 1, y: 0, x: 0, transition: smoothSpring },
//   exit: { opacity: 0, y: 0, x: 0, transition: smoothSpring }, // ❗ NO movement
// };

// export const WhyChooseFinsbee = () => {
//   const [activeCard, setActiveCard] = useState(0); // first card active by default
//   const [isMobile, setIsMobile] = useState(false);
//   const scrollerRef = useRef(null);

//   // Detect mobile screen for responsiveness
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // For mobile: Change activeCard to center card upon scroll
//   useEffect(() => {
//     if (!isMobile) return;
//     const handleScroll = () => {
//       if (!scrollerRef.current) return;
//       const scrollLeft = scrollerRef.current.scrollLeft;
//       const cardWidth = scrollerRef.current.firstChild?.clientWidth || 1;
//       // Find nearest card index to center
//       const nearest = Math.round(scrollLeft / cardWidth);
//       setActiveCard(nearest);
//     };
//     const refCurrent = scrollerRef.current;
//     refCurrent?.addEventListener("scroll", handleScroll, { passive: true });
//     return () => refCurrent?.removeEventListener("scroll", handleScroll);
//   }, [isMobile]);

//   // Card dimensions
//   const desktopSmall = { width: 200, height: 340 };
//   const desktopExpanded = { width: 320, height: 570 };
//   const mobileNormal = { width: 260, height: 360 };

//   return (
//     <section className="flex flex-col items-center gap-10 px-4 md:px-24 py-12 md:py-24 w-full">
//       <header className="text-center max-w-xl mx-auto mb-2">
//         <h2 className="text-sm font-bold text-gray-800 mb-2">
//           The Results Speaks for Themselves
//         </h2>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
//           Why Choose <br />
//           <span className="text-yellow-500">Finsbee?</span>
//         </h1>
//       </header>
//       {!isMobile ? (
//         // ----- Desktop view -----
//         <motion.div
//           layout
//           className="flex flex-row items-end justify-center gap-3 w-full max-w-[1280px] md:h-[573px] h-auto"
//           onMouseLeave={() => setActiveCard(0)}
//         >
//           {investmentOptions.map((option, index) => {
//             const isActive = activeCard === index;
//             const width = isActive ? desktopExpanded.width : desktopSmall.width;
//             const height = isActive ? desktopExpanded.height : desktopSmall.height;
//             return (
//               <motion.div
//                 key={index}
//                 layout
//                 onMouseEnter={() => setActiveCard(index)}
//                 animate={{ width, height }}
//                 // transition={{ type: "spring", stiffness: 200, damping: 30 }}
//                 transition={{ type: "spring", stiffness: 70, damping: 20 }}

//                 className="relative rounded-2xl border border-black cursor-pointer flex flex-col justify-between p-0 z-0 overflow-hidden bg-white shadow-md"
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, ${
//                     isActive
//                       ? "rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%"
//                       : "rgba(255,199,60,0.1) 0%, rgba(0,0,0,1) 100%"
//                   }), url(${option.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className={`flex flex-col h-full justify-between ${isActive ? "px-4 py-6" : "px-3 py-5"} w-full`}>
//                   <AnimatePresence>
//                     {isActive ? (
//                       <motion.h3
//                         key="content"
//                         variants={textVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex-1 font-bold text-white text-lg md:text-3xl text-center leading-normal z-10"
//                       >
//                         {option.content}
//                       </motion.h3>
//                     ) : (
//                       <motion.img
//                         key="icon"
//                         variants={yellowVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         src={option.icon}
//                         alt="icon"
//                         className="w-6 h-6 mx-auto"
//                       />
//                     )}
//                   </AnimatePresence>
//                   <AnimatePresence>
//                     {isActive ? (
//                       <motion.div
//                         key="purple"
//                         variants={purpleVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20 justify-center relative"
//                       >
//                         <div className="text-white font-bold text-md md:text-xl p-5 w-full bg-purple-600 rounded-2xl border-4 border-black/30 z-10 text-center">
//                           {option.title}
//                         </div>
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key="yellow"
//                         variants={yellowVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl border-2 border-transparent bg-gradient-to-b from-yellow-400/70 to-white"
//                       >
//                         <div className="text-gray-800 font-bold text-md md:text-xl text-center">
//                           {option.title}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       ) : (
//         // ----- Mobile view -----
//         <div
//           ref={scrollerRef}
//           className="flex flex-row overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-gray-400 snap-x snap-mandatory"
//           style={{ WebkitOverflowScrolling: "touch" }}
//         >
//           {investmentOptions.map((option, index) => {
//             // Only active card is animated/expanded; others stay normal
//             const isActive = activeCard === index;
//             return (
//               <motion.div
//                 key={index}
//                 layout
//                 className={`relative shrink-0 rounded-2xl border border-black flex flex-col justify-between bg-white shadow-md snap-center transition-all cursor-pointer`}
//                 style={{
//                   width: isActive ? mobileNormal.width + 24 : mobileNormal.width,
//                   height: isActive ? mobileNormal.height + 60 : mobileNormal.height,
//                   backgroundImage: `linear-gradient(180deg, ${
//                     isActive
//                       ? "rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%"
//                       : "rgba(255,199,60,0.1) 0%, rgba(0,0,0,1) 100%"
//                   }), url(${option.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className={`flex flex-col h-full justify-between ${isActive ? "px-4 py-6" : "px-3 py-5"} w-full`}>
//                   <AnimatePresence>
//                     {isActive ? (
//                       <motion.h3
//                         key="content"
//                         variants={textVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex-1 font-bold text-white text-base text-center leading-normal z-10"
//                       >
//                         {option.content}
//                       </motion.h3>
//                     ) : (
//                       <img src={option.icon} alt="icon" className="w-6 h-6 mx-auto" />
//                     )}
//                   </AnimatePresence>
//                   <AnimatePresence>
//                     {isActive ? (
//                       <motion.div
//                         key="purple"
//                         variants={purpleVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20 justify-center relative"
//                       >
//                         <div className="text-white font-bold text-lg p-4 w-full bg-purple-600 rounded-2xl border-4 border-black/30 z-10 text-center">
//                           {option.title}
//                         </div>
//                       </motion.div>
//                     ) : (
//                       <div className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl border-2 border-transparent bg-gradient-to-b from-yellow-400/70 to-white">
//                         <div className="text-gray-800 font-bold text-lg text-center">
//                           {option.title}
//                         </div>
//                       </div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// };

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const investmentOptions = [
//   {
//     title: "Digital Gold & Silver",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "The simplest way to buy digital gold online or buy digital silver online.",
//   },
//   {
//     title: "Gold & Silver ETFs",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Invest in Gold & Silver ETFs for long-term growth.",
//   },
//   {
//     title: "Sovereign Gold Bonds (SGBs)",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Earn interest with Sovereign Gold Bonds issued by the government.",
//   },
//   {
//     title: "Digital Silver Trading",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Trade digital silver easily with minimal fees.",
//   },
//   {
//     title: "Physical Gold & Silver",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Buy physical gold & silver and store safely.",
//   },
// ];

// /* -------------------------------------
//    🎯 FIXED ANIMATION VARIANTS
//    Reverse animation = EXIT === INITIAL
// --------------------------------------*/
// const spring = {
//   type: "spring",
//   stiffness: 80,
//   damping: 18,
// };

// const textVariants = {
//   initial: { opacity: 0, y: 20, x: 20 },
//   animate: { opacity: 1, y: 0, x: 0, transition: spring },
//   exit: { opacity: 0, y: 20, x: 20, transition: spring },
// };

// const purpleVariants = {
//   initial: { opacity: 0, y: 40, x: 40 },
//   animate: { opacity: 1, y: 0, x: 0, transition: spring },
//   exit: { opacity: 0, y: 40, x: 40, transition: spring },
// };

// const yellowVariants = {
//   initial: { opacity: 0, y: -40, x: -40 },
//   animate: { opacity: 1, y: 0, x: 0, transition: spring },
//   exit: { opacity: 0, y: -40, x: -40, transition: spring },
// };

// export const WhyChooseFinsbee = () => {
//   const [activeCard, setActiveCard] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const resize = () => setIsMobile(window.innerWidth < 768);
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   const desktopSmall = { width: 200, height: 340 };
//   const desktopExpanded = { width: 320, height: 570 };

//   return (
//     <section className="px-4 md:px-24 py-16">
//       <header className="text-center mb-10">
//         <h2 className="text-sm font-bold text-gray-700 mb-1">
//           The Results Speaks for Themselves
//         </h2>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
//           Why Choose <span className="text-yellow-500">Finsbee?</span>
//         </h1>
//       </header>

//       {!isMobile && (
//         <motion.div
//           layout
//           className="flex flex-row items-end justify-center gap-3 max-w-[1280px] mx-auto"
//           onMouseLeave={() => setActiveCard(0)}
//         >
//           {investmentOptions.map((option, index) => {
//             const isActive = activeCard === index;

//             return (
//               <motion.div
//                 key={index}
//                 layout
//                 onMouseEnter={() => setActiveCard(index)}
//                 animate={{
//                   width: isActive ? desktopExpanded.width : desktopSmall.width,
//                   height: isActive ? desktopExpanded.height : desktopSmall.height,
//                 }}
//                 transition={{ type: "spring", stiffness: 70, damping: 20 }}
//                 className="relative rounded-2xl border border-black shadow-md cursor-pointer overflow-hidden"
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, ${
//                     isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
//                   }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className={`flex flex-col h-full justify-between ${isActive ? "px-4 py-6" : "px-3 py-5"}`}>

//                   {/* CONTENT / ICON */}
//                   <AnimatePresence mode="wait">
//                     {isActive ? (
//                       <motion.h3
//                         key="content"
//                         variants={textVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         layout
//                         className="text-white font-bold text-lg md:text-2xl text-center leading-snug"
//                       >
//                         {option.content}
//                       </motion.h3>
//                     ) : (
//                       <motion.img
//                         key="icon"
//                         variants={yellowVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         layout
//                         src={option.icon}
//                         className="w-7 h-7 mx-auto"
//                       />
//                     )}
//                   </AnimatePresence>

//                   {/* TITLE */}
//                   <AnimatePresence mode="wait">
//                     {isActive ? (
//                       <motion.div
//                         key="titleActive"
//                         variants={purpleVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         layout
//                         className="bg-purple-600 p-4 rounded-2xl border-4 border-black/20 text-white text-center font-bold text-lg shadow-inner"
//                       >
//                         {option.title}
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key="titleInactive"
//                         variants={yellowVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         layout
//                         className="bg-gradient-to-b from-yellow-400/60 to-white p-3 rounded-xl text-gray-800 text-center font-bold text-lg"
//                       >
//                         {option.title}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       )}
//     </section>
//   );
// };

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const investmentOptions = [
//   {
//     title: "Digital Gold & Silver",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "The simplest way to buy digital gold online or buy digital silver online.",
//   },
//   {
//     title: "Gold & Silver ETFs",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Invest in Gold & Silver ETFs for long-term growth.",
//   },
//   {
//     title: "Sovereign Gold Bonds (SGBs)",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Earn interest with Sovereign Gold Bonds issued by the government.",
//   },
//   {
//     title: "Digital Silver Trading",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Trade digital silver easily with minimal fees.",
//   },
//   {
//     title: "Physical Gold & Silver",
//     backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Buy physical gold & silver and store safely.",
//   },
// ];

// const spring = {
//   type: "spring",
//   stiffness: 70,
//   damping: 18,
// };

// export const WhyChooseFinsbee = () => {
//   const [activeCard, setActiveCard] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 768);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const desktopSmall = { width: 200, height: 340 };
//   const desktopExpanded = { width: 320, height: 570 };

//   return (
//     <section className="px-4 md:px-24 py-16">
//       <header className="text-center mb-10">
//         <h2 className="text-sm font-bold text-gray-700 mb-1">
//           The Results Speaks for Themselves
//         </h2>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
//           Why Choose <span className="text-yellow-500">Finsbee?</span>
//         </h1>
//       </header>

//       {!isMobile && (
//         <motion.div
//           layout
//           className="flex flex-row items-end justify-center gap-3 max-w-[1280px] mx-auto"
//           onMouseLeave={() => setActiveCard(0)}
//         >
//           {investmentOptions.map((option, index) => {
//             const isActive = activeCard === index;

//             return (
//               <motion.div
//                 key={index}
//                 layout
//                 onMouseEnter={() => setActiveCard(index)}
//                 animate={{
//                   width: isActive ? desktopExpanded.width : desktopSmall.width,
//                   height: isActive ? desktopExpanded.height : desktopSmall.height,
//                 }}
//                 transition={spring}
//                 className="relative rounded-2xl border border-black shadow-md cursor-pointer overflow-hidden"
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, ${
//                     isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.1)"
//                   }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div
//                   className={`flex flex-col h-full justify-between ${
//                     isActive ? "px-4 py-6" : "px-3 py-5"
//                   }`}
//                 >
//                   {/* SHARED CONTENT / ICON */}
//                   <div className="relative flex justify-center items-center h-[200px]">
//                     {isActive ? (
//                       <motion.h3
//                         key="content-shared"
//                         layoutId="contentShared"
//                         transition={spring}
//                         className="text-white font-bold text-lg md:text-2xl text-center leading-snug"
//                       >
//                         {option.content}
//                       </motion.h3>
//                     ) : (
//                       <motion.img
//                         key={`icon-${index}`}
//                         layoutId={`iconShared-${index}`}
//                         transition={spring}
//                         src={option.icon}
//                         className="w-7 h-7 mx-auto"
//                       />
//                     )}
//                   </div>

//                   {/* SHARED TITLE BOX */}
//                   <div className="relative mt-4">
//                     {isActive ? (
//                       <motion.div
//                         key="purpleShared"
//                         layoutId="sharedTitle"
//                         transition={spring}
//                         className="bg-purple-600 p-4 rounded-2xl border-4 border-black/20 text-white text-center font-bold text-lg"
//                       >
//                         {option.title}
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key={`yellowShared-${index}`}
//                         layoutId={`yellow-${index}`}
//                         transition={spring}
//                         className="bg-gradient-to-b from-yellow-400/60 to-white p-3 rounded-xl text-gray-800 text-center font-bold text-lg"
//                       >
//                         {option.title}
//                       </motion.div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       )}
//     </section>
//   );
// };

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // const scrollerRef = useRef(null);
// const investmentOptions = [
//   {
//     title: "Digital Gold & Silver",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content:
//       "The simplest way to buy digital gold online or buy digital silver online.",
//   },
//   {
//     title: "Gold & Silver ETFs",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Invest in Gold & Silver ETFs for long-term growth.",
//   },
//   {
//     title: "Sovereign Gold Bonds (SGBs)",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content:
//       "Earn interest with Sovereign Gold Bonds issued by the government.",
//   },
//   {
//     title: "Digital Silver Trading",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Trade digital silver easily with minimal fees.",
//   },
//   {
//     title: "Physical Gold & Silver",
//     backgroundImage:
//       "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
//     icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//     content: "Buy physical gold & silver and store safely.",
//   },
// ];

// /* -----------------------------------------------------
//    SMOOTH ANIMATION VARIANTS
// ----------------------------------------------------- */

// const spring = {
//   type: "spring",
//   stiffness: 80,
//   damping: 20,
// };

// // Yellow card exits toward upper-left
// const yellowVariants = {
//   initial: { opacity: 0, x: -40, y: -40 },
//   animate: { opacity: 1, x: 0, y: 0, transition: spring },
//   exit: { opacity: 0, x: -40, y: -40, transition: spring },
// };

// // Purple card enters from bottom-right
// const purpleVariants = {
//   initial: { opacity: 0, x: 40, y: 40 },
//   animate: { opacity: 1, x: 0, y: 0, transition: spring },
//   exit: { opacity: 0, x: 40, y: 40, transition: spring },
// };

// // Text enters from bottom-right
// const textVariants = {
//   initial: { opacity: 0, x: 40, y: 40 },
//   animate: { opacity: 1, x: 0, y: 0, transition: spring },
//   exit: { opacity: 0, x: 40, y: 40, transition: spring },
// };


// const scrollToCard = (index) => {
//   if (!scrollerRef.current) return;
//   const cardWidth = mobileNormal.width + 24; // same spacing you're using
//   scrollerRef.current.scrollTo({
//     left: index * (cardWidth + 16),
//     behavior: "smooth",
//   });
// };

// export const WhyChooseFinsbee = () => {
//   const [activeCard, setActiveCard] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const scrollerRef = useRef(null);

//   /* Responsive */
//   useEffect(() => {
//     const resize = () => setIsMobile(window.innerWidth < 768);
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   /* Mobile auto-center logic */
//   useEffect(() => {
//     if (!isMobile) return;

//     const onScroll = () => {
//       if (!scrollerRef.current) return;
//       const left = scrollerRef.current.scrollLeft;
//       const cardWidth = scrollerRef.current.firstChild?.clientWidth || 1;
//       setActiveCard(Math.round(left / cardWidth));
//     };

//     const ref = scrollerRef.current;
//     ref?.addEventListener("scroll", onScroll, { passive: true });
//     return () => ref?.removeEventListener("scroll", onScroll);
//   }, [isMobile]);

  // const desktopSmall = { width: 200, height: 340 };
  // const desktopExpanded = { width: 320, height: 570 };
  // const mobileNormal = { width: 260, height: 360 };

//   return (
//     <section className="flex flex-col items-center gap-10 px-4 md:px-24 py-12 md:py-24 w-full">
//       <header className="text-center max-w-xl mx-auto mb-2">
//         <h2 className="text-sm font-bold text-gray-800 mb-2">
//           The Results Speaks for Themselves
//         </h2>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
//           Why Choose <span className="text-yellow-500">Finsbee?</span>
//         </h1>
//       </header>

//       {/* =======================================
//           DESKTOP VERSION
//       ======================================== */}
//       {!isMobile ? (
//         <motion.div
//           layout
//           className="flex flex-row items-end justify-center gap-3 w-full max-w-[1280px] md:h-[573px] h-auto"
//           onMouseLeave={() => setActiveCard(0)}
//         >
//           {investmentOptions.map((option, index) => {
//             const isActive = activeCard === index;

//             return (
//               <motion.div
//                 key={index}
//                 layout
//                 onMouseEnter={() => setActiveCard(index)}
//                 animate={{
//                   width: isActive ? desktopExpanded.width : desktopSmall.width,
//                   height: isActive
//                     ? desktopExpanded.height
//                     : desktopSmall.height,
//                 }}
//                 transition={{ type: "spring", stiffness: 70, damping: 20 }}
//                 className="relative rounded-2xl border border-black cursor-pointer flex flex-col justify-between p-0 z-0 overflow-hidden bg-white shadow-md"
//                 style={{
//                   backgroundImage: `linear-gradient(180deg, ${
//                     isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
//                   }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div
//                   className={`flex flex-col h-full justify-between ${
//                     isActive ? "px-4 py-6" : "px-3 py-5"
//                   } w-full`}
//                 >
//                   {/* TOP CONTENT */}
//                   <AnimatePresence mode="sync">
//                     {isActive ? (
//                       <motion.h3
//                         key="content"
//                         variants={textVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex-1 font-bold text-white text-lg md:text-3xl text-center leading-normal z-10"
//                       >
//                         {option.content}
//                       </motion.h3>
//                     ) : (
//                       <motion.img
//                         key="icon"
//                         variants={yellowVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         src={option.icon}
//                         alt="icon"
//                         className="w-6 h-6 mx-auto"
//                       />
//                     )}
//                   </AnimatePresence>

//                   {/* BOTTOM TITLE CARD */}
//                   <AnimatePresence mode="sync">
//                     {isActive ? (
//                       <motion.div
//                         key="purpleCard"
//                         variants={purpleVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20 justify-center relative"
//                       >
//                         <div className="text-white font-bold text-md md:text-xl p-5 w-full bg-purple-600 rounded-2xl border-4 border-black/30 z-10 text-center">
//                           {option.title}
//                         </div>
//                       </motion.div>
//                     ) : (
//                       <motion.div
//                         key="yellowCard"
//                         variants={yellowVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl border-2 border-transparent bg-gradient-to-b from-yellow-400/70 to-white"
//                       >
//                         <div className="text-gray-800 font-bold text-md md:text-xl text-center">
//                           {option.title}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       ) : null}

//       {/* * =======================================
//           MOBILE VERSION */}
//     {isMobile && (
//   <div className="relative w-full">

//     {/* LEFT ARROW */}
//     {activeCard > 0 && (
//       <button
//         onClick={() => {
//           const newIndex = Math.max(activeCard - 1, 0);
//           scrollToCard(newIndex);
//           setActiveCard(newIndex);
//         }}
//         className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
//       >
//         ◀
//       </button>
//     )}

//     {/* RIGHT ARROW */}
//     {activeCard < investmentOptions.length - 1 && (
//       <button
//         onClick={() => {
//           const newIndex = Math.min(activeCard + 1, investmentOptions.length - 1);
//           scrollToCard(newIndex);
//           setActiveCard(newIndex);
//         }}
//         className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
//       >
//         ▶
//       </button>
//     )}

//     {/* ORIGINAL CODE (unchanged) */}
//     <div className="relative w-full">

//       {/* SCROLLER */}
//       <div
//         ref={scrollerRef}
//         className="flex flex-row overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
//         style={{
//           WebkitOverflowScrolling: "touch",
//         }}
//       >
//         {investmentOptions.map((option, index) => {
//           const isActive = activeCard === index;

//           return (
//             <motion.div
//               key={index}
//               layout
//               animate={{
//                 width: isActive
//                   ? mobileNormal.width + 24
//                   : mobileNormal.width,
//                 height: isActive
//                   ? mobileNormal.height + 60
//                   : mobileNormal.height,
//                 opacity: isActive ? 1 : 0.88,
//               }}
//               transition={{ type: "spring", stiffness: 70, damping: 20 }}
//               className="relative shrink-0 rounded-2xl border border-black flex flex-col justify-between shadow-md snap-center bg-white overflow-hidden"
//               style={{
//                 backgroundImage: `linear-gradient(180deg, ${
//                   isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
//                 }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div
//                 className={`flex flex-col h-full justify-between ${
//                   isActive ? "px-4 py-6" : "px-3 py-5"
//                 } w-full`}
//               >
//                 <div className="relative h-[120px] flex items-center justify-center w-full overflow-visible">
//                   <AnimatePresence mode="sync">
//                     {isActive ? (
//                       <motion.h3
//                         key="mcontent"
//                         variants={textVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         className="font-bold text-white text-base text-center leading-normal z-10 absolute"
//                       >
//                         {option.content}
//                       </motion.h3>
//                     ) : (
//                       <motion.img
//                         key="micon"
//                         variants={yellowVariants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         src={option.icon}
//                         className="w-6 h-6 mx-auto absolute"
//                       />
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* BOTTOM TITLE */}
//                 <AnimatePresence mode="sync">
//                   {isActive ? (
//                     <motion.div
//                       key="mpurple"
//                       variants={purpleVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20"
//                     >
//                       <div className="text-white font-bold text-lg p-4 w-full bg-purple-600 rounded-2xl border-4 border-black/30 text-center">
//                         {option.title}
//                       </div>
//                     </motion.div>
//                   ) : (
//                     <motion.div
//                       key="myellow"
//                       variants={yellowVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl bg-gradient-to-b from-yellow-400/70 to-white"
//                     >
//                       <div className="text-gray-800 font-bold text-lg text-center">
//                         {option.title}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// )}

//     </section>
//   );
// };


"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* 
   DATA
*/
const investmentOptions = [
  {
    title: "Digital Gold & Silver",
    backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
    icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
    content: "The simplest way to buy digital gold online or buy digital silver online.",
  },
  {
    title: "Gold & Silver ETFs",
    backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
    icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
    content: "Invest in Gold & Silver ETFs for long-term growth.",
  },
  {
    title: "Sovereign Gold Bonds (SGBs)",
    backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
    icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
    content: "Earn interest with Sovereign Gold Bonds issued by the government.",
  },
  {
    title: "Digital Silver Trading",
    backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
    icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
    content: "Trade digital silver easily with minimal fees.",
  },
  {
    title: "Physical Gold & Silver",
    backgroundImage: "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
    icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
    content: "Buy physical gold & silver and store safely.",
  },
];


/* 
   ANIMATION VARIANTS
*/
const spring = { type: "spring", stiffness: 80, damping: 20 };

const yellowVariants = {
  initial: { opacity: 0, x: -40, y: -40 },
  animate: { opacity: 1, x: 0, y: 0, transition: spring },
  exit: { opacity: 0, x: -40, y: -40, transition: spring },
};

const purpleVariants = {
  initial: { opacity: 0, x: 40, y: 40 },
  animate: { opacity: 1, x: 0, y: 0, transition: spring },
  exit: { opacity: 0, x: 40, y: 40, transition: spring },
};

const textVariants = {
  initial: { opacity: 0, x: 40, y: 40 },
  animate: { opacity: 1, x: 0, y: 0, transition: spring },
  exit: { opacity: 0, x: 40, y: 40, transition: spring },
};


/* -----------------------------------------------
   COMPONENT START
----------------------------------------------- */
export const WhyChooseFinsbee = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollerRef = useRef(null);
  const desktopSmall = { width: 200, height: 340 };
  const desktopExpanded = { width: 320, height: 570 };
  const mobileNormal = { width: 260, height: 360 };


  /* ---------- FIXED: scrollToCard BELOW scrollerRef ---------- */
  const scrollToCard = (index) => {
    if (!scrollerRef.current) return;
    const cardWidth = mobileNormal.width + 24;
    scrollerRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
  };


  /* Responsive logic */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);


  // const mobileNormal = { width: 260, height: 360 };
  return (
    <section className="flex flex-col items-start gap-10 px-4 md:px-16 lg:px-[136px] py-12 md:py-24 w-full">

  <header className="left-0 max-w-xl mb-2 text-left">
    <h2 className="text-sm font-bold text-gray-800 mb-2">
          The Results Speaks for Themselves
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold bg-yellow-400 p-2 text-gray-800">
          Why Choose
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 ">
          <span className="text-gray-800">Finsbee?</span>
        </h1>


      </header>

      {!isMobile ? (
        <motion.div
          layout
          className="flex flex-row items-end justify-center gap-3 w-full max-w-[1280px] md:h-[573px] h-auto"
          onMouseLeave={() => setActiveCard(0)}
        >
          {investmentOptions.map((option, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                layout
                onMouseEnter={() => setActiveCard(index)}
                animate={{
                  width: isActive ? desktopExpanded.width : desktopSmall.width,
                  height: isActive
                    ? desktopExpanded.height
                    : desktopSmall.height,
                }}
                transition={{ type: "spring", stiffness: 70, damping: 20 }}
                className="relative rounded-2xl border border-black cursor-pointer flex flex-col justify-between p-0 z-0 overflow-hidden bg-white shadow-md"
                style={{
                  backgroundImage: `linear-gradient(180deg, ${
                    isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
                  }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className={`flex flex-col h-full justify-between ${
                    isActive ? "px-3 py-5" : "px-3 py-5"
                  } w-full`}
                >
                  {/* TOP CONTENT */}
                  {/* FIXED HEIGHT WRAPPER */}
                  <div className="relative h-[180px] flex items-center justify-center w-full">
                    <AnimatePresence mode="sync">
                      {isActive ? (
                        <motion.h3
                          key="content"
                          variants={textVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className=" font-bold text-white text-lg md:text-2xl text-center leading-normal z-10"
                        >
                          {option.content}
                        </motion.h3>
                      ) : (
                        <motion.img
                          key="icon"
                          variants={yellowVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          src={option.icon}
                          alt="icon"
                          className="w-6 h-6 mx-auto"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* BOTTOM TITLE CARD */}
                  <AnimatePresence mode="sync">
                    {isActive ? (
                      <motion.div
                        key="purpleCard"
                        variants={purpleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20 justify-center relative"
                      >
                        <div className="text-white font-bold text-md md:text-xl p-5 w-full bg-purple-600 rounded-2xl border-4 border-black/30 z-10 text-center">
                          {option.title}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="yellowCard"
                        variants={yellowVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl border-2 border-transparent bg-gradient-to-b from-yellow-400/70 to-white"
                      >
                        <div className="text-gray-800 font-bold text-md md:text-xl text-center">
                          {option.title}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ) : null}

      {/* MOBILE VIEW WITH ARROWS   */}

      {isMobile && (
        <div
    className="relative w-full"
    style={{ height: mobileNormal.height + 80 }}
  >

          {/* LEFT ARROW */}
          {activeCard > 0 && (
            <button
              onClick={() => {
                const newIndex = Math.max(activeCard - 1, 0);
                scrollToCard(newIndex);
                setActiveCard(newIndex);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
            >
              ◀
            </button>
          )}

          {/* RIGHT ARROW */}
          {activeCard < investmentOptions.length - 1 && (
            <button
              onClick={() => {
                const newIndex = Math.min(
                  activeCard + 1,
                  investmentOptions.length - 1
                );
                scrollToCard(newIndex);
                setActiveCard(newIndex);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
            >
              ▶
            </button>
          )}

       {/* ORIGINAL SCROLLER (unchanged) */}
          <div className="relative w-full">
            <div
              ref={scrollerRef}
              className="flex flex-row overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              {investmentOptions.map((option, index) => {
                const isActive = activeCard === index;

                return (
                  <motion.div
                    key={index}
                    layout
                    animate={{
                      width: isActive
                        ? mobileNormal.width + 24
                        : mobileNormal.width,
                      height: isActive
                        ? mobileNormal.height + 60
                        : mobileNormal.height,
                      opacity: isActive ? 1 : 0.88,
                    }}
                    transition={{ type: "spring", stiffness: 70, damping: 20 }}
                    className="relative shrink-0 rounded-2xl border border-black flex flex-col justify-between shadow-md snap-center bg-white overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(180deg, ${
                        isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
                      }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      className={`flex flex-col h-full justify-between ${
                        isActive ? "px-4 py-6" : "px-3 py-5"
                      } w-full`}
                    >

                      {/* FIXED HEIGHT WRAPPER FOR ANIMATION */}
                      <div className="relative h-[120px] flex items-center justify-center w-full overflow-visible">
                        <AnimatePresence mode="sync">
                          {isActive ? (
                            <motion.h3
                              key="mcontent"
                              variants={textVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              className="font-bold text-white text-base text-center leading-normal z-10 absolute"
                            >
                              {option.content}
                            </motion.h3>
                          ) : (
                            <motion.img
                              key="micon"
                              variants={yellowVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              src={option.icon}
                              className="w-6 h-6 mx-auto absolute"
                            />
                          )}
                        </AnimatePresence>
                      </div>

                      {/* TITLE SECTION */}
                      <AnimatePresence mode="sync">
                        {isActive ? (
                          <motion.div
                            key="mpurple"
                            variants={purpleVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20"
                          >
                            <div className="text-white font-bold text-lg p-4 w-full bg-purple-600 rounded-2xl border-4 border-black/30 text-center">
                              {option.title}
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="myellow"
                            variants={yellowVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl bg-gradient-to-b from-yellow-400/70 to-white"
                          >
                            <div className="text-gray-800 font-bold text-lg text-center">
                              {option.title}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
