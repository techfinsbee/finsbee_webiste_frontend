"use client";
import React from "react";

const TableSection = ({
  bankTableHeading,
  nbfcTableHeading,
  bankData = [],
  nbfcData = [],
}) => {
  return (
    <section className="flex flex-col items-start gap-12 px-6 md:px-44 py-24 opacity-0 translate-y-[-1rem] animate-[fade-in_1s_200ms_ease_forwards]">

      {/* ✅ BANKS SECTION */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-normal">
          <span className="text-[#212121]">{bankTableHeading} </span>
          {/* <span className="text-[#ffc73c]">Interest Rates – Banks</span> */}
        </h2>

        <div className="w-full border border-[#999999] rounded-none overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="bg-[#fff9ec] border-[#bababa]">
                  {[
                    "Bank",
                    "Interest Rate (p.a.)",
                    "Loan Amount",
                    "Tenure",
                    "Processing Fee",
                  ].map((header) => (
                    <th
                      key={header}
                      className="font-bold text-[#4d4d4d] text-[16px] tracking-[0.5px] leading-[20px] px-3 py-2.5 border-l border-t border-[#bababa] text-left align-middle"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {bankData.map((row, index) => (
                  <tr key={index} className="border-[#bababa]">
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.bank}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.interestRate}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.loanAmount}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.tenure}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.processingFee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ✅ DIVIDER */}
      <div className="shrink-0 bg-[#e5e7eb] h-[1px] w-full" />

      {/* ✅ NBFC SECTION */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="font-bold text-[28px] md:text-[32px] tracking-[1px] leading-normal">
          <span className="text-[#212121]">{nbfcTableHeading} </span>
          {/* <span className="text-[#592eff]">Interest Rates – NBFCs</span> */}
        </h2>

        <div className="w-full border border-[#999999] rounded-none overflow-hidden">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="bg-[#fff9ec] border-[#bababa]">
                  {[
                    "NBFC",
                    "Interest Rate (p.a.)",
                    "Loan Amount",
                    "Tenure",
                    "Processing Fee",
                  ].map((header) => (
                    <th
                      key={header}
                      className="font-bold text-[#4d4d4d] text-[16px] tracking-[0.5px] leading-[20px] px-3 py-2.5 border-l border-t border-[#bababa] text-left align-middle"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {nbfcData.map((row, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.nbfc}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.interestRate}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.loanAmount}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
                      {row.tenure}
                    </td>
                    <td className="px-3 py-2.5 border-l border-t border-[#bababa] text-[14px]">
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
