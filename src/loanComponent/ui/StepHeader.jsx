const StepHeader = ({ title, subtitle, onBack }) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-9 h-9 rounded-full border border-[#E6B84E] bg-[#FFF8E6] hover:scale-105 transition"
        >
          <svg
            className="w-4 h-4 text-[#1A1A1A]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 18l-6-6 6-6"
            />
          </svg>
        </button>

        <span className="text-sm text-[#6B6B6B] font-medium">
          Go Back
        </span>
      </div>

      {subtitle && (
        <p className="text-[15px] text-gray-500 mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-[32px] font-semibold text-[#111] mb-8">
        {title}
      </h2>
    </>
  );
};

export default StepHeader;
