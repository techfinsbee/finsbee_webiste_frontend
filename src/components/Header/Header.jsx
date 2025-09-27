// // "use client";

// // import React from "react";
// // import Link from "next/link";

// // const navigationItems = [
// //   { label: "Loan", href: "/loan", active: true },
// //   { label: "Insurance", href: "/insurance", active: false },
// //   { label: "Investment", href: "/investment", active: false },
// // ];

// // const Header = () => {
// //   return (
// //     <>
// //       <header className="flex flex-col md:flex-row items-start justify-around px-4 sm:px-8 md:px-12 lg:pr-[280px] py-0 relative w-full max-w-[1440px] mx-auto">
// //         <nav className="flex flex-col items-start gap-2.5 pt-6 pb-2.5 px-6 sm:px-12 md:px-24 relative flex-1">
// //           <div className="flex flex-col sm:flex-row items-center justify-between pl-6 sm:pl-12 pr-6 sm:pr-40 py-2 relative w-full rounded-[100px]">
// //             {/* Logo */}
        
// //             <div className="flex flex-col w-[120px] sm:w-[155.83px] items-start gap-2.5 relative">
// //               <img
// //                 className="relative w-full h-[40px] sm:h-[55.38px] object-cover"
// //                 alt="Finsbee transparent"
// //                 src="/landing_page/logo.png"
// //               />
// //             </div>

// //             {/* Navigation */}
// //             <div className="flex flex-col w-full sm:w-[403px] items-center justify-center gap-2.5 p-3 relative rounded-2xl mt-4 sm:mt-0">
// //               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative w-full">
// //                 {navigationItems.map((item) => (
// //                   <Link
// //                     key={item.label}
// //                     href={item.href}
// //                     className={`flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 h-8 sm:h-9 px-3 sm:px-4 py-2 ${
// //                       item.active
// //                         ? "bg-white/30 border border-solid border-white/30 text-white"
// //                         : "text-gray-100 hover:bg-white/10 hover:text-white"
// //                     } font-normal text-sm sm:text-base tracking-[0.5px] leading-normal`}
// //                   >
// //                     {item.label}
// //                   </Link>
// //                 ))}
// //               </div>
          
// //             </div>
// //           </div>

// //         </nav>
// //       </header>
// //       <div className="absolute w-[180px] sm:w-[227px] h-[180px] sm:h-[228px] top-0 right-0 bg-transparent border-0 rounded-xl shadow z-50 ">
// //         <div className="relative h-full p-0">
// //           <img
// //             className="absolute w-full h-[140px] sm:h-[224px] top-0 left-0"
// //             alt="Rectangle"
// //             src="/landing_page/Rectangle.svg"
// //           />
          
// //           <div className="flex flex-col w-[90%] items-end gap-4 px-0 py-2.5 absolute top-4 left-px">
// //             <div className="inline-flex justify-end gap-2.5 px-0 py-2.5 items-center relative">
// //               <div className="w-full text-subheading-2  sm:text-2xl text-right leading-[24px] sm:leading-[30px] relative tracking-[0px]">
// //                 All-in-One  <br />Finance Help
// //                 <br />@ your doorstep
// //               </div>

// //             </div>
// //             <div className="flex w-[140px] sm:w-[167px] items-center relative">
// //               <img
// //                 className="relative w-[50px] sm:w-[65.66px] h-[50px] sm:h-[65.84px]"
// //                 alt="Arrow r"
// //                 src="/landing_page/arrow.svg"
// //               />
// //               <div className="inline-flex items-center gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-solid border-gray-800">
// //                 <div className="relative w-fit font-bold text-gray-800 text-sm sm:text-base tracking-[0.5px] leading-5 whitespace-nowrap">
// //                   Book Your Slot
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// // //       </div>
// //     </>
// //   );
// // };

// // export default Header;
"use client";

import React from "react";
import Link from "next/link";

const navigationItems = [
  { label: "Loan", href: "/loan", active: true },
  { label: "Insurance", href: "/insurance", active: false },
  { label: "Investment", href: "/Investment", active: false },
];

const Header = () => {
  return (
    <>
      {/* Header Wrapper */}
      <header className="relative flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 w-full max-w-[1440px] mx-auto">
        
        {/* Logo (Left) */}
        <div className="flex-shrink-0 max-w-[160px]">
          <img
            className="w-full h-auto max-h-[55px] object-contain"
            alt="Finsbee logo"
            src="/landing_page/logo.png"
          />
        </div>

        {/* Navigation (Center) */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-4 sm:gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base ${
                item.active
                  ? "bg-white/30 border border-white/30 text-white"
                  : "text-gray-100 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        
      </header>
      {/* Right Card (snapped to corner) */}
        <div className="absolute top-0 right-0 w-[180px] sm:w-[227px] h-[180px] sm:h-[228px] bg-transparent border-0 rounded-xl shadow z-50">
          <div className="relative h-full p-0">
            <img
              className="absolute w-full h-[140px] sm:h-[224px] top-0  right-0"
              alt="Rectangle"
              src="/landing_page/Rectangle.svg"
            />
            
            <div className="flex flex-col w-[90%] items-end gap-4 px-0 py-2.5 absolute top-4 left-px">
              <div className="inline-flex justify-end gap-2.5 px-0 py-2.5 items-center relative">
                <div className="w-full text-subheading-2 sm:text-2xl text-right leading-[24px] sm:leading-[30px] tracking-[0px]">
                  All-in-One <br />Finance Help
                  <br />@ your doorstep
                </div>
              </div>
              <div className="flex w-[140px] sm:w-[167px] items-center relative">
                <img
                  className="w-[50px] sm:w-[65.66px] h-[50px] sm:h-[65.84px]"
                  alt="Arrow r"
                  src="/landing_page/arrow.svg"
                />
                <div className="inline-flex items-center gap-2 -ml-3 border-b-2 border-gray-800">
                  <div className="font-bold text-gray-800 text-sm sm:text-base tracking-[0.5px] leading-5 whitespace-nowrap">
                    Book Your Slot
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Mobile Navigation (below header) */}
      <div className="flex sm:hidden justify-center mt-2 gap-4 px-4">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors px-3 py-1.5 text-sm ${
              item.active
                ? "bg-white/30 border border-white/30 text-white"
                : "text-gray-100 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
