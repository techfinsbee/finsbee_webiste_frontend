import StatusCard from "./StatusCard";
import { useRouter } from "next/navigation";

export function NotEligibleCard() {
  const router = useRouter();

  return (
    <StatusCard>
      <div className="flex justify-center mb-14">
        <div className="w-[340px] h-[220px] flex items-center justify-center">
          <img
            src="/gif/error.gif"
            alt="Not Eligible"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <p className="text-[24px] text-[#111] mb-3">
        Based on your current details.
      </p>

      <h2 className="text-[34px] font-semibold text-[#111] mb-6">
        We’re unable to offer a loan at this moment.
      </h2>

      <p className="text-[22px] text-[#666] mb-2">
        try after 2–3 months
      </p>

      <p className="text-[22px] text-[#666] mb-10">
        you may become eligible then.
      </p>

      <p className="text-[18px] text-[#777] mb-3">
        Redirecting in 5 sec
      </p>

      <button
        onClick={() => router.push("/")}
        className="text-[#5B3DF5] text-[18px] font-medium hover:underline"
      >
        ← Go Back to Home
      </button>
    </StatusCard>
  );
}
