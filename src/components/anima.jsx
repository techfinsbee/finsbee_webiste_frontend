"use client";

import React, { useEffect, useRef, useState } from "react";
import ResultsComponent from "./ResultSection/Result";
import AppUse from "./HowToUse/AppUse";
import { Frame } from "./footer/Fram";

const navigationItems = [
  { label: "Loan", active: true },
  { label: "Insurance", active: false },
  { label: "Investment", active: false },
];

const brandLogos = [
  {
    src: "",
    opacity: "opacity-80",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/treefrogs-logo-4.png",
    opacity: "",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/saha-1.png",
    opacity: "",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/treefrogs-logo-5.png",
    opacity: "",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/komorebi-logo-1.png",
    opacity: "",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/treefrogs-logo-6.png",
    opacity: "",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/organic-india-logo-1.png",
    opacity: "",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/treefrogs-logo-7.png",
    opacity: "",
  },
];

const moneyIcons = [
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1.png",
    position: "top-0 left-0",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-1.png",
    position: "top-0 right-0",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-2.png",
    position: "bottom-0 left-0",
  },
  {
    src: "https://c.animaapp.com/mfgy37ey76CQRT/img/money--1--1-3.png",
    position: "bottom-0 right-0",
  },
];

const TopSlide = () => {
  const [number, setNumber] = useState(1);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNumber((prev) => (prev === 3 ? 1 : prev + 1));
    }, 200);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col items-start gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
      {/* ---------- Section 1 ---------- */}
      <section
        className="
    flex flex-col h-[982px] items-start gap-10 relative w-full
    rounded-b-[120px]
    bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9)),url('https://c.animaapp.com/mfgy37ey76CQRT/img/1-section.png')]
    bg-cover bg-center
  "
      >
        <div className="flex flex-col items-start gap-[114px] relative self-stretch w-full flex-[0_0_auto]">
          {/* ---------- Header ---------- */}
          <header className="flex items-start justify-around pl-0 pr-[280px] py-0 relative self-stretch w-full flex-[0_0_auto]">
            <nav
              className="flex flex-col items-start gap-2.5 pt-6 pb-2.5 px-24 relative flex-1 grow -translate-y-4 animate-fade-in opacity-0"
              style={{ "--animation-delay": "0ms" }}
            >
              <div className="flex items-center justify-between pl-12 pr-40 py-2 relative self-stretch w-full flex-[0_0_auto] rounded-[100px]">
                <div className="flex flex-col w-[155.83px] items-start gap-2.5 relative">
                  <img
                    className="relative self-stretch w-full h-[55.38px] object-cover"
                    alt="Finsbee transparent"
                    src="https://c.animaapp.com/mfgy37ey76CQRT/img/finsbee-transparent-2.png"
                  />
                </div>

                <div className="flex flex-col w-[403px] items-center justify-center gap-2.5 p-3 relative rounded-2xl">
                  <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                    {navigationItems.map((item) => (
                      <button
                        key={item.label}
                        className={` flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ${
                          item.active
                            ? "bg-white/30 border border-solid border-white/30 text-white"
                            : "text-gray-100 hover:bg-white/10 hover:text-white"
                        } font-normal text-base tracking-[0.5px] leading-normal`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* ---------- Right card ---------- */}
            <div
              className="absolute w-[227px] h-[228px] top-0 left-[1243px] bg-transparent border-0 -translate-y-4 animate-fade-in opacity-0 rounded-xl shadow"
              style={{ "--animation-delay": "200ms" }}
            >
              <div className="relative h-[228px] p-0">
                <img
                  className="absolute w-[227px] h-56 top-0 left-0"
                  alt="Rectangle"
                  src="https://c.animaapp.com/mfgy37ey76CQRT/img/rectangle-35.svg"
                />

                <div className="flex flex-col w-[211px] items-end gap-4 px-0 py-2.5 absolute top-4 left-px">
                  <div className="inline-flex justify-end gap-2.5 px-0 py-2.5 flex-[0_0_auto] items-center relative">
                    <div className="w-[187px] -mt-px font-bold text-gray-800 text-2xl text-right leading-[30px] relative tracking-[0px]">
                      All-in-One Finance Help
                      <br />@ your doorstep
                    </div>
                  </div>

                  <div className="flex w-[167px] items-center relative flex-[0_0_auto]">
                    <img
                      className="relative w-[65.66px] h-[65.84px]"
                      alt="Arrow r"
                      src="https://c.animaapp.com/mfgy37ey76CQRT/img/arrow-r-01-1.svg"
                    />

                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mr-[-0.66px] -ml-3 border-b-2 border-solid border-gray-800">
                      <div className="relative w-fit font-bold text-gray-800 text-base tracking-[0.5px] leading-5 whitespace-nowrap">
                        Book Your Slot
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* ---------- Main ---------- */}
          <main className="flex items-center justify-center gap-[120px] p-12 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-[1461px] items-center gap-[50px] relative ml-[-22.50px] mr-[-22.50px]">
              <div
                className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0"
                style={{ "--animation-delay": "400ms" }}
              >
                <div className="flex flex-col items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex w-[618px] justify-center flex-[0_0_auto] items-center relative">
                    <div className="flex flex-col w-11 items-center justify-center gap-2.5 relative">
                      <h1 className="relative self-stretch -mt-px font-bold text-gray-100 text-6xl text-center tracking-[0px] leading-normal">
                        {number}
                      </h1>
                    </div>

                    <h1 className="w-[370px] -mt-px font-bold text-gray-100 text-6xl text-center leading-normal relative tracking-[0px]">
                      -Place for All
                    </h1>
                  </div>

                  <h2 className="self-stretch font-bold text-yellow-400 text-6xl text-center leading-normal relative tracking-[0px]">
                    Loan, Insurance, Investment
                  </h2>
                </div>
              </div>

              {/* Store buttons */}
              <div
                className="flex items-start justify-center gap-8 relative self-stretch w-full flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0"
                style={{ "--animation-delay": "600ms" }}
              >
                <div className="relative w-[160.64px] h-[46.41px]">
                  <img
                    className="absolute w-[201px] h-[58px] -top-1.5 -left-5"
                    alt="Google Play Store"
                    src="https://c.animaapp.com/mfgy37ey76CQRT/img/group.png"
                  />
                </div>

                <div className="relative w-[200px] h-[58px] bg-[url('https://c.animaapp.com/mfgy37ey76CQRT/img/group-1.png')] bg-cover bg-center" />
              </div>
            </div>
          </main>
        </div>

        {/* ---------- Money + Bottom ---------- */}
        <div className="flex flex-col h-[650px] items-center justify-end relative self-stretch w-full mb-[-311.01px]">
          <div
            className="flex flex-col items-center gap-3.5 relative self-stretch w-full flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0"
            style={{ "--animation-delay": "800ms" }}
          >
            <h1 className="self-stretch -mt-px font-extrabold text-gray-100 text-[160px] text-center leading-normal relative tracking-[0]">
              Finsbee.
            </h1>
          </div>

          <div className="flex flex-col w-[1088px] h-[300px] items-center absolute top-0 left-[212px]">
            <div className="flex w-[610px] justify-between flex-[0_0_auto] items-center relative">
              {moneyIcons.slice(0, 2).map((icon, index) => (
                <div
                  key={`top-${index}`}
                  className={`inline-flex items-center justify-center p-3 relative flex-[0_0_auto] -mt-0.5 -mb-0.5 ${
                    index === 0 ? "-ml-0.5" : "-mr-0.5"
                  } bg-white/10 rounded-[20px] -translate-y-4 animate-fade-in opacity-0`}
                  style={{
                    "--animation-delay": `${1000 + index * 200}ms`,
                  }}
                >
                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[77px] h-[77px] object-cover"
                      alt="Money"
                      src={icon.src}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between self-stretch w-full flex-[0_0_auto] items-center relative">
              {moneyIcons.slice(2, 4).map((icon, index) => (
                <div
                  key={`bottom-${index}`}
                  className={`inline-flex items-center justify-center p-3 relative flex-[0_0_auto] -mt-0.5 -mb-0.5 ${
                    index === 0 ? "-ml-0.5" : "-mr-0.5"
                  } bg-white/10 rounded-[20px] -translate-y-4 animate-fade-in opacity-0`}
                  style={{
                    "--animation-delay": `${1400 + index * 200}ms`,
                  }}
                >
                  <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                    <img
                      className="relative w-[77px] h-[77px] object-cover"
                      alt="Money"
                      src={icon.src}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            className="relative w-[1283px] flex-[0_0_auto] -mt-[110px] -translate-y-4 animate-fade-in opacity-0"
            style={{ "--animation-delay": "1800ms" }}
            alt="Bottom image"
            src="https://c.animaapp.com/mfgy37ey76CQRT/img/bottom-image.svg"
          />
        </div>

        <img
          className="absolute w-[759px] h-[611px] top-0 left-0"
          alt="Abstract design"
          src="https://c.animaapp.com/mfgy37ey76CQRT/img/abstract-design.svg"
        />
      </section>

      {/* ---------- Section 2 ---------- */}
      <section
        className="flex flex-col items-center gap-2.5 px-[136px] py-24 relative self-stretch w-full flex-[0_0_auto] -translate-y-4 animate-fade-in opacity-0"
        style={{ "--animation-delay": "2000ms" }}
      >
        <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex justify-center gap-2.5 pl-0 pr-8 py-2.5 flex-[0_0_auto] border-0 border-none items-center relative">
            <div className="relative w-fit font-bold text-gray-800 text-2xl text-right tracking-[0px] leading-[30px]">
              Trusted by
              <br />
              1300+ global brands
            </div>
          </div>

          <div className="relative flex-1 grow h-[110px] overflow-hidden">
            <div className="flex w-[1400px] gap-[84px] top-1 items-center relative animate-marquee">
              {[...brandLogos, ...brandLogos].map((logo, index) => (
                <div
                  key={`brand-${index}`}
                  className="inline-flex flex-col items-center justify-center gap-2.5 px-4 py-2 relative flex-[0_0_auto]"
                >
                  <div
                    className={`relative w-[100px] h-[100px] ${logo.opacity} bg-cover bg-center`}
                    style={{ backgroundImage: `url(${logo.src})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
        <ResultsComponent />
      </div>
      <div>
        <AppUse/>
      </div>
      
      
      </section>
    

    </div>
  );
};

export default TopSlide;
