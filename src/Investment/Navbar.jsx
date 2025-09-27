"use client";

import React from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const navigationItems = [
    { label: "Loan", path: "/loan" },
    { label: "Insurance", path: "/insurance" },
    { label: "Investment", path: "/investment" },
  ];

  return (
     <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex flex-col items-start gap-2.5 pt-6 pb-2.5 px-24 relative flex-1">
        <nav className="flex items-center justify-between pl-12 pr-40 py-2 relative w-full rounded-full">
          {/* Logo */}
          <div className="flex flex-col w-[155.83px] items-start gap-2.5 relative -translate-y-4 animate-fade-in opacity-0">
            <img
              className="relative w-full h-[55.38px] object-cover"
              alt="Finsbee transparent"
              src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/finsbee-transparent-2.png"
            />
          </div>

          {/* Navigation Buttons */}
          <div
            className="flex flex-col w-[403px] items-center justify-center gap-2.5 p-3 relative rounded-2xl -translate-y-4 animate-fade-in opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center justify-center gap-6 relative w-full">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  className={`relative flex-1 transition-colors ${
                    pathname === item.path
                      ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
                      : "px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
                  }`}
                >
                  <span className="relative font-normal text-base tracking-wide leading-normal whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Header Side Box */}
      <div
        className="absolute right-px bottom-[-111px] w-[227px] h-[228px] -translate-y-4 animate-fade-in opacity-0"
        style={{ animationDelay: "400ms" }}
      >
        <div className="relative w-full h-full">
          <img
            className="absolute w-full h-[98.11%] top-0 left-0"
            alt="Rectangle"
            src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/rectangle-35.svg"
          />
          <div className="flex flex-col w-[93.03%] items-end gap-4 px-0 py-2.5 absolute h-[92.78%] top-[7.22%] left-0">
            <div className="inline-flex items-center justify-end gap-2.5 px-0 py-2.5 relative">
              <p className="relative w-[187px] font-bold text-2xl text-gray-800 text-right leading-[30px]">
                All-in-One Finance Help
                <br />@ your doorstep
              </p>
            </div>

            <div className="flex w-[167px] items-center relative">
              <img
                className="relative w-[65.66px] h-[65.84px]"
                alt="Arrow r"
                src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/arrow-r-01-1.svg"
              />
              <button className="inline-flex items-center justify-end gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-gray-800 bg-transparent hover:bg-gray-100/10 transition-colors">
                <span className="relative font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
                  Book Your Slot
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


// "use client";

// import React from "react";
// import { usePathname } from "next/navigation";

// export const Navbar = () => {
//   const pathname = usePathname();

//   const navigationItems = [
//     { label: "Loan", path: "/loan" },
//     { label: "Insurance", path: "/insurance" },
//     { label: "Investment", path: "/Investment" },
//   ];

//   return (
//     <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
//       <div className="flex flex-col items-start gap-2.5 pt-6 pb-2.5 px-24 relative flex-1">
//         <nav className="flex items-center justify-between pl-12 pr-40 py-2 relative w-full rounded-full">
//           {/* Logo */}
//           <div className="flex flex-col w-[155.83px] items-start gap-2.5 relative -translate-y-4 animate-fade-in opacity-0">
//             <img
//               className="relative w-full h-[55.38px] object-cover"
//               alt="Finsbee transparent"
//               src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/finsbee-transparent-2.png"
//             />
//           </div>

//           {/* Navigation Buttons */}
//           <div
//             className="flex flex-col items-center justify-center gap-2.5 p-3 relative rounded-2xl -translate-y-4 animate-fade-in opacity-0"
//             style={{ animationDelay: "200ms" }}
//           >
//             <div className="flex items-center justify-center gap-6 relative ">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item.path}
//                   className={`relative flex-1 transition-colors ${
//                     pathname === item.path
//                       ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
//                       : "px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
//                   }`}
//                 >
//                   <span className="relative font-normal text-base tracking-wide leading-normal whitespace-nowrap">
//                     {item.label}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </nav>
//       </div>

//       {/* Header Side Box */}
//       <div
//         className="absolute right-px bottom-[-111px] w-[227px] h-[228px] -translate-y-4 animate-fade-in opacity-0"
//         style={{ animationDelay: "400ms" }}
//       >
//         <div className="relative w-full h-full">
//           <img
//             className="absolute w-full h-[98.11%] top-0 left-0"
//             alt="Rectangle"
//             src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/rectangle-35.svg"
//           />
//           <div className="flex flex-col w-[93.03%] items-end gap-4 px-0 py-2.5 absolute h-[92.78%] top-[7.22%] left-0">
//             <div className="inline-flex items-center justify-end gap-2.5 px-0 py-2.5 relative">
//               <p className="relative w-[187px] font-bold text-2xl text-gray-800 text-right leading-[30px]">
//                 All-in-One Finance Help
//                 <br />@ your doorstep
//               </p>
//             </div>

//             <div className="flex w-[167px] items-center relative">
//               <img
//                 className="relative w-[65.66px] h-[65.84px]"
//                 alt="Arrow r"
//                 src="https://c.animaapp.com/mfrfs2g1ZfgUJE/img/arrow-r-01-1.svg"
//               />
//               <button className="inline-flex items-center justify-end gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-gray-800 bg-transparent hover:bg-gray-100/10 transition-colors">
//                 <span className="relative font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
//                   Book Your Slot
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// "use client";
// import Link from "next/link";

// export const Navbar = () => {
//   return (
//     <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Link href="/" className="text-2xl font-bold text-white">
//             Finsbee
//           </Link>
//         </div>

//         {/* Center Navigation */}
//         <nav className="hidden md:flex flex-1 justify-center space-x-8">
//           <Link href="/" className="text-white hover:text-yellow-400">
//             Home
//           </Link>
//           <Link href="/about" className="text-white hover:text-yellow-400">
//             About
//           </Link>
//           <Link href="/services" className="text-white hover:text-yellow-400">
//             Services
//           </Link>
//           <Link href="/contact" className="text-white hover:text-yellow-400">
//             Contact
//           </Link>
//         </nav>

//         {/* Right Side Button / Box */}
//         <div className="flex-shrink-0">
//           <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };
