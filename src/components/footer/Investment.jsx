// "use client"
// import { ArrowRightIcon, ArrowUpIcon, MailIcon, PhoneIcon } from "lucide-react";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function InvestmentOptionsSection () {
//   const socialIcons = [
//     {
//       src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
//       alt: "Social media icon",
//     },
//     {
//       src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
//       alt: "Social media icon",
//     },
//     {
//       src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
//       alt: "Social media icon",
//     },
//     {
//       src: "https://c.animaapp.com/mfj8sjndzkaKcu/img/vuesax-broken-instagram.svg",
//       alt: "Social media icon",
//     },
//   ];

//   const navigationLinks = [
//     "About Us",
//     "Blog",
//     "Term & Condition",
//     "Privacy Policy",
//   ];

//   const loanTypes = [
//     "Personal Loan",
//     "Business Loan",
//     "Education Loan",
//     "Home Loan",
//     "LAP",
//     "LAS",
//   ];

//   const investmentOptions = [
//     {
//       title: "Gold",
//       percentage: "+34.70%",
//       period: "p.a(3Y)",
//       background:
//         "url(https://c.animaapp.com/mfj8sjndzkaKcu/img/category-element.png) 50% 50% / cover, linear-gradient(223deg, rgba(240,199,53,1) 0%, rgba(217,143,57,1) 100%)",
//     },
//     {
//       title: "Silver",
//       percentage: "+34.70%",
//       period: "p.a(3Y)",
//       background:
//         "url(https://c.animaapp.com/mfj8sjndzkaKcu/img/category-element-1.png) 50% 50% / cover, linear-gradient(223deg, rgba(202,201,201,1) 0%, rgba(151,151,151,1) 100%)",
//     },
//   ];

//   return (
//     <footer className="flex flex-wrap items-center justify-between w-full">
//       <div className="flex flex-col items-start gap-8 pl-0 pr-8 pt-24 pb-8 flex-1 w-full border-b border-solid border-[#b39fff]">
//         <div className="flex items-center justify-between w-full">
//           <div className="inline-flex items-center gap-6">
//             {socialIcons.map((icon, index) => (
//               <div
//                 key={index}
//                 className="flex w-[72px] h-[72px] items-center justify-center gap-[15.49px] px-[26.34px] py-[23.24px] rounded-2xl border border-solid border-[#9073ff]"
//               >
//                 <img
//                   className="w-[37.18px] h-[37.18px] mt-[-5.83px] mb-[-5.83px] ml-[-8.93px] mr-[-8.93px]"
//                   alt={icon.alt}
//                   src={icon.src}
//                 />
//               </div>
//             ))}
//           </div>

//           <button className="inline-flex items-center justify-center gap-2.5 px-7 py-4 mr-[-1.00px] bg-white rounded-lg border border-solid border-[#592eff] h-auto text-[#592eff] font-bold hover:bg-[#592eff] hover:text-white transition-colors">
//             <div className="font-bold text-base">
//               Get Partner with us
//             </div>
//             <ArrowRightIcon className="w-6 h-6" />
//           </button>
//         </div>

//         <div className="flex flex-col items-start gap-8 w-full">
//           <div className="flex items-center gap-16 w-full">
//             <div className="flex flex-col items-start gap-12 flex-1 self-stretch">
//               <div className="inline-flex flex-col items-start gap-2.5">
//                 <img
//                   className="w-[280px] h-[100px] object-cover"
//                   alt="Finsbee transparent"
//                   src="https://c.animaapp.com/mfj8sjndzkaKcu/img/finsbee-transparent-2.png"
//                 />

//                 <nav className="flex w-40 gap-4 flex-col items-start">
//                   <div className="flex flex-col items-start w-full">
//                     {navigationLinks.map((link, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-1 px-0 py-2 w-full"
//                       >
//                         <div className="flex-1 mt-[-1.00px] text-white text-base hover:text-purple-200 transition-colors cursor-pointer">
//                           {link}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </nav>
//               </div>

//               <div className="inline-flex flex-col items-start gap-2">
//                 <div className="w-[222px] mt-[-1.00px] opacity-60 text-gray-300 text-base">
//                   @ Copyright Finsbee
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-start justify-between flex-1">
//               <div className="flex w-40 gap-4 flex-col items-start">
//                 <h3 className="mt-[-1.00px] text-white text-2xl font-bold">
//                   Loan
//                 </h3>

