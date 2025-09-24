"use client";
// import { useState } from "react";
import { useState, useEffect, useRef } from "react";
import Tabs from "./Tabs";
import WhyFinsbeeContent from "./WhyFinsbee";
import FaqContent from "./FaqContent";
import Sidebar from "./Sidebar";

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
    answer:  `Yes. What types of properties are eligible for LAP transfer? Generally accepted property types:
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



export default function Home() {
  const [activeTab, setActiveTab] = useState("why-finsbee");
  const [expandedFaq, setExpandedFaq] = useState("item-1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const sectionRefs = {
    "why-finsbee": useRef(null),
    faq: useRef(null),
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  useEffect(() => {
    const options = { root: null, threshold: 0.4 };

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
    <div className="relative flex gap-8 mx-25 py-10 bg-white  ">
      {/* Main Content */}
      <div className="w-[788px] flex-1">
        {/* Sticky Header at top-9 */}
        {/* Sticky Header */}
<div className="sticky top-0 pt-10 z-30 bg-white border-b border-purple-100 ">
  <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
</div>

{/* Content Wrapper */}
<div className="relative z-0 bg-gray-50 border border-purple-100 rounded-b-2xl pt-8 pb-4 px-4 space-y-24">
  <section
    ref={sectionRefs["why-finsbee"]}
    data-tab-id="why-finsbee"
    className=""
  >
    <WhyFinsbeeContent features={whyFinsbeeFeatures} />
  </section>

  <section
    ref={sectionRefs.faq}
    data-tab-id="faq"
    className=""
  >
    <FaqContent
      faqItems={faqItems}
      expandedFaq={expandedFaq}
      toggleFaq={toggleFaq}
    />
  </section>
</div>

      </div>

      {/* Sidebar Sticky at top-0 */}
      <div className="sticky top-0 pt-9 self-start h-fit">
        <Sidebar
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
    </div>
  );
}