// "use client";

// export default function GenderSelector({ value, onChange }) {
//   const options = ["Male", "Female", "Other"];

//   return (
//     <div className="mb-6">
//       <label className="block text-[15px] text-[#6B6B6B] mb-3">
//         Select your gender
//       </label>

//       <div className="flex gap-4">
//         {options.map((option) => {
//           const active = value === option;

//           return (
//             <button
//               key={option}
//               type="button"
//               onClick={() => onChange(option)}
//               className={`
//                 flex-1 h-[108px]
//                 rounded-[16px] 
//                 py-6 
//                 border 
//                 transition-all duration-200
//                 ${
//                   active
//                     ? "border-[#E6B84E] bg-[#FFF8E6]"
//                     : "border-[#D9D9D9] bg-white"
//                 }
//               `}
//             >
//               <div className="text-[15px] font-medium text-[#1A1A1A]">
//                 {option}
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

export default function GenderSelector({ value, onChange }) {
  const options = [
    { label: "Male", icon: "/loan/man.svg" },
    { label: "Female", icon: "/loan/woman.svg" },
    { label: "Other", icon: "/loan/other.svg" },
  ];

  return (
    <div className="mb-8">
      <label className="block text-[15px] text-[#6B6B6B] mb-4">
        Select your gender
      </label>

      <div className="flex gap-5">
        {options.map((option) => {
          const active = value === option.label;

          return (
            <button
              key={option.label}
              type="button"
              onClick={() => onChange(option.label)}
              className={`
                flex-1
                h-[108px] w-[143px]
                rounded-[16px]
                border
                flex flex-col items-center justify-center
                transition-all duration-200
                ${
                  active
                    ? "border-[#E6B84E] bg-[#FFF8E6] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]"
                    : "border-[#D9D9D9] bg-white hover:border-[#BDBDBD]"
                }
              `}
            >
              {/* ICON */}
              <div className="mb-5 flex items-center justify-center">
                <img
                  src={option.icon}
                  alt={option.label}
                  className={`
                    w-[24px] h-[24px] object-contain
                    ${active ? "opacity-100" : "opacity-60"}
                  `}
                />
              </div>

              {/* LABEL */}
              <div
                className={`
                  text-[16px] font-medium transition-colors
                  ${active ? "text-[#1A1A1A]" : "text-[#8C8C8C]"}
                `}
              >
                {option.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
