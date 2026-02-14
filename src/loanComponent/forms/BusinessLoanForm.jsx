// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// export default function BusinessLoanForm() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [loanId, setLoanId] = useState(null);

//   const sessionId =
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("auth") || "{}")?.sessionId
//       : null;

//   const partnerCustomerId =
//     typeof window !== "undefined"
//       ? localStorage.getItem("originalCustomerId")
//       : null;

//   const verifiedPhone =
//     typeof window !== "undefined"
//       ? localStorage.getItem("verifiedPhone")
//       : null;

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
//   const employmentTypeMap = {
//     "Self-employed Professional": "Self-Employed-Professional",
//     "Self-employed Business": "Self-Employed-Business",
//   };

//   const getEmploymentDate = (value) => {
//     const today = new Date();

//     switch (value) {
//       case "0-1yr":
//         today.setMonth(today.getMonth() - 6);
//         break;
//       case "2yr +":
//         today.setFullYear(today.getFullYear() - 2);
//         break;
//       case "3yr +":
//         today.setFullYear(today.getFullYear() - 3);
//         break;
//       case "5yr +":
//         today.setFullYear(today.getFullYear() - 5);
//         break;
//       default:
//         return "";
//     }

//     return today.toISOString().split("T")[0]; // YYYY-MM-DD
//   };

//   const [form, setForm] = useState({
//     pan: "",
//     firstName: "",
//     lastName: "",
//     gender: "",
//     dob: "",
//     email: "",
//     pincode: "",
//     loanAmount: "",
//     tenure: "",
//     emi: "", // string
//     district: "", //
//     state: "", //
//     employmentType: "",
//     companyName: "",
//     netIncome: "",
//     salaryMode: "",
//     employmentDuration: "",
//     officialEmail: "",
//     businessName: "",
//     monthlyIncome: "",
//     itr: false,
//     gst: false,
//   });

//   /* ================= AUTO-FILL CITY/STATE ================= */
//   useEffect(() => {
//     const pinCode = form.pincode?.trim();

//     if (pinCode?.length === 6) {
//       fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
//         .then((res) => res.json())
//         .then((data) => {
//           const info = data?.[0]?.PostOffice?.[0];

//           if (info) {
//             setForm((prev) => ({
//               ...prev,
//               district: info.District || "",
//               state: info.State || "",
//             }));
//           } else {
//             toast.error("Invalid Pincode");
//             setForm((prev) => ({
//               ...prev,
//               district: "",
//               state: "",
//             }));
//           }
//         })
//         .catch(() => {
//           toast.error("Unable to fetch location details");
//         });
//     }
//   }, [form.pincode]);

//   /* ================= CREATE LOAN (after Step 1) ================= */
//   const createLoan = async () => {
//     if (!partnerCustomerId) {
//       toast.error("Please login again.");
//       router.push("/");
//       return false;
//     }

//     const panUpper = form.pan.toUpperCase().trim();
//     const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

//     if (!panUpper || !panRegex.test(panUpper)) {
//       toast.error("Please enter a valid PAN (format: ABCDE1234F)");
//       return false;
//     }
//     if (!form.firstName || !form.dob) {
//       toast.error("First name and Date of Birth are required");
//       return false;
//     }

//     const payload = {
//       CustomerId: Number(partnerCustomerId),
//       PAN: panUpper,
//       name: form.firstName.trim() + " " + form.lastName.trim(),
//       gender: form.gender || "",
//       Nationality: "Indian",
//       DOB: form.dob,
//       Email: form.email.trim() || "",
//       Pincode: form.pincode.trim() || "",
//       City: form.district || "",
//       State: form.state || "",
//       // phone: verifiedPhone || "",
//       Loan_Type: "Business-Loan",
//       Loan_Amount: form.loanAmount || "",
//       Desire_Loan_Tenure: form.tenure,
//       Current_EMI_Obligation: form.emi.trim(),
//       Current_EMI_Amount: form.emi.trim() || "",
//       Employment_Type: employmentTypeMap[form.employmentType] || "",
//       source_id: "Partner-App",
//     };

//     try {
//       setLoading(true);
//       const res = await fetch("/api/customer/loan", {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Session-Id": sessionId || "",
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: payload,
//         }),
//       });

//       const data = await res.json();
//       const result = data?.result?.[0];

//       if (result?.success === true) {
//         setLoanId(result.LoanID);
//         setStep(2);
//         return true;
//       } else {
//         toast.error(result?.message || "Loan creation failed");
//         return false;
//       }
//     } catch {
//       toast.error("Server error. Please try again.");
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= FINAL SUBMIT ================= */
//   const submitFinalLoan = async () => {
//     if (!loanId) {
//       toast.error("Loan ID missing");
//       return;
//     }

//     const payload = {
//       CustomerId: Number(partnerCustomerId),
//       LoanID: loanId,
//       PAN: form.pan.toUpperCase().trim(),
//       First_Name: form.firstName.trim(),
//       Last_Name: form.lastName.trim() || "",
//       Gender: form.gender || "",
//       DOB: form.dob,
//       Email: form.email.trim() || "",
//       Pincode: form.pincode.trim() || "",
//       City: form.district || "",
//       State: form.state || "",
//       Loan_Type: "Business-Loan",

//       Loan_Amount: form.loanAmount,
//       Desire_Loan_Tenure: form.tenure,
//       Current_EMI_Obligation: form.emi.trim(),
//       //   Current_EMI_Amount:,
//       Employment_Type: employmentTypeMap[form.employmentType] || "",
//       source_id: "Partner-App",

//       // ✅ BUSINESS DATA
//       Company_Name: form.businessName.trim(),
//       Net_Income: form.monthlyIncome.trim(),
//       Employed_since: getEmploymentDate(form.employmentDuration),
//       ITR_Filed: form.itr ? "Yes" : "No",

//       ...(employmentTypeMap["Self-employed Business"] && {
//         GST_Available: form.gst ? "Yes" : "No",
//       }),
//     };

