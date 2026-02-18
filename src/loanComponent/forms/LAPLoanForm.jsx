"use client";

import { useState } from "react";
import PersonalLoanForm from "./PersonalLoanForm";
import FormCard from "../ui/FormCard";
import OptionCard from "../ui/OptionCard";
import InputField from "../ui/InputField";
import PrimaryButton from "../ui/PrimaryButton";
import { SecurityHint } from "../ui/SecurityHint";
import LAPPropertyType from "../ui/LAPPropertyType";

export default function LAPLoanForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    loanOption: "", // Loan-Against-Property | balance-transfer-lap
    propertyType: "", // Residential_Property | Comercial | Industrial
    propertyValue: "",
    propertyLocation: "",
    propertyPincode: "",
    projectName: "",
    outstandingAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };


/* ======================================================
   STEP 1 – WHAT DO YOU NEED (LAP OPTIONS)
====================================================== */

// if (step === 1) {
//   const isBalanceTransfer =
//     form.loanOption === "balance-transfer-lap";

//   return (
//     <div className="max-w-md mx-auto mt-12 bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-8">

//       <p className="text-gray-500 text-sm mb-3">
//         This helps us match you with the right lender.
//       </p>

//       <h2 className="text-[40px] font-bold mb-10">
//         What do you need?
//       </h2>

//       {/* LAP OPTION */}
//       <div
//         onClick={() => {
//           setForm((prev) => ({
//             ...prev,
//             loanOption: "Loan-Against-Property",
//             outstandingAmount: "",
//           }));
//           setStep(2);
//         }}
//         className={`border rounded-[28px] p-8 mb-6 cursor-pointer transition-all
//           ${
//             form.loanOption === "Loan-Against-Property"
//               ? "border-[#E6B84E] bg-[#FFF8E6]"
//               : "border-gray-300 hover:border-gray-400"
//           }`}
//       >
//         <h3 className="text-[24px] font-semibold">
//           LAP
//         </h3>
//         <p className="text-gray-500 mt-2">
//           Select this if you want a new LAP loan
//         </p>
//       </div>

//       {/* BALANCE TRANSFER OPTION */}
//       <div
//         onClick={() =>
//           setForm((prev) => ({
//             ...prev,
//             loanOption: "balance-transfer-lap",
//           }))
//         }
//         className={`border rounded-[28px] p-8 mb-6 cursor-pointer transition-all
//           ${
//             isBalanceTransfer
//               ? "border-[#E6B84E] bg-[#FFF8E6]"
//               : "border-gray-300 hover:border-gray-400"
//           }`}
//       >
//         <h3 className="text-[24px] font-semibold">
//           Balance Transfer
//         </h3>
//         <p className="text-gray-500 mt-2">
//           Select this if you want to transfer your current loan
//         </p>
//       </div>

//       {/* OUTSTANDING INPUT (SHOW ONLY WHEN BALANCE TRANSFER SELECTED) */}
//       {isBalanceTransfer && (
//         <>
//           <label className="block text-gray-500 text-[18px] mb-3">
//             Outstanding Loan Amount
//           </label>

//           <div className="relative mb-8">
//             <input
//               type="number"
//               name="outstandingAmount"
//               value={form.outstandingAmount}
//               onChange={handleChange}
//               placeholder="Enter amount"
//               className="w-full rounded-[20px] px-6 py-5 border border-[#E6B84E] outline-none text-[18px]"
//             />
//             <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 text-[18px]">
//               Lac
//             </span>
//           </div>

//           <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
//             <span>🔒</span>
//             <span>Finsbee keeps your data safe</span>
//           </div>

//           <button
//             onClick={() => setStep(4)}
//             disabled={!form.outstandingAmount}
//             className={`w-full py-5 rounded-[20px] font-semibold text-[20px]
//               ${
//                 form.outstandingAmount
//                   ? "bg-[#E6B84E] text-black"
//                   : "bg-[#C9BCE9] text-gray-600"
//               }`}
//           >
//             Continue
//           </button>
//         </>
//       )}
//     </div>
//   );
// }


