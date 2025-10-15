'use client';

import React, { useState } from "react";

/* put your image files in /public (or adjust paths) */
const PLUS_ICON  = "/booking/add.svg";
const MINUS_ICON = "/booking/minus.svg";

const faqs = [
  {
    q: "What exactly is Finsbee Consultation?",
    a: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
  {
    q: "How is Finsbee different from banks or agents?",
    a: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
  
  {
  q: "What are your plans and pricing?",
  a: `Quick Advice Call — ₹99 (15 minutes, Google Meet)
Home Visit — ₹399 (face-to-face at your home, select areas)
Premium Annual Support — ₹599/year (7 structured calls, priority follow-ups, home visits as needed)`,
},

  {
    q: "Can you help me secure a lower interest rate?",
    a: "Yes—by assessing your credit profile, identifying quick CIBIL improvements, and shortlisting lenders whose criteria fit your situation. (Final rates/approvals are at lender discretion.)",
  },
  {
    q: "Is my information safe?",
    a: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },
  {
    q: "How do I book?",
    a: "A personalized advisory service to help you choose better loans, insurance, and investments. From quick doubts to a full financial game plan, we provide impartial guidance you can trust.",
  },

  {
    q: "When will I receive advice?",
    a: `Quick Advice Call: within 24 hours (or your chosen time)
Home Visit: within 48–72 hours
Premium: priority support whenever you need it, plus pre-scheduled sessions`,
  },
  {
    q: "What should I keep handy for the session?",
    a: "Photo ID, income proofs (salary slips/ITR), existing loan details, policy documents, latest bank statements, and your CIBIL score if available.",
  },
  {
    q: "What languages do you support?",
    a: "English and Hindi (ask for availability in other languages).",
  },
  {
    q: "Do you execute transactions or sell products?",
    a: "We provide guidance and comparisons. You make the final decision and complete the purchase with the provider of your choice.",
  },


];

function FaqItem({ index, q, a, open, onToggle }) {
  const contentId = `faq-panel-${index}`;
  const buttonId  = `faq-button-${index}`;

  return (
    <div className="rounded-lg min-h-[72px] bg-white shadow-sm ring-1 ring-purple-500/20">
      <button
        id={buttonId}
        type="button"
        aria-controls={contentId}
        aria-expanded={open}
        onClick={() => onToggle(index)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle(index);
          }
        }}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="text-[16px] mt-4 sm:text-sm font-medium text-black">
          {q}
        </span>

        {/* icon container without border/ring */}
        <span className="grid place-items-center h-6 w-6">
          <img
            src={open ? MINUS_ICON : PLUS_ICON}
            alt={open ? "Collapse" : "Expand"}
            className="w-8 h-8 object-contain"
            draggable="false"
          />
        </span>
      </button>

      {/* animated answer */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={[
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-2 text-[13px] leading-relaxed text-black/80">
            <div className="h-px w-full bg-black/10 mb-3" />
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  // first item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i)); // only one open at a time
  };

  return (
    <section className="relative bg-[#efeaff] min-h-[808px]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* heading with line BELOW */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-center text-[32px]">
  <span className="text-black">Consultancy</span>{" "}
  <span className="text-indigo-600 font-semibold">FAQ’s</span>
</h2>

          <span className="mt-2 h-[2px] w-[364px] bg-[#ffc73c] rounded-full" />
        </div>

        <div className="space-y-3 ">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              index={i}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}