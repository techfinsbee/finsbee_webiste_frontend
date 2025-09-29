
"use client"
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoanDropdownOpen, setIsLoanDropdownOpen] = useState(false);

 const navigationItems = [
    {
      label: "Loan",
      path: "/Pl",
      subItems: [
        { label: "Personal Loan", path: "/Pl" },
        { label: "Home Loan", path: "/HL" },
        { label: "Business Loan", path: "/Bl" },
        { label: "Loan Against Mutual Funds", path: "/LAM" },
        { label: "Loan Against Property", path: "/LAP" },
        { label: "Loan Against Securities", path: "/LAS" },
        { label: "Loan Against Property (Alt)", path: "/loanap" },
        { label: "Working Capital", path: "/WC" },
      ],
    },
    { label: "Insurance", path: "/insurance" },
    { label: "Investment", path: "/Investment" },
  ];

 const handleNavigation = (path) => {
    router.push(path);
    setIsLoanDropdownOpen(false); // Close dropdown after navigation
  };

  

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between  mx-auto pt-6 pb-2.5  relative">
        {/* Logo */}
        <div className="flex flex-col w-[155.83px] items-start gap-2.5 ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0"
         onClick={() => handleNavigation("/")}
        >
          <img
            className="relative w-full h-[55.38px] object-cover"
            alt="Finsbee transparent"
            src="/FinsbeeLogo.svg"
          />
        </div>
{/* Navigation Buttons */}
        <div
          className="flex items-center justify-center gap-6 p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
          style={{ animationDelay: "200ms" }}
        >
          {navigationItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() =>
                item.label === "Loan" && setIsLoanDropdownOpen(true)
              }
              onMouseLeave={() =>
                item.label === "Loan" && setIsLoanDropdownOpen(false)
              }
            >
              <button
                className={`relative px-3 py-2 transition-colors ${
                  pathname === item.path
                    ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
                    : "rounded-lg text-gray-200 hover:bg-white/10"
                }`}
                onClick={() =>
                  item.label !== "Loan" && handleNavigation(item.path)
                }
              >
                <span className="relative font-normal text-base tracking-wide leading-normal whitespace-nowrap">
                  {item.label}
                </span>
              </button>
              {item.label === "Loan" && item.subItems && isLoanDropdownOpen && (
                <div className="absolute top-full left-0 mt-[0.5] w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-2 z-50">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.path}
                      onClick={() => handleNavigation(subItem.path)}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg text-sm"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>


        {/* Side Box */}
        <div
          className="absolute right-0 bottom-[-120px] w-[227px] h-[228px] -translate-y-4 animate-fade-in opacity-0"
          style={{ animationDelay: "400ms" }}
        >
          <div className="relative w-full h-full">
            <img
              className="absolute w-full h-[98.11%] top-0 left-0"
              alt="Rectangle"
              src="/Rectangle.svg"
            />
            <div className="flex flex-col w-[93.03%] items-end gap-4 px-0 py-2.5 absolute h-[92.78%] top-[7.22%] left-0">
              <div className="inline-flex items-center justify-end gap-2.5 px-0 py-2.5">
                <p className="relative w-[187px] font-bold text-2xl text-gray-800 text-right leading-[30px]">
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
                <button className="inline-flex items-center justify-end gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-gray-800 bg-transparent hover:bg-gray-100/10 transition-colors">
                  <span className="relative font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
                    Book Your Slot
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


