"use client";

import PersonalLoanForm from "./PersonalLoanForm";

import PrimaryButton from "../ui/PrimaryButton";
import InputField from "../ui/InputField";

import FormCard from "../ui/FormCard";

import { SecurityHint } from "../ui/SecurityHint";
import OptionCard from "../ui/OptionCard";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import PropertyTypeSelector from "../ui/PropertyTypeSelector";
import StepHeader from "../ui/StepHeader";

export default function HomeLoanForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    loanOption: "", // "Home-Loan" | "balance-transfer-of-hl" | ""
    propertyType: "",
    propertyValue: "",
    propertyPincode: "",
    projectName: "",
    outstandingAmount: "",
    district: "", // auto-filled
    state: "", // auto-filled
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const validatePincode = (value) => {
    if (!/^[1-9][0-9]{5}$/.test(value)) {
      return "Enter valid 6 digit pincode";
    }
    if (!form.district) {
      return "Invalid Pincode";
    }
    return "";
  };

  // Auto-fill district & state from property pincode
  useEffect(() => {
    const pinCode = form.propertyPincode?.trim();

    if (pinCode?.length === 6 && /^[1-9][0-9]{5}$/.test(pinCode)) {
      fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((res) => res.json())
        .then((data) => {
          const info = data?.[0]?.PostOffice?.[0];

          if (info) {
            setForm((prev) => ({
              ...prev,
              district: info.District || "",
              state: info.State || "",
            }));

            setErrors((prev) => ({
              ...prev,
              propertyPincode: "",
            }));
          } else {
            setForm((prev) => ({
              ...prev,
              district: "",
              state: "",
            }));

            setErrors((prev) => ({
              ...prev,
              propertyPincode: "Invalid Pincode",
            }));
          }
        })
        .catch(() => {
          setErrors((prev) => ({
            ...prev,
            propertyPincode: "Unable to fetch location",
          }));
        });
    } else {
      setForm((prev) => ({
        ...prev,
        district: "",
        state: "",
      }));

      if (pinCode?.length > 0) {
        setErrors((prev) => ({
          ...prev,
          propertyPincode: "Enter valid 6 digit pincode",
        }));
      }
    }
  }, [form.propertyPincode]);

  // ── Step 1: What do you need? ────────────────────────────────────────
  if (step === 1) {
    const isBalanceTransfer = form.loanOption === "balance-transfer-of-hl";

    return (
      <FormCard>
        <p className="text-[15px] text-gray-500 mb-3">
          This helps us match you with the right lender.
        </p>

        <h2 className="text-[32px] leading-[40px] font-semibold text-[#1A1A1A] mb-10">
          What do you need?
        </h2>

        <OptionCard
          title="New Loan"
          description="Select this if you want a new home loan"
          active={form.loanOption === "Home-Loan"}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              loanOption: "Home-Loan",
              outstandingAmount: "",
            }))
          }
        />

        <OptionCard
          title="Transfer Existing Loan"
          description="Transfer your existing home loan"
          active={isBalanceTransfer}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              loanOption: "balance-transfer-of-hl",
            }))
          }
        />

        {isBalanceTransfer && (
          <div className="mt-8">
            <InputField
              label="Outstanding Loan Amount"
              name="outstandingAmount"
              value={form.outstandingAmount}
              onChange={handleChange}
              placeholder="Enter amount in lakhs"
            />

            <PrimaryButton
              onClick={() => setStep(4)}
              disabled={!form.outstandingAmount.trim()}
            >
              Continue
            </PrimaryButton>
          </div>
        )}

        {!isBalanceTransfer && form.loanOption && (
          <PrimaryButton className="mt-8" onClick={() => setStep(2)}>
            Continue
          </PrimaryButton>
        )}
      </FormCard>
    );
  }

  if (step === 2) {
    return (
      <FormCard>
        {/* <p className="text-[15px] text-[#6B6B6B] mb-3">
        Unlock your best loan offer
      </p>

      <h2 className="text-[40px] font-semibold text-[#111] mb-12">
        Type of property
      </h2> */}
        <StepHeader
          title="Type of property"
          subtitle="Unlock your best loan offer"
          onBack={() => setStep(1)}
        />

        <PropertyTypeSelector
          value={form.propertyType}
          onChange={(val) => {
            setForm((prev) => ({ ...prev, propertyType: val }));
            setStep(3);
          }}
        />
      </FormCard>
    );
  }

  // ── Step 3: Property Details (without manual location input) ──────
  if (step === 3) {
    return (
      <FormCard>
        {/* <p className="text-[15px] text-gray-500 mb-3">
          Helps us calculate your eligible loan amount
        </p>

        <h2 className="text-[32px] font-semibold text-[#111] mb-8">
          Tell us about the property
        </h2> */}
        <StepHeader
          title="Tell us about the property"
          subtitle="Helps us calculate your eligible loan amount"
          onBack={() => setStep(2)}
        />

        <InputField
          label="Estimated Property Value (in lakh)"
          name="propertyValue"
          value={form.propertyValue}
          onChange={handleChange}
          placeholder="e.g. 75"
        />

        {/* Property Pincode – styled exactly like Personal Loan */}
        <div className="mb-8">
          <label className="block text-[15px] text-[#6B6B6B] mb-2">
            Property Pincode
          </label>

          {/* <input
            name="propertyPincode"
            placeholder="xxxxxx"
            value={form.propertyPincode}
            onChange={handleChange}
            maxLength={6}
            className={`
              w-full
              rounded-[8px]
              px-6
              py-5
              text-[18px]
              bg-[#FAFAFA]
              border
              outline-none
              transition-all
              ${
                form.propertyPincode
                  ? "border-[#E6B84E] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]"
                  : "border-[#D9D9D9]"
              }
            `}
          /> */}
          <input
            name="propertyPincode"
            placeholder="xxxxxx"
            value={form.propertyPincode}
            onChange={handleChange}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, propertyPincode: true }));
              setErrors((prev) => ({
                ...prev,
                propertyPincode: validatePincode(form.propertyPincode),
              }));
            }}
            maxLength={6}
            className={`
    w-full
    rounded-[8px]
    px-6
    py-5
    text-[18px]
    bg-[#FAFAFA]
    border
    outline-none
    transition-all
    ${
      errors.propertyPincode
        ? "border-red-500"
        : form.propertyPincode
        ? "border-[#E6B84E] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]"
        : "border-[#D9D9D9]"
    }
  `}
          />

          {(touched.propertyPincode || submitted) && errors.propertyPincode && (
            <p className="text-red-500 text-sm mt-2">
              {errors.propertyPincode}
            </p>
          )}

          {/* Auto-filled location display */}
          {form.district && form.state && (
            <p className="mt-3 text-[14px] font-semibold text-[#111]">
              {form.district}, {form.state}
            </p>
          )}
        </div>

        <InputField
          label="Project / Builder Name (optional)"
          name="projectName"
          value={form.projectName}
          onChange={handleChange}
          placeholder="e.g. ATS Greens"
        />

        <SecurityHint className="my-6" />

        <PrimaryButton
          onClick={() => setStep(4)}
          disabled={
            !form.propertyValue.trim() ||
            !form.propertyPincode.trim() ||
            form.propertyPincode.trim().length !== 6 ||
            !form.district.trim() // optional: require valid location fetch
          }
        >
          Confirm Details
        </PrimaryButton>
      </FormCard>
    );
  }

  // ── Step 4: Personal / Common Details ─────────────────────────────
  if (step === 4) {
    const propertyLocationCombined =
      form.district && form.state
        ? `${form.district}, ${form.state}`
        : form.district || form.state || "";

    return (
      <PersonalLoanForm
        loanType={form.loanOption}
        onBack={() => setStep(3)}
        extraData={{
          Property_Type: form.propertyType,
          Property_Value: form.propertyValue,
          Property_Location: propertyLocationCombined,
          Property_Pincode: form.propertyPincode,
          Project_Name: form.projectName,
          Outstanding_Loan_Amount: form.outstandingAmount,
        }}
      />
    );
  }

  return null;
}
