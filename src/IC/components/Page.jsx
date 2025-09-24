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
    title: "Improved Cash Flow",
    description: "Convert sales into immediate cash without waiting for payment terms",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Maintained Confidentiality",
    description: "The process is discreet — your customer remains unaware of the financing arrangement.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: " No Additional Collateral Needed",
    description: "Your invoices serve as the security, no additional collateral needed",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "Scales With Your Business",
    description: "CFinancing grows as your sales increase without renegotiation",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Flexible Facility",
    description: "Choose which invoices to discount based on your cash flow needs",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Quick Decisions",
    description: "Faster approval compared to traditional bank loans",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is invoice discounting and how does it work?",
    answer: "Invoice discounting is a short-term financing solution where businesses use their unpaid customer invoices to access immediate working capital. You get a percentage (up to 90%) of the invoice value upfront, and the remaining amount is released once your customer makes the payment.",
  },
  {
    id: "item-2",
    question: "Does invoice discounting affect my credit score?",
    answer: "No, invoice discounting is not a loan in the traditional sense, and typically does not impact your credit score unless you default on agreed terms. In fact, consistent usage and repayments may improve your business creditworthiness over time.",
  },
  {
    id: "item-3",
    question: "Is invoice discounting safe and secure?",
    answer: "Yes, invoice discounting through FinsBee is fully compliant, secure, and confidential. All transactions are conducted through verified financial partners and platforms.",
  },
  {
    id: "item-4",
    question: "What fees are involved in invoice discounting?",
    answer: `Fees typically include:
Discounting rate (interest on the advanced amount)
Processing fee (one-time or per invoice)
Late payment penalty (only if customer delays payment)`,
  },
  {
    id: "item-5",
    question: "How long does it take to receive funds?",
    answer: `Once your invoice is verified and approved, funds are usually disbursed to your bank account within 24- 48 hours.`,
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