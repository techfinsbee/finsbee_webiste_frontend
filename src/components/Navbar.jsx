// "use client";

// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import MegaMenu from "./Navbar_Component/Nav";
// import Image from "next/image";

// export const Navbar = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeMegaKey, setActiveMegaKey] = useState(null);

//   const navigationItems = [
//     { label: "Instant Loan", key: "instant", isMegaMenu: true },
//     { label: "Loans", key: "loans", isMegaMenu: true },

//     { label: "Auto Loan", key: "auto", isMegaMenu: true },
//     { label: "Investment", path: "/investment", isMegaMenu: false },
//     { label: "EMI Calculator", key: "emi", isMegaMenu: true },

//     { label: "Contact us", scrollTo: "contact-us", isMegaMenu: false },
//   ];

//   const handleNavigation = (path, external, scrollTo) => {
//     if (scrollTo) {
//       const el = document.getElementById(scrollTo);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth" });
//       }
//     } else if (external) {
//       window.open(path, "_blank");
//     } else if (path) {
//       router.push(path);
//     }

//     setIsMegaMenuOpen(false);
//     setIsSidebarOpen(false);
//     setActiveMegaKey(null);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     setIsMegaMenuOpen(false);
//     setActiveMegaKey(null);
//   };

//   const SidebarButton = ({ item }) => (
//     <button
//       className={`w-full text-left px-4 py-3 text-base sm:text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-sm hover:shadow-md border-2 border-transparent hover:border-[#ffd263] hover:bg-[#fff9ec]/50 ${
//         pathname === item.path && !item.isMegaMenu ? "bg-[#ffd263]/30" : ""
//       } ${
//         item.isMegaMenu && activeMegaKey === item.key ? "bg-[#ffd263]/30" : ""
//       }`}
//       onClick={() =>
//         item.isMegaMenu
//           ? setActiveMegaKey(activeMegaKey === item.key ? null : item.key)
//           : handleNavigation(item.path, item.external, item.scrollTo)
//       }
//     >
//       <span className="flex items-center justify-between">
//         {item.label}
//         {item.isMegaMenu && (
//           <svg
//             className={`ml-2 w-4 h-4 ${
//               activeMegaKey === item.key ? "rotate-180" : ""
//             }`}
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         )}
//       </span>
//     </button>
//   );

//   return (
//     <nav className="absolute top-0 w-full z-50 bg-transparent">
//       <div className="flex items-center justify-between mx-auto pt-6 sm:pt-7 md:pt-8 pb-2.5 relative">
//         {/* Logo */}
//         <div
//           className="flex flex-col w-[120px] sm:w-[140px] md:w-[155.83px] cursor-pointer items-start gap-2 ml-4 sm:ml-8 md:ml-11 mt-2 -translate-y-4 animate-fade-in opacity-0"
//           onClick={() => handleNavigation("/")}
//         >
//           <Image
//             src="/FinsbeeLogo.svg"
//             alt="Finsbee transparent"
//             width={155.83}
//             height={55.38}
//             className="w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
//           />
//         </div>

//         {/* Hamburger */}
//         <div className="lg:hidden flex items-center mr-7 sm:mr-9 md:mr-15">
//           <button
//             onClick={toggleSidebar}
//             className="focus:outline-none p-2 rounded-full hover:bg-white/10"
//           >
//             <svg
//               className="w-6 h-6 sm:w-8 sm:h-8 text-gray-200"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={
//                   isSidebarOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Navigation */}
//         <div
//           className="hidden lg:flex items-center justify-center gap-4 lg:gap-6 p-2 lg:p-3 rounded-2xl -translate-y-4 animate-fade-in opacity-0 absolute left-1/2 -translate-x-1/2"
//           style={{ animationDelay: "200ms" }}
//         >
//           {navigationItems.map((item) => (
//             <div
//               key={item.label}
//               className="relative"
//               onMouseEnter={() => {
//                 if (item.isMegaMenu) {
//                   setActiveMegaKey(item.key);
//                   setIsMegaMenuOpen(true);
//                 }
//               }}
//               onMouseLeave={() => {
//                 if (item.isMegaMenu) {
//                   setIsMegaMenuOpen(false);
//                   setActiveMegaKey(null);
//                 }
//               }}
//             >
//               <button
//                 className={`relative px-3 py-2 rounded-lg cursor-pointer text-gray-200 hover:bg-white/10 ${
//                   pathname === item.path
//                     ? "p-4 bg-white/30 border border-white/30 text-white"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   !item.isMegaMenu &&
//                   handleNavigation(item.path, item.external, item.scrollTo)
//                 }
//               >
//                 <span className="relative font-normal text-sm md:text-base tracking-wide leading-normal whitespace-nowrap">
//                   {item.label}
//                 </span>
//               </button>

