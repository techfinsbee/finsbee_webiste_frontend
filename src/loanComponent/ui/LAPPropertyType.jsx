"use client";

export default function LAPPropertyType({ value, onChange }) {
  const options = [
    {
      label: "Residential",
      value: "Residential_Property",
      icon: "/loan/ready-to-move.svg", // use your icons
    },
    {
      label: "Comercial",
      value: "Comercial",
      icon: "/loan/construction.svg",
    },
    {
      label: "Industrial",
      value: "Industrial",
      icon: "/loan/plot-construction.svg",
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
              rounded-[16px]
              border
              flex
              flex-col
              items-center
              justify-center
              gap-4
              transition-all
              duration-200
              ${
                active
                  ? "border-[#E6B84E] bg-[#FFF8E6] shadow-[0_6px_20px_rgba(230,184,78,0.18)]"
                  : "border-[#D9D9D9] bg-white hover:border-[#BDBDBD]"
              }
            `}
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={option.icon}
                alt={option.label}
                className="w-full h-full object-contain"
              />
            </div>

            <span
              className={`text-[16px] font-medium ${
                active ? "text-[#1A1A1A]" : "text-[#6B6B6B]"
              }`}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
