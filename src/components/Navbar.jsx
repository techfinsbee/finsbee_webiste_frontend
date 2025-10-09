

"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import MegaMenu from "./Navbar_Component/Nav";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // State to control MegaMenu visibility

  const navigationItems = [
    {
      label: "Loan",
      path: "/Pl",
    },
    // { label: "Insurance", path: "/insurance" },
    { label: "Investment", path: "/investment" },
  ];

  const handleNavigation = (path) => {
    router.push(path);
    setIsMegaMenuOpen(false); // Close MegaMenu after navigation
  };

  return (
    <nav className="absolute top-2  w-full z-50 bg-transparent">
      <div className="flex items-center justify-between mx-auto pt-8 pb-2.5 relative">
        {/* Logo */}
        <div
          className="flex flex-col w-[155.83px] cursor-pointer items-start gap-2.5 ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0"
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
          className="flex items-center justify-center cursor-pointer gap-6 p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
          style={{ animationDelay: "200ms" }}
        >
          {navigationItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={() =>
                item.label === "Loan" && setIsMegaMenuOpen(true)
              }
              onMouseLeave={() =>
                item.label === "Loan" && setIsMegaMenuOpen(false)
              }
            >
              <button
                className={`relative px-3 py-2 transition-colors cursor-pointer${
                  pathname === item.path
                    ? "p-3 bg-white/30 rounded-xl border border-white/30 text-white"
                    : "rounded-lg text-gray-200 hover:bg-white/10"
                }`}
                onClick={() =>
                  item.label !== "Loan" && handleNavigation(item.path)
                }
              >
                <span className="relative font-normal text-base tracking-wide leading-normal whitespace-nowrap cursor-pointer">
                  {item.label}
                </span>
              </button>
              {item.label === "Loan" && isMegaMenuOpen && (
                <div className="absolute w-[50rem]  top-full left-1/2 -translate-x-1/2 mt-[0.5] z-50 cursor-pointer">
                  <MegaMenu/>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Side Box */}
        <Link
      href="https://finsbee.com/booking/"
      target="_blank" // remove if you want same tab
      className="absolute right-0 bottom-[-120px] w-[227px] h-[228px] -translate-y-4 animate-fade-in"
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
            <p className="relative w-[187px] font-bold text-2xl text-gray-800 text-right leading-[30px] cursor-pointer ">
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
            <span className="inline-flex cursor-pointer  items-center justify-end gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-gray-800 bg-transparent transition-colors font-bold text-base text-gray-800 tracking-wide leading-5 whitespace-nowrap">
              Book Your Slot
            </span>
          </div>
        </div>
      </div>
    </Link>
</div>
    </nav>
  );
};