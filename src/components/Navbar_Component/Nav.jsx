// // "use client";

// // import React, { useState, useMemo } from "react";
// // import { useRouter } from "next/navigation";
// // import { motion, AnimatePresence } from "framer-motion";

// // const menuData = {
// //   "Personal loan": {
// //     column1: [
// //       { label: "Personal loan Interest Rates", path: "/Pl" },
// //       { label: "Documents Required For Personal Loan", path: "/Pl" },
// //       { label: "Personal Loan EMI Calculator", path: "/Pl/pl_Emi" },
// //       { label: "CIBIL Score for Personal Loan", path: "/Pl" },
// //       { label: "Personal Loan App", path: "/Pl" },
// //       { label: "Instant Cash Loan", path: "/Pl" },
// //       { label: "Short Term Loan", path: "/Pl" },
// //     ],
// //     column2: [
// //       { label: "Education Loan", path: "/Pl" },
// //       { label: "Medical Loan for Emergency", path: "/Pl" },
// //       { label: "Travel Loan", path: "/Pl" },
// //       { label: "Home Renovation Loan", path: "/Pl" },
// //       { label: "Marriage Loan", path: "/Pl" },
// //       { label: "Women Loan", path: "/Pl" },
// //       { label: "Quick Loans Online", path: "/Pl" },
// //     ],
// //     column3: [
// //       { label: "Doctor Loan", path: "/Pl" },
// //       { label: "Personal Loan For Self Employed", path: "/Pl" },
// //       { label: "Personal Loan for Government Employees", path: "/Pl" },
// //       { label: "Personal Loan For Salaried Employees", path: "/Pl" },
// //       { label: "Emergency Loan", path: "/Pl" },
// //     ],
// //   },

// //   "Business Loan": {
// //     column1: [
// //       { label: "Business Loan Overview", path: "/Bl" },
// //       { label: "Business Loan EMI Calculator", path: "/Bl/bl_Emi" },
// //       { label: "Business Loan Eligibility", path: "/Bl" },
// //     ],
// //     column2: [
// //       { label: "Business Loan Interest Rate", path: "/Bl" },
// //       { label: "Documents Required For Business Loan", path: "/Bl" },
// //       { label: "Unsecured Business Loans", path: "/Bl" },
// //     ],
// //     column3: [
// //       { label: "Working Capital Loan", path: "/WC" },
// //       { label: "Invoice Discounting", path: "/IC" },
// //     ],
// //   },
// // //         { label: "LAP Balance Transfer", path: "/LAP" },
// // //         { label: "Loan Against Stocks", path: "/LAS" },
// // //         { label: "Loan Against Property", path: "/loanap" },
// //   "Loan Against Property": {
// //     column1: [
// //       { label: "Loan Against Property Eligibility", path: "/loanap" },
// //       { label: "Documents Required For Loan Against Property", path: "/loanap" },
// //       { label: "LAP Balance transfer", path: "/LAP" },
// //       { label: "Loan Against Property EMI Calculator", path: "/loanap/emi" },
// //       { label: "Loan Against Property Interest Rates", path: "/loanap" },
// //     ],
// //   },

// //   "Home Loan": {
// //     column1: [
// //       { label: "Home Loan EMI Calculator", path: "/HL/hl_Emi" },
// //       { label: "Documents Required For Home Loan", path: "/HL" },
// //     ],
// //   },

// //   "Loan Against Securities": {
// //     column1: [
// //       { label: "Loan Against Mutual Funds", path: "/LAS" },
// //       { label: "Loan Against Stocks", path: "/LAS" },
// //     ],
// //   },
// // };

// // const loanCategories = Object.keys(menuData);

// // export default function MegaMenu() {
// //   const [activeCategory, setActiveCategory] = useState("Personal loan");
// //   const router = useRouter();

// //   const activeData = useMemo(() => menuData[activeCategory], [activeCategory]);

// //   const handleNavigate = (path) => {
// //     if (path) router.push(path);
// //   };

// //   return (
// //     <nav className="flex max-w-[956px] items-start gap-3 px-4 py-6 bg-white rounded-b-2xl shadow-lg transition-all duration-300">
// //       {/* Left Sidebar */}
// //       <aside className="inline-flex gap-1 flex-col h-[25rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
// //         {loanCategories.map((category) => (
// //           <button
// //             key={category}
// //             onMouseEnter={() => setActiveCategory(category)}
// //             className={`w-[242px] h-[25rem] px-3 py-4 flex items-center justify-start transition-all duration-300 ${
// //               activeCategory === category
// //                 ? "bg-[#ffd263] text-[#212121] font-semibold"
// //                 : "hover:bg-[#ffebaa] text-[#6a6a6a]"
// //             }`}
// //           >
// //             {category}
// //           </button>
// //         ))}
// //       </aside>

