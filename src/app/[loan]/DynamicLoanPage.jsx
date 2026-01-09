


"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

// Import your centralized data
import { loansData } from "@/data/loansData";
import { loanEligibilityDocuments } from "@/data/loanEligibilityDocuments";

const ActionButton = ({ onClick, children, iconSrc }) => (
  <button
    onClick={onClick}
    className="flex flex-col h-6 items-start cursor-pointer  gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors"
  >
    <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mb-[-1.00px]">
      <div className="inline-flex items-center justify-end gap-3 relative border-b-2 border-[#ffc73c]">
        <span className="relative text-yellow-400 font-bold">{children}</span>
      </div>
      <img
        className="absolute w-3 h-3 top-0.5 -left-5"
        alt="Arrow"
        src={iconSrc}
      />
    </div>
  </button>
);

// ==================== DYNAMIC ELIGIBILITY MODAL ====================
const DynamicEligibility = ({ onClose, loanSlug }) => {
  const rawEligibility = loanEligibilityDocuments[loanSlug]?.eligibility || {};

  const eligibilityCriteria = Object.entries(rawEligibility).map(([title, criteria]) => {
    const imageMap = {
      "For Salaried Individuals": "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
      "For Self-Employed Individuals": "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
      "For Proprietary / Partnership Firms": "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
      "For Private Limited Companies": "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
      "Eligibility Criteria": "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
    };

    return {
      title,
      image: imageMap[title] || "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
      criteria,
    };
  });

  if (eligibilityCriteria.length === 0) return null;

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full h-[90vh] overflow-y-auto relative">
        {/* <button
          onClick={onClose}
          className=" sticky top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
          aria-label="Close eligibility modal"
        >
          ✕
        </button> */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
          aria-label="Close eligibility modal"
        >
          ✕
        </button>

        <div className="h-full">
          <section className="flex flex-col items-center gap-12 px-6 md:px-12 py-16">
            <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
              <p className="text-gray-600 font-bold text-sm tracking-wide uppercase">
                The Results Speak for Themselves
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800">
                Eligibility Criteria
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
              {eligibilityCriteria.map((section) => (
                <div
                  key={section.title}
                  className="flex-1 bg-white p-6 rounded-lg lg:rounded-none lg:first:rounded-l-lg lg:last:rounded-r-lg lg:[&:not(:first-child)]:border-l lg:border-dashed lg:border-gray-300"
                >
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                    <div className="flex flex-col gap-6 flex-1">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-800">
                        {section.title}
                      </h2>
                      <ul className="flex flex-col gap-4">
                        {section.criteria.map((criterion, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-gray-800 flex-shrink-0" />
                            <span className="text-gray-800 text-base">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-52 md:h-52 object-cover rounded-lg"
                        alt={`Illustration for ${section.title}`}
                        src={section.image}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

// ==================== DYNAMIC DOCUMENT MODAL ====================
const DynamicDocumentRequired = ({ onClose, loanSlug }) => {
  const docs = loanEligibilityDocuments[loanSlug]?.documents || {};
  const hasSalaried = !!docs.salaried;
  const hasSelfEmployed = !!docs.selfEmployed;

  if (!hasSalaried && !hasSelfEmployed) return null;

  const DocumentSection = ({ title, categories }) => (
    <div>
      <p className="text-gray-600 font-bold text-sm underline py-4 tracking-wide uppercase text-center">
        {title}
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full">
        {Object.entries(categories).map(([category, items], index) => (
          <div
            key={category}
            className={`flex-1 p-6 rounded-lg lg:rounded-none ${
              index > 0 ? "lg:border-l border-dashed border-gray-300" : ""
            }`}
          >
            <h2 className="text-lg sm:text-xl font-normal text-gray-800 mb-6">
              {category}
            </h2>
            <ul className="flex flex-col gap-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-yellow-400 text-white rounded-full flex items-center justify-center text-sm">
                    ✔
                  </span>
                  <span className="text-base text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed inset-0  z-50 flex items-center justify-center p-4"
    >
      <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full h-[90vh] overflow-y-auto relative">
        {/* <button
          onClick={onClose}
          className="sticky top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
          aria-label="Close document modal"
        >
          ✕
        </button> */}

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl z-10"
          aria-label="Close eligibility modal"
        >
          ✕
        </button>

        <div className="h-full">
          <section className="flex flex-col items-center px-6 md:px-12 py-16">
            <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Document Required
              </h1>
            </div>

            {hasSalaried && (
              <DocumentSection
                title={hasSelfEmployed ? "For Salaried Individuals" : ""}
                categories={docs.salaried}
              />
            )}

            {hasSelfEmployed && (
              <DocumentSection
                title="For Self-Employed Individuals"
                categories={docs.selfEmployed}
              />
            )}
          </section>
        </div>
      </div>
    </motion.div>
  );
};


const DynamicLoanPage = ({ loanSlug }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Dynamic title
  const urlTitle = searchParams.get("title");
  const displayTitle = urlTitle ? decodeURIComponent(urlTitle) : null;

  // Dynamic background from URL
  const urlBg = searchParams.get("bg");  // e.g., "city/bangalore.webp"

  // Get base loan data
  const data = loansData[loanSlug] || loansData["personal-loan"];
  const finalTitle = displayTitle || data.title;

  // Determine final background image path
  // const heroBgImage = urlBg 
  //   ? `/${urlBg}` 
  //   : (data.backgroundImage ? `/${data.backgroundImage.replace(/^\//, '')}` : '/landing_page/bg.webp');
  const heroBgImage = urlBg 
  ? `/${urlBg}?v=${Date.now()}`  // forces fresh load, remove later
  : (data.backgroundImage ? `/${data.backgroundImage.replace(/^\//, '')}` : '/landing_page/bg.webp');

  // Auto apply from URL
  const autoApply = searchParams.get("autoApply");

  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTitle, setOverlayTitle] = useState("");
  const [activeTab, setActiveTab] = useState("why-finsbee");
  const [openFaq, setOpenFaq] = useState(-1);
  const [showFlutter, setShowFlutter] = useState(false);
  const [isTabClicked, setIsTabClicked] = useState(false);

  const sidebarRef = useRef(null);
  const headerRef = useRef(null);

  const sectionRefs = {
    "why-finsbee": useRef(null),
    faqs: useRef(null),
  };

  const tabs = [
    { id: "why-finsbee", label: "Why Finsbee?" },
    { id: "faqs", label: "FAQ's" },
  ];

  useEffect(() => {
    if (autoApply === "true") {
      setShowFlutter(true);
      setTimeout(() => {
        sidebarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    }
  }, [autoApply]);

  const handleTabClick = (tabId) => {
    const targetRef = sectionRefs[tabId];
    if (targetRef?.current && headerRef?.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height || 56;
      const elementTop = targetRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - headerHeight - 10, behavior: "smooth" });
      setActiveTab(tabId);
      setIsTabClicked(true);
      setTimeout(() => setIsTabClicked(false), 1000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTabClicked) {
            const id = entry.target.getAttribute("data-tab-id");
            if (id) setActiveTab(id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [isTabClicked]);

  const handleOpen = (title) => {
    if (["Eligibility Criteria", "Document Required"].includes(title)) {
      setOverlayTitle(title);
      setShowOverlay(true);
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setOverlayTitle("");
  };

  return (
    <>
      {/* HERO SECTION */}
       <div
  className="flex flex-col h-[43rem] sm:h-[40rem] md:h-[48rem] lg:h-[600px]
    items-start gap-10 sm:gap-20 md:gap-[150px]
    pt-20 sm:pt-28 md:pt-40
    relative self-stretch w-full
    rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-[0px_0px_120px_120px]"
  style={{
    backgroundImage: `
      radial-gradient(100% 100% at 50% 100%, rgba(89,46,255), rgba(49,25,140,0.7) 100%),
      url('${heroBgImage}')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
   
        <main className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-12 lg:px-32 py-8 lg:py-12 relative w-full">
          <div className="flex flex-col items-center gap-12 relative flex-1">
            <div className="flex flex-col  lg:flex-row items-start justify-between relative w-full">
              <section className="flex flex-col w-full lg:w-[650px] items-start relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                <h1 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl md:text-6xl text-start leading-normal lg:leading-20 tracking-[0px] whitespace-pre-line">
                  {finalTitle}
                </h1>
                <p className="text-[#FFEEC3] md:pt-2 text-lg md:text-xl">{data.heroDescription}</p>
              </section>

              <aside className="flex flex-col w-full lg:w-[471px] items-start gap-3.5 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
                <div className="flex flex-col lg:flex-row flex-wrap items-start justify-between relative w-full">
                  <div className="flex flex-col items-start gap-3.5 relative flex-1">
                    {data.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 font-extralight text-white py-0 relative w-full">
                        <img className="w-6 h-6" alt="Tick" src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg" />
                        <span className="flex-1 text-[#FFEEC3]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-start justify-between relative flex-1">
                    <div className="flex flex-col items-start gap-4 pt-2 relative w-full">
                      <ActionButton onClick={() => handleOpen("Eligibility Criteria")} iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg">
                        Check Eligibility Criteria
                      </ActionButton>
                      <ActionButton onClick={() => handleOpen("Document Required")} iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg">
                        Check Document Required
                      </ActionButton>
                    </div>

                    <div className="flex items-center justify-around p-5 relative w-full">
                      <button
                        onClick={() => router.push(data.emiRoute || "/personal-loan/pl_Emi")}
                        className="inline-flex items-center cursor-pointer bg-yellow-400 justify-center gap-2.5 px-7 py-4 rounded-[28px] border border-solid border-[#ffe5a5] hover:bg-yellow-500 transition-colors"
                      >
                        <span className="font-bold text-gray-800 ">Calculate EMI</span>
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>

      {/* BENEFIT CARDS */}
      <section className="flex flex-col items-center gap-2.5 px-4 sm:px-8 md:px-[136px] py-0 w-full mt-5 lg:mt-[-60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 w-full rounded-[20px] lg:rounded-[28px_28px_0px_0px] shadow-[0px_-12px_11px_#00000026] bg-[linear-gradient(180deg,rgba(255,238,195,1)_0%,rgba(250,250,250,0)_100%)] bg-white border-0">
            {data.benefitCards.map((card, index) => (
              <div
                key={card.title}
                className={`flex flex-col items-start justify-center gap-2 p-4 sm:p-6 w-full sm:w-[48%] md:w-[45%] lg:flex-1 h-auto ${
                  index < data.benefitCards.length - 1
                    ? "lg:border-r lg:[border-right-style:solid] lg:border-[#ffd97c]"
                    : ""
                }`}
              >
                <img className="w-10 h-10 sm:w-12 sm:h-12" alt={card.title} src={card.icon} />
                <h3 className="font-bold text-[#212121] text-lg sm:text-xl">{card.title}</h3>
                <p className="text-[#555] text-sm sm:text-base leading-snug">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FINSBEE + FAQ SECTION */}
      <div className="relative flex flex-col-reverse lg:flex-row gap-8 sm:px-8 md:px-16 lg:px-[136px] py-12 md:py-16 lg:py-24 bg-white min-h-screen">
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col items-start w-full">
            <div ref={headerRef} className="sticky top-0 z-30 w-full bg-white border-b border-[#bababa] overflow-hidden pt-2">
              <div className="flex w-full overflow-hidden">
                {tabs.map((tab, index, arr) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex-1 h-14 px-3 py-4 font-bold text-base bg-white transition-colors duration-300 
                      ${activeTab === tab.id ? "bg-yellow-400 text-gray-900" : "text-gray-400 bg-white hover:text-gray-700"}
                      ${index === 0 ? "rounded-tl-[40px]" : ""}
                      ${index === arr.length - 1 ? "rounded-tr-[40px]" : ""}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full pt-16">
              {/* Why Finsbee */}
              <section ref={sectionRefs["why-finsbee"]} data-tab-id="why-finsbee" className="pt-4 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8">
                <div className="px-4 mb-4">
                  <div className="text-xl font-normal text-gray-900 mb-2.5">
                    Why <span className="font-bold">Finsbee?</span>
                  </div>
                  <div className="w-11 h-px mb-[-1px]" style={{ backgroundImage: "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')" }}></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-center md:justify-start gap-4 md:px-4 mb-4">
                  {data.whyFinsbeeFeatures.map((feature, i) => (
                    <div key={i} className="w-full h-full">
                      <div className="flex flex-col items-start gap-2 p-4 h-full">
                        <img className="w-12 h-12 object-cover" alt={feature.title} src={feature.icon} />
                        <h3 className="font-bold text-base">{feature.title}</h3>
                        <p className="font-normal text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section ref={sectionRefs.faqs} data-tab-id="faqs" className="flex flex-col gap-2 pt-8 pb-4 px-4 border border-[#eeeaff] rounded-2xl mb-8">
                <div className="px-4 mb-4">
                  <div className="text-xl font-normal text-gray-900 mb-2.5">
                    <span className="font-bold">FAQ's</span>
                  </div>
                  <div className="w-11 h-px mb-[-1px]" style={{ backgroundImage: "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')" }}></div>
                </div>
                {data.faqItems.map((faq, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className={`w-full flex items-center justify-between gap-6 px-4 sm:px-6 py-4 sm:py-6 bg-primary-light rounded-xl border transition-all ${
                        openFaq === index ? "border-[#b39fff] shadow-md rounded-b-none" : "border-[#592eff33]"
                      }`}
                    >
                      <h3 className={`font-bold text-base ${openFaq === index ? "text-purple-600" : "text-gray-600"}`}>
                        {faq.question}
                      </h3>
                      <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === index && (
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

        {/* SIDEBAR - APPLY NOW */}
        <div ref={sidebarRef} className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <div className="sticky top-0 pt-2 self-start h-fit w-full max-w-[432px]">
            {showFlutter ? (
              <div className="w-full h-[90vh] border-[6px] border-yellow-400 rounded-2xl overflow-hidden">
                <iframe src="/flutterapp/index.html#/minified:p3" className="w-full h-full border-0" />
              </div>
            ) : (
              <div className="border-[6px] border-yellow-400 rounded-2xl bg-white overflow-hidden shadow-lg">
                <div className="pt-12 pb-0 px-6">
                  <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 leading-normal">
                    Quick approval Loan
                  </h2>
                </div>
                <div className="rounded-[60px_16px_16px_16px] p-6 md:p-8 mt-8 flex flex-col gap-16">
                  <div className="flex flex-col items-center gap-2.5 py-2.5">
                    <button
                      onClick={() => setShowFlutter(true)}
                      className="w-full px-7 py-4 bg-yellow-400 border border-yellow-200 cursor-pointer rounded-lg text-base font-bold text-gray-900 hover:bg-yellow-500"
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

      {/* MODALS - NOW WORKING CORRECTLY */}
      <AnimatePresence>
        {showOverlay && overlayTitle === "Eligibility Criteria" && (
          <DynamicEligibility onClose={closeOverlay} loanSlug={loanSlug} />
        )}
        {showOverlay && overlayTitle === "Document Required" && (
          <DynamicDocumentRequired onClose={closeOverlay} loanSlug={loanSlug} />
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicLoanPage;