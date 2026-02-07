


// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /* 
//    DATA
// */
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


// /* 
//    ANIMATION VARIANTS
// */
// const spring = { type: "spring", stiffness: 80, damping: 20 };

// const yellowVariants = {
//   initial: { opacity: 0, x: -40, y: -40 },
//   animate: { opacity: 1, x: 0, y: 0, transition: spring },
//   exit: { opacity: 0, x: -40, y: -40, transition: spring },
// };

// const purpleVariants = {
//   initial: { opacity: 0, x: 40, y: 40 },
//   animate: { opacity: 1, x: 0, y: 0, transition: spring },
//   exit: { opacity: 0, x: 40, y: 40, transition: spring },
// };

// const textVariants = {
//   initial: { opacity: 0, x: 40, y: 40 },
//   animate: { opacity: 1, x: 0, y: 0, transition: spring },
//   exit: { opacity: 0, x: 40, y: 40, transition: spring },
// };


// /* -----------------------------------------------
//    COMPONENT START
// ----------------------------------------------- */
// export const WhyChooseFinsbee = () => {
//   const [activeCard, setActiveCard] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const scrollerRef = useRef(null);
//   const desktopSmall = { width: 200, height: 340 };
//   const desktopExpanded = { width: 320, height: 570 };
//   const mobileNormal = { width: 260, height: 360 };


//   /* ---------- FIXED: scrollToCard BELOW scrollerRef ---------- */
//   const scrollToCard = (index) => {
//     if (!scrollerRef.current) return;
//     const cardWidth = mobileNormal.width + 24;
//     scrollerRef.current.scrollTo({
//       left: index * (cardWidth + 16),
//       behavior: "smooth",
//     });
//   };


//   /* Responsive logic */
//   useEffect(() => {
//     const resize = () => setIsMobile(window.innerWidth < 768);
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);


//   // const mobileNormal = { width: 260, height: 360 };
//   return (
//     <section className="flex flex-col items-start gap-10 px-4 md:px-16 lg:px-[136px] py-12 md:py-24 w-full">

//   <header className="left-0 max-w-xl mb-2 text-left">
//     <h2 className="text-sm font-bold text-gray-800 mb-2">
//           The Results Speaks for Themselves
//         </h2>
//         <h1 className="text-4xl md:text-6xl font-bold bg-yellow-400 p-2 text-gray-800">
//           Why Choose
//         </h1>
//         <h1 className="text-4xl md:text-6xl font-bold text-gray-800 ">
//           <span className="text-gray-800">Finsbee?</span>
//         </h1>


//       </header>

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
//                     isActive ? "px-3 py-5" : "px-3 py-5"
//                   } w-full`}
//                 >
//                   {/* TOP CONTENT */}
//                   {/* FIXED HEIGHT WRAPPER */}
//                   <div className="relative h-[180px] flex items-center justify-center w-full">
//                     <AnimatePresence mode="sync">
//                       {isActive ? (
//                         <motion.h3
//                           key="content"
//                           variants={textVariants}
//                           initial="initial"
//                           animate="animate"
//                           exit="exit"
//                           className=" font-bold text-white text-lg md:text-2xl text-center leading-normal z-10"
//                         >
//                           {option.content}
//                         </motion.h3>
//                       ) : (
//                         <motion.img
//                           key="icon"
//                           variants={yellowVariants}
//                           initial="initial"
//                           animate="animate"
//                           exit="exit"
//                           src={option.icon}
//                           alt="icon"
//                           className="w-6 h-6 mx-auto"
//                         />
//                       )}
//                     </AnimatePresence>
//                   </div>

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

//       {/* MOBILE VIEW WITH ARROWS   */}

//       {isMobile && (
//         <div
//     className="relative w-full"
//     style={{ height: mobileNormal.height + 80 }}
//   >

//           {/* LEFT ARROW */}
//           {activeCard > 0 && (
//             <button
//               onClick={() => {
//                 const newIndex = Math.max(activeCard - 1, 0);
//                 scrollToCard(newIndex);
//                 setActiveCard(newIndex);
//               }}
//               className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
//             >
//               ◀
//             </button>
//           )}

