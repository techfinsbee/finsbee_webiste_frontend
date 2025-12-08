

// "use client";

// import React, { useState, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// const menuData = {
//   "Personal loan": {
//     column1: [
//       { label: "Personal loan Interest Rates", path: "/personal-loan/pl_Emi" },
//       { label: "Documents Required For Personal Loan", path: "/personal-loan" },
//       { label: "Personal Loan EMI Calculator", path: "/personal-loan/pl_Emi" },
//       { label: "CIBIL Score for Personal Loan", path: "/personal-loan" },
//       { label: "Personal Loan App", path: "/personal-loan" },
//       { label: "Instant Cash Loan", path: "/personal-loan" },
//       { label: "Short Term Loan", path: "/personal-loan" },
//     ],
//     column2: [
//       { label: "Education Loan", path: "/personal-loan" },
//       { label: "Medical Loan for Emergency", path: "/personal-loan" },
//       { label: "Travel Loan", path: "/personal-loan" },
//       { label: "Home Renovation Loan", path: "/personal-loan" },
//       { label: "Marriage Loan", path: "/personal-loan" },
//       { label: "Women Loan", path: "/personal-loan" },
//       { label: "Quick Loans Online", path: "/personal-loan" },
//     ],
//     column3: [
//       { label: "Doctor Loan", path: "/personal-loan" },
//       { label: "Personal Loan For Self Employed", path: "/personal-loan" },
//       { label: "Personal Loan for Government Employees", path: "/personal-loan" },
//       { label: "Personal Loan For Salaried Employees", path: "/personal-loan" },
//       { label: "Emergency Loan", path: "/personal-loan" },
//     ],
//   },
//   "Business Loan": {
//     column1: [
//       { label: "Business Loan Overview", path: "/business-loan" },
//       { label: "Business Loan EMI Calculator", path: "/business-loan/bl_Emi" },
//       { label: "Business Loan Eligibility", path: "/business-loan" },
//     ],
//     column2: [
//       { label: "Business Loan Interest Rate", path: "/business-loan/bl_Emi" },
//       { label: "Documents Required For Business Loan", path: "/business-loan" },
//       { label: "Unsecured Business Loans", path: "/business-loan" },
//     ],
//     column3: [
//       { label: "Working Capital Loan", path: "/WC" },
//       { label: "Invoice Discounting", path: "/IC" },
//     ],
//   },
//   "Loan Against Property": {
//     column1: [
//       { label: "Loan Against Property Eligibility", path: "/loan-against-property" },
//       { label: "Documents Required For Loan Against Property", path: "/loan-against-property" },
//       { label: "LAP Balance transfer", path: "/LAP" },
//       { label: "Loan Against Property EMI Calculator", path: "/loan-against-property/LoanAP_EMI" },
//       { label: "Loan Against Property Interest Rates", path: "/loan-against-property/LoanAP_EMI" },
//     ],
//   },
//   "Home Loan": {
//     column1: [
//       { label: "Home Loan EMI Calculator", path: "/home-loan/hl_Emi" },
//       { label: "Documents Required For Home Loan", path: "/home-loan" },
//     ],
//   },
//   "Loan Against Securities": {
//     column1: [
//       { label: "Loan Against Mutual Funds", path: "/LAM" },
//       { label: "Loan Against Stocks", path: "/loan-against-securities" },
//     ],
//   },
// };

// const loanCategories = Object.keys(menuData);

// export default function MegaMenu({ isSidebar = false }) {
//   const [activeCategory, setActiveCategory] = useState("Personal loan");
//   const router = useRouter();

//   const activeData = useMemo(() => {
//     if (!isSidebar) {
//       return menuData[activeCategory];
//     }
//     return null;
//   }, [activeCategory, isSidebar]);

//   const handleNavigate = (path) => {
//     if (path) router.push(path);
//   };

//   // Helper function to get all items for a category in sidebar view
//   const getCategoryItems = (category) => {
//     const categoryData = menuData[category];
//     const items = [];
//     if (categoryData.column1) items.push(...categoryData.column1);
//     if (categoryData.column2) items.push(...categoryData.column2);
//     if (categoryData.column3) items.push(...categoryData.column3);
//     return items;
//   };

