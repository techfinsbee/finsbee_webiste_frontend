import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  CheckCircle,
  Calculator,
  Clock,
  Award,
  CreditCard,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
const CheckEligibility = () => {
  const dropdownData = [
    { title: "Loans", link: "loan-section-home" },
    { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];

  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(24);
  const [activeTab, setActiveTab] = useState("personal");
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Calculate EMI
  const calculateEMI = (principal, rate, time) => {
    const r = rate / 12 / 100;
    const n = time;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI(loanAmount, interestRate, tenure);
  const totalInterest = monthlyEMI * tenure - loanAmount;

  const handleLoanAmountChange = (e) => {
    const value = Math.min(
      Math.max(parseInt(e.target.value) || 50000, 50000),
      500000
    );
    setLoanAmount(value);
  };

  const handleInterestRateChange = (e) => {
    const value = Math.min(Math.max(parseFloat(e.target.value) || 9, 9), 24);
    setInterestRate(value);
  };

  const handleTenureChange = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 12, 12), 60);
    setTenure(value);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
            <div className="bg-white  rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[580px] ">
              <h3 className="text-lg sm:text-xl font-bold mb-3 ">
                Check Eligibility
              </h3>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Age:</label> 
                <input type="date" className="border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all p-1"/>
              </div>

              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Net Monthly Income:
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
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
                  max={activeTab == "personal" ? "5000000" : "1000000"}
                  step="10000"
                  value={loanAmount}
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
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
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
                  max={activeTab == "personal" ? "5000000" : "1000000"}
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
                />
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
                ₹ {isNaN(monthlyEMI) ? "0" : monthlyEMI.toLocaleString()}
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