//           {/* RIGHT ARROW */}
//           {activeCard < investmentOptions.length - 1 && (
//             <button
//               onClick={() => {
//                 const newIndex = Math.min(
//                   activeCard + 1,
//                   investmentOptions.length - 1
//                 );
//                 scrollToCard(newIndex);
//                 setActiveCard(newIndex);
//               }}
//               className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
//             >
//               ▶
//             </button>
//           )}

//        {/* ORIGINAL SCROLLER (unchanged) */}
//           <div className="relative w-full">
//             <div
//               ref={scrollerRef}
//               className="flex flex-row overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
//               style={{
//                 WebkitOverflowScrolling: "touch",
//               }}
//             >
//               {investmentOptions.map((option, index) => {
//                 const isActive = activeCard === index;

//                 return (
//                   <motion.div
//                     key={index}
//                     layout
//                     animate={{
//                       width: isActive
//                         ? mobileNormal.width + 24
//                         : mobileNormal.width,
//                       height: isActive
//                         ? mobileNormal.height + 60
//                         : mobileNormal.height,
//                       opacity: isActive ? 1 : 0.88,
//                     }}
//                     transition={{ type: "spring", stiffness: 70, damping: 20 }}
//                     className="relative shrink-0 rounded-2xl border border-black flex flex-col justify-between shadow-md snap-center bg-white overflow-hidden"
//                     style={{
//                       backgroundImage: `linear-gradient(180deg, ${
//                         isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
//                       }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   >
//                     <div
//                       className={`flex flex-col h-full justify-between ${
//                         isActive ? "px-4 py-6" : "px-3 py-5"
//                       } w-full`}
//                     >

//                       {/* FIXED HEIGHT WRAPPER FOR ANIMATION */}
//                       <div className="relative h-[120px] flex items-center justify-center w-full overflow-visible">
//                         <AnimatePresence mode="sync">
//                           {isActive ? (
//                             <motion.h3
//                               key="mcontent"
//                               variants={textVariants}
//                               initial="initial"
//                               animate="animate"
//                               exit="exit"
//                               className="font-bold text-white text-base text-center leading-normal z-10 absolute"
//                             >
//                               {option.content}
//                             </motion.h3>
//                           ) : (
//                             <motion.img
//                               key="micon"
//                               variants={yellowVariants}
//                               initial="initial"
//                               animate="animate"
//                               exit="exit"
//                               src={option.icon}
//                               className="w-6 h-6 mx-auto absolute"
//                             />
//                           )}
//                         </AnimatePresence>
//                       </div>

//                       {/* TITLE SECTION */}
//                       <AnimatePresence mode="sync">
//                         {isActive ? (
//                           <motion.div
//                             key="mpurple"
//                             variants={purpleVariants}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                             className="flex flex-col items-center gap-2.5 p-2 w-full rounded-3xl border border-white/20"
//                           >
//                             <div className="text-white font-bold text-lg p-4 w-full bg-purple-600 rounded-2xl border-4 border-black/30 text-center">
//                               {option.title}
//                             </div>
//                           </motion.div>
//                         ) : (
//                           <motion.div
//                             key="myellow"
//                             variants={yellowVariants}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                             className="flex flex-col items-center justify-center gap-2 px-2 py-3 w-full rounded-xl bg-gradient-to-b from-yellow-400/70 to-white"
//                           >
//                             <div className="text-gray-800 font-bold text-lg text-center">
//                               {option.title}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>

//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };




"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* -----------------------------------------------
   CONFIG (Scalable & Centralized)
----------------------------------------------- */
const FALLBACK_BG =
  "https://c.animaapp.com/mfrihz2kwCX4vx/img/highlight-card-view.png";
const FALLBACK_ICON =
  "https://c.animaapp.com/mfrihz2kwCX4vx/img/vuesax-broken-blend.svg";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "";

/* -----------------------------------------------
   ANIMATION VARIANTS (UNCHANGED)
----------------------------------------------- */
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
   COMPONENT
