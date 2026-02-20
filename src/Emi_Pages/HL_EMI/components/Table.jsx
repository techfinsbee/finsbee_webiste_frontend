"use client"; // because it uses animation (CSS + client render)

import React from "react";

const TableSection = () => {
  const bankData = [
  {
    bank: "State Bank of India (SBI)",
    interestRate: "7.50% – 9.20%",
    loanAmount: "₹10 lakh – ₹15 crore",
    tenure: "Up to 30 years",
    processingFee: "Up to 0.50% of the loan amount",
  },
  {
    bank: "Bank of Baroda",
    interestRate: "7.45% – 9.00%",
    loanAmount: "₹2 lakh – ₹20 crore",
    tenure: "Up to 30 years",
    processingFee: "Min: ₹8,500 | Max: ₹25,000",
  },
  {
    bank: "HDFC Bank",
    interestRate: "7.90% – 9.25%",
    loanAmount: "₹40 lakh – ₹10 crore",
    tenure: "Up to 30 years",
    processingFee: "Approx. 0.50% of loan amount",
  },
  {
    bank: "Canara Bank",
    interestRate: "7.40% – 9.40%",
    loanAmount: "₹15 lakh – ₹3 crore",
    tenure: "Up to 30 years",
    processingFee: "Min: ₹1,500 + GST | Max: ₹10,000 + GST",
  },
  {
    bank: "Axis Bank",
    interestRate: "8.35% – 9.50%",
    loanAmount: "₹3 lakh – ₹5 crore",
    tenure: "Up to 30 years",
    processingFee: "Up to 1% or min. ₹10,000 + GST",
  },
];



 const nbfcData = [
  {
    nbfc: "Piramal Finance",
    interestRate: "8.50% – 9.50%",
    loanAmount: "₹1 lakh – ₹10 crore",
    tenure: "Up to 25 years",
    processingFee: "Up to 2.5% of the loan amount",
  },
  {
    nbfc: "Tata Capital Home Loans",
    interestRate: "7.75% – 12.00%",
    loanAmount: "₹5 lakh – ₹7.5 crore",
    tenure: "Up to 30 years",
    processingFee: "Min: ₹5,000 + GST | Max: ₹10,000 + GST",
  },
  {
    nbfc: "Bajaj Housing Finance",
    interestRate: "7.45% – 10.25%",
    loanAmount: "₹15 lakh – ₹10 crore",
    tenure: "Up to 30 years",
    processingFee: "Up to 4% of the loan amount + GST",
  },
  {
    nbfc: "Shriram Housing Finance",
    interestRate: "9.50% – 11.50%",
    loanAmount: "₹1 lakh – ₹10 crore",
    tenure: "Up to 25 years",
    processingFee: "Up to 2.5% of the loan amount",
  },
  {
    nbfc: "Aditya Birla Finance",
    interestRate: "8.25% – 17.25%",
    loanAmount: "₹50 lakh – ₹25 crore",
    tenure: "Up to 30 years",
    processingFee: "0.25% of the loan amount",
  },
];


  return (
    <section className="flex flex-col items-start gap-12 px-6 md:px-44 py-24 opacity-0 translate-y-[-1rem] animate-[fade-in_1s_200ms_ease_forwards]">
      {/* ✅ Banks Section */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-normal">
          <span className="text-[#212121]">Home Loan </span>
          <span className="text-[#ffc73c]">Interest Rates – Banks</span>
        </h2>

        <div className="w-full border border-[#999999] rounded-none overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="bg-[#fff9ec] border-[#bababa]">
                  {["Bank", "Interest Rate (p.a.)", "Loan Amount", "Tenure", "Processing Fee"].map(
                    (header) => (
                      <th
                        key={header}
                        className="font-bold text-[#4d4d4d] text-[16px] tracking-[0.5px] leading-[20px] px-3 py-2.5 border-l border-t border-[#bababa] text-left align-middle"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {bankData.map((row, index) => (
                  <tr key={index} className="border-[#bababa]">
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.bank}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.interestRate}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.loanAmount}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.tenure}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.processingFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ✅ Divider */}
      <div className="shrink-0 bg-[#e5e7eb] h-[1px] w-full" />

      {/* ✅ NBFC Section */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-normal">
          <span className="text-[#212121]">Home Loan </span>
          <span className="text-[#592eff]">Interest Rates – NBFCs</span>
        </h2>

        <div className="w-full border border-[#999999] rounded-none overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="bg-[#fff9ec] border-[#bababa]">
                  {["NBFC", "Interest Rate (p.a.)", "Loan Amount", "Tenure", "Processing Fee"].map(
                    (header) => (
                      <th
                        key={header}
                        className="font-bold text-[#4d4d4d] text-[16px] tracking-[0.5px] leading-[20px] px-3 py-2.5 border-l border-t border-[#bababa] text-left align-middle"
                      >
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {nbfcData.map((row, index) => (
                  <tr key={index}>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.nbfc}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.interestRate}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.loanAmount}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.tenure}
                    </td>
                    <td className="font-normal text-[#4d4d4d] text-[14px] px-3 py-2.5 border-l border-t border-[#bababa]">
                      {row.processingFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TableSection;
