

// "use client";
// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import MegaMenu from "./Navbar_Component/Nav";
// import Link from "next/link";

// export const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // State to control MegaMenu visibility

//   const navigationItems = [
//     {
//       label: "Loan",
//       path: "/personal-loan",
//     },
//     // { label: "Insurance", path: "/insurance" },
//     { label: "Investment", path: "/investment" },
//   ];

//   const handleNavigation = (path) => {
//     router.push(path);
//     setIsMegaMenuOpen(false); // Close MegaMenu after navigation
//   };

//   return (
//     <nav className="absolute top-2  w-full z-50 bg-transparent">
//       <div className="flex items-center justify-between mx-auto pt-8 pb-2.5 relative">
//         {/* Logo */}
//         <div
//           className="flex flex-col w-[155.83px] cursor-pointer items-start gap-2.5 ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0"
//           onClick={() => handleNavigation("/")}
//         >
//           <img
//             className="relative w-full h-[55.38px] object-cover"
//             alt="Finsbee transparent"
//             src="/FinsbeeLogo.svg"
//           />
//         </div>

//         {/* Navigation Buttons */}
//         <div
//           className="flex items-center justify-center cursor-pointer gap-6 p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
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
//                 className={`relative px-3 py-2 transition-colors cursor-pointer${
//                   pathname === item.path
//                     ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
//                     : "rounded-lg text-gray-200 hover:bg-white/10"
//                 }`}
//                 onClick={() =>
//                   item.label !== "Loan" && handleNavigation(item.path)
//                 }
//               >
//                 <span className="relative font-normal text-base tracking-wide leading-normal whitespace-nowrap cursor-pointer">
//                   {item.label}
//                 </span>
//               </button>
//               {item.label === "Loan" && isMegaMenuOpen && (
//                 <div className="absolute w-[50rem]  top-full left-1/2 -translate-x-1/2 mt-[0.5] z-50 cursor-pointer">
//                   <MegaMenu/>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

    //     {/* Side Box */}
    //     <Link
    //   href="https://finsbee.com/booking/"
    //   target="_blank" // remove if you want same tab
    //   className="absolute right-0 bottom-[-120px] w-[227px] h-[228px] -translate-y-4 animate-fade-in"
    //   style={{
    //     animationDelay: "400ms",
    //     zIndex: 0,
    //   }}
    // >
    //   <div className="relative w-full h-full cursor-pointer transition-transform hover:scale-[1.02]">
    //     {/* Background Image */}
    //     <img
    //       className="absolute w-full h-[98.11%] top-0 left-0"
    //       alt="Rectangle"
    //       src="/Rectangle.svg"
    //     />

    //     {/* Content */}
    //     <div className="flex flex-col w-[93.03%] items-end gap-4 px-0 py-2.5 absolute h-[92.78%] top-[7.22%] left-0">
    //       <div className="inline-flex items-center justify-end gap-2.5 px-0 py-2.5">
    //         <p className="relative w-[187px] font-bold text-2xl text-gray-800 text-right leading-[30px] cursor-pointer ">
    //           All-in-One Finance Help
    //           <br />@ your doorstep
    //         </p>
    //       </div>

    //       <div className="flex w-[167px] items-center relative">
    //         <img
    //           className="relative w-[65.66px] h-[65.84px]"
    //           alt="Arrow r"
    //           src="/arrow.svg"
    //         />
    //         <span className="inline-flex cursor-pointer  items-center justify-end gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-gray-800 bg-transparent transition-colors font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
    //           Book Your Slot
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
// </div>
//     </nav>
//   );
// };
// "use client";

// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import MegaMenu from "./Navbar_Component/Nav";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// export const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const navigationItems = [
//     { label: "Loan", path: "/personal-loan", isMegaMenu: true },
//     { label: "Investment", path: "/investment", isMegaMenu: false },
//     { label: "Book Your Slot", path: "https://finsbee.com/booking/", isMegaMenu: false, external: true },
//   ];

//   const handleNavigation = (path, external) => {
//     if (external) {
//       window.open(path, "_blank");
//     } else {
//       router.push(path);
//     }
//     setIsMegaMenuOpen(false);
//     setIsSidebarOpen(false);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     if (isSidebarOpen) setIsMegaMenuOpen(false);
//   };

