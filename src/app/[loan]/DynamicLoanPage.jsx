// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CheckCircle, ChevronDown } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";

// // Import your centralized data
// // import { loansData } from "@/data/loansData";

// import { loanEligibilityDocuments } from "@/data/loanEligibilityDocuments";

// const ActionButton = ({ onClick, children, iconSrc }) => (
//   <button
//     onClick={onClick}
//     className="flex flex-col h-6 items-start cursor-pointer  gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors"
//   >
//     <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mb-[-1.00px]">
//       <div className="inline-flex items-center justify-end gap-3 relative border-b-2 border-[#ffc73c]">
//         <span className="relative text-yellow-400 font-bold">{children}</span>
//       </div>
//       <img
//         className="absolute w-3 h-3 top-0.5 -left-5"
//         alt="Arrow"
//         src={iconSrc}
//       />
//     </div>
//   </button>
// );

// // ==================== DYNAMIC ELIGIBILITY MODAL ====================
// const DynamicEligibility = ({ onClose, loanSlug }) => {
//   const rawEligibility = loanEligibilityDocuments[loanSlug]?.eligibility || {};

//   const eligibilityCriteria = Object.entries(rawEligibility).map(
//     ([title, criteria]) => {
//       const imageMap = {
//         "For Salaried Individuals":
//           "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
//         "For Self-Employed Individuals":
//           "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
//         "For Proprietary / Partnership Firms":
//           "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
//         "For Private Limited Companies":
//           "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
//         "Eligibility Criteria":
//           "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
//       };

//       return {
//         title,
//         image:
//           imageMap[title] ||
//           "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
//         criteria,
//       };
//     }
//   );

//   if (eligibilityCriteria.length === 0) return null;

//   return (
//     <motion.div
//       initial={{ x: "-100%" }}
//       animate={{ x: 0 }}
//       exit={{ x: "-100%" }}
//       transition={{ type: "tween", duration: 0.5 }}
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//     >
//       <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full h-[90vh] overflow-y-auto relative">

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
//           aria-label="Close eligibility modal"
//         >
//           ✕
//         </button>

//         <div className="h-full">
//           <section className="flex flex-col items-center gap-12 px-6 md:px-12 py-16">
//             <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
//               <p className="text-gray-600 font-bold text-sm tracking-wide uppercase">
//                 The Results Speak for Themselves
//               </p>
//               <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800">
//                 Eligibility Criteria
//               </h1>
//             </div>

//             <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
//               {eligibilityCriteria.map((section) => (
//                 <div
//                   key={section.title}
//                   className="flex-1 bg-white p-6 rounded-lg lg:rounded-none lg:first:rounded-l-lg lg:last:rounded-r-lg lg:[&:not(:first-child)]:border-l lg:border-dashed lg:border-gray-300"
//                 >
//                   <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
//                     <div className="flex flex-col gap-6 flex-1">
//                       <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800">
//                         {section.title}
//                       </h2>
//                       <ul className="flex flex-col gap-4">
//                         {section.criteria.map((criterion, i) => (
//                           <li key={i} className="flex items-center gap-3">
//                             <CheckCircle className="w-6 h-6 text-gray-800 flex-shrink-0" />
//                             <span className="text-gray-800 text-base">
//                               {criterion}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="flex items-center justify-center flex-shrink-0">
//                       <img
//                         className="w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 object-cover rounded-lg"
//                         alt={`Illustration for ${section.title}`}
//                         src={section.image}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // ==================== DYNAMIC DOCUMENT MODAL ====================
// const DynamicDocumentRequired = ({ onClose, loanSlug }) => {
//   const docs = loanEligibilityDocuments[loanSlug]?.documents || {};
//   const hasSalaried = !!docs.salaried;
//   const hasSelfEmployed = !!docs.selfEmployed;

//   if (!hasSalaried && !hasSelfEmployed) return null;

//   const DocumentSection = ({ title, categories }) => (
//     <div>
//       <p className="text-gray-600 font-bold text-sm underline py-4 tracking-wide uppercase text-center">
//         {title}
//       </p>
//       <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
//         {Object.entries(categories).map(([category, items], index) => (
//           <div
//             key={category}
//             className={`flex-1 p-6 rounded-lg lg:rounded-none ${
//               index > 0 ? "lg:border-l border-dashed border-gray-300" : ""
//             }`}
//           >
//             <h2 className="text-lg sm:text-xl font-normal text-gray-800 mb-6">
//               {category}
//             </h2>
//             <ul className="flex flex-col gap-4">

//               {items.map((item, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   {/* SVG Icon */}
//                   <img
//                     src="/tick-square.svg"
//                     alt=""
//                     className="h-6 w-6 flex-shrink-0"
//                   />

