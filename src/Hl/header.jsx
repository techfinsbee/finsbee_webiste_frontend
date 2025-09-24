import React from "react";
import { navigationItems } from "./Constant";

const Header = () => {
  return (
    <header className="flex items-start justify-around pl-0 pr-[280px] py-0 relative self-stretch w-full flex-[0_0_auto]">
      <nav className="flex flex-col items-start gap-2.5 pt-6 pb-2.5 px-24 relative flex-1 grow translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex items-center justify-between pl-12 pr-40 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[100px]">
          <div className="flex flex-col w-[155.83px] items-start gap-2.5 relative">
            <img
              className="relative self-stretch w-full h-[55.38px] object-cover"
              alt="Finsbee transparent"
              src="https://c.animaapp.com/mfnltrcz6AQXM7/img/finsbee-transparent-2.png"
            />
          </div>
          <div className="flex flex-col w-[403px] items-center justify-center gap-2.5 p-3 relative rounded-2xl">
            <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  className={`p-3 rounded-xl border border-solid flex items-center justify-center gap-1 relative flex-1 grow h-auto  whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 ${
                    item.active
                      ? "bg-[#fafafa4c] border-[#ffffff4c] text-white"
                      : "bg-transparent border-transparent text-primary-light  text-white hover:bg-[#fafafa1a]"
                  }`}
                >
                  <span className="relative w-fit mt-[-1.00px] font-regular-title-2 font-[number:var(--regular-title-2-font-weight)] text-[length:var(--regular-title-2-font-size)] tracking-[var(--regular-title-2-letter-spacing)] leading-[var(--regular-title-2-line-height)] whitespace-nowrap [font-style:var(--regular-title-2-font-style)]">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div> 
        {/* //w-[180px] sm:w-[227px] h-[180px] sm:h-[228px] top-0 right-0 bg-transparent border-0 rounded-xl shadow z-50 */}
      </nav>
      <div className="absolute w-[227px] h-[228px] top-[-130px] right-0 bg-transparent border-0 shadow-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] rounded-xl">
        <div className="relative h-[228px] p-0">
          <img
            className="absolute w-[227px] h-56 top-0 left-0"
            alt="Rectangle"
            src="https://c.animaapp.com/mfnltrcz6AQXM7/img/rectangle-35.svg"
          />
          <div className="flex flex-col w-[211px] items-end gap-4 px-0 py-2.5 absolute top-4 left-px">
            <div className="inline-flex items-center justify-end gap-2.5 px-0 py-2.5 relative flex-[0_0_auto]">
              <div className="w-[187px] mt-[-1.00px] text-foundationtertiarytertiary-500 text-[length:var(--bold-subheading-1-font-size)] text-right leading-[var(--bold-subheading-1-line-height)] relative font-bold-subheading-1 font-[number:var(--bold-subheading-1-font-weight)] tracking-[var(--bold-subheading-1-letter-spacing)] [font-style:var(--bold-subheading-1-font-style)]">
                All-in-One Finance Help
                <br />@ your doorstep
              </div>
            </div>
            <div className="flex w-[167px] top-10 items-center relative flex-[0_0_auto]">
              <img
                className="relative w-[65.66px] h-[65.84px]"
                alt="Arrow r"
                src="https://c.animaapp.com/mfnltrcz6AQXM7/img/arrow-r-01-1.svg"
              />
              <button className="inline-flex items-center justify-end gap-2 relative flex-[0_0_auto] mr-[-0.66px] -ml-3 border-b-2 [border-bottom-style:solid] border-[#212121] bg-transparent hover:bg-transparent rounded-none p-0 h-auto transition-colors">
                <span className="relative w-fit font-bold-title-1 font-[number:var(--bold-title-1-font-weight)] text-foundationtertiarytertiary-500 text-[length:var(--bold-title-1-font-size)] tracking-[var(--bold-title-1-letter-spacing)] leading-[var(--bold-title-1-line-height)] whitespace-nowrap [font-style:var(--bold-title-1-font-style)]">
                  Book Your Slot
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;