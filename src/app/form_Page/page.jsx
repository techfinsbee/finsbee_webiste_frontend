// "use client";
// import { useState } from "react";

// const vendors = [
//   { name: "Zype", link: "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Fundsmama" },
//   { name: "Creditsea", link: "https://www.creditsea.com/onboarding/sign-up/enter-mobile?source=56467898" },
//   { name: "Ram Fincorp", link: "https://ramfinloan.page.link/Fundsmama" },
// ];

// export default function LoanFlow() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [pan, setPan] = useState("");
//   const [employmentType, setEmploymentType] = useState("");
//   const [loanAmount, setLoanAmount] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   // ✅ Validation rules
//   const validators = {
//     fullName: (v) =>
//       /^[A-Za-z ]{3,50}$/.test(v) ? "" : "Enter a valid full name (letters only)",
//     phone: (v) =>
//       /^[6-9]\d{9}$/.test(v) ? "" : "Enter a valid 10-digit mobile no.",
//     email: (v) =>
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address",
//     dob: (v) => {
//       if (!v) return "Date of birth is required";
//       const birth = new Date(v);
//       const today = new Date();
//       const age = today.getFullYear() - birth.getFullYear();
//       const validAge =
//         age > 18 ||
//         (age === 18 &&
//           (today.getMonth() > birth.getMonth() ||
//             (today.getMonth() === birth.getMonth() &&
//               today.getDate() >= birth.getDate())));
//       return validAge ? "" : "You must be at least 18 years old";
//     },
//     pan: (v) =>
//       /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v)
//         ? "" : "Enter a valid PAN (e.g. ABCDE1234F)",
//     employmentType: (v) => (v ? "" : "Please select employment type"),
//     loanAmount: (v) =>
//       /^\d{1,9}$/.test(v) && Number(v) > 0 ? "" : "Enter a valid loan amount",
//     pincode: (v) =>
//       /^[1-9][0-9]{5}$/.test(v) ? "" : "Enter a valid 6-digit pincode",
//   };

//   const getFieldError = (name, value) =>
//     validators[name] ? validators[name](value) : "";

//   const validateAll = () => {
//     const next = {
//       fullName: getFieldError("fullName", fullName),
//       phone: getFieldError("phone", phone),
//       email: getFieldError("email", email),
//       dob: getFieldError("dob", dob),
//       pan: getFieldError("pan", pan),
//       employmentType: getFieldError("employmentType", employmentType),
//       loanAmount: getFieldError("loanAmount", loanAmount),
//       pincode: getFieldError("pincode", pincode),
//     };
//     setErrors(next);
//     return Object.values(next).every((e) => !e);
//   };

//   const shouldShow = (field) => (submitted || touched[field]) && errors[field];

//   const handleBlur = (field) => {
//     setTouched((t) => ({ ...t, [field]: true }));
//     setErrors((prev) => ({
//       ...prev,
//       [field]: getFieldError(field, getValue(field)),
//     }));
//   };

//   const getValue = (field) => {
//     switch (field) {
//       case "fullName": return fullName;
//       case "phone": return phone;
//       case "email": return email;
//       case "dob": return dob;
//       case "pan": return pan;
//       case "employmentType": return employmentType;
//       case "loanAmount": return loanAmount;
//       case "pincode": return pincode;
//       default: return "";
//     }
//   };

//   const handleChange = (field, value) => {
//     if (field === "pan") value = value.toUpperCase();
//     if (field === "phone") value = value.replace(/\D/g, "").slice(0, 10);
//     if (field === "pincode") value = value.replace(/\D/g, "").slice(0, 6);
//     if (field === "loanAmount") value = value.replace(/\D/g, "");

//     const setFns = {
//       fullName: setFullName,
//       phone: setPhone,
//       email: setEmail,
//       dob: setDob,
//       pan: setPan,
//       employmentType: setEmploymentType,
//       loanAmount: setLoanAmount,
//       pincode: setPincode,
//     };
//     setFns[field](value);

//     if (touched[field] || submitted) {
//       setErrors((prev) => ({ ...prev, [field]: getFieldError(field, value) }));
//     }
//   };

//   // ✅ DIRECT API CALL to Finsbee using your existing proxy
// // ✅ CORRECT API CALL with exact field names
// const submitToFinsbee = async () => {
//   const payload = {
//     jsonrpc: "2.0",
//     method: "call",
//     id: 1,
//     params: {
//       name: fullName.trim(),
//       email: email.trim(),                    // ✅ Changed from email_from
//       phone: phone.replace(/\D/g, ""),
//       DOB: formatDateForAPI(dob),
//       pan: pan.toUpperCase(),                 // ✅ Changed from PAN
//       employe_type: employmentType,           // ✅ Changed from employe_type
//       loan_amount: loanAmount,                // ✅ Changed from expected_revenue
//       pincode: pincode,                       // ✅ Changed from Pincode
//       // Remove Loan_Type since it's not in the backend
//     }
//   };

//   try {
//     setLoading(true);
    
//     const response = await fetch('/api/flutterapi/bre/website', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     //console.log('Finsbee API response:', data);
//     return data;
//   } catch (error) {
//     //console.error('Error submitting to Finsbee:', error);
//     throw new Error('Failed to submit form. Please try again.');
//   } finally {
//     setLoading(false);
//   }
// };

//   // ✅ Helper functions
//   const generatePartnerId = () => {
//     return `PARTNER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
//   };

//   const formatDateForAPI = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toISOString().split('T')[0];
//   };

//   const handleContinue = async () => {
//     setSubmitted(true);
//     if (!validateAll()) return;

//     try {
//       await submitToFinsbee();
//       setStep(2);
//     } catch (error) {
//       alert(error.message || 'Failed to submit form. Please try again.');
//     }
//   };