//                 <div className="flex flex-col items-start w-full">
//                   {loanTypes.map((loanType, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center gap-1 px-0 py-2 w-full"
//                     >
//                       <div className="flex-1 mt-[-1.00px] text-white text-base hover:text-purple-200 transition-colors cursor-pointer">
//                         {loanType}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="inline-flex gap-6 flex-col items-start">
//                 <h3 className="w-fit mt-[-1.00px] text-white text-2xl font-bold whitespace-nowrap">
//                   Investment
//                 </h3>

//                 <div className="flex flex-col items-start gap-4 w-full">
//                   {investmentOptions.map((option, index) => (
//                     <div
//                       key={index}
//                       className="flex flex-col w-[156px] h-[116px] items-start justify-between p-4 rounded-2xl shadow-lg border-0 cursor-pointer hover:scale-105 transition-transform"
//                       style={{ background: option.background }}
//                     >
//                       <div className="p-0 w-full h-full flex flex-col justify-between">
//                         <div className="text-white text-2xl font-bold drop-shadow-md">
//                           {option.title}
//                         </div>

//                         <div className="flex flex-col items-start gap-1 w-full">
//                           <div className="w-fit mt-[-1.00px] text-white text-base font-bold drop-shadow-md whitespace-nowrap">
//                             {option.percentage}
//                           </div>

//                           <div className="text-white text-sm drop-shadow-md">
//                             {option.period}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex h-[76px] items-center justify-between px-8 py-0 w-full bg-[#2121210D]  rounded-lg">
//             <div className="w-[286px] text-white text-xl font-bold">
//               Have a any questions?
//               <br />
//               Contact Us
//             </div>

//             <div className="inline-flex items-center gap-12">
//               <div className="inline-flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
//                 <PhoneIcon className="w-8 h-8 text-white" />

//                 <div className="inline-flex flex-col items-start">
//                   <div className="mt-[-1.00px] text-white text-sm">
//                     Call Us @
//                   </div>

//                   <div className="w-fit text-white font-bold text-sm">
//                     +91 928966175
//                   </div>
//                 </div>
//               </div>

//               <div className="inline-flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
//                 <MailIcon className="w-8 h-8 text-white" />

//                 <div className="inline-flex flex-col items-start">
//                   <div className="mt-[-1.00px] text-white text-sm">
//                     Send mail to
//                   </div>

//                   <div className="w-fit text-white font-bold text-sm">
//                     support@finsbee.com
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*  */}

//       <aside className="flex flex-col bg-gradient-to-r from-[#512AE8] to-[#592EFF] w-[383px] items-center justify-center gap-16 px-12 py-6 self-stretch ">
//         <h2 className="text-white text-3xl font-bold text-center">
//           Get financial help @ your doorstep
//         </h2>

//         <motion.button
//           className="relative inline-flex flex-col h-[218px] w-[218px] items-center justify-center p-12 rounded-full overflow-hidden border border-white border-opacity-50 bg-transparent cursor-pointer"
//           whileHover="hover"
//           initial="initial"
//           animate="initial"
//         >
//           {/* Yellow circle animation */}
//           <motion.div
//             className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[216px] h-[216px] bg-yellow-500 rounded-full"
//             variants={{
//               initial: { x: "120%", y: "120%", scale: 0.9, opacity: 0.8 },
//               hover: { x: 0, y: 0, scale: 1, opacity: 1 },
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 150,
//               damping: 12,
//               mass: 0.8,
//             }}
//           />

//           {/* Content stays on top */}
//           <motion.div
//             className="inline-flex flex-col items-center mt-[-5.91px] mb-[-3.91px] z-10"
//             variants={{
//               initial: { color: "#ffffff" }, // white
//               hover: { color: "#000000" },   // black
//             }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Arrow changes based on hover */}
//             <motion.div
//               variants={{
//                 initial: { opacity: 1 },
//                 hover: { opacity: 0 },
//               }}
//               className="absolute"
//             >
//               <Image
//                 src="/landing_page/arrow-up.svg"
//                 width={102}
//                 height={102}
//                 alt="Arrow Up White"
//                 className="w-[101.82px] h-[101.82px]"
//               />
//             </motion.div>

