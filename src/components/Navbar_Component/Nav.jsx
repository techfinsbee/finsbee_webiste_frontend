

"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const dropdownData = {
  loans: {
    categories: [
      "Personal Loan",
      "Business Loan",
      "Loan Against Properties",
      "Home Loan",
      "Loan Against Securities",
    ],
    content: {
      "Personal Loan": {
        column1: [
          { label: "Apply for Personal Loan Online", path: "/apply-for-personal-loan-online" },
          { label: "Personal Loan for Self Employed", path: "/personal-loan-for-self-employed" },
          { label: "Personal Loan for Government Employees", path: "/personal-loan-for-government-employees"},
          { label: "Education Loan", path: "/education-loan"},
        ],
        column2: [
          { label: "Medical Loan for Emergency", path: "/medical-loan-for-emergency" },
          { label: "Travel Loan", path: "/travel-loan" },
          { label: "Home Renovation Loan", path: "/home-renovation-loan" },
          { label: "Marriage Loan", path: "/marriage-loan" },
        ],
      },
      "Business Loan": {
        column1: [
          { label: "Apply For Business Loan", path: "/apply-for-business-loan" },
          { label: "Working Capital Loan", path: "/working-capital-loan" },
        ],
        column2: [
          { label: "Supply Chain", path: "/supply-chain" },
          { label: "Unsecured Business Loans", path: "/unsecured-business-loans" },
        ],
        column3: [
          { label: "Invoice Discounting", path: "/invoice-discounting" },
        ],
      },
      "Loan Against Properties": {
        column1: [
          { label: "Apply For Loan Against Property", path: "/apply-for-loan-against-property" },
          { label: "LAP Balance Transfer", path: "/lap-balance-transfer" },
        ],
      },
      "Home Loan": {
        column1: [
          { label: "Apply for Home Loan", path: "/apply-for-home-loan" },
        ]
      },
      "Loan Against Securities": {
        column1: [
          { label: "Apply For Loan Against Securities", path: "/apply-for-loan-against-securities" },
          { label: "Loan Against Mutual Funds", path: "/loan-against-mutual-funds" },
        ],
        column2: [
          { label: "Loan Against Stocks", path: "/loan-against-stocks" },
          { label: "Loan Against Insurance", path: "/loan-against-insurance" },
        ],
      },
    },
  },
  instant: {
    items: [
      { label: "Instant Cash Loan", path: "/instant-cash-loan" },
      { label: "Quick Loans Online", path: "/quick-loans-online" },
      { label: "Short Term Loan", path: "/short-term-loan" },
    ],
  },
  auto: {
    items: [
      { label: "Apply For New Car Loan", path: "/apply-for-new-car-loan" },
      { label: "Electric Vehicle (EV) Loan", path: "/electric-vehicle-loan" },
      { label: "Commercial Vehicle Loan", path: "/commercial-vehicle-loan" },
      { label: "Used Car Loan", path: "/used-car-loan" },
      { label: "Loan Against Car", path: "/loan-against-car" },
    ],
  },
  // emi: {
  //   items: [
  //     { label: "Personal Loan EMI Calculator", path: "/emi-calculator/personal-loan" },
  //     { label: "Education Loan EMI Calculator", path: "/emi-calculator/education-loan" },
  //     { label: "Car Loan EMI Calculator", path: "/emi-calculator/car-loan" },
  //     { label: "Business Loan EMI Calculator", path: "/emi-calculator/business-loan" },
  //     { label: "Home Loan EMI Calculator", path: "/emi-calculator/home-loan" },
  //   ],
  // },
  
  emi: {
  items: [
    { label: "Personal Loan EMI Calculator", path: "/emi-calculator/personal-loan-emi" },
    { label: "Education Loan EMI Calculator", path: "/emi-calculator/education-loan-emi" },
    { label: "Car Loan EMI Calculator", path: "/emi-calculator/car-loan-emi" },
    { label: "Business Loan EMI Calculator", path: "/emi-calculator/business-loan-emi" },
    { label: "Home Loan EMI Calculator", path: "/emi-calculator/home-loan-emi" },
  ],
},

};

export default function MegaMenu({ sectionKey = "loans", isSidebar = false, onClose }) {
  const router = useRouter();
  const data = dropdownData[sectionKey];

  const [activeCategory, setActiveCategory] = useState(
    data.categories ? data.categories[0] : null
  );

  useEffect(() => {
    if (data.categories) {
      setActiveCategory(data.categories[0]);
    }
  }, [sectionKey]);

  const handleNavigate = (item) => {
    if (!item?.path) return;
    const finalPath = `${item.path}?title=${encodeURIComponent(item.label)}`;
    router.push(finalPath);
    if (onClose) onClose();
  };

  // Mobile View
  if (isSidebar) {
    if (data.categories) {
      // Loans: full structure
      return (
        <div className="flex flex-col w-full gap-4 ">
          {data.categories.map((category) => {
            const items = [];
            Object.values(data.content[category] || {}).forEach((col) => items.push(...col));
            return (
              <div key={category} className="border-b border-gray-200 pb-4">
                <button className="w-full text-left px-3 py-2 text-base sm:text-lg font-semibold text-gray-800">
                  {category}
                </button>
                <div className="mt-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <button
                        onClick={() => handleNavigate(item)}
                        className="text-left text-sm sm:text-base text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
                      >
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      // Instant / Auto / EMI
      return (
        <div className="flex flex-col w-full gap-4">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <button
                onClick={() => handleNavigate(item)}
                className="text-left text-sm sm:text-base text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
              >
                {item.label}
              </button>
            </motion.div>
          ))}
        </div>
      );
    }
  }

  // Desktop View

  // Special simple white dropdown for Instant / Auto / EMI
  if (!data.categories) {
    return (
      <div className="w-[12rem] bg-white rounded-b-2xl shadow-lg  gap-2 sm:gap-3 px-3 sm:px-2 py-4 sm:py-3 ">
        <ul className="space-y-2">
          {data.items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <button
                onClick={() => handleNavigate(item)}
                className="w-full text-left px-5 py-3 hover:bg-gray-100 rounded-lg text-[#4a4a4a] hover:text-[#212121] cursor-pointer font-medium transition"
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    );
  }

  // Loans: EXACT old beautiful UI
  const activeData = data.content[activeCategory];

  return (
    <nav className="flex  w-[39rem] sm:h-[23rem] items-start gap-2 sm:gap-3 px-3 sm:px-4 py-4 sm:py-6  bg-white rounded-b-2xl shadow-lg">
      {/* Yellow Sidebar - same as old */}
      <aside className="inline-flex gap-1 flex-col h-[20rem] sm:h-[21rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
        {data.categories.map((category) => (
          <button
            key={category}
            onMouseEnter={() => setActiveCategory(category)}
            className={`w-[10rem] px-3 py-3 sm:py-4 text-left text-sm sm:text-base font-medium transition-all duration-300 rounded-lg ${
              activeCategory === category
                ? "bg-[#ffd263] text-[#212121] font-semibold"
                : "hover:bg-[#ffebaa] text-[#4a4a4a] hover:text-[#212121]"
            }`}
          >
            {category}
          </button>
        ))}
      </aside>

      {/* Right Content - exact old multi-column */}
      <div className="flex flex-1  gap-2 sm:gap-3 relative ">
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
              const column = activeData?.[colKey];
              if (!column) return null;

              return (
                <ul
                  key={i}
                  className="flex w-[180px] sm:w-[220px] gap-1 flex-col items-start"
                >
                  {column.map((item, index) => (
                    <motion.li
                      key={index}
                      className=""
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => handleNavigate(item)}
                        className="text-left text-xs sm:text-sm text-[#4a4a4a] w-full px-4 py-3 cursor-pointer hover:text-[#212121] font-medium  hover:bg-gray-100 rounded-lg transition-colors"
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
    </nav>
  );
}