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
} from "lucide-react";

const HomeLoan = () => {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(240);
  const [activeTab, setActiveTab] = useState("home");
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
      Math.max(parseInt(e.target.value) || 500000, 500000),
      10000000
    );
    setLoanAmount(value);
  };

  const handleInterestRateChange = (e) => {
    const value = Math.min(Math.max(parseFloat(e.target.value) || 7, 7), 12);
    setInterestRate(value);
  };

  const handleTenureChange = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 60, 60), 360);
    setTenure(value);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const homeLoanFaqs = [
    {
      question: "What is the maximum home loan amount I can get?",
      answer:
        "FundsMama offers home loans up to Rs. 5 crores, depending on your income, credit score, property value, and other eligibility factors. The loan amount is typically 75-90% of the property value.",
    },
    {
      question: "How long does it take to get a home loan approved?",
      answer:
        "Once your application is complete with all required documents, home loans are typically approved within 3-7 business days, with disbursement scheduled according to your property purchase or construction timeline.",
    },
    {
      question: "What documents are required for a home loan?",
      answer:
        "You'll need to submit identity proof, address proof, income documents (salary slips, Form 16, bank statements), property documents (sale deed, approved plan), and legal documents. The exact requirements may vary based on whether you're salaried or self-employed.",
    },
    {
      question: "What is the typical interest rate for home loans?",
      answer:
        "Our home loan interest rates start from 8.50% p.a. and vary based on your credit profile, loan amount, property type, and employment status. We offer both floating and fixed interest rate options.",
    },
    {
      question: "What are the prepayment charges for home loans?",
      answer:
        "There are no prepayment charges for floating rate home loans. For fixed rate home loans, a nominal charge of 2-3% may apply if you prepay within the fixed rate tenure. You can make partial prepayments to reduce your interest burden.",
    },
  ];

  const balanceTransferFaqs = [
    {
      question: "What is a home loan balance transfer?",
      answer:
        "A home loan balance transfer is the process of transferring your existing home loan from your current lender to FundsMama to take advantage of lower interest rates, better terms, or additional top-up loan facilities.",
    },
    {
      question: "How much can I save with a balance transfer?",
      answer:
        "Savings vary based on your outstanding loan amount, remaining tenure, and the difference between your current and new interest rate. Even a 0.5% reduction in interest rate can lead to significant savings over the loan tenure. Use our EMI calculator to estimate your potential savings.",
    },
    {
      question: "What is the process for home loan balance transfer?",
      answer:
        "The process involves applying with FundsMama, property valuation, documentation, loan approval, and then settling your existing loan. We handle most of the paperwork and coordinate with your existing lender to ensure a smooth transition.",
    },
    {
      question: "Can I get a top-up loan with my balance transfer?",
      answer:
        "Yes, you can avail a top-up loan along with your balance transfer, subject to eligibility. The top-up amount can be used for home renovation, education, medical expenses, or other financial needs at competitive interest rates.",
    },
    {
      question: "Is there a fee for balance transfer?",
      answer:
        "Yes, there is a processing fee of 0.5-1% of the loan amount for balance transfers. However, the long-term savings from lower interest rates typically outweigh this one-time cost. We also run special promotions with reduced or waived processing fees.",
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
                activeTab === "home"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("home")}
            >
              Home Loan
            </button>
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "transfer"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("transfer")}
            >
              Balance Transfer
            </button>
          </div>

          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-6">
              <h1 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#163312]">
                {activeTab === "home" ? "Home Loan" : "Home Loan Balance Transfer"}
              </h1>
              <p className="sm:mt-1 md:mt-5 lg:mt-6 text-base sm:text-lg mb-4 text-gray-700">
                {activeTab === "home"
                  ? "Turn your dream of home ownership into reality with loans up to Rs. 5 Crores. Attractive interest rates, flexible tenure options, and fast approvals."
                  : "Switch your existing home loan to FundsMama and save with lower interest rates. Reduce EMI burden, get top-up loan options, and benefit from better service."}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "home" ? "Up to ₹5 Crore" : "Lower Interest Rates"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "home" ? "Interest from 8.50%" : "Top-up Loan Available"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "home" ? "Tenure up to 30 Years" : "Simplified Process"}
                  </span>
                </div>
              </div>
              <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg transform hover:translate-y-[-2px]">
                Apply Now
              </button>
              
              {/* Image of happy family with house */}
              <div className="mt-8 relative">
                <img
                  src="https://img.freepik.com/free-photo/happy-family-front-their-house_53876-9825.jpg"
                  alt="Happy family with their house"
                  className="rounded-xl shadow-md w-full max-w-md"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg text-sm font-medium text-[#18ADA5]">
                  Make your dream home a reality
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[580px] overflow-auto">
                <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18ADA5] rounded-lg flex items-center justify-center shadow-lg">
                  <Home className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 mt-2 ml-10">
                  Calculate Home Loan EMI
                </h3>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Value
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  onBlur={() => {
                      const min = 0;
                      const max = activeTab === "home" ? 500000000 : 1000000000;
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
                      const max = activeTab === "personal" ? 60 : 60;
                      const parsed = parseFloat(interestRate) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setInterestRate(clamped);
                    }}
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>7.00 %</span>
                    <span>20.00 %</span>
                  </div>
                  {
                    interestRate > 40 && <p className="text-[red] text-sm">Loan Rate cannot exceed 40%</p>
                  }
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
                    <span>1 Years (12 Months)</span>
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
                  {activeTab === "home" ? "Home Loan" : "Balance Transfer"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {activeTab === "home" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Home className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    High Loan Amounts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Finance up to 90% of your property value with loans ranging from ₹5 lakhs to ₹5 crores based on eligibility.
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
                    Enjoy flexible repayment options with loan tenures extending up to 30 years for comfortable EMIs.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Award className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Attractive Interest Rates
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Benefit from competitive interest rates starting from 7% p.a. with both fixed and floating rate options.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Why Choose FundsMama Home Loans?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Quick Approval Process
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Get your loan approved in as little as 3 days with our streamlined application process
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        No Hidden Charges
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Transparent fee structure with no surprises - what you see is what you pay
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Flexible Loan Options
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Choose from ready property, under-construction, plot purchase, or home improvement loans
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
                        Simple paperwork requirements with digital document submission options
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
                        Our representatives visit you for document collection and verification at your convenience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Dedicated Relationship Manager
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Personal assistance throughout your loan journey from application to disbursement
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-[#18ADA5] hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                    Apply For Home Loan{" "}
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
                            Age: 23-65 years (at loan maturity)
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
                            CIBIL score: 700+
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
                            Age: 25-65 years (at loan maturity)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Business vintage: Minimum 3 years
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Annual income: Minimum ₹5 lakhs (ITR)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            CIBIL score: 700+
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
                          Salary slips (last 3 months)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Form 16 or ITR (last 2 years)
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
                          Sale deed/Agreement
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
                          Approved building plan
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Animated FAQs */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Home Loan FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {homeLoanFaqs.map((faq, index) => (
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
                  Ready to Own Your Dream Home?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply Now{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Get your loan pre-approved within 72 hours. Simple documentation process.
                </p>
              </div>
            </div>
          )}

          {activeTab === "transfer" && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] p-6 sm:p-10 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Home Loan Balance Transfer
                  </h2>
                  <p className="text-base sm:text-lg">
                    Switch your existing home loan to FundsMama to enjoy lower interest rates, reduced EMIs, better service, and additional top-up loan facility.
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
                      Save significantly with our competitive rates starting from 8.50% p.a.
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
                      Get extra funds for renovation, education, or other needs at home loan rates.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Hassle-Free Process
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We handle the entire transfer process with minimal documentation requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Benefits of Balance Transfer
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Award className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Significant Interest Savings
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Even a small reduction in interest rate can lead to substantial savings over the long term. For example, a 0.5% reduction on a ₹50 lakh loan with 15 years remaining can save you over ₹5 lakhs.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Clock className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Reduced EMI Burden
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Lower interest rates translate to reduced monthly installments, improving your cash flow and making loan repayment more comfortable for your budget.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Calculator className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Better Service Experience
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
                          Top-Up Loan Facility
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Access additional funds over and above your existing loan at home loan interest rates. Use this for renovation, education, wedding, medical expenses or other financial needs.
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
                        Choose to reduce your EMI by maintaining the same tenure or reduce your tenure while keeping EMIs similar. Customize based on your financial goals and capacity.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Building className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Digital Process
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Most of your balance transfer can be completed online with minimal visits to our office. Track your application status in real-time through our digital portal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Balance Transfer Process
                </h2>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                  <div className="p-5 sm:p-8">
                    <div className="flex flex-col space-y-8">
                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">1</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Application & Document Submission</h3>
                          <p className="text-gray-600 text-sm">
                            Apply online or at our branch. Submit your existing loan statements, property documents, and basic KYC. Our team will guide you through this process.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">2</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Evaluation & Property Verification</h3>
                          <p className="text-gray-600 text-sm">
                            We'll assess your current loan details, conduct property verification, and legal checks to determine the transferable amount and applicable interest rate.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">3</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Loan Approval & Offer</h3>
                          <p className="text-gray-600 text-sm">
                            Upon approval, we'll provide a detailed offer letter specifying the loan amount, interest rate, tenure, and EMI. You can also opt for a top-up loan at this stage.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-[#18ADA5] rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-4 mt-1 flex-shrink-0">4</div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Documentation & Disbursal</h3>
                          <p className="text-gray-600 text-sm">
                            Sign the loan agreement, complete mortgage formalities, and we'll disburse the approved amount to your existing lender, settling your previous loan. Any top-up amount will be credited to your account.
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
                        Switch your home loan to FundsMama and save significantly on interest payments. Our competitive rates can reduce your EMI burden and help you save lakhs over your loan tenure.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Interest rates starting at 8.50% p.a.
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Top-up loans at attractive rates
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Minimal paperwork and fast processing
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
                            ₹5+ Lakhs
                          </p>
                          <p className="text-xs text-gray-500">on a ₹50 Lakh loan</p>
                        </div>

                        <p className="text-lg font-bold mb-2">
                          Processing Time
                        </p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">
                            7-10 days
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

              {/* Animated FAQs for Home Loan Balance Transfer */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Balance Transfer FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {balanceTransferFaqs.map((faq, index) => (
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
                  Ready to Save on Your Home Loan?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply for Balance Transfer{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Lower your EMI. Reduce your interest burden. Simple transfer process.
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

export default HomeLoan;