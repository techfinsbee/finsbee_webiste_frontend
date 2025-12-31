"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function LoanApplicationSection() {
  const loanLinks1 = [
    { label: "Personal Loan in Bangalore", path: "/personal-loan" },
    { label: "Business Loan in Bangalore", path: "/business-loan" },
    { label: "Home Loan in Bangalore", path: "/home-loan" },
    { label: "Education Loan in Bangalore", path: "/personal-loan" },
  ];

  const loanLinks2 = [
    { label: "Personal Loan in Delhi", path: "/personal-loan" },
    { label: "Business Loan in Delhi", path: "/business-loan" },
    { label: "Home Loan in Delhi", path: "/home-loan" },
    { label: "Education Loan in Delhi", path: "/personal-loan" },
  ];

  const loanLinks3 = [
    { label: "Personal Loan in Mumbai", path: "/personal-loan" },
    { label: "Business Loan in Mumbai", path: "/business-loan" },
    { label: "Home Loan in Mumbai", path: "/home-loan" },
    { label: "Education Loan in Mumbai", path: "/personal-loan" },
  ];

  const loanLinks4 = [
    { label: "Personal Loan in Lucknow", path: "/personal-loan" },
    { label: "Business Loan in Lucknow", path: "/personal-loan" },
    { label: "Home Loan in Lucknow", path: "/home-loan" },
    { label: "Education Loan in Lucknow", path: "/personal-loan" },
  ];

  const columns = [
    { links: loanLinks1 },
    { links: loanLinks2 },
    { links: loanLinks3 },
    { links: loanLinks4 },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      // Show button if scrolled more than 20% of the page or more than 2 viewport heights
      setShowScrollBtn(scrollPercent > 0.2 || scrollY > 2 * window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full flex flex-col items-start px-4 sm:px-0 gap-8 mb-6 md:mb-0">
      <h2 className="w-full text-white text-3xl font-bold mb-4">
        Apply for Loan in Your City
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {columns.map((column, columnIndex) => (
          <nav key={columnIndex} className="flex flex-col gap-3">
            {column.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.path}
                className={`block  rounded transition-colors duration-200 outline-none
                  ${
                    linkIndex === 0
                      ? "text-white hover:underline"
                      : "text-white hover:underline"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      {/* Scroll To Top Button - only show when footer is in view */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 mb-[126px] text-black rounded-full shadow-lg cursor-pointer transition-all duration-300"
          aria-label="Scroll to top"
        >
          <img src="/arrow_button.svg" alt="Scroll to top" className="w-15 h-15" />
        </button>
      )}
    </section>
  );
}
