"use client"; // because it uses animation (CSS + client render)

import React from "react";

const TableSection = () => {
const bankData = [
  {
    bank: "HDFC Bank",
    interestRate: "10.00% – 22.50%",
    loanAmount: "₹50,000 – ₹50 lakh",
    tenure: "Up to 60 months",
    processingFee: "Up to 2% of loan amount",
  },
  {
    bank: "ICICI Bank",
    interestRate: "12.00% – 21.00%",
    loanAmount: "₹50,000 – ₹40 lakh",
    tenure: "12 – 60 months",
    processingFee: "Up to 2%",
  },
  {
    bank: "Axis Bank",
    interestRate: "11.00% – 20.00%",
    loanAmount: "₹50,000 – ₹50 lakh",
    tenure: "12 – 60 months",
    processingFee: "1.5% – 2%",
  },
  {
    bank: "Kotak Mahindra Bank",
    interestRate: "11.50% – 19.00%",
    loanAmount: "₹50,000 – ₹25 lakh",
    tenure: "12 – 60 months",
    processingFee: "Up to 2.5%",
  },
  {
    bank: "State Bank of India",
    interestRate: "8.90% – 16.30%",
    loanAmount: "₹25,000 – ₹20 lakh",
    tenure: "Up to 72 months",
    processingFee: "1% – 1.5%",
  },
];

const nbfcData = [
  {
    nbfc: "Bajaj Finserv",
    interestRate: "14.00% – 26.00%",
    loanAmount: "₹1 lakh – ₹25 lakh",
    tenure: "12 – 84 months",
    processingFee: "Up to 3% – 6%",
  },
  {
    nbfc: "Tata Capital",
    interestRate: "12.00% – 24.00%",
    loanAmount: "₹50,000 – ₹35 lakh",
    tenure: "12 – 72 months",
    processingFee: "Up to 2.5%",
  },
  {
    nbfc: "Fullerton India",
    interestRate: "17.00% – 32.00%",
    loanAmount: "₹50,000 – ₹30 lakh",
    tenure: "12 – 60 months",
    processingFee: "Up to 6%",
  },
  {
    nbfc: "Indifi",
    interestRate: "18.00% – 35.00%",
    loanAmount: "₹50,000 – ₹50 lakh",
    tenure: "6 – 36 months",
    processingFee: "Case-by-case basis",
  },
  {
    nbfc: "Lendingkart",
    interestRate: "15.00% – 27.00%",
    loanAmount: "₹50,000 – ₹30 lakh",
    tenure: "12 – 60 months",
    processingFee: "Up to 3% – 4%",
  },
];

  return (
    <section className="flex flex-col items-start gap-12 px-6 md:px-44 py-24 opacity-0 translate-y-[-1rem] animate-[fade-in_1s_200ms_ease_forwards]">
      {/* ✅ Banks Section */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-normal">
          <span className="text-[#212121]">Business Loan </span>
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
          <span className="text-[#212121]">Business Loan </span>
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