//               {item.isMegaMenu &&
//                 isMegaMenuOpen &&
//                 activeMegaKey === item.key && (
//                   <div className="absolute top-full left-0 pt-2 z-50">
//                     <MegaMenu
//                       sectionKey={activeMegaKey}
//                       isSidebar={false}
//                       onClose={() => {
//                         setIsMegaMenuOpen(false);
//                         setActiveMegaKey(null);
//                       }}
//                     />
//                   </div>
//                 )}
//             </div>
//           ))}
//         </div>

//         {/* Sidebar */}
//         {isSidebarOpen && (
//           <div className="lg:hidden fixed top-0 right-0 w-4/5 sm:w-3/5 max-w-[400px] h-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl z-50 overflow-y-auto rounded-l-2xl">
//             <div className="flex flex-col p-4 sm:p-6">
//               <button
//                 onClick={toggleSidebar}
//                 className="self-end mb-6 p-2  rounded-full bg-gray-200 hover:bg-gray-300"
//               >
//                 <svg
//                   className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>

//               <div className="space-y-3 sm:space-y-4">
//                 {navigationItems.map((item) => (
//                   <div key={item.label}>
//                     <SidebarButton item={item} />
//                     {item.isMegaMenu && activeMegaKey === item.key && (
//                       <div className="mt-3">
//                         <MegaMenu
//                           sectionKey={item.key}
//                           isSidebar={true}
//                           onClose={() => setIsSidebarOpen(false)}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import MegaMenu from "./Navbar_Component/Nav";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios"; // ← FIXED: added this import
import { setAuth } from "@/lib/authStorage";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMegaKey, setActiveMegaKey] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const customerId = localStorage.getItem("originalCustomerId");
      setIsLoggedIn(!!customerId);
    }
  }, []);

  // Login dropdown states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("mobile"); // "mobile" or "otp"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestId, setRequestId] = useState("");

  const loginRef = useRef(null);

  const API_KEY = "ab163828-7d8d-11f0-a562-0200cd936042";

  const navigationItems = [
    { label: "Instant Loan", key: "instant", isMegaMenu: true },
    { label: "Loans", key: "loans", isMegaMenu: true },
    { label: "Auto Loan", key: "auto", isMegaMenu: true },
    { label: "Investment", path: "/investment", isMegaMenu: false },
    { label: "EMI Calculator", key: "emi", isMegaMenu: true },
    { label: "Contact us", scrollTo: "contact-us", isMegaMenu: false },
    { label: "Blogs", path: "/blog", isMegaMenu: false },
  ];

  const handleNavigation = (path, external, scrollTo) => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (external) {
      window.open(path, "_blank");
    } else if (path) {
      router.push(path);
    }

    setIsMegaMenuOpen(false);
    setIsSidebarOpen(false);
    setActiveMegaKey(null);
    setIsLoginOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMegaMenuOpen(false);
    setActiveMegaKey(null);
    setIsLoginOpen(false);
  };

  // Close login dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setIsLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Validate mobile number
  const validateMobile = (num) => /^[6-9]\d{9}$/.test(num.trim());

  const sendOtp = async () => {
    const trimmed = mobile.trim();
    if (!validateMobile(trimmed)) {
      setError("Enter valid 10-digit mobile number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const trimmed = mobile.trim();
      const url = `/twofactor/API/V1/${API_KEY}/SMS/+91${trimmed}/AUTOGEN/OTP%20Verify?var1=${trimmed}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      if (data?.Status !== "Success" || !data?.Details) {
        throw new Error(data?.Details || "Failed to send OTP");
      }

      setRequestId(data.Details);
      setStep("otp");
      // toast.success("OTP sent!");
    } catch (err) {
      toast.error(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter 6-digit OTP");
      return;
    }

    if (loading) return;

    setError("");
    setLoading(true);

    try {
      // 1️⃣ VERIFY OTP
      const verifyUrl = `/twofactor/API/V1/${API_KEY}/SMS/VERIFY/${requestId}/${otp}`;
      const verifyRes = await fetch(verifyUrl);

      if (!verifyRes.ok) throw new Error(`HTTP ${verifyRes.status}`);

      const verifyData = await verifyRes.json();
      if (verifyData.Status !== "Success") {
        throw new Error(verifyData.Details || "Invalid OTP");
      }

      // toast.success("OTP Verified!");

      const phone = mobile.trim();

      // 2️⃣ AUTHENTICATE ODOO (IMPORTANT)
      const authRes = await fetch("/api/web/session/authenticate", {
        method: "POST",
        credentials: "include",
      });

      const authData = await authRes.json();

      if (!authData?.success) {
        throw new Error("Odoo authentication failed");
      }

      // 3️⃣ CREATE / CHECK CUSTOMER
      const customerRes = await fetch("/api/create/customer", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            name: `User ${phone}`,
            phone: phone,
            source_id: "finsbee-website",
          },
        }),
      });

      const customerData = await customerRes.json();
      const result = customerData?.result?.[0];

      if (!result?.CustomerId) {
        throw new Error("Failed to get CustomerId");
      }

      // 4️⃣ STORE AUTH
      const auth = {
        sessionId: authData.session_id,
        customerId: result.CustomerId,
        phone,
        expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000,
      };

      setAuth(auth);
      localStorage.setItem("originalCustomerId", String(result.CustomerId));
      localStorage.setItem("verifiedPhone", phone);

      setIsLoggedIn(true);
      setIsLoginOpen(false);

      toast.success("Login successful!");

      router.push("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const SidebarButton = ({ item }) => (
    <button
      className={`w-full text-left px-4 py-3 text-base sm:text-lg font-semibold text-gray-800 bg-white rounded-lg shadow-sm hover:shadow-md border-2 border-transparent hover:border-[#ffd263] hover:bg-[#fff9ec]/50 ${
        pathname === item.path && !item.isMegaMenu ? "bg-[#ffd263]/30" : ""
      } ${
        item.isMegaMenu && activeMegaKey === item.key ? "bg-[#ffd263]/30" : ""
      }`}
      onClick={() =>
        item.isMegaMenu
          ? setActiveMegaKey(activeMegaKey === item.key ? null : item.key)
          : handleNavigation(item.path, item.external, item.scrollTo)
      }
    >
      <span className="flex items-center justify-between">
        {item.label}
        {item.isMegaMenu && (
          <svg
            className={`ml-2 w-4 h-4 ${
              activeMegaKey === item.key ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </button>
  );

  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between pt-6 sm:pt-7 md:pt-8 pb-2.5">
        {/* Logo */}
        <div
          className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[155px] cursor-pointer -translate-y-4 animate-fade-in opacity-0"
          onClick={() => handleNavigation("/")}
        >
          <Image
            src="/FinsbeeLogo.svg"
            alt="Finsbee transparent"
            width={155.83}
            height={55.38}
            className="w-full h-[40px] sm:h-[50px] md:h-[55.38px] object-cover"
          />
        </div>

        {/* Hamburger */}
        <div className="lg:hidden flex items-center mr-7 sm:mr-9 md:mr-15  -translate-y-4">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none p-2 rounded-full hover:bg-white/10"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isSidebarOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 -translate-y-4 animate-fade-in opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          {navigationItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.isMegaMenu) {
                  setActiveMegaKey(item.key);
                  setIsMegaMenuOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (item.isMegaMenu) {
                  setIsMegaMenuOpen(false);
                  setActiveMegaKey(null);
                }
              }}
            >
              <button
                className={`relative px-3 py-2 rounded-lg cursor-pointer text-gray-200 hover:bg-white/10 ${
                  pathname === item.path
                    ? "p-4 bg-white/30 border border-white/30 text-white"
                    : ""
                }`}
                onClick={() =>
                  !item.isMegaMenu &&
                  handleNavigation(item.path, item.external, item.scrollTo)
                }
              >
                <span className="relative font-normal text-sm md:text-base tracking-wide leading-normal whitespace-nowrap">
                  {item.label}
                </span>
              </button>

              {item.isMegaMenu &&
                isMegaMenuOpen &&
                activeMegaKey === item.key && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <MegaMenu
                      sectionKey={activeMegaKey}
                      isSidebar={false}
                      onClose={() => {
                        setIsMegaMenuOpen(false);
                        setActiveMegaKey(null);
                      }}
                    />
                  </div>
                )}
            </div>
          ))}
          {/* Login Button (Desktop) */}
          <button
            onClick={() => {
              if (isLoggedIn) {
                router.push("/dashboard");
              } else {
                setIsLoginOpen(!isLoginOpen);
              }
            }}
            className="ml-4 px-6 py-2 rounded-2xl font-semibold text-white 
             bg-gradient-to-r from-[#592eff] to-[#7c45ff] 
             hover:brightness-110 transition-all shadow-lg"
          >
            {/* {localStorage.getItem("originalCustomerId") ? "Dashboard" : "Login"} */}
            {isLoggedIn ? "Dashboard" : "Login"}

          </button>
        </div>

       

        {/* Login Dropdown Card */}
        {isLoginOpen && (
          <div
            ref={loginRef}
            className="
      absolute lg:absolute
      top-full
      right-4 lg:right-10
      mt-4
      z-50
      w-[92%] sm:w-[400px] lg:w-96
      left-1/2 lg:left-auto
      -translate-x-1/2 lg:translate-x-0
    "
          >
            <div
              className="p-8 rounded-3xl shadow-2xl backdrop-blur-lg relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,255,0.95) 100%)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              {/* Ornaments */}
              <div
                className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg, #592eff 0%, #7c45ff 100%)",
                }}
              ></div>
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-15"
                style={{
                  background:
                    "linear-gradient(135deg, #ffc73c 0%, #ffd564 100%)",
                }}
              ></div>

              {/* Close button */}
              <button
                onClick={() => setIsLoginOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
              >
                ✕
              </button>

              {step === "mobile" ? (
                <>
                  <h3 className="text-2xl font-bold text-center mb-2 text-[#592eff]">
                    Login / Sign Up
                  </h3>
                  <p className="text-center text-gray-600 mb-8">
                    Enter your mobile number to continue
                  </p>

                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    // onChange={(e) => 
                    //   setMobile(e.target.value);
                    //   setError("");
                    // }}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // remove non-numeric
                      setMobile(value);
                    }}
                    className="w-full p-4 rounded-2xl bg-white/80 border border-gray-300 focus:border-[#592eff] outline-none text-gray-700 mb-4 backdrop-blur-sm"
                    style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.05)" }}
                  />

                  {error && (
                    <p className="text-red-600 text-sm text-center mb-4">
                      {error}
                    </p>
                  )}

                  <button
                    onClick={sendOtp}
                    disabled={loading}
                    className="w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#592eff] to-[#7c45ff] hover:brightness-110 transition disabled:opacity-60 shadow-md"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-center mb-2 text-[#592eff]">
                    Verify OTP
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Sent to +91 {mobile}
                  </p>

                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => {
                      setOtp(e.target.value);
                      setError("");
                    }}
                    className="w-full p-4 text-center text-2xl tracking-[10px] rounded-2xl bg-white/80 border border-gray-300 focus:border-[#592eff] outline-none mb-4 backdrop-blur-sm"
                    style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.05)" }}
                  />

                  {error && (
                    <p className="text-red-600 text-sm text-center mb-4">
                      {error}
                    </p>
                  )}

                  <button
                    onClick={verifyOtp}
                    disabled={loading}
                    className="w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#592eff] to-[#7c45ff] hover:brightness-110 transition disabled:opacity-60 shadow-md"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                        </svg>
                        Verifying...
                      </span>
                    ) : (
                      "Verify & Continue"
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setStep("mobile");
                      setOtp("");
                    }}
                    className="text-[#592eff] text-sm mt-4 block mx-auto hover:underline"
                  >
                    Change Number
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed top-0 right-0 w-4/5 sm:w-3/5 max-w-[400px] h-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-xl z-50 overflow-y-auto rounded-l-2xl">
            <div className="flex flex-col p-4 sm:p-6">
              <button
                onClick={toggleSidebar}
                className="self-end mb-6 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="space-y-3 sm:space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <SidebarButton item={item} />
                    {item.isMegaMenu && activeMegaKey === item.key && (
                      <div className="mt-3">
                        <MegaMenu
                          sectionKey={item.key}
                          isSidebar={true}
                          onClose={() => setIsSidebarOpen(false)}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Mobile Login Button */}
              <div className="pt-4 border-t border-gray-300 mt-4">
                <button
                  onClick={() => {
                    setIsSidebarOpen(false);
                    if (isLoggedIn) {
                      router.push("/dashboard");
                    } else {
                      setIsLoginOpen(true);
                    }
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-white
               bg-gradient-to-r from-[#592eff] to-[#7c45ff]
               hover:brightness-110 transition"
                >
                  {/* {localStorage.getItem("originalCustomerId")
                    ? "Dashboard"
                    : "Login"} */}
                    {isLoggedIn ? "Dashboard" : "Login"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
