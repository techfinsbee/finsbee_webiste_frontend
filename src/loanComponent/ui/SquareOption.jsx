"use client";

export default function SquareOption({
  label,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-[78px] h-[78px]
        rounded-[16px]
        border
        text-[16px]
        transition-all duration-200
        ${
          active
            ? "border-[#E6B84E] bg-[#FFF8E6]"
            : "border-[#D9D9D9] bg-white text-gray-500"
        }
      `}
    >
      {label}
    </button>
  );
}
