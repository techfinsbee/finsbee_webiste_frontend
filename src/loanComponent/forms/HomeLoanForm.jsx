"use client";
import { useState } from "react";
import PersonalLoanForm from "./PersonalLoanForm";

export default function HomeLoanForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    loanOption: "", // Home-Loan | balance-transfer-of-hl
    propertyType: "",
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

  /* =====================================================
     STEP 1 – WHAT DO YOU NEED (UPDATED)
  ====================================================== */

  if (step === 1) {
    const isBalanceTransfer =
      form.loanOption === "balance-transfer-of-hl";

    return (
      <div className="flex justify-center mt-12 px-4">
        <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8">

          <p className="text-[15px] text-gray-500 mb-3">
            This helps us match you with the right lender.
          </p>

          <h2 className="text-[32px] leading-[40px] font-semibold text-[#1A1A1A] mb-10">
            What do you need?
          </h2>

          {/* HOME LOAN OPTION */}
          <div
            onClick={() => {
              setForm((prev) => ({
                ...prev,
                loanOption: "Home-Loan",
                outstandingAmount: "",
              }));
              setStep(2);
            }}
            className={`mb-6 rounded-[22px] border px-7 py-7 cursor-pointer transition-all
              ${
                form.loanOption === "Home-Loan"
                  ? "border-[#E6B84E] bg-[#FFF8E6]"
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
          >
            <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-1">
              Home Loan
            </h3>
            <p className="text-gray-500 text-[15px]">
              Select this if you want a new home loan
            </p>
          </div>

          {/* BALANCE TRANSFER OPTION */}
          <div
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                loanOption: "balance-transfer-of-hl",
              }))
            }
            className={`mb-6 rounded-[22px] border px-7 py-7 cursor-pointer transition-all
              ${
                isBalanceTransfer
                  ? "border-[#E6B84E] bg-[#FFF8E6]"
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
          >
            <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-1">
              Balance Transfer
            </h3>
            <p className="text-gray-500 text-[15px]">
              Transfer your existing home loan
            </p>
          </div>

          {/* OUTSTANDING INPUT – SAME STEP */}
          {isBalanceTransfer && (
            <>
              <label className="block text-[16px] text-gray-600 mb-3">
                Outstanding Loan Amount
              </label>

              <div className="relative mb-8">
                <input
                  type="number"
                  name="outstandingAmount"
                  value={form.outstandingAmount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className="w-full rounded-[20px] px-6 py-5 pr-16 border border-[#E6B84E] bg-[#FAFAFA] outline-none text-[16px]"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
                  Lac
                </span>
              </div>

              <button
                onClick={() => setStep(4)}
                disabled={!form.outstandingAmount}
                className={`w-full py-5 rounded-2xl font-semibold text-[18px]
                  ${
                    form.outstandingAmount
                      ? "bg-[#E6B84E] text-black"
                      : "bg-[#C9BCE9] text-gray-600"
                  }`}
              >
                Continue
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  /* =====================================================
     STEP 2 – PROPERTY TYPE (ONLY FOR NEW HOME LOAN)
  ====================================================== */

  if (step === 2 && form.loanOption === "Home-Loan") {
    return (
      <div className="flex justify-center mt-12 px-4">
        <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8">

          <p className="text-[15px] text-gray-500 mb-3">
            Unlock your best loan offer
          </p>

          <h2 className="text-[32px] font-semibold text-[#111] mb-10">
            Type of property
          </h2>

          {[
            { label: "Ready to Move", value: "Ready_to_Move" },
            { label: "Under Construction", value: "under_construction" },
            { label: "Plot + Construction", value: "plot_construction" },
            { label: "Resale Property", value: "resale_property" },
          ].map((item) => (
            <div
              key={item.value}
              onClick={() => {
                setForm((prev) => ({
                  ...prev,
                  propertyType: item.value,
                }));
                setStep(3);
              }}
              className={`mb-6 rounded-[22px] border px-7 py-8 cursor-pointer transition-all text-center
                ${
                  form.propertyType === item.value
                    ? "border-[#E6B84E] bg-[#FFF8E6]"
                    : "border-gray-300 bg-white hover:border-gray-400"
                }`}
            >
              <h3 className="text-[18px] font-semibold text-[#1A1A1A]">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* =====================================================
     STEP 3 – PROPERTY DETAILS
  ====================================================== */

  if (step === 3) {
    return (
      <div className="flex justify-center mt-12 px-4">
        <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8">

          <p className="text-[15px] text-gray-500 mb-3">
            Helps us calculate your eligible loan amount
          </p>

          <h2 className="text-[32px] font-semibold text-[#111] mb-8">
            Tell us about the property
          </h2>

          <input
            name="propertyValue"
            placeholder="Estimated Property Value (in lakh)"
            value={form.propertyValue}
            onChange={handleChange}
            className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 mb-6"
          />

          <input
            name="propertyLocation"
            placeholder="Property Location"
            value={form.propertyLocation}
            onChange={handleChange}
            className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 mb-6"
          />

          <input
            name="propertyPincode"
            placeholder="Property Pincode"
            value={form.propertyPincode}
            onChange={handleChange}
            className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 mb-6"
          />

          <input
            name="projectName"
            placeholder="Project / Builder Name (optional)"
            value={form.projectName}
            onChange={handleChange}
            className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 mb-8"
          />

          <button
            onClick={() => setStep(4)}
            disabled={!form.propertyValue || !form.propertyPincode}
            className={`w-full py-5 rounded-2xl font-semibold text-[18px]
              ${
                form.propertyValue && form.propertyPincode
                  ? "bg-[#E6B84E] text-black"
                  : "bg-[#C9BCE9] text-gray-600"
              }`}
          >
            Confirm Details
          </button>
        </div>
      </div>
    );
  }

  /* =====================================================
     STEP 4 – ATTACH PERSONAL FORM
  ====================================================== */

  if (step === 4) {
    return (
      <PersonalLoanForm
        loanType={form.loanOption} // Correctly sends Home-Loan OR balance-transfer-of-hl
        extraData={{
          Property_Type: form.propertyType,
          Property_Value: form.propertyValue,
          Property_Location: form.propertyLocation,
          Property_Pincode: form.propertyPincode,
          Project_Name: form.projectName,
          Outstanding_Loan_Amount: form.outstandingAmount,
          eligible_for_loan: true,
        }}
      />
    );
  }

  return null;
}