//             <motion.div
//               variants={{
//                 initial: { opacity: 0 },
//                 hover: { opacity: 1 },
//               }}
//             >
//               <Image
//                 src="/landing_page/arrow-up 2.svg"
//                 width={102}
//                 height={102}
//                 alt="Arrow Up Black"
//                 className="w-[101.82px] h-[101.82px]"
//               />
//             </motion.div>

//             <motion.div
//               className="w-fit text-xl font-bold text-center whitespace-nowrap"
//               variants={{
//                 initial: { color: "#ffffff" }, // white
//                 hover: { color: "#000000" },   // black
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               Connect with us
//             </motion.div>
//           </motion.div>
//         </motion.button>

//         <div className="flex flex-col items-center w-full">
//           <div className="mt-[-1.00px] text-white text-2xl font-bold text-center">
//             10:00 A.M - 7:00 P.M (IST)
//           </div>

//           <div className="text-white text-base text-center">
//             All Day (* We do not server on holidays)
//           </div>
//         </div>
//       </aside>
//     </footer>
//   );
// }





// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { ArrowRightIcon, MailIcon, PhoneIcon , Instagram, Youtube, Linkedin, Facebook} from "lucide-react";
// import Image from "next/image";



// export default function ResponsiveFooter() {
//   const router = useRouter();

//   // External social network URLs
//   const socialIcons = [
//   { icon: <Instagram className="w-10 h-7" />, alt: "Instagram", url: "https://www.instagram.com/finsbee_official_?igsh=dGlveWhrZHFpd2Zt&utm_source=qr" },
//   { icon: <Youtube className="w-7 h-7" />, alt: "Youtube", url: "https://youtube.com/@finsbeeofficial?si=Nj8H99UKbDbXmr0l" },
//   { icon: <Linkedin className="w-7 h-7" />, alt: "LinkedIn", url: "https://www.linkedin.com/company/finsbeeofficial/posts/?feedView=all" },
//   { icon: <Facebook className="w-7 h-7" />, alt: "Facebook", url: "https://www.facebook.com/profile.php?id=61580182081407" },
//   ];

//   // Internal routes
//   const navigationLinks = [
//     { label: "About Us", route: "/" },
//     { label: "Blog", route: "/" },
//     { label: "Terms & Conditions", route: "/" },
//     { label: "Privacy Policy", route: "/" },
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
//       background:
//         "url(/landing_page/category-element.png) 50% 50% / cover, linear-gradient(223deg, rgba(240,199,53,1) 0%, rgba(217,143,57,1) 100%)",
//       route: "/investment",
//     },
//     {
//       title: "Silver",
//       percentage: "+34.70%",
//       period: "p.a(3Y)",
//       background:
//         "url(/landing_page/category-element-1.png) 50% 50% / cover, linear-gradient(223deg, rgba(202,201,201,1) 0%, rgba(151,151,151,1) 100%)",
//       route: "/investment",
//     },
//   ];

//   return (
//     <footer className="flex flex-wrap lg:flex-nowrap text-white w-full">
//       {/* LEFT SECTION */}
//       <div className="flex flex-col gap-8 p-6 sm:p-10 md:p-14 lg:p-20 flex-1 border-b border-[#b39fff] lg:border-b-0">
//         {/* Socials + Button */}
//         <div className="flex flex-wrap justify-between items-center gap-6">
//           <div className="flex flex-wrap gap-4">
//   {socialIcons.map((icon, i) => (
//     <div
//       key={i}
//       className="flex w-14 h-14 md:w-16 md:h-16 items-center justify-center rounded-2xl border border-[#9073ff] hover:bg-[#9073ff]/20 hover:shadow-lg cursor-pointer"
//       onClick={() => window.open(icon.url, "_blank")}
//       title={icon.alt}
//     >
//       {/* Directly render the Lucide icon component */}
//       {icon.icon}
//     </div>
//   ))}
// </div>


//           <button
//             className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-lg border border-[#592eff] text-[#592eff] font-bold hover:bg-[#592eff] hover:text-white hover:shadow-lg"
//              onClick={() => window.open("https://partner.finsbee.com/", "_blank")}
//           >
//             Get Partner with us
//             <ArrowRightIcon className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Navigation + Loan + Investment */}
//         <div className="flex flex-wrap justify-between gap-10 w-full">
//           {/* Left: Logo & Nav */}
//           <div className="flex flex-col gap-6 sm:gap-8 flex-1 min-w-[250px]">
//             <Image
//                src="https://c.animaapp.com/mfj8sjndzkaKcu/img/finsbee-transparent-2.png"
//               width={220}
//               height={80}
//               alt="Finsbee Logo"
//               className="object-contain cursor-pointer"
//               onClick={() => router.push("/")}
//             />
//             <nav className="flex flex-col gap-2 text-gray-300">
//               {navigationLinks.map((link, i) => (
//                 <div
//                   key={i}
//                   className="cursor-pointer hover:text-purple-200"
//                   onClick={() => router.push(link.route)}
//                 >
//                   {link.label}
//                 </div>
//               ))}
//             </nav>
//             <p className="text-gray-400 text-sm">@ Copyright Finsbee</p>
//           </div>

//           {/* Middle: Loan */}
//           <div className="flex flex-col gap-4 flex-1 min-w-[200px]">
//             <h3 className="text-xl md:text-2xl font-bold">Loan</h3>
//             <div className="flex flex-col gap-2">
//               {loanTypes.map((loan, i) => (
//                 <div
//                   key={i}
//                   className="hover:text-purple-200 cursor-pointer"
//                   onClick={() => router.push(loan.route)}
//                 >
//                   {loan.label}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Investment */}
//           <div className="flex flex-col gap-4 flex-1 min-w-[200px]">
//             <h3 className="text-xl md:text-2xl font-bold">Investment</h3>
//             <div className="flex flex-wrap gap-4">
//               {investmentOptions.map((opt, i) => (
//                 <div
//                   key={i}
//                   className="w-[140px] md:w-[156px] h-[110px] p-4 rounded-2xl shadow-md cursor-pointer text-white hover:shadow-lg hover:bg-opacity-90"
//                   style={{ background: opt.background }}
//                   onClick={() => router.push(opt.route)}
//                 >
//                   <div className="flex flex-col justify-between h-full">
//                     <span className="font-bold text-lg">{opt.title}</span>
//                     <div>
//                       <p className="font-bold text-base">{opt.percentage}</p>
//                       <p className="text-sm opacity-80">{opt.period}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#2121210D] rounded-lg p-6 md:p-8">
//           <div className="text-center sm:text-left font-bold text-lg sm:text-xl">
//             Have any questions? <br /> Contact Us
//           </div>

//           <div className="flex flex-col sm:flex-row items-center gap-8">
//             <div
//               className="flex items-center gap-4 cursor-pointer hover:opacity-80"
//               onClick={() => window.open("tel:+91928966175")}
//             >
//               <PhoneIcon className="w-6 h-6" />
//               <div>
//                 <p className="text-sm">Call Us @</p>
//                 <p className="font-bold text-sm">+91 928966175</p>
//               </div>
//             </div>

//             <div
//               className="flex items-center gap-4 cursor-pointer hover:opacity-80"
//               onClick={() => window.open("mailto:support@finsbee.com")}
//             >
//               <MailIcon className="w-6 h-6" />
//               <div>
//                 <p className="text-sm">Send mail to</p>
//                 <p className="font-bold text-sm">support@finsbee.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ASIDE SECTION */}
//       <aside className="flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-[#512AE8] to-[#592EFF] w-full lg:w-[380px] px-8 py-10 md:py-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-center">
//           Get financial help @ your doorstep
//         </h2>

//         {/* Connect Button */}
//         <button
//           className="relative inline-flex flex-col h-[180px] w-[180px] md:h-[218px] md:w-[218px] items-center justify-center rounded-full border border-white border-opacity-50 overflow-hidden"
//           // onClick={() => router.push("/contact")}
//         >
//           <div className="absolute w-full h-full bg-[#2121210D]  rounded-full hover:opacity-90" />
//           <div className="z-10 flex flex-col items-center text-center text-white hover:text-black">
//             <Image src="/landing_page/arrow-up.svg" alt="Arrow Up" width={80} height={80} />
//             <p className="text-base md:text-xl font-bold mt-2">Connect with us</p>
//           </div>
//         </button>