//     try {
//       setLoading(true);
//       const res = await fetch("/api/customer/loan", {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Session-Id": sessionId || "",
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: payload,
//         }),
//       });

//       const data = await res.json();
//       const result = data?.result?.[0];

//       if (result?.success === true) {
//         setStep(7);
//       } else {
//         toast.error(result?.message || "Submission failed");
//         setStep(3);
//       }
//     } catch {
//       toast.error("Server error");
//       setStep(3);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Auto-submit final when reaching verifying step
//   useEffect(() => {
//     if (step === 6 && loanId) {
//       submitFinalLoan();
//     }
//   }, [step, loanId]);

//   // Auto-redirect after success
//   useEffect(() => {
//     if (step === 7) {
//       const timer = setTimeout(() => {
//         router.push("/");
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [step, router]);

//   /* ================= STEP HANDLERS ================= */
//   const handleStep1Submit = async () => {
//     await createLoan();
//   };

//   const handleStep2Submit = () => {
//     if (!form.loanAmount || !form.tenure) {
//       toast.error("Please select loan amount and tenure");
//       return;
//     }
//     setStep(3);
//   };

//   const handleStep4Submit = () => {
//     if (
//       !form.companyName.trim() ||
//       !form.netIncome.trim() ||
//       !form.salaryMode ||
//       !form.employmentDuration
//     ) {
//       toast.error("Please fill all required fields");
//       return;
//     }
//     setStep(6);
//   };

//   const handleStep5Submit = () => {
//   // Basic required fields
//   if (
//     !form.businessName.trim() ||
//     !form.monthlyIncome.trim() ||
//     !form.employmentDuration
//   ) {
//     toast.error("Please fill required fields");
//     return;
//   }

//   // ✅ ITR mandatory for Self-Employed-Professional
//   if (
//     form.employmentType === "Self-Employed-Professional" &&
//     !form.itr
//   ) {
//     toast.error("ITR is mandatory for Self-Employed Professional");
//     return;
//   }

//   // ✅ ITR + GST mandatory for Self-Employed-Business
//   if (
//     form.employmentType === "Self-Employed-Business" &&
//     (!form.itr || !form.gst)
//   ) {
//     toast.error("ITR & GST are mandatory for Self-Employed Business");
//     return;
//   }

//   // If everything is correct
//   setStep(6);
// };

//   return (
//     <div className="flex justify-center mt-12 px-4">
//       <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8">
// {/* STEP 1 */}
// {step === 1 && (
//   <>
//     <p className="text-sm text-gray-500 mb-2">
//       Takes less than 2 minutes
//     </p>
//     <h2 className="text-[28px] font-semibold text-gray-900 mb-8 leading-snug">
//       Help Us Check Your Eligibility
//     </h2>

//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         PAN No.
//         <span className="text-gray-400 text-sm">
//           {" "}
//           (PAN helps us offer better rates. No impact on credit score )
//         </span>
//       </label>
//       <input
//         name="pan"
//         placeholder="eg : ABCDF1203G"
//         value={form.pan.toUpperCase()}
//         onChange={handleChange}
//         maxLength={10}
//         className={`w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border transition-all outline-none
//           ${
//             form.pan
//               ? "border-[#E6B84E] shadow-[0_0_0_2px_rgba(230,184,78,0.15)]"
//               : "border-gray-300"
//           }`}
//       />
//     </div>

//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         First Name (as per PAN)
//       </label>
//       <input
//         name="firstName"
//         placeholder="enter first name"
//         value={form.firstName}
//         onChange={handleChange}
//         className={`w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border transition-all outline-none
//           ${form.firstName ? "border-[#E6B84E]" : "border-gray-300"}`}
//       />
//     </div>

//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         Last Name (as per PAN)
//       </label>
//       <input
//         name="lastName"
//         placeholder="enter last name"
//         value={form.lastName}
//         onChange={handleChange}
//         className="w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border border-gray-300 outline-none"
//       />
//     </div>

//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-3">
//         Select your gender
//       </label>
//       <div className="flex gap-4">
//         {["Male", "Female", "Other"].map((g) => (
//           <button
//             key={g}
//             type="button"
//             onClick={() => setForm({ ...form, gender: g })}
//             className={`flex-1 rounded-2xl py-6 border transition-all
//               ${
//                 form.gender === g
//                   ? "border-[#E6B84E] bg-[#FFF8E6]"
//                   : "border-gray-300 bg-white"
//               }`}
//           >
//             <div className="text-sm text-gray-700 font-medium">{g}</div>
//           </button>
//         ))}
//       </div>
//     </div>

//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         Your Date of Birth
//       </label>
//       <input
//         type="date"
//         name="dob"
//         value={form.dob}
//         onChange={handleChange}
//         className={`w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border outline-none
//           ${form.dob ? "border-[#E6B84E]" : "border-gray-300"}`}
//       />
//     </div>

//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         Your Email Id
//       </label>
//       <input
//         name="email"
//         placeholder="xxxxxxx@xxx.xxx"
//         value={form.email}
//         onChange={handleChange}
//         className="w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border border-gray-300 outline-none"
//       />
//     </div>

//     <div className="mb-8">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         Pincode
//       </label>
//       <input
//         name="pincode"
//         placeholder="xxxxxx"
//         value={form.pincode}
//         onChange={handleChange}
//         maxLength={6}
//         className="w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border border-gray-300 outline-none"
//       />
//     </div>
//     {/* DISTRICT */}
//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         City / District
//       </label>
//       <input
//         value={form.district}
//         readOnly
//         className="w-full rounded-2xl px-5 py-4 bg-[#F3F3F3] border border-gray-300 outline-none"
//       />
//     </div>

//     {/* STATE */}
//     <div className="mb-6">
//       <label className="block text-[15px] text-gray-700 mb-2">
//         State
//       </label>
//       <input
//         value={form.state}
//         readOnly
//         className="w-full rounded-2xl px-5 py-4 bg-[#F3F3F3] border border-gray-300 outline-none"
//       />
//     </div>

