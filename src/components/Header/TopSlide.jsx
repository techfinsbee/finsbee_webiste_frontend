
// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Header from "./Header";
// import MainContent from "./MainComponent";
// import MoneySection from "./MoneySection";
// import BrandSection from "./BrandSection";
// import Image from "next/image";

// const TopSlide = () => {
//   const mainRef = useRef(null);
//   const [animateMoney, setAnimateMoney] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!mainRef.current) return;

//       const rect = mainRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Trigger when bottom of MainContent is near top of viewport (90% scrolled)
//       if (rect.bottom <= windowHeight * 0.7 && !animateMoney) {
//         setAnimateMoney(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [animateMoney]);

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

//         {/* ✅ Animate MoneySection only after 90% scroll */}
//         <MoneySection animate={animateMoney} />

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


// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Header from "./Header";
// import MainContent from "./MainComponent";
// import MoneySection from "./MoneySection";
// import BrandSection from "./BrandSection";
// import Image from "next/image";

// const TopSlide = () => {
//   const mainRef = useRef(null);
//   const [animateMoney, setAnimateMoney] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!mainRef.current) return;

//       const rect = mainRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Trigger when bottom of MainContent is near top of viewport (90% scrolled)
//       if (rect.bottom <= windowHeight * 0.7 && !animateMoney) {
//         setAnimateMoney(true);
//       }
//     };

//     // Only add scroll listener for desktop (>1024px)
//     if (window.innerWidth > 1024) {
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//   }, [animateMoney]);

//   return (
//     <div className="flex flex-col items-start gap-8 md:gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
//       <section className="relative flex flex-col items-start gap-4 md:gap-10 w-full lg:rounded-b-[120px]">
//         {/* Background Gradient */}
//         <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-4xl lg:rounded-b-[120px] overflow-hidden" />

//         {/* Background Image */}
//         <Image
//           src="/landing_page/bg.jpg"
//           alt="Background"
//           fill
//           priority
//           className="object-cover object-center -z-10 rounded-b-4xl lg:rounded-b-[120px]"
//         />

//         {/* Header + MainContent */}
//         <div
//           ref={mainRef}
//           className="flex flex-col items-start gap-6 sm:gap-8 md:gap-[114px] pt-[100px] sm:pt-[120px] md:pt-[185px] relative self-stretch w-full flex-[0_0_auto]"
//         >
//           {/* <Header /> */}
//           <MainContent isDesktop={window.innerWidth > 1024} />
//         </div>

//         {/* MoneySection */}
//         <MoneySection animate={animateMoney} isDesktop={window.innerWidth > 1024} />

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
  const [isDesktop, setIsDesktop] = useState(false);

  // Determine if desktop on mount (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth > 1024);
    }
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;

      const rect = mainRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.bottom <= windowHeight * 0.7 && !animateMoney) {
        setAnimateMoney(true);
      }
    };

    if (typeof window !== "undefined" && isDesktop) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [animateMoney, isDesktop]);

  return (
    <div className="flex flex-col items-start gap-8 md:gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
      <section className="relative flex flex-col items-start gap-4 md:gap-10 w-full lg:rounded-b-[120px]">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-4xl lg:rounded-b-[120px] overflow-hidden" />

        {/* Background Image */}
        <Image
          src="/landing_page/bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center -z-10 rounded-b-4xl lg:rounded-b-[120px]"
        />

        {/* Header + MainContent */}
        <div
          ref={mainRef}
          className="flex flex-col items-start gap-6 sm:gap-8 md:gap-[114px] pt-[100px] sm:pt-[120px] md:pt-[185px] relative self-stretch w-full flex-[0_0_auto]"
        >
          <MainContent isDesktop={isDesktop} />
        </div>

        {/* MoneySection */}
        <MoneySection animate={animateMoney} isDesktop={isDesktop} />

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
