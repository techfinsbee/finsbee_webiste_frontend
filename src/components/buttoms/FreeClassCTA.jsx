// "use client";

// import { useRouter } from "next/navigation";

// export default function FreeClassCTA() {
//   const router = useRouter();

//   return (
//     <button
//       onClick={() => router.push("/loan/apply")}
//       className="
//         w-full py-3 text-lg font-semibold text-black
//         rounded-full shadow-lg
//         active:scale-95 transition-all duration-200
//        bg-[#FFC94B]"
//     >
//       Learn Finance – Join Free Classes
//     </button>
//   );
// }

// "use client";

// import { useState, useCallback } from "react";

// const initialForm = {
//   name: "",
//   phone: "",
//   email: "",
// };

// export default function FreeClassCTA() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [form, setForm] = useState(initialForm);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const openModal = useCallback(() => {
//     setForm(initialForm);
//     setSubmitted(false);
//     setIsOpen(true);
//   }, []);

//   const closeModal = useCallback(() => {
//     if (!submitting) setIsOpen(false);
//   }, [submitting]);

//   const handleChange = useCallback((field, value) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   }, []);

//   const handleSubmit = useCallback(
//     async (e) => {
//       e.preventDefault();
//       if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
//         return;
//       }

//       try {
//         setSubmitting(true);

//         // TODO: send data to your API
//         // await fetch("/api/free-class", {
//         //   method: "POST",
//         //   headers: { "Content-Type": "application/json" },
//         //   body: JSON.stringify(form),
//         // });

//         setSubmitted(true);
//       } finally {
//         setSubmitting(false);
//       }
//     },
//     [form]
//   );

//   return (
//     <>
//       {/* Trigger button */}
//       <button
//         type="button"
//         onClick={openModal}
//         className="w-full rounded-full bg-[#FFC94B] py-3 text-lg font-semibold text-black shadow-lg transition-all duration-200 active:scale-95"
//       >
//         Learn Finance – Join Free Classes
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
//           aria-modal="true"
//           role="dialog"
//         >
//           <div className="relative w-full max-w-lg rounded-2xl border border-yellow-100 bg-white p-8 shadow-lg">
//             {/* Close */}
//             <button
//               type="button"
//               onClick={closeModal}
//               className="absolute right-4 top-4 text-2xl leading-none text-gray-400 hover:text-gray-600"
//               aria-label="Close"
//             >
//               ×
//             </button>

//             {!submitted ? (
//               <>
//                 <h2 className="mb-6 text-2xl font-bold text-[#183153]">
//                   Enter Your Details
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   {/* Name */}
//                   <div className="relative">
//                     <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
//                       <img
//                         src="/form_page/user-square.svg"
//                         alt=""
//                         className="h-5 w-5"
//                       />
//                     </span>
//                     <input
//                       type="text"
//                       required
//                       placeholder="Enter your Full Name"
//                       value={form.name}
//                       onChange={(e) =>
//                         handleChange("name", e.target.value)
//                       }
//                       className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-900 outline-none focus:border-[#FFC94B] focus:ring-2 focus:ring-[#FFC94B]/40"
//                     />
//                   </div>

//                   {/* Phone + Email */}
//                   <div className="flex flex-col gap-4 sm:flex-row">
//                     <div className="relative w-full">
//                       <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
//                         <img
//                           src="/form_page/call.svg"
//                           alt=""
//                           className="h-5 w-5"
//                         />
//                       </span>
//                       <input
//                         type="tel"
//                         required
//                         placeholder="00000 00000"
//                         value={form.phone}
//                         onChange={(e) =>
//                           handleChange("phone", e.target.value)
//                         }
//                         className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-900 outline-none focus:border-[#FFC94B] focus:ring-2 focus:ring-[#FFC94B]/40"
//                       />
//                     </div>

//                     <div className="relative w-full">
//                       <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
//                         <img
//                           src="/form_page/email.png"
//                           alt=""
//                           className="h-5 w-5"
//                         />
//                       </span>
//                       <input
//                         type="email"
//                         required
//                         placeholder="xxxxx@xxxx.com"
//                         value={form.email}
//                         onChange={(e) =>
//                           handleChange("email", e.target.value)
//                         }
//                         className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-900 outline-none focus:border-[#FFC94B] focus:ring-2 focus:ring-[#FFC94B]/40"
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="mt-2 w-full rounded-full bg-[#FFC94B] py-3 text-center text-base font-semibold text-black shadow-md transition hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
//                   >
//                     {submitting
//                       ? "Submitting..."
//                       : "Submit & Get WhatsApp Link"}
//                   </button>
//                 </form>
//               </>
//             ) : (
//               <div className="space-y-6 text-center">
//                 <h2 className="text-2xl font-bold text-[#183153]">
//                   You are almost in!
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Thanks, {form.name || "Learner"}. Tap below to join our
//                   WhatsApp group for free finance classes.
//                 </p>

//                 <a
//                   href="https://chat.whatsapp.com/JlWVMfZCz1eCKVr8QU20PC"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md hover:brightness-110"
//                 >
//                   Join WhatsApp Group
//                 </a>

//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="block w-full rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";

import { useState } from "react";
import FreeClassPopup from "../common/FreeClassPopup";


export default function FreeClassCTA() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      {/* Mobile Button */}
      <button
        type="button"
        onClick={() => setOpenPopup(true)}
        className="w-full rounded-full bg-[#FFC94B] py-3 text-lg font-semibold text-black shadow-lg transition-all duration-200 active:scale-95"
      >
        Learn Finance – Join Free Classes
      </button>

      {/* Popup (same as desktop) */}
      <FreeClassPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </>
  );
}
