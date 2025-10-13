
// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export const WhyChooseFinsbee = () => {
//   const [hoveredCard, setHoveredCard] = useState(0);

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

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WhyChooseFinsbee = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const investmentOptions = [
    {
      title: "Digital Gold & Silver",
      backgroundImage:
        "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png",
      icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
      content:
        "The simplest way to buy digital gold online or buy digital silver online.",
    },
    {
      title: "Gold & Silver ETFs",
      backgroundImage:
        "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
      icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
      content: "Invest in Gold & Silver ETFs for long-term growth.",
    },
    {
      title: "Sovereign Gold Bonds (SGBs)",
      backgroundImage:
        "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
      icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
      content: "Earn interest with Sovereign Gold Bonds issued by the government.",
    },
    {
      title: "Digital Silver Trading",
      backgroundImage:
        "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
      icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
      content: "Trade digital silver easily with minimal fees.",
    },
    {
      title: "Physical Gold & Silver",
      backgroundImage:
        "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
      icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
      content: "Buy physical gold & silver and store safely.",
    },
  ];

  const textVariants = {
    initial: { opacity: 0, x: 30, y: 30 },
    animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: 30, y: 30, transition: { duration: 0.4 } },
  };

  const purpleVariants = {
    initial: { opacity: 0, y: 60, x: 60 },
    animate: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 60, x: 60, transition: { duration: 0.4 } },
  };

  const yellowVariants = {
    initial: { opacity: 0, y: -60, x: -60 },
    animate: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -60, x: -60, transition: { duration: 0.4 } },
  };

  return (
    <section className="flex flex-col items-center gap-10 px-4 sm:px-8 md:px-12 lg:px-[136px] py-16 lg:py-24 relative overflow-hidden">
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto px-2">
        <h2 className="text-xs sm:text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide">
          The Results Speak for Themselves
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug">
          Why Choose <br />
          <span className="text-yellow-500">Finsbee?</span>
        </h1>
      </header>

      {/* Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:justify-center gap-4 sm:gap-6 w-full max-w-7xl"
        onMouseLeave={() => setHoveredCard(null)}
      >
        {investmentOptions.map((option, index) => {
          const isActive = hoveredCard === index;

          return (
            <motion.div
              key={index}
              layout
              onMouseEnter={() => setHoveredCard(index)}
              animate={{
                width: isActive ? 320 : 220,
                height: isActive ? 520 : 380,
              }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="relative rounded-2xl border border-gray-700 cursor-pointer overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(180deg, ${
                  isActive
                    ? "rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%"
                    : "rgba(255,199,60,0.1) 0%, rgba(0,0,0,0.7) 100%"
                }), url(${option.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`flex flex-col h-full justify-between ${
                  isActive ? "px-5 py-8" : "px-4 py-6"
                }`}
              >
                <AnimatePresence>
                  {isActive ? (
                    <motion.h3
                      key="content"
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="font-semibold text-white text-lg sm:text-xl text-center leading-snug"
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
                      className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                    />
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isActive ? (
                    <motion.div
                      key="purple"
                      variants={purpleVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col items-center justify-center gap-2 p-4 bg-purple-600 rounded-xl border-4 border-black/30"
                    >
                      <div className="text-white font-bold text-lg sm:text-xl text-center">
                        {option.title}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="yellow"
                      variants={yellowVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col items-center justify-center gap-3 px-3 py-4 rounded-xl border-4 border-transparent bg-gradient-to-b from-yellow-400 to-white"
                    >
                      <div className="text-gray-800 font-bold text-base sm:text-lg text-center">
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
    </section>
  );
};
