"use client";

export function DurationSelector({
  value,
  onChange,
  options,
}) {
  return (
    <div className="flex gap-4 flex-wrap">
      {options.map((val) => (
        <button
          key={val}
          type="button"
          onClick={() => onChange(val)}
          className={`
            px-6 py-4
            rounded-[16px]
            border
            text-[15px]
            transition-all
            ${
              value === val
                ? "border-[#E6B84E] bg-[#FFF8E6]"
                : "border-[#D9D9D9] bg-white text-gray-500"
            }
          `}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
