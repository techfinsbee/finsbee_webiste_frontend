import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import {
  CheckCircle,
  Calculator,
  Clock,
  Award,
  CreditCard,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const PersonalLoan = () => {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(24);
  const [activeTab, setActiveTab] = useState("personal");
  const [expandedFaq, setExpandedFaq] = useState(null);

  

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.scrollTo) {
      
      const tabToActivate = location.state.scrollTo;
      // Set the tab
      setActiveTab(tabToActivate);

      // Wait for the tab content to render, then scroll
      const timer = setTimeout(() => {
        const section = document.getElementById(tabToActivate);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Section with ID '${tabToActivate}' not found`);
        }

        // Clear the state to avoid repeated scrolling
        navigate(location.pathname, { replace: true, state: {} });
      }, 200); // Slight delay to ensure DOM is updated

      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  const dropdownData = [
    { title: "Loans", link: "loan-section-home" },
    { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];

  // Calculate EMI
  const calculateEMI = (principal, rate, time) => {
    const r = rate / 12 / 100;
    const n = time;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const monthlyEMI = calculateEMI(loanAmount, interestRate, tenure);
  const totalInterest = monthlyEMI * tenure - loanAmount;

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const personalFaqs = [
    {
      question: "What is the maximum loan amount I can get?",
      answer:
        "FundsMama offers personal loans up to Rs. 50 lakhs, depending on your income, credit score, and other eligibility factors.",
    },
    {
      question: "How long does it take to get the loan amount disbursed?",
      answer:
        "Once your application is approved, the loan amount is typically disbursed within 24-48 hours directly to your bank account.",
    },
    {
      question: "Are there any prepayment charges?",
      answer:
        "There are no prepayment charges if you prepay your loan after completing 6 EMI payments. For prepayments before 6 months, a nominal charge of 2-3% on the outstanding principal may apply.",
    },
    {
      question: "Can I apply for a personal loan with a low credit score?",
      answer:
        "While we generally recommend a credit score of 650 or above, each application is evaluated individually. Factors like income stability and existing liabilities are also considered.",
    },
    {
      question: "For what purposes can I use a personal loan?",
      answer:
        "Personal loans are multipurpose loans that can be used for medical emergencies, education, home renovation, wedding expenses, travel, or any other personal need without requiring you to specify the reason.",
    },
  ];

  const instantFaqs = [
    {
      question: "How quick is the instant loan approval?",
      answer:
        "Our instant loans typically get approved within 30 minutes, provided all documentation is in order.",
    },
    {
      question: "What is the minimum amount I can borrow?",
      answer: "You can borrow as low as ₹10,000 with our instant loan product.",
    },
    {
      question: "Do I need a high credit score for instant loans?",
      answer:
        "While a good credit score helps, we consider various other factors for instant loans. Even those with moderate scores may qualify.",
    },
    {
      question: "Can I get an instant loan without any income proof?",
      answer:
        "No, you'll need to provide at least basic income proof such as bank statements or salary slips for the last 3 months.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden">
      <Navbar dropdownData={dropdownData} COLOR="#fff" TXTCOLOR="#" />

      {/* Hero Section with Tabs */}
      <section className="pt-5 pb-5 bg-gradient-to-br from-[#f0f9f9] to-[#ffffff]" >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Loan Type Tabs */}
          <div className="flex border-b border-gray-200 mb-3 overflow-x-auto no-scrollbar">
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "personal"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Loan
            </button>
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "instant"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("instant")}
            >
              Instant Loan
            </button>
          </div>

          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-6">
              <h1 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#163312]">
                {activeTab === "personal" ? "Personal Loan" : "Instant Loan"}
              </h1>
              <p className="sm:mt-1 md:mt-5 lg:mt-6 text-base sm:text-lg mb-4 text-gray-700">
                {activeTab === "personal"
                  ? "Get a Personal Loan of up to Rs. 50 Lakhs to pursue your dreams. Quick approval, minimal documentation, and competitive interest rates."
                  : "Need funds urgently? Our Instant Loan offering provides quick access to funds with minimal documentation and same-day disbursals."}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-5 w-5" />
                  <span className="text-base font-medium">
                    Easy Digital Process
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-5 w-5" />
                  <span className="text-base font-medium">
                    Minimum Salary ₹15K
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-5 w-5" />
                  <span className="text-base font-medium">
                    {activeTab === "personal"
                      ? "Instant Approval"
                      : "Same Day Disbursal"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-5 w-5" />
                  <span className="text-base font-medium">
                    {activeTab === "personal" ? "Paper Less" : "Paper Less"}
                  </span>
                </div>
              </div>
              <button className="mb-2 bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg transform hover:translate-y-[-2px]">
                Apply Now
              </button>
              {/* Image of property/real estate */}
              <div className="mt-8 relative">
                <img
                  src="https://www.fincart.com/wp-content/uploads/2024/08/best-reasons-for-a-personal-loan-717x404-1.webp"
                  alt="Property with value potential"
                  className="rounded-xl shadow-md w-full max-w-md"
                />
                
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[580px] overflow-auto">
                <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18ADA5] rounded-lg flex items-center justify-center shadow-lg">
                  <Calculator className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3  ml-10">
                  Calculate Loan EMI
                </h3>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter Loan Amount
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)} // keep raw value
                    onBlur={() => {
                      const min = 0;
                      const max = activeTab === "personal" ? 50000000 : 10000000;
                      const parsed = parseInt(loanAmount) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setLoanAmount(clamped);
                    }}
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Min ₹ 50,000</span>
                    <span>
                      {activeTab === "personal"
                        ? "Max ₹ 5,000,000"
                        : "Max ₹ 1,000,000"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
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

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    onBlur={() => {
                      const min = 0;
                      const max = activeTab === "personal" ? 40 : 40;
                      const parsed = parseFloat(interestRate) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setInterestRate(clamped);
                    }}
                  />
                  {
                    interestRate > 40 && <p className="text-[red] text-sm">Loan Rate cannot exceed 40%</p>
                  }
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Min 9 %</span>
                    <span>Max 40 %</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(parseFloat(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tenure (Months)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={tenure}
                    onChange={(e) => setTenure(parseInt(e.target.value))}
                    onBlur={() => {
                      const min = 0;
                      const max = activeTab === "personal" ? 600 : 600;
                      const parsed = parseInt(tenure) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setTenure(clamped);
                    }}
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

                <div className="bg-gradient-to-br from-[#f8fcfc] to-[#eef8f8] rounded-lg p-4 flex mb-4 shadow-sm">
                  <div className="w-1/2 border-r border-gray-200 pr-3">
                    <p className="text-xs text-gray-600 mb-1">Monthly EMI</p>
                    <p className="text-xl font-bold text-[#18ADA5]">
                      ₹ {isNaN(monthlyEMI) ? "0" : monthlyEMI.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-1/2 pl-3">
                    <p className="text-xs text-gray-600 mb-1">
                      Interest Payable
                    </p>
                    <p className="text-xl font-bold text-[#18ADA5]">
                      ₹{" "}
                      {isNaN(totalInterest)
                        ? "0"
                        : totalInterest.toLocaleString()}
                    </p>
                  </div>
                </div>

                <button className="w-full bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm">
                  Apply For {activeTab === "personal" ? "Personal" : "Instant"}{" "}
                  Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {activeTab === "personal" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Calculator className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Flexible Loan Amounts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Borrow between ₹50,000 and ₹5,000,000 based on your
                    requirements and eligibility.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Clock className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Quick Processing
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Get your loan application processed within 24-48 hours with
                    minimal documentation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Award className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Competitive Interest Rates
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Enjoy interest rates starting from 10.75% p.a. with
                    transparent terms and no hidden charges.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Why Choose FundsMama Personal Loans?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        100% Digital Journey
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Complete application to disbursement digitally from
                        anywhere
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        No Collateral Required
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Get approved without pledging any assets as security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Repayment</h3>
                      <p className="text-xs sm:text-sm">
                        Choose repayment terms from 1-5 years that fit your
                        budget
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        No Prepayment Penalties
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Pay off your loan early without additional charges after
                        6 months
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Minimal Documentation
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Simple application process with basic KYC requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Special Rates</h3>
                      <p className="text-xs sm:text-sm">
                        Existing customers enjoy preferential interest rates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-[#18ADA5] hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                    Apply For Personal Loan{" "}
                    <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Eligibility Criteria
                </h2>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-5 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                          <Calculator className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          For Salaried Individuals
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Age: 21-58 years
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Minimum monthly income: ₹15,000
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Employment: At least 6 months in current job
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Credit Score: 650+
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-5 sm:p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                          <CreditCard className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          For Self-Employed Individuals
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Age: 25-65 years
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Business vintage: Minimum 2 years
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Annual income: Minimum ₹3 lakhs
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Credit Score: 680+
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Required Documents
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-1.5 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Identity Proof
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">Aadhaar Card</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">PAN Card</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Voter ID/Passport/Driving License
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-1.5 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Address Proof
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">Aadhaar Card</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Utility Bills (less than 3 months old)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Rental Agreement/Passport
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-1.5 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Income Proof
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Last 3 months salary slips
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Bank statements (last 6 months)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Form 16 or ITR (for self-employed)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Animated FAQs */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Personal Loan FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {personalFaqs.map((faq, index) => (
                    <div key={index} className="mb-3">
                      <div
                        className={`bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border ${
                          expandedFaq === index
                            ? "border-[#18ADA5]"
                            : "border-gray-100"
                        }`}
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex justify-between items-center p-4 sm:p-5">
                          <h3
                            className={`text-base sm:text-lg font-semibold ${
                              expandedFaq === index
                                ? "text-[#18ADA5]"
                                : "text-gray-800"
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`transition-transform duration-300 text-[#18ADA5] h-5 w-5 ${
                              expandedFaq === index
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                        {expandedFaq === index && (
                          <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-600 border-t border-gray-100 animate-fadeIn">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-[#f0f9f9] to-[#ffffff] p-8 sm:p-12 rounded-2xl shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#163312]">
                  Ready to Get Started?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply Now{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  No obligations. Check your eligibility in minutes.
                </p>
              </div>
            </div>
          )}

          {activeTab === "instant" && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] p-6 sm:p-10 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Instant Loans - Quick Cash When You Need It
                  </h2>
                  <p className="text-base sm:text-lg">
                    Need funds urgently? Our Instant Loan offering provides
                    quick access to funds with minimal documentation and
                    same-day disbursals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <Clock className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Same Day Disbursal
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Get funds in your account within hours of approval.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CreditCard className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Loans up to ₹10 Lakhs
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Access smaller amounts quickly for immediate needs.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Minimal Documentation
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Only basic KYC documents required for processing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Features of Instant Loans
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Award className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Completely Digital Process
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Apply online through our app or website without visiting
                        any branch. Complete the entire process from application
                        to approval digitally.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Clock className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Quick Approval
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Get loan approval within 30 minutes with our AI-powered
                        approval system that quickly verifies your eligibility.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Calculator className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Flexible Repayment
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Choose from tenures ranging from 3 months to 36 months
                        based on your repayment capacity.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          No Hidden Charges
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Transparent fee structure with clearly mentioned
                        processing fees and interest rates. No surprise charges.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <CreditCard className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Small Ticket Sizes
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Borrow as low as ₹10,000 for your immediate needs
                        without taking on a larger loan than necessary.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Award className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Easy Renewals</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Regular repayment builds your credit profile for easier
                        renewals and higher loan amounts in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Instant Loan Eligibility
                </h2>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                  <div className="p-5 sm:p-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Age Requirement
                          </span>
                          <span className="text-gray-600 text-sm">
                            21-55 years
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Income
                          </span>
                          <span className="text-gray-600 text-sm">
                            Minimum monthly income of ₹15,000 for salaried
                            individuals
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Employment
                          </span>
                          <span className="text-gray-600 text-sm">
                            At least 3 months in current job
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Residence
                          </span>
                          <span className="text-gray-600 text-sm">
                            Should be a resident of India
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl md:col-span-2">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Documentation
                          </span>
                          <span className="text-gray-600 text-sm">
                            Valid ID proof, address proof, and bank statements
                            for the last 3 months
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-xl overflow-hidden shadow-xl">
                  <div className="flex flex-col md:flex-row items-center p-6 sm:p-8">
                    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                        Need Urgent Funds?
                      </h2>
                      <p className="text-white/90 mb-5 text-sm sm:text-base">
                        Don't wait for days to get your loan approved. Our
                        Instant Loan gets you the funds when you need them the
                        most.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Fast approval in under 30 minutes
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Same day disbursal directly to your bank
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Completely paperless process
                          </span>
                        </li>
                      </ul>
                      <button className="bg-white text-[#18ADA5] hover:bg-gray-50 font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm sm:text-base">
                        Apply For Instant Loan{" "}
                        <ArrowRight className="inline ml-2 h-4 w-4" />
                      </button>
                    </div>
                    <div className="md:w-1/3">
                      <div className="bg-white p-5 rounded-xl text-center text-gray-800 shadow-lg transform md:translate-x-4 hover:scale-[1.02] transition-transform">
                        <p className="text-lg font-bold mb-2">
                          Loan Process Time
                        </p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3 mb-4">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">
                            30 min
                          </p>
                          <p className="text-xs text-gray-500">for approval</p>
                        </div>

                        <p className="text-lg font-bold mb-2">Disbursal Time</p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">
                            2-6 hrs
                          </p>
                          <p className="text-xs text-gray-500">
                            after approval
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated FAQs for Instant Loans */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Instant Loan FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {instantFaqs.map((faq, index) => (
                    <div key={index} className="mb-3">
                      <div
                        className={`bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border ${
                          expandedFaq === index + 100
                            ? "border-[#18ADA5]"
                            : "border-gray-100"
                        }`}
                        onClick={() => toggleFaq(index + 100)}
                      >
                        <div className="flex justify-between items-center p-4 sm:p-5">
                          <h3
                            className={`text-base sm:text-lg font-semibold ${
                              expandedFaq === index + 100
                                ? "text-[#18ADA5]"
                                : "text-gray-800"
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`transition-transform duration-300 text-[#18ADA5] h-5 w-5 ${
                              expandedFaq === index + 100
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                        {expandedFaq === index + 100 && (
                          <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-600 border-t border-gray-100 animate-fadeIn">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-[#f0f9f9] to-[#ffffff] p-8 sm:p-12 rounded-2xl shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#163312]">
                  Ready for Instant Cash?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply for Instant Loan{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Get funds the same day. No lengthy paperwork.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PersonalLoan;
