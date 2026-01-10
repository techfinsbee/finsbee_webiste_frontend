"use client";

import { useState, useCallback } from "react";

const initialForm = { name: "", phone: "", email: "" };

export default function Webinar() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ---------- VALIDATION ---------- */
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
         
      const res = await fetch("/api/flutterapi/crm/webinar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

      if (!res.ok) throw new Error("API failed");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    
    <div className="min-h-screen relative bg-[#FAFAFA] flex flex-col items-center pt-12">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/booking/planbg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="w-full flex justify-start">
        <div
          className="flex flex-col w-[130px] sm:w-[140px] md:w-[171.83px] cursor-pointer items-start gap-2 ml-4 sm:ml-8 md:ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0 bg-[#592eef] rounded-xl p-2"
          onClick={() => (window.location.href = "/")}
        >
          <img
            className="relative w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
            alt="Finsbee transparent"
            src="/FinsbeeLogo.svg"
            width={155.83}
            height={55.38}
          />
        </div>
      </div>
      {/* FORM CARD */}
      <div className="z-10 w-full flex justify-center items-center mt-10">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 border border-yellow-100 relative">
            <div className="mb-6 text-2xl font-bold text-[#183153]">
              Enter Your Details
            </div>
         <div
            className={`w-full  border-[3px] rounded-[28px] p-3 md:p-8 transition-colors duration-300
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
