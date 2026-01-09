"use client"; // because it uses animation (CSS + client render)

import React from "react";

const TableSection = () => {
  const bankData = [
  {
    bank: "HDFC Bank",
    interestRate: "9.75% – 11.00%",
    loanAmount: "₹10 lakh – ₹10 crore",
    tenure: "Up to 15 years",
    processingFee: "Up to 1.5% of loan amount or ₹4,500",
  },
  {
    bank: "State Bank of India",
    interestRate: "7.50% – 12.00%",
    loanAmount: "Up to ₹7.5 crore",
    tenure: "Up to 15 years",
    processingFee: "₹10,000",
  },
  {
    bank: "Axis Bank",
    interestRate: "9.25% – 10.00%",
    loanAmount: "₹5 lakh – ₹5 crore",
    tenure: "Up to 20 years",
    processingFee: "Up to 1% of loan amount or ₹10,000",
  },
  {
    bank: "Kotak Mahindra Bank",
    interestRate: "9.50% – 12.50%",
    loanAmount: "₹10 lakh – ₹5 crore",
    tenure: "Up to 15 years",
    processingFee: "Maximum 1% of loan amount + GST",
  },
  {
    bank: "IDFC First Bank",
    interestRate: "9.50% – 20.00%",
    loanAmount: "₹1 crore – ₹15 crore",
    tenure: "Up to 25 years",
    processingFee: "Up to 3% of loan amount",
  },
];


 
  const nbfcData = [
  {
    nbfc: "Shriram Finance",
    interestRate: "12.00% – 14.00%",
    loanAmount: "₹1 lakh – ₹10 crore",
    tenure: "Up to 25 years",
    processingFee: "Up to 2.5% of loan amount + GST",
  },
  {
    nbfc: "Piramal Finance",
    interestRate: "11.50% – 20.00%",
    loanAmount: "₹10 lakh – ₹2 crore",
    tenure: "Up to 15 years",
    processingFee: "Up to 3% of loan amount",
  },
  {
    nbfc: "Tata Capital",
    interestRate: "9.00% – 17.00%",
    loanAmount: "₹5 lakh – ₹10 crore",
    tenure: "Up to 15 years",
    processingFee: "Up to 1.25% of loan amount",
  },
  {
    nbfc: "Aditya Birla Finance",
    interestRate: "8.60% – 9.00%",
    loanAmount: "₹10 lakh – ₹75 crore",
    tenure: "Up to 20 years",
    processingFee: "Maximum 1% of loan amount + GST",
  },
  {
    nbfc: "Bajaj Finance",
    interestRate: "8.00% – 20.00%",
    loanAmount: "₹5 lakh – ₹10.50 crore",
    tenure: "Up to 17 years",
    processingFee: "3.45% of loan amount",
  },
];


  return (
    <section className="flex flex-col items-start gap-12 px-6 md:px-44 py-24 opacity-0 translate-y-[-1rem] animate-[fade-in_1s_200ms_ease_forwards]">
      {/* ✅ Banks Section */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-normal">
          <span className="text-[#212121]">Loan Against Property Loan </span>
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
          <span className="text-[#212121]">Loan Against Property Loan </span>
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
