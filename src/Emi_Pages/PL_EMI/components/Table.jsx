"use client"; // because it uses animation (CSS + client render)

import React from "react";

const TableSection = () => {
  const bankData = [
    {
      bank: "HDFC Bank",
      interestRate: "10.50% – 24.00%",
      loanAmount: "₹50,000 – ₹40 lakh",
      tenure: "12 – 60 months",
      processingFee: "₹4,999 + GST",
    },
    {
      bank: "ICICI Bank",
      interestRate: "10.75% – 19.00%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 2% of loan amount",
    },
    {
      bank: "State Bank of India",
      interestRate: "10.60% – 15.65%",
      loanAmount: "₹50,000 – ₹20 lakh",
      tenure: "12 – 72 months",
      processingFee: "Up to 1.5%",
    },
    {
      bank: "Axis Bank",
      interestRate: "10.49% – 21.00%",
      loanAmount: "₹50,000 – ₹40 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 2%",
    },
    {
      bank: "Kotak Mahindra Bank",
      interestRate: "10.99% – 24.00%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 5%",
    },
    {
      bank: "IndusInd Bank",
      interestRate: "10.259% – 22.00%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 3.5%",
    },
    {
      bank: "IDFC First Bank",
      interestRate: "10.49% – 23.00%",
      loanAmount: "₹50,000 – ₹40 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 3.5%",
    },
    {
      bank: "Bank of Baroda",
      interestRate: "11.10% – 18.15%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 2%",
    },
    {
      bank: "Federal Bank",
      interestRate: "11.49% – 14.49%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 2%",
    },
    {
      bank: "Punjab National Bank",
      interestRate: "11.40% – 17.95%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 1%",
    },
  ];

  const nbfcData = [
    {
      nbfc: "Bajaj Finserv",
      interestRate: "11.00% – 26.00%",
      loanAmount: "₹30,000 – ₹25 lakh",
      tenure: "12 – 84 months",
      processingFee: "Up to 6%",
    },
    {
      nbfc: "Tata Capital",
      interestRate: "10.99% – 24.00%",
      loanAmount: "₹40,000 – ₹35 lakh",
      tenure: "12 – 72 months",
      processingFee: "Up to 5.5%",
    },
    {
      nbfc: "Fullerton India",
      interestRate: "11.99% – 36.00%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 6%",
    },
    {
      nbfc: "Aditya Birla Capital",
      interestRate: "10.99% – 30.00%",
      loanAmount: "₹50,000 – ₹25 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 3%",
    },
    {
      nbfc: "Home Credit",
      interestRate: "19.20% onwards",
      loanAmount: "₹30,000 – ₹5 lakh",
      tenure: "12 – 60 months",
      processingFee: "Up to 5%",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-12 px-6 md:px-44 py-24 opacity-0 translate-y-[-1rem] animate-[fade-in_1s_200ms_ease_forwards]">
      {/* ✅ Banks Section */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-normal">
          <span className="text-[#212121]">Personal Loan </span>
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
          <span className="text-[#212121]">Personal Loan </span>
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
