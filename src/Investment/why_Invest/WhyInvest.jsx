"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const WhyInvest = () => {
  // if (!features || !slides || !headers) return null;

  const baseFeatures = [
    {
      text: "Guaranteed Purity – 24K Gold",
      className:
        "w-[395px] bg-[#fff9ec] border-[#ffe5a5] shadow-[-8px_8px_0px_rgba(255,199,60,0.2)]",
      containerClassName:
        "flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
    },
    {
      text: "Easy Liquidity",
      className:
        "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
      containerClassName:
        "flex flex-col items-start gap-2.5 pl-8 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]",
    },
    {
      text: "Secure Storage & Insurance",
      className:
        "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
      containerClassName:
        "flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
    },
    {
      text: "Flexibility to Invest Anytime",
      className:
        "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
      containerClassName:
        "flex flex-col items-start gap-2.5 pl-8 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]",
    },
    {
      text: "Expert Guidance",
      className:
        "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
      containerClassName:
        "flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
    },
  ];

  const slides = [
    {
      descCard:
        "The gold offered is 24 karat and sourced exclusively from trusted suppliers, ensuring your investment retains its value over time. With transparency and authenticity at the core, you can build your wealth on a strong foundation.",
      smallCard: "Every purchase comes with the assurance of 100% purity.",
      leftBg: "https://c.animaapp.com/mfrgrv40Ft7uAY/img/safe-gold-1.png",
      rightBg: "/Investment/img1.svg",
    },
    {
      descCard:
        "Easy liquidity options so you can convert holdings whenever required — instant sell & withdraw options backed by our marketplace.",
      smallCard: "Quick buy/sell with transparent pricing.",
      leftBg: "https://c.animaapp.com/mfrgrv40Ft7uAY/img/safe-gold-1.png",
      rightBg: "/Investment/img2.svg",
    },
    {
      descCard:
        "Secure storage and insured vaults ensure your assets remain protected. All holdings are covered and audited regularly.",
      smallCard: "Full insurance & audited vaults.",
      leftBg: "https://c.animaapp.com/mfrgrv40Ft7uAY/img/safe-gold-1.png",
      rightBg: "/Investment/image3.svg",
    },
    {
      descCard:
        "Invest anytime with flexible plans and minimal entry amounts — add to your portfolio as you like.",
      smallCard: "Start small, scale as you grow.",
      leftBg: "https://c.animaapp.com/mfrgrv40Ft7uAY/img/safe-gold-1.png",
      rightBg: "/Investment/img-4.svg",
    },
    {
      descCard:
        "Expert guidance from our consultants helps you time purchases and allocations to optimize returns.",
      smallCard: "Advisors help you choose the right strategy.",
      leftBg: "https://c.animaapp.com/mfrgrv40Ft7uAY/img/safe-gold-1.png",
      rightBg: "/Investment/imag-5.svg",
    },
  ];

  const cardConfig = {
    0: {
      yellow: { top: 67, right: -20, rotate: 0 },
      purple: { top: 170, left: -36, rotate: 0 },
    },
    1: {
      yellow: { top: 161, right: -44, rotate: 90 },
      purple: { top: -26.5, left: -32, rotate: 90 },
    },
    2: {
      yellow: { top: 161, right: 300, rotate: 180 },
      purple: { top: -26.5, left: 427, rotate: 180 },
    },
    3: {
      yellow: { top: -26.5, right: 300, rotate: 270 },
      purple: { top: 300, left: 427, rotate: 270 },
    },
    4: {
      yellow: { top: -26.5, right: 44, rotate: 360 },
      purple: { top: 300, left: 44, rotate: 360 },
    },
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex];
  const transition = { duration: 0.3, ease: "easeInOut" };
  const { yellow, purple } = cardConfig[activeIndex];

  return (
    <section className="flex flex-col items-center px-[136px] py-24 relative bg-white min-h-screen">
      {/* Header */}
      <header className="flex flex-col items-start gap-2.5 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] z-[1]">
        <h2 className="relative w-[456px] mt-[-1px] font-bold text-[#212121] text-[16px] tracking-[0.5px] leading-[20px]">
          The Results Speaks for Themselves
        </h2>
        <h1 className="relative w-[458px] mt-[-1px] font-bold text-[#212121] text-[64px] leading-normal">
          Why Invest in
        </h1>
        <span className="relative w-fit mt-[-1px] font-bold text-[#212121] text-[64px] leading-normal">
          <span className="font-bold bg-yellow-400 text-[#212121] text-[64px] leading-normal">
            Gold &amp; Silver
          </span>

          <span className="font-bold text-[#212121] text-[64px] leading-normal ml-3">
            with FinsBee?
          </span>
        </span>
      </header>

      {/* Left Features */}
      <main className="flex h-[509px] items-center justify-between px-0 py-4 relative self-stretch w-full z-0">
        <div className="flex flex-col w-[400px] items-start gap-[21px] relative">
          <div className="flex w-[648px] h-[648px] items-center justify-end gap-2.5 absolute top-[-110px] left-[-510px]">
            <img
              className="relative w-[524px] h-[548px] object-cover"
              alt="Safe gold"
              src={current.leftBg}
            />
          </div>
          {baseFeatures.map((feature, index) => {
            const isHighlighted = index === activeIndex;
            const className = isHighlighted
              ? "w-[395px] bg-[#fff9ec] border-[#ffe5a5] shadow-[-8px_8px_0px_rgba(255,199,60,0.2)]"
              : "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]";
            return (
              <div key={index} className={feature.containerClassName}>
                <div
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: "pointer" }}
                  className={`${className} flex items-center gap-2.5 pl-6 pr-8 py-2 relative flex-[0_0_auto] rounded-lg border border-solid`}
                >
                  <img
                    className={`relative ${
                      isHighlighted ? "w-[60px] h-[60px]" : "w-[54px] h-[54px]"
                    } object-cover`}
                    alt="Gold bars"
                    src="https://c.animaapp.com/mfrgrv40Ft7uAY/img/pngtree-3d-rendering-of-gold-bars-png-image-6258301-1-4.png"
                  />
                  <span
                    className={`relative w-fit ${
                      isHighlighted
                        ? "font-bold text-[20px] leading-normal"
                        : "font-bold text-[16px] tracking-[0.5px] leading-[20px]"
                    } text-[#4d4d4d] text-center whitespace-nowrap`}
                  >
                    {feature.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Cards */}
        <div className="flex flex-col w-[680px] items-start relative">
          {/* <div className="flex w-[624px] h-[420px] absolute top-[-197px] left-[37px] rounded-[0px_48px_0px_48px]" style={{ perspective: 1200 }}>
                        <img className="relative flex-1 self-stretch grow object-cover" alt="Safe gold" src={current.rightBg} */}
          <div
            className="flex w-[624px] h-[420px] absolute top-[-197px] left-[37px] gap-[10px] rotate-0 opacity-100 rounded-tr-[48px] rounded-bl-[48px] "
            style={{ perspective: 1200 }}
          >
            <img
              className="relative flex-1 self-stretch grow object-cover rounded-tr-[48px] rounded-bl-[48px]"
              alt="Safe gold"
              src={current.rightBg}
            />
            {/* Yellow Card */}
            <motion.div
              style={{
                position: "absolute",
                width: 297,
                height: 267,
                willChange: "left, top, transform",
              }}
              animate={{
                top: yellow.top,
                right: yellow.right,
                rotate: yellow.rotate,
              }}
              transition={transition}
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "url(https://c.animaapp.com/mfrgrv40Ft7uAY/img/rectangle-35.svg)",
                  backgroundSize: "100% 100%",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                animate={{ rotate: 0 }}
                transition={transition}
              >
                <motion.div
                  className="flex items-center justify-end p-[24px]"
                  style={{ width: "100%", height: "100%" }}
                  animate={{ rotate: 0 }} // card stays upright
                  transition={transition}
                >
                  <motion.p
                    className="text-[#212121] text-center p-[24px] text-[16px] leading-normal"
                    style={{ rotate: -yellow.rotate }}
                  >
                    {current.descCard}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Purple Card */}
            <motion.div
              style={{
                position: "absolute",
                width: 162,
                height: 162,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                willChange: "left, top",
              }}
              animate={{ left: purple.left, top: purple.top }}
              transition={transition}
            >
              <div className="flex w-[162px] h-[162px] items-center justify-center bg-[#592eff] rounded-[32px] p-6">
                <p className="text-white text-center text-[16px] leading-normal">
                  {current.smallCard}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </section>
  );
};