//     <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-6">
//       <span className="text-lg">🔒</span>
//       <span>Finsbee keeps your data safe</span>
//     </div>

//     <button
//       onClick={handleStep1Submit}
//       disabled={loading || !form.pan || !form.firstName || !form.dob}
//       className={`w-full py-5 rounded-2xl font-semibold transition-all
//         ${
//           form.pan && form.firstName && form.dob && !loading
//             ? "bg-[#E6B84E] text-black"
//             : "bg-[#CFC6E8] text-gray-600"
//         }`}
//     >
//       {loading ? "Processing..." : "Confirm Details"}
//     </button>
//   </>
// )}

// {/* STEP 2 */}
// {step === 2 && (
//   <>
//     <p className="text-[15px] text-gray-500 mb-3">
//       This won’t impact your credit score.
//     </p>
//     <h2 className="text-[32px] leading-[40px] font-semibold text-[#1A1A1A] mb-10">
//       How much loan do you need?
//     </h2>

//     <div className="mb-8">
//       <label className="block text-[16px] text-gray-600 mb-3">
//         Loan Amount
//       </label>
//       <div className="relative">
//         <input
//           name="loanAmount"
//           placeholder="enter loan amount"
//           value={form.loanAmount}
//           onChange={handleChange}
//           className={`w-full rounded-[18px] px-6 py-5 pr-16 text-[16px] border bg-[#FAFAFA] outline-none transition-all
//             ${
//               form.loanAmount
//                 ? "border-[#E6B84E] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]"
//                 : "border-gray-300"
//             }`}
//         />
//         <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-[15px]">
//           lac
//         </span>
//       </div>
//     </div>

//     <div className="mb-8">
//       <label className="block text-[16px] text-gray-600 mb-4">
//         Choose Repayment Tenure (in month)
//       </label>
//       <div className="flex gap-5">
//         {[12, 24, 36, 60].map((month) => (
//           <button
//             key={month}
//             type="button"
//             onClick={() =>
//               setForm({ ...form, tenure: month.toString() })
//             }
//             className={`w-[78px] h-[78px] rounded-[20px] border text-[16px] transition-all
//               ${
//                 form.tenure === month.toString()
//                   ? "border-[#E6B84E] bg-[#FFF8E6]"
//                   : "border-gray-300 bg-white text-gray-500"
//               }`}
//           >
//             {month}
//           </button>
//         ))}
//       </div>
//     </div>

//     <div className="mb-10">
//       <label className="block text-[16px] text-gray-600 mb-3">
//         Current EMI Obligation (if any)
//       </label>
//       <input
//         name="emi"
//         placeholder="enter amount if have any (optional)"
//         value={form.emi}
//         onChange={handleChange}
//         className="w-full rounded-[18px] px-6 py-5 border border-gray-300 bg-[#FAFAFA] outline-none"
//       />
//     </div>

//     <div className="flex items-center justify-center gap-2 text-gray-500 text-[14px] mb-8">
//       <span>🔒</span>
//       <span>Finsbee keeps your data safe</span>
//     </div>

//     <button
//       onClick={handleStep2Submit}
//       disabled={!form.loanAmount || !form.tenure}
//       className={`w-full py-5 rounded-[20px] font-semibold text-[18px] transition-all
//         ${
//           form.loanAmount && form.tenure
//             ? "bg-[#E6B84E] text-black"
//             : "bg-[#C9BCE9] text-gray-600"
//         }`}
//     >
//       Confirm Amount
//     </button>
//   </>
// )}

// {/* STEP 3 */}
// {step === 3 && (
//   <>
//     <p className="text-[15px] text-gray-500 mb-3">
//       This helps us match you with the right lender.
//     </p>
//     <h2 className="text-[32px] leading-[40px] font-semibold text-[#1A1A1A] mb-10">
//       How do you earn?
//     </h2>

//     {["Self-employed Professional", "Business Owner"].map((type) => (
//       <div
//         key={type}
//         onClick={() => {
//           setForm({ ...form, employmentType: type });
//           setStep(5); // Always Step 5 for business loan
//         }}
//         className={`mb-6 rounded-[22px] border px-7 py-7 cursor-pointer transition-all
// ${
//   form.employmentType === type
//     ? "border-[#E6B84E] bg-[#FFF8E6]"
//     : "border-gray-300 bg-white hover:border-gray-400"
// }`}
//       >
//         <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-1">
//           {type}
//         </h3>
//         <p className="text-gray-500 text-[15px]">
//           Select this if you are {type.toLowerCase()}
//         </p>
//       </div>
//     ))}
//   </>
// )}

// {/* STEP 4 – Salaried */}
// {step === 4 && (
//   <>
//     <p className="text-[15px] text-gray-500 mb-3">
//       Your data is secure with us
//     </p>
//     <h2 className="text-[32px] font-semibold text-[#111] mb-8 leading-tight">
//       Tell Us About Your Job
//     </h2>

//     <div className="mb-6">
//       <label className="block text-[16px] text-gray-600 mb-3">
//         Company Name
//       </label>
//       <input
//         name="companyName"
//         placeholder="where are you working?"
//         value={form.companyName}
//         onChange={handleChange}
//         className={`w-full rounded-2xl px-6 py-5 text-[16px] bg-[#F9F9F9] border outline-none transition
//           ${form.companyName ? "border-[#E6B84E]" : "border-gray-300"}`}
//       />
//     </div>

//     <div className="mb-6">
//       <label className="block text-[16px] text-gray-600 mb-3">
//         Net Income (monthly)
//       </label>
//       <input
//         name="netIncome"
//         placeholder="your monthly income"
//         value={form.netIncome}
//         onChange={handleChange}
//         className={`w-full rounded-2xl px-6 py-5 text-[16px] bg-[#F9F9F9] border outline-none transition
//           ${form.netIncome ? "border-[#E6B84E]" : "border-gray-300"}`}
//       />
//     </div>

