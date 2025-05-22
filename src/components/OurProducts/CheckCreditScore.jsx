"use client"

import { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer"
import {
  CheckCircle,
  Clock,
  Award,
  AlertCircle,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  BarChart2,
  Lock,
  FileText,
  PieChart,
  UserCheck,
  Shield,
  CreditCard,
  Eye,
  RefreshCw,
} from "lucide-react"

const CreditScore = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    panNumber: "",
    address: "",
    dateOfBirth: "",
  })
  const [activeTab, setActiveTab] = useState("check")
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [creditScore, setCreditScore] = useState(null)
  const [scoreAnimation, setScoreAnimation] = useState(0)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ]

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Simulate credit score check
  const handleCheckScore = (e) => {
    e.preventDefault()

    // Validation logic can go here
    if (!userDetails.fullName || !userDetails.phone || !userDetails.panNumber) {
      alert("Please fill all required fields")
      return
    }

    setIsFormSubmitted(true)

    // Simulate API call with loading state
    setTimeout(() => {
      // Generate a random score between 300 and 900
      const randomScore = Math.floor(Math.random() * (900 - 300 + 1)) + 300
      setCreditScore(randomScore)

      // Trigger score animation
      animateScore(randomScore)
    }, 1500)
  }

  // Animate the score counter
  const animateScore = (targetScore) => {
    let startScore = 0
    const duration = 2000 // 2 seconds
    const frameDuration = 20 // 20ms per frame
    const frames = duration / frameDuration
    const increment = targetScore / frames

    let currentFrame = 0

    const animationInterval = setInterval(() => {
      currentFrame++
      startScore += increment
      setScoreAnimation(Math.floor(startScore))

      if (currentFrame >= frames) {
        clearInterval(animationInterval)
        setScoreAnimation(targetScore)
      }
    }, frameDuration)
  }

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // Determine score category and color
  const getScoreCategory = (score) => {
    if (score >= 750) return { category: "Excellent", color: "#16a34a" }
    if (score >= 700) return { category: "Good", color: "#65a30d" }
    if (score >= 650) return { category: "Fair", color: "#f59e0b" }
    if (score >= 600) return { category: "Poor", color: "#ea580c" }
    return { category: "Very Poor", color: "#dc2626" }
  }

  // Calculate score percentage (out of 900)
  const getScorePercentage = (score) => {
    return (score / 900) * 100
  }

  const creditScoreFaqs = [
    {
      question: "What is a credit score?",
      answer:
        "A credit score is a 3-digit number between 300-900 that represents your creditworthiness. It's calculated based on your credit history, including repayment patterns, credit utilization, length of credit history, and types of credit. Higher scores indicate better creditworthiness and improve your chances of loan approval at favorable interest rates.",
    },
    {
      question: "How often should I check my credit score?",
      answer:
        "It's advisable to check your credit score at least once every 3-6 months to monitor your financial health. Regular checks help you identify errors, detect potential identity theft early, and understand how your financial behaviors affect your score. When you're planning to apply for a significant loan like a home loan or car loan, it's beneficial to check your score 3-6 months in advance to give yourself time to improve it if necessary.",
    },
    {
      question: "Will checking my credit score affect my score negatively?",
      answer:
        "No, checking your own credit score through FundsMama is considered a 'soft inquiry' and doesn't impact your credit score. You can check it as often as you like without any negative effects. Only 'hard inquiries', which occur when lenders check your credit report while processing your loan or credit card application, can temporarily lower your score.",
    },
    {
      question: "How can I improve my credit score?",
      answer:
        "You can improve your credit score by: 1) Paying all EMIs and credit card bills on time, 2) Keeping credit utilization below 30% of available limits, 3) Maintaining a healthy mix of secured and unsecured loans, 4) Not applying for multiple loans or credit cards in a short period, 5) Regularly monitoring your credit report for errors, and 6) Keeping old credit accounts active to demonstrate a longer credit history.",
    },
    {
      question: "Why is my credit score different across bureaus?",
      answer:
        "Your credit score may vary across bureaus (CIBIL, Experian, Equifax, etc.) because each bureau may have slightly different information about your credit history, use different scoring models, or weigh factors differently in their calculations. Some lenders might not report to all bureaus, resulting in information differences. These variations are normal and typically don't cause significant discrepancies in loan approvals.",
    },
  ]

  const creditReportFaqs = [
    {
      question: "What information is included in my credit report?",
      answer:
        "Your credit report includes personal information (name, address, PAN, date of birth), account information for all credit facilities (loans and credit cards), detailed payment history for 36-48 months, credit inquiries made by lenders, and public records such as defaults or legal settlements. It provides a comprehensive view of your credit behavior across financial institutions over time.",
    },
    {
      question: "How long do negative items stay on my credit report?",
      answer:
        "Negative items like late payments, defaults, and settlements typically remain on your credit report for 7 years from the date of first delinquency. Bankruptcy information can stay for up to 10 years. However, the impact of these negative items on your credit score diminishes over time if you maintain good credit behavior afterward.",
    },
    {
      question: "How can I dispute errors on my credit report?",
      answer:
        "To dispute errors on your credit report: 1) Identify the specific error in your report, 2) Gather supporting documentation that proves the error, 3) File a dispute directly with the credit bureau through their online portal, mobile app, or by mail, 4) The bureau will investigate within 30 days and notify you of the outcome, 5) If the dispute is resolved in your favor, the bureau will update your report accordingly. Through FundsMama, we can also help you initiate and track this dispute process.",
    },
    {
      question: "Will closed accounts appear on my credit report?",
      answer:
        "Yes, closed accounts will continue to appear on your credit report for up to 10 years if they were in good standing when closed, and up to 7 years if they had negative information. This historical data helps lenders evaluate your long-term credit management and is actually beneficial if the accounts were maintained well.",
    },
    {
      question: "How does FundsMama ensure the security of my credit information?",
      answer:
        "FundsMama employs bank-grade security measures including 256-bit encryption for all data transmission, secure authentication protocols, regular security audits, and strict access controls. We never store your complete credit card numbers or sensitive authentication data. Additionally, we're compliant with all relevant data protection regulations and industry best practices to ensure your financial information remains secure.",
    },
  ]

  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden">
      <Navbar dropdownData={dropdownData} COLOR="#fff" TXTCOLOR="#" />

      {/* Hero Section with Tabs */}
      <section className="pt-10 pb-5 bg-gradient-to-br from-[#f0f9f9] to-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Credit Score Tabs */}
          <div className="flex border-b border-gray-200 mb-4 overflow-x-auto no-scrollbar">
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "check"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("check")}
            >
              Check Credit Score
            </button>
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "report"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("report")}
            >
              Credit Report
            </button>
          </div>

          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-6">
              <h1 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#163312]">
                {activeTab === "check" ? "Free Credit Score Check" : "Comprehensive Credit Report"}
              </h1>
              <p className="sm:mt-1 md:mt-5 lg:mt-6 text-base sm:text-lg mb-4 text-gray-700">
                {activeTab === "check"
                  ? "Check your credit score for free in less than 2 minutes. No hidden fees, no credit card required."
                  : "Get detailed insights into your credit history, loan accounts, and payment patterns with our comprehensive credit report."}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">100% Free</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">No Impact on Score</span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "check" ? "Instant Results" : "Detailed Analysis"}
                  </span>
                </div>
              </div>
              <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg transform hover:translate-y-[-2px]">
                {activeTab === "check" ? "Check Score Now" : "Get Full Report"}
              </button>

              {/* Credit Score Visualization */}
              <div className="mt-8 relative">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] h-3"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Credit Score Range</h3>
                    <div className="relative h-12 bg-gray-200 rounded-full overflow-hidden mb-3">
                      <div className="flex absolute w-full h-full">
                        <div className="h-full bg-red-500 flex-1"></div>
                        <div className="h-full bg-orange-500 flex-1"></div>
                        <div className="h-full bg-yellow-500 flex-1"></div>
                        <div className="h-full bg-lime-500 flex-1"></div>
                        <div className="h-full bg-green-600 flex-1"></div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full flex justify-between px-2 text-xs text-white font-medium items-center">
                        <span>300</span>
                        <span className="ml-auto">900</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-xs text-center mb-4">
                      <div className="text-red-600 font-medium">
                        Very Poor
                        <br />
                        300-599
                      </div>
                      <div className="text-orange-600 font-medium">
                        Poor
                        <br />
                        600-649
                      </div>
                      <div className="text-yellow-600 font-medium">
                        Fair
                        <br />
                        650-699
                      </div>
                      <div className="text-lime-600 font-medium">
                        Good
                        <br />
                        700-749
                      </div>
                      <div className="text-green-600 font-medium">
                        Excellent
                        <br />
                        750-900
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Higher scores indicate better creditworthiness and typically result in more favorable loan terms
                      and interest rates.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-md">
                  <div className="bg-[#18ADA5] text-white text-xs font-bold uppercase px-3 py-1 rounded">Free</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
              {isFormSubmitted && creditScore ? (
                <div className="bg-white rounded-xl shadow-lg p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[580px] overflow-auto">
                  <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18ADA5] rounded-lg flex items-center justify-center shadow-lg">
                    <Award className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-6 mt-2 ml-10 text-center">Your Credit Score</h3>

                  <div className="relative mx-auto w-48 h-48 mb-6">
                    {/* Circle background */}
                    <div className="absolute inset-0 rounded-full bg-gray-100"></div>

                    {/* Score visualization */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(${getScoreCategory(creditScore).color} ${getScorePercentage(creditScore)}%, transparent 0)`,
                      }}
                    ></div>

                    {/* Inner circle with score */}
                    <div className="absolute inset-3 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                      <span className="block text-4xl font-bold text-gray-800">{scoreAnimation}</span>
                      <span className="block text-sm text-gray-500">out of 900</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-lg font-semibold mb-1">
                      Your score is
                      <span className="ml-1" style={{ color: getScoreCategory(creditScore).color }}>
                        {getScoreCategory(creditScore).category}
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">Last updated on {new Date().toLocaleDateString()}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Key Factors</p>
                      <p className="text-sm font-medium">
                        Payment History <span className="float-right text-green-500">Strong</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Credit Mix</p>
                      <p className="text-sm font-medium">
                        Diverse <span className="float-right text-green-500">Good</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Credit Age</p>
                      <p className="text-sm font-medium">
                        5+ Years <span className="float-right text-yellow-500">Fair</span>
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Credit Utilization</p>
                      <p className="text-sm font-medium">
                        27% <span className="float-right text-green-500">Good</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <button className="bg-white border border-[#18ADA5] text-[#18ADA5] font-medium px-4 py-2 rounded-md transition-all duration-300 shadow-sm hover:shadow-md transform hover:translate-y-[-2px] text-sm flex items-center">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh Score
                    </button>
                    <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-4 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Full Report
                    </button>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-base mb-2">Loan Offers Based on Your Score</h4>
                    <div className="bg-gradient-to-r from-[#f0f9f9] to-[#eaf6f6] p-3 rounded-lg flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium text-sm">Personal Loan</p>
                        <p className="text-xs text-gray-600">Interest from 10.5%</p>
                      </div>
                      <button className="bg-[#18ADA5] text-white text-xs font-medium px-3 py-1 rounded">Apply</button>
                    </div>
                    <div className="bg-gradient-to-r from-[#f0f9f9] to-[#eaf6f6] p-3 rounded-lg flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">Credit Card</p>
                        <p className="text-xs text-gray-600">Limit up to ₹5 Lakhs</p>
                      </div>
                      <button className="bg-[#18ADA5] text-white text-xs font-medium px-3 py-1 rounded">Apply</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[580px] overflow-auto">
                  <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18ADA5] rounded-lg flex items-center justify-center shadow-lg">
                    <Shield className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 mt-2 ml-10">
                    {activeTab === "check" ? "Check Your Credit Score Free" : "Request Your Credit Report"}
                  </h3>

                  <form onSubmit={handleCheckScore}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                        <input
                          type="text"
                          name="fullName"
                          value={userDetails.fullName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={userDetails.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                          placeholder="Enter email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                        <input
                          type="tel"
                          name="phone"
                          value={userDetails.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number*</label>
                        <input
                          type="text"
                          name="panNumber"
                          value={userDetails.panNumber}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm uppercase"
                          placeholder="Enter PAN number"
                          maxLength="10"
                          required
                        />
                      </div>
                    </div>

                    {activeTab === "report" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={userDetails.dateOfBirth}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                          <input
                            type="text"
                            name="address"
                            value={userDetails.address}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                            placeholder="Enter your address"
                          />
                        </div>
                      </div>
                    )}

                    <div className="bg-gradient-to-br from-[#f8fcfc] to-[#eef8f8] rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <Lock className="text-[#18ADA5] h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">
                          Your information is secure with us. We use bank-level security measures to protect your data.
                          This check won't impact your credit score.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start mb-6">
                      <input
                        type="checkbox"
                        id="consent"
                        className="h-4 w-4 mt-1 text-[#18ADA5] focus:ring-[#18ADA5] border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                        I authorize FundsMama to access my credit information from credit bureaus for the purpose of
                        providing me with my credit score and report.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm"
                    >
                      {isFormSubmitted && !creditScore ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing Your Request...
                        </span>
                      ) : (
                        `Check ${activeTab === "check" ? "Credit Score" : "Credit Report"} Now`
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {activeTab === "check" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Eye className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">100% Free Score Check</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Check your credit score as many times as you want completely free. No hidden charges, no credit card
                    required.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Clock className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Instant Results</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    See your credit score immediately after verification. No waiting periods or delayed processing.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Shield className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">No Impact on Score</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Checking your own credit score is a "soft inquiry" and does not affect your credit score in any way.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Why Should You Check Your Credit Score?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Lower Interest Rates</h3>
                      <p className="text-xs sm:text-sm">
                        A good credit score can help you get loans at much lower interest rates, saving thousands
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Higher Loan Approval Chances</h3>
                      <p className="text-xs sm:text-sm">
                        Improve your odds of loan approval by monitoring and improving your credit score
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Detect Errors & Fraud</h3>
                      <p className="text-xs sm:text-sm">
                        Regular checks help identify reporting errors or fraudulent activities in your name
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Better Negotiating Power</h3>
                      <p className="text-xs sm:text-sm">
                        Use your high score to negotiate better terms for loans, credit cards, and insurance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Track Improvement Progress</h3>
                      <p className="text-xs sm:text-sm">
                        Monitor how your financial behavior affects your score and see improvement over time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">Financial Planning</h3>
                      <p className="text-xs sm:text-sm">
                        Make better financial decisions with knowledge of your current credit standing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-[#18ADA5] hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                    Check Your Score Now <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  What Impacts Your Credit Score?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-800">Score Factors</h3>
                        <PieChart className="text-[#18ADA5] h-5 w-5" />
                      </div>

                      {/* Credit Score Components Visualization */}
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Payment History</span>
                            <span className="text-gray-500">35%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#18ADA5]" style={{ width: "35%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Credit Utilization</span>
                            <span className="text-gray-500">30%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#18ADA5]" style={{ width: "30%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Credit Age</span>
                            <span className="text-gray-500">15%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#18ADA5]" style={{ width: "15%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">Credit Mix</span>
                            <span className="text-gray-500">10%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#18ADA5]" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">New Credit Inquiries</span>
                            <span className="text-gray-500">10%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#18ADA5]" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                          <CheckCircle className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold">Payment History (35%)</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Timely payments on all loans and credit cards significantly boost your score. Even one late
                        payment can impact it negatively for years.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                          <CreditCard className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold">Credit Utilization (30%)</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        The percentage of available credit you're using. For best scores, keep utilization below 30% of
                        your total credit limits.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                          <Clock className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold">Credit Age (15%)</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        The average age of all your credit accounts. Longer credit history demonstrates reliability to
                        lenders.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-10 h-10 flex items-center justify-center mr-3 flex-shrink-0">
                          <TrendingUp className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold">New Credit & Hard Inquiries (10%)</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Multiple credit applications in a short period can lower your score temporarily. Space out new
                        credit applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Tips to Improve Your Credit Score
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="bg-[#eaf6f6] mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-[#18ADA5] text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Pay All Bills On Time</h3>
                    <p className="text-gray-600 text-sm">
                      Set up automatic payments or reminders to ensure you never miss a payment date. Even a single late
                      payment can impact your score.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="bg-[#eaf6f6] mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-[#18ADA5] text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Keep Credit Utilization Low</h3>
                    <p className="text-gray-600 text-sm">
                      Aim to use less than 30% of your available credit limits. Consider making multiple payments
                      throughout the month to keep balances low.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="bg-[#eaf6f6] mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-[#18ADA5] text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Don't Close Old Accounts</h3>
                    <p className="text-gray-600 text-sm">
                      Keeping older accounts open helps increase your average credit age. If there's no annual fee, keep
                      the account active with small purchases.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="bg-[#eaf6f6] mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-[#18ADA5] text-xl font-bold">4</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Limit Hard Inquiries</h3>
                    <p className="text-gray-600 text-sm">
                      Apply for new credit only when necessary. Multiple applications in a short period can temporarily
                      lower your score.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="bg-[#eaf6f6] mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-[#18ADA5] text-xl font-bold">5</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Maintain a Good Credit Mix</h3>
                    <p className="text-gray-600 text-sm">
                      Having different types of credit (credit cards, loans, mortgage) can positively impact your score
                      if managed responsibly.
                    </p>
                  </div>

                  <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <div className="bg-[#eaf6f6] mb-4 w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-[#18ADA5] text-xl font-bold">6</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Regularly Monitor Your Score</h3>
                    <p className="text-gray-600 text-sm">
                      Check your credit score regularly to track progress and identify potential errors or fraudulent
                      activities quickly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated FAQs */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">Credit Score FAQs</h2>

                <div className="max-w-3xl mx-auto">
                  {creditScoreFaqs.map((faq, index) => (
                    <div key={index} className="mb-3">
                      <div
                        className={`bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border ${
                          expandedFaq === index ? "border-[#18ADA5]" : "border-gray-100"
                        }`}
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex justify-between items-center p-4 sm:p-5">
                          <h3
                            className={`text-base sm:text-lg font-semibold ${
                              expandedFaq === index ? "text-[#18ADA5]" : "text-gray-800"
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`transition-transform duration-300 text-[#18ADA5] h-5 w-5 ${
                              expandedFaq === index ? "transform rotate-180" : ""
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
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#163312]">Know Where You Stand Today</h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Check Your Credit Score For Free <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Instant results. No credit card required. No hidden fees.
                </p>
              </div>
            </div>
          )}

          {activeTab === "report" && (
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] p-6 sm:p-10 text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Comprehensive Credit Report</h2>
                  <p className="text-base sm:text-lg">
                    Get a detailed view of your entire credit history with our comprehensive credit report. Understand
                    what lenders see when they check your credit profile.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 p-5 sm:p-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <FileText className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">Complete History</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      View all your loans, credit cards, and payment patterns over the last 36-48 months.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <AlertCircle className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">Identify Issues</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Spot errors, fraudulent accounts, or negative factors affecting your score.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                        <UserCheck className="text-[#18ADA5] h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold">Expert Analysis</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Get personalized recommendations to improve your credit profile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  What's Included in Your Credit Report
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <UserCheck className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Your name, date of birth, PAN, contact information, and employment details as reported by
                        various lenders.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <CreditCard className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Account Details</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Complete information about all your credit accounts including loans, credit cards, their limits,
                        balances, and current status.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Clock className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Payment History</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Month-by-month payment record for each account over the past 36-48 months, showing on-time
                        payments and any late payments.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <Eye className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Credit Inquiries</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        List of organizations that have requested your credit report in the last 2 years, categorized as
                        hard or soft inquiries.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 mb-6">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <AlertCircle className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Public Records</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Information about legal financial matters like bankruptcies, defaults, settlements, or other
                        judgments that may impact your creditworthiness.
                      </p>
                    </div>

                    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex items-center mb-3">
                        <div className="bg-[#eaf6f6] p-2 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                          <BarChart2 className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">Score Analysis</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        Detailed breakdown of factors influencing your credit score with personalized recommendations
                        for improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-xl overflow-hidden shadow-xl">
                  <div className="flex flex-col md:flex-row items-center p-6 sm:p-8">
                    <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Why Monitor Your Credit Score?</h2>
                      <p className="text-white/90 mb-5 text-sm sm:text-base">
                        Your credit score is a key factor in loan approvals and interest rates. Regular monitoring helps
                        you identify opportunities for improvement and catch errors before they affect your financial
                        plans.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">Identify opportunities to improve your score</span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">Spot suspicious activities or errors early</span>
                        </li>
                        <li className="flex items-center text-white">
                          <div className="bg-white/20 p-1.5 rounded-full mr-3">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-sm sm:text-base">Prepare for future loan applications</span>
                        </li>
                      </ul>
                      <button className="bg-white text-[#18ADA5] hover:bg-gray-50 font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px] text-sm sm:text-base">
                        Check Your Score Now <ArrowRight className="inline ml-2 h-4 w-4" />
                      </button>
                    </div>
                    <div className="md:w-1/3">
                      <div className="bg-white p-5 rounded-xl text-center text-gray-800 shadow-lg transform md:translate-x-4 hover:scale-[1.02] transition-transform">
                        <p className="text-lg font-bold mb-2">Credit Score Scale</p>
                        <div className="bg-[#f0f9f9] rounded-lg p-4 mb-4">
                          <div className="w-full h-6 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mb-2"></div>
                          <div className="flex justify-between text-xs">
                            <span>300</span>
                            <span>500</span>
                            <span>700</span>
                            <span>900</span>
                          </div>
                          <div className="flex justify-between text-xs mt-2">
                            <span className="text-red-600">Poor</span>
                            <span className="text-yellow-600">Fair</span>
                            <span className="text-green-600">Good</span>
                            <span className="text-green-700">Excellent</span>
                          </div>
                        </div>

                        <p className="text-lg font-bold mb-2">Checking Time</p>
                        <div className="bg-[#f0f9f9] rounded-lg p-3">
                          <p className="text-3xl font-bold text-[#18ADA5] mb-0">5 minutes</p>
                          <p className="text-xs text-gray-500">completely free</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Understanding Your Credit Score
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      1
                    </div>
                    <div className="pt-3">
                      <h3 className="text-lg font-semibold mb-2">Payment History (35%)</h3>
                      <p className="text-gray-600 text-sm">
                        Your track record of paying bills on time. Late payments, defaults, and bankruptcies can
                        significantly lower your score.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      2
                    </div>
                    <div className="pt-3">
                      <h3 className="text-lg font-semibold mb-2">Credit Utilization (30%)</h3>
                      <p className="text-gray-600 text-sm">
                        The ratio of current credit card balances to credit limits. Lower utilization (under 30%)
                        positively impacts your score.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      3
                    </div>
                    <div className="pt-3">
                      <h3 className="text-lg font-semibold mb-2">Credit Age (15%)</h3>
                      <p className="text-gray-600 text-sm">
                        The length of your credit history. Longer credit histories with established accounts typically
                        improve your score.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative">
                    <div className="bg-[#18ADA5] w-8 h-8 rounded-full flex items-center justify-center absolute -top-3 -left-3 text-white font-bold shadow-md">
                      4
                    </div>
                    <div className="pt-3">
                      <h3 className="text-lg font-semibold mb-2">Credit Mix & Inquiries (20%)</h3>
                      <p className="text-gray-600 text-sm">
                        The variety of credit accounts (10%) and new credit applications (10%). Multiple recent
                        inquiries can temporarily lower your score.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">Credit Score FAQs</h2>

                <div className="max-w-3xl mx-auto">
                  {activeTab === "check" ? (
                    <>
                      {creditScoreFaqs.map((faq, index) => (
                        <div key={index} className="mb-3">
                          <div
                            className={`bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border ${
                              expandedFaq === index ? "border-[#18ADA5]" : "border-gray-100"
                            }`}
                            onClick={() => toggleFaq(index)}
                          >
                            <div className="flex justify-between items-center p-4 sm:p-5">
                              <h3
                                className={`text-base sm:text-lg font-semibold ${
                                  expandedFaq === index ? "text-[#18ADA5]" : "text-gray-800"
                                }`}
                              >
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`transition-transform duration-300 text-[#18ADA5] h-5 w-5 ${
                                  expandedFaq === index ? "transform rotate-180" : ""
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
                    </>
                  ) : (
                    <>
                      {creditReportFaqs.map((faq, index) => (
                        <div key={index} className="mb-3">
                          <div
                            className={`bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border ${
                              expandedFaq === index + 100 ? "border-[#18ADA5]" : "border-gray-100"
                            }`}
                            onClick={() => toggleFaq(index + 100)}
                          >
                            <div className="flex justify-between items-center p-4 sm:p-5">
                              <h3
                                className={`text-base sm:text-lg font-semibold ${
                                  expandedFaq === index + 100 ? "text-[#18ADA5]" : "text-gray-800"
                                }`}
                              >
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`transition-transform duration-300 text-[#18ADA5] h-5 w-5 ${
                                  expandedFaq === index + 100 ? "transform rotate-180" : ""
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
                    </>
                  )}
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-[#f0f9f9] to-[#ffffff] p-8 sm:p-12 rounded-2xl shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#163312]">
                  Ready to Know Your Credit Standing?
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Check Your Credit Score Now <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  It's free, won't affect your score, and takes just 5 minutes
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
  )
}

export default CreditScore
