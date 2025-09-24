"use client";
// import { useState } from "react";
import { useState, useEffect, useRef } from "react";
import Tabs from "./Tabs";
import WhyFinsbeeContent from "./WhyFinsbee";
import FaqContent from "./FaqContent";
import Sidebar from "./Sidebar";
// import "../styles/index.css";

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
    description: "CRepay at your convenience with flexible loan tenures ranging from 1 to 5 years, tailored to suit your financial goals.",
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