//   // ✅ Styles
//   const inputClass = (field) =>
//     `w-full py-3 pl-10 pr-4 rounded-md border focus:ring-2 focus:ring-yellow-200 focus:outline-none placeholder-gray-400 ${
//       shouldShow(field) ? "border-red-400" : "border-gray-300"
//     }`;

//   const selectClass = (field) =>
//     `w-full py-4 pl-10 pr-10 rounded-lg border focus:ring-2 focus:ring-yellow-200 focus:outline-none text-lg shadow-sm transition-all duration-200 appearance-none ${
//       shouldShow(field) ? "border-red-400" : "border-gray-300"
//     } ${employmentType ? "text-black" : "text-gray-400"} bg-white`;

//   const errorLine = (field) => (
//     <div className="min-h-[18px] absolute -bottom-5 left-0">
//       {shouldShow(field) && (
//         <p className="text-red-500 text-sm">{errors[field]}</p>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen relative bg-[#FAFAFA] flex flex-col items-center pt-12">
//       <div className="absolute inset-0 z-0 pointer-events-none select-none">
//         <img src="/booking/planbg.png" alt="Background Wave" className="w-full h-full object-cover" />
//       </div>
//       <a
//         href="#"
//         onClick={() => setStep(1)}
//         className="flex items-center text-yellow-600 font-medium mb-5 self-start ml-24 text-lg hover:underline relative z-10"
//       >
//         <span className="mr-2">&#8592;</span> Back to Home
//       </a>

//       {step !== 3 && (
//         <div className="flex flex-col items-center mb-7 z-10">
//           <div className="w-full flex items-center justify-center">
//             {step === 1 && (
//               <img src="/form_page/Group 5 (1).svg" alt="Progress Step 1" className="w-[319px] h-[6px]" />
//             )}
//             {step === 2 && (
//               <img src="/form_page/Group 5.svg" alt="Progress Step 2" className="w-[319px] h-[6px]" />
//             )}
//           </div>
//           <div className="flex w-64 justify-between mt-2 text-gray-700 text-sm">
//             <span className={`font-medium ${step === 1 ? "text-black" : "text-gray-400"}`}>Fill Form</span>
//             <span className={`font-medium ${step === 2 ? "text-black" : "text-gray-400"}`}>Select vendors</span>
//           </div>
//         </div>
//       )}

//       <div className="z-10 w-full flex justify-center">
//         {step === 1 && (
//           <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-yellow-100 relative">
//             <div className="mb-6 text-2xl font-bold text-[#183153]">Enter Your Details</div>

//             {/* Full Name */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter your Full Name(As Aadhaar)"
//                   className={inputClass("fullName")}
//                   value={fullName}
//                   onChange={(e) => handleChange("fullName", e.target.value)}
//                   onBlur={() => handleBlur("fullName")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/user-square.svg" alt="Name Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("fullName")}
//               </div>
//             </div>

//             {/* Phone & Email */}
//             <div className="mb-8 flex gap-4">
//               <div className="w-1/2 relative">
//                 <div className="relative">
//                   <input
//                     type="tel"
//                     placeholder="00000 00000"
//                     className={inputClass("phone")}
//                     value={phone}
//                     onChange={(e) => handleChange("phone", e.target.value)}
//                     onBlur={() => handleBlur("phone")}
//                   />
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                     <img src="/form_page/call.svg" alt="Phone Icon" className="w-5 h-5" />
//                   </span>
//                   {errorLine("phone")}
//                 </div>
//               </div>

//               <div className="w-1/2 relative">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="xxxxx@xxxx.com"
//                     className={inputClass("email")}
//                     value={email}
//                     onChange={(e) => handleChange("email", e.target.value)}
//                     onBlur={() => handleBlur("email")}
//                   />
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                     <img src="/form_page/email.png" alt="Email Icon" className="w-5 h-5" />
//                   </span>
//                   {errorLine("email")}
//                 </div>
//               </div>
//             </div>

//             {/* DOB */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="date"
//                   className={`${inputClass("dob")} text-gray-700`}
//                   value={dob}
//                   onChange={(e) => handleChange("dob", e.target.value)}
//                   onBlur={() => handleBlur("dob")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/calendar.svg" alt="DOB Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("dob")}
//               </div>
//             </div>

//             {/* PAN */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter PAN number"
//                   className={`${inputClass("pan")} uppercase`}
//                   value={pan}
//                   onChange={(e) => handleChange("pan", e.target.value)}
//                   onBlur={() => handleBlur("pan")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/element-equal.svg" alt="PAN Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("pan")}
//               </div>
//             </div>

//             {/* Employment Type */}
//             <div className="mb-8 relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
//                 <img src="/form_page/element-equal.svg" alt="Dropdown Left Icon" className="w-5 h-5" />
//               </span>
//               <select
//                 className={selectClass("employmentType")}
//                 value={employmentType}
//                 onChange={(e) => handleChange("employmentType", e.target.value)}
//                 onBlur={() => handleBlur("employmentType")}
//               >
//                 <option value="" disabled>Select employment type</option>
//                 <option value="Daily Wages">Daily Wages</option>
//                 <option value="Salaried">Salaried</option>
//                 <option value="Self-employed Business">Self-employed Business</option>
//                 <option value="Self-employed Professional">Self-employed Professional</option>
//                 <option value="Student">Student</option>
//                 <option value="Unemployed">Unemployed</option>
//               </select>
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
//                 <img src="/form_page/arrow-down.svg" alt="Dropdown Arrow" className="w-5 h-5" />
//               </span>
//               {errorLine("employmentType")}
//             </div>

