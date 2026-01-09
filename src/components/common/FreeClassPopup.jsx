

"use client";

import { useState, useCallback } from "react";

const initialForm = { name: "", phone: "", email: "" };

export default function FreeClassPopup({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter valid email address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }, []);



  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  try {
    setSubmitting(true);

    const res = await fetch("/api/flutterapi/api/crm/webinar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", 
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "call",
        params: {
          name: form.name,
          phone: form.phone,
          email: form.email,
        },
      }),
    });

    if (!res.ok) {
      throw new Error("API request failed");
    }

    const data = await res.json();
    console.log("Webinar API success:", data);

    setSubmitted(true); // ✅ switch UI only on success
  } catch (err) {
    console.error("Submission error:", err);
    alert("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
};


  const handleClose = () => {
    if (submitting) return;
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex lg:items-center justify-center overflow-y-auto">
      <div className="relative w-full max-w-6xl mx-4 my-6 bg-white rounded-3xl p-6 md:p-10 max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <div className="sticky top-0 z-50 h-0">
          <button
            onClick={handleClose}
            className="absolute sm:-top-5 sm:-right-6 -top-2 -right-5 text-3xl text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 sm:gap-10">
          {/* ================= LEFT (UNCHANGED) ================= */}
          <div className="flex-1">
            <p className="text-sm sm:text-lg font-semibold mb-2">Free Online</p>

            <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-4">
              <span className="bg-[#FFC73C] px-2 py-1 ">Finance Classes</span>
            </h1>

            <p className="text-gray-600 mb-3 sm:mb-6 max-w-xl text-xs sm:text-[16px]">
              Unlock financial clarity with Finsbee&apos;s FREE online finance
              classes—perfect for students, professionals, and business owners.
              Gain essential skills in money management, budgeting, loans &
              credit scores, investing basics, and avoiding common mistakes.
            </p>

            <div className="flex gap-2 mb-4 sm:gap-4 sm:mb-8">
              <div className="w-2 bg-[#F8CE63]" />

              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-[16px] font-bold">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Money management and budgeting essentials</span>
                </li>

                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Loans, credit scores, and investing fundamentals</span>
                </li>

                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Common pitfalls to dodge for smarter decisions</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <div className="border border-[#F8CE63] bg-[#FFF9EC] rounded-xl sm:px-6 sm:py-4 w-30 sm:w-40 text-center">
                <p className="text-sm text-gray-600">Tuesday</p>
                <p className="font-bold text-sm sm:text-[20px]">In English</p>
              </div>

              <div className="border border-[#C7B8FF] bg-[#F7F5FF] rounded-xl sm:px-6 sm:py-4 w-30 sm:w-40  text-center">
                <p className="text-sm text-gray-600">Saturday</p>
                <p className="font-bold text-sm sm:text-[20px]">In Hindi</p>
              </div>
            </div>
            <div className="pt-2 text-xs sm:text-[16px]">
              *Classes will be conducted online on Zoom
            </div>
          </div>
          {/* ================= RIGHT FORM / SUCCESS ================= */}
          <div
            className={`w-full lg:w-[420px] border-[3px] rounded-[28px] p-3 md:p-8 transition-colors duration-300
              ${submitted ? "border-[#5BCB6F]" : "border-[#F8CE63]"}`}
          >
            {!submitted ? (
              /* -------- FORM (UNCHANGED) -------- */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                {/* Name */}
                <div className="relative">
                  <input
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter full name (as per aadhar)"
                    className={`w-full h-[46px] md:h-[64px] rounded-xl border pl-12 pr-4
                      focus:outline-none focus:ring-0 focus:border-[#F8CE63] focus:bg-[#FFF9EC]

      ${errors.name ? "border-red-400" : "border-gray-300"}`}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <img
                    src="/form_page/user-square.svg"
                    alt="Name Icon"
                    className="w-5 h-5"
                  />
                </span>
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Enter mobile no."
                    className={`w-full h-[46px] md:h-[64px] rounded-xl border pl-12 pr-4
                       focus:outline-none focus:ring-0 focus:border-[#F8CE63] focus:bg-[#FFF9EC]

      ${errors.phone ? "border-red-400" : "border-gray-300"}`}
                  />
                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <img
                      src="/form_page/call.svg"
                      alt="Phone Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

              
                {/* Email */}
                <div className="relative">
                  <input
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="xxxxxxx@xxx.xxx"
                    className={`w-full h-[46px] md:h-[64px] rounded-xl border pl-12 pr-4
                       focus:outline-none focus:ring-0 focus:border-[#F8CE63] focus:bg-[#FFF9EC]

      ${errors.email ? "border-red-400" : "border-gray-300"}`}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <img
                      src="/form_page/email.png"
                      alt="Email Icon"
                      className="w-5 h-5"
                    />
                  </span>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-[46px] bg-[#FFC73C] rounded-xl font-semibold text-lg"
                >
                  {submitting ? "Submitting..." : "Join Now"}
                </button>
              </form>
            ) : (
              /* -------- SUCCESS UI -------- */
              <div className="flex flex-col items-center justify-center text-center gap-4 ">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 50%, rgba(0, 200, 81, 0.7) 0%, #00C851 100%)",
                    boxShadow: "0px 0px 30px 8px #00C85133",
                  }}
                >
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <p className="text-gray-600 ">
                  Application submitted successfully.
                </p>
                <span>
                  <p className="text-sm  font-semibold">Scan to join</p>

                  <img
                    src="/landing_page/qr.png"
                    alt="QR"
                    className="w-44 h-44"
                  />
                </span>

                <a
                  href="https://chat.whatsapp.com/JlWVMfZCz1eCKVr8QU20PC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md underline font-medium cursor-pointer"
                >
                  Join our whatsapp community directly
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
