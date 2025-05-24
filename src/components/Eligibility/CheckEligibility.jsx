import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

const CheckEligibility = () => {
  const dropdownData = [
    { title: "Loans", link: "loan-section-home" },
    { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];
  const [dob, setDob] = useState("");
  const [ageError, setAgeError] = useState("");
  const [obligError, setObligError] = useState("");
  const [loanAmount, setLoanAmount] = useState(200000);
  const [monthOblig, setMonthOblig] = useState(200000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(24);
  const [activeTab, setActiveTab] = useState("personal");
  const [age, setAge] = useState(null);
  const [isAgeEligible, setIsAgeEligible] = useState(true);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const validateEligibility = () => {
    // Age Check
    const age = calculateAge(dob);
    if (dob) {
      if (age < 21 || age > 65) {
        setAgeError("You are not eligible. Age must be between 21 and 65.");
      } else {
        setAgeError("");
      }
    }

    // Obligation Check (60% of monthly income)
    const maxObligation = loanAmount * 0.6;
    if (monthOblig > maxObligation) {
      setObligError(
        `Your obligations exceed 60% of your income. Max allowed: ₹${Math.round(
          maxObligation
        ).toLocaleString()}`
      );
    } else {
      setObligError("");
    }
  };
  useEffect(() => {
    validateEligibility();
  }, [dob, loanAmount, monthOblig]);

  useEffect(() => {
    const maxObligation = loanAmount * 0.6;
    if (monthOblig > maxObligation) {
      setMonthOblig(Math.floor(maxObligation));
    }
  }, [loanAmount]);

  // Calculate EMI
  const calculateEMI = (principal, rate, time) => {
    const r = rate / 12 / 100;
    const n = time;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI(loanAmount, interestRate, tenure);

  const handleInterestRateChange = (e) => {
    const value = Math.min(Math.max(parseFloat(e.target.value) || 9, 9), 24);
    setInterestRate(value);
  };

  const handleTenureChange = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 12, 12), 60);
    setTenure(value);
  };

  const calculateEligibleLoanAmount = (emiCapacity, rate, time) => {
    const r = rate / 12 / 100;
    const n = time;
    const numerator = emiCapacity * (Math.pow(1 + r, n) - 1);
    const denominator = r * Math.pow(1 + r, n);
    const principal = numerator / denominator;
    return (Math.round(principal) * 0.7);
  };

  const emiCapacity = isAgeEligible ? loanAmount - monthOblig : 0;
  const eligibleLoanAmount = calculateEligibleLoanAmount(
    emiCapacity,
    interestRate,
    tenure
  );
  return (
    <>
      <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />
      <div className="flex justify-center  w-full">
        <div className="w-[90vw] flex flex-col lg:flex-row lg:mt-10">
          <div className="w-[100%] lg:w-[70%] pl-0 lg:pl-4 ">
            <div className="bg-white  rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-fit ">
              <h3 className="text-lg sm:text-xl font-bold mb-3 ">
                Check Eligibility
              </h3>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age:
                </label>
                <input
                  type="date"
                  className="border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all p-1"
                  onChange={(e) => {
                    const birthDate = new Date(e.target.value);
                    const today = new Date();
                    const ageCalculated =
                      today.getFullYear() -
                      birthDate.getFullYear() -
                      (today <
                      new Date(
                        today.getFullYear(),
                        birthDate.getMonth(),
                        birthDate.getDate()
                      )
                        ? 1
                        : 0);
                    setAge(ageCalculated);
                    setIsAgeEligible(
                      ageCalculated >= 21 && ageCalculated <= 65
                    );
                  }}
                />
                {!isAgeEligible && (
                  <p className="text-red-500 text-sm mt-1">
                    You are not eligible. Age must be between 21 and 65.
                  </p>
                )}
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Net Monthly Income:
                </label>
                <input
                  type="number"
                  disabled={!isAgeEligible}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  onBlur={() => {
                    const min = 50000;
                    const max = activeTab === "personal" ? 5000000 : 1000000;
                    const parsed = parseInt(loanAmount) || min;
                    setLoanAmount(Math.min(Math.max(parsed, min), max));
                  }}
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Min ₹ 50,000</span>
                  <span>
                    {activeTab == "personal"
                      ? "Max ₹ 5,000,000"
                      : "Max ₹ 1,000,000"}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  disabled={!isAgeEligible}
                  max={activeTab === "personal" ? "5000000" : "1000000"}
                  step="10000"
                  value={Math.min(
                    Math.max(parseInt(loanAmount) || 50000, 50000),
                    activeTab === "personal" ? 5000000 : 1000000
                  )}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Net Monthly Obligations:
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                  value={monthOblig}
                  onChange={(e) => setMonthOblig(e.target.value)} // allow raw input
                  onBlur={() => {
                    const min = 50000;
                    const max = 1000000;
                    const parsed = parseInt(monthOblig) || min;
                    setMonthOblig(Math.min(Math.max(parsed, min), max));
                  }}
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Min ₹ 0</span>
                  <span>
                    {activeTab == "personal"
                      ? `Max ₹ ${loanAmount * 0.6}`
                      : "Max ₹ 1,000,000"}
                  </span>
                </div>
                <input
                  type="range"
                  disabled={!isAgeEligible}
                  min="50000"
                  max="1000000"
                  step="10000"
                  value={Math.min(
                    Math.max(parseInt(monthOblig) || 50000, 50000),
                    1000000
                  )}
                  onChange={(e) => setMonthOblig(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
                />
                {monthOblig > loanAmount * 0.6 && (
                  <p className="text-red-500 text-sm mt-1">
                    Obligations cannot exceed 60% of income (₹
                    {(loanAmount * 0.6).toLocaleString()})
                  </p>
                )}
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interest Rate
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Min 9 %</span>
                  <span>Max 40 %</span>
                </div>
                <input
                  type="range"
                  disabled={!isAgeEligible}
                  min="9"
                  max="40"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
                />
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tenure (Months)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                  value={tenure}
                  onChange={handleTenureChange}
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Min 12 Months</span>
                  <span>Max 60 Months</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="60"
                  disabled={!isAgeEligible}
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
                />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br w-[100%] lg:w-[30%] from-[#f8fcfc] to-[#eef8f8] items-center flex flex-col justify-center rounded-lg p-4 flex mb-4 shadow-sm">
            <div
              className="flex flex-col justify-center w-[90%]"
              style={{ alignItems: "center" }}
            >
              <p className="text-xl lg:text-3xl text-gray-600 mb-1 text-center">
                You are Eligible for an Amount of
              </p>
              <p className="text-xl font-bold text-[#18ADA5]">
                ₹{" "}
                {isNaN(eligibleLoanAmount)
                  ? "0"
                  : eligibleLoanAmount.toLocaleString()}
              </p>
            </div>
            <button className="w-[60%] mt-9 bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckEligibility;