//                   {/* Text */}
//                   <span className="text-base text-gray-800">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <motion.div
//       initial={{ x: "-100%" }}
//       animate={{ x: 0 }}
//       exit={{ x: "-100%" }}
//       transition={{ type: "tween", duration: 0.5 }}
//       className="fixed inset-0  z-50 flex items-center justify-center p-4"
//     >
//       <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full h-[90vh] overflow-y-auto relative">

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
//           aria-label="Close eligibility modal"
//         >
//           ✕
//         </button>

//         <div className="h-full">
//           <section className="flex flex-col items-center px-6 md:px-12 py-16">
//             <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
//                 Document Required
//               </h1>
//             </div>

//             {hasSalaried && (
//               <DocumentSection
//                 title={hasSelfEmployed ? "For Salaried Individuals" : ""}
//                 categories={docs.salaried}
//               />
//             )}

//             {hasSelfEmployed && (
//               <DocumentSection
//                 title="For Self-Employed Individuals"
//                 categories={docs.selfEmployed}
//               />
//             )}
//           </section>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const DynamicLoanPage = ({ loanData, loanSlug }) => {

//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const data = loanData;
//   const finalTitle = data.title;
//   const baseurl = "https://admin.finsbee.com";
//   const heroBgImage = baseurl + data.backgroundImage
//     ? baseurl + data.backgroundImage
//     : "/landing_page/bg.webp";

//   // Auto apply from URL
//   const autoApply = searchParams.get("autoApply");

//   const [showOverlay, setShowOverlay] = useState(false);
//   const [overlayTitle, setOverlayTitle] = useState("");
//   const [activeTab, setActiveTab] = useState("why-finsbee");
//   const [openFaq, setOpenFaq] = useState(-1);
//   const [showFlutter, setShowFlutter] = useState(false);
//   const [isTabClicked, setIsTabClicked] = useState(false);

//   const sidebarRef = useRef(null);
//   const headerRef = useRef(null);

//   const sectionRefs = {
//     "why-finsbee": useRef(null),
//     faqs: useRef(null),
//   };

//   const tabs = [
//     { id: "why-finsbee", label: "Finsbee Features" },
//     { id: "faqs", label: "FAQ's" },
//   ];

//   useEffect(() => {
//     if (autoApply === "true") {
//       setShowFlutter(true);
//       setTimeout(() => {
//         sidebarRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }, 500);
//     }
//   }, [autoApply]);

