import React, { useState } from "react";
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
  Home,
  Building,
  Briefcase,
} from "lucide-react";

const LoanAgainstProperty = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(180);
  const [activeTab, setActiveTab] = useState("lap");
  const [expandedFaq, setExpandedFaq] = useState(null);

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

  const handleLoanAmountChange = (e) => {
    const value = Math.min(
      Math.max(parseInt(e.target.value) || 1000000, 1000000),
      25000000
    );
    setLoanAmount(value);
  };

  const handleInterestRateChange = (e) => {
    const value = Math.min(Math.max(parseFloat(e.target.value) || 9, 9), 16);
    setInterestRate(value);
  };

  const handleTenureChange = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 12, 12), 240);
    setTenure(value);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const lapFaqs = [
    {
      question: "What is Loan Against Property?",
      answer:
        "A Loan Against Property (LAP) is a secured loan where you pledge your residential, commercial, or industrial property as collateral to get a substantial loan amount. The property remains in your name and you can continue using it while repaying the loan.",
    },
    {
      question: "What is the maximum loan amount I can get against my property?",
      answer:
        "FundsMama offers loans up to 70% of your property's market value, with loan amounts ranging from ₹10 lakhs to ₹5 crores, depending on property valuation, your income, credit profile, and other eligibility factors.",
    },
    {
      question: "What types of properties are accepted as collateral?",
      answer:
        "We accept residential properties (self-occupied or rented), commercial properties (office spaces, shops, etc.), and industrial properties. The property should have clear title documents, be legally constructed, and free from any legal disputes.",
    },
    {
      question: "How long does it take to get a Loan Against Property approved?",
      answer:
        "Once your application is complete with all required documents, LAP is typically approved within 5-7 business days. The disbursement process takes an additional 3-5 days after legal verification and property valuation are complete.",
    },
    {
      question: "What are the prepayment charges for Loan Against Property?",
      answer:
        "For floating rate loans, prepayment charges are typically 2-3% of the outstanding amount if prepaid within 12 months of disbursal. After 12 months, prepayment charges may be reduced or waived. For fixed rate loans, prepayment charges usually apply throughout the tenure.",
    },
  ];

  const lapBalanceTransferFaqs = [
    {
      question: "What is LAP Balance Transfer?",
      answer:
        "LAP Balance Transfer allows you to transfer your existing Loan Against Property from your current lender to FundsMama to benefit from lower interest rates, extended tenure, higher loan amounts, or better service. It helps reduce your EMI burden and overall interest outgo.",
    },
    {
      question: "What are the benefits of transferring my LAP to FundsMama?",
      answer:
        "Benefits include lower interest rates (potentially saving lakhs in interest), reduced EMIs, option for top-up loans for additional funding, extended loan tenure if needed, minimal documentation, and our customer-centric service with a dedicated relationship manager.",
    },
    {
      question: "What documents do I need for LAP Balance Transfer?",
      answer:
        "You'll need property documents, existing loan statements showing repayment history and outstanding amount, foreclosure letter from current lender, KYC documents, income proof (ITR, business financials, or salary slips), and bank statements for the last 6 months.",
    },
    {
      question: "Can I get additional funds when transferring my LAP?",
      answer:
        "Yes, you can avail a top-up loan over and above your existing loan amount, subject to your property valuation and eligibility. The top-up amount can be used for business expansion, education, wedding, medical expenses, or any other legitimate purpose.",
    },
    {
      question: "How much can I save with LAP Balance Transfer?",
      answer:
        "Savings depend on your outstanding loan amount, remaining tenure, and the difference between your current and new interest rate. Even a 1% reduction in interest rate on a ₹50 lakh loan with 10 years remaining can save you approximately ₹10 lakhs in interest payments.",
    },
  ];

  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden">
      <Navbar dropdownData={dropdownData} COLOR="#fff" TXTCOLOR="#" />

      {/* Hero Section with Tabs */}
      <section className="pt-10 pb-5 bg-gradient-to-br from-[#f0f9f9] to-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Loan Type Tabs */}
          <div className="flex border-b border-gray-200 mb-4 overflow-x-auto no-scrollbar">
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "lap"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("lap")}
            >
              Loan Against Property
            </button>
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "transfer"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("transfer")}
            >
              LAP Balance Transfer
            </button>
          </div>

          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-6">
              <h1 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#163312]">
                {activeTab === "lap" ? "Loan Against Property" : "LAP Balance Transfer"}
              </h1>
              <p className="sm:mt-1 md:mt-5 lg:mt-6 text-base sm:text-lg mb-4 text-gray-700">
                {activeTab === "lap"
                  ? "Unlock the value of your property with high-value loans up to Rs. 5 Crores. Low interest rates, flexible repayment options, and minimal documentation."
                  : "Transfer your existing LAP to FundsMama and save with lower interest rates. Reduce EMI burden, get top-up funding, and enjoy better service."}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "lap" ? "Up to ₹5 Crore" : "Lower Interest Rates"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "lap" ? "Interest from 7.00%" : "Top-up Loan Available"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "lap" ? "Tenure up to 30 Years" : "Simplified Process"}
                  </span>
                </div>
              </div>
              <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg transform hover:translate-y-[-2px]">
                Apply Now
              </button>
              
              {/* Image of property/real estate */}
              <div className="mt-8 relative">
                <img
                  src="https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg"
                  alt="Property with value potential"
                  className="rounded-xl shadow-md w-full max-w-md"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg text-sm font-medium text-[#18ADA5]">
                  Unlock your property's potential
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[580px] overflow-auto">
                <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18ADA5] rounded-lg flex items-center justify-center shadow-lg">
                  <Building className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 mt-2 ml-10">
                  Calculate LAP EMI
                </h3>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    onBlur={() => {
                      const min = 0;
                      const max = activeTab === "lap" ? 50000000 : 10000000;
                      const parsed = parseInt(loanAmount) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setLoanAmount(clamped);
                    }}
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate (% p.a.)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    onBlur={() => {
                      const min = 0;
                      const max = activeTab === "lap" ? 60 : 60;
                      const parsed = parseFloat(interestRate) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setInterestRate(clamped);
                    }}
                  />
                  {
                    interestRate > 40 && <p className="text-[red] text-sm">Loan Rate cannot exceed 40%</p>
                  }
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>7.00 %</span>
                    <span>20.00 %</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(parseFloat(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
                  />
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Tenure (Months)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={tenure}
                    onChange={(e) => setTenure(parseInt(e.target.value))}
                    onBlur={() => {
                      const min = 0;
                      const max = activeTab === "home" ? 600 : 600;
                      const parsed = parseInt(tenure) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setTenure(clamped);
                    }}
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>1 Year (12 Months)</span>
                    <span>30 Years (360 Months)</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="360"
                    step="12"
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
                      Total Interest Payable
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
                  Apply For{" "}
                  {activeTab === "lap" ? "Loan Against Property" : "LAP Balance Transfer"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {activeTab === "lap" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Building className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    High Loan Amounts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Get up to 70% of your property's market value as loan, with amounts ranging from ₹10 lakhs to ₹5 crores based on eligibility.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Clock className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Long Repayment Tenure
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Enjoy comfortable EMIs with loan tenures extending up to 20 years, tailored to suit your financial capacity.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Briefcase className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Multiple Usage Options
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Use funds for business expansion, education, marriage, medical expenses, debt consolidation, or any legitimate purpose without restrictions.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Why Choose FundsMama for Loan Against Property?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Competitive Interest Rates
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Enjoy rates starting from 10.50% p.a., among the best in the market
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
                        Simplified paperwork with digital document submission options
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Flexible Repayment Options
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Choose from structured repayment plans tailored to your cash flow
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Quick Processing
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Get your loan approved within 7 days with our streamlined process
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        No End-Use Restrictions
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Freedom to use funds for any legitimate purpose without limitations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Doorstep Service
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Convenient document collection and verification at your location
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-[#18ADA5] hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                    Apply For Loan Against Property{" "}
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
                            Age: 25-65 years (at loan maturity)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Minimum monthly income: ₹25,000
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Employment stability: At least 2 years, with 1 year in current job
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            CIBIL score: 625+
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-5 sm:p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                          <Building className="text-[#18ADA5] h-5 w-5" />
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
                            Age: 25-70 years (at loan maturity)
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
                            Annual income: Minimum ₹6 lakhs (ITR)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            CIBIL score: 675+
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
                        Identity & Address Proof
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Aadhaar Card
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          PAN Card
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Passport/Voter ID/Driving License
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
                        Income Documents
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Last 2 years ITR with computation
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Business financials/Salary slips
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Bank statements (last 12 months)
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
                        Property Documents
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Property ownership documents
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Property tax receipts
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          NOC from society/builder (if applicable)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Animated FAQs */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Loan Against Property FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {lapFaqs.map((faq, index) => (
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
                  Ready to Unlock Your Property Value?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply Now{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Get your loan pre-approved within 7 days. Hassle-free process with minimal documentation.
                </p>
              </div>
            </div>
          )}

          {activeTab === "transfer" && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] p-6 sm:p-10 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    LAP Balance Transfer
                  </h2>
                  <p className="text-base sm:text-lg">
                    Transfer your existing Loan Against Property to FundsMama to enjoy lower interest rates, reduced EMIs, better service, and additional top-up loan facility.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <Clock className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Lower Interest Rates
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Save significantly with our competitive rates starting from 10.50% p.a.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CreditCard className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Additional Top-Up Loan
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Get extra funds for business expansion, education, or other needs at competitive rates.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Simplified Process
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We handle the entire transfer process with minimal documentation and paperwork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Benefits of LAP Balance Transfer
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Award className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Substantial Interest Savings
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Even a 1% reduction in interest rate on a ₹50 lakh loan with 10 years remaining can save you approximately ₹10 lakhs in interest payments over the loan tenure.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Clock className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Lower EMI Burden
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Reduced interest rates translate to lower monthly installments, improving your cash flow and making loan repayment more manageable for your business or personal finances.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Calculator className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Enhanced Service Experience
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Enjoy our superior customer service with a dedicated relationship manager, digital account access, and transparent communication throughout your loan tenure.
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
                          Additional Funding with Top-Up
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Access additional funds over and above your existing loan at competitive interest rates. Use this for business expansion, education, or other financial needs without applying for a separate loan.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <CreditCard className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Flexible Tenure Options
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Choose to reduce your EMI by maintaining the same tenure or reduce your tenure while keeping EMIs similar. Customize your loan terms based on your financial goals and capacity.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Building className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Streamlined Process
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Most of your balance transfer can be completed with minimal physical visits. We handle coordination with your existing lender to ensure a smooth transition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  LAP Balance Transfer Process
                </h2>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                  <div className="p-5 sm:p-8">
                    <div className="flex flex-col space-y-8">
                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">1</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Initial Application & Document Submission</h3>
                          <p className="text-gray-600 text-sm">
                            Apply online or at our branch. Submit your existing loan statements, foreclosure letter, property documents, and basic KYC. Our team will guide you through this process.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">2</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Property Valuation & Eligibility Assessment</h3>
                          <p className="text-gray-600 text-sm">
                            We'll assess your current loan details, conduct fresh property valuation, and perform legal verification to determine the transferable amount, applicable interest rate, and top-up loan eligibility.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">3</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Loan Approval & Offer</h3>
                          <p className="text-gray-600 text-sm">
                            Upon approval, we'll provide a detailed offer letter specifying the loan amount, interest rate, tenure, and EMI. You can choose to opt for a top-up loan at this stage if eligible.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">4</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Documentation & Disbursement</h3>
                          <p className="text-gray-600 text-sm">
                            Sign the loan agreement, complete mortgage formalities, and we'll disburse the approved amount directly to your existing lender, settling your previous loan. Any top-up amount will be credited to your account.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-xl overflow-hidden shadow-xl">
                  <div className="flex flex-col md:flex-row items-center p-6 sm:p-8">
                    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                        Paying Too Much Interest?
                      </h2>
                      <p className="text-white/90 mb-5 text-sm sm:text-base">
                        Switch your Loan Against Property to FundsMama and save significantly on interest payments. Our competitive rates can reduce your EMI burden and help you save lakhs over your loan tenure.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Interest rates starting at 10.50% p.a.
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Top-up loans for additional funding
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Simplified process with minimal paperwork
                          </span>
                        </li>
                      </ul>
                      <button className="bg-white text-[#18ADA5] hover:bg-gray-50 font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm sm:text-base">
                        Calculate Your Savings{" "}
                        <ArrowRight className="inline ml-2 h-4 w-4" />
                      </button>
                    </div>
                    <div className="md:w-1/3">
                      <div className="bg-white p-5 rounded-xl text-center text-gray-800 shadow-lg transform md:translate-x-4 hover:scale-[1.02] transition-transform">
                        <p className="text-lg font-bold mb-2">
                          Potential Savings
                        </p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3 mb-4">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">
                            ₹10+ Lakhs
                          </p>
                          <p className="text-xs text-gray-500">on a ₹50 Lakh loan</p>
                        </div>

                        <p className="text-lg font-bold mb-2">
                          Processing Time
                        </p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">
                            10-15 days
                          </p>
                          <p className="text-xs text-gray-500">
                            for complete transfer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated FAQs for LAP Balance Transfer */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  LAP Balance Transfer FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {lapBalanceTransferFaqs.map((faq, index) => (
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
                  Ready to Save on Your Loan Against Property?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply for LAP Balance Transfer{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Lower your EMI. Reduce your interest cost. Get additional funds with top-up.
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

export default LoanAgainstProperty;