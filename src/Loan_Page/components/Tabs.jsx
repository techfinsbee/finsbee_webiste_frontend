export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex w-[512px] bg-transparent p-0 mb-0">
      <button
        className={`flex-1 h-[58px] px-3 py-4 border-none cursor-pointer text-base ${
          activeTab === "why-finsbee"
            ? "bg-yellow-300 rounded-tl-2xl font-bold text-gray-900"
            : "bg-transparent rounded-none font-normal text-gray-400"
        }`}
        onClick={() => setActiveTab("why-finsbee")}
      >
        Why Finsbee?
      </button>
      <button
        className={`flex-1 h-[58px] px-3 py-4 border-none cursor-pointer text-base ${
          activeTab === "faq"
            ? "bg-yellow-300 rounded-tr-2xl font-bold text-gray-900"
            : "bg-transparent rounded-none font-normal text-gray-400"
        }`}
        onClick={() => setActiveTab("faq")}
      >
        Personal Loan FAQ's
      </button>
    </div>
  );
}

// export default function Tabs({ activeTab, onTabClick, isHidden }) {
//   return (
//     <div className={`transition-transform duration-300 ${isHidden ? "-translate-y-full" : ""} flex w-[512px] bg-transparent p-0 mb-0 sticky top-24 z-10 bg-white`}>
//       <button
//         className={`flex-1 h-[58px] px-3 py-4 border-none cursor-pointer text-base ${
//           activeTab === "why-finsbee"
//             ? "bg-gray-50 rounded-tl-2xl font-bold text-gray-900"
//             : "bg-transparent rounded-none font-normal text-gray-400"
//         }`}
//         onClick={() => onTabClick("why-finsbee")}
//       >
//         Why Finsbee?
//       </button>
//       <button
//         className={`flex-1 h-[58px] px-3 py-4 border-none cursor-pointer text-base ${
//           activeTab === "faq"
//             ? "bg-gray-50 rounded-tr-2xl font-bold text-gray-900"
//             : "bg-transparent rounded-none font-normal text-gray-400"
//         }`}
//         onClick={() => onTabClick("faq")}
//       >
//         Personal Loan FAQ's
//       </button>
//     </div>
//   );
// }
