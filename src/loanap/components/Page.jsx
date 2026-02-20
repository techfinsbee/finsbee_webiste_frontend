


"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

const whyFinsbeeFeatures = [
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar.png",
    title: "Hassle-Free Documentation",
    description: "Enjoy a smooth experience with minimal paperwork and digital document uploads for faster approvals.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Flexible Repayment Plans",
    description: "Select repayment options that align with your income and cash flow, offering complete financial comfort.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: " Quick Processing",
    description: "Experience quick approvals within 7 days thanks to our efficient and streamlined loan process.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "No End-Use Restrictions",
    description: "Use your funds for any personal or professional need—no restrictions, just full financial freedom.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Convenient Doorstep Service",
    description: "Enjoy document pickup and verification at your location, making the process truly effortless.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: " Competitive Interest Rates",
    description: "Enjoy rates starting from 10.50% p.a., among the best in the market",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is Loan Against Property?",
    answer: "A Loan Against Property (LAP) is a secured loan where you pledge your residential, commercial, or industrial property as collateral to get a substantial loan amount. The property remains in your name and you can continue using it while repaying the loan.",
  },
  {
    id: "item-2",
    question: "What type of properties can be mortgaged?",
    answer: `You can mortgage:• Self-occupied residential property• Rented residential or commercial property• Vacant land (depending on lender’s policy)• Industrial or mixed-use property`,
  },
  {
    id: "item-3",
    question: "How long does it take to get a Loan Against Property approved?",
    answer: "Once your application is complete with all required documents, LAP is typically approved within 5-7 business days. The disbursement process takes an additional 3-5 days after legal verification and property valuation are complete.",
  },
  {
    id: "item-4",
    question: " What are the prepayment charges for Loan Against Property?",
    answer: "For floating rate loans, prepayment charges are typically 2-3% of the outstanding amount if prepaid within 12 months of disbursal. After 12 months, prepayment charges may be reduced or waived. For fixed rate loans, prepayment charges usually apply throughout the tenure.",
  },
  {
    id: "item-5",
    question: "Is there any restriction on how I can use the funds?",
    answer: `No. LAP has no end-use restrictions. You can use the funds for:• Business expansion• Debt consolidation• Education• Wedding expenses• Medical emergencies• Home renovation, etc.`,
  },
];



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
const searchParams = useSearchParams();
const autoApply = searchParams.get("autoApply");
const [showFlutter, setShowFlutter] = useState(false);
const sidebarRef = useRef(null);

useEffect(() => {
  if (autoApply === "true") {
    setShowFlutter(true);

    setTimeout(() => {
      if (sidebarRef.current) {
        sidebarRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  }
}, [autoApply]);



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
    <div className="relative flex flex-col-reverse lg:flex-row gap-8  sm:px-8 md:px-16 lg:px-[136px] py-12 md:py-16 lg:py-24 bg-white min-h-screen">
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
     <div ref={sidebarRef}  className="w-full lg:w-1/3 flex justify-center lg:justify-end">
  <div className="sticky top-0 pt-2 self-start h-fit w-full max-w-[432px]">
    
    {showFlutter ? (
      // -------- SHOW FLUTTER APP HERE ------------
      <div className="w-full h-[90vh] border-[6px] border-yellow-400 rounded-2xl overflow-hidden">
        <iframe
          src="/flutterapp/index.html#/minified:p3"
          className="w-full h-full border-0"
        />
      </div>
    ) : (
      // ---------- ORIGINAL SIDEBAR UI -------------
      <div className="border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden shadow-lg">
        <div className="pt-12 pb-0 px-6">
          <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-normal">
            Quick approval Loan 
          </h2>
        </div>

        <div className="rounded-[60px_16px_16px_16px] p-6 md:p-8 mt-8 flex flex-col gap-16">
          
          {/* Checkbox remains same */}
          <div className="flex items-start gap-3 pr-2 md:pr-6">
            <input
              type="checkbox"
              className="w-5 h-5 mt-0.5 cursor-pointer accent-yellow-400"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="flex-1 text-sm font-normal leading-[18px]">
              <span className="text-gray-400">
                By creating an account you agree<br />
                to our{" "}
              </span>
              <span className="text-yellow-400 cursor-pointer">Terms and Conditions</span>
              <span className="text-gray-400"> and </span>
              <span className="text-yellow-400 cursor-pointer">Privacy Policy</span>
            </div>
          </div>

          {/* APPLY NOW BUTTON — SWITCHES TO FLUTTER */}
          <div className="flex flex-col items-center gap-2.5 py-2.5">
            <button
              onClick={() => setShowFlutter(true)}
              className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer hover:bg-yellow-500"
            >
              Apply Now
            </button>
          </div>

        </div>
      </div>
    )}
  </div>
</div>

    </div>
  );
};

export default FinsbeeSection;

