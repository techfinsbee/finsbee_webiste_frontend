"use client";
// import React from "react";

// export const WhyChooseFinsbee = () => {
//   const investmentOptions = [
//     {
//       title: "Gold & Silver ETFs",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-1.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       size: "small",
//     },
//     {
//       title: "Sovereign Gold Bonds (SGBs)",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-2.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       size: "small",
//     },
//     {
//       title: "Digital Silver Trading",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-3.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       size: "small",
//     },
//     {
//       title: "Physical Gold & Silver",
//       backgroundImage:
//         "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view-4.png",
//       icon: "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg",
//       size: "small",
//     },
//   ];

//   return (
//     <section
//       className="flex flex-col items-center gap-12 px-4 md:px-32 py-24 relative"
//       data-model-id="13476:18565"
//     >
//       <header className="flex flex-col items-center gap-2.5 px-4 py-0 relative w-full max-w-md -translate-y-4 animate-fade-in opacity-0">
//         <div className="relative w-full -mt-px font-bold text-gray-800 text-base text-center tracking-wide leading-5">
//           The Results Speaks for Themselves
//         </div>

//         <div className="flex flex-wrap w-full items-start gap-0 justify-center relative">
//           <div className="w-full -mt-px text-center relative font-bold text-gray-800 text-6xl tracking-normal leading-normal">
//             Why Choose
//           </div>

//           <div className="inline-flex flex-col items-center justify-center relative">
//             <div className="relative w-full h-px bg-yellow-400 opacity-0" />

//             <div className="w-fit -mt-4 relative font-bold text-gray-800 text-6xl tracking-normal leading-normal">
//               Finsbee?
//             </div>
//           </div>
//         </div>

//         <p className="relative w-full font-normal text-gray-800 text-sm text-center tracking-wide leading-5">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam.
//         </p>
//       </header>

    //   <div className="flex flex-col lg:flex-row items-end justify-center gap-3 relative w-full max-w-7xl -translate-y-4 animate-fade-in opacity-0 delay-200">
        {/* <div className="flex flex-col w-full lg:w-80 h-[573px] items-start justify-between p-0 relative rounded-2xl border border-solid border-black bg-gradient-to-b from-black to-transparent overflow-hidden"
             style={{
               backgroundImage: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url(https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png)",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat"
             }}>
          <div className="flex flex-col h-full justify-between px-6 py-8 w-full">
            <div className="flex items-center justify-center gap-2.5 p-1 relative w-full">
              <h3 className="relative flex-1 -mt-px font-bold text-white text-3xl tracking-px leading-normal">
                The simplest way to buy digital gold online or buy digital
                silver online.
              </h3>
            </div>

            <div className="flex flex-col items-center gap-2.5 p-2 w-full -mb-px -ml-px -mr-px rounded-3xl border border-solid border-white/20 justify-center relative">
              <div className="flex flex-col items-center justify-center gap-6 p-6 relative w-full -mt-2 -mb-1.5 -ml-2 -mr-1.5 bg-purple-600 rounded-2xl border-8 border-solid border-black/30">
                <div className="relative w-full font-bold text-white text-xl tracking-normal leading-normal text-center">
                  Digital Gold &amp; Silver
                </div>
              </div>
            </div>
          </div>
        </div> */}

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full lg:w-auto">
//           {investmentOptions.map((option, index) => (
            // <div
            //   key={index}
            //   className="bg-gradient-to-b from-yellow-400/10 to-black flex flex-col w-full lg:w-56 h-96 items-center justify-between p-0 relative rounded-2xl overflow-hidden -translate-y-4 animate-fade-in opacity-0"
            //   style={{
            //     backgroundImage: `linear-gradient(180deg, rgba(255,199,60,0.1) 0%, rgba(0,0,0,1) 100%), url(${option.backgroundImage})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     backgroundRepeat: "no-repeat",
            //     animationDelay: `${400 + index * 100}ms`
            //   }}
            // >
            //   <div className="flex flex-col h-full justify-between px-4 py-8 w-full">
            //     <div className="inline-flex items-center gap-2.5 p-1 justify-center relative">
            //       <img
            //         className="relative w-6 h-6"
            //         alt="Vuesax broken blend"
            //         src={option.icon}
            //       />
            //     </div>

            //     <div className="flex flex-col items-center justify-center gap-6 px-3 py-4 relative w-full -mb-1 -ml-1 -mr-1 rounded-xl border-4 border-solid border-transparent bg-gradient-to-b from-yellow-400 to-white">
            //       <div className="relative w-full font-bold text-gray-800 text-xl tracking-normal leading-normal text-center">
            //         {option.title}
            //       </div>
            //     </div>
            //   </div>
            // </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WhyChooseFinsbee = () => {
  const [hoveredCard, setHoveredCard] = useState(0);

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

  const smallWidth = 224;
  const smallHeight = 384;
  const expandedWidth = 336;
  const expandedHeight = 573;


