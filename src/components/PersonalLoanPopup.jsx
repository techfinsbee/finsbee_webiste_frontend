"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const BLOCKED_ROUTES = [
  "/apply-for-personal-loan-online",
  "/booking",
  "/webinar-form",
  "/Instant-form",
 
];

const POPUP_KEY = "site-wide-popup-shown";

export default function PersonalLoanPopup() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  /* 🔄 CLEAR FLAG ONLY ON REFRESH */
  useEffect(() => {
    const handleRefresh = () => {
      sessionStorage.removeItem(POPUP_KEY);
    };

    window.addEventListener("beforeunload", handleRefresh);
    return () => window.removeEventListener("beforeunload", handleRefresh);
  }, []);

  /* 🔔 SHOW POPUP ONCE PER REFRESH */
  useEffect(() => {
    // ❌ Block specific routes
    if (BLOCKED_ROUTES.includes(pathname)) return;

    // ❌ Already shown in this page load
    if (sessionStorage.getItem(POPUP_KEY)) return;

    // 🔒 Lock immediately
    sessionStorage.setItem(POPUP_KEY, "true");

    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  if (!open) return null;

  return (
    <div   onClick={() => setOpen(false)} className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center ">
      <div onClick={(e) => e.stopPropagation()}
      className="relative w-[90%] sm:w-[100%] xs:h-[46%] sm:h-[26.5rem] max-w-[420px] bg-[#591dcf] rounded-xl overflow-hidden p-5 ">

        
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-3 z-10 text-2xl  text-white"
        >
          ×
        </button>

        {/* 🖼️ Image */}
        <Image
          src="/landing_page/3-sec-pop-up.webp"
          alt="Personal Loan Offer"
          width={420}
          height={420}
          className="w-full h-auto"
          priority
        />

       
        <div className="flex items-center justify-center ">
          <button
            onClick={() => { setOpen(false); router.push("/apply-for-personal-loan-online")}}
            className="w-[50%] h-[46px]  bg-[#FFC73C] rounded-xl font-semibold text-lg"
        >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
    