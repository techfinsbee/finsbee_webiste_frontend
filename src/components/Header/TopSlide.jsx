"use client";

import React from "react";
import Header from "./Header";
import MainContent from "./MainComponent";
import MoneySection from "./MoneySection";
import BrandSection from "./BrandSection";
import ResultsComponent from "../ResultSection/Result";
import AppUse from "../HowToUse/AppUse";
import Image from "next/image";

const TopSlide = () => {
  return (
    <>
    <div className="flex flex-col items-start gap-60 relative font-['Lato',Helvetica] overflow-x-hidden">
      {/* <section
        className="
          flex flex-col h-[982px] items-start gap-10 relative w-full
          rounded-b-[120px] 
          bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9)),url('https://c.animaapp.com/mfgy37ey76CQRT/img/1-section.png')]
          bg-cover bg-center
        "
      > */}
      <section className="relative flex flex-col h-[982px] items-start gap-10 w-full rounded-b-[120px] ">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72),rgba(49,25,140,0.9))] rounded-b-[120px] overflow-hidden" />

      {/* Background Image */}
      <Image
        src="/landing_page/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10 rounded-b-[120px]"
      />
        <div className="flex flex-col items-start gap-[114px] relative self-stretch w-full flex-[0_0_auto] ">
          <Header />
          <MainContent />
        </div>
        <MoneySection />
        <img
          className="absolute w-[759px] h-[611px] top-0 left-0"
          alt="Abstract design"
          src="https://c.animaapp.com/mfgy37ey76CQRT/img/abstract-design.svg"
        />
      </section>
      <BrandSection />
      
    </div>
    

    {/* <div className="absolute w-[180px] sm:w-[227px] h-[180px] sm:h-[228px] top-0 right-0 bg-transparent border-0 rounded-xl shadow z-50 ">
        <div className="relative h-full p-0">
          <img
            className="absolute w-full h-[140px] sm:h-[224px] top-0 left-0"
            alt="Rectangle"
            src="https://c.animaapp.com/mfgy37ey76CQRT/img/rectangle-35.svg"
          />
          <div className="flex flex-col w-[90%] items-end gap-4 px-0 py-2.5 absolute top-4 left-px">
            <div className="inline-flex justify-end gap-2.5 px-0 py-2.5 items-center relative">
              <div className="w-full font-bold text-gray-800 text-lg sm:text-2xl text-right leading-[24px] sm:leading-[30px] relative tracking-[0px]">
                All-in-One Finance Help
                <br />@ your doorstep
              </div>
            </div>
            <div className="flex w-[140px] sm:w-[167px] items-center relative">
              <img
                className="relative w-[50px] sm:w-[65.66px] h-[50px] sm:h-[65.84px]"
                alt="Arrow r"
                src="https://c.animaapp.com/mfgy37ey76CQRT/img/arrow-r-01-1.svg"
              />
              <div className="inline-flex items-center gap-2 relative mr-[-0.66px] -ml-3 border-b-2 border-solid border-gray-800">
                <div className="relative w-fit font-bold text-gray-800 text-sm sm:text-base tracking-[0.5px] leading-5 whitespace-nowrap">
                  Book Your Slot
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default TopSlide;