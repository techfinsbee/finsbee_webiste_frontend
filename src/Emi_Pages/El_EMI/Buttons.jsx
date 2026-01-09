"use client";
import React from "react";
import { useRouter } from "next/navigation";

const buttons = [
  { image: "/brand_logo/coinn.svg", label: "Personal Loan Emi Calculator", route: "/emi-calculator/personal-loan" },
  { image: "/brand_logo/coinn.svg", label: "Home Loan EMI Calculator", route: "/emi-calculator/home-loan" },
  // { image: "/brand_logo/coinn.svg", label: "Education Loan EMI Calculator", route: "/emi-calculator/education-loan" },
  { image: "/brand_logo/coinn.svg", label: "Car Loan EMI Calculator", route: "/emi-calculator/car-loan" },
  { image: "/brand_logo/coinn.svg", label: "Business Loan EMI Calculator", route: "/emi-calculator/business-loan" },
   
  // { image: "/brand_logo/coinn.svg", label: "EMI Calculator", route: "/Emi" },
  
];

const LoanCalculatorButtons = () => {
  const router = useRouter(); // ✅ Call it properly

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {buttons.map((btn, idx) => (
        <div
          key={idx}
          onClick={() => router.push(btn.route)} // ✅ Works now
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            padding: "1.25rem 2rem",
            margin: "0.5rem",
            minWidth: "280px",
            cursor: "pointer",
            transition: "box-shadow 0.3s",
          }}
        >
          <img
            src={btn.image}
            alt={btn.label}
            style={{ width: "28px", height: "28px", marginRight: "1rem" }}
          />
          <span style={{ flex: 1, fontSize: "1.1rem", color: "#333" }}>
            {btn.label}
          </span>
          <img
            src="/brand_logo/arrow-right.svg"
            alt="arrow"
            style={{ width: "28px", height: "28px", marginRight: "1rem" }}
          />
        </div>
      ))}
    </div>
  );
};

export default LoanCalculatorButtons;
