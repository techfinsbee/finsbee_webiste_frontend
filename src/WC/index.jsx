"use client";
import React from "react";

import MainContent from "./MainContent";
import BenefitCards from "./BenifitCards";

import Home from "./components/Page";

import Frame from "@/components/footer/Fram";

export default function InvestePage() {
  return (
    <div className="flex flex-col  relative " data-model-id="13461:19734">
      {/* <div className="flex flex-col h-[30rem] md:h-[520px] items-start gap-[150px] pt-40 relative self-stretch w-full rounded-b-[60px] lg:rounded-[0px_0px_120px_120px] [background:radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72)_32%,rgba(49,25,140,0.9)_100%),url(https://c.animaapp.com/mfnltrcz6AQXM7/img/1-section.png)_50%_50%_/_cover]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
       
          <MainContent />                                                                                                                                                                                                                                                                                 
        </div>
      </div> */}
      <div
        className="flex flex-col 
  h-[37rem] sm:h-[38rem] md:h-[48rem] lg:h-[600px] 
  items-start 
  gap-10 sm:gap-20 md:gap-[150px] 
  pt-20 sm:pt-28 md:pt-40 
  relative self-stretch w-full 
  rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-[0px_0px_120px_120px]
  [background:radial-gradient(50%_50%_at_50%_100%,rgba(89,46,255,0.72)_32%,rgba(49,25,140,0.9)_100%),url(https://c.animaapp.com/mfnltrcz6AQXM7/img/1-section.png)_50%_50%_/_cover]"
      >
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <MainContent />
        </div>
      </div>

      <BenefitCards />
      <Home />

      <Frame />
    </div>
  );
}
