"use client";

import Image from "next/image";

export default function PropertyTypeSelector({ value, onChange }) {
  const options = [
    {
      label: "Ready to Move",
      value: "Ready_to_Move",
      icon: "/loan/ready-to-move.svg",
    },
    {
      label: "Under Construction",
      value: "under_construction",
      icon: "/loan/construction.svg",
    },
    {
      label: "Plot + Construction",
      value: "plot_construction",
      icon: "/loan/plot-construction.svg",
    },
    {
      label: "Resale Property",
      value: "resale_property",
      icon: "/loan/resale.svg",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {options.map((option) => {
        const active = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`
              h-[116px]
              rounded-[28px]
              border
              flex
              flex-col
              items-center
              justify-center
              gap-5
              transition-all
              duration-200
              ${
                active
                  ? "border-[#E6B84E] bg-[#FFF8E6]"
                  : "border-[#D9D9D9] bg-white"
              }
            `}
          >
            <div className="w-10 h-10 relative">
              <Image
                src={option.icon}
                alt={option.label}
                fill
                className="object-contain"
              />
            </div>

            <span className="text-[18px] font-medium text-[#6B6B6B]">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
