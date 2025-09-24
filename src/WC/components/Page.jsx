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
    title: "Overdraft Facility",
    description: "Access funds from your account beyond the available balance up to a pre-approved limit. Pay interest only on the utilized amount.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Cash Credit",
    description: "A flexible borrowing option that allows withdrawal of money as per your business requirements within the sanctioned limit.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Short-Term Loan",
    description: "PSingle disbursal with fixed repayment schedule, ideal for one-time working capital requirements with tenures up to 24 months.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "Invoice Financing",
    description: "Convert your unpaid invoices into immediate working capital. Get up to 80% of invoice value upfront while awaiting customer payments.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Business Line of Credit",
    description: "Revolving credit facility that offers flexibility to draw and repay funds multiple times without reapplying. Pay interest only on utilized funds.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Purchase Order Financing",
    description: "Get funds to fulfill customer orders before receiving payment. Ideal for businesses with confirmed purchase orders but limited capital.",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is Working Capital?",
    answer: "Working capital refers to funds that help your business cover daytoday operational expenses (payroll, inventory, utility bills) and shortterm financial gaps. It ensures smooth business operations even when revenues are delayed.",
  },
  {
    id: "item-2",
    question: "What is the difference between a term loan and working capital loan?",
    answer: "Working capital loans are designed for short-term operational needs like inventory purchase, managing cash flow gaps, and day-to-day expenses. Term loans are better suited for long-term investments like equipment purchase or business expansion.",
  },
  {
    id: "item-3",
    question: " Is working capital funding only for small businesses?",
    answer: "No. Working capital solutions are suitable for all business sizes — from small retailers to mid-sized manufacturers and service providers. The loan amount and product type are matched to your business profile and financial needs.",
  },
  {
    id: "item-4",
    question: "Can I increase my credit limit in the future?",
    answer: "Yes, depending on your repayment track record, business performance, and lender policies, you can request a limit enhancement. Regular reviews may also qualify you for pre-approved limit increases.",
  },
  {
    id: "item-5",
    question: "What happens if I delay repayment?",
    answer: `Delays in repayment may lead to:
Penalties and additional interest
Negative impact on your credit score
Reduced chances of getting future funding`,
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