// "use client";
// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";

// const CMS_BASE_URL = "https://admin.finsbee.com";

// export const WhyInvest = ({ features, slides, headers }) => {
//   if (!features || !slides || !headers) return null;

//   /* ---------------- UI CONFIG (DO NOT TOUCH) ---------------- */
//   const baseFeaturesUI = [
//     {
//       className:
//         "w-[395px] bg-[#fff9ec] border-[#ffe5a5] shadow-[-8px_8px_0px_rgba(255,199,60,0.2)]",
//       containerClassName:
//         "flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
//     },
//     {
//       className:
//         "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
//       containerClassName:
//         "flex flex-col items-start gap-2.5 pl-8 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]",
//     },
//     {
//       className:
//         "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
//       containerClassName:
//         "flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
//     },
//     {
//       className:
//         "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
//       containerClassName:
//         "flex flex-col items-start gap-2.5 pl-8 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]",
//     },
//     {
//       className:
//         "w-[340px] bg-[#fafafa] border-[#e9e9e9] shadow-[0px_4px_8px_rgba(0,0,0,0.12)]",
//       containerClassName:
//         "flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",
//     },
//   ];

//   /* ---------------- DATA MAPPING (SAFE & FUTURE-PROOF) ---------------- */
//   const mappedFeatures = useMemo(
//     () =>
//       features.map((item, index) => ({
//         text: item.text,
//         ...baseFeaturesUI[index],
//       })),
//     [features]
//   );

