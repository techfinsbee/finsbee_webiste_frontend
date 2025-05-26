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
  BarChart,
} from "lucide-react";

const BusinessLoan = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(14);
  const [tenure, setTenure] = useState(36);
  const [activeTab, setActiveTab] = useState("business");
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
      Math.max(parseInt(e.target.value) || 100000, 100000),
      5000000
    );
    setLoanAmount(value);
  };

  const handleInterestRateChange = (e) => {
    const value = Math.min(Math.max(parseFloat(e.target.value) || 12, 12), 28);
    setInterestRate(value);
  };

  const handleTenureChange = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 12, 12), 84);
    setTenure(value);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const businessFaqs = [
    {
      question: "What is the maximum business loan amount I can get?",
      answer:
        "FundsMama offers business loans up to Rs. 1 Crore, depending on your business revenue, credit profile, vintage, and other eligibility factors.",
    },
    {
      question: "How long does it take to get a business loan approved?",
      answer:
        "Once your application is complete with all required documents, business loans are typically approved within 3-5 business days, with disbursement within 24-48 hours after approval.",
    },
    {
      question: "What documents are required for a business loan?",
      answer:
        "You'll need to submit business registration documents, GST returns, business bank statements for the last 6 months, ITR for last 2 years, KYC documents of directors/owners, and proof of business vintage.",
    },
    {
      question: "Can I apply for a business loan for a new business?",
      answer:
        "While established businesses have easier access to loans, we do offer special startup financing for businesses with at least 6 months of operational history. New businesses might require additional documentation or collateral.",
    },
    {
      question: "What are the prepayment charges for business loans?",
      answer:
        "Business loans can be prepaid after 6 months with a nominal charge of 2-4% on the outstanding principal. Exact charges depend on your loan terms and tenure completed.",
    },
  ];

  const workingCapitalFaqs = [
    {
      question:
        "What is the difference between a term loan and working capital loan?",
      answer:
        "Working capital loans are designed for short-term operational needs like inventory purchase, managing cash flow gaps, and day-to-day expenses. Term loans are better suited for long-term investments like equipment purchase or business expansion.",
    },
    {
      question: "How quickly can I access working capital financing?",
      answer:
        "Our working capital solutions typically have faster processing times, with approval possible within 24-48 hours and same-day disbursement for pre-approved businesses.",
    },
    {
      question: "Is collateral required for working capital loans?",
      answer:
        "We offer both secured and unsecured working capital solutions. Unsecured options are available for businesses with strong financial records, while secured options with collateral may offer better interest rates.",
    },
    {
      question: "What is the typical tenure for working capital financing?",
      answer:
        "Working capital loans generally have shorter tenures ranging from 3 months to 36 months, designed to match short-term business cycles.",
    },
  ];
  // Add FAQs for Invoice Discounting
  const invoiceDiscountingFaqs = [
    {
      question: "What is invoice discounting?",
      answer:
        "Invoice discounting is a financial solution that allows businesses to unlock cash tied up in unpaid invoices. You can receive up to 90% of the invoice value immediately, helping improve cash flow without waiting for customers to pay.",
    },
    {
      question: "How is invoice discounting different from factoring?",
      answer:
        "In invoice discounting, you maintain control of your sales ledger and customer relationships, with clients unaware of the arrangement. Factoring, however, transfers control of the sales ledger to the factoring company who directly collects payments from your customers.",
    },
    {
      question:
        "What types of businesses can benefit from invoice discounting?",
      answer:
        "B2B businesses with creditworthy customers, established trading history (at least 1 year), and a minimum monthly turnover of ₹10 lakhs typically benefit most from invoice discounting.",
    },
    {
      question: "What fees are involved in invoice discounting?",
      answer:
        "The cost typically includes a discount fee (similar to interest) on the advanced amount and a small service fee. Rates depend on your business profile, invoice volumes, and customer credit quality.",
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
                activeTab === "business"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("business")}
            >
              Business Loan
            </button>
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "working"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("working")}
            >
              Working Capital
            </button>
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "invoice"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("invoice")}
            >
              Invoice Discounting
            </button>
          </div>

          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-6">
              <h1 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#163312]">
                {activeTab === "business"
                  ? "Business Loan"
                  : activeTab === "working"
                  ? "Working Capital"
                  : "Invoice Discounting"}
              </h1>
              <p className="sm:mt-1 md:mt-5 lg:mt-6 text-base sm:text-lg mb-4 text-gray-700">
                {activeTab === "business"
                  ? "Fuel your business growth with loans up to Rs. 1 Crore. Quick approval, minimal documentation, and competitive interest rates."
                  : activeTab === "working"
                  ? "Manage cash flow gaps and meet short-term operational needs with flexible working capital solutions designed for business agility."
                  : "Convert your unpaid invoices into immediate working capital. Get up to 90% of your invoice value upfront."}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    Digital Application
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "business"
                      ? "No Collateral Options"
                      : "Flexible Limits"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "business"
                      ? "Min. Vintage 1 Year"
                      : "Quick Disbursals"}
                  </span>
                </div>
              </div>
              <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg transform hover:translate-y-[-2px]">
                Apply Now
              </button>
              {/* Image of property/real estate */}
              <div className="mt-8 relative">
                <img
                  src="https://img.freepik.com/free-photo/business-people-discussing-documents-ideas-meeting_1150-18277.jpg"
                  alt="Property with value potential"
                  className="rounded-xl shadow-md w-full max-w-md"
                />
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg text-sm font-medium text-[#18ADA5]">
                  Unlock your property's potential
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[550px] overflow-auto">
                <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18ADA5] rounded-lg flex items-center justify-center shadow-lg">
                  <BarChart className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 mt-2 ml-10">
                  Calculate Business Loan EMI
                </h3>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enter Loan Amount
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      onBlur={() => {
                      const min = 0;
                      const max = activeTab === "business" ? 5000000000 : 1000000000;
                      const parsed = parseInt(loanAmount) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setLoanAmount(clamped);
                    }}
                  />
                
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interest Rate
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseInt(e.target.value))}
                      onBlur={() => {
                      const min = 0;
                      const max = activeTab === "business" ? 40 : 40;
                      const parsed = parseInt(interestRate) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setInterestRate(clamped);
                    }}
                  />
                  {
                    interestRate > 40 && <p className="text-[red] text-sm">Loan Rate cannot exceed 40%</p>
                  }
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>12 %</span>
                    <span>40 %</span>
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

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tenure (Months)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={tenure}
                    onChange={(e) => setTenure(parseInt(e.target.value))}
                    onBlur={() => {
                      const min = 1;
                      const max = activeTab === "business" ? 600 : 600;
                      const parsed = parseInt(tenure) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setTenure(clamped);
                    }}

                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>6 Months</span>
                    <span>84 Months</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="84"
                    step="6"
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
                  Apply For{" "}
                  {activeTab === "business" ? "Business" : "Working Capital"}{" "}
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
          {activeTab === "business" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Calculator className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Higher Loan Amounts
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Access loans from ₹1 Lakh based on your
                    business requirements and eligibility.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Clock className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Fast Approval Process
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Get your loan application processed within 3-5 business days
                    with simplified documentation requirements.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Award className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Flexible Repayment Options
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Choose from tenures of 1-7 years with customized repayment
                    schedules to match your business cash flows.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Why Choose FundsMama Business Loans?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Unsecured Funding Options
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Get approved without pledging physical collateral based
                        on business strength
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Fully Digital Process
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Complete the application to disbursal journey entirely
                        online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        End-Use Flexibility
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Use funds for expansion, equipment, inventory, working
                        capital or refinancing
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
                        Streamlined paperwork requirements focused on essential
                        business documents
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Competitive Interest Rates
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Attractive rates based on business vintage, turnover and
                        credit history
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
                        Personalized support throughout the application and loan
                        tenure
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-[#18ADA5] hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                    Apply For Business Loan{" "}
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
                          For Proprietary/Partnership Firms
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Business vintage: Minimum 1 year
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Minimum annual turnover: ₹12 Lakhs
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Valid GST registration (if applicable)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Owner's credit score: 700+
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
                          For Private Limited Companies
                        </h3>
                      </div>
                      <ul className="space-y-3">
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
                            Minimum annual turnover: ₹24 Lakhs
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Company and Director's KYC verification
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Profitable operations in recent years
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
                        Business Documents
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Business Registration Certificate
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          GST Registration (if applicable)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">Business Address Proof</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-1.5 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Financial Documents
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
                          Last 6 months business bank statements
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Audited financial statements (if applicable)
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
                        KYC Documents
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          PAN Card of Entity and Promoters
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Aadhaar Card of Promoters/Directors
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-[#f0f9f9] p-1 rounded-full mr-2">
                          <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                        </div>
                        <span className="text-sm">
                          Latest Passport-size photographs
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Animated FAQs */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Business Loan FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {businessFaqs.map((faq, index) => (
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
                  Ready to Grow Your Business?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply Now{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Get funded within 5 business days. No complex paperwork.
                </p>
              </div>
            </div>
          )}

          {activeTab === "working" && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] p-6 sm:p-10 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Working Capital Solutions
                  </h2>
                  <p className="text-base sm:text-lg">
                    Optimize your cash flow with flexible working capital
                    solutions designed to support your day-to-day business
                    operations and short-term financial needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <Clock className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Quick Disbursals
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Get funds in your account within 24-48 hours of approval.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CreditCard className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Flexible Limits
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Access funds when needed with revolving credit facilities.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Short-Term Financing
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Ideal for inventory purchases, seasonal demands, and
                      operational expenses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Working Capital Solution Types
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Award className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Overdraft Facility
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Access funds from your account beyond the available
                        balance up to a pre-approved limit. Pay interest only on
                        the utilized amount.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Clock className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Cash Credit</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        A flexible borrowing option that allows withdrawal of
                        money as per your business requirements within the
                        sanctioned limit.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Calculator className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Short-Term Loan
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Single disbursal with fixed repayment schedule, ideal
                        for one-time working capital requirements with tenures
                        up to 24 months.
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
                          Invoice Financing
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Convert your unpaid invoices into immediate working
                        capital. Get up to 80% of invoice value upfront while
                        awaiting customer payments.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <CreditCard className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Business Line of Credit
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Revolving credit facility that offers flexibility to
                        draw and repay funds multiple times without reapplying.
                        Pay interest only on utilized funds.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Award className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Purchase Order Financing
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Get funds to fulfill customer orders before receiving
                        payment. Ideal for businesses with confirmed purchase
                        orders but limited capital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Eligibility Requirements
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
                            Business Vintage
                          </span>
                          <span className="text-gray-600 text-sm">
                            Minimum 1 year operational history
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Annual Turnover
                          </span>
                          <span className="text-gray-600 text-sm">
                            Minimum ₹10 lakhs annual turnover
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Banking Records
                          </span>
                          <span className="text-gray-600 text-sm">
                            Active business banking relationship for at least 6
                            months
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Credit History
                          </span>
                          <span className="text-gray-600 text-sm">
                            Good credit history with no major defaults
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
                            Business registration proof, bank statements, GST
                            returns, and financial statements for assessment
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
                        Cash Flow Problems?
                      </h2>
                      <p className="text-white/90 mb-5 text-sm sm:text-base">
                        Don't let cash flow gaps hamper your business growth.
                        Our working capital solutions provide the flexibility
                        you need to manage operations smoothly.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Customized to your business cycle
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Quick access to funds when needed
                          </span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Pay only for what you use
                          </span>
                        </li>
                      </ul>
                      <button className="bg-white text-[#18ADA5] hover:bg-gray-50 font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm sm:text-base">
                        Apply For Working Capital{" "}
                        <ArrowRight className="inline ml-2 h-4 w-4" />
                      </button>
                    </div>
                    <div className="md:w-1/3">
                      <div className="bg-white p-5 rounded-xl text-center text-gray-800 shadow-lg transform md:translate-x-4 hover:scale-[1.02] transition-transform">
                        <p className="text-lg font-bold mb-2">
                          Application Process
                        </p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3 mb-4">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">
                            48 hrs
                          </p>
                          <p className="text-xs text-gray-500">for approval</p>
                        </div>

                        <p className="text-lg font-bold mb-2">
                          First Disbursal
                        </p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">
                            1-2 days
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

              {/* Animated FAQs for Working Capital */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Working Capital FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {workingCapitalFaqs.map((faq, index) => (
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
                  Optimize Your Cash Flow Today
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply for Working Capital{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Quick approval. Flexible limits. Digital process.
                </p>
              </div>
            </div>
          )}
          {activeTab === "invoice" && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] p-6 sm:p-10 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Invoice Discounting
                  </h2>
                  <p className="text-base sm:text-lg">
                    Unlock cash trapped in your unpaid invoices. Invoice
                    discounting provides immediate working capital against your
                    accounts receivables without waiting for customer payments.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <Clock className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Same-Day Funding
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Get funds in your account within 24 hours of invoice
                      verification.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CreditCard className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Up to 90% Advance
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Access up to 90% of your invoice value immediately.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">
                        Confidential Service
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Your customers won't know you're using invoice
                      discounting.
                    </p>
                  </div>
                </div>
              </div>

              {/* How It Works Section */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  How Invoice Discounting Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      1
                    </div>
                    <div className="flex items-center mb-3 pt-2">
                      <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center">
                        <CreditCard className="text-[#18ADA5] h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Submit Invoices
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Upload your customer invoices through our secure portal
                      for verification.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      2
                    </div>
                    <div className="flex items-center mb-3 pt-2">
                      <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center">
                        <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Quick Verification
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We verify invoices and assess customer creditworthiness
                      within hours.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      3
                    </div>
                    <div className="flex items-center mb-3 pt-2">
                      <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center">
                        <Clock className="text-[#18ADA5] h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Immediate Funding
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Receive up to 90% of the invoice value in your account
                      within 24 hours.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      4
                    </div>
                    <div className="flex items-center mb-3 pt-2">
                      <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center">
                        <Award className="text-[#18ADA5] h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Balance Settlement
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Receive the remaining amount (minus fees) once your
                      customer pays the invoice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Benefits of Invoice Discounting
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Improved Cash Flow</h3>
                      <p className="text-xs sm:text-sm">
                        Convert sales into immediate cash without waiting for
                        payment terms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Confidentiality</h3>
                      <p className="text-xs sm:text-sm">
                        Your customers won't know you're using invoice
                        discounting
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
                        Your invoices serve as the security, no additional
                        collateral needed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Scales With Your Business
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Financing grows as your sales increase without
                        renegotiation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Facility</h3>
                      <p className="text-xs sm:text-sm">
                        Choose which invoices to discount based on your cash
                        flow needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Quick Decisions</h3>
                      <p className="text-xs sm:text-sm">
                        Faster approval compared to traditional bank loans
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility Section */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Eligibility Criteria
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
                            Business Type
                          </span>
                          <span className="text-gray-600 text-sm">
                            B2B businesses that issue invoices to creditworthy
                            customers
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Business Vintage
                          </span>
                          <span className="text-gray-600 text-sm">
                            Minimum 1 year operational history
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Turnover
                          </span>
                          <span className="text-gray-600 text-sm">
                            Minimum monthly turnover of ₹10 lakhs
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start bg-[#f8fcfc] p-4 rounded-xl">
                        <div className="bg-[#eaf6f6] p-1 rounded-full mr-3 mt-1">
                          <CheckCircle className="text-[#18ADA5] h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-semibold block mb-1 text-sm sm:text-base">
                            Customer Quality
                          </span>
                          <span className="text-gray-600 text-sm">
                            Invoices issued to reputed businesses with good
                            payment history
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Invoice Discounting FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {invoiceDiscountingFaqs.map((faq, index) => (
                    <div key={index} className="mb-3">
                      <div
                        className={`bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border ${
                          expandedFaq === index + 200
                            ? "border-[#18ADA5]"
                            : "border-gray-100"
                        }`}
                        onClick={() => toggleFaq(index + 200)}
                      >
                        <div className="flex justify-between items-center p-4 sm:p-5">
                          <h3
                            className={`text-base sm:text-lg font-semibold ${
                              expandedFaq === index + 200
                                ? "text-[#18ADA5]"
                                : "text-gray-800"
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`transition-transform duration-300 text-[#18ADA5] h-5 w-5 ${
                              expandedFaq === index + 200
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                        {expandedFaq === index + 200 && (
                          <div className="p-4 sm:p-5 pt-0 text-sm sm:text-base text-gray-600 border-t border-gray-100 animate-fadeIn">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-br from-[#f0f9f9] to-[#ffffff] p-8 sm:p-12 rounded-2xl shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#163312]">
                  Convert Your Invoices to Cash
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply for Invoice Discounting{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Get up to 90% of your invoice value within 24 hours.
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

export default BusinessLoan;
