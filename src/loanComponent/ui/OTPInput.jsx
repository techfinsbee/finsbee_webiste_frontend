import { useRef, useState } from "react";

export default function OTPInput({ length = 6, onComplete }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
      setActiveIndex(index + 1);
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
      setActiveIndex(index - 1);
    }
  };

  return (
    <div className="flex justify-center gap-2 mb-6">
      {otp.map((digit, index) => {
        const isActive = activeIndex === index;

        return (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onFocus={() => setActiveIndex(index)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              w-[56px] 
              text-3xl text-center
              rounded-[8px]
              border
              outline-none
              transition-all duration-200
              ${
                isActive
                  ? "border-[#E6B84E] h-[72px] bg-[#FFF8E6] shadow-[0_0_0_3px_rgba(230,184,78,0.2)]"
                  : "border-[#E0E0E0] bg-white h-[56px]"
              }
            `}
          />
        );
      })}
    </div>
  );
}