//         <div className="text-center">
//           <p className="text-lg md:text-2xl font-bold">10:00 A.M - 7:00 P.M (IST)</p>
//           <p className="text-sm md:text-base opacity-80">All Day (* We do not serve on holidays)</p>
//         </div>
//       </aside>
//     </footer>
//   );
// }


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
    { icon: <Instagram className="w-6 h-6 md:w-7 md:h-7" />, alt: "Instagram", url: "https://www.instagram.com/finsbee_official_?igsh=dGlveWhrZHFpd2Zt&utm_source=qr" },
    { icon: <Youtube className="w-6 h-6 md:w-7 md:h-7" />, alt: "Youtube", url: "https://youtube.com/@finsbeeofficial?si=Nj8H99UKbDbXmr0l" },
    { icon: <Linkedin className="w-6 h-6 md:w-7 md:h-7" />, alt: "LinkedIn", url: "https://www.linkedin.com/company/finsbeeofficial/posts/?feedView=all" },
    { icon: <Facebook className="w-6 h-6 md:w-7 md:h-7" />, alt: "Facebook", url: "https://www.facebook.com/profile.php?id=61580182081407" },
  ];

  const navigationLinks = [
    // { label: "About Us", route: "/" },
    // { label: "Blog", route: "/" },
    { label: "Terms & Conditions", route: "/terms-and-conditions" },
    { label: "Privacy Policy", route: "/privacy-policy" },
  ];

  const loanTypes = [
    { label: "Personal Loan", route: "/personal-loan" },
    { label: "Business Loan", route: "/business-loan" },
    { label: "Education Loan", route: "/personal-loan" },
    { label: "Home Loan", route: "/home-loan" },
    { label: "LAP", route: "/loan-against-property" },
    { label: "LAS", route: "/loan-against-securities" },
  ];

  const investmentOptions = [
    {
      title: "Gold",
      percentage: "+34.70%",
      period: "p.a(3Y)",
      background:
        "url(https://c.animaapp.com/mfj8sjndzkaKcu/img/category-element.png) 50% 50% / cover, linear-gradient(223deg, rgba(240,199,53,1) 0%, rgba(217,143,57,1) 100%)",
      route: "/investment",
    },
    // {
    //   title: "Silver",
    //   percentage: "+34.70%",
    //   period: "p.a(3Y)",
    //   background:
    //     "url(https://c.animaapp.com/mfj8sjndzkaKcu/img/category-element-1.png) 50% 50% / cover, linear-gradient(223deg, rgba(202,201,201,1) 0%, rgba(151,151,151,1) 100%)",
    //   route: "/investment",
    // },
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
    <footer className="flex flex-col lg:flex-row w-full text-white ">
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
            onClick={() => window.open("https://partner.finsbee.com/", "_blank")}
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
                  className="w-[140px] md:w-[156px] h-[110px] p-4 rounded-2xl shadow-md cursor-pointer text-white hover:shadow-lg hover:bg-opacity-90"
                  style={{ background: opt.background }}
                  onClick={() => router.push(opt.route)}
                >
                  <div className="flex flex-col justify-between h-full">
                    <span className="font-bold text-lg">{opt.title}</span>
                    <div>
                      <p className="font-bold text-base">{opt.percentage}</p>
                      <p className="text-sm opacity-80">{opt.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* <p className="text-gray-400 text-sm">@ Copyright 2025 Stradex International Pvt. Ltd. All Rights Reserved. </p> */}
         <p className="text-gray-400 text-sm">@ Copyright Finsbee A STRADEX INTERNATIONAL PVT. LTD. </p>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#2121210D]  p-6 md:p-8">
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
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[216px] h-[216px] md:w-[218px] md:h-[218px] bg-yellow-500 rounded-full"
            variants={circleVariants}
            transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.8 }}
          />

          {/* Arrow swap */}
          <motion.div
            className="absolute z-10"
            variants={arrowVariants}
          >
            <Image src="/landing_page/arrow-up.svg" width={102} height={102} alt="Arrow Up White" />
          </motion.div>
          <motion.div
            className="absolute z-10"
            variants={arrowHoverVariants}
          >
            <Image src="/landing_page/arrow-up 2.svg" width={102} height={102} alt="Arrow Up Black" />
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
          <p className="text-lg md:text-2xl font-bold">10:00 A.M - 7:00 P.M (IST)</p>
          <p className="text-sm md:text-base opacity-80">All Day (* We do not serve on holidays)</p>
        </div>
      </aside>
    </footer>
  );
}