//   const SidebarButton = ({ item }) => (
//     <button
//       className={`w-full text-left px-4 py-3 text-base sm:text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-[#ffd263] hover:bg-[#fff9ec]/50 ${
//         pathname === item.path && !item.isMegaMenu ? "bg-[#ffd263]/30" : ""
//       } ${item.isMegaMenu && isMegaMenuOpen ? "bg-[#ffd263]/30" : ""}`}
//       onClick={() =>
//         item.isMegaMenu
//           ? setIsMegaMenuOpen(!isMegaMenuOpen)
//           : handleNavigation(item.path, item.external)
//       }
//     >
//       <span className="flex items-center justify-between">
//         {item.label}
//         {item.isMegaMenu && (
//           <svg
//             className={`ml-2 w-4 h-4 transform transition-transform ${
//               isMegaMenuOpen ? "rotate-180" : ""
//             }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         )}
//       </span>
//     </button>
//   );

//   return (
//     <nav className="absolute top-0 w-full z-50 bg-transparent">
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
//           <button
//             onClick={toggleSidebar}
//             className="focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
//           >
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
//           className="hidden lg:flex items-center justify-center gap-4 lg:gap-6 p-2 lg:p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
//           style={{ animationDelay: "200ms" }}
//         >
//           {navigationItems.map((item) => (
//             <div
//               key={item.path}
//               className="relative"
//               onMouseEnter={() =>
//                 item.isMegaMenu && setIsMegaMenuOpen(true)
//               }
//               onMouseLeave={() =>
//                 item.isMegaMenu && setIsMegaMenuOpen(false)
//               }
//             >
//               <button
//                 className={`relative px-3 py-2 transition-colors ${
//                   pathname === item.path
//                     ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
//                     : "rounded-lg text-gray-200 hover:bg-white/10"
//                 }`}
//                 onClick={() =>
//                   !item.isMegaMenu && handleNavigation(item.path, item.external)
//                 }
//               >
//                 <span className="relative font-normal text-sm md:text-base tracking-wide leading-normal whitespace-nowrap">
//                   {item.label}
//                 </span>
//               </button>
//               {item.isMegaMenu && isMegaMenuOpen && (
//                 <div className="absolute w-[50rem] top-full left-1/2 -translate-x-1/2 mt-0.5 z-50">
//                   <MegaMenu isSidebar={false} />
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
//               className="lg:hidden fixed top-0 right-0 w-4/5 sm:w-3/5 max-w-[400px] h-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl z-50 overflow-y-auto rounded-l-2xl"
//             >
//               <div className="flex flex-col p-4 sm:p-6">
//                 <button
//                   onClick={toggleSidebar}
//                   className="self-end mb-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
//                 >
//                   <svg
//                     className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800"
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
//                 <div className="space-y-3 sm:space-y-4">
//                   {navigationItems.map((item) => (
//                     <div key={item.path}>
//                       <SidebarButton item={item} />
//                       {item.isMegaMenu && isMegaMenuOpen && (
//                         <div className="mt-3">
//                           <MegaMenu isSidebar={true} />
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };


"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MegaMenu from "./Navbar_Component/Nav";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationItems = [
    { label: "Loan", path: "/personal-loan", isMegaMenu: true },
    { label: "Investment", path: "/investment", isMegaMenu: false },
    { label: "Book Your Slot", path: "https://finsbee.com/booking/", isMegaMenu: false, external: true },
  ];

  const handleNavigation = (path, external) => {
    if (external) {
      window.open(path, "_blank");
    } else {
      router.push(path);
    }
    setIsMegaMenuOpen(false);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isSidebarOpen) setIsMegaMenuOpen(false);
  };

  const SidebarButton = ({ item }) => (
    <button
      className={`w-full text-left px-4 py-3 text-base sm:text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-sm hover:shadow-md border-2 border-transparent hover:border-[#ffd263] hover:bg-[#fff9ec]/50 ${
        pathname === item.path && !item.isMegaMenu ? "bg-[#ffd263]/30" : ""
      } ${item.isMegaMenu && isMegaMenuOpen ? "bg-[#ffd263]/30" : ""}`}
      onClick={() =>
        item.isMegaMenu
          ? setIsMegaMenuOpen(!isMegaMenuOpen)
          : handleNavigation(item.path, item.external)
      }
    >
      <span className="flex items-center justify-between">
        {item.label}
        {item.isMegaMenu && (
          <svg
            className={`ml-2 w-4 h-4 ${isMegaMenuOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </button>
  );

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between mx-auto pt-6 sm:pt-7 md:pt-8 pb-2.5 relative">
        {/* Logo */}
        <div
          className="flex flex-col w-[120px] sm:w-[140px] md:w-[155.83px] cursor-pointer items-start gap-2 ml-4 sm:ml-8 md:ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0"
          onClick={() => handleNavigation("/")}
        >
          <Image
            className="relative w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
            alt="Finsbee transparent"
            src="/FinsbeeLogo.svg"
            width={155.83}
            height={55.38}
          />
        </div>

        {/* Hamburger Menu for Tablet and Mobile */}
        <div className="lg:hidden flex items-center mr-4 sm:mr-8 md:mr-11">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none p-2 rounded-full hover:bg-white/10"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Buttons (Desktop) */}
        <div
          className="hidden lg:flex items-center justify-center gap-4 lg:gap-6 p-2 lg:p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
          style={{ animationDelay: "200ms" }}
        >
          {navigationItems.slice(0, 2).map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() =>
                item.isMegaMenu && setIsMegaMenuOpen(true)
              }
              onMouseLeave={() =>
                item.isMegaMenu && setIsMegaMenuOpen(false)
              }
            >
              <button
                className={`relative px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10 ${
                  pathname === item.path
                    ? "p-3 bg-white/30 border border-white/30 text-white"
                    : ""
                }`}
                onClick={() =>
                  !item.isMegaMenu && handleNavigation(item.path, item.external)
                }
              >
                <span className="relative font-normal text-sm md:text-base tracking-wide leading-normal whitespace-nowrap">
                  {item.label}
                </span>
              </button>
              {item.isMegaMenu && isMegaMenuOpen && (
                <div className="absolute w-[50rem] top-full left-1/2 -translate-x-1/2 mt-0.5 z-50">
                  <MegaMenu isSidebar={false} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Side Box (Desktop Book Your Slot) */}
        <Link
          href="https://finsbee.com/booking/"
          target="_blank"
          className="hidden lg:block absolute right-0 bottom-[-120px] w-[227px] h-[228px] -translate-y-4 animate-fade-in"
          style={{
            animationDelay: "400ms",
            zIndex: 0,
          }}
        >
          <div className="relative w-full h-full cursor-pointer transition-transform hover:scale-[1.02]">
            {/* Background Image */}
            <img
              className="absolute w-full h-[98.11%] top-0 left-0"
              alt="Rectangle"
              src="/Rectangle.svg"
            />

            {/* Content */}
            <div className="flex flex-col w-[93.03%] items-end gap-4 px-0 py-2.5 absolute h-[92.78%] top-[7.22%] left-0">
              <div className="inline-flex items-center justify-end gap-2.5 px-0 py-2.5">
                <p className="relative w-[187px] font-bold text-2xl text-gray-800 text-right leading-[30px] cursor-pointer">
                  All-in-One Finance Help
                  <br />@ your doorstep
                </p>
              </div>

              <div className="flex w-[167px] items-center relative">
                <img
                  className="relative w-[65.66px] h-[65.84px]"
                  alt="Arrow r"
                  src="/arrow.svg"
                />
                <span className="inline-flex cursor-pointer items-center justify-end gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-gray-800 bg-transparent font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
                  Book Your Slot
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Sidebar (Tablet and Mobile) */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed top-0 right-0 w-4/5 sm:w-3/5 max-w-[400px] h-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl z-50 overflow-y-auto rounded-l-2xl"
          >
            <div className="flex flex-col p-4 sm:p-6">
              <button
                onClick={toggleSidebar}
                className="self-end mb-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="space-y-3 sm:space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    <SidebarButton item={item} />
                    {item.isMegaMenu && isMegaMenuOpen && (
                      <div className="mt-3">
                        <MegaMenu isSidebar={true} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};