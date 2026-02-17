// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import LoanHeader from "@/loanComponent/LoanHeader";

// export default function LoanFormPage({ params }) {
//   const router = useRouter();
//   const { loanSlug } = params;

//   const [step, setStep] = useState(1);
//   const [loanId, setLoanId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     dob: "",
//     pan: "",
//     gender: "",
//     email: "",
//     phone: "",
//     streetAreaCity: "",
//     pinCode: "",
//     district: "",
//     state: "",
//     employmentStatus: "",
//     loanAmount: "",
//     desiredTenure: "",
//     currentEMI: "",
//   });

//   const sessionId =
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("auth") || "{}")?.sessionId
//       : null;

//   const partnerCustomerId =
//     typeof window !== "undefined"
//       ? localStorage.getItem("originalCustomerId")
//       : null;

//   // ---------------- HANDLE CHANGE ----------------
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ---------------- STEP 2: CREATE LOAN ----------------
//   const createLoan = async () => {
//     if (!partnerCustomerId) {
//       toast.error("Please login again.");
//       router.push("/login");
//       return;
//     }

//     const payload = {
//       OriginalCustomerId: Number(partnerCustomerId),
//       CustomerId: Number(partnerCustomerId),
//       name: form.name,
//       DOB: form.dob,
//       PAN: form.pan,
//       gender: form.gender,
//       Email: form.email,
//       phone: form.phone,
//       Pincode: form.pinCode,
//       Loan_Type: "Personal-Loan",
//       Employment_Type: form.employmentStatus,
//       State: form.state,
//       City: form.district,
//       Address: form.streetAreaCity,
//       source_id: "Partner-App",
//     };

//     try {
//       setLoading(true);

//       const res = await fetch("/api/customer/loan", {
//         method: "POST",
//         credentials: "include", // ⭐ VERY IMPORTANT
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           jsonrpc: "2.0",
//           method: "call",
//           params: payload,
//         }),
//       });

//       const data = await res.json();
//       const resultItem = data?.result?.[0];

//       if (resultItem?.success === true) {
//         setLoanId(resultItem.LoanID);
//         setStep(2);
//         toast.success(resultItem.message || "Loan created successfully");
//       } else {
//         toast.error(resultItem?.message || "Loan initialization failed.");
//       }
//     } catch (error) {
//       toast.error("Server error. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ---------------- FINAL SUBMIT ----------------
//   const submitLoan = async () => {
//     if (!loanId) return toast.error("Loan ID missing.");

//     const payload = {
//       OriginalCustomerId: partnerCustomerId,
//       CustomerId: partnerCustomerId,
//       LoanID: loanId,
//       Loan_Amount: form.loanAmount,
//       Desire_Loan_Tenure: form.desiredTenure,
//       Current_EMI_Obligation: form.currentEMI ? "Yes" : "No",
//       source_id: "Partner-App",
//     };

//     try {
//       setLoading(true);

//       const res = await fetch("/api/customer/loan", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Session-Id": sessionId,
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
//         toast.success("Application Submitted Successfully!");
//         router.push("/dashboard");
//       } else {
//         toast.error(result?.message || "Submission failed.");
//       }
//     } catch {
//       toast.error("Server error.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <div className="min-h-screen bg-[#f4f1ff] flex flex-col">
//     <div className="min-h-screen bg-gradient-to-br from-[#F4F1FF] to-[#ECE6FF] flex flex-col">
//       {/* HEADER */}
//       {/* <div className="bg-[radial-gradient(57.44%_57.44%_at_50%_100%,rgba(49,25,140,0.9)_31.73%,rgba(49,25,140,0.9)_100%)] text-white p-6 rounded-b-[60px]">

//         <div className="flex justify-between">
//           <button onClick={() => router.back()}>←</button>
//           <span className="font-semibold text-lg">Personal Loan</span>
//           <button onClick={() => router.push("/")}>✕</button>
//         </div>
//       </div> */}
//       <LoanHeader loanType="Personal Loan" currentStep={step} totalSteps={4} />

