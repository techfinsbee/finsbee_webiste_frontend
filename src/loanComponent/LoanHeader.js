"use client";

import Image from "next/image";
import { User } from "lucide-react";

export default function LoanHeader({
  loanType = "Personal Loan",
  currentStep = 1,
  totalSteps = 4,
}) {
  // Base 20% already completed
  const baseProgress = 20;

  // Remaining 80% divided by steps
  const stepProgress = 80 / totalSteps;

  const progress =
    baseProgress + stepProgress * currentStep;

  return (
    <div
      className="relative w-full h-[110px] text-white overflow-hidden rounded-b-[60px]
      bg-[radial-gradient(57.44%_57.44%_at_50%_100%,rgba(49,25,140,0.95)_31.73%,rgba(49,25,140,0.95)_100%)]"
    >
      {/* Overlay blur texture (optional for exact look) */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-900 to-purple-700" />

      <div className="relative z-10 flex justify-between items-center h-full px-10">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/favicon.svg"  // replace with your logo
            alt="finsbee"
            width={40}
            height={40}
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center w-[400px]">

          {/* Loan Title */}
          <span className="font-medium text-lg">
            {loanType}
          </span>

          
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

         

          {/* Profile Icon */}
          <User size={22} />
        </div>
      </div>
    </div>
  );
}
