// "use client";
// // import { useState } from "react";
// import { useState, useEffect, useRef } from "react";
// import Tabs from "./Tabs";
// import WhyFinsbeeContent from "./WhyFinsbee";
// import FaqContent from "./FaqContent";
// import Sidebar from "./Sidebar";

// const whyFinsbeeFeatures = [
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar.png",
//     title: "Overdraft Facility",
//     description: "Access funds from your account beyond the available balance up to a pre-approved limit. Pay interest only on the utilized amount.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
//     title: "Cash Credit",
//     description: "A flexible borrowing option that allows withdrawal of money as per your business requirements within the sanctioned limit.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
//     title: "Short-Term Loan",
//     description: "PSingle disbursal with fixed repayment schedule, ideal for one-time working capital requirements with tenures up to 24 months.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
//     title: "Invoice Financing",
//     description: "Convert your unpaid invoices into immediate working capital. Get up to 80% of invoice value upfront while awaiting customer payments.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
//     title: "Business Line of Credit",
//     description: "Revolving credit facility that offers flexibility to draw and repay funds multiple times without reapplying. Pay interest only on utilized funds.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
//     title: "Purchase Order Financing",
//     description: "Get funds to fulfill customer orders before receiving payment. Ideal for businesses with confirmed purchase orders but limited capital.",
//   },
  
// ];

// const faqItems = [
//   {
//     id: "item-1",
//     question: "What is Working Capital?",
//     answer: "Working capital refers to funds that help your business cover daytoday operational expenses (payroll, inventory, utility bills) and shortterm financial gaps. It ensures smooth business operations even when revenues are delayed.",
//   },
//   {
//     id: "item-2",
//     question: "What is the difference between a term loan and working capital loan?",
//     answer: "Working capital loans are designed for short-term operational needs like inventory purchase, managing cash flow gaps, and day-to-day expenses. Term loans are better suited for long-term investments like equipment purchase or business expansion.",
//   },
//   {
//     id: "item-3",
//     question: " Is working capital funding only for small businesses?",
//     answer: "No. Working capital solutions are suitable for all business sizes — from small retailers to mid-sized manufacturers and service providers. The loan amount and product type are matched to your business profile and financial needs.",
//   },
//   {
//     id: "item-4",
//     question: "Can I increase my credit limit in the future?",
//     answer: "Yes, depending on your repayment track record, business performance, and lender policies, you can request a limit enhancement. Regular reviews may also qualify you for pre-approved limit increases.",
//   },
//   {
//     id: "item-5",
//     question: "What happens if I delay repayment?",
//     answer: `Delays in repayment may lead to:
// Penalties and additional interest
// Negative impact on your credit score
// Reduced chances of getting future funding`,
//   },
// ];



// export default function Home() {
//   const [activeTab, setActiveTab] = useState("why-finsbee");
//   const [expandedFaq, setExpandedFaq] = useState("item-1");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isChecked, setIsChecked] = useState(false);

//   const sectionRefs = {
//     "why-finsbee": useRef(null),
//     faq: useRef(null),
//   };

//   const toggleFaq = (id) => {
//     setExpandedFaq(expandedFaq === id ? null : id);
//   };

//   useEffect(() => {
//     const options = { root: null, threshold: 0.4 };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const id = entry.target.getAttribute("data-tab-id");
//           if (id && id !== activeTab) {
//             setActiveTab(id);
//           }
//         }
//       });
//     }, options);

//     Object.values(sectionRefs).forEach((ref) => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       Object.values(sectionRefs).forEach((ref) => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, [activeTab]);

//   return (
//     <div className="relative flex gap-8 mx-25 py-10 bg-white  ">
//       {/* Main Content */}
//       <div className="w-[788px] flex-1">
//         {/* Sticky Header at top-9 */}
//         {/* Sticky Header */}
// <div className="sticky top-0 pt-10 z-30 bg-white border-b border-purple-100 ">
//   <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
// </div>

// {/* Content Wrapper */}
// <div className="relative z-0 bg-gray-50 border border-purple-100 rounded-b-2xl pt-8 pb-4 px-4 space-y-24">
//   <section
//     ref={sectionRefs["why-finsbee"]}
//     data-tab-id="why-finsbee"
//     className=""
//   >
//     <WhyFinsbeeContent features={whyFinsbeeFeatures} />
//   </section>

//   <section
//     ref={sectionRefs.faq}
//     data-tab-id="faq"
//     className=""
//   >
//     <FaqContent
//       faqItems={faqItems}
//       expandedFaq={expandedFaq}
//       toggleFaq={toggleFaq}
//     />
//   </section>
// </div>

//       </div>