//   return (
//     <nav
//       className={`${
//         isSidebar
//           ? "flex flex-col w-full bg-white"
//           : "flex max-w-[956px] sm:max-w-[90vw] items-start gap-2 sm:gap-3 px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-b-2xl shadow-lg"
//       } transition-all duration-300`}
//     >
//       {isSidebar ? (
//         <div className="flex flex-col w-full gap-4">
//           {loanCategories.map((category) => (
//             <div key={category} className="border-b border-gray-200 pb-4">
//               <button
//                 className="w-full text-left px-3 py-2 text-base sm:text-lg font-semibold text-gray-800"
//                 onClick={() => {
//                   const section = document.getElementById(`category-${category}`);
//                   if (section) section.scrollIntoView({ behavior: "smooth" });
//                 }}
//               >
//                 {category}
//               </button>
//               <div
//                 id={`category-${category}`}
//                 className="mt-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
//               >
//                 {getCategoryItems(category).map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.2, delay: index * 0.05 }}
//                     className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <button
//                       onClick={() => handleNavigate(item.path)}
//                       className="text-left text-sm sm:text-base text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
//                     >
//                       {item.label}
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <>
//           {/* Desktop Categories */}
//           <aside className="inline-flex gap-1 flex-col h-[20rem] sm:h-[25rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
//             {loanCategories.map((category) => (
//               <button
//                 key={category}
//                 onMouseEnter={() => setActiveCategory(category)}
//                 className={`w-full px-3 py-3 sm:py-4 text-left text-sm sm:text-base font-medium transition-all duration-300 rounded-lg ${
//                   activeCategory === category
//                     ? "bg-[#ffd263] text-[#212121] font-semibold"
//                     : "hover:bg-[#ffebaa] text-[#4a4a4a] hover:text-[#212121]"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </aside>
//           {/* Desktop Menu Items */}
//           <div className="flex flex-1 min-h-[320px] sm:min-h-[400px] gap-2 sm:gap-3 relative overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeCategory}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.25, ease: "easeInOut" }}
//                 className="flex flex-1 gap-2 sm:gap-3 items-start absolute inset-0 bg-white"
//               >
//                 {["column1", "column2", "column3"].map((colKey, i) => {
//                   const column = activeData[colKey];
//                   if (!column) return null;
//                   return (
//                     <ul
//                       key={i}
//                       className="flex w-[180px] sm:w-[220px] gap-1 flex-col items-start"
//                     >
//                       {column.map((item, index) => (
//                         <motion.li
//                           key={index}
//                           className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.2, delay: index * 0.05 }}
//                         >
//                           <button
//                             onClick={() => handleNavigate(item.path)}
//                             className="text-left text-xs sm:text-sm text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
//                           >
//                             {item.label}
//                           </button>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// }
"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  "Personal loan": {
    column1: [
      { label: "Personal loan Interest Rates", path: "/personal-loan/pl_Emi" },
      { label: "Documents Required For Personal Loan", path: "/personal-loan" },
      { label: "Personal Loan EMI Calculator", path: "/personal-loan/pl_Emi" },
      { label: "CIBIL Score for Personal Loan", path: "/personal-loan" },
      { label: "Personal Loan App", path: "/personal-loan" },
      { label: "Instant Cash Loan", path: "/personal-loan" },
      { label: "Short Term Loan", path: "/personal-loan" },
    ],
    column2: [
      { label: "Education Loan", path: "/personal-loan" },
      { label: "Medical Loan for Emergency", path: "/personal-loan" },
      { label: "Travel Loan", path: "/personal-loan" },
      { label: "Home Renovation Loan", path: "/personal-loan" },
      { label: "Marriage Loan", path: "/personal-loan" },
      { label: "Women Loan", path: "/personal-loan" },
      { label: "Quick Loans Online", path: "/personal-loan" },
    ],
    column3: [
      { label: "Doctor Loan", path: "/personal-loan" },
      { label: "Personal Loan For Self Employed", path: "/personal-loan" },
      { label: "Personal Loan for Government Employees", path: "/personal-loan" },
      { label: "Personal Loan For Salaried Employees", path: "/personal-loan" },
      { label: "Emergency Loan", path: "/personal-loan" },
    ],
  },
  "Business Loan": {
    column1: [
      { label: "Business Loan Overview", path: "/business-loan" },
      { label: "Business Loan EMI Calculator", path: "/business-loan/bl_Emi" },
      { label: "Business Loan Eligibility", path: "/business-loan" },
    ],
    column2: [
      { label: "Business Loan Interest Rate", path: "/business-loan/bl_Emi" },
      { label: "Documents Required For Business Loan", path: "/business-loan" },
      { label: "Unsecured Business Loans", path: "/business-loan" },
    ],
    column3: [
      { label: "Working Capital Loan", path: "/WC" },
      { label: "Invoice Discounting", path: "/IC" },
    ],
  },
  "Loan Against Property": {
    column1: [
      { label: "Loan Against Property Eligibility", path: "/loan-against-property" },
      { label: "Documents Required For Loan Against Property", path: "/loan-against-property" },
      { label: "LAP Balance transfer", path: "/LAP" },
      { label: "Loan Against Property EMI Calculator", path: "/loan-against-property/LoanAP_EMI" },
      { label: "Loan Against Property Interest Rates", path: "/loan-against-property/LoanAP_EMI" },
    ],
  },
  "Home Loan": {
    column1: [
      { label: "Home Loan EMI Calculator", path: "/home-loan/hl_Emi" },
      { label: "Documents Required For Home Loan", path: "/home-loan" },
    ],
  },
  "Loan Against Securities": {
    column1: [
      { label: "Loan Against Mutual Funds", path: "/LAM" },
      { label: "Loan Against Stocks", path: "/loan-against-securities" },
    ],
  },
};

const loanCategories = Object.keys(menuData);

export default function MegaMenu({ isSidebar = false, onClose }) {
  const [activeCategory, setActiveCategory] = useState("Personal loan");
  const router = useRouter();

  const activeData = useMemo(() => {
    if (!isSidebar) {
      return menuData[activeCategory];
    }
    return null;
  }, [activeCategory, isSidebar]);

  const handleNavigate = (path) => {
    if (path) {
      router.push(path);
      if (onClose) {
        onClose(); // Close the sidebar or MegaMenu on navigation
      }
    }
  };

  // Helper function to get all items for a category in sidebar view
  const getCategoryItems = (category) => {
    const categoryData = menuData[category];
    const items = [];
    if (categoryData.column1) items.push(...categoryData.column1);
    if (categoryData.column2) items.push(...categoryData.column2);
    if (categoryData.column3) items.push(...categoryData.column3);
    return items;
  };

  return (
    <nav
      className={`${
        isSidebar
          ? "flex flex-col w-full bg-white"
          : "flex max-w-[956px] sm:max-w-[90vw] items-start gap-2 sm:gap-3 px-3 sm:px-4 py-4 sm:py-6 bg-white rounded-b-2xl shadow-lg"
      } transition-all duration-300`}
    >
      {isSidebar ? (
        <div className="flex flex-col w-full gap-4 ">
          {loanCategories.map((category) => (
            <div key={category} className="border-b  border-gray-200 pb-4">
              <button
                className="w-full text-left px-3 py-2 text-base sm:text-lg font-semibold text-gray-800"
                onClick={() => {
                  const section = document.getElementById(`category-${category}`);
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {category}
              </button>
              <div
                id={`category-${category}`}
                className="mt-2 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              >
                {getCategoryItems(category).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className="text-left text-sm sm:text-base text-[#4a4a4a] hover:text-[#212121] font-medium w-full"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Desktop Categories */}
          <aside className="inline-flex gap-1 flex-col h-[20rem] sm:h-[25rem] bg-[#fff9ec] rounded-l-2xl overflow-hidden">
            {loanCategories.map((category) => (
              <button
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                className={`w-full px-3 py-3 sm:py-4 text-left text-sm sm:text-base font-medium  transition-all duration-300 rounded-lg ${
                  activeCategory === category
                    ? "bg-[#ffd263] text-[#212121] font-semibold "
                    : "hover:bg-[#ffebaa] text-[#4a4a4a] hover:text-[#212121]"
                }`}
              >
                {category}
              </button>
            ))}
          </aside>
          {/* Desktop Menu Items */}
          <div className="flex flex-1 min-h-[320px] sm:min-h-[400px] gap-2 sm:gap-3 relative overflow-hidden">
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
                  const column = activeData[colKey];
                  if (!column) return null;
                  return (
                    <ul
                      key={i}
                      className="flex w-[180px] sm:w-[220px] gap-1 flex-col items-start"
                    >
                      {column.map((item, index) => (
                        <motion.li
                          key={index}
                          className="w-full px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => handleNavigate(item.path)}
                            className="text-left text-xs sm:text-sm text-[#4a4a4a] cursor-pointer hover:text-[#212121] font-medium w-full"
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
        </>
      )}
    </nav>
  );
}