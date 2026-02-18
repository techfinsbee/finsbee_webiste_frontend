"use client";

import { useState } from "react";
import PersonalLoanForm from "./PersonalLoanForm";
import FormCard from "../ui/FormCard";
import OptionCard from "../ui/OptionCard";
import InputField from "../ui/InputField";
import PrimaryButton from "../ui/PrimaryButton";
import { SecurityHint } from "../ui/SecurityHint";

export default function LasLoanForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    securityType: "",
    totalSecurityValue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* =====================================================
     STEP 1 – TYPE OF SECURITIES (PIXEL PERFECT)
  ====================================================== */

  // if (step === 1) {
  //   return (
  //     <div className="flex justify-center mt-12 px-4">
  //       <div className="bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8">

  //         <p className="text-[15px] text-gray-500 mb-3">
  //           Loan Against Securities
  //         </p>

  //         <h2 className="text-[36px] font-semibold text-[#111] mb-10">
  //           Type of securities you hold?
  //         </h2>

  //         {[
  //           { label: "Stocks", value: "Stock" },
  //           { label: "Mutual Funds", value: "Mutual-Funds" },
  //           { label: "Bonds", value: "Bonds" },
  //           { label: "Fix Deposit", value: "Fixed-Deposit" },
  //           { label: "Insurance Policy", value: "Insurance-Policy" },
  //         ].map((item) => (
  //           <div
  //             key={item.value}
  //             onClick={() => {
  //               setForm((prev) => ({
  //                 ...prev,
  //                 securityType: item.value,
  //               }));
  //               setStep(2);
  //             }}
  //             className={`mb-6 rounded-[22px] border px-7 py-6 cursor-pointer transition-all
  //               ${
  //                 form.securityType === item.value
  //                   ? "border-[#E6B84E] bg-[#FFF8E6]"
  //                   : "border-gray-300 bg-white hover:border-gray-400"
  //               }`}
  //           >
  //             <h3 className="text-[20px] font-semibold text-[#1A1A1A]">
  //               {item.label}
  //             </h3>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
if (step === 1) {
  return (
    <FormCard>
      <p className="text-[14px] text-[#7B7B7B] mb-3">
        Loan Against Securities
      </p>

      <h2 className="text-[30px] font-semibold text-[#111] mb-10">
        Type of securities you hold?
      </h2>

      {[
        { label: "Stocks", value: "Stock" },
        { label: "Mutual Funds", value: "Mutual-Funds" },
        { label: "Bonds", value: "Bonds" },
        { label: "Fix Deposit", value: "Fixed-Deposit" },
        { label: "Insurance Policy", value: "Insurance-Policy" },
      ].map((item) => (
        <OptionCard
          key={item.value}
          title={item.label}
          active={form.securityType === item.value}
          onClick={() => {
            setForm((prev) => ({
              ...prev,
              securityType: item.value,
            }));
            setStep(2);
          }}
        />
      ))}
    </FormCard>
  );
}

  /* =====================================================
     STEP 2 – TOTAL INVESTMENT VALUE
  ====================================================== */

  // if (step === 2) {
  //   return (
  //     <div className="flex justify-center mt-12 px-4">
  //       <div className="bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8">

  //         <p className="text-[15px] text-gray-500 mb-3">
  //           Current market value of your security
  //         </p>

  //         <h2 className="text-[36px] font-semibold text-[#111] mb-8">
  //           Total Investment Value
  //         </h2>

  //         <label className="block text-gray-500 text-[16px] mb-3">
  //           Total Security Value
  //         </label>

  //         <div className="relative mb-10">
  //           <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[18px]">
  //             ₹
  //           </span>

  //           <input
  //             type="number"
  //             name="totalSecurityValue"
  //             value={form.totalSecurityValue}
  //             onChange={handleChange}
  //             className="w-full rounded-[20px] pl-12 pr-6 py-5 border border-[#E6B84E] outline-none text-[18px] bg-[#FAFAFA]"
  //             placeholder="Enter amount"
  //           />
  //         </div>

  //         <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
  //           <span>🔒</span>
  //           <span>Finsbee keeps your data safe</span>
  //         </div>

  //         <button
  //           onClick={() => setStep(3)}
  //           disabled={!form.totalSecurityValue}
  //           className={`w-full py-5 rounded-[20px] font-semibold text-[20px]
  //             ${
  //               form.totalSecurityValue
  //                 ? "bg-[#E6B84E] text-black"
  //                 : "bg-[#C9BCE9] text-gray-600"
  //             }`}
  //         >
  //           Continue
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }


  if (step === 2) {
  return (
    <FormCard>
      {/* <p className="text-[14px] text-[#7B7B7B] mb-3">
        Current market value of your security
      </p>

      <h2 className="text-[30px] font-semibold text-[#111] mb-8">
        Total Investment Value
      </h2> */}
      <StepHeader
        title="Total Investment Value"
        subtitle="Current market value of your security"
        onBack={() => setStep(1)}
      />

      <InputField
        label="Total Security Value"
        name="totalSecurityValue"
        value={form.totalSecurityValue}
        onChange={handleChange}
        placeholder="Enter amount"
        type="number"
        prefix="₹"  // 👈 If your InputField supports prefix
      />

      <SecurityHint />

      <PrimaryButton
        onClick={() => setStep(3)}
        disabled={!form.totalSecurityValue}
      >
        Continue
      </PrimaryButton>
    </FormCard>
  );
}

  /* =====================================================
     STEP 3 – ATTACH PERSONAL FORM
  ====================================================== */

  if (step === 3) {
    return (
      <PersonalLoanForm
        loanType="Loan-Against-Security"
        onBack={() => setStep(2)}
        extraData={{
          Security_type: form.securityType,
          Total_Securities_Values: form.totalSecurityValue,
          eligible_for_loan: true,
        }}
      />
    );
  }

  return null;
}
