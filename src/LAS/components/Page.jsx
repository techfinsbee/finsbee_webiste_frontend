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
//     title: "No Stock Sale Required",
//     description: "Access funds without selling your shares, preserving your investment strategy.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-1.png",
//     title: "Lower Interest Rates",
//     description: "Enjoy rates starting from 9.00% p.a., significantly lower than typical unsecured loans.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-2.png",
//     title: "Digital Pledge Process",
//     description: "Pledge your stocks online with no physical paperwork.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-3.png",
//     title: "Avoid Capital Gains Tax",
//     description: "Since you don’t sell your shares, you avoid immediate capital gains tax liabilities.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-4.png",
//     title: "Flexible Repayment Options",
//     description: "Choose from EMI plans or pay interest-only with principal repayment at maturity.",
//   },
//   {
//     icon: "https://c.animaapp.com/mfnnsr9tKgXFn5/img/user-avatar-5.png",
//     title: "Minimal Income Proof",
//     description: "Loans are primarily based on your stock portfolio value, requiring minimal income documentation.",
//   },
  
// ];

// const faqItems = [
//   {
//     id: "item-1",
//     question: " What is a Loan Against Stocks?",
//     answer: "A Loan Against Stocks (LAS) allows you to pledge your shares as collateral and receive a loan while still retaining ownership and potential market gains.",
//   },
//   {
//     id: "item-2",
//     question: "How much loan can I get against my stocks?",
//     answer: "You can borrow up to 60% of the market value of your approved stock portfolio, ranging from ₹2 lakhs to ₹1 crore, depending on the quality of stocks and market conditions.",
//   },
//   {
//     id: "item-3",
//     question: "Do I need to sell my shares to get the loan?",
//     answer: "No. Your shares remain in your demat account under a pledge. You continue to enjoy dividends and market appreciation.",
//   },
//   {
//     id: "item-4",
//     question: "What is the interest rate for a Loan Against Stocks?",
//     answer: "Interest rates start at 9.00% p.a. and vary based on the value and type of stocks pledged.",
//   },
//   {
//     id: "item-5",
//     question: "What happens if stock prices fluctuate?",
//     answer: `The loan amount is secured against the value of your stocks. If market prices drop significantly, you may be required to add more collateral or repay part of the loan to maintain the required margin.`,
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

const howItWorksSteps = [
  {
    number: "1",
    title: "Apply Online",
    description:
      "Fill in your basic details and provide your demat account information.",
  },
  {
    number: "2",
    title: "Digital Verification",
    description:
      "Complete a quick KYC and portfolio evaluation.",
  },
  {
    number: "3",
    title: "Online Pledge",
    description:
      "Pledge your approved stocks digitally without paperwork",
  },
  {
    number: "4",
    title: "Loan Disbursement",
    description:
      "Get funds transferred directly to your bank account within 24–48 hours.",
  },
];
const payingToMuch = [
  {
    number: "1",
    title: "Business expansion or working capital",
    description:
      "Fill in your basic details and provide your demat account information.",
  },
  {
    number: "2",
    title: "Home renovation or big-ticket purchases",
    description:
      "Complete a quick KYC and portfolio evaluation.",
  },
  {
    number: "3",
    title: "Medical emergencies",
    description:
      "Pledge your approved stocks digitally without paperwork",
  },
  {
    number: "4",
    title: "Education or travel expenses",
    description:
      "Get funds transferred directly to your bank account within 24–48 hours.",
  },
];

const tabs = [
  { id: "why-finsbee", label: "Why Finsbee?" },
  
  // { id: "what-it-is", label: "What it is?" },
  { id: "how-it-works", label: "How it Works?" },
  { id: "Ideal-Uses", label: "Ideal Uses of Loan Against Stocks" },
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
    "what-it-is": useRef(null),
    "how-it-works": useRef(null),
    "Ideal-Uses": useRef(null),
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
                    className={`flex-1  px-3 py-4 font-bold text-base bg-white transition-colors duration-300 
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
            <section
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
                    <h3 className="text-gray-500">{step.title}</h3>
                    {/* <p className="text-gray-500">{step.description}</p> */}
                  </div>
                </div>
              ))}
            </section>

             {/* What it is Section */}
            <section
              ref={sectionRefs["Ideal-Uses"]}
              data-tab-id="Ideal-Uses"
              className="p-6 border border-[#eeeaff] rounded-2xl mb-8"
            >
              <div className="px-4 mb-4">
                <div className="text-xl font-normal text-gray-900 mb-2.5">
                  Paying Too Much  <span className="font-bold">Interest?</span>
                </div>
                <div
                  className="w-11 h-px mb-[-1px]"
                  style={{
                    backgroundImage:
                      "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
                  }}
                ></div>

                 <p className="text-gray-500 pt-5">Use the funds for multiple purposes such as:.</p>
              </div>
              {payingToMuch.map((step, i) => (
                <div key={i} className="flex items-start gap-3 py-4">
                  <div>
                    
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center bg-purple-600 rounded-full text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                   
                    <h3 className="text-gray-500">{step.title}</h3>
                    {/* <p className="text-gray-500">{step.description}</p> */}
                  </div>
                </div>
              ))}
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
                <div className="flex items-center gap-3 px-3 py-[18px] border border-gray-300 rounded-lg bg-white">
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
                </div>

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
                         <a
            href="https://play.google.com/store/apps/details?id=com.finsbee.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
             <button className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 rounded-lg text-base font-bold text-gray-900 cursor-pointer transition-colors hover:bg-yellow-500">
                    Apply Now
            </button>
          </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinsbeeSection;

