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