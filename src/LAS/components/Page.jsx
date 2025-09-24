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
    title: "No Stock Sale Required",
    description: "Access funds without selling your shares, preserving your investment strategy.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Lower Interest Rates",
    description: "Enjoy rates starting from 9.00% p.a., significantly lower than typical unsecured loans.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Digital Pledge Process",
    description: "Pledge your stocks online with no physical paperwork.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "Avoid Capital Gains Tax",
    description: "Since you don’t sell your shares, you avoid immediate capital gains tax liabilities.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Flexible Repayment Options",
    description: "Choose from EMI plans or pay interest-only with principal repayment at maturity.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Minimal Income Proof",
    description: "Loans are primarily based on your stock portfolio value, requiring minimal income documentation.",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: " What is a Loan Against Stocks?",
    answer: "A Loan Against Stocks (LAS) allows you to pledge your shares as collateral and receive a loan while still retaining ownership and potential market gains.",
  },
  {
    id: "item-2",
    question: "How much loan can I get against my stocks?",
    answer: "You can borrow up to 60% of the market value of your approved stock portfolio, ranging from ₹2 lakhs to ₹1 crore, depending on the quality of stocks and market conditions.",
  },
  {
    id: "item-3",
    question: "Do I need to sell my shares to get the loan?",
    answer: "No. Your shares remain in your demat account under a pledge. You continue to enjoy dividends and market appreciation.",
  },
  {
    id: "item-4",
    question: "What is the interest rate for a Loan Against Stocks?",
    answer: "Interest rates start at 9.00% p.a. and vary based on the value and type of stocks pledged.",
  },
  {
    id: "item-5",
    question: "What happens if stock prices fluctuate?",
    answer: `The loan amount is secured against the value of your stocks. If market prices drop significantly, you may be required to add more collateral or repay part of the loan to maintain the required margin.`,
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