// //       {/* Right Content */}
// //       <div className="flex flex-1 min-h-[400px] gap-3 relative overflow-hidden">
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={activeCategory}
// //             initial={{ opacity: 0, x: 20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: -20 }}
// //             transition={{ duration: 0.25, ease: "easeInOut" }}
// //             className="flex flex-1 gap-3 items-start absolute inset-0 bg-white"
// //           >
// //             {/* Render each column safely */}
// //             {["column1", "column2", "column3"].map((colKey, i) => {
// //               const column = activeData[colKey];
// //               if (!column) return null; // Skip missing columns
// //               return (
// //                 <ul
// //                   key={i}
// //                   className="flex w-[220px] gap-1 flex-col items-start"
// //                 >
// //                   {column.map((item, index) => (
// //                     <li key={index} className="p-3 w-full">
// //                       <button
// //                         onClick={() => handleNavigate(item.path)}
// //                         className="text-left  text-sm text-[#6a6a6a] hover:text-[#212121] hover:underline  transition-colors duration-200"
// //                       >
// //                         {item.label}
// //                       </button>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               );
// //             })}
// //           </motion.div>
// //         </AnimatePresence>
// //       </div>
// //     </nav>
// //   );
// // }


// "use client";

// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// // import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// export const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const navigationItems = [
//     { label: "Loan", path: "/Pl" },
//     { label: "Investment", path: "/investment" },
//   ];

//   const handleNavigation = (path) => {
//     router.push(path);
//     setIsMegaMenuOpen(false);
//     setIsSidebarOpen(false);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <nav className="absolute top-2 w-full z-50 bg-transparent">
//       <div className="flex items-center justify-between mx-auto pt-6 sm:pt-7 md:pt-8 pb-2.5 relative">
//         {/* Logo */}
//         <div
//           className="flex flex-col w-[120px] sm:w-[140px] md:w-[155.83px] cursor-pointer items-start gap-2 ml-4 sm:ml-8 md:ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0"
//           onClick={() => handleNavigation("/")}
//         >
//           <img
//             className="relative w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
//             alt="Finsbee transparent"
//             src="/FinsbeeLogo.svg"
//           />
//         </div>