//   const handleTabClick = (tabId) => {
//     const targetRef = sectionRefs[tabId];
//     if (targetRef?.current && headerRef?.current) {
//       const headerHeight =
//         headerRef.current.getBoundingClientRect().height || 56;
//       const elementTop =
//         targetRef.current.getBoundingClientRect().top + window.scrollY;
//       window.scrollTo({
//         top: elementTop - headerHeight - 10,
//         behavior: "smooth",
//       });
//       setActiveTab(tabId);
//       setIsTabClicked(true);
//       setTimeout(() => setIsTabClicked(false), 1000);
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !isTabClicked) {
//             const id = entry.target.getAttribute("data-tab-id");
//             if (id) setActiveTab(id);
//           }
//         });
//       },
//       { rootMargin: "-20% 0px -60% 0px" }
//     );

//     Object.values(sectionRefs).forEach((ref) => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       Object.values(sectionRefs).forEach((ref) => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, [isTabClicked]);

//   const handleOpen = (title) => {
//     if (["Eligibility Criteria", "Document Required"].includes(title)) {
//       setOverlayTitle(title);
//       setShowOverlay(true);
//     }
//   };

//   const closeOverlay = () => {
//     setShowOverlay(false);
//     setOverlayTitle("");
//   };

//   return (
//     <>
//       {/* HERO SECTION */}
//       <div
//         className="flex flex-col h-[43rem] sm:h-[40rem] md:h-[48rem] lg:h-[600px]
//     items-start gap-10 sm:gap-20 md:gap-[150px]
//     pt-20 sm:pt-28 md:pt-40
//     relative self-stretch w-full
//     rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-[0px_0px_120px_120px]"
//         style={{
//           backgroundImage: `
//       radial-gradient(100% 100% at 50% 100%, rgba(89,46,255), rgba(49,25,140,0.7) 100%),
//       url('${heroBgImage}')
//     `,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <main className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-12 lg:px-32 py-8 lg:py-12 relative w-full">
//           <div className="flex flex-col items-center gap-12 relative flex-1">
//             <div className="flex flex-col  lg:flex-row items-start justify-between relative w-full">
//               <section className="flex flex-col w-full lg:w-[650px] items-start relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
//                 <h1 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl md:text-6xl text-start leading-normal lg:leading-20 tracking-[0px] whitespace-pre-line">
//                   {finalTitle}
//                 </h1>
//                 <p className="text-[#FFEEC3] md:pt-2 text-lg md:text-xl">
//                   {data.heroDescription}
//                 </p>
//               </section>

//               <aside className="flex flex-col w-full lg:w-[471px] items-start gap-3.5 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
//                 <div className="flex flex-col lg:flex-row flex-wrap items-start justify-between relative w-full">
//                   <div className="flex flex-col items-start gap-3.5 relative flex-1">
//                     {data.features.map((feature, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-3 font-extralight text-white py-0 relative w-full"
//                       >
//                         <img
//                           className="w-6 h-6"
//                           alt="Tick"
//                           src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg"
//                         />
//                         <span className="flex-1 text-[#FFEEC3]">{feature}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex flex-col items-start justify-between relative flex-1">
//                     <div className="flex flex-col items-start gap-4 pt-2 relative w-full">
//                       <ActionButton
//                         onClick={() => handleOpen("Eligibility Criteria")}
//                         iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
//                       >
//                         Check Eligibility Criteria
//                       </ActionButton>
//                       <ActionButton
//                         onClick={() => handleOpen("Document Required")}
//                         iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
//                       >
//                         Check Document Required
//                       </ActionButton>
//                     </div>

//                     <div className="flex items-center justify-around p-5 relative w-full">
//                       <button
//                         onClick={() =>
//                           router.push(data.emiRoute || "/personal-loan/pl_Emi")
//                         }
//                         className="inline-flex items-center cursor-pointer bg-yellow-400 justify-center gap-2.5 px-7 py-4 rounded-[28px] border border-solid border-[#ffe5a5] hover:bg-yellow-500 transition-colors"
//                       >
//                         <span className="font-bold text-gray-800 ">
//                           Calculate EMI
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* BENEFIT CARDS */}
//       <section className="flex flex-col items-center gap-2.5 px-4 sm:px-8 md:px-[136px] py-0 w-full mt-5 lg:mt-[-60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
//         <div className="flex flex-col items-center w-full">
//           <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 w-full rounded-[20px] lg:rounded-[28px_28px_0px_0px] shadow-[0px_-12px_11px_#00000026] bg-[linear-gradient(180deg,rgba(255,238,195,1)_0%,rgba(250,250,250,0)_100%)] bg-white border-0">
//             {data.benefitCards.map((card, index) => (
//               <div
//                 key={card.benefit_id}
//                 className={`flex flex-col items-start justify-center gap-2 p-4 sm:p-6 w-full sm:w-[48%] md:w-[45%] lg:flex-1 h-auto ${
//                   index < data.benefitCards.length - 1
//                     ? "lg:border-r lg:[border-right-style:solid] lg:border-[#ffd97c]"
//                     : ""
//                 }`}
//               >
//                 <img
//                   className="w-10 h-10 sm:w-12 sm:h-12"
//                   alt={card.title}
//                   src={baseurl + card.icon}
//                 />
//                 <h3 className="font-bold text-[#212121] text-lg sm:text-xl">
//                   {card.title}
//                 </h3>
//                 <p className="text-[#555] text-sm sm:text-base leading-snug">
//                   {card.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY FINSBEE + FAQ SECTION */}
//       <div className="relative flex flex-col-reverse lg:flex-row gap-8 sm:px-8 md:px-16 lg:px-[136px] py-12 md:py-16 lg:py-24 bg-white min-h-screen">
//         <div className="w-full lg:w-2/3">
//           <div className="flex flex-col items-start w-full">
//             <div
//               ref={headerRef}
//               className="sticky top-0 z-30 w-full bg-white border-b border-[#bababa] overflow-hidden pt-2"
//             >
//               <div className="flex w-full overflow-hidden">
//                 {tabs.map((tab, index, arr) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => handleTabClick(tab.id)}
//                     className={`flex-1 h-14 px-3 py-4 font-bold text-base bg-white transition-colors duration-300
//                       ${
//                         activeTab === tab.id
//                           ? "bg-yellow-400 text-gray-900"
//                           : "text-gray-400 bg-white hover:text-gray-700"
//                       }
//                       ${index === 0 ? "rounded-tl-[40px]" : ""}
//                       ${index === arr.length - 1 ? "rounded-tr-[40px]" : ""}`}
//                   >
//                     {tab.label}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="w-full pt-16">
//               {/* Why Finsbee */}
//               <section
//                 ref={sectionRefs["why-finsbee"]}
//                 data-tab-id="why-finsbee"
//                 className="pt-4 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8"
//               >
//                 <div className="px-4 mb-4">
//                   <div className="text-xl font-normal text-gray-900 mb-2.5">
//                     Finsbee<span className="font-bold"> Features</span>
//                   </div>
//                   <div
//                     className="w-11 h-px mb-[-1px]"
//                     style={{
//                       backgroundImage:
//                         "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
//                     }}
//                   ></div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:justify-start gap-4 md:px-4 mb-4">
//                   {data.whyFinsbeeFeatures.map((feature, i) => (
//                     <div key={i} className="w-full h-full">
//                       <div className="flex flex-col items-start gap-2 p-4 h-full">
//                         <img
//                           className="w-12 h-12 object-cover"
//                           alt={feature.title}
//                           src={baseurl + feature.icon}
//                         />
//                         <h3 className="font-bold text-base">{feature.title}</h3>
//                         <p className="font-normal text-base text-gray-500">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               {/* FAQ */}
//               <section
//                 ref={sectionRefs.faqs}
//                 data-tab-id="faqs"
//                 className="flex flex-col gap-2 pt-8 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8"
//               >
//                 <div className="px-4 mb-4">
//                   <div className="text-xl font-normal text-gray-900 mb-2.5">
//                     <span className="font-bold">FAQ's</span>
//                   </div>
//                   <div
//                     className="w-11 h-px mb-[-1px]"
//                     style={{
//                       backgroundImage:
//                         "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
//                     }}
//                   ></div>
//                 </div>
//                 {data.faqItems.map((faq, index) => (
//                   <div key={index}>
//                     <button
//                       onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
//                       className={`w-full flex items-center justify-between gap-6 px-4 sm:px-6 py-4 sm:py-6 bg-primary-light rounded-xl border transition-all ${
//                         openFaq === index
//                           ? "border-[#b39fff] shadow-md rounded-b-none"
//                           : "border-[#592eff33]"
//                       }`}
//                     >
//                       <h3
//                         className={`font-bold text-base ${
//                           openFaq === index
//                             ? "text-purple-600"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {faq.question}
//                       </h3>
//                       <ChevronDown
//                         className={`w-6 h-6 text-gray-400 transition-transform ${
//                           openFaq === index ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {openFaq === index && (
//                       <div className="px-4 sm:px-8 py-4 bg-primary-light border-x border-b border-[#b39fff] rounded-b-xl shadow-md">
//                         <p className="text-base text-gray-500">{faq.answer}</p>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </section>
//             </div>
//           </div>
//         </div>

