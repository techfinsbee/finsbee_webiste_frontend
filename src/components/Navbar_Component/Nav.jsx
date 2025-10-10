"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  "Personal loan": {
    column1: [
      { label: "Personal loan Interest Rates", path: "/Pl" },
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
      { label: "Business Loan Interest Rate", path: "/Bl" },
      { label: "Documents Required For Business Loan", path: "/Bl" },
      { label: "Unsecured Business Loans", path: "/Bl" },
    ],
    column3: [
      { label: "Working Capital Loan", path: "/WC" },
      { label: "Invoice Discounting", path: "/IC" },
    ],
  },
//         { label: "LAP Balance Transfer", path: "/LAP" },
//         { label: "Loan Against Stocks", path: "/LAS" },
//         { label: "Loan Against Property", path: "/loanap" },
  "Loan Against Property": {
    column1: [
      { label: "Loan Against Property Eligibility", path: "/loanap" },
      { label: "Documents Required For Loan Against Property", path: "/loanap" },
      { label: "LAP Balance transfer", path: "/LAP" },
      { label: "Loan Against Property EMI Calculator", path: "/loanap/emi" },
      { label: "Loan Against Property Interest Rates", path: "/loanap" },
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
      { label: "Loan Against Mutual Funds", path: "/LAS" },
      { label: "Loan Against Stocks", path: "/LAS" },
    ],
  },
};

const loanCategories = Object.keys(menuData);

export default function MegaMenu() {
  const [activeCategory, setActiveCategory] = useState("Personal loan");
  const router = useRouter();

  const activeData = useMemo(() => menuData[activeCategory], [activeCategory]);

  const handleNavigate = (path) => {
    if (path) router.push(path);
  };

  return (
    <nav className="flex max-w-[956px] items-start gap-3 px-4 py-6 bg-white rounded-b-2xl shadow-lg transition-all duration-300">
      {/* Left Sidebar */}
      <aside className="inline-flex gap-1 flex-col h-[25rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
        {loanCategories.map((category) => (
          <button
            key={category}
            onMouseEnter={() => setActiveCategory(category)}
            className={`w-[242px] h-[25rem] px-3 py-4 flex items-center justify-start transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#ffd263] text-[#212121] font-semibold"
                : "hover:bg-[#ffebaa] text-[#6a6a6a]"
            }`}
          >
            {category}
          </button>
        ))}
      </aside>

      {/* Right Content */}
      <div className="flex flex-1 min-h-[400px] gap-3 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-1 gap-3 items-start absolute inset-0 bg-white"
          >
            {/* Render each column safely */}
            {["column1", "column2", "column3"].map((colKey, i) => {
              const column = activeData[colKey];
              if (!column) return null; // Skip missing columns
              return (
                <ul
                  key={i}
                  className="flex w-[220px] gap-1 flex-col items-start"
                >
                  {column.map((item, index) => (
                    <li key={index} className="p-3 w-full">
                      <button
                        onClick={() => handleNavigate(item.path)}
                        className="text-left  text-sm text-[#6a6a6a] hover:text-[#212121] hover:underline  transition-colors duration-200"
                      >
                        {item.label}
                      </button>
                    </li>
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