//         {/* Hamburger Menu for Tablet and Mobile */}
//         <div className="lg:hidden flex items-center mr-4 sm:mr-8 md:mr-11">
//           <button onClick={toggleSidebar} className="focus:outline-none">
//             <svg
//               className="w-6 h-6 sm:w-8 sm:h-8 text-gray-200"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Navigation Buttons (Desktop) */}
//         <div
//           className="hidden lg:flex items-center justify-center cursor-pointer gap-4 md:gap-5 lg:gap-6 p-2 md:p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
//           style={{ animationDelay: "200ms" }}
//         >
//           {navigationItems.map((item) => (
//             <div
//               key={item.path}
//               className="relative"
//               onMouseEnter={() =>
//                 item.label === "Loan" && setIsMegaMenuOpen(true)
//               }
//               onMouseLeave={() =>
//                 item.label === "Loan" && setIsMegaMenuOpen(false)
//               }
//             >
//               <button
//                 className={`relative px-2 md:px-3 py-1.5 md:py-2 transition-colors cursor-pointer ${
//                   pathname === item.path
//                     ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
//                     : "rounded-lg text-gray-200 hover:bg-white/10"
//                 }`}
//                 onClick={() =>
//                   item.label !== "Loan" && handleNavigation(item.path)
//                 }
//               >
//                 <span className="relative font-normal text-sm md:text-base tracking-wide leading-normal whitespace-nowrap cursor-pointer">
//                   {item.label}
//                 </span>
//               </button>
//               {item.label === "Loan" && isMegaMenuOpen && (
//                 <div className="absolute w-[50rem] top-full left-1/2 -translate-x-1/2 mt-[0.5] z-50 cursor-pointer">
//                   <MegaMenu />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Sidebar (Tablet and Mobile) */}
//         <AnimatePresence>
//           {isSidebarOpen && (
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="lg:hidden fixed top-0 right-0 w-4/5 sm:w-3/5 md:w-1/2 h-full bg-white shadow-lg z-50 overflow-y-auto"
//             >
//               <div className="flex flex-col p-4 sm:p-6">
//                 <button
//                   onClick={toggleSidebar}
//                   className="self-end mb-4 focus:outline-none"
//                 >
//                   <svg
//                     className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//                 {navigationItems.map((item) => (
//                   <div key={item.path} className="mb-4">
//                     <button
//                       className={`w-full text-left px-3 py-2 text-sm sm:text-base text-gray-800 hover:bg-gray-100 rounded-lg ${
//                         pathname === item.path ? "bg-gray-200" : ""
//                       }`}
//                       onClick={() =>
//                         item.label === "Loan"
//                           ? setIsMegaMenuOpen(!isMegaMenuOpen)
//                           : handleNavigation(item.path)
//                       }
//                     >
//                       {item.label}
//                     </button>
//                     {item.label === "Loan" && isMegaMenuOpen && (
//                       <div className="mt-2">
//                         <MegaMenu isSidebar={true} />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Side Box */}
//         <Link
//           href="https://finsbee.com/booking/"
//           target="_blank"
//           className="absolute right-0 bottom-[-100px] hidden  sm:bottom-[-110px] md:bottom-[-120px] w-[180px] sm:w-[200px] md:w-[227px] h-[180px] sm:h-[200px] md:h-[228px] -translate-y-4 animate-fade-in"
//           style={{
//             animationDelay: "400ms",
//             zIndex: 0,
//           }}
//         >
//           <div className="relative w-full h-full cursor-pointer transition-transform hover:scale-[1.02]">
//             <img
//               className="absolute w-full h-[98.11%] top-0 left-0"
//               alt="Rectangle"
//               src="/Rectangle.svg"
//             />
//             <div className="flex flex-col w-[93.03%] items-end gap-3 sm:gap-4 px-0 py-2 sm:py-2.5 absolute h-[92.78%] top-[7.22%] left-0">
//               <div className="inline-flex items-center justify-end gap-2 sm:gap-2.5 px-0 py-2 sm:py-2.5">
//                 <p className="relative w-[140px] sm:w-[160px] md:w-[187px] font-bold text-lg sm:text-xl md:text-2xl text-gray-800 text-right leading-[24px] sm:leading-[28px] md:leading-[30px] cursor-pointer">
//                   All-in-One Finance Help
//                   <br />@ your doorstep
//                 </p>
//               </div>
//               <div className="flex w-[130px] sm:w-[150px] md:w-[167px] items-center relative">
//                 <img
//                   className="relative w-[50px] sm:w-[60px] md:w-[65.66px] h-[50px] sm:h-[60px] md:h-[65.84px]"
//                   alt="Arrow r"
//                   src="/arrow.svg"
//                 />
//                 <span className="inline-flex cursor-pointer items-center justify-end gap-1.5 sm:gap-2 relative mr-[-0.66px] -ml-2 sm:-ml-3 border-b-2 border-gray-800 bg-transparent transition-colors font-bold text-xs sm:text-sm md:text-base text-gray-800 tracking-wide leading-4 sm:leading-5 whitespace-nowrap">
//                   Book Your Slot
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// "use client";

