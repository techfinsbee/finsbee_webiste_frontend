import React from "react";
import { features } from "./Constant";

const MainContent = () => {
  return (
    <main className="flex items-center gap-[120px] px-[136px] py-12 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-center gap-[50px] relative flex-1 grow">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
          <section className="flex flex-col w-[600px] items-start  relative self-stretch translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h1 className="w-full font-bold text-[#FFD263] text-3xl sm:text-4xl md:text-6xl text-start leading-normal relative tracking-[0px]">
              Home Loan
            </h1>
            <div>
            {/* <h1 className="w-full  font-bold text-[#FFD263] text-3xl sm:text-4xl md:text-6xl text-start leading-normal relative tracking-[0px]">
              loan for you
            </h1> */}
            </div>
            <p className="self-stretch text-[#FFEEC3]  text-[20px] relative ">
             Turn your dream of home ownership into reality with loans up to Rs. 5 Crores. Attractive interest rates, flexible tenure options, and fast approvals.
            </p>
          </section>
          <aside className="flex flex-col w-[471px] items-start gap-3.5 px-0 py-6 relative self-stretch translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="flex items-start justify-between relative flex-1 self-stretch w-full grow">
              <div className="flex flex-col items-start gap-3.5 relative flex-1 self-stretch grow">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 font-extralight text-white pl-0 pr-6 py-0 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <img
                      className="relative w-6 h-6"
                      alt="Vuesax broken tick"
                      src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-tick-square.svg"
                    />
                    <span className="relative flex-1 font-regular-text font-[number:var(--regular-text-font-weight)] text-primary-light text-[length:var(--regular-text-font-size)] tracking-[var(--regular-text-letter-spacing)] leading-[var(--regular-text-line-height)] [font-style:var(--regular-text-font-style)]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
                <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-0 relative flex-1 self-stretch w-full grow">
                  <button className="flex flex-col h-6 items-start gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors">
                    <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mb-[-1.00px]">
                      <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] border-b-2 [border-bottom-style:solid] border-[#ffc73c]">
                        <span className="relative text-[#FFD263]  w-fit font-bold-title-3 font-[number:var(--bold-title-3-font-weight)] text-foundationsecondarysecondary-500 text-[length:var(--bold-title-3-font-size)] tracking-[var(--bold-title-3-letter-spacing)] leading-[var(--bold-title-3-line-height)] [font-style:var(--bold-title-3-font-style)]">
                          Check Eligibility Criteria
                        </span>
                      </div>
                      <img
                        className="absolute w-3 h-3 top-0.5 -left-5"
                        alt="Vuesax broken arrow"
                        src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
                      />
                    </div>
                  </button>
                  <button className="flex flex-col h-6 items-start gap-2.5 px-2 py-1 relative self-stretch w-full bg-transparent hover:bg-transparent rounded-none p-0 transition-colors">
                    <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mb-[-1.00px]">
                      <div className="inline-flex items-center justify-end gap-3 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] border-b-2 [border-bottom-style:solid] border-[#ffc73c]">
                        <span className="relative w-fit text-[#FFD263]  font-bold-title-3 font-[number:var(--bold-title-3-font-weight)] text-foundationsecondarysecondary-500 text-[length:var(--bold-title-3-font-size)] tracking-[var(--bold-title-3-letter-spacing)] leading-[var(--bold-title-3-line-height)] [font-style:var(--bold-title-3-font-style)]">
                          Check Document Required
                        </span>
                      </div>
                      <img
                        className="absolute w-3 h-3 top-0.5 -left-5"
                        alt="Vuesax broken arrow"
                        src="https://c.animaapp.com/mfnltrcz6AQXM7/img/vuesax-broken-arrow-right.svg"
                      />
                    </div>
                  </button>
                </div>
                <div className="flex items-center justify-around  gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative flex-1 self-stretch grow">
                    <button className="inline-flex items-center bg-[#FFD263] justify-center gap-2.5 px-7 py-4 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] bg-foundationsecondarysecondary-400 rounded-[28px] border border-solid border-[#ffe5a5] hover:bg-foundationsecondarysecondary-500 h-auto transition-colors">
                      <span className="relative w-fit   font-bold-title-1 font-[number:var(--bold-title-1-font-weight)] text-foundationtertiarytertiary-500 text-[length:var(--bold-title-1-font-size)] tracking-[var(--bold-title-1-letter-spacing)] leading-[var(--bold-title-1-line-height)] whitespace-nowrap [font-style:var(--bold-title-1-font-style)]">
                        Calculate EMI
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