//         {/* SIDEBAR - APPLY NOW */}
//         <div
//           ref={sidebarRef}
//           className="w-full lg:w-1/3 flex justify-center lg:justify-end"
//         >
//           <div className="sticky top-0 pt-2 self-start h-fit w-full max-w-[432px]">
//             {showFlutter ? (
//               <div className="w-full h-[90vh] border-[6px] border-yellow-400 rounded-2xl overflow-hidden">
//                 <iframe
//                   src="/flutterapp/index.html#/minified:p3"
//                   className="w-full h-full border-0"
//                 />
//               </div>
//             ) : (
//               <div className="border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden shadow-lg">
//                 <div className="pt-12 pb-0 px-6">
//                   <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-normal">
//                     Quick approval Loan
//                   </h2>
//                 </div>
//                 <div className="rounded-[60px_16px_16px_16px] p-6 md:p-8 mt-8 flex flex-col gap-16">
//                   <div className="flex flex-col items-center gap-2.5 py-2.5">
//                     <button
//                       onClick={() => setShowFlutter(true)}
//                       className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 cursor-pointer rounded-lg text-base font-bold text-gray-900 hover:bg-yellow-500"
//                     >
//                       Apply Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* MODALS - NOW WORKING CORRECTLY */}
//       <AnimatePresence>
//         {showOverlay && overlayTitle === "Eligibility Criteria" && (
//           <DynamicEligibility onClose={closeOverlay} loanSlug={loanSlug} />
//         )}
//         {showOverlay && overlayTitle === "Document Required" && (
//           <DynamicDocumentRequired onClose={closeOverlay} loanSlug={loanSlug} />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default DynamicLoanPage;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { setAuth } from "@/lib/authStorage";

import { getAuth, isAuthValid, clearAuth } from "@/lib/authStorage";

import { loanRouteMap } from "@/config/loanRouteMap";

import { loanEligibilityDocuments } from "@/data/loanEligibilityDocuments";
import OTPInput from "@/loanComponent/ui/OTPInput";
import { SecurityHint } from "@/loanComponent/ui/SecurityHint";

const ActionButton = ({ onClick, children, iconSrc }) => (
  <button
    onClick={onClick}
    className="flex flex-col h-6 items-start cursor-pointer gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors"
  >
    <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mb-[-1.00px]">
      <div className="inline-flex items-center justify-end gap-3 relative border-b-2 border-[#ffc73c]">
        <span className="relative text-yellow-400 font-bold">{children}</span>
      </div>
      <img
        className="absolute w-3 h-3 top-0.5 -left-5"
        alt="Arrow"
        src={iconSrc}
      />
    </div>
  </button>
);