//       {/* CARD */}
//       <div className="flex justify-center mt-12 px-4">
//         <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
//           {/* {step === 1 && (
//             <>
//               <h2 className="text-2xl font-bold mb-6">
//                 Enter Your PAN Details
//               </h2>

//               <input
//                 name="pan"
//                 placeholder="PAN Number"
//                 className="w-full border rounded-xl p-4 mb-4"
//                 onChange={handleChange}
//               />

//               <input
//                 name="name"
//                 placeholder="Full Name"
//                 className="w-full border rounded-xl p-4 mb-4"
//                 onChange={handleChange}
//               />

//               <input
//                 name="dob"
//                 type="date"
//                 className="w-full border rounded-xl p-4 mb-4"
//                 onChange={handleChange}
//               />

//               <button
//                 onClick={createLoan}
//                 disabled={loading}
//                 className="w-full py-4 bg-purple-400 text-white rounded-xl font-semibold"
//               >
//                 {loading ? "Processing..." : "Confirm Details"}
//               </button>
//             </>
//           )} */}
      //     {step === 1 && (
      //       <>
      //         <p className="text-sm text-gray-500 mb-2">
      //           Takes less than 2 minutes
      //         </p>

      //         <h2 className="text-2xl font-semibold mb-6 text-gray-900">
      //           Help Us Check Your Eligibility
      //         </h2>

      //         {/* PAN */}
      //         <div className="mb-4">
      //           <label className="text-sm text-gray-600 block mb-2">
      //             PAN No.{" "}
      //             <span className="text-gray-400 text-xs">
      //               (PAN helps us offer better rates. No impact on credit score)
      //             </span>
      //           </label>
      //           <input
      //             name="pan"
      //             placeholder="eg : ABCDF1230G"
      //             value={form.pan}
      //             onChange={handleChange}
      //             className={`w-full rounded-xl p-4 border bg-[#F9F9F9] outline-none transition
      //     ${form.pan ? "border-[#E7B84B]" : "border-gray-300"}
      //   `}
      //           />
      //         </div>

      //         {/* FIRST NAME */}
      //         <div className="mb-4">
      //           <label className="text-sm text-gray-600 block mb-2">
      //             First Name (as per PAN)
      //           </label>
      //           <input
      //             name="name"
      //             placeholder="enter first name"
      //             value={form.name}
      //             onChange={handleChange}
      //             className={`w-full rounded-xl p-4 border bg-[#F9F9F9] outline-none transition
      //     ${form.name ? "border-[#E7B84B]" : "border-gray-300"}
      //   `}
      //           />
      //         </div>

      //         {/* LAST NAME */}
      //         <div className="mb-4">
      //           <label className="text-sm text-gray-600 block mb-2">
      //             Last Name (as per PAN)
      //           </label>
      //           <input
      //             name="lastName"
      //             placeholder="enter last name"
      //             className="w-full rounded-xl p-4 border bg-[#F9F9F9] border-gray-300 outline-none"
      //           />
      //         </div>

      //         {/* GENDER */}
      //         <div className="mb-6">
      //           <label className="text-sm text-gray-600 block mb-3">
      //             Select your gender
      //           </label>

      //           <div className="flex gap-4">
      //             {["Male", "Female", "Other"].map((g) => (
      //               <button
      //                 key={g}
      //                 type="button"
      //                 onClick={() => setForm({ ...form, gender: g })}
      //                 className={`flex-1 py-6 rounded-xl border transition text-sm font-medium
      //         ${form.gender === g
      //                     ? "border-[#E7B84B] bg-[#FFF8E6]"
      //                     : "border-gray-300 bg-[#F9F9F9]"
      //                   }
      //       `}
      //               >
      //                 {g}
      //               </button>
      //             ))}
      //           </div>
      //         </div>

      //         {/* DOB */}
      //         <div className="mb-4">
      //           <label className="text-sm text-gray-600 block mb-2">
      //             Your Date of Birth
      //           </label>
      //           <input
      //             name="dob"
      //             type="date"
      //             value={form.dob}
      //             onChange={handleChange}
      //             className={`w-full rounded-xl p-4 border bg-[#F9F9F9] outline-none transition
      //     ${form.dob ? "border-[#E7B84B]" : "border-gray-300"}
      //   `}
      //           />
      //         </div>

      //         {/* EMAIL */}
      //         <div className="mb-4">
      //           <label className="text-sm text-gray-600 block mb-2">
      //             Your Email Id
      //           </label>
      //           <input
      //             name="email"
      //             placeholder="xxxxxxx@xxx.xxx"
      //             value={form.email}
      //             onChange={handleChange}
      //             className={`w-full rounded-xl p-4 border bg-[#F9F9F9] outline-none transition
      //     ${form.email ? "border-[#E7B84B]" : "border-gray-300"}
      //   `}
      //           />
      //         </div>

      //         {/* PINCODE */}
      //         <div className="mb-6">
      //           <label className="text-sm text-gray-600 block mb-2">
      //             Your location pincode
      //           </label>
      //           <input
      //             name="pinCode"
      //             placeholder="xxxxxx"
      //             value={form.pinCode}
      //             onChange={handleChange}
      //             className={`w-full rounded-xl p-4 border bg-[#F9F9F9] outline-none transition
      //     ${form.pinCode ? "border-[#E7B84B]" : "border-gray-300"}
      //   `}
      //           />
      //         </div>

      //         {/* DATA SAFE TEXT */}
      //         <div className="text-center text-gray-400 text-sm mb-6">
      //           Finsbee keeps your data safe
      //         </div>

      //         {/* BUTTON */}
      //         <button
      //           onClick={createLoan}
      //           disabled={loading}
      //           className={`w-full py-4 rounded-xl font-semibold transition
      //   ${form.pan && form.name && form.dob
      //               ? "bg-[#E7B84B] text-black"
      //               : "bg-[#E4DCF6] text-gray-600"
      //             }
      // `}
      //         >
      //           {loading ? "Processing..." : "Confirm Details"}
      //         </button>
      //       </>
      //     )}

