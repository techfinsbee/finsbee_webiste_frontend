// import { useRef, useState } from "react";

// export default function OTPInput({ length = 6, onComplete }) {
//   const [otp, setOtp] = useState(Array(length).fill(""));
//   const [activeIndex, setActiveIndex] = useState(0);
//   const inputsRef = useRef([]);

//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < length - 1) {
//       inputsRef.current[index + 1].focus();
//       setActiveIndex(index + 1);
//     }

//     if (newOtp.every((digit) => digit !== "")) {
//       onComplete?.(newOtp.join(""));
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputsRef.current[index - 1].focus();
//       setActiveIndex(index - 1);
//     }
//   };

//  return (
//   <div className="flex justify-center gap-2 sm:gap-3 mb-6 px-2">
//     {otp.map((digit, index) => {
//       const isActive = activeIndex === index;

//       return (
//         <input
//           key={index}
//           ref={(el) => (inputsRef.current[index] = el)}
//           type="text"
//           inputMode="numeric"
//           maxLength={1}
//           value={digit}
//           onFocus={() => setActiveIndex(index)}
//           onChange={(e) => handleChange(e.target.value, index)}
//           onKeyDown={(e) => handleKeyDown(e, index)}
//           className={`
//             w-10 sm:w-12 md:w-14
//             h-12 sm:h-14 md:h-[72px]
//             text-xl sm:text-2xl md:text-3xl
//             text-center
//             rounded-[8px]
//             border
//             outline-none
//             transition-all duration-200
//             ${
//               isActive
//                 ? "border-[#E6B84E] bg-[#FFF8E6] shadow-[0_0_0_3px_rgba(230,184,78,0.2)]"
//                 : "border-[#E0E0E0] bg-white"
//             }
//           `}
//         />
//       );
//     })}
//   </div>
// );

// }


"use client";

import { useState, useEffect } from "react";

export default function OTPInput({ length = 6, onComplete }) {
  const [otp, setOtp] = useState("");

  const handleChange = (value) => {
    // Allow only digits
    if (!/^\d*$/.test(value)) return;

    // Limit length
    if (value.length > length) return;

    setOtp(value);

    // Auto trigger when complete
    if (value.length === length) {
      onComplete?.(value);
    }
  };

  return (
    <div className="w-full mb-6">
      <input
        type="tel"
        inputMode="numeric"
        maxLength={length}
        value={otp}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter OTP"
        className="
          w-full
          py-4
          text-lg
          sm:text-xl
          text-center
          tracking-[8px]
          border-b
          border-gray-300
          focus:border-yellow-400
          outline-none
          bg-transparent
          transition-all duration-200
        "
      />
    </div>
  );
}

