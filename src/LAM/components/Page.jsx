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
    title: "Retain Your Investments",
    description: "Access funds without the need to liquidate your mutual fund holdings. Preserve your investment portfolio and avoid early exit loads while continuing to benefit from market growth.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Competitive Interest Rates",
    description: "Benefit from highly competitive interest rates starting at just 8.75% p.a.—significantly lower than many traditional unsecured loan options.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Flexible Repayment Solutions",
    description: "Tailor your repayment plan to suit your financial needs. Choose between convenient EMIs or a bullet repayment structure, aligned with your cash flow preferences.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "Continued Tax Advantages",
    description: "Enjoy uninterrupted tax benefits associated with your mutual fund investments, even while availing a loan against them.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Minimal Documentation",
    description: "Experience a smooth, paper-light process with minimal documentation requirements. Leverage",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "No End-Use Restrictions",
    description: "Utilise the loan amount for any lawful personal or professional purpose. Whether for business expansion, education, medical needs, or travel—there are no limitations on how you use your funds.",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is the tenure of a Loan Against Mutual Funds?",
    answer: "The tenure for a Loan Against Mutual Funds generally extends up to 12 months; however, it may vary based on the lender's policies and the nature of the mutual funds pledged. Certain lenders may also offer flexibility in the form of renewals or extensions",
  },
  {
    id: "item-2",
    question: "When will I receive the funds after applying for a Loan Against Mutual Funds?",
    answer: "Funds are generally disbursed within 24 to 48 hours after successful verification and lien marking of mutual funds.",
  },
  {
    id: "item-3",
    question: "Is it possible to make a part prepayment/foreclosure before the end of the loan tenure?",
    answer: "Yes, you can make a part prepayment of the amount utilised from the limit anytime, without incurring any charges.",
  },
  {
    id: "item-4",
    question: "What is the interest rate of Loan Against Mutual Funds?",
    answer: "The rate is 8.00% - 12.00% per annum if you take a Loan Against Mutual Funds from Finsbee.",
  },
  {
    id: "item-5",
    question: "Do applicants need to submit the physical documents of mutual fund holdings?",
    answer: `Sometimes, physical documents are required, but digital copies of your statements are often enough for loan providers to evaluate your funds.`,
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