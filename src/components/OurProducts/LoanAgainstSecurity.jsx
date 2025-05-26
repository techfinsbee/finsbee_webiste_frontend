import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Calculator,
  Clock,
  Award,
  CreditCard,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  BarChart2,
  Briefcase,
  PieChart,
  Percent
} from "lucide-react";

const LoanAgainstSecurities = () => {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);
  const [activeTab, setActiveTab] = useState("mutual-funds");
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

  const handleLoanAmountChange = (e) => {
    const value = Math.min(
      Math.max(parseInt(e.target.value) || 200000, 200000),
      10000000
    );
    setLoanAmount(value);
  };

  const handleInterestRateChange = (e) => {
    const value = Math.min(Math.max(parseFloat(e.target.value) || 10, 10), 16);
    setInterestRate(value);
  };

  const handleTenureChange = (e) => {
    const value = Math.min(Math.max(parseInt(e.target.value) || 3, 3), 36);
    setTenure(value);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const mutualFundsFaqs = [
    {
      question: "What is a Loan Against Mutual Funds?",
      answer:
        "A Loan Against Mutual Funds is a secured loan where you pledge your mutual fund investments as collateral to get quick financing. You continue to own your mutual fund units and benefit from any appreciation while using them to obtain funds for your needs."
    },
    {
      question: "What types of mutual funds can I pledge for a loan?",
      answer:
        "You can pledge equity mutual funds, debt funds, hybrid funds, and ETFs with good performance history. Generally, funds with a consistent track record and adequate liquidity are preferred. Some lenders may have restrictions on sector-specific or high-risk funds."
    },
    {
      question: "How much loan can I get against my mutual funds?",
      answer:
        "FundsMama offers up to 70-80% of the value of debt mutual funds and up to 50-60% of the value of equity mutual funds. The exact loan-to-value ratio depends on the fund type, performance history, volatility, and liquidity in the underlying portfolio."
    },
    {
      question: "Will I continue to earn returns on my mutual funds during the loan tenure?",
      answer:
        "Yes, you remain the owner of the mutual fund units, so you continue to benefit from any appreciation or dividend payouts during the loan tenure. However, these returns might be used to adjust the loan amount or may be restricted until the loan is fully repaid, depending on the terms."
    },
    {
      question: "What happens if the value of my pledged mutual funds falls significantly?",
      answer:
        "If the value falls below a certain threshold (usually 85-90% of the required collateral value), you'll receive a margin call requiring you to either pledge additional units, make a partial prepayment, or provide additional collateral to maintain the required loan-to-value ratio."
    }
  ];

  const stocksFaqs = [
    {
      question: "What is a Loan Against Stocks?",
      answer:
        "A Loan Against Stocks is a secured loan where you pledge your shares as collateral to get financing. You continue to own the shares and benefit from any price appreciation or dividends, while using the value of your portfolio to access funds for various needs."
    },
    {
      question: "Which stocks are eligible for pledging as collateral?",
      answer:
        "Most lenders accept shares of companies listed in the A-group of NSE and BSE with good market capitalization and liquidity. Blue-chip stocks, index stocks (like those in Nifty 50 or Sensex 30), and stocks with consistent performance are preferred. Penny stocks or shares with high volatility are typically not accepted."
    },
    {
      question: "How much loan can I get against my stock portfolio?",
      answer:
        "FundsMama offers up to 50-60% of the market value of approved stocks. The loan-to-value ratio varies based on the quality of stocks, their volatility, liquidity, and market conditions. Blue-chip and index stocks typically qualify for higher loan values compared to mid or small-cap stocks."
    },
    {
      question: "Can I continue trading with my pledged shares?",
      answer:
        "No, once shares are pledged as collateral, they are marked as such in your demat account and cannot be sold or transferred until the loan is repaid and the pledge is released. However, you continue to receive dividends and other corporate benefits on these shares."
    },
    {
      question: "What happens if the value of my pledged stocks falls significantly?",
      answer:
        "If the value falls below a certain threshold (typically 85-90% of required collateral value), you'll receive a margin call requiring you to either pledge additional shares, make a partial repayment, or provide additional collateral to maintain the required loan-to-value ratio."
    }
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
                activeTab === "mutual-funds"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("mutual-funds")}
            >
              Loan Against Mutual Funds
            </button>
            <button
              className={`py-2 px-6 sm:px-8 font-medium text-lg transition-all ${
                activeTab === "stocks"
                  ? "text-[#18ADA5] border-b-2 border-[#18ADA5] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("stocks")}
            >
              Loan Against Stocks
            </button>
          </div>

          <div className="flex flex-wrap items-start">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 pr-0 lg:pr-6">
              <h1 className="mt-16 text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#163312]">
                {activeTab === "mutual-funds" ? "Loan Against Mutual Funds" : "Loan Against Stocks"}
              </h1>
              <p className="sm:mt-1 md:mt-5 lg:mt-6 text-base sm:text-lg mb-4 text-gray-700">
                {activeTab === "mutual-funds"
                  ? "Unlock the value of your mutual fund investments with quick loans at attractive interest rates. No need to redeem your investments prematurely."
                  : "Leverage your stock portfolio to access funds without selling your shares. Competitive interest rates and flexible repayment options."}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "mutual-funds" ? "Up to 80% of Fund Value" : "Up to 60% of Portfolio Value"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "mutual-funds" ? "Interest from 8.00%" : "Interest from 12.75%"}
                  </span>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="text-[#18ADA5] mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">
                    {activeTab === "mutual-funds" ? "Quick Approval" : "No Selling Required"}
                  </span>
                </div>
              </div>
              <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg transform hover:translate-y-[-2px]">
                Apply Now
              </button>
              
              {/* Image of investments/stocks */}
              <div className="mt-8 relative">
                <img
                  src={activeTab === "mutual-funds" 
                    ? "https://www.righthorizons.com/wp-content/uploads/2024/03/loan-against-mutual-fund.jpg"
                    : "https://storage.googleapis.com/5paisa-prod-storage/files/market-guide/LOAN%20AGAINST%20SHARES.jpeg"}
                  alt={activeTab === "mutual-funds" ? "Mutual fund investment growth" : "Stock market trading graph"}
                  className="rounded-xl shadow-md w-full max-w-md"
                />
                
              </div>
            </div>

            <div className="w-full lg:w-1/2 pl-0 lg:pl-4">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative transform hover:scale-[1.01] transition-transform duration-300 max-h-[580px] overflow-auto">
                <div className="absolute -top-3 -left-3 w-14 h-14 sm:w-16 sm:h-16 bg-[#18ADA5] rounded-lg flex items-center justify-center shadow-lg">
                  {activeTab === "mutual-funds" ? 
                    <PieChart className="text-white h-6 w-6 sm:h-8 sm:w-8" /> :
                    <TrendingUp className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                  }
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 mt-2 ml-10">
                  Calculate {activeTab === "mutual-funds" ? "MF" : "Stocks"} Loan EMI
                </h3>

                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#18ADA5] transition-all text-sm"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)} // allow any typing
                    onBlur={() => {
                      const min = 0;
                      const max = 10000000;
                      const parsed = parseInt(loanAmount) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setLoanAmount(clamped);
                    }}
                  />


                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>₹ 2,00,000</span>
                    <span>₹ 1,00,00,000</span>
                  </div>
                  <input
                    type="range"
                    min="200000"
                    max="10000000"
                    step="100000"
                    value={Math.min(Math.max(parseInt(loanAmount) || 200000, 200000), 10000000)}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#18ADA5] mt-1"
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
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))} // allow any typing
                    onBlur={() => {
                      const min = 0;
                      const max = 60;
                      const parsed = parseFloat(interestRate) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setInterestRate(clamped);
                    }}
                  />
                  {
                    interestRate > 16 && <p className="text-[red] text-sm">Loan Rate cannot exceed 16%</p>
                  }
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>8.00 %</span>
                    <span>16.00 %</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="16"
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
                    onChange={(e) => setTenure(e.target.value)} // allow any typing
                    onBlur={() => {
                      const min = 0;
                      const max = 200;
                      const parsed = parseInt(tenure) || min;
                      const clamped = Math.min(Math.max(parsed, min), max);
                      setTenure(clamped);
                    }}
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>3 Months</span>
                    <span>60 Months</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="60"
                    step="3"
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
                  Apply For Loan Against {activeTab === "mutual-funds" ? "Mutual Funds" : "Stocks"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Main Content */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {activeTab === "mutual-funds" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <PieChart className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Higher Loan Value
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Get up to 80% of your debt fund value and up to 60% of your equity fund value as loan, with amounts ranging from ₹2 lakhs to ₹1 crore.
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
                    Get funds within 48 hours of approval. Simple documentation and digital verification make the process fast and efficient.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Percent className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Continue Earning Returns
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Keep your investments intact and continue benefiting from the growth of your mutual funds while accessing liquidity.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Why Choose FundsMama for Loan Against Mutual Funds?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        No Sale of Investments
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Access funds without redeeming your investments and avoiding early exit loads
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
                        Get loans at rates starting from 12% p.a., lower than many unsecured loans
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
                        Choose from EMI or bullet repayment options based on your cash flow
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Tax Benefits Preserved
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Continue enjoying tax benefits on your mutual fund investments
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
                        Simple paperwork with digital verification and online application process
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
                        Use funds for any legitimate purpose without limitations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-[#18ADA5] hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                    Apply For Loan Against Mutual Funds{" "}
                    <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Eligibility & Requirements
                </h2>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-5 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                          <Calculator className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Eligibility Criteria
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Age: 21-70 years
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Mutual fund investment: Minimum ₹1 lakhs market value
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Investment vintage: Minimum 6 months holding period
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            MF types: Equity, debt, hybrid, ETFs from approved AMCs
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-5 sm:p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                          <Briefcase className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Required Documents
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            KYC documents (PAN, Aadhaar, address proof)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Latest mutual fund statements
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Bank statements (last 3 months)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Income proof (optional for some loan amounts)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated FAQs */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Loan Against Mutual Funds FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {mutualFundsFaqs.map((faq, index) => (
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
                  Access Funds Without Selling Your Investments
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply Now{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Get your loan approved within 48 hours. Simple process with minimal documentation.
                </p>
              </div>
            </div>
          )}

          {activeTab === "stocks" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <TrendingUp className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Leverage Your Portfolio
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Get up to 60% of your stock portfolio value as loan, with amounts ranging from ₹2 lakhs to ₹1 crore based on the quality of stocks.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <BarChart2 className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Continue Market Participation
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Remain invested in the market and benefit from potential stock appreciation while accessing the funds you need.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] border border-gray-100">
                  <div className="bg-[#eaf6f6] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Clock className="text-[#18ADA5] h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Fast Processing
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Simple digital verification and online pledge process ensures quick loan approval and disbursement within 24-48 hours.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#18ADA5] to-[#09615D] rounded-2xl p-6 sm:p-10 mb-16 text-white shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  Why Choose FundsMama for Loan Against Stocks?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        No Stock Sale Required
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Access funds without selling your stocks and missing out on potential market gains
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Lower Interest Rates
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Enjoy rates from 12.50% p.a., significantly lower than unsecured loans
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Digital Pledge Process
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Simple online share pledge process without physical paperwork
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Avoid Capital Gains Tax
                      </h3>
                      <p className="text-xs sm:text-sm">
                        No need to sell stocks, helping you avoid immediate capital gains tax
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Flexible Repayment
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Choose from EMI or interest-only payments with principal at maturity
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all">
                    <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Minimal Income Proof
                      </h3>
                      <p className="text-xs sm:text-sm">
                        Primarily based on your stock portfolio with minimal income documentation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <button className="bg-white text-[#18ADA5] hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                    Apply For Loan Against Stocks{" "}
                    <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Eligibility & Requirements
                </h2>

                <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-5 sm:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                          <Calculator className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Eligibility Criteria
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Age: 21-70 years
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Stock portfolio: Minimum ₹1 lakhs market value
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Stocks from Nifty 500, BSE 500, or approved list
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Demat account with pledging facility
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="p-5 sm:p-8">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#eaf6f6] p-2 rounded-full mr-3">
                          <Briefcase className="text-[#18ADA5] h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">
                          Required Documents
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            KYC documents (PAN, Aadhaar, address proof)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Latest demat account statement
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Bank statements (last 3 months)
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-[#eaf6f6] p-1 rounded-full mr-2">
                            <CheckCircle className="text-[#18ADA5] h-3 w-3" />
                          </div>
                          <span className="text-sm sm:text-base">
                            Canceled cheque leaf
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated FAQs */}
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#163312] text-center">
                  Loan Against Stocks FAQs
                </h2>

                <div className="max-w-3xl mx-auto">
                  {stocksFaqs.map((faq, index) => (
                    <div key={index} className="mb-3">
                      <div
                        className={`bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer border ${
                          expandedFaq === index + 50
                            ? "border-[#18ADA5]"
                            : "border-gray-100"
                        }`}
                        onClick={() => toggleFaq(index + 50)}
                      >
                        <div className="flex justify-between items-center p-4 sm:p-5">
                          <h3
                            className={`text-base sm:text-lg font-semibold ${
                              expandedFaq === index + 50
                                ? "text-[#18ADA5]"
                                : "text-gray-800"
                            }`}
                          >
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`transition-transform duration-300 text-[#18ADA5] h-5 w-5 ${
                              expandedFaq === index + 50
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </div>
                        {expandedFaq === index + 50 && (
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
                  Unlock the Value of Your Stock Portfolio
                </h2>
                <button className="bg-[#18ADA5] hover:bg-[#09615D] text-white font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-xl text-base sm:text-lg transform hover:translate-y-[-2px]">
                  Apply Now{" "}
                  <ArrowRight className="inline ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                  Get quick access to funds without selling your valuable stock investments. Apply today!
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

export default LoanAgainstSecurities;