----------------------------------------------- */
export const WhyChooseFinsbee = ({ cards = [], headers }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollerRef = useRef(null);

  const desktopSmall = { width: 200, height: 340 };
  const desktopExpanded = { width: 320, height: 570 };
  const mobileNormal = { width: 260, height: 360 };

  /* -----------------------------------------------
     DATA NORMALIZATION (KEY FOR SCALABILITY)
  ----------------------------------------------- */
  const investmentOptions = useMemo(() => {
    return cards
      .slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((card) => ({
        title: card.title || "",
        content: card.content || "",
        backgroundImage: card.backgroundImage
          ? `${STRAPI_URL}${card.backgroundImage}`
          : FALLBACK_BG,
        icon: card.icon
          ? `${STRAPI_URL}${card.icon}`
          : FALLBACK_ICON,
      }));
  }, [cards]);

  /* -----------------------------------------------
     MOBILE SCROLL HANDLER
  ----------------------------------------------- */
  const scrollToCard = (index) => {
    if (!scrollerRef.current) return;
    const cardWidth = mobileNormal.width + 24;
    scrollerRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  /* -----------------------------------------------
     RESPONSIVE CHECK
  ----------------------------------------------- */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* -----------------------------------------------
     RENDER
  ----------------------------------------------- */
  return (
    <section className="flex flex-col items-start gap-10 px-4 md:px-16 lg:px-[136px] py-12 md:py-24 w-full">

      {/* HEADER (Dynamic) */}
      <header className="left-0 max-w-xl mb-2 text-left">
        <h2 className="text-sm font-bold text-gray-800 mb-2">
          {headers?.title1}
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold bg-yellow-400 p-2 text-gray-800">
          {headers?.title2}
        </h1>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          {headers?.yellowText}
        </h1>
      </header>

      {/* DESKTOP VIEW */}
      {!isMobile && (
        <motion.div
          layout
          className="flex flex-row items-end justify-center gap-3 w-full max-w-[1280px] md:h-[573px]"
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
                  width: isActive
                    ? desktopExpanded.width
                    : desktopSmall.width,
                  height: isActive
                    ? desktopExpanded.height
                    : desktopSmall.height,
                }}
                transition={{ type: "spring", stiffness: 70, damping: 20 }}
                className="relative rounded-2xl border border-black cursor-pointer flex flex-col justify-between overflow-hidden bg-white shadow-md"
                style={{
                  backgroundImage: `linear-gradient(180deg, ${
                    isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
                  }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex flex-col h-full justify-between px-3 py-5 w-full">

                  {/* CONTENT */}
                  <div className="relative h-[180px] flex items-center justify-center w-full">
                    <AnimatePresence mode="sync">
                      {isActive ? (
                        <motion.h3
                          key="content"
                          variants={textVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="font-bold text-white text-lg md:text-2xl text-center"
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

                  {/* TITLE */}
                  <AnimatePresence mode="sync">
                    {isActive ? (
                      <motion.div
                        key="purple"
                        variants={purpleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="p-2 w-full rounded-3xl border border-white/20"
                      >
                        <div className="text-white font-bold text-xl p-5 bg-purple-600 rounded-2xl border-4 border-black/30 text-center">
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
                        className="px-2 py-3 w-full rounded-xl bg-gradient-to-b from-yellow-400/70 to-white"
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
      )}

      {/* MOBILE VIEW (UNCHANGED LOGIC) */}
      {isMobile && (
        <div className="relative w-full" style={{ height: mobileNormal.height + 80 }}>

          {activeCard > 0 && (
            <button
              onClick={() => {
                const i = Math.max(activeCard - 1, 0);
                scrollToCard(i);
                setActiveCard(i);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
            >
              ◀
            </button>
          )}

          {activeCard < investmentOptions.length - 1 && (
            <button
              onClick={() => {
                const i = Math.min(activeCard + 1, investmentOptions.length - 1);
                scrollToCard(i);
                setActiveCard(i);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full"
            >
              ▶
            </button>
          )}

          <div ref={scrollerRef} className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {investmentOptions.map((option, index) => {
              const isActive = activeCard === index;

              return (
                <motion.div
                  key={index}
                  animate={{
                    width: isActive ? mobileNormal.width + 24 : mobileNormal.width,
                    height: isActive ? mobileNormal.height + 60 : mobileNormal.height,
                  }}
                  className="shrink-0 rounded-2xl border border-black snap-center overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(180deg, ${
                      isActive ? "rgba(0,0,0,1)" : "rgba(255,199,60,0.12)"
                    }, rgba(0,0,0,0)), url(${option.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
