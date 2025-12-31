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

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit mobile number";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter valid email address";
    }

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

      // 🔹 Optional: API call here
      // await submitForm(form);

      // ✅ Open WhatsApp group directly
      window.open("https://chat.whatsapp.com/JlWVMfZCz1eCKVr8QU20PC", "_blank");

      // Optional: close popup after redirect
      handleClose();
    } catch (error) {
      console.error("Submission error:", error);
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
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    //   <div className="relative w-full max-w-6xl mx-4 bg-white rounded-3xl p-6 md:p-10">
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto flex lg:items-center justify-center">
      <div
        className="
      relative
      w-full
      max-w-6xl
      mx-4
      my-6
      bg-white
      rounded-3xl
      p-6
      md:p-10
      max-h-[90vh]
      overflow-y-auto
    "
      >
        {/* Close Button */}

        <div className="sticky top-0 z-50 h-0">
          <button
            onClick={handleClose}
            className="
      absolute
      sm:-top-5
      sm:-right-6
      -top-2 -right-5
      text-3xl
      text-gray-500
      hover:text-gray-700
      
      rounded-full
      leading-none
    "
            aria-label="Close popup"
          >
            ×
          </button>
        </div>

        {/* {!submitted ? ( */}
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-10">
          {/* LEFT UI (UNCHANGED) */}
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

          {/* RIGHT FORM */}
          <div className="w-full lg:w-[420px] border-[3px] border-[#F8CE63] rounded-[28px] p-3 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      src="/form_page/user-square.svg"
                      alt=""
                      className="w-5 h-5 opacity-60"
                    />
                  </span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="full name (as per aadhar)"
                    className={`w-full h-[46px] md:h-[64px] rounded-xl border px-12 text-sm outline-none
            ${errors.name ? "border-red-400" : "border-[#F8CE63] bg-[#FFF9EC]"}
            focus:ring-2 focus:ring-[#F8CE63]/40`}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      src="/form_page/call.svg"
                      alt=""
                      className="w-5 h-5 opacity-60"
                    />
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 | Enter mobile no."
                    className={`w-full h-[46px] md:h-[64px] rounded-xl border px-12 text-sm outline-none
                   ${errors.phone ? "border-red-400" : "border-gray-300 bg-white"}
                     focus:ring-2 focus:ring-[#F8CE63]/40`}
                   />
                  </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      src="/form_page/email.png"
                      alt=""
                      className="w-5 h-5 opacity-60"
                    />
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="xxxxxxx@xxx.xxx"
                    className={`w-full h-[46px] md:h-[64px] rounded-xl border px-12 text-sm outline-none
            ${errors.email ? "border-red-400" : "border-gray-300 bg-white"}
            focus:ring-2 focus:ring-[#F8CE63]/40`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col items-center gap-2 mb-3 text-center">
                <div className="flex items-center gap-2 justify-center">
                  <img
                    src="/form_page/security.svg"
                    alt=""
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-500">
                    Finsbee keeps your data safe
                  </span>
                </div>
              </div>
              {/* Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full ms:h-[56px] h-[46px]  bg-[#FFC73C] rounded-xl font-semibold text-lg
        hover:brightness-105 transition
        disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Join Now"}
              </button>
            </form>
          </div>
        </div>
        {/* ) : ( */}

        {/* <div className="text-center space-y-6 py-10">
            <h2 className="text-2xl font-bold">You are almost in!</h2>

            <p className="text-gray-600">
              Thanks, <b>{form.name}</b>. Join our WhatsApp group below.
            </p>

            <a
              href="https://chat.whatsapp.com/JlWVMfZCz1eCKVr8QU20PC"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold"
            >
              Join WhatsApp Group
            </a>

            <button
              onClick={handleClose}
              className="block w-full border rounded-full py-2 text-gray-700"
            >
              Close
            </button>
          </div> */}
        {/* )} */}
      </div>
    </div>
  );
}

/* ---------------- INPUT (UI SAME) ---------------- */
function Input({ value, onChange, placeholder, error, highlight }) {
  return (
    <div>
      <div
        className={`px-4 py-4 rounded-xl border ${
          highlight ? "border-[#F8CE63] bg-[#fffaf0]" : "border-gray-300"
        }`}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent"
        />
      </div>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
