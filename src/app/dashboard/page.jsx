// "use client";

// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { LogOut, ChevronRight } from "lucide-react";
// import Image from "next/image";

// export default function DashboardPage() {
//   const router = useRouter();
//   const [active, setActive] = useState("profile");
//   const [showDropdown, setShowDropdown] = useState(false);
//   // New: User profile state
//   const [userProfile, setUserProfile] = useState({
//     name: "Loading...",
//     phone: "",
//     email: "",
//   });
//   const [profileLoading, setProfileLoading] = useState(true);

//   useEffect(() => {
//     const customerId = localStorage.getItem("originalCustomerId");
//     if (!customerId) router.replace("/");
//   }, [router]);

//   useEffect(() => {
//     const customerId = localStorage.getItem("originalCustomerId");
//     if (!customerId) {
//       router.replace("/");
//       return;
//     }
//     // Fetch user profile for sidebar
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.post(
//           "/api/customer/profile",
//           {
//             jsonrpc: "2.0",
//             method: "call",
//             params: { CustomerId: Number(customerId) },
//           },
//           { withCredentials: true }
//         );

//         const profile = response.data?.result?.[0];

//         if (profile) {
//           setUserProfile({
//             name: profile.name || "User",
//             phone: profile.phone ? `+91 ${profile.phone}` : "",
//             email: profile.email || "Not available",
//           });
//         }
//       } catch (error) {
//         console.error("Failed to fetch profile:", error);
//         setUserProfile({
//           name: "Guest",
//           phone: "",
//           email: "",
//         });
//       } finally {
//         setProfileLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.clear();
//     document.cookie =
//       "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
//     router.push("/");
//   };
//   return (
//     <div className="min-h-screen bg-[#EEEAFF]">
//       {/* HEADER */}
//       <div className="relative bg-gradient-to-r from-[#3C1E86] to-[#5A36D6] rounded-b-[80px] px-16 py-6 flex justify-between items-center text-white shadow-lg">
//         <div className="flex items-center gap-4">
//           <button onClick={() => router.back()} className="text-2xl">
//             ←
//           </button>
//           <span className="text-2xl font-semibold tracking-wide">finsbee.</span>
//         </div>
//         {/* <div className="bg-white text-[#5A36D6] px-5 py-2 rounded-full font-medium shadow-md">
//           My Account
//         </div> */}
//         <div>
//           <button
//             onClick={() => setShowDropdown(!showDropdown)}
//             className="bg-white text-[#5A36D6] px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
//           >
//             My Account
//           </button>
//           {showDropdown && (
//             <div className="absolute right-0 mt-4 mr-4 w-[240px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
//               {/* <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition">
//         <p className="text-gray-800 font-medium text-[16px]">
//           My Account
//         </p>
//       </div> */}

//               {/* <button
//                 onClick={handleLogout}
//                 className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition"
//               >
//                 <p className="text-gray-800 font-medium text-[16px]">Logout</p>
//               </button> */}
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left px-6 py-4 hover:bg-gray-50 cursor-pointer transition"
//               >
//                 <span className="text-gray-800 font-medium text-[16px]">
//                   Logout
//                 </span>
//               </button>

//               <div className="border-t border-gray-200 mx-4"></div>

//               {/* <div className="px-6 py-4 hover:bg-gray-50 cursor-pointer transition">
//         <p className="text-gray-700 font-semibold text-[16px]">
//           Help & Support
//         </p>
//       </div> */}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="flex items-start gap-10 px-26 py-4">
//         {/* SIDEBAR */}
//         <div className="w-[360px] h-[calc(100vh-150px)] bg-[#FAFAFA] rounded-3xl sticky top-6 flex flex-col overflow-y-auto">
//           <div className="pt-12 pb-8 flex flex-col   justify-self-center">
//             {profileLoading ? (
//               <>
//                 <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto"></div>
//                 <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mt-2 mx-auto"></div>
//                 <div className="h-4 w-40 bg-gray-200 rounded animate-pulse mt-1 mx-auto"></div>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-2xl font-semibold text-gray-900 text-center">
//                   {userProfile.name}
//                 </h2>
//                 <p className="text-gray-500 text-sm mt-1 text-center">
//                   {userProfile.phone || "Phone not available"}
//                 </p>
//                 <p className="text-gray-500 text-sm text-center">
//                   {userProfile.email}
//                 </p>
//               </>
//             )}
//           </div>

//           <div className="flex-1 flex flex-col p-6 space-y-3 ">
//             {/* <SidebarItem
//               label="My Dashboard"
//               active={active === "dashboard"}
//               onClick={() => setActive("dashboard")}
//             /> */}

//             <SidebarItem
//               label="My Profile"
//               active={active === "profile"}
//               onClick={() => setActive("profile")}
//             />

//             <SidebarItem
//               label="My Loan History"
//               active={active === "loan"}
//               onClick={() => setActive("loan")}
//             />
//             {/* 
//             <SidebarItem
//               label="Gold Investment"
//               active={active === "gold"}
//               onClick={() => setActive("gold")}
//             /> */}

//             <button
//               onClick={handleLogout}
//               className="mt-auto w-full border border-[#5A36D6] text-[#5A36D6] py-3 rounded-xl font-medium hover:bg-[#F2EEFF] transition-all"
//             >
//               Logout
//             </button>
//           </div>
//         </div>

//         {/* MAIN CONTAINER */}
//         <div className="flex-1 bg-[#FAFAFA] rounded-3xl p-10">
//           {/* DASHBOARD VIEW */}
//           {active === "dashboard" && (
//             <>
//               {/* TOP CARDS */}
//               <div className="flex gap-8 mb-10">
//                 <div className="flex-1 h-[150px] bg-[#FFF7E2] border border-[#F4D98A] rounded-2xl p-6 hover:shadow-lg transition-all">
//                   <div className="flex justify-between items-start">
//                     <h3 className="text-2xl font-bold text-gray-900">
//                       ₹2,90,076
//                     </h3>
//                     <span className="text-green-500 text-sm font-semibold">
//                       + 11.62% ↑
//                     </span>
//                   </div>

//                   <div className="mt-3 flex justify-between items-center">
//                     <div className="text-gray-600">My Gold Investment</div>
//                     <img
//                       src="https://dummyimage.com/100x40/ffd700/fff.png&text=Chart"
//                       alt="chart"
//                       className="w-[120px]"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex-1 h-[150px] bg-white border border-[#F4D98A] rounded-2xl p-6 hover:shadow-lg transition-all">
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     ₹4,90,000
//                   </h3>

//                   <div className="mt-3 flex justify-between items-center">
//                     <div className="text-gray-600">My Active Loan</div>
//                     <div className="flex gap-3">
//                       <img
//                         src="https://dummyimage.com/40x40/ff6b6b/fff.png"
//                         className="rounded-lg"
//                       />
//                       <img
//                         src="https://dummyimage.com/40x40/4dabf7/fff.png"
//                         className="rounded-lg"
//                       />
//                       <img
//                         src="https://dummyimage.com/40x40/f03e3e/fff.png"
//                         className="rounded-lg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* CONTENT GRID */}
//               <div className="grid grid-cols-2 gap-10">
//                 <Card title="Latest Transaction">
//                   <Transaction title="Buy Gold" amount="+₹2001" success />
//                   <Transaction title="Failed transaction" amount="₹2001" />
//                   <Transaction title="Buy Silver" amount="+₹2001" success />
//                 </Card>

//                 <Card title="Recent Loan">
//                   <LoanCard />
//                   <LoanCard />
//                   <LoanCard />
//                 </Card>
//               </div>

//               <div className="relative rounded-3xl h-[130px] flex items-center justify-center overflow-hidden mt-10">
//                 <div className="absolute left-1/5 opacity-20">
//                   <Image
//                     src="/sheild.png"
//                     alt="shield"
//                     width={96}
//                     height={96}
//                   />
//                 </div>

//                 <div className="text-center z-10 opacity-40">
//                   <h2 className="text-3xl font-semibold text-[#6A6A6A]">
//                     Finsbee keeps your
//                   </h2>
//                   <h2 className="text-3xl font-semibold text-[#6A6A6A]">
//                     data safe
//                   </h2>
//                 </div>
//               </div>
//             </>
//           )}

//           {/* PROFILE VIEW */}
//           {active === "profile" && <ProfileSection />}
//           {active === "loan" && <LoanHistorySection />}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProfileSection() {
//   const [tab, setTab] = useState("personal");
//   const router = useRouter();

//   const customerId =
//     typeof window !== "undefined"
//       ? localStorage.getItem("originalCustomerId")
//       : null;

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     pincode: "",
//     PAN: "",
//     gender: "",
//     DOB: "",
//     Organisation: "",
//     Profession: "",
//   });

//   // 🔥 FETCH PROFILE
//   useEffect(() => {
//     if (!customerId) {
//       router.replace("/");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.post(
//           "/api/customer/profile",
//           {
//             jsonrpc: "2.0",
//             method: "call",
//             params: { CustomerId: Number(customerId) },
//           },
//           { withCredentials: true }
//         );

//         const profile = res.data?.result?.[0];

//         if (profile) {
//           setFormData({
//             name: profile.name || "",
//             email: profile.email || "",
//             phone: profile.phone || "",
//             pincode: profile.zip || "",
//             PAN: profile.PAN || "",
//             gender: profile.gender || "",
//             DOB: profile.DOB || "",
//             Organisation: profile.orgType || "",
//             Profession: profile.profession || "",
//           });
//         }
//       } catch (err) {
//         router.replace("/");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [customerId, router]);

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   // 🔥 UPDATE PROFILE
//   const handleUpdate = async () => {
//     try {
//       setSaving(true);

//       await axios.post(
//         "/api/update/customer",
//         {
//           jsonrpc: "2.0",
//           method: "call",
//           params: {
//             CustomerId: Number(customerId),
//             ...formData,
//           },
//         },
//         { withCredentials: true }
//       );

//       alert("Profile Updated Successfully ✅");
//     } catch {
//       alert("Failed to update profile ❌");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center py-20">
//         <p className="text-gray-500 animate-pulse">
//           Loading your profile...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">
//       {/* TAB SWITCHER */}
//       <div className="flex flex-wrap gap-3 border-b pb-4">
//         {["personal", "pan", "employment"].map((item) => (
//           <button
//             key={item}
//             onClick={() => setTab(item)}
//             className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
//               tab === item
//                 ? "bg-gradient-to-r from-[#5A36D6] to-[#7B5CFF] text-white shadow-md"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             {item === "personal"
//               ? "Personal Detail"
//               : item === "pan"
//               ? "PAN Detail"
//               : "Employment Detail"}
//           </button>
//         ))}
//       </div>

//       {/* PERSONAL */}
//       {tab === "personal" && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           <Input label="Full Name" value={formData.name} onChange={(v) => handleChange("name", v)} />
//           <Input label="Email" value={formData.email} onChange={(v) => handleChange("email", v)} />
//           <Input label="Phone" value={formData.phone} onChange={(v) => handleChange("phone", v)} />
//           <Input label="Pincode" value={formData.pincode} onChange={(v) => handleChange("pincode", v)} />
//           <Input label="Gender" value={formData.gender} onChange={(v) => handleChange("gender", v)} />
//           <Input label="Date of Birth" value={formData.DOB} onChange={(v) => handleChange("DOB", v)} />
//         </div>
//       )}

//       {/* PAN DETAIL */}
//       {tab === "pan" && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           <Input
//             label="PAN Number"
//             value={formData.PAN}
//             readOnly
//           />
//           <Input label="Father's Name" />
//           <Input label="PAN Linked Mobile" />
//           <Input label="PAN Linked Email" />
//         </div>
//       )}

//       {/* EMPLOYMENT */}
//       {tab === "employment" && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           <Input
//             label="Organisation"
//             value={formData.Organisation}
//             onChange={(v) => handleChange("Organisation", v)}
//           />
//           <Input
//             label="Profession"
//             value={formData.Profession}
//             onChange={(v) => handleChange("Profession", v)}
//           />
//           <Input label="Monthly Income" />
//           <Input label="Work Experience" />
//         </div>
//       )}

//       {/* UPDATE BUTTON */}
//       <div className="pt-4">
//         <button
//           onClick={handleUpdate}
//           disabled={saving}
//           className="
//             w-full
//             bg-gradient-to-r from-[#EAC15A] to-[#F7D36A]
//             hover:scale-[1.01]
//             active:scale-[0.98]
//             transition-all
//             font-semibold
//             py-4
//             rounded-xl
//             shadow-md
//             disabled:opacity-60
//           "
//         >
//           {saving ? "Updating..." : "Update Details"}
//         </button>
//       </div>
//     </div>
//   );
// }

// // function LoanHistorySection() {
// //   const customerId =
// //     typeof window !== "undefined"
// //       ? localStorage.getItem("originalCustomerId")
// //       : null;

// //   const [loans, setLoans] = useState([]);

// //   useEffect(() => {
// //     if (!customerId) return;

// //     const fetchLoans = async () => {
// //       try {
// //         const res = await axios.post(
// //           "/api/customer/transaction-history",
// //           {
// //             jsonrpc: "2.0",
// //             method: "call",
// //             params: { CustomerId: Number(customerId) },
// //           },
// //           { withCredentials: true }
// //         );

// //         setLoans(res.data?.result || []);
// //       } catch (err) {
// //         console.error("Loan history failed", err);
// //       }
// //     };

// //     fetchLoans();
// //   }, [customerId]);

// //   return (
// //     <div>
// //       <h2 className="text-xl font-semibold mb-6">My Loan History</h2>

// //       {loans.length === 0 ? (
// //         <p>No loan history found.</p>
// //       ) : (
// //         loans.map((loan, i) => (
// //           <div
// //             key={i}
// //             className="border rounded-xl p-4 mb-4 flex justify-between"
// //           >
// //             <div>
// //               <p className="font-semibold">{loan.loan_type}</p>
// //               <p className="text-sm text-gray-500">{loan.status}</p>
// //             </div>
// //             <div className="text-right">
// //               <p className="font-bold">₹{loan.amount}</p>
// //               <p className="text-sm text-gray-400">{loan.Date}</p>
// //             </div>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

// function LoanHistorySection() {
//   const customerId =
//     typeof window !== "undefined"
//       ? localStorage.getItem("originalCustomerId")
//       : null;

//   const [loans, setLoans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!customerId) {
//       setError("Please login to view loan history");
//       setLoading(false);
//       return;
//     }

//     const fetchLoans = async () => {
//       try {
//         const res = await axios.post(
//           "/api/customer/transaction-history",
//           {
//             jsonrpc: "2.0",
//             method: "call",
//             params: { CustomerId: Number(customerId) },
//           },
//           { withCredentials: true }
//         );

//         const result = res.data?.result || [];
//         console.log("Loan history loaded:", result); // debug

//         setLoans(result);
//       } catch (err) {
//         console.error("Loan history fetch failed:", err);
//         setError("Failed to load loan history. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLoans();
//   }, [customerId]);

//   if (loading) {
//     return (
//       <div className="text-center py-10">
//         <p className="text-gray-500 animate-pulse">Loading loan history...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-10 text-red-600">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   if (loans.length === 0) {
//     return (
//       <div className="text-center py-10 text-gray-500">
//         <p>No loan history found yet.</p>
//         <p className="mt-2 text-sm">Apply for a loan to see records here.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//         My Loan History
//       </h2>

//       <div className="space-y-4">
//         {loans.map((loan, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all"
//           >
//             <div className="flex-1">
//               <p className="font-medium text-gray-900">
//                 {loan.loan_type || "Unknown Loan"}
//               </p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {loan.name || "Customer"}
//               </p>
//               <p className="text-xs text-gray-400 mt-1">
//                 {loan.Date
//                   ? new Date(loan.Date).toLocaleDateString("en-IN", {
//                       day: "numeric",
//                       month: "short",
//                       year: "numeric",
//                       // hour: "2-digit",
//                       // minute: "2-digit",
//                     })
//                   : "Date not available"}
//               </p>
//             </div>

//             <div className="mt-3 sm:mt-0 text-right sm:min-w-[140px]">
//               <p className="font-bold text-lg text-gray-900">
//                 ₹{Number(loan.amount || 0).toLocaleString("en-IN")}
//               </p>
//               <p
//                 className={`text-sm font-medium mt-1 ${
//                   loan.status === "New" || loan.status === "Follow Up"
//                     ? "text-yellow-600"
//                     : loan.status === "Documents Received"
//                     ? "text-blue-600"
//                     : "text-green-600"
//                 }`}
//               >
//                 {loan.status || "Unknown"}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Input({
//   label,
//   value = "",
//   onChange = () => {},
//   readOnly = false,
// }) {
//   return (
//     <div className="space-y-2">
//       <label className="text-sm font-medium text-gray-600">
//         {label}
//       </label>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         readOnly={readOnly}
//         placeholder="Enter here"
//         className={`
//           w-full
//           border
//           rounded-xl
//           px-4 py-3
//           text-sm
//           transition-all
//           focus:outline-none
//           focus:ring-2
//           ${
//             readOnly
//               ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
//               : "border-gray-300 focus:ring-purple-300"
//           }
//         `}
//       />
//     </div>
//   );
// }

// /* ORIGINAL COMPONENTS */

// function SidebarItem({ label, active, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-full flex justify-between items-center px-5 py-3 rounded-xl font-medium transition-all ${
//         active
//           ? "bg-[#F4E7BE] text-gray-900"
//           : "text-gray-600 hover:bg-[#F2EEFF]"
//       }`}
//     >
//       {label}
//       <ChevronRight size={18} />
//     </button>
//   );
// }

// function Card({ title, children }) {
//   return (
//     <div className="bg-white rounded-2xl pt-4 px-6 h-[294px] shadow-sm border border-[#ECEBFF]">
//       <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
//       <div className="space-y-2">{children}</div>
//     </div>
//   );
// }

// function Transaction({ title, amount, success }) {
//   return (
//     <div className="flex justify-between items-center">
//       <div>
//         <p className="font-medium text-gray-800">{title}</p>
//         <p className="text-sm text-gray-400">22nd Aug 12:17 pm</p>
//       </div>
//       <span
//         className={`font-semibold ${
//           success ? "text-green-600" : "text-gray-600"
//         }`}
//       >
//         {amount}
//       </span>
//     </div>
//   );
// }

// function LoanCard() {
//   return (
//     <div className="flex justify-between items-center h-[66px] p-5 rounded-xl border border-[#ECEBFF] hover:shadow-md transition-all">
//       <div>
//         <p className="font-medium text-sm text-gray-800">State Bank of India</p>
//         <p className="text-sm text-gray-500">Personal Loan</p>
//       </div>
//       <div className="text-right">
//         <p className="font-bold text-sm text-gray-900">₹2,00,000</p>
//         <p className="text-sm text-gray-400">20 Jul 2025</p>
//       </div>
//     </div>
//   );
// }



"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

/* ================= MAIN ================= */

export default function DashboardPage() {
  const router = useRouter();
  const [active, setActive] = useState("profile");
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [dashboardLoading, setDashboardLoading] = useState(true);

  const customerId =
    typeof window !== "undefined"
      ? localStorage.getItem("originalCustomerId")
      : null;

  useEffect(() => {
    if (!customerId) {
      router.replace("/");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.post(
          "/api/customer/profile",
          {
            jsonrpc: "2.0",
            method: "call",
            params: { CustomerId: Number(customerId) },
          },
          { withCredentials: true }
        );

        setUserProfile(res.data?.result?.[0] || null);
      } catch {
        router.replace("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [customerId, router]);
 
useEffect(() => {
  const customerId = localStorage.getItem("originalCustomerId");
  if (!customerId) return;

  const fetchTransactions = async () => {
    try {
      const res = await axios.post(
        "/api/customer/transaction-history",
        {
          jsonrpc: "2.0",
          method: "call",
          params: { CustomerId: Number(customerId) },
        },
        { withCredentials: true }
      );

      setTransactions(res.data?.result || []);
    } catch (err) {
      console.error("Dashboard transaction fetch failed:", err);
    } finally {
      setDashboardLoading(false);
    }
  };

  fetchTransactions();
}, []);

  const handleLogout = () => {
    localStorage.clear();
    document.cookie =
      "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/");
  };

  if (loading) return null;

  return (
    <div className="min-h-screen bg-[#EEEAFF]">

      {/* ================= HEADER (SAME OLD) ================= */}
      <div className="bg-gradient-to-r from-[#3C1E86] to-[#5A36D6] 
        rounded-b-[60px] px-4 lg:px-16 py-5 flex justify-between items-center text-white shadow-lg">

        <div className="flex items-center gap-4">
          <button onClick={() => router.back()} className="text-xl">
            ←
          </button>
          <span className="text-xl lg:text-2xl font-semibold tracking-wide">
            finsbee.
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="hidden lg:block bg-white text-[#5A36D6] px-5 py-2 rounded-full font-medium shadow-md"
        >
          Logout
        </button>
      </div>

      {/* ================= DESKTOP LAYOUT (UNCHANGED) ================= */}
      <div className="hidden lg:flex items-start gap-10 px-16 py-6">

        {/* SIDEBAR */}
        <div className="w-[360px] h-[calc(100vh-150px)] bg-[#FAFAFA] rounded-3xl sticky top-6 flex flex-col overflow-y-auto">

          <div className="pt-12 pb-8 text-center">
            <h2 className="text-2xl font-semibold">
              {userProfile?.name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              +91 {userProfile?.phone}
            </p>
          </div>

          <div className="flex-1 flex flex-col p-6 space-y-3">
            <SidebarItem
              label="My Profile"
              active={active === "profile"}
              onClick={() => setActive("profile")}
            />
            <SidebarItem
              label="My Loan History"
              active={active === "loan"}
              onClick={() => setActive("loan")}
            />

            <button
              onClick={handleLogout}
              className="mt-auto w-full border border-[#5A36D6] text-[#5A36D6] py-3 rounded-xl font-medium hover:bg-[#F2EEFF]"
            >
              Logout
            </button>
          </div>
        </div>

        {/* MAIN CONTAINER */}
        <div className="flex-1 bg-[#FAFAFA] rounded-3xl p-10">
          {active === "profile" && <ProfileSection />}
          {active === "loan" && <LoanHistorySection />}
        </div>
      </div>

      {/* ================= MOBILE GROWW STYLE ================= */}
      <div className="lg:hidden p-4 space-y-4">

        {active === "profile" && (
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <ProfileSection mobile />
          </div>
        )}

        {active === "loan" && (
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <LoanHistorySection mobile />
          </div>
        )}
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex lg:hidden">
        <MobileNavItem
          label="Profile"
          active={active === "profile"}
          onClick={() => setActive("profile")}
        />
        <MobileNavItem
          label="Loans"
          active={active === "loan"}
          onClick={() => setActive("loan")}
        />
        <button
          onClick={handleLogout}
          className="flex-1 py-3 text-sm text-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

/* ================= PROFILE ================= */

function ProfileSection({ mobile }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    PAN: "",
  });

  const customerId =
    typeof window !== "undefined"
      ? localStorage.getItem("originalCustomerId")
      : null;

  useEffect(() => {
    if (!customerId) return;

    axios.post(
      "/api/customer/profile",
      {
        jsonrpc: "2.0",
        method: "call",
        params: { CustomerId: Number(customerId) },
      },
      { withCredentials: true }
    ).then(res => {
      const profile = res.data?.result?.[0];
      if (profile) {
        setFormData({
          name: profile.name || "",
          email: profile.email || "",
          phone: profile.phone || "",
          pincode: profile.zip || "",
          PAN: profile.PAN || "",
        });
      }
    });
  }, [customerId]);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-[#3C1E86]">
        My Profile
      </h2>

      <div className={`grid ${mobile ? "grid-cols-1" : "grid-cols-2"} gap-5`}>
       <Input
  label="Full Name"
  value={formData.name}
  onChange={(v) =>
    setFormData((prev) => ({ ...prev, name: v }))
  }
/>

<Input
  label="Email"
  value={formData.email}
  onChange={(v) =>
    setFormData((prev) => ({ ...prev, email: v }))
  }
/>

<Input
  label="Phone"
  value={formData.phone}
  onChange={(v) =>
    setFormData((prev) => ({ ...prev, phone: v }))
  }
/>

<Input
  label="Pincode"
  value={formData.pincode}
  onChange={(v) =>
    setFormData((prev) => ({ ...prev, pincode: v }))
  }
/>

<Input
  label="PAN Number"
  value={formData.PAN}
  readOnly
/>
      </div>

      <button className="w-full bg-[#EAC15A] py-3 rounded-xl font-semibold">
        Update Details
      </button>
    </div>
  );
}

/* ================= LOAN ================= */
function LoanHistorySection({ mobile }) {
  const customerId =
    typeof window !== "undefined"
      ? localStorage.getItem("originalCustomerId")
      : null;

  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!customerId) return;

    const fetchLoans = async () => {
      try {
        const res = await axios.post(
          "/api/customer/transaction-history",
          {
            jsonrpc: "2.0",
            method: "call",
            params: { CustomerId: Number(customerId) },
          },
          { withCredentials: true }
        );

        setLoans(res.data?.result || []);
      } catch (err) {
        console.error("Loan history fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, [customerId]);

  if (loading) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-[#3C1E86] mb-4">
          My Loan History
        </h2>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (loans.length === 0) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-[#3C1E86] mb-4">
          My Loan History
        </h2>
        <p className="text-gray-500">No loan history found.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#3C1E86] mb-4">
        My Loan History
      </h2>

      <div className="space-y-3">
        {loans.map((loan, index) => (
          <div
            key={index}
            className="bg-[#FAFAFA] p-4 rounded-xl flex justify-between"
          >
            <div>
              <p className="font-medium">
                {loan.loan_type || "Loan"}
              </p>
              <p className="text-sm text-gray-500">
                {loan.status || "Pending"}
              </p>
            </div>

            <p className="font-semibold text-[#3C1E86]">
              ₹{Number(loan.amount || 0).toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
/* ================= COMPONENTS ================= */

function SidebarItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-between items-center px-5 py-3 rounded-xl font-medium ${
        active
          ? "bg-[#F4E7BE]"
          : "hover:bg-[#F2EEFF]"
      }`}
    >
      {label}
      <ChevronRight size={18} />
    </button>
  );
}

function MobileNavItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 text-sm ${
        active
          ? "text-[#3C1E86] border-t-2 border-[#3C1E86]"
          : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );
}

function Input({
  label,
  value = "",
  onChange = () => {},
  readOnly = false,
}) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        {label}
      </label>

      <input
        value={value}
        onChange={readOnly ? undefined : (e) => onChange(e.target.value)}
        readOnly={readOnly}
        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
          readOnly
            ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
            : "border-gray-300 focus:ring-[#5A36D6]"
        }`}
      />
    </div>
  );
}