//             {/* Loan Amount */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter loan amount"
//                   className={inputClass("loanAmount")}
//                   value={loanAmount}
//                   onChange={(e) => handleChange("loanAmount", e.target.value)}
//                   onBlur={() => handleBlur("loanAmount")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/money.svg" alt="Loan Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("loanAmount")}
//               </div>
//             </div>

//             {/* Pincode */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter your pincode"
//                   className={inputClass("pincode")}
//                   value={pincode}
//                   onChange={(e) => handleChange("pincode", e.target.value)}
//                   onBlur={() => handleBlur("pincode")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/location.svg" alt="Pincode Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("pincode")}
//               </div>
//             </div>

//             {/* Continue */}
//             <button
//               className="w-full py-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-[#183153] font-bold shadow mt-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               onClick={handleContinue}
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "Save & Continue"}
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-yellow-100">
//             <div className="mb-6 text-2xl font-bold text-[#183153]">Select the Vendor for Loan</div>
//             <div className="flex flex-col gap-5">
//               {vendors.map((vendor, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between w-full bg-[#FAFAFA] rounded-lg border border-gray-200 px-5 py-4 shadow-sm"
//                 >
//                   <span className="text-gray-700 font-medium">{vendor.name}</span>
//                   <a
//                     href={vendor.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-yellow-400 font-bold hover:bg-yellow-50 px-2 py-1 rounded transition"
//                   >
//                     Apply Now
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {step === 3 && (
//           <div className="flex flex-col items-center w-full max-w-lg py-12 px-8 bg-transparent">
//             <div className="mb-8">
//               <img src="/form_page/not_applicable.svg" alt="Not eligible" className="mx-auto h-50" />
//             </div>
//             <div className="text-center text-xl text-[#183153] font-medium">
//               <div>You're currently not eligible for a loan.</div>
//               <div className="mt-5">Don't worry —<br />you can try again after some time.</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";

// const vendors = [
//   { 
//     id: "zype", 
//     name: "Zype", 
//     link: "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Fundsmama" 
//   },
//   { 
//     id: "creditsea", 
//     name: "Creditsea", 
//     link: "https://www.creditsea.com/onboarding/sign-up/enter-mobile?source=56467898" 
//   },
//   { 
//     id: "ramfincop", 
//     name: "Ram Fincorp", 
//     link: "https://ramfinloan.page.link/Fundsmama" 
//   },
//   { 
//     id: "credlender", 
//     name: "Credlender", 
//     link: "#" // Add the actual link for Credlender when available
//   },
// ];

// // Employment type mapping as per backend requirements
// const employmentStatusMap = {
//   "Daily Wages": "Daily-Wage",
//   "Salaried": "Salaried",
//   "Self-Employed Business": "Self-Employed-Business",
//   "Self-Employed Professional": "Self-Employed-Professional",
//   "Student": "Student",
//   "Unemployed": "Unemployed",
// };

// export default function LoanFlow() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [apiResponse, setApiResponse] = useState(null);

//   const [fullName, setFullName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [pan, setPan] = useState("");
//   const [employmentType, setEmploymentType] = useState("");
//   const [loanAmount, setLoanAmount] = useState("");
//   const [pincode, setPincode] = useState("");

//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   // ✅ Validation rules
//   const validators = {
//     fullName: (v) =>
//       /^[A-Za-z ]{3,50}$/.test(v) ? "" : "Enter a valid full name (letters only)",
//     phone: (v) =>
//       /^[6-9]\d{9}$/.test(v) ? "" : "Enter a valid 10-digit mobile no.",
//     email: (v) =>
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address",
//     dob: (v) => {
//       if (!v) return "Date of birth is required";
//       const birth = new Date(v);
//       const today = new Date();
//       const age = today.getFullYear() - birth.getFullYear();
//       const validAge =
//         age > 18 ||
//         (age === 18 &&
//           (today.getMonth() > birth.getMonth() ||
//             (today.getMonth() === birth.getMonth() &&
//               today.getDate() >= birth.getDate())));
//       return validAge ? "" : "You must be at least 18 years old";
//     },
//     pan: (v) =>
//       /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v)
//         ? "" : "Enter a valid PAN (e.g. ABCDE1234F)",
//     employmentType: (v) => (v ? "" : "Please select employment type"),
//     loanAmount: (v) =>
//       /^\d{1,9}$/.test(v) && Number(v) > 0 ? "" : "Enter a valid loan amount",
//     pincode: (v) =>
//       /^[1-9][0-9]{5}$/.test(v) ? "" : "Enter a valid 6-digit pincode",
//   };

//   const getFieldError = (name, value) =>
//     validators[name] ? validators[name](value) : "";

//   const validateAll = () => {
//     const next = {
//       fullName: getFieldError("fullName", fullName),
//       phone: getFieldError("phone", phone),
//       email: getFieldError("email", email),
//       dob: getFieldError("dob", dob),
//       pan: getFieldError("pan", pan),
//       employmentType: getFieldError("employmentType", employmentType),
//       loanAmount: getFieldError("loanAmount", loanAmount),
//       pincode: getFieldError("pincode", pincode),
//     };
//     setErrors(next);
//     return Object.values(next).every((e) => !e);
//   };

//   const shouldShow = (field) => (submitted || touched[field]) && errors[field];

//   const handleBlur = (field) => {
//     setTouched((t) => ({ ...t, [field]: true }));
//     setErrors((prev) => ({
//       ...prev,
//       [field]: getFieldError(field, getValue(field)),
//     }));
//   };

//   const getValue = (field) => {
//     switch (field) {
//       case "fullName": return fullName;
//       case "phone": return phone;
//       case "email": return email;
//       case "dob": return dob;
//       case "pan": return pan;
//       case "employmentType": return employmentType;
//       case "loanAmount": return loanAmount;
//       case "pincode": return pincode;
//       default: return "";
//     }
//   };

//   const handleChange = (field, value) => {
//     if (field === "pan") value = value.toUpperCase();
//     if (field === "phone") value = value.replace(/\D/g, "").slice(0, 10);
//     if (field === "pincode") value = value.replace(/\D/g, "").slice(0, 6);
//     if (field === "loanAmount") value = value.replace(/\D/g, "");

//     const setFns = {
//       fullName: setFullName,
//       phone: setPhone,
//       email: setEmail,
//       dob: setDob,
//       pan: setPan,
//       employmentType: setEmploymentType,
//       loanAmount: setLoanAmount,
//       pincode: setPincode,
//     };
//     setFns[field](value);

//     if (touched[field] || submitted) {
//       setErrors((prev) => ({ ...prev, [field]: getFieldError(field, value) }));
//     }
//   };

//   // ✅ DIRECT API CALL to Finsbee using your existing proxy
//   const submitToFinsbee = async () => {
//     // Map the employment type to backend format
//     const backendEmploymentType = employmentStatusMap[employmentType] || employmentType;
    
//     const payload = {
//       jsonrpc: "2.0",
//       method: "call",
//       id: 1,
//       params: {
//         name: fullName.trim(),
//         email: email.trim(),
//         phone: phone.replace(/\D/g, ""),
//         DOB: formatDateForAPI(dob),
//         pan: pan.toUpperCase(),
//         employe_type: backendEmploymentType, // ✅ Use mapped employment type
//         loan_amount: loanAmount,
//         pincode: pincode,
//       }
//     };

//     try {
//       setLoading(true);
      
//       const response = await fetch('/api/flutterapi/bre/website', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       //console.log('Finsbee API response:', data);
//       return data;
//     } catch (error) {
//       //console.error('Error submitting to Finsbee:', error);
//       throw new Error('Failed to submit form. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Helper functions
//   const generatePartnerId = () => {
//     return `PARTNER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
//   };

//   const formatDateForAPI = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toISOString().split('T')[0];
//   };

//   const handleContinue = async () => {
//     setSubmitted(true);
//     if (!validateAll()) return;

//     try {
//       const response = await submitToFinsbee();
//       setApiResponse(response);
      
//       // Check if we have a valid lender in response
//       const lender = response?.result?.[0]?.lender;
      
//       if (lender && lender.trim() !== "") {
//         // Show step 2 with specific lender
//         setStep(2);
//       } else {
//         // No lender found, skip to step 3
//         setStep(3);
//       }
//     } catch (error) {
//       alert(error.message || 'Failed to submit form. Please try again.');
//     }
//   };

//   // ✅ Get the recommended vendor based on API response
//   const getRecommendedVendor = () => {
//     if (!apiResponse) return null;
    
//     const lender = apiResponse?.result?.[0]?.lender;
//     if (!lender) return null;
    
//     // Find vendor by exact name match (case insensitive)
//     const foundVendor = vendors.find(vendor => 
//       vendor.name.toLowerCase() === lender.toLowerCase() ||
//       vendor.id.toLowerCase() === lender.toLowerCase()
//     );

//     // If no exact match found, create a fallback vendor
//     if (!foundVendor && lender.trim() !== "") {
//       return {
//         id: lender.toLowerCase(),
//         name: lender,
//         link: "#" // Fallback link
//       };
//     }
    
//     return foundVendor;
//   };

//   const recommendedVendor = getRecommendedVendor();

//   // ✅ Styles
//   const inputClass = (field) =>
//     `w-full py-3 pl-10 pr-4 rounded-md border focus:ring-2 focus:ring-yellow-200 focus:outline-none placeholder-gray-400 ${
//       shouldShow(field) ? "border-red-400" : "border-gray-300"
//     }`;

//   const selectClass = (field) =>
//     `w-full py-4 pl-10 pr-10 rounded-lg border focus:ring-2 focus:ring-yellow-200 focus:outline-none text-lg shadow-sm transition-all duration-200 appearance-none ${
//       shouldShow(field) ? "border-red-400" : "border-gray-300"
//     } ${employmentType ? "text-black" : "text-gray-400"} bg-white`;

//   const errorLine = (field) => (
//     <div className="min-h-[18px] absolute -bottom-5 left-0">
//       {shouldShow(field) && (
//         <p className="text-red-500 text-sm">{errors[field]}</p>
//       )}
//     </div>
//   );

//   return (
//     <div className="min-h-screen relative bg-[#FAFAFA] flex flex-col items-center pt-12">
//       <div className="absolute inset-0 z-0 pointer-events-none select-none">
//         <img src="/booking/planbg.png" alt="Background Wave" className="w-full h-full object-cover" />
//       </div>
//       <a
//         href="#"
//         onClick={() => setStep(1)}
//         className="flex items-center text-yellow-600 font-medium mb-5 self-start ml-24 text-lg hover:underline relative z-10"
//       >
//         <span className="mr-2">&#8592;</span> Back to Home
//       </a>

//       {step !== 3 && (
//         <div className="flex flex-col items-center mb-7 z-10">
//           <div className="w-full flex items-center justify-center">
//             {step === 1 && (
//               <img src="/form_page/Group 5 (1).svg" alt="Progress Step 1" className="w-[319px] h-[6px]" />
//             )}
//             {step === 2 && (
//               <img src="/form_page/Group 5.svg" alt="Progress Step 2" className="w-[319px] h-[6px]" />
//             )}
//           </div>
//           <div className="flex w-64 justify-between mt-2 text-gray-700 text-sm">
//             <span className={`font-medium ${step === 1 ? "text-black" : "text-gray-400"}`}>Fill Form</span>
//             <span className={`font-medium ${step === 2 ? "text-black" : "text-gray-400"}`}>Select vendors</span>
//           </div>
//         </div>
//       )}

//       <div className="z-10 w-full flex justify-center">
//         {step === 1 && (
//           <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-yellow-100 relative">
//             <div className="mb-6 text-2xl font-bold text-[#183153]">Enter Your Details</div>

//             {/* Full Name */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter your Full Name(As Aadhaar)"
//                   className={inputClass("fullName")}
//                   value={fullName}
//                   onChange={(e) => handleChange("fullName", e.target.value)}
//                   onBlur={() => handleBlur("fullName")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/user-square.svg" alt="Name Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("fullName")}
//               </div>
//             </div>

//             {/* Phone & Email */}
//             <div className="mb-8 flex gap-4">
//               <div className="w-1/2 relative">
//                 <div className="relative">
//                   <input
//                     type="tel"
//                     placeholder="00000 00000"
//                     className={inputClass("phone")}
//                     value={phone}
//                     onChange={(e) => handleChange("phone", e.target.value)}
//                     onBlur={() => handleBlur("phone")}
//                   />
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                     <img src="/form_page/call.svg" alt="Phone Icon" className="w-5 h-5" />
//                   </span>
//                   {errorLine("phone")}
//                 </div>
//               </div>

//               <div className="w-1/2 relative">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     placeholder="xxxxx@xxxx.com"
//                     className={inputClass("email")}
//                     value={email}
//                     onChange={(e) => handleChange("email", e.target.value)}
//                     onBlur={() => handleBlur("email")}
//                   />
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                     <img src="/form_page/email.png" alt="Email Icon" className="w-5 h-5" />
//                   </span>
//                   {errorLine("email")}
//                 </div>
//               </div>
//             </div>

//             {/* DOB */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="date"
//                   className={`${inputClass("dob")} text-gray-700`}
//                   value={dob}
//                   onChange={(e) => handleChange("dob", e.target.value)}
//                   onBlur={() => handleBlur("dob")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/calendar.svg" alt="DOB Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("dob")}
//               </div>
//             </div>

//             {/* PAN */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter PAN number"
//                   className={`${inputClass("pan")} uppercase`}
//                   value={pan}
//                   onChange={(e) => handleChange("pan", e.target.value)}
//                   onBlur={() => handleBlur("pan")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/element-equal.svg" alt="PAN Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("pan")}
//               </div>
//             </div>

//             {/* Employment Type */}
//             <div className="mb-8 relative">
//               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
//                 <img src="/form_page/element-equal.svg" alt="Dropdown Left Icon" className="w-5 h-5" />
//               </span>
//               <select
//                 className={selectClass("employmentType")}
//                 value={employmentType}
//                 onChange={(e) => handleChange("employmentType", e.target.value)}
//                 onBlur={() => handleBlur("employmentType")}
//               >
//                 <option value="" disabled>Select employment type</option>
//                 <option value="Daily Wages">Daily Wages</option>
//                 <option value="Salaried">Salaried</option>
//                 <option value="Self-Employed Business">Self-Employed Business</option>
//                 <option value="Self-Employed Professional">Self-Employed Professional</option>
//                 <option value="Student">Student</option>
//                 <option value="Unemployed">Unemployed</option>
//               </select>
//               <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
//                 <img src="/form_page/arrow-down.svg" alt="Dropdown Arrow" className="w-5 h-5" />
//               </span>
//               {errorLine("employmentType")}
//             </div>

//             {/* Loan Amount */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter loan amount"
//                   className={inputClass("loanAmount")}
//                   value={loanAmount}
//                   onChange={(e) => handleChange("loanAmount", e.target.value)}
//                   onBlur={() => handleBlur("loanAmount")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/money.svg" alt="Loan Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("loanAmount")}
//               </div>
//             </div>

//             {/* Pincode */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Enter your pincode"
//                   className={inputClass("pincode")}
//                   value={pincode}
//                   onChange={(e) => handleChange("pincode", e.target.value)}
//                   onBlur={() => handleBlur("pincode")}
//                 />
//                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                   <img src="/form_page/location.svg" alt="Pincode Icon" className="w-5 h-5" />
//                 </span>
//                 {errorLine("pincode")}
//               </div>
//             </div>

//             {/* Continue */}
//             <button
//               className="w-full py-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-[#183153] font-bold shadow mt-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               onClick={handleContinue}
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "Save & Continue"}
//             </button>
//           </div>
//         )}

//         {step === 2 && recommendedVendor && (
//           <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-yellow-100">
//             <div className="mb-6 text-2xl font-bold text-[#183153] text-center">
//               Recommended Lender for You
//             </div>
//             <div className="text-center text-gray-600 mb-6">
//               Based on your profile, we recommend this lender for the best chances of approval.
//             </div>
//             <div className="flex flex-col gap-5">
//               <div className="flex items-center justify-between w-full bg-[#FAFAFA] rounded-lg border border-yellow-300 px-5 py-4 shadow-sm">
//                 <span className="text-gray-700 font-medium">{recommendedVendor.name}</span>
//                 <a
//                   href={recommendedVendor.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-yellow-400 font-bold hover:bg-yellow-50 px-4 py-2 rounded transition border border-yellow-400"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             </div>
//             {/* <div className="mt-6 text-center text-sm text-gray-500">
//               <button 
//                 onClick={() => setStep(3)}
//                 className="text-blue-600 hover:underline"
//               >
//                 Not interested? See other options
//               </button>
//             </div> */}
//           </div>
//         )}

//         {step === 3 && (
//           <div className="flex flex-col items-center w-full max-w-lg py-12 px-8 bg-transparent">
//             <div className="mb-8">
//               <img src="/form_page/not_applicable.svg" alt="Not eligible" className="mx-auto h-50" />
//             </div>
//             <div className="text-center text-xl text-[#183153] font-medium">
//               <div>You're currently not eligible for a loan.</div>
//               <div className="mt-5">Don't worry —<br />you can try again after some time.</div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

const vendors = [
  { 
    id: "zype", 
    name: "Zype", 
    link: "https://zype.onelink.me/vx8a?af_xp=custom&pid=CustomerSource&af_dp=com.zype.mobile%3A%2F%2F&deep_link_value=myZype&af_click_lookback=30d&c=Fundsmama" 
  },
  { 
    id: "creditsea", 
    name: "Creditsea", 
    link: "https://www.creditsea.com/onboarding/sign-up/enter-mobile?source=56467898" 
  },
  { 
    id: "ramfincop", 
    name: "Ram Fincorp", 
    link: "https://ramfinloan.page.link/Fundsmama" 
  },
  // Removed Credlender as requested
];

// Employment type mapping as per backend requirements
const employmentStatusMap = {
  "Daily Wages": "Daily-Wage",
  "Salaried": "Salaried",
  "Self-Employed Business": "Self-Employed-Business",
  "Self-Employed Professional": "Self-Employed-Professional",
  "Student": "Student",
  "Unemployed": "Unemployed",
};

// Lender mapping for backend responses
const lenderMapping = {
  "credlender": "creditsea", // Map "credlender" response to "creditsea" vendor
  "ramfincop": "ramfincop",
  "zype": "zype",
  "creditsea": "creditsea"
};

export default function LoanFlow() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [pan, setPan] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [pincode, setPincode] = useState("");
  const [netIncome, setNetIncome] = useState("");

  // Hidden fields (sent to backend but not shown in UI)
  const [companyName] = useState("Not Provided");
  const [employedSince] = useState("2000-01-01");
  const [salaryCreditMode] = useState("Bank");
  const [loanType] = useState("payday");

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ✅ Validation rules
  const validators = {
    fullName: (v) =>
      /^[A-Za-z ]{3,50}$/.test(v) ? "" : "Enter a valid full name (letters only)",
    phone: (v) =>
      /^[6-9]\d{9}$/.test(v) ? "" : "Enter a valid 10-digit mobile no.",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address",
    dob: (v) => {
      if (!v) return "Date of birth is required";
      const birth = new Date(v);
      const today = new Date();
      const age = today.getFullYear() - birth.getFullYear();
      const validAge =
        age > 18 ||
        (age === 18 &&
          (today.getMonth() > birth.getMonth() ||
            (today.getMonth() === birth.getMonth() &&
              today.getDate() >= birth.getDate())));
      return validAge ? "" : "You must be at least 18 years old";
    },
    pan: (v) =>
      /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v)
        ? "" : "Enter a valid PAN (e.g. ABCDE1234F)",
    employmentType: (v) => (v ? "" : "Please select employment type"),
    loanAmount: (v) =>
      /^\d{1,9}$/.test(v) && Number(v) > 0 ? "" : "Enter a valid loan amount",
    pincode: (v) =>
      /^[1-9][0-9]{5}$/.test(v) ? "" : "Enter a valid 6-digit pincode",
    netIncome: (v) => (/^\d{1,9}$/.test(v) && Number(v) > 0 ? "" : "Enter valid net income"),
  };

  const getFieldError = (name, value) =>
    validators[name] ? validators[name](value) : "";

  const validateAll = () => {
    const next = {
      fullName: getFieldError("fullName", fullName),
      phone: getFieldError("phone", phone),
      email: getFieldError("email", email),
      dob: getFieldError("dob", dob),
      pan: getFieldError("pan", pan),
      employmentType: getFieldError("employmentType", employmentType),
      loanAmount: getFieldError("loanAmount", loanAmount),
      pincode: getFieldError("pincode", pincode),
      netIncome: getFieldError("netIncome", netIncome),
    };
    setErrors(next);
    return Object.values(next).every((e) => !e);
  };

  const shouldShow = (field) => (submitted || touched[field]) && errors[field];

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: getFieldError(field, getValue(field)),
    }));
  };

  const getValue = (field) => {
    switch (field) {
      case "fullName": return fullName;
      case "phone": return phone;
      case "email": return email;
      case "dob": return dob;
      case "pan": return pan;
      case "employmentType": return employmentType;
      case "loanAmount": return loanAmount;
      case "pincode": return pincode;
      case "netIncome": return netIncome;
      default: return "";
    }
  };

  const handleChange = (field, value) => {
    if (field === "pan") value = value.toUpperCase();
    if (field === "phone") value = value.replace(/\D/g, "").slice(0, 10);
    if (field === "pincode") value = value.replace(/\D/g, "").slice(0, 6);
    if (field === "loanAmount") value = value.replace(/\D/g, "");
    if (field === "netIncome") value = value.replace(/\D/g, "");

    const setFns = {
      fullName: setFullName,
      phone: setPhone,
      email: setEmail,
      dob: setDob,
      pan: setPan,
      employmentType: setEmploymentType,
      loanAmount: setLoanAmount,
      pincode: setPincode,
      netIncome: setNetIncome,
    };
    setFns[field](value);

    if (touched[field] || submitted) {
      setErrors((prev) => ({ ...prev, [field]: getFieldError(field, value) }));
    }
  };

  // ✅ FIXED: Proper date formatting function
  const formatDateForAPI = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      // Ensure we get YYYY-MM-DD format
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch (error) {
      //console.error('Date formatting error:', error);
      return '';
    }
  };

  // ✅ DIRECT API CALL to Finsbee using your existing proxy
  const submitToFinsbee = async () => {
    const formattedDOB = formatDateForAPI(dob);
    
    // Map the employment type to backend format
    const backendEmploymentType = employmentStatusMap[employmentType] || employmentType;

    const payload = {
      jsonrpc: "2.0",
      method: "call",
      id: 1,
      params: {
        name: fullName.trim(),
        email: email.trim(),
        phone: phone.replace(/\D/g, ""),
        DOB: formattedDOB,
        pan: pan.toUpperCase(),
        employe_type: backendEmploymentType,
        loan_amount: loanAmount,
        pincode: pincode,
        Company_Name: companyName,
        Employed_since: employedSince,
        Net_Income: netIncome,
        Salary_Credit_Mode: salaryCreditMode,
        Loan_Type: loanType
      }
    };

    //console.log('Full payload:', payload);

    try {
      setLoading(true);
      
      const response = await fetch('/api/flutterapi/bre/website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      //console.log('Finsbee API response:', data);
      return data;
    } catch (error) {
      //console.error('Error submitting to Finsbee:', error);
      throw new Error('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ✅ FIXED: Handle multiple lenders from API response
  const handleContinue = async () => {
    setSubmitted(true);
    if (!validateAll()) return;

    try {
      const response = await submitToFinsbee();
      setApiResponse(response);
      
      //console.log('Full API response:', response);
      
      // ✅ FIXED: Get ALL valid lenders from response
      const resultArray = response?.result || [];
      const validLenders = [];
      
      for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i] && resultArray[i].lender && resultArray[i].lender.trim() !== "") {
          validLenders.push(resultArray[i].lender);
        }
      }
      
      //console.log('Found lenders:', validLenders);
      
      if (validLenders.length > 0) {
        // Show step 2 with all recommended lenders
        setStep(2);
      } else {
        // No lender found, skip to step 3
        setStep(3);
      }
    } catch (error) {
      alert(error.message || 'Failed to submit form. Please try again.');
    }
  };

  // ✅ FIXED: Get ALL recommended vendors based on API response
  const getRecommendedVendors = () => {
    if (!apiResponse) return [];
    
    const resultArray = apiResponse?.result || [];
    const lenders = [];
    
    // Get all valid lenders
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i] && resultArray[i].lender && resultArray[i].lender.trim() !== "") {
        lenders.push(resultArray[i].lender);
      }
    }
    
    if (lenders.length === 0) return [];
    
    //console.log('Looking for vendors for lenders:', lenders);
    
    const recommendedVendors = [];
    
    // Find vendors for each lender
    lenders.forEach(lender => {
      // Map lender name to vendor ID
      const vendorId = lenderMapping[lender.toLowerCase()] || lender.toLowerCase();
      
      const foundVendor = vendors.find(vendor => 
        vendor.id.toLowerCase() === vendorId
      );

      //console.log(`For lender "${lender}", found vendor:`, foundVendor);

      // If vendor found and not already in the list, add it
      if (foundVendor && !recommendedVendors.find(v => v.id === foundVendor.id)) {
        recommendedVendors.push(foundVendor);
      }
    });
    
    //console.log('Final recommended vendors:', recommendedVendors);
    return recommendedVendors;
  };

  const recommendedVendors = getRecommendedVendors();

  // ✅ Styles
  const inputClass = (field) =>
    `w-full py-3 pl-10 pr-4 rounded-md border focus:ring-2 focus:ring-yellow-200 focus:outline-none placeholder-gray-400 ${
      shouldShow(field) ? "border-red-400" : "border-gray-300"
    }`;

  const selectClass = (field) =>
    `w-full py-4 pl-10 pr-10 rounded-lg border focus:ring-2 focus:ring-yellow-200 focus:outline-none text-lg shadow-sm transition-all duration-200 appearance-none ${
      shouldShow(field) ? "border-red-400" : "border-gray-300"
    } ${getValue(field) ? "text-black" : "text-gray-400"} bg-white`;

  const errorLine = (field) => (
    <div className="min-h-[18px] absolute -bottom-5 left-0">
      {shouldShow(field) && (
        <p className="text-red-500 text-sm">{errors[field]}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen relative bg-[#FAFAFA] flex flex-col items-center pt-12">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img src="/booking/planbg.png" alt="Background Wave" className="w-full h-full object-cover" />
      </div>
      <a
        href="#"
        onClick={() => setStep(1)}
        className="flex items-center text-yellow-600 font-medium mb-5 self-start ml-24 text-lg hover:underline relative z-10"
      >
        <span className="mr-2">&#8592;</span> Back to Home
      </a>

      {step !== 3 && (
        <div className="flex flex-col items-center mb-7 z-10">
          <div className="w-full flex items-center justify-center">
            {step === 1 && (
              <img src="/form_page/Group 5 (1).svg" alt="Progress Step 1" className="w-[319px] h-[6px]" />
            )}
            {step === 2 && (
              <img src="/form_page/Group 5.svg" alt="Progress Step 2" className="w-[319px] h-[6px]" />
            )}
          </div>
          <div className="flex w-64 justify-between mt-2 text-gray-700 text-sm">
            <span className={`font-medium ${step === 1 ? "text-black" : "text-gray-400"}`}>Fill Form</span>
            <span className={`font-medium ${step === 2 ? "text-black" : "text-gray-400"}`}>Select vendors</span>
          </div>
        </div>
      )}

      <div className="z-10 w-full flex justify-center">
        {step === 1 && (
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-yellow-100 relative">
            <div className="mb-6 text-2xl font-bold text-[#183153]">Enter Your Details</div>

            {/* Full Name */}
            <div className="mb-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your Full Name(As Aadhaar)"
                  className={inputClass("fullName")}
                  value={fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <img src="/form_page/user-square.svg" alt="Name Icon" className="w-5 h-5" />
                </span>
                {errorLine("fullName")}
              </div>
            </div>

            {/* Phone & Email */}
            <div className="mb-8 flex gap-4">
              <div className="w-1/2 relative">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="00000 00000"
                    className={inputClass("phone")}
                    value={phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <img src="/form_page/call.svg" alt="Phone Icon" className="w-5 h-5" />
                  </span>
                  {errorLine("phone")}
                </div>
              </div>

              <div className="w-1/2 relative">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="xxxxx@xxxx.com"
                    className={inputClass("email")}
                    value={email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <img src="/form_page/email.png" alt="Email Icon" className="w-5 h-5" />
                  </span>
                  {errorLine("email")}
                </div>
              </div>
            </div>

            {/* DOB */}
            <div className="mb-8 relative">
              <div className="relative">
                <input
                  type="date"
                  className={`${inputClass("dob")} text-gray-700`}
                  value={dob}
                  onChange={(e) => handleChange("dob", e.target.value)}
                  onBlur={() => handleBlur("dob")}
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <img src="/form_page/calendar.svg" alt="DOB Icon" className="w-5 h-5" />
                </span>
                {errorLine("dob")}
              </div>
            </div>

            {/* PAN */}
            <div className="mb-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter PAN number"
                  className={`${inputClass("pan")} uppercase`}
                  value={pan}
                  onChange={(e) => handleChange("pan", e.target.value)}
                  onBlur={() => handleBlur("pan")}
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <img src="/form_page/element-equal.svg" alt="PAN Icon" className="w-5 h-5" />
                </span>
                {errorLine("pan")}
              </div>
            </div>

            {/* Employment Type */}
            <div className="mb-8 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                <img src="/form_page/element-equal.svg" alt="Dropdown Left Icon" className="w-5 h-5" />
              </span>
              <select
                className={selectClass("employmentType")}
                value={employmentType}
                onChange={(e) => handleChange("employmentType", e.target.value)}
                onBlur={() => handleBlur("employmentType")}
              >
                <option value="" disabled>Select employment type</option>
                <option value="Daily Wages">Daily Wages</option>
                <option value="Salaried">Salaried</option>
                <option value="Self-Employed Business">Self-Employed Business</option>
                <option value="Self-Employed Professional">Self-Employed Professional</option>
                <option value="Student">Student</option>
                <option value="Unemployed">Unemployed</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                <img src="/form_page/arrow-down.svg" alt="Dropdown Arrow" className="w-5 h-5" />
              </span>
              {errorLine("employmentType")}
            </div>

            {/* Net Income */}
            <div className="mb-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Net Monthly Income"
                  className={inputClass("netIncome")}
                  value={netIncome}
                  onChange={(e) => handleChange("netIncome", e.target.value)}
                  onBlur={() => handleBlur("netIncome")}
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <img src="/form_page/money.svg" alt="Income Icon" className="w-5 h-5" />
                </span>
                {errorLine("netIncome")}
              </div>
            </div>

            {/* Loan Amount */}
            <div className="mb-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter loan amount"
                  className={inputClass("loanAmount")}
                  value={loanAmount}
                  onChange={(e) => handleChange("loanAmount", e.target.value)}
                  onBlur={() => handleBlur("loanAmount")}
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <img src="/form_page/money.svg" alt="Loan Icon" className="w-5 h-5" />
                </span>
                {errorLine("loanAmount")}
              </div>
            </div>

            {/* Pincode */}
            <div className="mb-8 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  className={inputClass("pincode")}
                  value={pincode}
                  onChange={(e) => handleChange("pincode", e.target.value)}
                  onBlur={() => handleBlur("pincode")}
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <img src="/form_page/location.svg" alt="Pincode Icon" className="w-5 h-5" />
                </span>
                {errorLine("pincode")}
              </div>
            </div>

            {/* Continue */}
            <button
              className="w-full py-3 rounded-md bg-yellow-400 hover:bg-yellow-500 text-[#183153] font-bold shadow mt-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleContinue}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Save & Continue"}
            </button>
          </div>
        )}

        {step === 2 && recommendedVendors.length > 0 && (
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-yellow-100">
            <div className="mb-6 text-2xl font-bold text-[#183153] text-center">
              {recommendedVendors.length === 1 ? 'Recommended Lender for You' : 'Recommended Lenders for You'}
            </div>
            <div className="text-center text-gray-600 mb-6">
              {recommendedVendors.length === 1 
                ? 'Based on your profile, we recommend this lender for the best chances of approval.'
                : 'Based on your profile, we recommend these lenders for the best chances of approval.'
              }
            </div>
            <div className="flex flex-col gap-5">
              {recommendedVendors.map((vendor, index) => (
                <div
                  key={vendor.id}
                  className="flex items-center justify-between w-full bg-[#FAFAFA] rounded-lg border border-yellow-300 px-5 py-4 shadow-sm"
                >
                  <span className="text-gray-700 font-medium">{vendor.name}</span>
                  <a
                    href={vendor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 font-bold hover:bg-yellow-50 px-4 py-2 rounded transition border border-yellow-400"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
            {/* <div className="mt-6 text-center text-sm text-gray-500">
              <button 
                onClick={() => setStep(3)}
                className="text-blue-600 hover:underline"
              >
                Not interested? See other options
              </button>
            </div> */}
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center w-full max-w-lg py-12 px-8 bg-transparent">
            <div className="mb-8">
              <img src="/form_page/not_applicable.svg" alt="Not eligible" className="mx-auto h-50" />
            </div>
            <div className="text-center text-xl text-[#183153] font-medium">
              <div>You're currently not eligible for a loan.</div>
              <div className="mt-5">Don't worry —<br />you can try again after some time.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}