//     <div className="mb-8">
//       <label className="block text-[16px] text-gray-600 mb-4">
//         Salary Mode
//       </label>
//       <div className="flex gap-5">
//         {["Bank", "Cheque", "Cash"].map((mode) => (
//           <button
//             key={mode}
//             type="button"
//             onClick={() => setForm({ ...form, salaryMode: mode })}
//             className={`flex-1 rounded-2xl border py-8 text-center transition-all
//               ${
//                 form.salaryMode === mode
//                   ? "border-[#E6B84E] bg-[#FFF8E6]"
//                   : "border-gray-300 bg-white text-gray-600"
//               }`}
//           >
//             <div className="text-[16px] font-medium">{mode}</div>
//           </button>
//         ))}
//       </div>
//     </div>

//     <div className="mb-8">
//       <label className="block text-[16px] text-gray-600 mb-4">
//         Employment Duration
//       </label>
//       <div className="flex gap-4 flex-wrap">
//         {["3 mos.", "6 mos.", "12 mos.", "1 yr +"].map((val) => (
//           <button
//             key={val}
//             type="button"
//             onClick={() =>
//               setForm({ ...form, employmentDuration: val })
//             }
//             className={`px-6 py-4 rounded-2xl border text-[15px] transition
//               ${
//                 form.employmentDuration === val
//                   ? "border-[#E6B84E] bg-[#FFF8E6]"
//                   : "border-gray-300 bg-white text-gray-500"
//               }`}
//           >
//             {val}
//           </button>
//         ))}
//       </div>
//     </div>

//     <div className="mb-10">
//       <label className="block text-[16px] text-gray-600 mb-3">
//         Official Mail ID (optional)
//       </label>
//       <input
//         name="officialEmail"
//         placeholder="your company mail ID"
//         value={form.officialEmail}
//         onChange={handleChange}
//         className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 outline-none focus:border-[#E6B84E]"
//       />
//     </div>

//     <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
//       <span>🔒</span>
//       <span>Finsbee keeps your data safe</span>
//     </div>

//     <button
//       onClick={handleStep4Submit}
//       disabled={loading}
//       className={`w-full py-5 rounded-2xl font-semibold text-[18px] transition
//         ${
//           form.companyName.trim() &&
//           form.netIncome.trim() &&
//           form.salaryMode &&
//           form.employmentDuration &&
//           !loading
//             ? "bg-[#E6B84E] text-black"
//             : "bg-[#C9BCE9] text-gray-600"
//         }`}
//     >
//       {loading ? "Processing..." : "Check My Eligibility"}
//     </button>
//   </>
// )}

// {/* STEP 5 – Business */}
// {step === 5 && (
//   <>
//     <p className="text-[15px] text-gray-500 mb-3">
//       Your data is secure with us
//     </p>
//     <h2 className="text-[32px] font-semibold text-[#111] mb-8 leading-tight">
//       Tell Us About Your Business
//     </h2>

//     <div className="mb-6">
//       <label className="block text-[16px] text-gray-600 mb-3">
//         Business Name
//       </label>
//       <input
//         name="businessName"
//         placeholder="enter your business name"
//         value={form.businessName}
//         onChange={handleChange}
//         className={`w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border outline-none transition
//           ${
//             form.businessName ? "border-[#E6B84E]" : "border-gray-300"
//           }`}
//       />
//     </div>

//     <div className="mb-6">
//       <label className="block text-[16px] text-gray-600 mb-3">
//         Monthly Income
//       </label>
//       <input
//         name="monthlyIncome"
//         placeholder="your monthly income"
//         value={form.monthlyIncome}
//         onChange={handleChange}
//         className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 focus:border-[#E6B84E]"
//       />
//     </div>

//     <div className="mb-6 bg-[#F7F7F7] rounded-2xl p-5 border border-gray-200">
//       <div className="flex justify-between items-center mb-5">
//         <div>
//           <p className="font-medium text-[16px]">
//             Are you filing ITR{" "}
//             <span className="text-indigo-600">(No / Yes)</span>
//           </p>
//           <p className="text-sm text-gray-500">
//             Mandatory for Loan Process
//           </p>
//         </div>
//         <input
//           type="checkbox"
//           name="itr"
//           className="w-12 h-6 accent-[#E6B84E]"
//           checked={form.itr}
//           onChange={handleChange}
//         />
//       </div>
//       <hr className="my-4" />
//       <div className="flex justify-between items-center">
//         <p className="font-medium text-[16px]">Have GST ?</p>
//         <input
//           type="checkbox"
//           name="gst"
//           className="w-12 h-6 accent-[#E6B84E]"
//           checked={form.gst}
//           onChange={handleChange}
//         />
//       </div>
//     </div>

//     <div className="mb-10">
//       <label className="block text-[16px] text-gray-600 mb-4">
//         Business / Employment from
//       </label>
//       <div className="flex gap-4 flex-wrap">
//         {["0-1yr", "2yr +", "3yr +", "5yr +"].map((val) => (
//           <button
//             key={val}
//             type="button"
//             onClick={() =>
//               setForm({ ...form, employmentDuration: val })
//             }
//             className={`px-6 py-4 rounded-2xl border text-[15px]
//               ${
//                 form.employmentDuration === val
//                   ? "border-[#E6B84E] bg-[#FFF8E6]"
//                   : "border-gray-300 bg-white text-gray-500"
//               }`}
//           >
//             {val}
//           </button>
//         ))}
//       </div>
//     </div>

//     <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
//       <span>🔒</span>
//       <span>Finsbee keeps your data safe</span>
//     </div>

//     <button
//       onClick={handleStep5Submit}
//       disabled={loading}
//       className={`w-full py-5 rounded-2xl font-semibold text-[18px]
//      ${
//        form.businessName.trim() &&
//        form.monthlyIncome.trim() &&
//        form.employmentDuration &&
//        ((form.employmentType === "Self-Employed-Professional" &&
//          form.itr) ||
//          (form.employmentType === "Self-Employed-Business" &&
//            form.gst)) &&
//        !loading
//          ? "bg-[#E6B84E] text-black"
//          : "bg-[#C9BCE9] text-gray-600"
//      }`}
//     >
//       {loading ? "Processing..." : "Check My Eligibility"}
//     </button>
//   </>
// )}

