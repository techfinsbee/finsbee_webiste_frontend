


"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function LoanApplicationSection() {
  const cities = ["Bangalore", "Delhi", "Mumbai", "Lucknow"];

  const cityBgMap = {
    Bangalore: "bg/banglore.webp",
    Delhi: "bg/delhi.webp",
    Lucknow: "bg/lucknow.webp",
    Mumbai: "bg/mumbai.webp",
  };

  const loanTypes = [
    { name: "Personal Loan", slug: "apply-for-personal-loan-online"},
    { name: "Business Loan", slug: "apply-for-business-loan" },
    { name: "Home Loan", slug: "apply-for-home-loan" },
    { name: "Education Loan", slug: "apply-for-education-loan" },
  ];

  const columns = cities.map((city) => {
    const cityBg = cityBgMap[city];

    return {
      city,
      links: loanTypes.map((loan) => {
        const query = {
          title: `${loan.name} in ${city}`,  
          ...(cityBg && { bg: cityBg }),
        };

        return {
          label: `${loan.name} in ${city}`,
          href: {
            pathname: `/${loan.slug}`,
            query,
          },
        };
      }),
    };
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = Math.max(window.innerHeight * 2, document.documentElement.scrollHeight * 0.2);
      setShowScrollBtn(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-start px-4 sm:px-0 gap-8 mb-6 md:mb-0">
      <h2 className="w-full text-white text-3xl font-bold mb-4">
        Apply for Loan in Your City
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {columns.map((column, idx) => (
          <nav key={idx} className="flex flex-col gap-3">
            {/* <p className="text-yellow-300 font-semibold text-lg mb-2">{column.city}</p> */}
            {column.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}  // Pass object: { pathname, query }
                className="block text-white hover:underline transition-colors duration-200 text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 mb-[114px] lg:mb-[86px] rounded-full shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <img src="/arrow_button.svg" alt="Scroll to top" className="w-15 h-15" />
        </button>
      )}
    </section>
  );
}