"use client";

import { useEffect, useState } from "react";
import CookiePolicyModal from "./CookiePolicyModal";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);

    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* BANNER */}
      <div className="fixed bottom-6 left-0 right-0 z-[9999] px-6">
        <div className="mx-auto max-w-[1400px] bg-white/95 backdrop-blur-xl rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-200 px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-8">

          <p className="text-gray-700 text-[15px] leading-relaxed max-w-[900px]">
            We use cookies to improve your experience, personalize content, and
            analyze traffic. You can accept{" "}
            <span
              onClick={() => setOpenPolicy(true)}
              className="underline font-medium text-gray-900 cursor-pointer"
            >
              all cookies
            </span>{" "}
            or manage your preferences.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={handleDecline}
              className="px-8 py-3 rounded-[14px] border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-all"
            >
              Decline
            </button>

            <button
              onClick={handleAccept}
              className="px-8 py-3 rounded-[14px] bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* POLICY MODAL */}
      {openPolicy && (
        <CookiePolicyModal onClose={() => setOpenPolicy(false)} />
      )}
    </>
  );
}