"use client";

import Image from "next/image";

export default function SalaryModeSelector({ value, onChange }) {
  const options = [
    {
      label: "Bank Transfer",
      value: "Bank",
      icon: "/loan/bank.svg",
    },
    {
      label: "Cheque",
      value: "Cheque",
      icon: "/loan/cheque.svg",
    },
    {
      label: "Cash",
      value: "Cash",
      icon: "/loan/money.svg",
    },
  ];

  return (
    <div className="mb-10">
      <label className="block text-[16px] text-[#6B6B6B] mb-4">
        Salary Mode
      </label>

      <div className="flex gap-5">
        {options.map((option) => {
          const active = value === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`
                flex-1
                h-[108px]
                rounded-[16px]
                border
                flex
                flex-col
                items-center
                justify-center
                gap-4
                transition-all
                duration-200
                ease-out
                select-none
                ${
                  active
                    ? "border-[#E6B84E] bg-[#FFF8E6] shadow-[0_6px_20px_rgba(230,184,78,0.18)]"
                    : "border-[#D9D9D9] bg-white hover:border-[#BDBDBD] hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
                }
              `}
            >
              {/* Icon */}
              <div className="w-6 h-6 relative">
                <Image
                  src={option.icon}
                  alt={option.label}
                  fill
                  sizes="24px"
                  className={`object-contain transition-all duration-200 ${
                    active ? "opacity-100" : "opacity-70"
                  }`}
                />
              </div>

              {/* Label */}
              <span
                className={`text-[16px] font-medium transition-colors ${
                  active ? "text-[#1A1A1A]" : "text-[#7B7B7B]"
                }`}
              >
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
