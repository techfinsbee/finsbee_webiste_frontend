import StatusCard from "./StatusCard";
import { useRouter } from "next/navigation";

export function EligibleSuccessCard() {
  const router = useRouter();

  return (
    <StatusCard>
      <div className="flex justify-center mb-14">
        <div className="w-[280px] h-[180px] flex items-center justify-center">
          <img
            src="/gif/congretulation.gif"
            alt="Success"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <h2 className="text-[42px] font-semibold text-[#111] mb-6">
        Congratulation
      </h2>

      <p className="text-[22px] text-[#444] mb-3">
        Loan application successfully received
      </p>

      <p className="text-[22px] text-[#444] mb-10">
        Our team will connect you shortly
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
