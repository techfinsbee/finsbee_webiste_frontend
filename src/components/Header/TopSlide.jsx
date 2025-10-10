// // "use client";

// // import React from "react";
// // import Header from "./Header";
// // import MainContent from "./MainComponent";
// // import MoneySection from "./MoneySection";
// // import BrandSection from "./BrandSection";
// // import ResultsComponent from "../ResultSection/Result";
// // import AppUse from "../HowToUse/AppUse";
// // import Image from "next/image";

// // const TopSlide = () => {
// //   return (
// //     <>
// //     <div className="flex flex-col items-start gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
// //       {/* <section
// //         className="
// //           flex flex-col h-[982px] items-start gap-10 relative w-full
// //           rounded-b-[120px] 
// //           bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9)),url('https://c.animaapp.com/mfgy37ey76CQRT/img/1-section.png')]
// //           bg-cover bg-center
// //         "
// //       > */}
// //       <section className="relative flex flex-col h-[982px] items-start gap-10 w-full rounded-b-[120px] ">
// //       {/* Background Gradient */}
// //       <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-[120px] overflow-hidden" />

// //       {/* Background Image */}
// //       <Image
// //         src="/landing_page/bg.jpg"
// //         alt="Background"
// //         fill
// //         priority
// //         className="object-cover object-center -z-10 rounded-b-[120px]"
// //       />
// //         <div className="flex flex-col items-start gap-[114px] relative self-stretch w-full flex-[0_0_auto] ">
// //           <Header />
// //           <MainContent />
// //         </div>
// //         <MoneySection />
// //         <img
// //           className="absolute w-[759px] h-[611px] top-0 left-0"
// //           alt="Abstract design"
// //           src="https://c.animaapp.com/mfgy37ey76CQRT/img/abstract-design.svg"
// //         />
// //       </section>
// //       <BrandSection />
      
// //     </div>
    

// //     {/* <div className="absolute w-[180px] sm:w-[227px] h-[180px] sm:h-[228px] top-0 right-0 bg-transparent border-0 rounded-xl shadow z-50 ">
// //         <div className="relative h-full p-0">
// //           <img
// //             className="absolute w-full h-[140px] sm:h-[224px] top-0 left-0"
// //             alt="Rectangle"
// //             src="https://c.animaapp.com/mfgy37ey76CQRT/img/rectangle-35.svg"
// //           />
// //           <div className="flex flex-col w-[90%] items-end gap-4 px-0 py-2.5 absolute top-4 left-px">
// //             <div className="inline-flex justify-end gap-2.5 px-0 py-2.5 items-center relative">
// //               <div className="w-full font-bold text-gray-800 text-lg sm:text-2xl text-right leading-[24px] sm:leading-[30px] relative tracking-[0px]">
// //                 All-in-One Finance Help
// //                 <br />@ your doorstep
// //               </div>
// //             </div>
// //             <div className="flex w-[140px] sm:w-[167px] items-center relative">
// //               <img
// //                 className="relative w-[50px] sm:w-[65.66px] h-[50px] sm:h-[65.84px]"
// //                 alt="Arrow r"
// //                 src="https://c.animaapp.com/mfgy37ey76CQRT/img/arrow-r-01-1.svg"
// //               />
// //               <div className="inline-flex items-center gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-solid border-gray-800">
// //                 <div className="relative w-fit font-bold text-gray-800 text-sm sm:text-base tracking-[0.5px] leading-5 whitespace-nowrap">
// //                   Book Your Slot
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div> */}
// //     </>
// //   );
// // };

// // export default TopSlide;

// "use client";

// import React, { useRef } from "react";
// import Header from "./Header";
// import MainContent from "./MainComponent";
// import MoneySection from "./MoneySection";
// import BrandSection from "./BrandSection";
// import { useInView } from "framer-motion";
// import Image from "next/image";

// const TopSlide = () => {
//   // Ref for BrandSection
//   const brandRef = useRef(null);
//   const brandInView = useInView(brandRef, {
//     once: true, // animate only first time
//     amount: 0.01, // trigger when 30% is visible
//   });

//   return (
//     <>
//       <div className="flex flex-col items-start gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
//         <section className="relative flex flex-col h-[982px] items-start gap-10 w-full rounded-b-[120px]">
//           {/* Background Gradient */}
//           <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-[120px] overflow-hidden" />

//           {/* Background Image */}
//           <Image
//             src="/landing_page/bg.jpg"
//             alt="Background"
//             fill
//             priority
//             className="object-cover object-center -z-10 rounded-b-[120px]"
//           />

//           {/* Header + Content */}
//           <div className="flex flex-col items-start gap-[114px] pt-[185px] relative self-stretch w-full flex-[0_0_auto]">
//             {/* <Header /> */}
//             <MainContent />
//           </div>

//           {/* Money Section (controlled by BrandSection visibility) */}
//           <MoneySection animate={brandInView} />

//           {/* Abstract Design (now responsive + safe positioning) */}
//           <img
//             className="absolute w-[300px] sm:w-[500px] md:w-[759px] h-auto top-0 left-0"
//             alt="Abstract design"
//             src="https://c.animaapp.com/mfgy37ey76CQRT/img/abstract-design.svg"
//           />
//         </section>

//         {/* Brand Section (triggers MoneySection) */}
//         <div ref={brandRef}>
//           <BrandSection />
//         </div>
//       </div>
//     </>
//   );
// };

