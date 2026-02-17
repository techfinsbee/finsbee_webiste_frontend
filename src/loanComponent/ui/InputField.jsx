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
}) {
  const [focused, setFocused] = useState(false);

  const isFilled = value && value.toString().length > 0;

  const borderStyle = focused
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

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        readOnly={readOnly}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          w-full
          rounded-[8px]
          px-6 py-5
          text-[16px]
          border
          outline-none
          transition-all duration-200
          ${borderStyle}
        `}
      />
    </div>
  );
}