// import React, { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// const menuData = {
//   "Personal loan": {
//     column1: [
//       { label: "Personal loan Interest Rates", path: "/Pl" },
//       { label: "Documents Required For Personal Loan", path: "/Pl" },
//       { label: "Personal Loan EMI Calculator", path: "/Pl/pl_Emi" },
//       { label: "CIBIL Score for Personal Loan", path: "/Pl" },
//       { label: "Personal Loan App", path: "/Pl" },
//       { label: "Instant Cash Loan", path: "/Pl" },
//       { label: "Short Term Loan", path: "/Pl" },
//     ],
//     column2: [
//       { label: "Education Loan", path: "/Pl" },
//       { label: "Medical Loan for Emergency", path: "/Pl" },
//       { label: "Travel Loan", path: "/Pl" },
//       { label: "Home Renovation Loan", path: "/Pl" },
//       { label: "Marriage Loan", path: "/Pl" },
//       { label: "Women Loan", path: "/Pl" },
//       { label: "Quick Loans Online", path: "/Pl" },
//     ],
//     column3: [
//       { label: "Doctor Loan", path: "/Pl" },
//       { label: "Personal Loan For Self Employed", path: "/Pl" },
//       { label: "Personal Loan for Government Employees", path: "/Pl" },
//       { label: "Personal Loan For Salaried Employees", path: "/Pl" },
//       { label: "Emergency Loan", path: "/Pl" },
//     ],
//   },
//   "Business Loan": {
//     column1: [
//       { label: "Business Loan Overview", path: "/Bl" },
//       { label: "Business Loan EMI Calculator", path: "/Bl/bl_Emi" },
//       { label: "Business Loan Eligibility", path: "/Bl" },
//     ],
//     column2: [
//       { label: "Business Loan Interest Rate", path: "/Bl" },
//       { label: "Documents Required For Business Loan", path: "/Bl" },
//       { label: "Unsecured Business Loans", path: "/Bl" },
//     ],
//     column3: [
//       { label: "Working Capital Loan", path: "/WC" },
//       { label: "Invoice Discounting", path: "/IC" },
//     ],
//   },
//   "Loan Against Property": {
//     column1: [
//       { label: "Loan Against Property Eligibility", path: "/loanap" },
//       { label: "Documents Required For Loan Against Property", path: "/loanap" },
//       { label: "LAP Balance transfer", path: "/LAP" },
//       { label: "Loan Against Property EMI Calculator", path: "/loanap/emi" },
//       { label: "Loan Against Property Interest Rates", path: "/loanap" },
//     ],
//   },
//   "Home Loan": {
//     column1: [
//       { label: "Home Loan EMI Calculator", path: "/HL/hl_Emi" },
//       { label: "Documents Required For Home Loan", path: "/HL" },
//     ],
//   },
//   "Loan Against Securities": {
//     column1: [
//       { label: "Loan Against Mutual Funds", path: "/LAS" },
//       { label: "Loan Against Stocks", path: "/LAS" },
//     ],
//   },
// };

// const loanCategories = Object.keys(menuData);

// export default function MegaMenu({ isSidebar = false }) {
//   const [activeCategory, setActiveCategory] = useState("Personal loan");
//   const router = useRouter();

//   const activeData = useMemo(() => {
//     if (!isSidebar) {
//       return menuData[activeCategory];
//     }
//     return null;
//   }, [activeCategory, isSidebar]);

//   const handleNavigate = (path) => {
//     if (path) router.push(path);
//   };

//   return (
//     <nav
//       className={`${
//         isSidebar
//           ? "flex flex-col w-full bg-white"
//           : "flex max-w-[956px] sm:max-w-[90vw] items-start gap-2 sm:gap-3 px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-b-2xl shadow-lg"
//       } transition-all duration-300`}
//     >
//       {isSidebar ? (
//         <div className="flex flex-col w-full gap-4">
//           {loanCategories.map((category) => (
//             <div key={category} className="border-b border-gray-200 pb-4">
//               <button
//                 className="w-full text-left px-3 py-2 text-base sm:text-lg font-semibold text-gray-800"
//                 onClick={() => {
//                   const section = document.getElementById(`category-${category}`);
//                   if (section) section.scrollIntoView({ behavior: "smooth" });
//                 }}
//               >
//                 {category}
//               </button>
//               <div
//                 id={`category-${category}`}
//                 className="mt-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
//               >
//                 {menuData[category].items.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2, delay: index * 0.05 }}
//                     className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <button
//                       onClick={() => handleNavigate(item.path)}
//                       className="text-left text-sm sm:text-base text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
//                     >
//                       {item.label}
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <>
//           {/* Desktop Categories */}
//           <aside className="inline-flex gap-1 flex-col h-[20rem] sm:h-[25rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
//             {loanCategories.map((category) => (
//               <button
//                 key={category}
//                 onMouseEnter={() => setActiveCategory(category)}
//                 className={`w-full px-3 py-3 sm:py-4 text-left text-sm sm:text-base font-medium transition-all duration-300 rounded-lg ${
//                   activeCategory === category
//                     ? "bg-[#ffd263] text-[#212121] font-semibold"
//                     : "hover:bg-[#ffebaa] text-[#4a4a4a] hover:text-[#212121]"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </aside>
//           {/* Desktop Menu Items */}
//           <div className="flex flex-1 min-h-[320px] sm:min-h-[400px] gap-2 sm:gap-3 relative overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCategory}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.25, ease: "easeInOut" }}
//                 className="flex flex-1 gap-2 sm:gap-3 items-start absolute inset-0 bg-white"
//               >
//                 {["column1", "column2", "column3"].map((colKey, i) => {
//                   const column = activeData[colKey];
//                   if (!column) return null;
//                   return (
//                     <ul
//                       key={i}
//                       className="flex w-[180px] sm:w-[220px] gap-1 flex-col items-start"
//                     >
//                       {column.map((item, index) => (
//                         <motion.li
//                           key={index}
//                           className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.2, delay: index * 0.05 }}
//                         >
//                           <button
//                             onClick={() => handleNavigate(item.path)}
//                             className="text-left text-xs sm:text-sm text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
//                           >
//                             {item.label}
//                           </button>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// }