//         {/* STEP 6 – Verifying */}
//         {step === 6 && (
//           <div className="text-center py-20">
//             <div className="w-24 h-24 mx-auto mb-6 border-8 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
//             <h2 className="text-2xl font-semibold mb-3">Thank You!</h2>
//             <p>Verifying your details...</p>
//           </div>
//         )}

//         {/* STEP 7 – Success */}
//         {step === 7 && (
//           <div className="text-center py-16">
//             <h2 className="text-3xl font-semibold mb-4">Congratulations!</h2>
//             <p className="text-gray-600 mb-3">
//               Loan application successfully received
//             </p>
//             <p className="text-gray-500 mb-6">
//               Our team will connect you shortly
//             </p>
//             <p className="text-sm text-gray-400">Redirecting in 5 seconds...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function BusinessLoanForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loanId, setLoanId] = useState(null);
  const [eligibilityResult, setEligibilityResult] = useState(null);

  const sessionId =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("auth") || "{}")?.sessionId
      : null;

  const partnerCustomerId =
    typeof window !== "undefined"
      ? localStorage.getItem("originalCustomerId")
      : null;

  const verifiedPhone =
    typeof window !== "undefined"
      ? localStorage.getItem("verifiedPhone")
      : null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const employmentTypeMap = {
    "Self-employed Professional": "Self-Employed-Professional",
    "Self-employed Business": "Self-Employed-Business",
  };

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
  useEffect(() => {
    const pinCode = form.pincode?.trim();
    if (pinCode?.length === 6) {
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
          } else {
            toast.error("Invalid Pincode");
            setForm((prev) => ({
              ...prev,
              district: "",
              state: "",
            }));
          }
        })
        .catch(() => {
          toast.error("Unable to fetch location details");
        });
    }
  }, [form.pincode]);

  // ────────────────────────────────────────────────
  // SIMPLIFIED RULE ENGINE – only 2 conditions for Business Loan
  // ────────────────────────────────────────────────

  const calculateYearsSince = (dateStr) => {
    if (!dateStr) return 0;
    const since = new Date(dateStr);
    const today = new Date();
    let years = today.getFullYear() - since.getFullYear();
    const m = today.getMonth() - since.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < since.getDate())) years--;
    return years;
  };

  const evaluateEligibility = () => {
    const employmentKey = employmentTypeMap[form.employmentType] || "";

    const income =
      Number(
        employmentKey === "Salaried" ? form.netIncome : form.monthlyIncome
      ) || 0;

    const businessExp = calculateYearsSince(
      getEmploymentDate(form.employmentDuration)
    );

    let rejected = false;
    let reason = "";

    // Only two conditions now
    if (income < 15000) {
      rejected = true;
      reason = "Monthly income is below ₹15,000";
    } else if (employmentKey === "Self-Employed-Business" && businessExp < 2) {
      rejected = true;
      reason = "Business experience is less than 2 years";
    }

    return { eligible: !rejected, reason };
  };

  // ────────────────────────────────────────────────
  // 1. Auto-run eligibility check when entering step 6
  // ────────────────────────────────────────────────
  useEffect(() => {
    if (step === 6 && !eligibilityResult && !loading) {
      const timer = setTimeout(() => {
        const result = evaluateEligibility();
        setEligibilityResult(result);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [step, eligibilityResult, loading]);

  // ────────────────────────────────────────────────
  // 2. Auto-advance to step 7 when eligible
  // ────────────────────────────────────────────────
  useEffect(() => {
    if (step === 6 && eligibilityResult?.eligible && !loading) {
      const timer = setTimeout(() => {
        setStep(7);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [step, eligibilityResult, loading]);

  // ────────────────────────────────────────────────
  // 3. Auto-submit when reaching step 7
  // ────────────────────────────────────────────────
  useEffect(() => {
    if (step === 7 && loanId && !loading) {
      submitFinalLoan();
    }
  }, [step, loanId, loading]);

  /* ================= CREATE LOAN ================= */
  const createLoan = async () => {
    if (!partnerCustomerId) {
      toast.error("Please login again.");
      router.push("/");
      return false;
    }

    const panUpper = form.pan.toUpperCase().trim();
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!panUpper || !panRegex.test(panUpper)) {
      toast.error("Please enter a valid PAN (format: ABCDE1234F)");
      return false;
    }
    if (!form.firstName || !form.dob) {
      toast.error("First name and Date of Birth are required");
      return false;
    }

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
      Loan_Type: "Business-Loan",
      Loan_Amount: form.loanAmount || "",
      Desire_Loan_Tenure: form.tenure,
      Current_EMI_Obligation: form.emi.trim() ? "Yes" : "No",
      Current_EMI_Amount: form.emi.trim() || "",
      Employment_Type: employmentTypeMap[form.employmentType] || "",
      source_id: "Partner-App",
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
  const submitFinalLoan = async () => {
    if (!loanId) {
      toast.error("Loan ID missing");
      return;
    }

    const employmentKey = employmentTypeMap[form.employmentType] || "";

    const payload = {
      CustomerId: Number(partnerCustomerId),
      LoanID: loanId,
      PAN: form.pan.toUpperCase().trim(),
      First_Name: form.firstName.trim(),
      Last_Name: form.lastName.trim() || "",
      Gender: form.gender || "",
      DOB: form.dob,
      Email: form.email.trim() || "",
      Pincode: form.pincode.trim() || "",
      City: form.district || "",
      State: form.state || "",
      Loan_Type: "Business-Loan",
      Loan_Amount: form.loanAmount,
      Desire_Loan_Tenure: form.tenure,
      Current_EMI_Obligation: form.emi.trim() ? "Yes" : "No",
      Current_EMI_Amount: form.emi.trim() || "",
      Employment_Type: employmentKey,
      source_id: "Partner-App",
      Company_Name: form.businessName.trim() || form.companyName.trim() || "",
      Net_Income: (employmentKey === "Salaried"
        ? form.netIncome
        : form.monthlyIncome
      ).trim(),
      Employed_since: getEmploymentDate(form.employmentDuration),
      ITR_Filed: form.itr ? "Yes" : "No",
      ...(employmentKey === "Self-Employed-Business" && {
        GST_Available: form.gst ? "Yes" : "No",
      }),
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
        setStep(8);
      } else {
        toast.error(result?.message || "Submission failed");
        setStep(3);
      }
    } catch {
      toast.error("Server error");
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  // Auto-redirect after success
  useEffect(() => {
    if (step === 8) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step, router]);

  /* ================= STEP HANDLERS ================= */
  const handleStep1Submit = async () => {
    await createLoan();
  };

  const handleStep2Submit = () => {
    if (!form.loanAmount || !form.tenure) {
      toast.error("Please select loan amount and tenure");
      return;
    }
    setStep(3);
  };

  const handleStep4Submit = () => {
    if (
      !form.companyName.trim() ||
      !form.netIncome.trim() ||
      !form.salaryMode ||
      !form.employmentDuration
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    setStep(6);
  };

//   const handleStep5Submit = () => {
//     if (
//       !form.businessName.trim() ||
//       !form.monthlyIncome.trim() ||
//       !form.employmentDuration
//     ) {
//       toast.error("Please fill required fields");
//       return;
//     }

//     if (form.employmentType === "Self-Employed Professional" && !form.itr) {
//       toast.error("ITR is mandatory for Self-Employed Professional");
//       return;
//     }

//     if (
//       form.employmentType === "Self-Employed Business" &&
//       (!form.itr || !form.gst)
//     ) {
//       toast.error("ITR & GST are mandatory for Self-Employed Business");
//       return;
//     }

//     setStep(6);
//   };
const handleStep5Submit = () => {
  // 1. Check basic required fields
  if (
    !form.businessName?.trim() ||
    !form.monthlyIncome?.trim() ||
    !form.employmentDuration
  ) {
    toast.error("Please fill all required fields");
    return;
  }

  const employmentType = form.employmentType;

  // 2. Mandatory checks based on type
  if (employmentType === "Self-employed Professional" && !form.itr) {
    toast.error("ITR is mandatory for Self-Employed Professional");
    return;
  }

  if (employmentType === "Self-employed Business") {
    if (!form.itr) {
      toast.error("ITR is mandatory for Self-Employed Business");
      return;
    }
    if (!form.gst) {
      toast.error("GST is mandatory for Self-Employed Business");
      return;
    }
  }

  // 3. All good → proceed to eligibility
  setStep(6);
};
  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] w-full max-w-md p-8">
        {/* STEP 1 */}
        {step === 1 && (
          <>
            <p className="text-sm text-gray-500 mb-2">
              Takes less than 2 minutes
            </p>
            <h2 className="text-[28px] font-semibold text-gray-900 mb-8 leading-snug">
              Help Us Check Your Eligibility
            </h2>

            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-2">
                PAN No.
                <span className="text-gray-400 text-sm">
                  {" "}
                  (PAN helps us offer better rates. No impact on credit score )
                </span>
              </label>
              <input
                name="pan"
                placeholder="eg : ABCDF1203G"
                value={form.pan.toUpperCase()}
                onChange={handleChange}
                maxLength={10}
                className={`w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border transition-all outline-none
                  ${
                    form.pan
                      ? "border-[#E6B84E] shadow-[0_0_0_2px_rgba(230,184,78,0.15)]"
                      : "border-gray-300"
                  }`}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-2">
                First Name (as per PAN)
              </label>
              <input
                name="firstName"
                placeholder="enter first name"
                value={form.firstName}
                onChange={handleChange}
                className={`w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border transition-all outline-none
                  ${form.firstName ? "border-[#E6B84E]" : "border-gray-300"}`}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-2">
                Last Name (as per PAN)
              </label>
              <input
                name="lastName"
                placeholder="enter last name"
                value={form.lastName}
                onChange={handleChange}
                className="w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border border-gray-300 outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-3">
                Select your gender
              </label>
              <div className="flex gap-4">
                {["Male", "Female", "Other"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setForm({ ...form, gender: g })}
                    className={`flex-1 rounded-2xl py-6 border transition-all
                      ${
                        form.gender === g
                          ? "border-[#E6B84E] bg-[#FFF8E6]"
                          : "border-gray-300 bg-white"
                      }`}
                  >
                    <div className="text-sm text-gray-700 font-medium">{g}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-2">
                Your Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className={`w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border outline-none
                  ${form.dob ? "border-[#E6B84E]" : "border-gray-300"}`}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-2">
                Your Email Id
              </label>
              <input
                name="email"
                placeholder="xxxxxxx@xxx.xxx"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border border-gray-300 outline-none"
              />
            </div>

            <div className="mb-8">
              <label className="block text-[15px] text-gray-700 mb-2">
                Pincode
              </label>
              <input
                name="pincode"
                placeholder="xxxxxx"
                value={form.pincode}
                onChange={handleChange}
                maxLength={6}
                className="w-full rounded-2xl px-5 py-4 bg-[#FAFAFA] border border-gray-300 outline-none"
              />
            </div>
            {/* DISTRICT */}
            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-2">
                City / District
              </label>
              <input
                value={form.district}
                readOnly
                className="w-full rounded-2xl px-5 py-4 bg-[#F3F3F3] border border-gray-300 outline-none"
              />
            </div>

            {/* STATE */}
            <div className="mb-6">
              <label className="block text-[15px] text-gray-700 mb-2">
                State
              </label>
              <input
                value={form.state}
                readOnly
                className="w-full rounded-2xl px-5 py-4 bg-[#F3F3F3] border border-gray-300 outline-none"
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-6">
              <span className="text-lg">🔒</span>
              <span>Finsbee keeps your data safe</span>
            </div>

            <button
              onClick={handleStep1Submit}
              disabled={loading || !form.pan || !form.firstName || !form.dob}
              className={`w-full py-5 rounded-2xl font-semibold transition-all
                ${
                  form.pan && form.firstName && form.dob && !loading
                    ? "bg-[#E6B84E] text-black"
                    : "bg-[#CFC6E8] text-gray-600"
                }`}
            >
              {loading ? "Processing..." : "Confirm Details"}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <p className="text-[15px] text-gray-500 mb-3">
              This won’t impact your credit score.
            </p>
            <h2 className="text-[32px] leading-[40px] font-semibold text-[#1A1A1A] mb-10">
              How much loan do you need?
            </h2>

            <div className="mb-8">
              <label className="block text-[16px] text-gray-600 mb-3">
                Loan Amount
              </label>
              <div className="relative">
                <input
                  name="loanAmount"
                  placeholder="enter loan amount"
                  value={form.loanAmount}
                  onChange={handleChange}
                  className={`w-full rounded-[18px] px-6 py-5 pr-16 text-[16px] border bg-[#FAFAFA] outline-none transition-all
                    ${
                      form.loanAmount
                        ? "border-[#E6B84E] shadow-[0_0_0_3px_rgba(230,184,78,0.15)]"
                        : "border-gray-300"
                    }`}
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 text-[15px]">
                  lac
                </span>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[16px] text-gray-600 mb-4">
                Choose Repayment Tenure (in month)
              </label>
              <div className="flex gap-5">
                {[12, 24, 36, 60].map((month) => (
                  <button
                    key={month}
                    type="button"
                    onClick={() =>
                      setForm({ ...form, tenure: month.toString() })
                    }
                    className={`w-[78px] h-[78px] rounded-[20px] border text-[16px] transition-all
                      ${
                        form.tenure === month.toString()
                          ? "border-[#E6B84E] bg-[#FFF8E6]"
                          : "border-gray-300 bg-white text-gray-500"
                      }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-[16px] text-gray-600 mb-3">
                Current EMI Obligation (if any)
              </label>
              <input
                name="emi"
                placeholder="enter amount if have any (optional)"
                value={form.emi}
                onChange={handleChange}
                className="w-full rounded-[18px] px-6 py-5 border border-gray-300 bg-[#FAFAFA] outline-none"
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-[14px] mb-8">
              <span>🔒</span>
              <span>Finsbee keeps your data safe</span>
            </div>

            <button
              onClick={handleStep2Submit}
              disabled={!form.loanAmount || !form.tenure}
              className={`w-full py-5 rounded-[20px] font-semibold text-[18px] transition-all
                ${
                  form.loanAmount && form.tenure
                    ? "bg-[#E6B84E] text-black"
                    : "bg-[#C9BCE9] text-gray-600"
                }`}
            >
              Confirm Amount
            </button>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <p className="text-[15px] text-gray-500 mb-3">
              This helps us match you with the right lender.
            </p>
            <h2 className="text-[32px] leading-[40px] font-semibold text-[#1A1A1A] mb-10">
              How do you earn?
            </h2>

            {Object.keys(employmentTypeMap).map((type) => (
              <div
                key={type}
                onClick={() => {
                  setForm({ ...form, employmentType: type });
                  setStep(5); // Always Step 5 for business loan
                }}
                className={`mb-6 rounded-[22px] border px-7 py-7 cursor-pointer transition-all
          ${
            form.employmentType === type
              ? "border-[#E6B84E] bg-[#FFF8E6]"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
              >
                <h3 className="text-[20px] font-semibold text-[#1A1A1A] mb-1">
                  {type === "Self-employed Business" ? "Business Owner" : type}
                </h3>
                <p className="text-gray-500 text-[15px]">
                  Select this if you are {type.toLowerCase()}
                </p>
              </div>
            ))}
          </>
        )}

        {/* STEP 4 – Salaried */}
        {step === 4 && (
          <>
            <p className="text-[15px] text-gray-500 mb-3">
              Your data is secure with us
            </p>
            <h2 className="text-[32px] font-semibold text-[#111] mb-8 leading-tight">
              Tell Us About Your Job
            </h2>

            <div className="mb-6">
              <label className="block text-[16px] text-gray-600 mb-3">
                Company Name
              </label>
              <input
                name="companyName"
                placeholder="where are you working?"
                value={form.companyName}
                onChange={handleChange}
                className={`w-full rounded-2xl px-6 py-5 text-[16px] bg-[#F9F9F9] border outline-none transition
                  ${form.companyName ? "border-[#E6B84E]" : "border-gray-300"}`}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[16px] text-gray-600 mb-3">
                Net Income (monthly)
              </label>
              <input
                name="netIncome"
                placeholder="your monthly income"
                value={form.netIncome}
                onChange={handleChange}
                className={`w-full rounded-2xl px-6 py-5 text-[16px] bg-[#F9F9F9] border outline-none transition
                  ${form.netIncome ? "border-[#E6B84E]" : "border-gray-300"}`}
              />
            </div>

            <div className="mb-8">
              <label className="block text-[16px] text-gray-600 mb-4">
                Salary Mode
              </label>
              <div className="flex gap-5">
                {["Bank", "Cheque", "Cash"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setForm({ ...form, salaryMode: mode })}
                    className={`flex-1 rounded-2xl border py-8 text-center transition-all
                      ${
                        form.salaryMode === mode
                          ? "border-[#E6B84E] bg-[#FFF8E6]"
                          : "border-gray-300 bg-white text-gray-600"
                      }`}
                  >
                    <div className="text-[16px] font-medium">{mode}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[16px] text-gray-600 mb-4">
                Employment Duration
              </label>
              <div className="flex gap-4 flex-wrap">
                {["3 mos.", "6 mos.", "12 mos.", "1 yr +"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() =>
                      setForm({ ...form, employmentDuration: val })
                    }
                    className={`px-6 py-4 rounded-2xl border text-[15px] transition
                      ${
                        form.employmentDuration === val
                          ? "border-[#E6B84E] bg-[#FFF8E6]"
                          : "border-gray-300 bg-white text-gray-500"
                      }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-[16px] text-gray-600 mb-3">
                Official Mail ID (optional)
              </label>
              <input
                name="officialEmail"
                placeholder="your company mail ID"
                value={form.officialEmail}
                onChange={handleChange}
                className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 outline-none focus:border-[#E6B84E]"
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
              <span>🔒</span>
              <span>Finsbee keeps your data safe</span>
            </div>

            <button
              onClick={handleStep4Submit}
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-semibold text-[18px] transition
                ${
                  form.companyName.trim() &&
                  form.netIncome.trim() &&
                  form.salaryMode &&
                  form.employmentDuration &&
                  !loading
                    ? "bg-[#E6B84E] text-black"
                    : "bg-[#C9BCE9] text-gray-600"
                }`}
            >
              {loading ? "Processing..." : "Check My Eligibility"}
            </button>
          </>
        )}

        {/* STEP 5 – Business */}
        {step === 5 && (
          <>
            <p className="text-[15px] text-gray-500 mb-3">
              Your data is secure with us
            </p>
            <h2 className="text-[32px] font-semibold text-[#111] mb-8 leading-tight">
              Tell Us About Your Business
            </h2>

            <div className="mb-6">
              <label className="block text-[16px] text-gray-600 mb-3">
                Business Name
              </label>
              <input
                name="businessName"
                placeholder="enter your business name"
                value={form.businessName}
                onChange={handleChange}
                className={`w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border outline-none transition
                  ${
                    form.businessName ? "border-[#E6B84E]" : "border-gray-300"
                  }`}
              />
            </div>

            <div className="mb-6">
              <label className="block text-[16px] text-gray-600 mb-3">
                Monthly Income
              </label>
              <input
                name="monthlyIncome"
                placeholder="your monthly income"
                value={form.monthlyIncome}
                onChange={handleChange}
                className="w-full rounded-2xl px-6 py-5 bg-[#F9F9F9] border border-gray-300 focus:border-[#E6B84E]"
              />
            </div>

            <div className="mb-6 bg-[#F7F7F7] rounded-2xl p-5 border border-gray-200">
              <div className="flex justify-between items-center mb-5">
                <div>
                  <p className="font-medium text-[16px]">
                    Are you filing ITR{" "}
                    <span className="text-indigo-600">(No / Yes)</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Mandatory for Loan Process
                  </p>
                </div>
                <input
                  type="checkbox"
                  name="itr"
                  className="w-12 h-6 accent-[#E6B84E]"
                  checked={form.itr}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <p className="font-medium text-[16px]">Have GST ?</p>
                <input
                  type="checkbox"
                  name="gst"
                  className="w-12 h-6 accent-[#E6B84E]"
                  checked={form.gst}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-[16px] text-gray-600 mb-4">
                Business / Employment from
              </label>
              <div className="flex gap-4 flex-wrap">
                {["0-1yr", "2yr +", "3yr +", "5yr +"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() =>
                      setForm({ ...form, employmentDuration: val })
                    }
                    className={`px-6 py-4 rounded-2xl border text-[15px]
                      ${
                        form.employmentDuration === val
                          ? "border-[#E6B84E] bg-[#FFF8E6]"
                          : "border-gray-300 bg-white text-gray-500"
                      }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
              <span>🔒</span>
              <span>Finsbee keeps your data safe</span>
            </div>

            <button
              onClick={handleStep5Submit}
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-semibold text-[18px]
             ${
               form.businessName.trim() &&
               form.monthlyIncome.trim() &&
               form.employmentDuration &&
               ((form.employmentType === "Self-Employed-Professional" &&
                 form.itr) ||
                 (form.employmentType === "Self-Employed-Business" &&
                   form.gst)) &&
               !loading
                 ? "bg-[#E6B84E] text-black"
                 : "bg-[#C9BCE9] text-gray-600"
             }`}
            >
              {loading ? "Processing..." : "Check My Eligibility"}
            </button>
          </>
        )}

        {/* STEP 6 – Eligibility Check */}
        {step === 6 && (
          <div className="text-center py-20">
            {!eligibilityResult ? (
              <>
                <div className="w-24 h-24 mx-auto mb-6 border-8 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
                <h2 className="text-2xl font-semibold mb-3">Thank You!</h2>
                <p>Checking your eligibility...</p>
              </>
            ) : eligibilityResult.eligible ? (
              <>
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-semibold mb-4 text-green-600">
                  You're Eligible!
                </h2>
                <p className="text-gray-600 mb-6">
                  You meet the basic criteria for a Business Loan
                </p>
                <p className="text-sm text-gray-500">
                  Submitting your application...
                </p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-6">😔</div>
                <h2 className="text-3xl font-semibold mb-4 text-red-600">
                  Not Eligible
                </h2>
                <p className="text-gray-600 mb-4">
                  Unfortunately you do not meet the current eligibility
                  criteria.
                </p>
                <p className="text-gray-500 mb-6 font-medium">
                  {eligibilityResult.reason || "Criteria not met"}
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="w-full py-5 bg-gray-200 text-gray-800 rounded-2xl font-semibold"
                >
                  Back to Home
                </button>
              </>
            )}
          </div>
        )}

        {/* STEP 7 – Submitting */}
        {step === 7 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 border-8 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
            <h2 className="text-2xl font-semibold mb-3">Thank You!</h2>
            <p>Submitting your loan application...</p>
            {loading && (
              <p className="text-sm text-gray-500 mt-2">Please wait...</p>
            )}
          </div>
        )}

        {/* STEP 8 – Success */}
        {step === 8 && (
          <div className="text-center py-16">
            <h2 className="text-3xl font-semibold mb-4">Congratulations!</h2>
            <p className="text-gray-600 mb-3">
              Loan application successfully received
            </p>
            <p className="text-gray-500 mb-6">
              Our team will connect you shortly
            </p>
            <p className="text-sm text-gray-400">Redirecting in 5 seconds...</p>
          </div>
        )}
      </div>
    </div>
  );
}