// ==================== DYNAMIC ELIGIBILITY MODAL ====================
const DynamicEligibility = ({ onClose, loanSlug }) => {
  const rawEligibility = loanEligibilityDocuments[loanSlug]?.eligibility || {};

  const eligibilityCriteria = Object.entries(rawEligibility).map(
    ([title, criteria]) => {
      const imageMap = {
        "For Salaried Individuals":
          "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
        "For Self-Employed Individuals":
          "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
        "For Proprietary / Partnership Firms":
          "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
        "For Private Limited Companies":
          "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
        "Eligibility Criteria":
          "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
      };

      return {
        title,
        image:
          imageMap[title] ||
          "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
        criteria,
      };
    }
  );

  if (eligibilityCriteria.length === 0) return null;

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
          aria-label="Close eligibility modal"
        >
          ✕
        </button>

        <div className="h-full">
          <section className="flex flex-col items-center gap-12 px-6 md:px-12 py-16">
            <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
              <p className="text-gray-600 font-bold text-sm tracking-wide uppercase">
                The Results Speak for Themselves
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800">
                Eligibility Criteria
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
              {eligibilityCriteria.map((section) => (
                <div
                  key={section.title}
                  className="flex-1 bg-white p-6 rounded-lg lg:rounded-none lg:first:rounded-l-lg lg:last:rounded-r-lg lg:[&:not(:first-child)]:border-l lg:border-dashed lg:border-gray-300"
                >
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                    <div className="flex flex-col gap-6 flex-1">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800">
                        {section.title}
                      </h2>
                      <ul className="flex flex-col gap-4">
                        {section.criteria.map((criterion, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-gray-800 flex-shrink-0" />
                            <span className="text-gray-800 text-base">
                              {criterion}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 object-cover rounded-lg"
                        alt={`Illustration for ${section.title}`}
                        src={section.image}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== DYNAMIC DOCUMENT MODAL ====================
const DynamicDocumentRequired = ({ onClose, loanSlug }) => {
  const docs = loanEligibilityDocuments[loanSlug]?.documents || {};
  const hasSalaried = !!docs.salaried;
  const hasSelfEmployed = !!docs.selfEmployed;

  if (!hasSalaried && !hasSelfEmployed) return null;

  const DocumentSection = ({ title, categories }) => (
    <div>
      <p className="text-gray-600 font-bold text-sm underline py-4 tracking-wide uppercase text-center">
        {title}
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
        {Object.entries(categories).map(([category, items], index) => (
          <div
            key={category}
            className={`flex-1 p-6 rounded-lg lg:rounded-none ${
              index > 0 ? "lg:border-l border-dashed border-gray-300" : ""
            }`}
          >
            <h2 className="text-lg sm:text-xl font-normal text-gray-800 mb-6">
              {category}
            </h2>
            <ul className="flex flex-col gap-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <img
                    src="/tick-square.svg"
                    alt=""
                    className="h-6 w-6 flex-shrink-0"
                  />
                  <span className="text-base text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
          aria-label="Close eligibility modal"
        >
          ✕
        </button>

        <div className="h-full">
          <section className="flex flex-col items-center px-6 md:px-12 py-16">
            <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Document Required
              </h1>
            </div>

            {hasSalaried && (
              <DocumentSection
                title={hasSelfEmployed ? "For Salaried Individuals" : ""}
                categories={docs.salaried}
              />
            )}

            {hasSelfEmployed && (
              <DocumentSection
                title="For Self-Employed Individuals"
                categories={docs.selfEmployed}
              />
            )}
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const DynamicLoanPage = ({ loanData, loanSlug }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const data = loanData;
  const finalTitle = data.title;
  const baseurl = "https://admin.finsbee.com";
  const heroBgImage =
    baseurl + data.backgroundImage
      ? baseurl + data.backgroundImage
      : "/landing_page/bg.webp";

  const autoApply = searchParams.get("autoApply");

  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTitle, setOverlayTitle] = useState("");
  const [activeTab, setActiveTab] = useState("why-finsbee");
  const [openFaq, setOpenFaq] = useState(-1);
  const [showFlutter, setShowFlutter] = useState(false);
  const [isTabClicked, setIsTabClicked] = useState(false);

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestId, setRequestId] = useState("");
  const [timer, setTimer] = useState(0);
  const pathname = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authChecked, setAuthChecked] = useState(false); // NEW
  const [step, setStep] = useState("phone");

  useEffect(() => {
    const auth = getAuth();
    const valid = auth && isAuthValid(auth);

    setIsLoggedIn(valid);
    setAuthChecked(true); // prevent flicker

    if (valid) {
      setStep("done"); // hide phone/otp
    } else {
      setStep("phone");
    }
  }, []);

  const API_KEY = "ab163828-7d8d-11f0-a562-0200cd936042";
  const validateMobile = (num) => /^[6-9]\d{9}$/.test(num.trim());
  const sendOtp = async () => {
    const trimmed = mobile.trim();

    if (!validateMobile(trimmed)) {
      setError("Enter valid 10-digit mobile number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      if (!API_KEY) throw new Error("2Factor API key missing.");

      // ✅ Updated URL with OTP Verify template
      const url = `/twofactor/API/V1/${API_KEY}/SMS/+91${trimmed}/AUTOGEN/OTP%20Verify?var1=${trimmed}`;

      const res = await fetch(url);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (data?.Status === "Success" && data?.Details) {
        setRequestId(data.Details); // Save session/request ID
        setStep("otp");
        toast.success("OTP sent!");
        return;
      }

      throw new Error(data?.Details || data?.message || "Failed to send OTP");
    } catch (err) {
      toast.error(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter 6-digit OTP");
      return false;
    }

    setError("");
    setLoading(true);

    try {
      // 1️⃣ VERIFY OTP
      const verifyUrl = `/twofactor/API/V1/${API_KEY}/SMS/VERIFY/${requestId}/${otp}`;
      const verifyRes = await fetch(verifyUrl);

      if (!verifyRes.ok) throw new Error(`HTTP ${verifyRes.status}`);

      const verifyData = await verifyRes.json();

      if (verifyData.Status !== "Success") {
        throw new Error(verifyData.Details || "Invalid OTP");
      }

      toast.success("OTP Verified!");

      // 2️⃣ AUTHENTICATE ODOO (COOKIE SESSION)
      const authRes = await fetch("/api/web/session/authenticate", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });

      const authData = await authRes.json();

      if (!authData?.success) {
        throw new Error("Odoo authentication failed");
      }

      const phone = mobile.trim();

      // 3️⃣ CREATE / CHECK CUSTOMER
      const customerRes = await fetch("/api/create/customer", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            name: `User ${phone}`,
            phone: phone,
            source_id: "finsbee-website",
          },
        }),
      });

      const customerData = await customerRes.json();
      const result = customerData?.result?.[0];

      if (!result?.CustomerId) {
        throw new Error("Failed to get CustomerId");
      }

      setAuth({
        sessionId: authData.session_id,
        customerId: result.CustomerId,
        phone: phone,
        expiresAt: Date.now() + 24 * 60 * 60 * 1000,
      });

      // Optional (if you still use these)
      localStorage.setItem("originalCustomerId", String(result.CustomerId));
      localStorage.setItem("verifiedPhone", phone);

      setIsLoggedIn(true);

      return true;
    } catch (err) {
      toast.error(err.message || "Login failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (step === "otp" && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const sidebarRef = useRef(null);
  const headerRef = useRef(null);

  const sectionRefs = {
    "why-finsbee": useRef(null),
    faqs: useRef(null),
  };

  const tabs = [
    { id: "why-finsbee", label: "Finsbee Features" },
    { id: "faqs", label: "FAQ's" },
  ];

  useEffect(() => {
    if (autoApply === "true") {
      setShowFlutter(true);
      setTimeout(() => {
        sidebarRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    }
  }, [autoApply]);

  const handleTabClick = (tabId) => {
    const targetRef = sectionRefs[tabId];
    if (targetRef?.current && headerRef?.current) {
      const headerHeight =
        headerRef.current.getBoundingClientRect().height || 56;
      const elementTop =
        targetRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - headerHeight - 10,
        behavior: "smooth",
      });
      setActiveTab(tabId);
      setIsTabClicked(true);
      setTimeout(() => setIsTabClicked(false), 1000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTabClicked) {
            const id = entry.target.getAttribute("data-tab-id");
            if (id) setActiveTab(id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [isTabClicked]);

  const handleOpen = (title) => {
    if (["Eligibility Criteria", "Document Required"].includes(title)) {
      setOverlayTitle(title);
      setShowOverlay(true);
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayTitle("");
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="flex flex-col h-[43rem] sm:h-[40rem] md:h-[48rem] lg:h-[600px]
        items-start gap-10 sm:gap-20 md:gap-[150px]
        pt-20 sm:pt-28 md:pt-40
        relative self-stretch w-full
        rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-[0px_0px_120px_120px]"
        style={{
          backgroundImage: `
            radial-gradient(100% 100% at 50% 100%, rgba(89,46,255), rgba(49,25,140,0.7) 100%),
            url('${heroBgImage}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <main className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-12 lg:px-32 py-8 lg:py-12 relative w-full">
          <div className="flex flex-col items-center gap-12 relative flex-1">
            <div className="flex flex-col lg:flex-row items-start justify-between relative w-full">
              <section className="flex flex-col w-full lg:w-[650px] items-start relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <h1 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl md:text-6xl text-start leading-normal lg:leading-20 tracking-[0px] whitespace-pre-line">
                  {finalTitle}
                </h1>
                <p className="text-[#FFEEC3] md:pt-2 text-lg md:text-xl">
                  {data.heroDescription}
                </p>
              </section>

              <aside className="flex flex-col w-full lg:w-[471px] items-start gap-3.5 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                <div className="flex flex-col lg:flex-row flex-wrap items-start justify-between relative w-full">
                  <div className="flex flex-col items-start gap-3.5 relative flex-1">
                    {data.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 font-extralight text-white py-0 relative w-full"
                      >
                        <img
                          className="w-6 h-6"
                          alt="Tick"
                          src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg"
                        />
                        <span className="flex-1 text-[#FFEEC3]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start justify-between relative flex-1">
                    <div className="flex flex-col items-start gap-4 pt-2 relative w-full">
                      <ActionButton
                        onClick={() => handleOpen("Eligibility Criteria")}
                        iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
                      >
                        Check Eligibility Criteria
                      </ActionButton>
                      <ActionButton
                        onClick={() => handleOpen("Document Required")}
                        iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
                      >
                        Check Document Required
                      </ActionButton>
                    </div>

                    <div className="flex items-center justify-around p-5 relative w-full">
                      <button
                        onClick={() =>
                          router.push(data.emiRoute || "/personal-loan/pl_Emi")
                        }
                        className="inline-flex items-center cursor-pointer bg-yellow-400 justify-center gap-2.5 px-7 py-4 rounded-[28px] border border-solid border-[#ffe5a5] hover:bg-yellow-500 transition-colors"
                      >
                        <span className="font-bold text-gray-800">
                          Calculate EMI
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>

      {/* BENEFIT CARDS */}
      <section className="flex flex-col items-center gap-2.5 px-4 sm:px-8 md:px-[136px] py-0 w-full mt-5 lg:mt-[-60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 w-full rounded-[20px] lg:rounded-[28px_28px_0px_0px] shadow-[0px_-12px_11px_#00000026] bg-[linear-gradient(180deg,rgba(255,238,195,1)_0%,rgba(250,250,250,0)_100%)] bg-white border-0">
            {data.benefitCards.map((card, index) => (
              <div
                key={card.benefit_id}
                className={`flex flex-col items-start justify-center gap-2 p-4 sm:p-6 w-full sm:w-[48%] md:w-[45%] lg:flex-1 h-auto ${
                  index < data.benefitCards.length - 1
                    ? "lg:border-r lg:[border-right-style:solid] lg:border-[#ffd97c]"
                    : ""
                }`}
              >
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  alt={card.title}
                  src={baseurl + card.icon}
                />
                <h3 className="font-bold text-[#212121] text-lg sm:text-xl">
                  {card.title}
                </h3>
                <p className="text-[#555] text-sm sm:text-base leading-snug">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FINSBEE + FAQ SECTION */}
      <div className="relative flex flex-col-reverse lg:flex-row gap-8 sm:px-8 md:px-16 lg:px-[136px] py-12 md:py-16 lg:py-24 bg-white min-h-screen">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-start w-full">
            <div
              ref={headerRef}
              className="sticky top-0 z-30 w-full bg-white border-b border-[#bababa] overflow-hidden pt-2"
            >
              <div className="flex w-full overflow-hidden">
                {tabs.map((tab, index, arr) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex-1 h-14 px-3 py-4 font-bold text-base bg-white transition-colors duration-300 
                      ${
                        activeTab === tab.id
                          ? "bg-yellow-400 text-gray-900"
                          : "text-gray-400 bg-white hover:text-gray-700"
                      }
                      ${index === 0 ? "rounded-tl-[40px]" : ""}
                      ${index === arr.length - 1 ? "rounded-tr-[40px]" : ""}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full pt-16">
              {/* Why Finsbee */}
              <section
                ref={sectionRefs["why-finsbee"]}
                data-tab-id="why-finsbee"
                className="pt-4 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8"
              >
                <div className="px-4 mb-4">
                  <div className="text-xl font-normal text-gray-900 mb-2.5">
                    Finsbee<span className="font-bold"> Features</span>
                  </div>
                  <div
                    className="w-11 h-px mb-[-1px]"
                    style={{
                      backgroundImage:
                        "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                    }}
                  ></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:justify-start gap-4 md:px-4 mb-4">
                  {data.whyFinsbeeFeatures.map((feature, i) => (
                    <div key={i} className="w-full h-full">
                      <div className="flex flex-col items-start gap-2 p-4 h-full">
                        <img
                          className="w-12 h-12 object-cover"
                          alt={feature.title}
                          src={baseurl + feature.icon}
                        />
                        <h3 className="font-bold text-base">{feature.title}</h3>
                        <p className="font-normal text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section
                ref={sectionRefs.faqs}
                data-tab-id="faqs"
                className="flex flex-col gap-2 pt-8 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8"
              >
                <div className="px-4 mb-4">
                  <div className="text-xl font-normal text-gray-900 mb-2.5">
                    <span className="font-bold">FAQ's</span>
                  </div>
                  <div
                    className="w-11 h-px mb-[-1px]"
                    style={{
                      backgroundImage:
                        "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                    }}
                  ></div>
                </div>
                {data.faqItems.map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className={`w-full flex items-center justify-between gap-6 px-4 sm:px-6 py-4 sm:py-6 bg-primary-light rounded-xl border transition-all ${
                        openFaq === index
                          ? "border-[#b39fff] shadow-md rounded-b-none"
                          : "border-[#592eff33]"
                      }`}
                    >
                      <h3
                        className={`font-bold text-base ${
                          openFaq === index
                            ? "text-purple-600"
                            : "text-gray-600"
                        }`}
                      >
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-400 transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 sm:px-8 py-4 bg-primary-light border-x border-b border-[#b39fff] rounded-b-xl shadow-md">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>

        {/* SIDEBAR - APPLY LOAN FLOW */}
        {authChecked ? (
          <div
            ref={sidebarRef}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end"
          >
            <div className="sticky top-0 pt-2 self-start  w-full max-w-[432px]">
              <div className="border-[6px] border-yellow-400 rounded-2xl bg-white shadow-lg h-[438px] overflow-hidden">
                {isLoggedIn ? (
                  // Logged-in: Apply Now + Logout
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4  mt-10">Welcome Back 👋</h2>
                    <p className="text-gray-600 mb-6">
                      Continue your loan application.
                    </p>

                    <button
                      onClick={() => {
                        const loanType =
                          loanRouteMap[pathname] || "personal-loan";
                        router.push(`/${loanType}/form`);
                      }}
                      className="w-full py-4 rounded-lg font-bold bg-yellow-400 hover:bg-yellow-500"
                    >
                      Apply Now
                    </button>

                    <button
                      onClick={() => {
                        clearAuth();
                        localStorage.removeItem("originalCustomerId");
                        localStorage.removeItem("verifiedPhone");
                        setIsLoggedIn(false);
                        setStep("phone");
                      }}
                      className="w-full mt-4 text-sm text-gray-500 underline"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  // Not logged-in: Phone → OTP flow
                  <>
                    {step === "phone" && (
                      <div className="p-8 ">
                        <h2 className="text-2xl font-bold mb-6">
                          Your phone number?
                        </h2>

                        <div className="border rounded-xl px-5 py-7  flex items-center mb-7">
                          <span className="text-gray-500 mr-2">+91</span>
                          <input
                            type="tel"
                            maxLength={10}
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter mobile no."
                            className="w-full outline-none"
                          />
                        </div>

                        <p className="text-sm text-gray-600 mb-7">
                          By creating an account you agree to our Terms and
                          Privacy Policy
                        </p>

                        <SecurityHint/>

                        <button
                          onClick={sendOtp}
                          disabled={loading}
                          className="w-full px-5 py-6 rounded-lg font-bold bg-yellow-400 hover:bg-yellow-500"
                        >
                          {loading ? "Sending..." : "Apply Loan"}
                        </button>
                      </div>
                    )}

                    {step === "otp" && (
                      <div className="p-8">
                        <div className="mb-2 text-sm text-gray-500 mt-8">
                          {mobile}
                          <span
                            className="underline cursor-pointer ml-2"
                            onClick={() => setStep("phone")}
                          >
                            Change
                          </span>
                        </div>

                        <h2 className="text-3xl font-bold mb-6">Verify OTP</h2>

                        {/* <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter 6-digit OTP"
                  className="w-full p-4 text-center text-2xl tracking-[10px] border rounded-xl outline-none mb-6"
                /> */}
                        <OTPInput
                          length={6}
                          onComplete={(value) => {
                            setOtp(value);
                            setError("");

                          }}
                          
                        />
                       <SecurityHint />
                        <button
                          onClick={async () => {
                            const success = await verifyOtp();
                            if (success) {
                              setIsLoggedIn(true);
                              setStep("done");
                            }
                          }}
                          disabled={loading}
                          className="w-full py-4 rounded-lg font-bold bg-yellow-400 hover:bg-yellow-500"
                        >
                          {loading ? "Verifying..." : "Submit OTP"}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Prevent flicker before auth check
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="sticky top-0 pt-2 self-start h-fit w-full max-w-[432px]">
              <div className="border-[6px] border-yellow-400 rounded-2xl bg-white shadow-lg overflow-hidden p-8 text-center animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODALS */}
      <AnimatePresence>
        {showOverlay && overlayTitle === "Eligibility Criteria" && (
          <DynamicEligibility onClose={closeOverlay} loanSlug={loanSlug} />
        )}
        {showOverlay && overlayTitle === "Document Required" && (
          <DynamicDocumentRequired onClose={closeOverlay} loanSlug={loanSlug} />
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicLoanPage;