//           {/* {step === 2 && (
//             <>
//               <h2 className="text-2xl font-bold mb-6">Enter Loan Details</h2>

//               <input
//                 name="loanAmount"
//                 placeholder="Loan Amount"
//                 className="w-full border rounded-xl p-4 mb-4"
//                 onChange={handleChange}
//               />

//               <input
//                 name="desiredTenure"
//                 placeholder="Loan Tenure (months)"
//                 className="w-full border rounded-xl p-4 mb-4"
//                 onChange={handleChange}
//               />

//               <button
//                 onClick={submitLoan}
//                 disabled={loading}
//                 className="w-full py-4 bg-purple-400 text-white rounded-xl font-semibold"
//               >
//                 {loading ? "Submitting..." : "Confirm Amount"}
//               </button>
//             </>
//           )} */}
//           {step === 2 && (
//             <div className="flex justify-center px-4">
//               {/* <div className="bg-[#F8F8F8] w-full max-w-xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] px-10 py-12"> */}
//               <div className=" w-full rounded-3xl ">
//                 {/* SMALL TITLE */}
//                 <p className="text-sm text-gray-500 mb-2 tracking-wide">
//                   Loan details
//                 </p>

//                 {/* MAIN TITLE */}
//                 <h2 className="text-3xl font-semibold text-gray-900 mb-10">
//                   How much loan do you need?
//                 </h2>

//                 {/* LOAN AMOUNT */}
//                 <div className="mb-6">
//                   <label className="block text-gray-600 mb-2 text-sm">
//                     Loan Amount
//                   </label>

