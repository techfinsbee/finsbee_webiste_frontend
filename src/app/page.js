"use client";
import React from "react";
// import TopSlide from './components/anima'
// import { Frame } from "./components/footer/fram";
import ExpandingCards from "../components/Cards/Cards";
import FAQ from "../components/Cards/Faq";
import { motion } from "framer-motion";
import Timeline from "../components/AppSteps/Timeline";
import Cards from "../components/Cards/Cards";
import TopSlide from "../components/Header/TopSlide";


import Frame from "@/components/footer/Fram";
import ResultsComponent from "@/components/ResultSection/Result";
import { MobileBox } from "@/components/HowToUse/mobileAnimation";
// import TopSlide from './components/FistSections/TopSLide';

const HomePage =() => {
  return (
    <div>
      <TopSlide />

      <ResultsComponent/>

      <MobileBox/>

      <div>
        <Timeline />
      </div>

      <div className="w-full">
        <Cards />
        <FAQ />
      </div>
      <Frame />
    </div>
  );
}
export default HomePage;