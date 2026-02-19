"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import PrimaryButton from "../ui/PrimaryButton";
import InputField from "../ui/InputField";
import GenderSelector from "../ui/GenderSelector";
import FormCard from "../ui/FormCard";
import SquareOption from "../ui/SquareOption";
import { SecurityHint } from "../ui/SecurityHint";
import OptionCard from "../ui/OptionCard";
import { DurationSelector } from "../ui/DurationSelector";
import { EligibilityCheckingCard } from "../ui/EligibilityCheckingCard";
import { EligibleSuccessCard } from "../ui/EligibleSuccessCard";
import { NotEligibleCard } from "../ui/NotEligibleCard";
import SalaryModeSelector from "../ui/SalaryModeSelector";
import { getAuth } from "@/lib/authStorage";
import StepHeader from "../ui/StepHeader";

export default function PersonalLoanForm({ extraData, loanType, onBack }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loanId, setLoanId] = useState(null);
  const [eligibilityResult, setEligibilityResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const isNestedFlow = typeof onBack === "function";

  const handleBack = () => {
    // If not first step → just go previous step
    if (step > 1) {
      setStep((prev) => prev - 1);
      return;
    }

    // If first step of PersonalLoanForm
    if (isNestedFlow) {
      onBack(); // go back to HomeLoanForm / LASLoanForm
    } else {
      router.back(); // standalone → browser back
    }
  };

  const validators = {
    pan: (v) => {
      if (!v) return "PAN is required";

      const cleanValue = v.trim().toUpperCase();

      return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(cleanValue)
        ? ""
        : "Enter valid PAN (ABCDE1234F)";
    },

    firstName: (v) => {
      const value = v?.trim();

      if (!value) return "First name is required";

      if (!/^[A-Za-z]+$/.test(value)) return "First name contain only letters";

      if (value.length < 2) return "First name must be at least 2 characters";

      return "";
    },

    dob: (v) => {
      if (!v) return "Date of birth is required";

      const selectedDate = new Date(v);
      const today = new Date();

      if (isNaN(selectedDate.getTime())) {
        return "Invalid date";
      }

      if (selectedDate > today) {
        return "Future date is not allowed";
      }

      const age = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();

      const actualAge =
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < selectedDate.getDate())
          ? age - 1
          : age;

      if (actualAge < 21) {
        return "You must be at least 21 years old";
      }

      if (actualAge > 60) {
        return "Maximum eligible age is 60 years";
      }

      return "";
    },

    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter valid email",

    pincode: (v) =>
      /^[1-9][0-9]{5}$/.test(v) ? "" : "Enter valid 6 digit pincode",

    gender: (v) => (v ? "" : "Please select your gender"),
    employmentType: (v) => (v ? "" : "Please select employment type"),
    loanAmount: (v) => {
      if (!v) return "Loan amount is required";

      const amount = Number(v);
      if (isNaN(amount) || amount <= 0) {
        return "Enter valid loan amount";
      }

      if (amount < 10000) {
        return "Minimum loan amount is ₹10,000";
      }

      return "";
    },

    // tenure: (v) => (v ? "" : "Please select repayment tenure"),

    emi: (v) => {
      if (!v) return "";
      return isNaN(Number(v)) ? "Enter valid EMI amount" : "";
    },
    companyName: (v) =>
      v?.trim().length >= 2 ? "" : "Company name is required",

    netIncome: (v) => {
      if (!v) return "Monthly income is required";
      if (isNaN(Number(v))) return "Enter valid income";
      if (Number(v) < 15000) return "Minimum income ₹15,000";
      return "";
    },

    salaryMode: (v) => (v ? "" : "Please select salary credit mode"),

    employmentDuration: (v) => (v ? "" : "Please select employment duration"),

    officialEmail: (v) => {
      if (!v) return "";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? ""
        : "Enter valid official email";
    },
    businessName: (v) =>
      v?.trim().length >= 2 ? "" : "Business name is required",

    monthlyIncome: (v) => {
      if (!v) return "Monthly income is required";
      if (isNaN(Number(v))) return "Enter valid income";
      if (Number(v) < 15000) return "Minimum income ₹15,000";
      return "";
    },
  };

  const validateField = (name, value) => {
    if (!validators[name]) return "";
    return validators[name](value);
  };

  const validateStep = () => {
    let fieldsToValidate = [];

    if (step === 1) {
      fieldsToValidate = [
        "pan",
        "firstName",
        "gender",
        "dob",
        "email",
        "pincode",
      ];
    }

    if (step === 2) {
      fieldsToValidate = ["loanAmount", "tenure"];
    }

    if (step === 4) {
      fieldsToValidate = [
        "companyName",
        "netIncome",
        "salaryMode",
        "employmentDuration",
        "officialEmail",
      ];
    }

    if (step === 5) {
      fieldsToValidate = [
        "businessName",
        "monthlyIncome",
        "employmentDuration",
      ];
    }

    const newErrors = {};

    fieldsToValidate.forEach((field) => {
      newErrors[field] = validateField(field, form[field]);
    });

    setErrors(newErrors);

    return Object.values(newErrors).every((e) => !e);
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, form[name]),
    }));
  };

  const shouldShowError = (name) =>
    (submitted || touched[name]) && errors[name];

  //  RESET WHEN LOAN TYPE CHANGES
  useEffect(() => {
    setLoanId(null);
    setStep(1);
  }, [loanType]);

  const auth = getAuth();

  const sessionId = auth?.sessionId || null;
  const partnerCustomerId = auth?.customerId || null;
  const verifiedPhone = auth?.phone || null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const finalValue = type === "checkbox" ? checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    if (touched[name] || submitted) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, finalValue),
      }));
    }
  };

  // const employmentTypeMap = {
  //   "Self-employed Professional": "Self-Employed-Professional",
  //   "Business Owner": "Self-Employed-Business",
  //   Salaried: "Salaried",
  // };

  const employmentTypeMap =
    loanType === "Business-Loan"
      ? {
          "Self-employed Professional": "Self-Employed-Professional",
          "Business Owner": "Self-Employed-Business",
        }
      : {
          "Self-employed Professional": "Self-Employed-Professional",
          "Business Owner": "Self-Employed-Business",
          Salaried: "Salaried",
        };

  const employmentOptions =
    loanType === "Business-Loan"
      ? ["Self-employed Professional", "Business Owner"]
      : ["Salaried", "Self-employed Professional", "Business Owner"];

  const getEmploymentDate = (value) => {
    const today = new Date();
    switch (value) {
      case "0-1yr":
        today.setMonth(today.getMonth() - 6);
        break;
      case "2yr +":
        today.setFullYear(today.getFullYear() - 2);
        break;
      case "3yr +":
        today.setFullYear(today.getFullYear() - 3);
        break;
      case "5yr +":
        today.setFullYear(today.getFullYear() - 5);
        break;
      default:
        return "";
    }
    return today.toISOString().split("T")[0];
  };

  const [form, setForm] = useState({
    pan: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    pincode: "",
    loanAmount: "",
    tenure: "",
    emi: "",
    district: "",
    state: "",
    employmentType: "",
    companyName: "",
    netIncome: "",
    salaryMode: "",
    employmentDuration: "",
    officialEmail: "",
    businessName: "",
    monthlyIncome: "",
    itr: false,
    gst: false,
  });

  /* ================= AUTO-FILL CITY/STATE ================= */
  // useEffect(() => {
  //   const pinCode = form.pincode?.trim();
  //   if (pinCode?.length === 6) {
  //     fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const info = data?.[0]?.PostOffice?.[0];
  //         if (info) {
  //           setForm((prev) => ({
  //             ...prev,
  //             district: info.District || "",
  //             state: info.State || "",
  //           }));
  //         } else {
  //           toast.error("Invalid Pincode");
  //           setForm((prev) => ({
  //             ...prev,
  //             district: "",
  //             state: "",
  //           }));
  //         }
  //       })
  //       .catch(() => {
  //         toast.error("Unable to fetch location details");
  //       });
  //   }
  // }, [form.pincode]);

  // ────────────────────────────────────────────────
  // RULE ENGINE – only for Personal Loan (your exact 4 conditions)
  // ────────────────────────────────────────────────
  /* ================= AUTO-FILL CITY/STATE ================= */
  useEffect(() => {
    const pinCode = form.pincode?.trim();

    // Only call API if format is valid
    if (/^[1-9][0-9]{5}$/.test(pinCode)) {
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

            // Clear error if success
            setErrors((prev) => ({
              ...prev,
              pincode: "",
            }));
          } else {
            setForm((prev) => ({
              ...prev,
              district: "",
              state: "",
            }));

            setErrors((prev) => ({
              ...prev,
              pincode: "Enter valid 6 digit pincode",
            }));
          }
        })
        .catch(() => {
          setErrors((prev) => ({
            ...prev,
            pincode: "Unable to fetch location",
          }));
        });
    }
  }, [form.pincode]);

  const calculateAge = (dobText) => {
    if (!dobText) return 0;
    const dob = new Date(dobText);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    return age;
  };

  const calculateYearsSince = (dateStr) => {
    if (!dateStr) return 0;
    const since = new Date(dateStr);
    const today = new Date();
    let years = today.getFullYear() - since.getFullYear();
    const m = today.getMonth() - since.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < since.getDate())) years--;
    return years;
  };

  // const evaluateEligibility = () => {
  //   const employmentKey = employmentTypeMap[form.employmentType] || "";
  //   const salaryCreditMode = form.salaryMode || ""; // from form
  //   const income =
  //     Number(
  //       employmentKey === "Salaried" ? form.netIncome : form.monthlyIncome
  //     ) || 0;
  //   const age = calculateAge(form.dob);
  //   const businessExp = calculateYearsSince(
  //     getEmploymentDate(form.employmentDuration)
  //   );

  //   let rejected = false;
  //   let reason = "";

  //   // Your exact 4 rules
  //   if (salaryCreditMode === "Cash" || salaryCreditMode === "Cheque") {
  //     rejected = true;
  //     reason = "Salary credit mode (Cash/Cheque) is not acceptable";
  //   } else if (income < 15000) {
  //     rejected = true;
  //     reason = "Monthly income is below ₹15,000";
  //   } else if (employmentKey === "Salaried" && (age < 21 || age > 60)) {
  //     rejected = true;
  //     reason = `Age ${age} is outside allowed range for salaried (21–60)`;
  //   } else if (employmentKey === "Self-Employed-Business" && businessExp < 2) {
  //     rejected = true;
  //     reason = "Business experience is less than 2 years";
  //   }

  //   if (loanType === "Loan-Against-Property" && income < 25000) {
  //     rejected = true;
  //     reason =
  //       "Monthly income is below ₹25,000 (required for Loan Against Property)";
  //   }

  //   // 🔥 NEW LAS RULE
  //   if (loanType === "Loan-Against-Security") {
  //     const securityAmount =
  //       Number(extraData?.Total_Securities_Values || form.totalSecurityValue) ||
  //       0;

  //     if (securityAmount < 50000) {
  //       rejected = true;
  //       reason = "Minimum security value required is ₹50,000";
  //     }
  //   }

  //   return { eligible: !rejected, reason };
  // };

  const evaluateEligibility = () => {
    const employmentKey = employmentTypeMap[form.employmentType] || "";
    const salaryCreditMode = form.salaryMode || "";
    const income =
      Number(
        employmentKey === "Salaried" ? form.netIncome : form.monthlyIncome
      ) || 0;

    const age = calculateAge(form.dob);
    const businessExp = calculateYearsSince(
      getEmploymentDate(form.employmentDuration)
    );

    let rejected = false;
    let reason = "";

    /* ================= SALARY MODE CHECK ================= */
    if (salaryCreditMode === "Cash" || salaryCreditMode === "Cheque") {
      rejected = true;
      reason = "Salary credit mode (Cash/Cheque) is not acceptable";
    }

    /* ================= INCOME RULE (DYNAMIC) ================= */

    // Default minimum income
    let minimumIncome = 15000;

    // Home Loan rule (only for Salaried)
    if (loanType === "Home-Loan" && employmentKey === "Salaried") {
      minimumIncome = 25000;
    }

    // Loan Against Property rule
    if (loanType === "Loan-Against-Property") {
      minimumIncome = 25000;
    }

    if (!rejected && income < minimumIncome) {
      rejected = true;
      reason = `Monthly income is below ₹${minimumIncome.toLocaleString()}`;
    }

    /* ================= AGE RULE ================= */
    if (!rejected && employmentKey === "Salaried" && (age < 21 || age > 60)) {
      rejected = true;
      reason = `Age ${age} is outside allowed range for salaried (21–60)`;
    }

    /* ================= BUSINESS EXPERIENCE ================= */
    if (
      !rejected &&
      employmentKey === "Self-Employed-Business" &&
      businessExp < 2
    ) {
      rejected = true;
      reason = "Business experience is less than 2 years";
    }

    /* ================= LAS RULE ================= */
    if (!rejected && loanType === "Loan-Against-Security") {
      const securityAmount =
        Number(extraData?.Total_Securities_Values || form.totalSecurityValue) ||
        0;

      if (securityAmount < 50000) {
        rejected = true;
        reason = "Minimum security value required is ₹50,000";
      }
    }

    return { eligible: !rejected, reason };
  };

  useEffect(() => {
    if (step === 6) {
      const verifyTimer = setTimeout(async () => {
        const result = evaluateEligibility();
        setEligibilityResult(result);

        // 🔥 CALL API FOR BOTH ELIGIBLE & NOT ELIGIBLE
        await submitFinalLoan(result);

        setStep(7);
      }, 5000); // 5 sec verify

      return () => clearTimeout(verifyTimer);
    }
  }, [step]);

  useEffect(() => {
    if (step === 7) {
      const redirectTimer = setTimeout(() => {
        router.push("/");
      }, 5000); // 5 sec result screen

      return () => clearTimeout(redirectTimer);
    }
  }, [step]);

  /* ================= CREATE LOAN ================= */
  const createLoan = async () => {
    if (!partnerCustomerId) {
      toast.error("Please login again.");
      router.push("/");
      return false;
    }

    const panUpper = form.pan.trim().toUpperCase();

    const payload = {
      CustomerId: Number(partnerCustomerId),
      PAN: panUpper,
      name: form.firstName.trim() + " " + form.lastName.trim(),
      gender: form.gender || "",
      Nationality: "Indian",
      DOB: form.dob,
      Email: form.email.trim() || "",
      Pincode: form.pincode.trim() || "",
      City: form.district || "",
      State: form.state || "",
      Loan_Type: loanType || "Personal-Loan",
      Loan_Amount: form.loanAmount || "",
      Desire_Loan_Tenure: form.tenure,
      Current_EMI_Obligation: form.emi.trim() ? "Yes" : "No",
      Current_EMI_Amount: form.emi.trim() || "",
      Employment_Type: employmentTypeMap[form.employmentType] || "",
      source_id: "finsbee-website",
    };

    try {
      setLoading(true);
      const res = await fetch("/api/customer/loan", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-Session-Id": sessionId || "",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: payload,
        }),
      });

      const data = await res.json();
      const result = data?.result?.[0];

      if (result?.success === true) {
        setLoanId(result.LoanID);
        setStep(2);
        return true;
      } else {
        toast.error(result?.message || "Loan creation failed");
        return false;
      }
    } catch {
      toast.error("Server error. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  /* ================= FINAL SUBMIT ================= */
  const submitFinalLoan = async (eligibilityResult) => {
    if (!loanId) {
      toast.error("Loan ID missing");
      return;
    }

    const emiAmount = form.emi?.toString().trim() || "";
    const employmentKey = employmentTypeMap[form.employmentType] || "";

    const basePayload = {
      CustomerId: Number(partnerCustomerId),
      LoanID: loanId,
      PAN: form.pan.toUpperCase().trim(),
      First_Name: form.firstName.trim(),
      Last_Name: form.lastName.trim() || "",
      Gender: form.gender || "",
      DOB: form.dob,
      Email: form.email.trim() || "",
      phone: verifiedPhone || "",
      Pincode: form.pincode.trim() || "",
      City: form.district || "",
      State: form.state || "",
      Loan_Type: loanType || "Personal-Loan",
      Loan_Amount: form.loanAmount,
      Desire_Loan_Tenure: form.tenure,
      Current_EMI_Obligation: emiAmount ? "Yes" : "No",
      Current_EMI_Amount: emiAmount,
      Employment_Type: employmentKey,
      source_id: "finsbee-website",
    };

    let loanSpecificPayload = {};
    if (loanType === "Home-Loan" || loanType === "balance-transfer-of-hl") {
      loanSpecificPayload = {
        Property_Type: extraData?.Property_Type || "",
        Property_Value: extraData?.Property_Value || "",
        Property_Location: extraData?.Property_Location || "",
        Property_Pincode: extraData?.Property_Pincode || "",
        Project_Name: extraData?.Project_Name || "",
        Outstanding_Loan_Amount: extraData?.Outstanding_Loan_Amount || "",
        // eligible_for_loan: extraData?.eligible_for_loan ?? true,
      };
    }

    if (loanType === "Loan-Against-Security") {
      loanSpecificPayload = {
        Security_type: extraData?.Security_type || "",
        Total_Securities_Values: extraData?.Total_Securities_Values || "",
        // eligible_for_loan: extraData?.eligible_for_loan ?? true,
      };
    }

    if (loanType === "Loan-Against-Property") {
      loanSpecificPayload = {
        Property_Type: extraData?.Property_Type || "",
        Property_Value: extraData?.Property_Value || "",
        Property_Location: extraData?.Property_Location || "",
        Property_Pincode: extraData?.Property_Pincode || "",
        Outstanding_Loan_Amount: extraData?.Outstanding_Loan_Amount || "",
        // eligible_for_loan: extraData?.eligible_for_loan ?? true,
      };
    }

    let employmentPayload = {};
    if (employmentKey === "Salaried") {
      employmentPayload = {
        Company_Name: form.companyName.trim(),
        Net_Income: form.netIncome.trim(),
        Salary_Credit_Mode: form.salaryMode,
        Employed_since: getEmploymentDate(form.employmentDuration),
        Official_Mail_ID: form.officialEmail.trim() || "",
      };
    }

    if (employmentKey === "Self-Employed-Professional") {
      employmentPayload = {
        Company_Name: form.businessName.trim(),
        Net_Income: form.monthlyIncome.trim(),
        Employed_since: getEmploymentDate(form.employmentDuration),
        ITR_Filed: form.itr ? "Yes" : "No",
      };
    }

    if (employmentKey === "Self-Employed-Business") {
      employmentPayload = {
        Company_Name: form.businessName.trim(),
        Net_Income: form.monthlyIncome.trim(),
        Employed_since: getEmploymentDate(form.employmentDuration),
        ITR_Filed: form.itr ? "Yes" : "No",
        GST_Available: form.gst ? "Yes" : "No",
      };
    }

    const payload = {
      ...basePayload,
      ...loanSpecificPayload,
      ...employmentPayload,
      eligible_for_loan: eligibilityResult?.eligible ?? false,
    };

    console.log("FINAL PAYLOAD:", JSON.stringify(payload, null, 2));

    try {
      setLoading(true);
      const res = await fetch("/api/customer/loan", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-Session-Id": sessionId || "",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: payload,
        }),
      });

      const data = await res.json();
      const result = data?.result?.[0];

      // if (result?.success === true) {
      //   toast.success(result?.message || "");
      // } else {
      //   toast.error(result?.message || "Submission failed");
      // }
      if (result?.success === true) {
        setApiError(""); // clear error if any
      } else {
        setApiError(result?.message || "Submission failed");
      }
    } catch {
      toast.error("Server error");
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  
  const handleStep1Submit = async () => {
    setSubmitted(true);

    const isValid = validateStep();

    // 🚨 Extra check for API-based pincode validation
    const isLocationValid = form.district && form.state;

    if (!isLocationValid) {
      setErrors((prev) => ({
        ...prev,
        pincode: "Enter valid 6 digit pincode",
      }));
    }

    if (!isValid || !isLocationValid) return;

    await createLoan();
  };

  const handleStep2Submit = () => {
    setSubmitted(true);

    const isValid = validateStep();

    if (!isValid) return;

    setStep(3);
  };

  const handleStep4Submit = () => {
    setSubmitted(true);

    const isValid = validateStep();

    if (!isValid) return;

    setStep(6);
  };

  const handleStep5Submit = () => {
    setSubmitted(true);

    const isValid = validateStep();

    if (!isValid) return;

    // Conditional validation
    if (form.employmentType === "Self-employed Professional" && !form.itr) {
      setErrors((prev) => ({
        ...prev,
        itr: "ITR is mandatory for Self-Employed Professional",
      }));
      return;
    }

    if (form.employmentType === "Business Owner" && (!form.itr || !form.gst)) {
      setErrors((prev) => ({
        ...prev,
        itr: !form.itr ? "ITR is mandatory" : "",
        gst: !form.gst ? "GST is mandatory" : "",
      }));
      return;
    }
    setStep(6);
  };

  return (
    <div className="">
      {/* <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8"> */}

      {/* STEP 1 */}

      {step === 1 && (
        <FormCard>
          {isNestedFlow ? (
            <StepHeader
              title="Help Us Check Your Eligibility"
              subtitle="Takes less than 2 minutes"
              onBack={handleBack}
            />
          ) : (
            <>
              <p className="text-[14px] text-[#7B7B7B] mb-2">
                Takes less than 2 minutes
              </p>

              <h2 className="text-[30px] font-semibold text-[#111] mb-8 leading-tight">
                Help Us Check Your Eligibility
              </h2>
            </>
          )}

          <InputField
            label="PAN No."
            subLabel="(PAN helps us offer better rates. No impact on credit score)"
            name="pan"
            value={form.pan.toUpperCase()}
            onChange={handleChange}
            placeholder="eg : ABCDF1203G"
            maxLength={10}
            onBlur={handleBlur}
            error={shouldShowError("pan") ? errors.pan : ""}
          />

          <InputField
            label="First Name (as per PAN)"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="enter first name"
            onBlur={handleBlur}
            error={shouldShowError("firstName") ? errors.firstName : ""}
          />

          <InputField
            label="Last Name (as per PAN)"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="enter last name"
          />

          <GenderSelector
            value={form.gender}
            onChange={(val) => {
              setForm((prev) => ({ ...prev, gender: val }));

              if (touched.gender || submitted) {
                setErrors((prev) => ({
                  ...prev,
                  gender: validateField("gender", val),
                }));
              }
            }}
            onBlur={handleBlur}
            error={shouldShowError("gender") ? errors.gender : ""}
          />

          <InputField
            label="Your Date of Birth"
            name="dob"
            type="date"
            value={form.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("dob") ? errors.dob : ""}
          />

          <InputField
            label="Your Email Id"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="xxxxxxx@xxx.xxx"
            onBlur={handleBlur}
            error={shouldShowError("email") ? errors.email : ""}
          />

          <div className="mb-8">
            <label className="block text-[15px] text-[#6B6B6B] mb-2">
              Pincode
            </label>

            <input
              name="pincode"
              placeholder="xxxxxx"
              value={form.pincode}
              onChange={handleChange}
              onBlur={() => handleBlur("pincode")}
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
        form.pincode
          ? "border-[#E6B84E] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]"
          : "border-[#D9D9D9]"
      }
    `}
            />
            {shouldShowError("pincode") && (
              <p className="text-red-500 text-sm mt-2">{errors.pincode}</p>
            )}

            {/* Location Display Like Figma */}
            {form.district && form.state && (
              <p className="mt-3 text-[14px] font-semibold text-[#111]">
                {form.district}, {form.state}
              </p>
            )}
          </div>

          <SecurityHint />

          <PrimaryButton onClick={handleStep1Submit} loading={loading}>
            Confirm Details
          </PrimaryButton>
        </FormCard>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <FormCard>
          {/* <p className="text-[15px] text-[#7B7B7B] mb-3">
            This won’t impact your credit score.
          </p>

          <h2 className="text-[32px] font-semibold text-[#111] mb-10 leading-tight">
            How much loan do you need?
          </h2> */}
          <StepHeader
            title="How much loan do you need?"
            subtitle="This won’t impact your credit score."
            onBack={handleBack}
          />

          <InputField
            label="Loan Amount"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("loanAmount") ? errors.loanAmount : ""}
            placeholder="enter loan amount"
          />

          <div className="mb-8">
            <label className="block text-[16px] text-[#6B6B6B] mb-4">
              Choose Repayment Tenure (in month)
            </label>

            <div className="flex gap-5">
              {[12, 24, 36, 60].map((month) => (
                <SquareOption
                  key={month}
                  label={month}
                  active={form.tenure === month.toString()}
                  onClick={() => {
                    setForm({ ...form, tenure: month.toString() });

                    if (submitted) {
                      setErrors((prev) => ({
                        ...prev,
                        tenure: validateField("tenure", month.toString()),
                      }));
                    }
                  }}
                />
              ))}
            </div>

            {shouldShowError("tenure") && (
              <p className="text-red-500 text-sm mt-2">{errors.tenure}</p>
            )}
          </div>

          <InputField
            label="Current EMI Obligation (if any)"
            name="emi"
            value={form.emi}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("emi") ? errors.emi : ""}
            placeholder="enter amount if have any (optional)"
          />

          <SecurityHint />

          <PrimaryButton onClick={handleStep2Submit}>
            Confirm Amount
          </PrimaryButton>
        </FormCard>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <FormCard>
          {/* <p className="text-[15px] text-[#7B7B7B] mb-3">
            This helps us match you with the right lender.
          </p>

          <h2 className="text-[32px] font-semibold text-[#111] mb-10 leading-tight">
            How do you earn?
          </h2> */}
          <StepHeader
            title="How do you earn?"
            subtitle="This helps us match you with the right lender."
            onBack={handleBack}
          />

          {employmentOptions.map((type) => (
            <OptionCard
              key={type}
              title={type}
              description={`Select this if you are ${type.toLowerCase()}`}
              active={form.employmentType === type}
              onClick={() => {
                setForm({ ...form, employmentType: type });
                setStep(type === "Salaried" ? 4 : 5);
              }}
            />
          ))}
        </FormCard>
      )}

      {/* STEP 4 – Salaried */}
      {step === 4 && (
        <FormCard>
          {/* <p className="text-[15px] text-[#7B7B7B] mb-3">
            Your data is secure with us
          </p>

          <h2 className="text-[32px] font-semibold text-[#111] mb-8">
            Tell Us About Your Job
          </h2> */}

          <StepHeader
            title="Tell Us About Your Job"
            subtitle="Your data is secure with us"
            onBack={handleBack}
          />

          <InputField
            label="Company Name"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("companyName") ? errors.companyName : ""}
            placeholder="where are you working?"
          />

          <InputField
            label="Net Income (monthly)"
            name="netIncome"
            value={form.netIncome}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("netIncome") ? errors.netIncome : ""}
            placeholder="your monthly income"
          />

          <SalaryModeSelector
            value={form.salaryMode}
            onChange={(val) => {
              setForm({ ...form, salaryMode: val });

              if (submitted) {
                setErrors((prev) => ({
                  ...prev,
                  salaryMode: validateField("salaryMode", val),
                }));
              }
            }}
            error={shouldShowError("salaryMode") ? errors.salaryMode : ""}
          />

          <div className="mb-8">
            <label className="block text-[16px] text-[#6B6B6B] mb-4">
              Employment Duration
            </label>

            <DurationSelector
              value={form.employmentDuration}
              onChange={(val) => {
                setForm({ ...form, employmentDuration: val });

                if (submitted) {
                  setErrors((prev) => ({
                    ...prev,
                    employmentDuration: validateField(
                      "employmentDuration",
                      val
                    ),
                  }));
                }
              }}
              options={["0-1yr", "2yr +", "3yr +", "5yr +"]}
              error={
                shouldShowError("employmentDuration")
                  ? errors.employmentDuration
                  : ""
              }
            />
          </div>

          <InputField
            label="Official Mail ID (optional)"
            name="officialEmail"
            value={form.officialEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("officialEmail") ? errors.officialEmail : ""}
            placeholder="your company mail ID"
          />

          <SecurityHint />

          <PrimaryButton onClick={handleStep4Submit}>
            Check My Eligibility
          </PrimaryButton>
        </FormCard>
      )}

      {/* STEP 5 – Business */}
      {step === 5 && (
        <FormCard>
          

          <StepHeader
            title="Tell Us About Your Business"
            subtitle="Your data is secure with us"
            onBack={() => setStep(3)}
          />

          <InputField
            label="Business Name"
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("businessName") ? errors.businessName : ""}
            placeholder="enter your business name"
          />

          <InputField
            label="Monthly Income"
            name="monthlyIncome"
            value={form.monthlyIncome}
            onChange={handleChange}
            onBlur={handleBlur}
            error={shouldShowError("monthlyIncome") ? errors.monthlyIncome : ""}
            placeholder="your monthly income"
          />

          <div
            className={`
    bg-[#F7F7F7] rounded-[22px] p-5 mb-6 border transition-all
    ${
      errors.itr || errors.gst
        ? "border-red-400 bg-red-50/30"
        : "border-[#EAEAEA]"
    }
  `}
          >
            <div className="flex justify-between items-center mb-2">
              <p className="text-[16px] font-medium">Are you filing ITR?</p>

              <input
                type="checkbox"
                name="itr"
                checked={form.itr}
                onChange={(e) => {
                  handleChange(e);

                  // Clear error immediately if checked
                  if (submitted) {
                    setErrors((prev) => ({
                      ...prev,
                      itr: "",
                    }));
                  }
                }}
                className="w-12 h-6 accent-[#E6B84E]"
              />
            </div>

            {errors.itr && (
              <p className="text-red-500 text-sm mb-3">{errors.itr}</p>
            )}

            <hr className="my-4" />

            <div className="flex justify-between items-center mb-2">
              <p className="text-[16px] font-medium">Have GST?</p>

              <input
                type="checkbox"
                name="gst"
                checked={form.gst}
                onChange={(e) => {
                  handleChange(e);

                  if (submitted) {
                    setErrors((prev) => ({
                      ...prev,
                      gst: "",
                    }));
                  }
                }}
                className="w-12 h-6 accent-[#E6B84E]"
              />
            </div>

            {errors.gst && <p className="text-red-500 text-sm">{errors.gst}</p>}
          </div>

          <div className="mb-10">
            <label className="block text-[16px] text-[#6B6B6B] mb-4">
              Business / Employment from
            </label>

            <DurationSelector
              value={form.employmentDuration}
              onChange={(val) => {
                setForm({ ...form, employmentDuration: val });

                if (submitted) {
                  setErrors((prev) => ({
                    ...prev,
                    employmentDuration: validateField(
                      "employmentDuration",
                      val
                    ),
                  }));
                }
              }}
              options={["0-1yr", "2yr +", "3yr +", "5yr +"]}
              error={
                shouldShowError("employmentDuration")
                  ? errors.employmentDuration
                  : ""
              }
            />
          </div>

          <SecurityHint />

          <PrimaryButton onClick={handleStep5Submit}>
            Check My Eligibility
          </PrimaryButton>
        </FormCard>
      )}

      {/* STEP 6 – Verifying */}
      {step === 6 && <EligibilityCheckingCard />}

      {/* STEP 7 – Result */}
      {step === 7 &&
        (eligibilityResult?.eligible ? (
          <EligibleSuccessCard />
        ) : (
          <NotEligibleCard />
        ))}
    </div>
  );
}
