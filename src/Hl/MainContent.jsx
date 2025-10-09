"use client";
import React, { useState } from "react";
import { features } from "./Constant"; // Ensure this file exists and exports an array
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

import { useRouter } from "next/navigation";

// Reusable button component for MainContent
const ActionButton = ({ onClick, children, iconSrc }) => (
  <button
    onClick={onClick}
    className="flex flex-col h-6 items-start gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors"
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

const Eligibility = ({ onClose }) => {
  const eligibilityCriteria = [
    {
      title: "For Salaried Individuals",
      image: "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager.png",
      criteria: [
        "Age: Between 21 and 60 years",
        "Income: Minimum monthly  ₹25,000 ",
        "Employment Stability: Minimum 1 year of continuous employment (6 months in current job preferred)",
        "CIBIL Score: 700+",
      ],
    },
    {
      title: "For Self-Employed Individuals",
      image: "https://c.animaapp.com/mfwi9k86KhnY9k/img/manager-1.png",
      criteria: [
        "Age: Between 23 to 65 years ",
        "Business Vintage: Minimum of 3 to 5 years of continuous and stable business operations",
        "Annual Income: minimum income requirement ₹3–5 Lakhs",
        "CIBIL Score: 700+",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-opacity-95 z-50 flex items-center justify-center"
    >
      <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl"
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                Eligibility Criteria
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-6 w-full max-w-6xl">
              {eligibilityCriteria.map((section) => (
                <div
                  key={section.title}
                  className="flex-1 bg-white p-6 rounded-lg lg:rounded-none lg:first:rounded-l-lg lg:last:rounded-r-lg lg:[&:not(:first-child)]:border-l lg:border-dashed lg:border-gray-300"
                >
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                    <div className="flex flex-col gap-6 flex-1">
                      <h2 className="text-xl md:text-xl font-normal text-gray-800">
                        {section.title}
                      </h2>
                      <ul className="flex flex-col gap-4">
                        {section.criteria.map((criterion, criterionIndex) => (
                          <li
                            key={criterionIndex}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-6 h-6 text-gray-800 flex-shrink-0" />
                            <span className="text-gray-800 text-base">
                              {criterion}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-lg"
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

const DocumentRequired = ({ onClose }) => {
  const identityProof = [
    "Permanent Account Number (PAN) Card",
    "Aadhaar Card",
    "Passport-Size Photographs",
    "Rent Agreement",
  ];

  const documents1 = {
    "Identity Proof/Address Proof": identityProof,
    "Property Documents (if finalized)": [
      "Sale agreement or Allotment letter",
      "Copy of title deed",
      "Approved building plan (for under-construction property)",
    ],
    "Income Proof": [
      "Salary Slips (Last 3 to 6 Months)",
      "Bank Statements (Last 3 to 6 Months)",
      "Latest Form 16 or Income Tax Return (ITR)",
      "Employee ID card or Appointment Lette",
    ],
  };

  const documents2 = {
    "Identity Proof": [ "Permanent Account Number (PAN) Card",
    "Aadhaar Card",
    "Passport-Size Photographs",
    "Rent Agreement (if applicable)",],
    "Business Proof": [
      "GST Registration Certificate",
      "Business Registration Certificate",
      "Udyam Registration",
    ],
    "Income Proof": [
      "Latest Income Tax Returns (ITR) for the last 2-3 years",
      "Profit & Loss Statement or Balance Sheet",
      "GST Returns (if registered under GST)",
      "Bank Statements: Last 6 months",
    ],
    "Property Documents ": [
      "Agreement to Sale or Allotment Letter",
      "Approved Building Plan",
      "Property Tax Receipts",
    ],
  };

  const DocumentSection = ({ title, categories }) => (
    <div>
      <p className="text-gray-600 font-bold text-sm underline  tracking-wide uppercase text-center">
        {title}
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-6 w-full max-w-6xl">
        {Object.entries(categories).map(([category, items], index) => (
          <div
            key={category}
            className={`flex-1 p-6 ${
              index > 0 ? "lg:border-l border-dashed border-gray-300" : ""
            }`}
          >
            <h2 className="text-xl font-normal text-gray-800 mb-6">
              {category}
            </h2>
            <ul className="flex flex-col gap-3">
              {items.map(
                (item, itemIndex) =>
                  item && (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-yellow-400 text-white rounded-full flex items-center justify-center">
                        ✔
                      </span>
                      <span className="text-base text-gray-800">{item}</span>
                    </li>
                  )
              )}
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
      className="fixed top-0 left-0 w-full h-full  bg-opacity-95 z-50 flex items-center justify-center"
    >
      <div className="bg-white text-gray-800 rounded-xl shadow-xl max-w-6xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-yellow-400 font-bold text-2xl"
          aria-label="Close document modal"
        >
          ✕
        </button>
        <div className="h-full">
          <section className="flex flex-col items-center px-6 md:px-12 py-2">
            <div className="flex flex-col items-center gap-2 text-center max-w-2xl">
              <h1 className="text-4xl font-bold text-gray-800">
                Document Required
              </h1>
            </div>
            <DocumentSection
              title="For Salaried Individuals"
              categories={documents1}
            />
            <DocumentSection
              title="For Self-Employed Individuals"
              categories={documents2}
            />
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const MainContent = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTitle, setOverlayTitle] = useState("");
 const router = useRouter();
  const handleOpen = (title) => {
    if (["Eligibility Criteria", "Document Required"].includes(title)) {
      setOverlayTitle(title);
      setShowOverlay(true);
    }
  };

  return (
    <>
      <main className="flex flex-col lg:flex-row items-center gap-8 px-4 md:px-12 lg:px-32 py-12 relative w-full">
        <div className="flex flex-col items-center gap-12 relative flex-1">
          <div className="flex flex-col lg:flex-row items-start justify-between relative w-full">
            <section className="flex flex-col w-full lg:w-[600px] items-start relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <h1 className="w-full font-bold text-yellow-400 text-3xl sm:text-4xl md:text-6xl text-start leading-normal tracking-[0px]">
                Home Loan page 
              </h1>
              <p className="text-[#FFEEC3] text-lg md:text-xl">
                Turn your dream of home ownership into reality with loans up to Rs. 5 Crores. Attractive interest rates, flexible tenure options, and fast approvals.
              </p>
            </section>

            <aside className="flex flex-col w-full lg:w-[471px] items-start gap-3.5 py-6 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <div className="flex flex-col lg:flex-row items-start justify-between relative w-full">
                <div className="flex flex-col items-start gap-3.5 relative flex-1">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 font-extralight text-white py-0 relative w-full"
                    >
                      <img
                        className="w-6 h-6"
                        alt="Tick icon"
                        src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg"
                      />
                      <span className="flex-1 text-[#FFEEC3]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start justify-between relative flex-1">
                  <div className="flex flex-col items-start gap-4 py-4 relative w-full">
                    <ActionButton
                      onClick={() => handleOpen("Eligibility Criteria")}
                      iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
                    >
                      Check Eligibility Criteria
                    </ActionButton>
                    <ActionButton
                      onClick={() => handleOpen("Document Required")}
                      iconSrc="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
                    >
                      Check Document Required
                    </ActionButton>
                  </div>

                  <div className="flex items-center justify-around gap-3.5 relative w-full">
                    <button className="inline-flex items-center bg-yellow-400 justify-center gap-2.5 px-7 py-4 rounded-[28px] border border-solid border-[#ffe5a5] hover:bg-yellow-500 transition-colors"
                       onClick={() => router.push("/HL/hl_Emi")} >
                      <span className="font-bold text-gray-800">
                        Calculate EMI
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showOverlay && overlayTitle === "Eligibility Criteria" && (
          <Eligibility onClose={() => setShowOverlay(false)} />
        )}
        {showOverlay && overlayTitle === "Document Required" && (
          <DocumentRequired onClose={() => setShowOverlay(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
export default MainContent;
