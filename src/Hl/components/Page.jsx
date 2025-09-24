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
    title: "Fast-Track Loan Approvals",
    description: "Experience a quick and hassle-free approval process — get your home loan sanctioned in as little as 3 working days, subject to document verification.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
    title: "Transparent Fee Structure",
    description: "We maintain 100% transparency — no hidden charges or surprise costs. Everything is clearly communicated from day one.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
    title: "Tailored Home Loan Options",
    description: "Whether you’re buying a ready-to-move-in property, investing in an under-construction project, purchasing a residential plot— we’ve got the right loan for you.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
    title: "Simplified Documentation Process",
    description: "Enjoy a minimal documentation journey with the convenience of digital document uploads, making the process smooth and efficient.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
    title: "Doorstep Assistance at Your Convenience",
    description: "Our team offers doorstep document pickup and verification, so you don’t have to visit branches or offices. We come to you.",
  },
  {
    icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
    title: "Dedicated Relationship Manager",
    description: "Benefit from personalized guidance through a dedicated manager who supports you from application to final disbursal, ensuring a stress-free experience.",
  },
  
];

const faqItems = [
  {
    id: "item-1",
    question: "What is a home loan?",
    answer: "A home loan is a type of financial product offered by banks and lending institutions that allows individuals to borrow money to purchase, construction, or renovation of a residential property.",
  },
  {
    id: "item-2",
    question: "What types of properties are eligible for home loans?",
    answer: "Home loans can be availed for ready-to-move-in properties, under-construction properties, plots, and sometimes for home renovation or improvement",
  },
  {
    id: "item-3",
    question: "What is loan-to-value (LTV) ratio in home loans?",
    answer: "LTV is the maximum loan amount a bank or lender can sanction against the property value. RBI guidelines allow up to 90% LTV for loans up to ₹30 lakh and up to 80% for loans above ₹75 lakh.",
  },
  {
    id: "item-4",
    question: "What is a processing fee?",
    answer: "It is a one-time fee charged by the lender to process your home loan application, usually ranging from 0.25% to 4% of the loan amount.",
  },
  {
    id: "item-5",
    question: "How long does it take to get a home loan approved?",
    answer: `Approval time varies from 3 days to 2 weeks depending on documentation and lender processes`,
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