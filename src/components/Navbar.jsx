// "use client";

// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import MegaMenu from "./Navbar_Component/Nav";
// import Link from "next/link";
// import Image from "next/image";

// export const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   // const navigationItems = [
//   //   { label: "Loan", path: "", isMegaMenu: true },
//   //   { label: "Investment", path: "/investment", isMegaMenu: false },
//   //   // { label: "Book Your Slot", path: "/booking", isMegaMenu: false, external: true },
//   // ];
//     const navigationItems = [
//     { label: "Loans", key: "loans", isMegaMenu: true },
//     { label: "Instant Loan", key: "instant", isMegaMenu: true },
//     { label: "Auto Loan", key: "auto", isMegaMenu: true },
//     { label: "EMI Calculator", key: "emi", isMegaMenu: true },
//     { label: "Investment", path: "/investment", isMegaMenu: false },
//     { label: "Contact-US", path: "/contact-us", isMegaMenu: false },
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
//       className={`w-full text-left  px-4 py-3 text-base sm:text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-sm hover:shadow-md border-2 border-transparent hover:border-[#ffd263] hover:bg-[#fff9ec]/50 ${
//         pathname === item.path && !item.isMegaMenu ? "bg-[#ffd263]/30" : ""
//       } ${item.isMegaMenu && isMegaMenuOpen ? "bg-[#ffd263]/30" : ""}`}
//       onClick={() =>
//         item.isMegaMenu
//           ? setIsMegaMenuOpen(!isMegaMenuOpen)
//           : handleNavigation(item.path, item.external)
//       }
//     >
//       <span className="flex items-center  justify-between">
//         {item.label}
//         {item.isMegaMenu && (
//           <svg
//             className={`ml-2 w-4 h-4 ${isMegaMenuOpen ? "rotate-180" : ""}`}
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
//           <Image
//             className="relative w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
//             alt="Finsbee transparent"
//             src="/FinsbeeLogo.svg"
//             width={155.83}
//             height={55.38}
//           />
//         </div>

