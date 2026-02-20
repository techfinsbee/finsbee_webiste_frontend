"use client";
import { useState } from "react";

export default function InputField({
  label,
  subLabel,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  maxLength,
  readOnly = false,
   error,
  onBlur,
   prefix,
}) {
  const [focused, setFocused] = useState(false);

  const isFilled = value && value.toString().length > 0;

 const borderStyle = error
  ? "border-red-400"
  : focused
  ? "border-[#E6B84E] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]"
  : isFilled
  ? "border-[#FFD263]"
  : "border-[#BABABA]";


  return (
    <div className="mb-6">
      {label && (
        <label className="block text-[15px] text-[#6B6B6B] mb-2">
          {label}
          {subLabel && (
            <span className="text-[#9C9C9C] text-[13px] ml-1">
              {subLabel}
            </span>
          )}
        </label>
      )}
    <div className="relative">
        {/* ✅ PREFIX */}
        {prefix && (
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[16px] text-[#6B6B6B]">
            {prefix}
          </span>
        )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
  setFocused(false);
  onBlur && onBlur(name);
}}

        className={`
  w-full
  rounded-[8px]
  ${prefix ? "pl-14 pr-6" : "px-6"}
  py-5
  text-[16px]
  border
  outline-none
  transition-all duration-200
  ${borderStyle}
  appearance-none
`}
      />
      </div>
      {error && (
  <p className="text-red-500 text-sm mt-2">{error}</p>
)}

    </div>
  );
}


// "use client";
// import { useState } from "react";

// export default function InputField({
//   label,
//   subLabel,
//   name,
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   maxLength,
//   readOnly = false,
//   error,          // ← new
//   touched = false // ← new (optional)
// }) {
//   const [focused, setFocused] = useState(false);

//   const isFilled = value && value.toString().length > 0;

//   // Border logic – added error state
//   let borderStyle = "border-[#BABABA]";

//  if (error && (touched || focused || submitted)) {
//     borderStyle = "border-[#E6B84E] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]";
//  } else if (focused) { 
//     borderStyle = "border-red-500";
//   } else if (isFilled) {
//     borderStyle = "border-[#FFD263]";
//   }

//   return (
//     <div className="mb-6">
//       {label && (
//         <label className="block text-[15px] text-[#6B6B6B] mb-2">
//           {label}
//           {subLabel && (
//             <span className="text-[#9C9C9C] text-[13px] ml-1">{subLabel}</span>
//           )}
//         </label>
//       )}

//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         maxLength={maxLength}
//         readOnly={readOnly}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         className={`
//           w-full
//           rounded-[8px]
//           px-6 py-5
//           text-[16px]
//           border
//           outline-none
//           transition-all duration-200
//           ${borderStyle}
//         `}
//       />

//       {/* Error message – only shown when there's error + field was touched */}
//       {(touched[name] || submitted) && error && (
//         <p className="mt-1.5 text-sm text-red-600 font-medium">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }