"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ResponsiveFooter() {
  const router = useRouter();

  const socialIcons = [
    {
      icon: <Instagram className="w-6 h-6 md:w-7 md:h-7" />,
      alt: "Instagram",
      url: "https://www.instagram.com/finsbee_official_?igsh=dGlveWhrZHFpd2Zt&utm_source=qr",
    },
    {
      icon: <Youtube className="w-6 h-6 md:w-7 md:h-7" />,
      alt: "Youtube",
      url: "https://youtube.com/@finsbeeofficial?si=Nj8H99UKbDbXmr0l",
    },
    {
      icon: <Linkedin className="w-6 h-6 md:w-7 md:h-7" />,
      alt: "LinkedIn",
      url: "https://www.linkedin.com/company/finsbeeofficial/posts/?feedView=all",
    },
    {
      icon: <Facebook className="w-6 h-6 md:w-7 md:h-7" />,
      alt: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61580182081407",
    },
  ];

  const navigationLinks = [
    // { label: "About Us", route: "/" },
    // { label: "Blog", route: "/" },
    { label: "Terms & Conditions", route: "/terms-and-conditions" },
    { label: "Privacy Policy", route: "/privacy-policy" },
    { label: "Return and Refund Policy", route: "/return-refund-policy" },
  ];

  const loanTypes = [
    { label: "Personal Loan", route: "/apply-for-personal-loan-online" },
    { label: "Business Loan", route: "/apply-for-business-loan" },
    { label: "Education Loan", route: "/education-loan" },
    { label: "Home Loan", route: "/apply-for-home-loan" },
    { label: "LAP", route: "/apply-for-loan-against-property" },
    { label: "LAS", route: "/apply-for-loan-against-securities" },
  ];

  const investmentOptions = [
    {
      title: "Gold",
      percentage: "+34.70%",
      period: "p.a(3Y)",
      background: "linear-gradient(222.52deg, #F0C735 15.01%, #D98F39 79.87%)",
      image: "/gold.png",
      watermark: "/gold.svg",
      route: "/investment",
    },

  ];

  // Variants for circle animation
  const circleVariants = {
    initial: { x: "120%", y: "120%", scale: 0.9, opacity: 0.8 },
    hover: { x: 0, y: 0, scale: 1, opacity: 1 },
  };

  const arrowVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 },
  };

  const arrowHoverVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const textVariants = {
    initial: { color: "#ffffff" },
    hover: { color: "#000000" },
  };

  return (
    <footer  id="contact-us" className="flex flex-col lg:flex-row w-full text-white ">
      {/* LEFT SECTION */}
      <div className="flex flex-col gap-8 pt-24 pl-3 md:pl-0 pr-8 pb-8 flex-1 border-b lg:border-b border-[#B39FFF] ">
        {/* Socials + Button */}
        <div className="flex flex-wrap justify-between items-center gap-6">
          <div className="flex flex-wrap gap-4">
            {socialIcons.map((icon, i) => (
              <div
                key={i}
                className="flex w-14 h-14 md:w-16 md:h-16 items-center justify-center rounded-2xl border border-[#9073ff] hover:bg-[#9073ff]/20 hover:shadow-lg cursor-pointer"
                onClick={() => window.open(icon.url, "_blank")}
                title={icon.alt}
              >
                {icon.icon}
              </div>
            ))}
          </div>

          <button
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg border border-[#592eff] text-[#592eff] font-bold hover:bg-[#592eff] hover:text-white hover:shadow-lg hover:border-white"
            onClick={() =>
              window.open("https://partner.finsbee.com/", "_blank")
            }
          >
            Get Partner with us
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation + Loan + Investment */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 w-full">
          <div className="flex flex-row justify-between gap-10 w-full">
            <div className="flex flex-col gap-6 sm:gap-8 flex-1 lg:min-w-[250px]">
              <Image
                src="https://c.animaapp.com/mfj8sjndzkaKcu/img/finsbee-transparent-2.png"
                width={220}
                height={80}
                alt="Finsbee Logo"
                className="object-contain cursor-pointer"
                onClick={() => router.push("/")}
              />
              <nav className="flex flex-col gap-2 text-gray-300">
                {navigationLinks.map((link, i) => (
                  <div
                    key={i}
                    className="cursor-pointer hover:text-purple-200"
                    onClick={() => router.push(link.route)}
                  >
                    {link.label}
                  </div>
                ))}
              </nav>
              {/* <p className="text-gray-400 text-sm">@ Copyright Finsbee A STRADEX INTERNATIONAL PVT. LTD. </p> */}
            </div>

            <div className="flex flex-col gap-4 flex-1 lg:min-w-[200px]">
              <h3 className="text-xl md:text-2xl font-bold">Loan</h3>
              <div className="flex flex-col gap-2">
                {loanTypes.map((loan, i) => (
                  <div
                    key={i}
                    className="hover:text-purple-200 cursor-pointer"
                    onClick={() => router.push(loan.route)}
                  >
                    {loan.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1 lg:min-w-[200px]">
            <h3 className="text-xl md:text-2xl font-bold">Investment</h3>
            <div className="flex md:flex-wrap gap-4">
              {investmentOptions.map((opt, i) => (
                <div
                  key={i}
                  className="relative w-[156px]  h-[116px]   rounded-3xl p-4 md:p-5 cursor-pointer overflow-hidden flex flex-col justify-center"
                  onClick={() => router.push(opt.route)}
                  style={{
                    background:
                      "linear-gradient(222deg, #F0C735 10%, #D98F39 90%)",
                  }}
                >
                  {/* Watermark icon in background */}
                  <Image
                    src="/gold.png"
                    alt="gold watermark"
                    width={140}
                    height={140}
                    className="absolute bottom-[-30px] w-full right-[-10px] opacity-30 pointer-events-none select-none"
                    style={{
                      objectFit: "contain",
                      filter: "blur(0.4px)",
                    }}
                  />

                  {/* Card content */}
                  <div className="relative z-10 flex flex-col gap-1">
                    <span className="text-white font-bold text-[26px] leading-none">
                      {opt.title}
                    </span>

                    <p className="text-white font-semibold text-[15px] py-2 leading-tight">
                      {opt.percentage}
                    </p>

                    <p className="text-white text-[14px] opacity-90">
                      {opt.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <p className="text-gray-400 text-sm">@ Copyright 2025 Stradex International Pvt. Ltd. All Rights Reserved. </p> */}
        <p className="text-gray-400 text-sm">
          @ Copyright Finsbee A STRADEX INTERNATIONAL PVT. LTD.{" "}
        </p>

        <div className="flex flex-col sm:flex-row justify-between md:h-[76px] items-center gap-6 bg-[#2121210D]  p-6 md:p-8">
          <div className="text-center sm:text-left font-bold text-lg sm:text-xl">
            Have any questions? <br /> Contact Us
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div
              className="flex items-center gap-4 cursor-pointer hover:opacity-80"
              onClick={() => window.open("tel:+919220468743")}
            >
              <PhoneIcon className="w-6 h-6" />
              <div>
                <p className="text-sm">Call Us @</p>
                <p className="font-bold text-sm">+91 9220468743</p>
              </div>
            </div>

            <div
              className="flex items-center gap-4 cursor-pointer hover:opacity-80"
              onClick={() => window.open("mailto:customercare@finsbee.com")}
            >
              <MailIcon className="w-6 h-6" />
              <div>
                <p className="text-sm">Send mail to</p>
                <p className="font-bold text-sm">customercare@finsbee.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* ASIDE SECTION */}
<aside className="flex flex-col justify-center items-center gap-10 bg-[#512AE8] w-full lg:w-[380px] px-6 sm:px-8 py-10 md:py-16">
  <h2 className="text-2xl md:text-3xl font-bold text-center">
    Get financial help @ your doorstep
  </h2>

  {/* Connect Button with animation */}
  <Link href="/booking" passHref>
    <motion.button
      className="relative cursor-pointer inline-flex flex-col h-[180px] w-[180px] md:h-[218px] md:w-[218px] items-center justify-center rounded-full border border-white border-opacity-50 overflow-hidden"
      initial="initial"
      whileHover="hover"
      whileTap="hover" // mobile tap support
    >
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[216px] h-[216px] md:w-[218px] md:h-[218px] bg-[#FFC73C] rounded-full"
        variants={circleVariants}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 12,
          mass: 0.8,
        }}
      />

      {/* Arrow swap */}
      <motion.div className="absolute z-10" variants={arrowVariants}>
        <Image
          src="/landing_page/arrow-up.svg"
          width={102}
          height={102}
          alt="Arrow Up White"
        />
      </motion.div>
      <motion.div className="absolute z-10" variants={arrowHoverVariants}>
        <Image
          src="/landing_page/arrow-up 2.svg"
          width={102}
          height={102}
          alt="Arrow Up Black"
        />
      </motion.div>

      <motion.div
        className="z-10 mt-25 text-center font-bold text-base md:text-xl text-white"
        variants={textVariants}
        transition={{ duration: 0.3 }}
      >
        Connect with us
      </motion.div>
    </motion.button>
  </Link>

  <div className="text-center">
    <p className="text-lg md:text-2xl font-bold">
      10:00 A.M - 7:00 P.M (IST)
    </p>
    <p className="text-sm md:text-base opacity-80">
      All Day (* We do not serve on holidays)
    </p>
  </div>
</aside>
    </footer>
  );
}




// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { ArrowRightIcon, MailIcon, PhoneIcon } from "lucide-react";
// import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function ResponsiveFooter() {
//   const router = useRouter();

//   const socialIcons = [
//     {
//       icon: <Instagram className="w-6 h-6 md:w-7 md:h-7" />,
//       alt: "Instagram",
//       url: "https://www.instagram.com/finsbee_official_?igsh=dGlveWhrZHFpd2Zt&utm_source=qr",
//     },
//     {
//       icon: <Youtube className="w-6 h-6 md:w-7 md:h-7" />,
//       alt: "Youtube",
//       url: "https://youtube.com/@finsbeeofficial?si=Nj8H99UKbDbXmr0l",
//     },
//     {
//       icon: <Linkedin className="w-6 h-6 md:w-7 md:h-7" />,
//       alt: "LinkedIn",
//       url: "https://www.linkedin.com/company/finsbeeofficial/posts/?feedView=all",
//     },
//     {
//       icon: <Facebook className="w-6 h-6 md:w-7 md:h-7" />,
//       alt: "Facebook",
//       url: "https://www.facebook.com/profile.php?id=61580182081407",
//     },
//   ];

//   const navigationLinks = [
//     { label: "Terms & Conditions", route: "/terms-and-conditions" },
//     { label: "Privacy Policy", route: "/privacy-policy" },
//   ];

//   const loanTypes = [
//     { label: "Personal Loan", route: "/personal-loan" },
//     { label: "Business Loan", route: "/business-loan" },
//     { label: "Education Loan", route: "/personal-loan" },
//     { label: "Home Loan", route: "/home-loan" },
//     { label: "LAP", route: "/loan-against-property" },
//     { label: "LAS", route: "/loan-against-securities" },
//   ];

//   const investmentOptions = [
//     {
//       title: "Gold",
//       percentage: "+34.70%",
//       period: "p.a(3Y)",
//       background: "linear-gradient(222.52deg, #F0C735 15.01%, #D98F39 79.87%)",
//       image: "/gold.png",
//       watermark: "/gold.svg",
//       route: "/investment",
//     },
//   ];

//   const circleVariants = {
//     initial: { x: "120%", y: "120%", scale: 0.9, opacity: 0.8 },
//     hover: { x: 0, y: 0, scale: 1, opacity: 1 },
//   };

//   const arrowVariants = {
//     initial: { opacity: 1 },
//     hover: { opacity: 0 },
//   };

//   const arrowHoverVariants = {
//     initial: { opacity: 0 },
//     hover: { opacity: 1 },
//   };

//   const textVariants = {
//     initial: { color: "#ffffff" },
//     hover: { color: "#000000" },
//   };

//   return (
//     <footer className="w-full  text-white">
//       {/* center and cap width so it scales on desktop */}
//       <div className="mx-auto flex w-full max-w-6xl flex-col lg:flex-row">
//         {/* LEFT SECTION */}
//         <div className="flex min-w-0 flex-wrap flex-1 flex-col gap-8 pt-24 px-4 md:px-6 pb-10 border-b lg:border-b-0 lg:border-r border-[#B39FFF]">
//           {/* Socials + Button */}
//           <div className="flex flex-wrap items-center justify-between gap-6">
//             <div className="flex flex-wrap gap-4">
//               {socialIcons.map((icon, i) => (
//                 <button
//                   type="button"
//                   key={i}
//                   className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9073ff] hover:bg-[#9073ff]/20 hover:shadow-lg md:h-16 md:w-16"
//                   onClick={() => window.open(icon.url, "_blank")}
//                   title={icon.alt}
//                 >
//                   {icon.icon}
//                 </button>
//               ))}
//             </div>

//             <button
//               className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-[#592eff] bg-white px-4 py-2 text-sm font-bold text-[#592eff] hover:bg-[#592eff] hover:text-white hover:shadow-lg hover:border-white md:px-6 md:py-3 md:text-base"
//               onClick={() =>
//                 window.open("https://partner.finsbee.com/", "_blank")
//               }
//             >
//               Get Partner with us
//               <ArrowRightIcon className="h-5 w-5" />
//             </button>
//           </div>

//           {/* Navigation + Loan + Investment */}
//           <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between w-full">
//             {/* Logo + nav + loan */}
//             <div className="flex w-full flex-col gap-8 md:flex-row md:gap-10">
//               <div className="flex min-w-[180px] flex-1 flex-col gap-6 sm:gap-8">
//                 <Image
//                   src="https://c.animaapp.com/mfj8sjndzkaKcu/img/finsbee-transparent-2.png"
//                   width={220}
//                   height={80}
//                   alt="Finsbee Logo"
//                   className="cursor-pointer object-contain"
//                   onClick={() => router.push("/")}
//                 />
//                 <nav className="flex flex-col gap-2 text-gray-300">
//                   {navigationLinks.map((link, i) => (
//                     <button
//                       key={i}
//                       className="text-left hover:text-purple-200"
//                       onClick={() => router.push(link.route)}
//                     >
//                       {link.label}
//                     </button>
//                   ))}
//                 </nav>
//               </div>

//               <div className="flex min-w-[160px] flex-1 flex-col gap-4">
//                 <h3 className="text-xl font-bold md:text-2xl">Loan</h3>
//                 <div className="flex flex-col gap-2">
//                   {loanTypes.map((loan, i) => (
//                     <button
//                       key={i}
//                       className="text-left hover:text-purple-200"
//                       onClick={() => router.push(loan.route)}
//                     >
//                       {loan.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Investment */}
//             <div className="flex min-w-[180px] flex-1 flex-col gap-4">
//               <h3 className="text-xl font-bold md:text-2xl">Investment</h3>
//               <div className="flex flex-wrap gap-4">
//                 {investmentOptions.map((opt, i) => (
//                   <button
//                     type="button"
//                     key={i}
//                     className="relative flex h-[116px] w-[156px] flex-col justify-center overflow-hidden rounded-3xl p-4 md:p-5"
//                     onClick={() => router.push(opt.route)}
//                     style={{
//                       background:
//                         "linear-gradient(222deg, #F0C735 10%, #D98F39 90%)",
//                     }}
//                   >
//                     <Image
//                       src="/gold.png"
//                       alt="gold watermark"
//                       width={140}
//                       height={140}
//                       className="pointer-events-none select-none absolute bottom-[-30px] right-[-10px] w-full opacity-30"
//                       style={{
//                         objectFit: "contain",
//                         filter: "blur(0.4px)",
//                       }}
//                     />

//                     <div className="relative z-10 flex flex-col gap-1">
//                       <span className="text-[26px] font-bold leading-none text-white">
//                         {opt.title}
//                       </span>
//                       <p className="py-2 text-[15px] font-semibold leading-tight text-white">
//                         {opt.percentage}
//                       </p>
//                       <p className="text-[14px] text-white opacity-90">
//                         {opt.period}
//                       </p>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-400">
//             © Copyright Finsbee A STRADEX INTERNATIONAL PVT. LTD.
//           </p>

//           <div className="flex flex-col items-center gap-6 bg-[#2121210D] p-6 md:flex-row md:justify-between md:p-8">
//             <div className="text-center text-lg font-bold sm:text-left sm:text-xl">
//               Have any questions? <br /> Contact Us
//             </div>

//             <div className="flex flex-col items-center gap-8 sm:flex-row">
//               <button
//                 type="button"
//                 className="flex items-center gap-4 hover:opacity-80"
//                 onClick={() => window.open("tel:+919220468743")}
//               >
//                 <PhoneIcon className="h-6 w-6" />
//                 <div>
//                   <p className="text-sm">Call Us @</p>
//                   <p className="text-sm font-bold">+91 9220468743</p>
//                 </div>
//               </button>

//               <button
//                 type="button"
//                 className="flex items-center gap-4 hover:opacity-80"
//                 onClick={() => window.open("mailto:customercare@finsbee.com")}
//               >
//                 <MailIcon className="h-6 w-6" />
//                 <div>
//                   <p className="text-sm">Send mail to</p>
//                   <p className="text-sm font-bold">customercare@finsbee.com</p>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ASIDE SECTION */}
//         <aside className="flex flex-col justify-center items-center gap-10 bg-[#512AE8] w-full lg:w-[380px] px-6 sm:px-8 py-10 md:py-16">
//           <h2 className="text-2xl md:text-3xl font-bold text-center">
//             Get financial help @ your doorstep
//           </h2>

//           {/* Connect Button with animation */}
//           <Link href="/booking" passHref>
//             <motion.button
//               className="relative cursor-pointer inline-flex flex-col h-[180px] w-[180px] md:h-[218px] md:w-[218px] items-center justify-center rounded-full border border-white border-opacity-50 overflow-hidden"
//               initial="initial"
//               whileHover="hover"
//               whileTap="hover" // mobile tap support
//             >
//               <motion.div
//                 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[216px] h-[216px] md:w-[218px] md:h-[218px] bg-[#FFC73C] rounded-full"
//                 variants={circleVariants}
//                 transition={{
//                   type: "spring",
//                   stiffness: 150,
//                   damping: 12,
//                   mass: 0.8,
//                 }}
//               />

//               {/* Arrow swap */}
//               <motion.div className="absolute z-10" variants={arrowVariants}>
//                 <Image
//                   src="/landing_page/arrow-up.svg"
//                   width={102}
//                   height={102}
//                   alt="Arrow Up White"
//                 />
//               </motion.div>
//               <motion.div
//                 className="absolute z-10"
//                 variants={arrowHoverVariants}
//               >
//                 <Image
//                   src="/landing_page/arrow-up 2.svg"
//                   width={102}
//                   height={102}
//                   alt="Arrow Up Black"
//                 />
//               </motion.div>

//               <motion.div
//                 className="z-10 mt-25 text-center font-bold text-base md:text-xl text-white"
//                 variants={textVariants}
//                 transition={{ duration: 0.3 }}
//               >
//                 Connect with us
//               </motion.div>
//             </motion.button>
//           </Link>

//           <div className="text-center">
//             <p className="text-lg md:text-2xl font-bold">
//               10:00 A.M - 7:00 P.M (IST)
//             </p>
//             <p className="text-sm md:text-base opacity-80">
//               All Day (* We do not serve on holidays)
//             </p>
//           </div>
//         </aside>
//       </div>
//     </footer>
//   );
// }