//         {/* Hamburger Menu for Tablet and Mobile */}
//         <div className="lg:hidden flex items-center mr-4 sm:mr-8 md:mr-11">
//           <button
//             onClick={toggleSidebar}
//             className="focus:outline-none p-2 rounded-full hover:bg-white/10"
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
//           {navigationItems.slice(0, 6).map((item) => (
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
//                 className={`relative px-3 py-2 rounded-lg cursor-pointer text-gray-200 hover:bg-white/10 ${
//                   pathname === item.path
//                     ? "p-4 bg-white/30 border border-white/30 text-white"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   handleNavigation(item.path, item.external)
//                 }
//               >
//                 <span className="relative font-normal text-sm md:text-base tracking-wide leading-normal whitespace-nowrap">
//                   {item.label}
//                 </span>
//               </button>
//               {item.isMegaMenu && isMegaMenuOpen && (
//                 <div className="absolute w-[50rem] top-full left-1/2 -translate-x-1/2 pt-0.5 z-50">
//                   <MegaMenu isSidebar={false} onClose={() => setIsMegaMenuOpen(false)} />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Sidebar (Tablet and Mobile) */}
//         {isSidebarOpen && (
//           <div
//             className="lg:hidden fixed top-0 right-0 w-4/5 sm:w-3/5 max-w-[400px] h-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl z-50 overflow-y-auto rounded-l-2xl"
//           >
//             <div className="flex flex-col p-4 sm:p-6">
//               <button
//                 onClick={toggleSidebar}
//                 className="self-end mb-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
//               >
//                 <svg
//                   className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               <div className="space-y-3 sm:space-y-4">
//                 {navigationItems.map((item) => (
//                   <div key={item.path}>
//                     <SidebarButton item={item} />
//                     {item.isMegaMenu && isMegaMenuOpen && (
//                       <div className="mt-3">
//                         <MegaMenu isSidebar={true} onClose={() => setIsSidebarOpen(false)} />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MegaMenu from "./Navbar_Component/Nav";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMegaKey, setActiveMegaKey] = useState(null);

  const navigationItems = [
    { label: "Instant Loan", key: "instant", isMegaMenu: true },
    { label: "Loans", key: "loans", isMegaMenu: true },

    { label: "Auto Loan", key: "auto", isMegaMenu: true },
    { label: "Investment", path: "/investment", isMegaMenu: false },
    { label: "EMI Calculator", key: "emi", isMegaMenu: true },

    { label: "Contact us", scrollTo: "contact-us", isMegaMenu: false },
  ];

  const handleNavigation = (path, external, scrollTo) => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (external) {
      window.open(path, "_blank");
    } else if (path) {
      router.push(path);
    }

    setIsMegaMenuOpen(false);
    setIsSidebarOpen(false);
    setActiveMegaKey(null);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMegaMenuOpen(false);
    setActiveMegaKey(null);
  };

  const SidebarButton = ({ item }) => (
    <button
      className={`w-full text-left px-4 py-3 text-base sm:text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-sm hover:shadow-md border-2 border-transparent hover:border-[#ffd263] hover:bg-[#fff9ec]/50 ${
        pathname === item.path && !item.isMegaMenu ? "bg-[#ffd263]/30" : ""
      } ${
        item.isMegaMenu && activeMegaKey === item.key ? "bg-[#ffd263]/30" : ""
      }`}
      onClick={() =>
        item.isMegaMenu
          ? setActiveMegaKey(activeMegaKey === item.key ? null : item.key)
          : handleNavigation(item.path, item.external, item.scrollTo)
      }
    >
      <span className="flex items-center justify-between">
        {item.label}
        {item.isMegaMenu && (
          <svg
            className={`ml-2 w-4 h-4 ${
              activeMegaKey === item.key ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
            src="/FinsbeeLogo.svg"
            alt="Finsbee transparent"
            width={155.83}
            height={55.38}
            className="w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
          />
        </div>

        {/* Hamburger */}
        <div className="lg:hidden flex items-center mr-7 sm:mr-9 md:mr-15">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none p-2 rounded-full hover:bg-white/10"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isSidebarOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center justify-center gap-4 lg:gap-6 p-2 lg:p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
          style={{ animationDelay: "200ms" }}
        >
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.isMegaMenu) {
                  setActiveMegaKey(item.key);
                  setIsMegaMenuOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.isMegaMenu) {
                  setIsMegaMenuOpen(false);
                  setActiveMegaKey(null);
                }
              }}
            >
              <button
                className={`relative px-3 py-2 rounded-lg cursor-pointer text-gray-200 hover:bg-white/10 ${
                  pathname === item.path
                    ? "p-4 bg-white/30 border border-white/30 text-white"
                    : ""
                }`}
                onClick={() =>
                  !item.isMegaMenu &&
                  handleNavigation(item.path, item.external, item.scrollTo)
                }
              >
                <span className="relative font-normal text-sm md:text-base tracking-wide leading-normal whitespace-nowrap">
                  {item.label}
                </span>
              </button>

              {item.isMegaMenu &&
                isMegaMenuOpen &&
                activeMegaKey === item.key && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <MegaMenu
                      sectionKey={activeMegaKey}
                      isSidebar={false}
                      onClose={() => {
                        setIsMegaMenuOpen(false);
                        setActiveMegaKey(null);
                      }}
                    />
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed top-0 right-0 w-4/5 sm:w-3/5 max-w-[400px] h-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl z-50 overflow-y-auto rounded-l-2xl">
            <div className="flex flex-col p-4 sm:p-6">
              <button
                onClick={toggleSidebar}
                className="self-end mb-6 p-2  rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                  <div key={item.label}>
                    <SidebarButton item={item} />
                    {item.isMegaMenu && activeMegaKey === item.key && (
                      <div className="mt-3">
                        <MegaMenu
                          sectionKey={item.key}
                          isSidebar={true}
                          onClose={() => setIsSidebarOpen(false)}
                        />
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