// export default TopSlide;
// "use client";

// import React, { useRef } from "react";
// import Header from "./Header";
// import MainContent from "./MainComponent";
// import MoneySection from "./MoneySection";
// import BrandSection from "./BrandSection";
// import { useInView } from "framer-motion";
// import Image from "next/image";

// const TopSlide = () => {
//   // Ref for MainContent
//   const mainRef = useRef(null);

//   // Detect when MainContent ends (bottom comes into view)
//   const mainInView = useInView(mainRef, {
//     once: true, // animate only first time
//     amount: 0.9, // trigger when 30% of MainContent is visible (adjust if needed)
//   });

//   return (
//     <>
//       <div className="flex flex-col items-start gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
//         <section className="relative flex flex-col h-[982px] items-start gap-10 w-full rounded-b-[120px]">
//           {/* Background Gradient */}
//           <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-[120px] overflow-hidden" />

//           {/* Background Image */}
//           <Image
//             src="/landing_page/bg.jpg"
//             alt="Background"
//             fill
//             priority
//             className="object-cover object-center -z-10 rounded-b-[120px]"
//           />

//           {/* Header + Content */}
//           <div
//             ref={mainRef}
//             className="flex flex-col items-start gap-[114px] pt-[185px] relative self-stretch w-full flex-[0_0_auto]"
//           >
//             {/* <Header /> */}
//             <MainContent />
//           </div>

//           {/* Money Section triggers when MainContent ends */}
//           <MoneySection animate={mainInView} />

//           {/* Abstract Design */}
//           <img
//             className="absolute w-[300px] sm:w-[500px] md:w-[759px] h-auto top-0 left-0"
//             alt="Abstract design"
//             src="https://c.animaapp.com/mfgy37ey76CQRT/img/abstract-design.svg"
//           />
//         </section>

//         {/* Brand Section (independent now) */}
//         <BrandSection />
//       </div>
//     </>
//   );
// };

// export default TopSlide;


// "use client";

// import React, { useRef } from "react";
// import Header from "./Header";
// import MainContent from "./MainComponent";
// import MoneySection from "./MoneySection";
// import BrandSection from "./BrandSection";
// import { useInView } from "framer-motion";
// import Image from "next/image";

// const TopSlide = () => {
//   // Ref for MainContent
//   const mainRef = useRef(null);

//   // Detect when MainContent is mostly out of view
//   const isMainInView = useInView(mainRef, { amount: 0.9 }); // visible 10%
//   const mainOutOfView = !isMainInView;

//   return (
//     <div className="flex flex-col items-start gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
//       <section className="relative flex flex-col items-start gap-10 w-full rounded-b-[120px]">
//         {/* Background Gradient */}
//         <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-[120px] overflow-hidden" />

//         {/* Background Image */}
//         <Image
//           src="/landing_page/bg.jpg"
//           alt="Background"
//           fill
//           priority
//           className="object-cover object-center -z-10 rounded-b-[120px]"
//         />

//         {/* Header + MainContent */}
//         <div
//           ref={mainRef}
//           className="flex flex-col items-start gap-[114px] pt-[185px] relative self-stretch w-full flex-[0_0_auto]"
//         >
//           {/* <Header /> */}
//           <MainContent />
//         </div>

//         {/* 👇 Animates only when MainContent scrolled past */}
//         <MoneySection animate={mainOutOfView} />

//         {/* Abstract Design */}
//         <img
//           className="absolute w-[300px] sm:w-[500px] md:w-[759px] h-auto top-0 left-0"
//           alt="Abstract design"
//           src="https://c.animaapp.com/mfgy37ey76CQRT/img/abstract-design.svg"
//         />
//       </section>

//       {/* Brand Section */}
//       <BrandSection />
//     </div>
//   );
// };

// export default TopSlide;
"use client";

import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import MainContent from "./MainComponent";
import MoneySection from "./MoneySection";
import BrandSection from "./BrandSection";
import Image from "next/image";

const TopSlide = () => {
  const mainRef = useRef(null);
  const [animateMoney, setAnimateMoney] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;

      const rect = mainRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Trigger when bottom of MainContent is near top of viewport (90% scrolled)
      if (rect.bottom <= windowHeight * 0.7 && !animateMoney) {
        setAnimateMoney(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animateMoney]);

  return (
    <div className="flex flex-col items-start gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
      <section className="relative flex flex-col items-start gap-10 w-full rounded-b-[120px]">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-[120px] overflow-hidden" />

        {/* Background Image */}
        <Image
          src="/landing_page/bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center -z-10 rounded-b-[120px]"
        />

        {/* Header + MainContent */}
        <div
          ref={mainRef}
          className="flex flex-col items-start gap-[114px] pt-[185px] relative self-stretch w-full flex-[0_0_auto]"
        >
          {/* <Header /> */}
          <MainContent />
        </div>

        {/* ✅ Animate MoneySection only after 90% scroll */}
        <MoneySection animate={animateMoney} />

        {/* Abstract Design */}
        <img
          className="absolute w-[300px] sm:w-[500px] md:w-[759px] h-auto top-0 left-0"
          alt="Abstract design"
          src="https://c.animaapp.com/mfgy37ey76CQRT/img/abstract-design.svg"
        />
      </section>

      {/* Brand Section */}
      <BrandSection />
    </div>
  );
};

export default TopSlide;
