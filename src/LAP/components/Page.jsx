




"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const whyFinsbeeFeatures = [
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar.png",
    title: "Substantial Interest Savings",
    description: "Even a 1% reduction in interest rate on a ₹50 lakh loan with 10 years remaining can save you approximately ₹10 lakhs in interest payments over the loan tenure.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Lower EMI Burden",
    description: "Reduced interest rates translate to lower monthly installments, improving your cash flow and making loan repayment more manageable for your business or personal finances.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Enhanced Service Experience",
    description: "Enjoy our superior customer service with a dedicated relationship manager, digital account access, and transparent communication throughout your loan tenure.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "Additional Funding with Top-Up",
    description: "Access additional funds over and above your existing loan at competitive interest rates. Use this for business expansion, education, or other financial needs without applying for a separate loan.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Flexible Tenure Options",
    description: "Choose to reduce your EMI by maintaining the same tenure or reduce your tenure while keeping EMIs similar. Customize your loan terms based on your financial goals and capacity.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Streamlined Process",
    description: "Most of your balance transfer can be completed with minimal physical visits. We handle coordination with your existing lender to ensure a smooth transition.",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is LAP Balance Transfer?",
    answer: "LAP Balance Transfer allows you to transfer your existing Loan Against Property from your current lender to FinsBee to benefit from lower interest rates, extended tenure, higher loan amounts, or better service. It helps reduce your EMI burden and overall interest outgo.",
  },
  {
    id: "item-2",
    question: "Why should I transfer my LAP to another lender?",
    answer: `Switching to a new lender can help you:
Reduce your interest rate
Lower your monthly EMI
Avail of additional funds via top-up
Get better service and repayment flexibility`,
  },
  {
    id: "item-3",
    question: "Will I need to re-mortgage the property?",
    answer:  `Yes. What types of properties are eligible for LAP transfer?Generally accepted property types:
Residential (self-occupied or rented)
Commercial (offices, shops)
Plots (depends on lender)`,
  },
  // {
  //   id: "item-4",
  //   question: "What is the interest rate for a Loan Against Stocks?",
  //   answer: "Interest rates start at 9.00% p.a. and vary based on the value and type of stocks pledged.",
  // },
  // {
  //   id: "item-5",
  //   question: "What happens if stock prices fluctuate?",
  //   answer: `The loan amount is secured against the value of your stocks. If market prices drop significantly, you may be required to add more collateral or repay part of the loan to maintain the required margin.`,
  // },
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Apply & Submit Documents",
    description:
      "Fill out an application (online or in‐branch). Provide existing loan statements, foreclosure letter, property documents, and basic KYC.",
  },
  {
    number: "2",
    title: "Valuation & Eligibility Check",
    description:
      "We value your secured property, verify legal status, and assess your eligibility — including topup potential and applicable interest rate.",
  },
  {
    number: "3",
    title: "Receive Offer",
    description:
      "Get a detailed offer letter with loan amount, rate, tenure, EMI schedule. Choose whether to include a topup if eligible.",
  },
  {
    number: "4",
    title: "Documentation & Disbursement",
    description:
      "Sign the loan agreement, complete mortgage formalities, and we'll disburse the approved amount directly to your existing lender, settling your previous loan. Any top-up amount will be credited to your account.",
  },
];
const payingToMuch = [
  {
    number: "1",
    title: "Rates from 7.50% p.a.",
    // description:
    //   "Fill out an application (online or in‐branch). Provide existing loan statements, foreclosure letter, property documents, and basic KYC.",
  },
  {
    number: "2",
    title: "Access additional funds through topup",
    // description:
    //   "We value your secured property, verify legal status, and assess your eligibility — including topup potential and applicable interest rate.",
  },
  {
    number: "3",
    title: "Minimal paperwork, fast processing",
    // description:
    //   "Get a detailed offer letter with loan amount, rate, tenure, EMI schedule. Choose whether to include a topup if eligible.",
  },
  {
    number: "4",
    title: "Documentation & Disbursement",
    // description:
    //   "Sign the loan agreement, complete mortgage formalities, and we'll disburse the approved amount directly to your existing lender, settling your previous loan. Any top-up amount will be credited to your account.",
  },
];