//                   <div className="relative">
//                     <input
//                       name="loanAmount"
//                       placeholder="enter loan amount"
//                       className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 pr-14 focus:outline-none focus:border-[#E6B84E] focus:ring-2 focus:ring-[#E6B84E]/30 transition-all"
//                       onChange={handleChange}
//                     />
//                     <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
//                       lac
//                     </span>
//                   </div>
//                 </div>

//                 {/* LOAN TENURE */}
//                 <div className="mb-6">
//                   <label className="block text-gray-600 mb-3 text-sm">
//                     Loan Tenure (in month)
//                   </label>

//                   <div className="flex gap-4 flex-wrap">
//                     {[12, 18, 24, 36, 60].map((month) => (
//                       <button
//                         key={month}
//                         type="button"
//                         onClick={() =>
//                           setForm({ ...form, desiredTenure: month })
//                         }
//                         className={`px-6 py-3 rounded-xl border text-sm transition-all
//                 ${form.desiredTenure == month
//                             ? "border-[#E6B84E] bg-white shadow-sm"
//                             : "border-gray-300 bg-white text-gray-500 hover:border-gray-400"
//                           }`}
//                       >
//                         {month}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* EMI OBLIGATION */}
//                 <div className="mb-10">
//                   <label className="block text-gray-600 mb-2 text-sm">
//                     EMI Obligation
//                   </label>

//                   <input
//                     name="currentEMI"
//                     placeholder="enter detail if have any"
//                     className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 focus:outline-none focus:border-[#E6B84E] focus:ring-2 focus:ring-[#E6B84E]/30 transition-all"
//                     onChange={handleChange}
//                   />
//                 </div>

//                 {/* SECURITY NOTE */}
//                 <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
//                   <span className="text-lg">🔒</span>
//                   <span>Finsbee keeps your data safe</span>
//                 </div>

//                 {/* BUTTON */}
//                 <button
//                   onClick={submitLoan}
//                   disabled={loading}
//                   className="w-full py-4 rounded-xl font-semibold text-black transition-all
//         bg-[#E6B84E] hover:bg-[#d9a83c] disabled:bg-purple-200"
//                 >
//                   {loading ? "Submitting..." : "Confirm Amount"}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import LoanHeader from "@/loanComponent/LoanHeader";
import { loanConfig } from "@/config/loanConfig";

import PersonalLoanForm from "@/loanComponent/forms/PersonalLoanForm";
import AutoLoanForm from "@/loanComponent/forms/AutoLoanForm";

import BusinessLoanForm from "@/loanComponent/forms/BusinessLoanForm";
import HomeLoanForm from "@/loanComponent/forms/HomeLoanForm";
import LAPLoanForm from "@/loanComponent/forms/LAPLoanForm";
import LasLoanForm from "@/loanComponent/forms/LASLoanForm";
import InstantLoanForm from "@/loanComponent/forms/InstatntLoanForm";

export default function DynamicLoanPage() {
  const params = useParams();
  const loanSlug = params.loan;

  const config = loanConfig[loanSlug];

  const [step, setStep] = useState(1);

  if (!config) {
    return <div className="p-10">Loan not found</div>;
  }

  const renderForm = () => {
    switch (config.component) {
      case "PersonalLoanForm":
        return <PersonalLoanForm step={step} setStep={setStep} />;
      case "AutoLoanForm":
        return <AutoLoanForm step={step} setStep={setStep} />;
      case "HomeLoanForm":
        return <HomeLoanForm step={step} setStep={setStep} />;
      case "BusinessLoanForm":
        return <BusinessLoanForm step={step} setStep={setStep} />;
      case "LASLoanForm":
        return <LasLoanForm step={step} setStep={setStep} />;
      case "LAPLoanForm":
        return <LAPLoanForm step={step} setStep={setStep} />;
      case "InstantLoanForm":
        return <InstantLoanForm step={step} setStep={setStep} loanType="Instant-Loan" />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F1FF] to-[#ECE6FF]">
      
      <LoanHeader
        loanType={config.title}
        currentStep={step}
        totalSteps={config.steps}
      />

      {renderForm()}
    </div>
  );
}
