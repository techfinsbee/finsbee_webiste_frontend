import React from "react";

export default function LoanApplicationSection()  {
  const loanLinks = [
    "Personal Loan in Banglore",
    "Personal Loan in Banglore",
    "Personal Loan in Banglore",
    "Personal Loan in Banglore",
    "Personal Loan in Banglore",
    "Personal Loan in Banglore",
  ];

  const columns = [
    { links: loanLinks },
    { links: loanLinks },
    { links: loanLinks },
    { links: loanLinks },
  ];

  return (
    <section className="justify-center gap-6 px-0 py-12 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
      <h2 className="w-full text-white text-3xl font-bold">
        Apply for Loan in Your City
      </h2>

      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] gap-4">
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className="flex-1 gap-4 flex flex-col items-start relative"
          >
            <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              {column.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className="flex items-center gap-1 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <a
                    href="#"
                    className="flex-1 leading-4 relative text-base hover:text-purple-200 transition-colors cursor-pointer"
                  >
                    <span
                      className={`${linkIndex === 0 ? "text-purple-100" : "text-purple-200"}`}
                    >
                      {link}
                    </span>
                  </a>
                </div>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </section>
  );
};
