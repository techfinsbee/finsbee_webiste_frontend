"use client";

import { useState, useEffect, useRef } from "react";
import Tabs from "./Tabs";
import WhyFinsbeeContent from "./WhyFinsbee";
import FaqContent from "./FaqContent";
import Sidebar from "./Sidebar";

const whyFinsbeeFeatures = [
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar.png",
    title: "Unsecured Funding Options",
    description: "Get approved without pledging physical collateral based on business strength",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Fully Digital Process",
    description: "Complete the application to disbursal journey entirely online.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "End-Use Flexibility",
    description: "Use funds for expansion, equipment, inventory, working capital or refinancing",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "Minimal Documentation",
    description: "Streamlined paperwork requirements focused on essential business documents",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Competitive Interest Rates",
    description: "Attractive rates based on business vintage, turnover and credit history",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Dedicated Relationship Manager",
    description: "Personalized support throughout the application and loan tenure",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is a business loan and how can it help me?",
    answer: "A business loan is a type of financing that helps entrepreneurs and companies meet short-term or long-term capital needs. You can use it for business expansion, buying equipment, increasing inventory, covering working capital, or refinancing existing debt.",
  },
  {
    id: "item-2",
    question: ".What is the loan amount I can get through FinsBee?",
    answer: "You can avail business loans starting from ₹1 Lakh and up to ₹2 Crore, depending on your eligibility, business turnover, and credit profile.",
  },
  {
    id: "item-3",
    question: "How long does it take to get a Business loan approved?",
    answer: "With FinsBee’s fully digital process, business loan applications are typically processed within 3 to 5 working days, subject to the submission of all required documents. Upon approval, loan disbursement is completed within 24 to 48 hours.",
  },
  {
    id: "item-4",
    question: "Can I repay the loan early? Is there a prepayment charge?",
    answer: "Many of our lending partners allow prepayment or foreclosure, but terms vary by lender. Some charge a small fee, while others allow early repayment after a few EMIs without penalties.",
  },
  {
    id: "item-5",
    question: "How is the interest rate determined?",
    answer: `Interest rates are based on several factors including:
   • Business vintage
   • Annual turnover
   • Credit score of the owner or company
   • Loan amount and tenure`,
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