//   const mappedSlides = useMemo(
//     () =>
//       slides.map((slide) => ({
//         ...slide,
//         leftBg: slide.leftBg?.[0]
//           ? `${CMS_BASE_URL}${slide.leftBg[0]}`
//           : "https://c.animaapp.com/mfrgrv40Ft7uAY/img/safe-gold-1.png",
//         rightBg: slide.rightBg
//           ? `${CMS_BASE_URL}${slide.rightBg}`
//           : "/Investment/img1.svg",
//       })),
//     [slides]
//   );

//   /* ---------------- ANIMATION CONFIG (UNCHANGED) ---------------- */
//   const cardConfig = {
//     0: {
//       yellow: { top: 67, right: -20, rotate: 0 },
//       purple: { top: 170, left: -36, rotate: 0 },
//     },
//     1: {
//       yellow: { top: 161, right: -44, rotate: 90 },
//       purple: { top: -26.5, left: -32, rotate: 90 },
//     },
//     2: {
//       yellow: { top: 161, right: 300, rotate: 180 },
//       purple: { top: -26.5, left: 427, rotate: 180 },
//     },
//     3: {
//       yellow: { top: -26.5, right: 300, rotate: 270 },
//       purple: { top: 300, left: 427, rotate: 270 },
//     },
//     4: {
//       yellow: { top: -26.5, right: 44, rotate: 360 },
//       purple: { top: 300, left: 44, rotate: 360 },
//     },
//   };

//   const [activeIndex, setActiveIndex] = useState(0);
//   const current = mappedSlides[activeIndex];
//   const { yellow, purple } = cardConfig[activeIndex];
//   const transition = { duration: 0.3, ease: "easeInOut" };

//   /* ---------------- RENDER ---------------- */
//   return (
//     <section className="flex flex-col items-center px-[136px] py-24 relative bg-white min-h-screen">
//       {/* HEADER (Dynamic text, same UI) */}
//       <header className="flex flex-col items-start gap-2.5 px-4 w-full z-[1]">
//         <h2 className="font-bold text-[16px] tracking-[0.5px]">
//           {headers.title1}
//         </h2>
//         <h1 className="font-bold text-[64px]">{headers.title2}</h1>
//         <span className="font-bold text-[64px]">
//           <span className="bg-yellow-400">{headers.yellowText}</span>
//           <span className="ml-3">{headers.title4}</span>
//         </span>
//       </header>

//       {/* CONTENT */}
//       <main className="flex h-[509px] justify-between w-full relative">
//         {/* LEFT FEATURES */}
//         <div className="flex flex-col w-[400px] gap-[21px] relative">
//           <img
//             src={current.leftBg}
//             className="absolute top-[-110px] left-[-510px] w-[524px] h-[548px] object-cover"
//             alt=""
//           />

//           {mappedFeatures.map((feature, index) => {
//             const isActive = index === activeIndex;
//             return (
//               <div key={index} className={feature.containerClassName}>
//                 <div
//                   onClick={() => setActiveIndex(index)}
//                   className={`${feature.className} flex items-center gap-2.5 pl-6 pr-8 py-2 rounded-lg border cursor-pointer`}
//                 >
//                   <img
//                     src="https://c.animaapp.com/mfrgrv40Ft7uAY/img/pngtree-3d-rendering-of-gold-bars-png-image-6258301-1-4.png"
//                     className={isActive ? "w-[60px]" : "w-[54px]"}
//                     alt=""
//                   />
//                   <span
//                     className={`font-bold ${
//                       isActive ? "text-[20px]" : "text-[16px]"
//                     }`}
//                   >
//                     {feature.text}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* RIGHT CARDS (UNCHANGED) */}
//         <div className="relative w-[680px]">
//           <img
//             src={current.rightBg}
//             className="absolute top-[-197px] left-[37px] w-[624px] h-[420px] object-cover rounded-tr-[48px] rounded-bl-[48px]"
//             alt=""
//           />

//           {/* Yellow Card */}
//           <motion.div
//             style={{ position: "absolute", width: 297, height: 267 }}
//             animate={yellow}
//             transition={transition}
//           >
//             <p className="p-6 text-center">{current.descCard}</p>
//           </motion.div>

//           {/* Purple Card */}
//           <motion.div
//             style={{ position: "absolute", width: 162, height: 162 }}
//             animate={purple}
//             transition={transition}
//           >
//             <div className="bg-[#592eff] rounded-[32px] p-6 text-white text-center">
//               {current.smallCard}
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </section>
//   );
// };