// Text (inside content, slight diagonal slide)
const textVariants = {
  initial: { opacity: 0, x: 30, y: 30 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0., ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: 30,
    y: 30,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// Purple (always from bottom → up)
const purpleVariants = {
  initial: { opacity: 0, y: 60, x: 60 },
  animate: {
    opacity: 1,
    y: 0,
    x:0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 60,
    x: 60,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// Yellow (always from top → down)
const yellowVariants = {
  initial: { opacity: 0, y: -60 , x: -60},
  animate: {
    opacity: 1,
    y: 0,
    x:0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -60,
    x:-60,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};


  return (
    <section className="flex flex-col items-center gap-12 px-4 md:px-32 py-24 relative">
      {/* Header */}
      <header className="text-center max-w-xl mx-auto">
        <h2 className="text-sm font-bold text-gray-800 mb-2">
          The Results Speaks for Themselves
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Why Choose <br />
          <span className="text-yellow-500">Finsbee?</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>

      {/* Cards */}
      <motion.div
        layout
        className="flex flex-row items-end w-[1280px] h-[573px] justify-center gap-3 max-w-7xl"
        onMouseLeave={() => setHoveredCard(0)}
      >
        {investmentOptions.map((option, index) => {
          const isActive = hoveredCard === index;
          const width = isActive ? expandedWidth : smallWidth;
          const height = isActive ? expandedHeight : smallHeight;

          return (
            <motion.div
              key={index}
              layout
              onMouseEnter={() => setHoveredCard(index)}
              animate={{ width, height }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              className="relative rounded-2xl border border-black cursor-pointer flex flex-col justify-between p-0 z-0 overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(180deg, ${
                  isActive
                    ? "rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%"
                    : "rgba(255,199,60,0.1) 0%, rgba(0,0,0,1) 100%"
                }), url(${option.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`flex flex-col h-full justify-between ${
                  isActive ? "px-6 py-8" : "px-4 py-8"
                } w-full`}
              >
                {/* Top section (Text vs Icon) */}
                <AnimatePresence >
                  {isActive ? (
                    <motion.h3
                      key="content"
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex-1 font-bold text-white text-3xl text-center leading-normal z-10"
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

                {/* Bottom section (Purple vs Yellow card) */}
                <AnimatePresence >
                  {isActive ? (
                    <motion.div
                      key="purple"
                      variants={purpleVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20 justify-center relative"
                    >
                      <div className="flex flex-col items-center justify-center gap-6 p-6 w-full bg-purple-600 rounded-2xl border-8 border-black/30 z-10">
                        <div className="text-white font-bold text-xl text-center">
                          {option.title}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="yellow"
                      variants={yellowVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col items-center justify-center gap-6 px-3 py-4 w-full rounded-xl border-4 border-transparent bg-gradient-to-b from-yellow-400 to-white"
                    >
                      <div className="text-gray-800 font-bold text-xl text-center">
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