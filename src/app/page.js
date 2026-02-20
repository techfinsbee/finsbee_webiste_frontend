// "use client";
// import React from "react";
// // import TopSlide from './components/anima'
// // import { Frame } from "./components/footer/fram";
// import ExpandingCards from "../components/Cards/Cards";
// import FAQ from "../components/Cards/Faq";
// import { motion } from "framer-motion";
// import Timeline from "../components/AppSteps/Timeline";
// import Cards from "../components/Cards/Cards";
// import TopSlide from "../components/Header/TopSlide";

// import Frame from "@/components/footer/Fram";
// import ResultsComponent from "@/components/ResultSection/Result";
// import { MobileBox } from "@/components/HowToUse/mobileAnimation";
// // import TopSlide from './components/FistSections/TopSLide';

// const HomePage =() => {
//   return (
//     <div>
//       <TopSlide />

//       <ResultsComponent/>

//       <MobileBox/>

//       <div>
//         <Timeline />
//       </div>

//       <div className="w-full">
//         <Cards />
//         <FAQ />
//       </div>
//       <Frame />
//     </div>
//   );
// }
// export default HomePage;

import React from "react";
import Head from "next/head";

import FAQ from "../components/Cards/Faq";

import Timeline from "../components/AppSteps/Timeline";
import Cards from "../components/Cards/Cards";
import TopSlide from "../components/Header/TopSlide";
import Frame from "@/components/footer/Fram";
import ResultsComponent from "@/components/ResultSection/Result";
import { MobileBox } from "@/components/HowToUse/mobileAnimation";
import TestimonialsPage from "@/components/Testimonial/TestimonialsPage";
import Desktopbuttom from "@/components/footer/Desktopbuttom";

const HomePage = () => {
  return (
    <div>
      {/* Meta tags for SEO */}
      <Head>
        <title>FinsBee - Personal, Business, Home Loans & LAP</title>
        <meta
          name="description"
          content="FinsBee - Apply online for personal loan, business loan, home loan, and loan against property. Quick approval, low interest rates, flexible EMIs & 100% digital process."
        />
        <meta
          name="keywords"
          content="bank loan provider, instant personal loan, business loan, home loan, loan against property, low interest loans, NBFC loan provider, quick loans online, EMI calculator, digital personal loan, unsecured business loan, personal loan app"
        />
       
      </Head>

      {/* Page content */}
      <TopSlide />
      {/* <ResultsComponent /> */}
      <MobileBox />

      <div>
        <Timeline />
      </div>

      <div className="w-full">
        <Cards />
        <TestimonialsPage />
        <FAQ />
      </div>
      <Frame />
    </div>
  );
};

export default HomePage;
