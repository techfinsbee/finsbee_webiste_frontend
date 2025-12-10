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
//     title: "Retain Your Investments",
//     description: "Access funds without the need to liquidate your mutual fund holdings. Preserve your investment portfolio and avoid early exit loads while continuing to benefit from market growth.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
//     title: "Competitive Interest Rates",
//     description: "Benefit from highly competitive interest rates starting at just 8.75% p.a.—significantly lower than many traditional unsecured loan options.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
//     title: "Flexible Repayment Solutions",
//     description: "Tailor your repayment plan to suit your financial needs. Choose between convenient EMIs or a bullet repayment structure, aligned with your cash flow preferences.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
//     title: "Continued Tax Advantages",
//     description: "Enjoy uninterrupted tax benefits associated with your mutual fund investments, even while availing a loan against them.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
//     title: "Minimal Documentation",
//     description: "Experience a smooth, paper-light process with minimal documentation requirements. Leverage",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
//     title: "No End-Use Restrictions",
//     description: "Utilise the loan amount for any lawful personal or professional purpose. Whether for business expansion, education, medical needs, or travel—there are no limitations on how you use your funds.",
//   },
  
// ];

// const faqItems = [
//   {
//     id: "item-1",
//     question: "What is the tenure of a Loan Against Mutual Funds?",
//     answer: "The tenure for a Loan Against Mutual Funds generally extends up to 12 months; however, it may vary based on the lender's policies and the nature of the mutual funds pledged. Certain lenders may also offer flexibility in the form of renewals or extensions",
//   },
//   {
//     id: "item-2",
//     question: "When will I receive the funds after applying for a Loan Against Mutual Funds?",
//     answer: "Funds are generally disbursed within 24 to 48 hours after successful verification and lien marking of mutual funds.",
//   },
//   {
//     id: "item-3",
//     question: "Is it possible to make a part prepayment/foreclosure before the end of the loan tenure?",
//     answer: "Yes, you can make a part prepayment of the amount utilised from the limit anytime, without incurring any charges.",
//   },
//   {
//     id: "item-4",
//     question: "What is the interest rate of Loan Against Mutual Funds?",
//     answer: "The rate is 8.00% - 12.00% per annum if you take a Loan Against Mutual Funds from Finsbee.",
//   },
//   {
//     id: "item-5",
//     question: "Do applicants need to submit the physical documents of mutual fund holdings?",
//     answer: `Sometimes, physical documents are required, but digital copies of your statements are often enough for loan providers to evaluate your funds.`,
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
import { useSearchParams } from "next/navigation";

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
  { id: "faqs", label: "FAQ's" },
  // { id: "what-it-is", label: "What it is?" },
  // { id: "how-it-works", label: "How it Works?" },
];

const FinsbeeSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [openFaq, setOpenFaq] = useState(-1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isTabClicked, setIsTabClicked] = useState(false);
const [showFlutter, setShowFlutter] = useState(false);
 const searchParams = useSearchParams();
 const autoApply = searchParams.get("autoApply");
 
 const sidebarRef = useRef(null);
 
 useEffect(() => {
   if (autoApply === "true") {
     setShowFlutter(true);
 
     setTimeout(() => {
       if (sidebarRef.current) {
         sidebarRef.current.scrollIntoView({
           behavior: "smooth",
           block: "start",
         });
       }
     }, 300);
   }
 }, [autoApply]);
 



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
    <div className="relative flex flex-col-reverse lg:flex-row gap-8  sm:px-8 md:px-16 lg:px-[136px] py-12 md:py-16 lg:py-24 bg-white min-h-screen">
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
   <div ref={sidebarRef} className="w-full lg:w-1/3 flex justify-center lg:justify-end">
  <div className="sticky top-0 pt-2 self-start h-fit w-full max-w-[432px]">
    
    {showFlutter ? (
      // -------- SHOW FLUTTER APP HERE ------------
      <div className="w-full h-[90vh] border-[6px] border-yellow-400 rounded-2xl overflow-hidden">
        <iframe
          src="/flutterapp/index.html#/minified:p3"
          className="w-full h-full border-0"
        />
      </div>
    ) : (
      // ---------- ORIGINAL SIDEBAR UI -------------
      <div className="border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden shadow-lg">
        <div className="pt-12 pb-0 px-6">
          <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-normal">
            Quick approval Loan 
          </h2>
        </div>

        <div className="rounded-[60px_16px_16px_16px] p-6 md:p-8 mt-8 flex flex-col gap-16">
          
          {/* Checkbox remains same */}
          
          {/* APPLY NOW BUTTON — SWITCHES TO FLUTTER */}
          <div className="flex flex-col items-center gap-2.5 py-2.5">
            <button
              onClick={() => setShowFlutter(true)}
              className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer hover:bg-yellow-500"
            >
              Apply Now
            </button>
          </div>

        </div>
      </div>
    )}
  </div>
</div>

    </div>
  );
};

export default FinsbeeSection;

