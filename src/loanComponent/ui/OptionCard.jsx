"use client";

export default function OptionCard({
  title,
  description,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        mb-6 
        rounded-[16px] 
        border 
        px-7 py-7 
        cursor-pointer 
        transition-all duration-200
        ${
          active
            ? "border-[#E6B84E] bg-[#FFF8E6]"
            : "border-[#D9D9D9] bg-white hover:border-gray-400"
        }
      `}
    >
      <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-1">
        {title}
      </h3>
      {description && (
        <p className="text-[#7B7B7B] text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
}