// "use client";

// import React, { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// const menuData = {
//   "Personal loan": {
//     column1: [
//       { label: "Personal loan Interest Rates", path: "/Pl" },
//       { label: "Documents Required For Personal Loan", path: "/Pl" },
//       { label: "Personal Loan EMI Calculator", path: "/Pl/pl_Emi" },
//       { label: "CIBIL Score for Personal Loan", path: "/Pl" },
//       { label: "Personal Loan App", path: "/Pl" },
//       { label: "Instant Cash Loan", path: "/Pl" },
//       { label: "Short Term Loan", path: "/Pl" },
//     ],
//     column2: [
//       { label: "Education Loan", path: "/Pl" },
//       { label: "Medical Loan for Emergency", path: "/Pl" },
//       { label: "Travel Loan", path: "/Pl" },
//       { label: "Home Renovation Loan", path: "/Pl" },
//       { label: "Marriage Loan", path: "/Pl" },
//       { label: "Women Loan", path: "/Pl" },
//       { label: "Quick Loans Online", path: "/Pl" },
//     ],
//     column3: [
//       { label: "Doctor Loan", path: "/Pl" },
//       { label: "Personal Loan For Self Employed", path: "/Pl" },
//       { label: "Personal Loan for Government Employees", path: "/Pl" },
//       { label: "Personal Loan For Salaried Employees", path: "/Pl" },
//       { label: "Emergency Loan", path: "/Pl" },
//     ],
//   },
//   "Business Loan": {
//     column1: [
//       { label: "Business Loan Overview", path: "/Bl" },
//       { label: "Business Loan EMI Calculator", path: "/Bl/bl_Emi" },
//       { label: "Business Loan Eligibility", path: "/Bl" },
//     ],
//     column2: [
//       { label: "Business Loan Interest Rate", path: "/Bl" },
//       { label: "Documents Required For Business Loan", path: "/Bl" },
//       { label: "Unsecured Business Loans", path: "/Bl" },
//     ],
//     column3: [
//       { label: "Working Capital Loan", path: "/WC" },
//       { label: "Invoice Discounting", path: "/IC" },
//     ],
//   },
//   "Loan Against Property": {
//     column1: [
//       { label: "Loan Against Property Eligibility", path: "/loanap" },
//       { label: "Documents Required For Loan Against Property", path: "/loanap" },
//       { label: "LAP Balance transfer", path: "/LAP" },
//       { label: "Loan Against Property EMI Calculator", path: "/loanap/emi" },
//       { label: "Loan Against Property Interest Rates", path: "/loanap" },
//     ],
//   },
//   "Home Loan": {
//     column1: [
//       { label: "Home Loan EMI Calculator", path: "/HL/hl_Emi" },
//       { label: "Documents Required For Home Loan", path: "/HL" },
//     ],
//   },
//   "Loan Against Securities": {
//     column1: [
//       { label: "Loan Against Mutual Funds", path: "/LAS" },
//       { label: "Loan Against Stocks", path: "/LAS" },
//     ],
//   },
// };

// const loanCategories = Object.keys(menuData);

// export default function MegaMenu({ isSidebar = false }) {
//   const [activeCategory, setActiveCategory] = useState("Personal loan");
//   const router = useRouter();

//   const activeData = useMemo(() => {
//     if (!isSidebar) {
//       return menuData[activeCategory];
//     }
//     return null;
//   }, [activeCategory, isSidebar]);

//   const handleNavigate = (path) => {
//     if (path) router.push(path);
//   };

//   return (
//     <nav
//       className={`${
//         isSidebar
//           ? "flex flex-col w-full bg-white"
//           : "flex max-w-[956px] sm:max-w-[90vw] items-start gap-2 sm:gap-3 px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-b-2xl shadow-lg"
//       } transition-all duration-300`}
//     >
//       {isSidebar ? (
//         <div className="flex flex-col w-full gap-4">
//           {loanCategories.map((category) => (
//             <div key={category} className="border-b border-gray-200 pb-4">
//               <button
//                 className="w-full text-left px-3 py-2 text-base sm:text-lg font-semibold text-gray-800"
//                 onClick={() => {
//                   const section = document.getElementById(`category-${category}`);
//                   if (section) section.scrollIntoView({ behavior: "smooth" });
//                 }}
//               >
//                 {category}
//               </button>
//               <div
//                 id={`category-${category}`}
//                 className="mt-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
//               >
//                 {/* ✅ FIXED: Correctly map all columns instead of 'items' */}
//                 {Object.keys(menuData[category]).map((colKey) =>
//                   menuData[category][colKey].map((item, index) => (
//                     <motion.div
//                       key={`${colKey}-${index}`}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2, delay: index * 0.05 }}
//                       className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                       <button
//                         onClick={() => handleNavigate(item.path)}
//                         className="text-left text-sm sm:text-base text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
//                       >
//                         {item.label}
//                       </button>
//                     </motion.div>
//                   ))
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <>
//           {/* Desktop Categories */}
//           <aside className="inline-flex gap-1 flex-col h-[20rem] sm:h-[25rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
//             {loanCategories.map((category) => (
//               <button
//                 key={category}
//                 onMouseEnter={() => setActiveCategory(category)}
//                 className={`w-full px-3 py-3 sm:py-4 text-left text-sm sm:text-base font-medium transition-all duration-300 rounded-lg ${
//                   activeCategory === category
//                     ? "bg-[#ffd263] text-[#212121] font-semibold"
//                     : "hover:bg-[#ffebaa] text-[#4a4a4a] hover:text-[#212121]"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </aside>

//           {/* Desktop Menu Items */}
//           <div className="flex flex-1 min-h-[320px] sm:min-h-[400px] gap-2 sm:gap-3 relative overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCategory}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.25, ease: "easeInOut" }}
//                 className="flex flex-1 gap-2 sm:gap-3 items-start absolute inset-0 bg-white"
//               >
//                 {["column1", "column2", "column3"].map((colKey, i) => {
//                   const column = activeData[colKey];
//                   if (!column) return null;
//                   return (
//                     <ul
//                       key={i}
//                       className="flex w-[180px] sm:w-[220px] gap-1 flex-col items-start"
//                     >
//                       {column.map((item, index) => (
//                         <motion.li
//                           key={index}
//                           className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.2, delay: index * 0.05 }}
//                         >
//                           <button
//                             onClick={() => handleNavigate(item.path)}
//                             className="text-left text-xs sm:text-sm text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
//                           >
//                             {item.label}
//                           </button>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// }


"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  "Personal loan": {
    column1: [
      { label: "Personal loan Interest Rates", path: "/Pl/pl_Emi" },
      { label: "Documents Required For Personal Loan", path: "/Pl" },
      { label: "Personal Loan EMI Calculator", path: "/Pl/pl_Emi" },
      { label: "CIBIL Score for Personal Loan", path: "/Pl" },
      { label: "Personal Loan App", path: "/Pl" },
      { label: "Instant Cash Loan", path: "/Pl" },
      { label: "Short Term Loan", path: "/Pl" },
    ],
    column2: [
      { label: "Education Loan", path: "/Pl" },
      { label: "Medical Loan for Emergency", path: "/Pl" },
      { label: "Travel Loan", path: "/Pl" },
      { label: "Home Renovation Loan", path: "/Pl" },
      { label: "Marriage Loan", path: "/Pl" },
      { label: "Women Loan", path: "/Pl" },
      { label: "Quick Loans Online", path: "/Pl" },
    ],
    column3: [
      { label: "Doctor Loan", path: "/Pl" },
      { label: "Personal Loan For Self Employed", path: "/Pl" },
      { label: "Personal Loan for Government Employees", path: "/Pl" },
      { label: "Personal Loan For Salaried Employees", path: "/Pl" },
      { label: "Emergency Loan", path: "/Pl" },
    ],
  },
  "Business Loan": {
    column1: [
      { label: "Business Loan Overview", path: "/Bl" },
      { label: "Business Loan EMI Calculator", path: "/Bl/bl_Emi" },
      { label: "Business Loan Eligibility", path: "/Bl" },
    ],
    column2: [
      { label: "Business Loan Interest Rate", path: "/Bl/bl_Emi" },
      { label: "Documents Required For Business Loan", path: "/Bl" },
      { label: "Unsecured Business Loans", path: "/Bl" },
    ],
    column3: [
      { label: "Working Capital Loan", path: "/WC" },
      { label: "Invoice Discounting", path: "/IC" },
    ],
  },
  "Loan Against Property": {
    column1: [
      { label: "Loan Against Property Eligibility", path: "/loanap" },
      { label: "Documents Required For Loan Against Property", path: "/loanap" },
      { label: "LAP Balance transfer", path: "/LAP" },
      { label: "Loan Against Property EMI Calculator", path: "/loanap/LoanAP_EMI" },
      { label: "Loan Against Property Interest Rates", path: "/loanap/LoanAP_EMI" },
    ],
  },
  "Home Loan": {
    column1: [
      { label: "Home Loan EMI Calculator", path: "/HL/hl_Emi" },
      { label: "Documents Required For Home Loan", path: "/HL" },
    ],
  },
  "Loan Against Securities": {
    column1: [
      { label: "Loan Against Mutual Funds", path: "/LAM" },
      { label: "Loan Against Stocks", path: "/LAS" },
    ],
  },
};