if (step === 1) {
  const isBalanceTransfer =
    form.loanOption === "balance-transfer-lap";

  return (
    <FormCard>
      <p className="text-[14px] text-[#7B7B7B] mb-3">
        This helps us match you with the right lender.
      </p>

      <h2 className="text-[32px] font-semibold mb-10">
        What do you need?
      </h2>

      {[
        {
          label: "LAP",
          value: "Loan-Against-Property",
          desc: "Select this if you want a new LAP loan",
        },
        {
          label: "Balance Transfer",
          value: "balance-transfer-lap",
          desc: "Transfer your current LAP loan",
        },
      ].map((item) => (
        <OptionCard
          key={item.value}
          title={item.label}
          description={item.desc}
          active={form.loanOption === item.value}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              loanOption: item.value,
            }))
          }
        />
      ))}

      {isBalanceTransfer && (
        <>
          <InputField
            label="Outstanding Loan Amount (in Lakh)"
            name="outstandingAmount"
            value={form.outstandingAmount}
            onChange={handleChange}
            placeholder="Enter amount"
          />

          <SecurityHint />

          <PrimaryButton
            onClick={() => setStep(4)}
            disabled={!form.outstandingAmount}
          >
            Continue
          </PrimaryButton>
        </>
      )}

      {!isBalanceTransfer && form.loanOption && (
        <PrimaryButton onClick={() => setStep(2)}>
          Continue
        </PrimaryButton>
      )}
    </FormCard>
  );
}


  /* ======================================================
     STEP 2 – PROPERTY TYPE
  ====================================================== */

  // if (step === 2) {
  //   return (
  //     <div className="max-w-md mx-auto mt-12 bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-8">

  //       <p className="text-gray-500 text-sm mb-3">
  //         Unlock your best loan offer
  //       </p>

  //       <h2 className="text-[40px] font-bold mb-10">
  //         Type of property
  //       </h2>

  //       {[
  //         { label: "Residential", value: "Residential_Property" },
  //         { label: "Comercial", value: "Comercial" },
  //         { label: "Industrial", value: "Industrial" },
  //       ].map((item) => (
  //         <div
  //           key={item.value}
  //           onClick={() => {
  //             setForm((prev) => ({
  //               ...prev,
  //               propertyType: item.value,
  //             }));
  //             setStep(3);
  //           }}
  //           className={`border rounded-[28px] p-8 mb-6 cursor-pointer transition-all
  //             ${
  //               form.propertyType === item.value
  //                 ? "border-[#E6B84E] bg-[#FFF8E6]"
  //                 : "border-gray-300 hover:border-gray-400"
  //             }`}
  //         >
  //           <h3 className="text-[22px] font-semibold">
  //             {item.label}
  //           </h3>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }


  if (step === 2) {
  return (
    <FormCard>
      <p className="text-[14px] text-[#7B7B7B] mb-3">
        Unlock your best loan offer
      </p>

      <h2 className="text-[32px] font-semibold mb-10">
        Type of property
      </h2>

      <LAPPropertyType
        value={form.propertyType}
        onChange={(val) => {
          setForm((prev) => ({
            ...prev,
            propertyType: val,
          }));
          setStep(3); // SAME functionality
        }}
      />
    </FormCard>
  );
}

  /* ======================================================
     STEP 3 – PROPERTY DETAILS
  ====================================================== */

  // if (step === 3) {
  //   return (
  //     <div className="max-w-md mx-auto mt-12 bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-8">

  //       <p className="text-gray-500 text-sm mb-3">
  //         Helps us calculate your eligible loan amount
  //       </p>

  //       <h2 className="text-[36px] font-bold mb-8">
  //         Tell us about the property
  //       </h2>

  //       <input
  //         name="propertyValue"
  //         placeholder="Estimated Property Value (in lakh)"
  //         value={form.propertyValue}
  //         onChange={handleChange}
  //         className="w-full rounded-2xl px-6 py-5 border border-gray-300 mb-6 focus:border-[#E6B84E] outline-none"
  //       />

  //       <input
  //         name="propertyLocation"
  //         placeholder="Property Location"
  //         value={form.propertyLocation}
  //         onChange={handleChange}
  //         className="w-full rounded-2xl px-6 py-5 border border-gray-300 mb-6 focus:border-[#E6B84E] outline-none"
  //       />

  //       <input
  //         name="propertyPincode"
  //         placeholder="Property Pincode"
  //         value={form.propertyPincode}
  //         onChange={handleChange}
  //         className="w-full rounded-2xl px-6 py-5 border border-gray-300 mb-6 focus:border-[#E6B84E] outline-none"
  //       />

  //       <input
  //         name="projectName"
  //         placeholder="Project / Builder Name (optional)"
  //         value={form.projectName}
  //         onChange={handleChange}
  //         className="w-full rounded-2xl px-6 py-5 border border-gray-300 mb-8 focus:border-[#E6B84E] outline-none"
  //       />

  //       <button
  //         onClick={() => setStep(4)}
  //         disabled={!form.propertyValue || !form.propertyPincode}
  //         className={`w-full py-5 rounded-2xl font-semibold text-[18px]
  //           ${
  //             form.propertyValue && form.propertyPincode
  //               ? "bg-[#E6B84E] text-black"
  //               : "bg-[#C9BCE9] text-gray-600"
  //           }`}
  //       >
  //         Confirm Details
  //       </button>
  //     </div>
  //   );
  // }
if (step === 3) {
  return (
    <FormCard>
      <p className="text-[14px] text-[#7B7B7B] mb-3">
        Helps us calculate your eligible loan amount
      </p>

      <h2 className="text-[30px] font-semibold text-[#111] mb-8">
        Tell us about the property
      </h2>

      <InputField
        label="Estimated Property Value (in lakh)"
        name="propertyValue"
        value={form.propertyValue}
        onChange={handleChange}
        placeholder="Enter property value"
      />

      <InputField
        label="Property Location"
        name="propertyLocation"
        value={form.propertyLocation}
        onChange={handleChange}
        placeholder="Enter property location"
      />

      <InputField
        label="Property Pincode"
        name="propertyPincode"
        value={form.propertyPincode}
        onChange={handleChange}
        placeholder="Enter pincode"
      />

      <InputField
        label="Project / Builder Name (optional)"
        name="projectName"
        value={form.projectName}
        onChange={handleChange}
        placeholder="Enter project name"
      />

      <SecurityHint />

      <PrimaryButton
        onClick={() => setStep(4)}
        disabled={!form.propertyValue || !form.propertyPincode}
      >
        Confirm Details
      </PrimaryButton>
    </FormCard>
  );
}

  /* ======================================================
     STEP 4 – ATTACH PERSONAL FORM
  ====================================================== */

  if (step === 4) {
    return (
      <PersonalLoanForm
        loanType={form.loanOption} // Loan-Against-Property or balance-transfer-lap
        extraData={{
          Property_Type: form.propertyType,
          Property_Value: form.propertyValue,
          Property_Location: form.propertyLocation,
          Property_Pincode: form.propertyPincode,
          Project_Name: form.projectName,
          Outstanding_Loan: form.outstandingAmount,
          eligible_for_loan: true,
        }}
      />
    );
  }

  return null;
}
