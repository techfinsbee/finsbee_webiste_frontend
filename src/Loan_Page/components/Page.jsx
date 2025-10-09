

"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const whyFinsbeeFeatures = [
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar.png",
    title: "100% Digital Journey",
    description: "Enjoy a seamless, end-to-end digital process — from application to loan disbursal — anytime, from anywhere. No branch visits required.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "No Collateral Required",
    description: "Access personal loans without the need to pledge any assets. Your loan is entirely unsecured for complete peace of mind.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Flexible Repayment Options",
    description: "Repay at your convenience with flexible loan tenures ranging from 1 to 5 years, tailored to suit your financial goals.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "No Prepayment Penalties",
    description: "Repay your loan early and save on interest — with no prepayment charges after 6 months of loan tenure.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Minimal Documentation",
    description: "Benefit from a simple and quick application process with only basic KYC documents required.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Preferential Interest Rates",
    description: "As a valued FinsBee customer, enjoy special interest rates on your next loan — rewarding your loyalty with better terms.",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is the maximum loan amount I can apply for?",
    answer: "You can borrow a personal loan of up to ₹50 Lakhs depending on your eligibility and requirements.",
  },
  {
    id: "item-2",
    question: "How quickly can I get my loan approved?",
    answer: "At FinsBee, most loan applications are processed within 24 to 48 hours, with quick approval for eligible candidates.",
  },
  {
    id: "item-3",
    question: "Are there any prepayment charges?",
    answer: "There are no prepayment charges if you prepay your loan after completing 6 EMI payments. For prepayments before 6 months, a nominal charge of 2-3% on the outstanding principal may apply.",
  },
  {
    id: "item-4",
    question: "Can I apply for a personal loan with a low credit score?",
    answer: "While we generally recommend a credit score of 650 or above, each application is evaluated individually. Factors like income stability and existing liabilities are also considered.",
  },
  {
    id: "item-5",
    question: "For what purposes can I use a personal loan?",
    answer: "Use a personal loan from FinsBee for education, medical emergencies, travel, home renovation, or wedding expenses. Our flexible loans make meeting your financial goals easy and hassle-free.",
  },
];

// const howItWorksSteps = [
//   {
//     number: "1",
//     title: "Upload Invoices",
//     description:
//       "Submit your customer invoices via our secure portal for verification",
//   },
//   {
//     number: "2",
//     title: "Quick Verification",
//     description:
//       "We assess the invoices and evaluate customer creditworthiness within hours.",
//   },
//   {
//     number: "3",
//     title: "Immediate Funding",
//     description:
//       "Receive up to 90% of the invoice value in your bank account within 24 hours.",
//   },
//   {
//     number: "4",
//     title: "Settlement of Balance",
//     description:
//       "Once your customer settles the invoice, you receive the remaining amount (after deducting applicable fees).",
//   },
// ];

const tabs = [
  { id: "why-finsbee", label: "Why Finsbee?" },
  { id: "faqs", label: "FAQ's" },
  // { id: "what-it-is", label: "What it is?" },
  // { id: "how-it-works", label: "How it Works?" },
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
    // "what-it-is": useRef(null),
    // "how-it-works": useRef(null),
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
                    className={`flex-1 h-14 px-3 py-4 font-bold text-base bg-white transition-colors duration-300 
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
              <div className="grid grid-cols-2 justify-center md:justify-start gap-4 px-4 mb-4">
                {whyFinsbeeFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="w-full sm:w-[48%] md:w-[45%] lg:w-[370px] h-full"
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
                    className={`w-full flex items-center justify-between gap-6 px-8 py-6 bg-primary-light rounded-xl border transition-all ${
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
                    <div className="px-8 py-4 bg-primary-light border-x border-b border-[#b39fff] rounded-b-xl shadow-md">
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

