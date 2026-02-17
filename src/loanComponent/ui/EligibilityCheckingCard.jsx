import StatusCard from "./StatusCard";

export function EligibilityCheckingCard() {
  return (
    <StatusCard>
      <div className="flex justify-center mb-16">
        <div className="w-[220px] h-[220px] flex items-center justify-center">
          <img
            src="/gif/verify.gif"
            alt="Verifying"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h2 className="text-[40px] font-semibold text-[#111] mb-4">
        Thank You!
      </h2>

      <p className="text-[22px] text-[#444]">
        Verifying your details
      </p>
    </StatusCard>
  );
}
