// export default function Sidebar({ phoneNumber, setPhoneNumber, isChecked, setIsChecked }) {
//   return (
//     <div className="w-[432px] flex-shrink-0 ">
//       <div className="w-[432px] border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden">
//         <div className="pt-12 pb-0 px-6">
//           <div className="text-sm font-normal text-gray-600 mb-1">
             
//           </div>
//           <h2 className="w-[229px] text-[32px] font-bold text-gray-900 leading-normal">
//             Quick approval Loan
//           </h2>
//         </div>
//         <div className="bg-gray-50 rounded-[60px_16px_16px_16px] p-8 mt-8 flex flex-col gap-[124px]">
//           <div className="flex flex-col gap-8">
//             <div className="flex items-center gap-3 px-3 py-[18px] border border-gray-300 rounded-lg bg-white">
//               <div className="w-[30px] text-base font-normal text-gray-400">
//                 +91
//               </div>
//               <div
//                 className="w-px h-5"
//                 style={{
//                   backgroundImage: "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-5.svg')",
//                 }}
//               ></div>
//               <input
//                 className="flex-1 border-none outline-none bg-transparent text-base font-normal text-gray-300 placeholder-gray-300"
//                 type="tel"
//                 placeholder="Enter mobile no."
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//             <div className="flex items-start gap-3 pr-6">
//               <input
//                 type="checkbox"
//                 className="w-6 h-6 mt-0.5 cursor-pointer"
//                 checked={isChecked}
//                 onChange={(e) => setIsChecked(e.target.checked)}
//               />
//               <div className="flex-1 text-sm font-normal leading-[18px]">
//                 <span className="text-gray-300">
//                   By creating an account you are agree<br />
//                   to our{" "}
//                 </span>
//                 <span className="text-yellow-400">Term and Conditions </span>
//                 <span className="text-gray-300">and </span>
//                 <span className="text-yellow-400">Privacy Policy</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center gap-2.5 py-2.5">
//             <div className="flex items-center gap-1.5 px-2.5 py-0.5">
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//               </svg>
//               <div className="text-sm font-normal text-gray-400">
//                  Finsbee keeps your data safe
//               </div>
//             </div>
//             <button className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer transition-colors hover:bg-yellow-500">
//               Send OTP
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Sidebar({ phoneNumber, setPhoneNumber, isChecked, setIsChecked }) {
//   return (
//     <div className="sticky top-24">
//       <div className="w-[432px] border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden">
//         <div className="pt-12 pb-0 px-6">
//           <div className="text-sm font-normal text-gray-600 mb-1">
//              
//           </div>
//           <h2 className="w-[229px] text-[32px] font-bold text-gray-900 leading-normal">
//             Quick approval Loan
//           </h2>
//         </div>
//         <div className="bg-gray-50 rounded-[60px_16px_16px_16px] p-8 mt-8 flex flex-col gap-[124px]">
//           <div className="flex flex-col gap-8">
//             <div className="flex items-center gap-3 px-3 py-[18px] border border-gray-300 rounded-lg bg-white">
//               <div className="w-[30px] text-base font-normal text-gray-400">
//                 +91
//               </div>
//               <div
//                 className="w-px h-5"
//                 style={{
//                   backgroundImage: "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-5.svg')",
//                 }}
//               ></div>
//               <input
//                 className="flex-1 border-none outline-none bg-transparent text-base font-normal text-gray-300 placeholder-gray-300"
//                 type="tel"
//                 placeholder="Enter mobile no."
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//             <div className="flex items-start gap-3 pr-6">
//               <input
//                 type="checkbox"
//                 className="w-6 h-6 mt-0.5 cursor-pointer"
//                 checked={isChecked}
//                 onChange={(e) => setIsChecked(e.target.checked)}
//               />
//               <div className="flex-1 text-sm font-normal leading-[18px]">
//                 <span className="text-gray-300">
//                   By creating an account you are agree<br />
//                   to our{" "}
//                 </span>
//                 <span className="text-yellow-400">Term and Conditions </span>
//                 <span className="text-gray-300">and </span>
//                 <span className="text-yellow-400">Privacy Policy</span>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center gap-2.5 py-2.5">
//             <div className="flex items-center gap-1.5 px-2.5 py-0.5">
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//               </svg>
//               <div className="text-sm font-normal text-gray-400">
//                  Finsbee keeps your data safe
//               </div>
//             </div>
//             <button className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer transition-colors hover:bg-yellow-500">
//               Send OTP
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import FlutterApp from "@/app/flutterapp/page";

export default function Sidebar({
  phoneNumber,
  setPhoneNumber,
  isChecked,
  setIsChecked,
}) {
  const [showFlutter, setShowFlutter] = useState(false);

  const handleApplyClick = () => {
    if (!phoneNumber || !isChecked) {
      alert("Please enter phone number and accept terms.");
      return;
    }

    setShowFlutter(true); // Show Flutter app inside the page
  };

  return (
    <div className="w-[432px] flex-shrink-0">

      {/* ---------- Sidebar UI ---------- */}
      {!showFlutter && (
        <div className="w-[432px] border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden">
          <div className="pt-12 pb-0 px-6">
            <h2 className="w-[229px] text-[32px] font-bold text-gray-900 leading-normal">
              Quick approval Loan 2
            </h2>
          </div>

          <div className="bg-gray-50 rounded-[60px_16px_16px_16px] p-8 mt-8 flex flex-col gap-[124px]">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 px-3 py-[18px] border border-gray-300 rounded-lg bg-white">
                <div className="w-[30px] text-base font-normal text-gray-400">
                  +91
                </div>
                <div
                  className="w-px h-5"
                  style={{
                    backgroundImage:
                      "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-5.svg')",
                  }}
                ></div>
                <input
                  className="flex-1 border-none outline-none bg-transparent text-base font-normal text-gray-300 placeholder-gray-300"
                  type="tel"
                  placeholder="Enter mobile no."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="flex items-start gap-3 pr-6">
                <input
                  type="checkbox"
                  className="w-6 h-6 mt-0.5 cursor-pointer"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <div className="flex-1 text-sm font-normal leading-[18px]">
                  <span className="text-gray-300">
                    By creating an account you agree to our{" "}
                  </span>
                  <span className="text-yellow-400">Terms & Conditions</span>
                  <span className="text-gray-300"> and </span>
                  <span className="text-yellow-400">Privacy Policy</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2.5 py-2.5">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <div className="text-sm font-normal text-gray-400">
                  Finsbee keeps your data safe
                </div>
              </div>

              <button
                onClick={handleApplyClick}
                className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer hover:bg-yellow-500"
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- SHOW FLUTTER APP AFTER CLICK ---------- */}
      {showFlutter && <FlutterApp />}
    </div>
  );
}