//       {/* Sidebar Sticky at top-0 */}
//       <div className="sticky top-0 pt-9 self-start h-fit">
//         <Sidebar
//           phoneNumber={phoneNumber}
//           setPhoneNumber={setPhoneNumber}
//           isChecked={isChecked}
//           setIsChecked={setIsChecked}
//         />
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from 'next/link';

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
    description: "Single disbursal with fixed repayment schedule, ideal for one-time working capital requirements with tenures up to 24 months.",
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
    answer: "Working capital refers to funds that help your business cover daytoday operational expenses (payroll, inventory, utility bills) and short term financial gaps. It ensures smooth business operations even when revenues are delayed.",
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
Penalties and additional interest, Negative impact on your credit score, Reduced chances of getting future funding`,
  },
];



const howItWorksSteps = [
  {
    number: "1",
    title: "Upload Invoices",
    description:
      "Submit your customer invoices via our secure portal for verification",
  },
  {
    number: "2",
    title: "Quick Verification",
    description:
      "We assess the invoices and evaluate customer creditworthiness within hours.",
  },
  {
    number: "3",
    title: "Immediate Funding",
    description:
      "Receive up to 90% of the invoice value in your bank account within 24 hours.",
  },
  {
    number: "4",
    title: "Settlement of Balance",
    description:
      "Once your customer settles the invoice, you receive the remaining amount (after deducting applicable fees).",
  },
];

const tabs = [
  { id: "why-finsbee", label: "Why Finsbee?" },

  // { id: "what-it-is", label: "What it is?" },
  // { id: "how-it-works", label: "How it Works?" },
    { id: "faqs", label: "FAQ's" },
];

const FinsbeeSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [openFaq, setOpenFaq] = useState(-1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isTabClicked, setIsTabClicked] = useState(false);

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
    <div className="relative flex flex-col lg:flex-row gap-8 px-4 sm:px-8 md:px-16 lg:px-[136px] py-12 md:py-16 lg:py-24 bg-white min-h-screen">
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

            {/* What it is Section */}
            {/* <section
              ref={sectionRefs["what-it-is"]}
              data-tab-id="what-it-is"
              className="p-6 border border-[#eeeaff] rounded-2xl mb-8"
            >
              <h2 className="font-bold text-xl mb-2">
                What is Invoice Discounting?
              </h2>
              <p className="text-gray-500">
                Turn your accounts receivables into cash flow. Invoice
                Discounting lets you unlock funds locked in unpaid invoices, so
                you don't need to wait for customer payments. It's a fast,
                flexible way to meet short-term working capital needs.
              </p>
            </section> */}

            {/* How it Works Section */}
            {/* <section
              ref={sectionRefs["how-it-works"]}
              data-tab-id="how-it-works"
              className="p-6 border border-[#eeeaff] rounded-2xl mb-8"
            >
              <div className="px-4 mb-4">
                <div className="text-xl font-normal text-gray-900 mb-2.5">
                  How it <span className="font-bold">Works?</span>
                </div>
                <div
                  className="w-11 h-px mb-[-1px]"
                  style={{
                    backgroundImage:
                      "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                  }}
                ></div>
              </div>
              {howItWorksSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 py-4">
                  <div className="w-7 h-7 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </section> */}
          </div>
        </div>
      </div>

      {/* ====================== RIGHT SECTION ====================== */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <div className="sticky top-0 pt-2 self-start h-fit w-full max-w-[432px]">
          <div className="border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden shadow-lg">
            <div className="pt-12 pb-0 px-6">
              <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-normal">
                Quick approval Loan
              </h2>
            </div>
            <div className=" rounded-[60px_16px_16px_16px] p-6 md:p-8 mt-8 flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                {/* Phone Input */}
                {/* <div className="flex items-center gap-3 px-3 py-[18px] border border-gray-300 rounded-lg bg-white">
                  <div className="text-base font-normal text-gray-400">+91</div>
                  <div
                    className="w-px h-5"
                    style={{
                      backgroundImage:
                        "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-5.svg')",
                    }}
                  ></div>
                  <input
                    className="flex-1 border-none outline-none bg-transparent text-base font-normal text-gray-600 placeholder-gray-300"
                    type="tel"
                    placeholder="Enter mobile no."
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div> */}

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 pr-2 md:pr-6">
                  <input
                    type="checkbox"
                    className="w-5 h-5 mt-0.5 cursor-pointer accent-yellow-400"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <div className="flex-1 text-sm font-normal leading-[18px]">
                    <span className="text-gray-400">
                      By creating an account you agree
                      <br />
                      to our{" "}
                    </span>
                    <span className="text-yellow-400 cursor-pointer">
                      Terms and Conditions{" "}
                    </span>
                    <span className="text-gray-400">and </span>
                    <span className="text-yellow-400 cursor-pointer">
                      Privacy Policy
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col items-center gap-2.5 py-2.5">
                <div className="flex items-center gap-1.5 px-2.5 py-0.5">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <div className="text-sm font-normal text-gray-400">
                    Finsbee keeps your data safe
                  </div>
                </div>
                <Link href="/flutterapp/index.html" className="w-full">
             <button className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer transition-colors hover:bg-yellow-500">
                    Apply Now
            </button>
          </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinsbeeSection;

