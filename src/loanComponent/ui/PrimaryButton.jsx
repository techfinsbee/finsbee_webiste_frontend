"use client";

export default function PrimaryButton({
  children,
  onClick,
  disabled,
  loading,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        w-full
        py-5
        rounded-[8px]
        text-[18px]
        font-semibold
        transition-all duration-200
        ${
          disabled || loading
            ? "bg-[#CFC6E8] text-[#6F6F6F]"
            : "bg-[#E6B84E] text-black shadow-[0_8px_20px_rgba(230,184,78,0.35)]"
        }
      `}
    >
      {loading ? "Processing..." : children}
    </button>
  );
}