const tabs = [
  { id: "why-finsbee", label: "Why Finsbee?" },
 
  { id: "what-it-is", label: "Paying Too Much Interest?" },
  { id: "LAP-Balance-Transfer-Process", label: "LAP Balance Transfer Process" },
   { id: "faqs", label: "FAQ's" },
];

const FinsbeeSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [openFaq, setOpenFaq] = useState(-1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isTabClicked, setIsTabClicked] = useState(false);

  const sectionRefs = {
    "why-finsbee": useRef(null),
    faqs: useRef(null),
    "what-it-is": useRef(null),
    "LAP-Balance-Transfer-Process": useRef(null),
  };
  const headerRef = useRef(null);

  // Scroll to section when tab is clicked
  const handleTabClick = (tabId) => {
    const targetRef = sectionRefs[tabId];
    if (targetRef?.current && headerRef?.current) {
      // Get the header height dynamically
      const headerHeight =
        headerRef.current.getBoundingClientRect().height || 56; // Fallback to 56px
      const totalOffset = headerHeight + 10; // Additional 10px buffer

      // Calculate the scroll position relative to the document
      const elementTop =
        targetRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - totalOffset,
        behavior: "smooth",
      });

      // Update active tab and mark as clicked
      setActiveTab(tabId);
      setIsTabClicked(true);

      // Reset isTabClicked after a short delay to allow observer to resume
      setTimeout(() => setIsTabClicked(false), 1000);
    }
  };

  // Intersection Observer for tab switching on scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjust these values to control when tab switches
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-tab-id");
          if (id && id !== activeTab) {
            setActiveTab(id);
          }
        }
      });
    }, options);

    // Observe all section refs
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [activeTab]);

  return (
    <div className="relative flex flex-col lg:flex-row gap-8 px-4 sm:px-8 md:px-16 lg:px-[136px] py-12 md:py-16 lg:py-24 bg-white min-h-screen">
      {/* ====================== LEFT SECTION ====================== */}
      <div className="w-full lg:w-2/3">
        <div className="flex flex-col items-start w-full">
          {/* Sticky Tab Header - sticks at top-0 */}
          <div
            ref={headerRef}
            className="sticky top-0 z-30 w-full bg-white border-b border-[#bababa] overflow-hidden pt-2"
          >
            <div className="flex w-full  overflow-hidden">
              {tabs.map((tab, index, arr) => {
                const isFirst = index === 0;
                const isLast = index === arr.length - 1;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex-1 h- px-3 py-4 font-bold text-base bg-white transition-colors duration-300 
                      ${
                        activeTab === tab.id
                          ? "bg-yellow-400 text-gray-900"
                          : "text-gray-400 bg-white hover:text-gray-700"
                      }
                      ${isFirst ? "rounded-tl-[40px]" : ""}
                      ${isLast ? "rounded-tr-[40px]" : ""}
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="w-full pt-16">
            {/* Why Finsbee Section */}
            <section
              ref={sectionRefs["why-finsbee"]}
              data-tab-id="why-finsbee"
              className=" pt-4 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8"
            >
              <div className=" px-4 mb-4">
                <div className="text-xl font-normal text-gray-900 mb-2.5">
                  Why <span className="font-bold">Finsbee?</span>
                  </div>
                  <div
                    className="w-11 h-px mb-[-1px]"
                    style={{
                      backgroundImage:
                        "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                    }}
                  ></div>
                
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:justify-start gap-4 px-4 mb-4">
                {whyFinsbeeFeatures.map((feature, i) => (
                  <div
                    key={i}
                   className="w-full h-full"
                  >
                    <div className="flex flex-col items-start gap-2 p-4 h-full">
                      <img
                        className="w-12 h-12 object-cover"
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h3 className="font-bold text-base">{feature.title}</h3>
                      <p className="font-normal text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* What it is Section */}
            <section
              ref={sectionRefs["what-it-is"]}
              data-tab-id="what-it-is"
              className="p-6 border border-[#eeeaff] rounded-2xl mb-8"
            >
              <div className="px-4 mb-4">
                <div className="text-xl font-normal text-gray-900 mb-2.5">
                  Paying Too Much  <span className="font-bold">Interest?</span>
                </div>
                <div
                  className="w-11 h-px mb-[-1px]"
                  style={{
                    backgroundImage:
                      "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                  }}
                ></div>

                 <p className="text-gray-500 pt-5">You may be paying more than necessary. Switch your LAP to FinsBee, start saving on interest, lighten your monthly payments, and gain financial flexibility.</p>
              </div>
              {payingToMuch.map((step, i) => (
                <div key={i} className="flex items-start gap-3 py-4">
                  <div>
                    
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                   
                    <h3 className="text-gray-500">{step.title}</h3>
                    {/* <p className="text-gray-500">{step.description}</p> */}
                  </div>
                </div>
              ))}
            </section>

            {/* How it Works Section */}
            <section
              ref={sectionRefs["LAP-Balance-Transfer-Process"]}
              data-tab-id="LAP-Balance-Transfer-Process"
              className="p-6 border border-[#eeeaff] rounded-2xl mb-8"
            >
              <div className="px-4 mb-4">
                <div className="text-xl font-normal text-gray-900 mb-2.5">
                  How it <span className="font-bold">Works?</span>
                </div>
                <div
                  className="w-11 h-px mb-[-1px]"
                  style={{
                    backgroundImage:
                      "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                  }}
                ></div>
              </div>
              {howItWorksSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 py-4">
                  <div className="w-7 h-7 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* FAQ Section */}
            <section
              ref={sectionRefs["faqs"]}
              data-tab-id="faqs"
              className="flex flex-col gap-2 pt-8 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8"
            >
              <div className="px-4 mb-4">
                <div className="text-xl font-normal text-gray-900 mb-2.5">
                  <span className="font-bold">FAQ's</span>
                </div>
                <div
                  className="w-11 h-px mb-[-1px]"
                  style={{
                    backgroundImage:
                      "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                  }}
                ></div>
              </div>
              {faqItems.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className={`w-full flex items-center justify-between gap-6 px-4 sm:px-6 py-4 sm:py-6 bg-primary-light rounded-xl border transition-all ${
                      openFaq === index
                        ? "border-[#b39fff] shadow-md rounded-b-none"
                        : "border-[#592eff33]"
                    }`}
                  >
                    <h3
                      className={`font-bold text-base ${
                        openFaq === index ? "text-purple-600" : "text-gray-600"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-400 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {faq.answer && openFaq === index && (
                    <div className="px-4 sm:px-8 py-4 bg-primary-light border-x border-b border-[#b39fff] rounded-b-xl shadow-md">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </section>

            
          </div>
        </div>
      </div>

      {/* ====================== RIGHT SECTION ====================== */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <div className="sticky top-0 pt-2 self-start h-fit w-full max-w-[432px]">
          <div className="border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden shadow-lg">
            <div className="pt-12 pb-0 px-6">
              <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-normal">
                Quick approval Loan
              </h2>
            </div>
            <div className=" rounded-[60px_16px_16px_16px] p-6 md:p-8 mt-8 flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                {/* Phone Input */}
                <div className="flex items-center gap-3 px-3 py-[18px] border border-gray-300 rounded-lg bg-white">
                  <div className="text-base font-normal text-gray-400">+91</div>
                  <div
                    className="w-px h-5"
                    style={{
                      backgroundImage:
                        "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-5.svg')",
                    }}
                  ></div>
                  <input
                    className="flex-1 border-none outline-none bg-transparent text-base font-normal text-gray-600 placeholder-gray-300"
                    type="tel"
                    placeholder="Enter mobile no."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 pr-2 md:pr-6">
                  <input
                    type="checkbox"
                    className="w-5 h-5 mt-0.5 cursor-pointer accent-yellow-400"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <div className="flex-1 text-sm font-normal leading-[18px]">
                    <span className="text-gray-400">
                      By creating an account you agree
                      <br />
                      to our{" "}
                    </span>
                    <span className="text-yellow-400 cursor-pointer">
                      Terms and Conditions{" "}
                    </span>
                    <span className="text-gray-400">and </span>
                    <span className="text-yellow-400 cursor-pointer">
                      Privacy Policy
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col items-center gap-2.5 py-2.5">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <div className="text-sm font-normal text-gray-400">
                    Finsbee keeps your data safe
                  </div>
                </div>
                <button className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer transition-colors hover:bg-yellow-500">
                  Send OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinsbeeSection;