const loanCategories = Object.keys(menuData);

export default function MegaMenu({ isSidebar = false }) {
  const [activeCategory, setActiveCategory] = useState("Personal loan");
  const router = useRouter();

  const activeData = useMemo(() => {
    if (!isSidebar) {
      return menuData[activeCategory];
    }
    return null;
  }, [activeCategory, isSidebar]);

  const handleNavigate = (path) => {
    if (path) router.push(path);
  };

  // Helper function to get all items for a category in sidebar view
  const getCategoryItems = (category) => {
    const categoryData = menuData[category];
    const items = [];
    if (categoryData.column1) items.push(...categoryData.column1);
    if (categoryData.column2) items.push(...categoryData.column2);
    if (categoryData.column3) items.push(...categoryData.column3);
    return items;
  };

  return (
    <nav
      className={`${
        isSidebar
          ? "flex flex-col w-full bg-white"
          : "flex max-w-[956px] sm:max-w-[90vw] items-start gap-2 sm:gap-3 px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-b-2xl shadow-lg"
      } transition-all duration-300`}
    >
      {isSidebar ? (
        <div className="flex flex-col w-full gap-4">
          {loanCategories.map((category) => (
            <div key={category} className="border-b border-gray-200 pb-4">
              <button
                className="w-full text-left px-3 py-2 text-base sm:text-lg font-semibold text-gray-800"
                onClick={() => {
                  const section = document.getElementById(`category-${category}`);
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {category}
              </button>
              <div
                id={`category-${category}`}
                className="mt-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              >
                {getCategoryItems(category).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className="text-left text-sm sm:text-base text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Desktop Categories */}
          <aside className="inline-flex gap-1 flex-col h-[20rem] sm:h-[25rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
            {loanCategories.map((category) => (
              <button
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className={`w-full px-3 py-3 sm:py-4 text-left text-sm sm:text-base font-medium transition-all duration-300 rounded-lg ${
                  activeCategory === category
                    ? "bg-[#ffd263] text-[#212121] font-semibold"
                    : "hover:bg-[#ffebaa] text-[#4a4a4a] hover:text-[#212121]"
                }`}
              >
                {category}
              </button>
            ))}
          </aside>
          {/* Desktop Menu Items */}
          <div className="flex flex-1 min-h-[320px] sm:min-h-[400px] gap-2 sm:gap-3 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex flex-1 gap-2 sm:gap-3 items-start absolute inset-0 bg-white"
              >
                {["column1", "column2", "column3"].map((colKey, i) => {
                  const column = activeData[colKey];
                  if (!column) return null;
                  return (
                    <ul
                      key={i}
                      className="flex w-[180px] sm:w-[220px] gap-1 flex-col items-start"
                    >
                      {column.map((item, index) => (
                        <motion.li
                          key={index}
                          className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => handleNavigate(item.path)}
                            className="text-left text-xs sm:text-sm text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
                          >
                            {item.label}
                          </button>
                        </motion.li>
                      ))}
                    </ul>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      )}
    </nav>
  );
}