import ReactDOM from "react-dom";
import { Outlet } from "react-router-dom";
import "./App.css";
import HomeMainSection from "./components/Home/HomeMainSection";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import DayLoan from "./components/Home/DayLoan";
import HomeHeader from "./components/Home/HomeHeader";
import HomeAnimatedCounter from "./components/Home/HomeAnimatedCounter";
import HomeLoanDisplay from "./components/Home/HomeLoanDisplay";
import AnimatedPhones from "./components/AnimatedPhones";
import HomeAnimatedTitle from "./components/Home/HomeAnimatedTitle";
import HomeSteps from "./components/Home/HomeSteps";
import RewardsSection from "./components/Home/RewardSection";
import FeaturedBrands from "./components/FeaturedBrands";
import HomeFooter from "./components/Home/HomeFooter";
import HomeCibilScoreSection from "./components/Home/HomeCibilScoreSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialsSection from "./components/Testimonials";
import HomeFAQSection from "./components/HomeFAQSection";
import LendingPartners from "./components/LendingPartners";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BottomHeader from "./components/Home/BottomHeader";
import { useState } from "react";
import Booking from "./components/Home/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Refund from "./components/RefundPolicy";

function App() {
    const [showBooking, setShowBooking] = useState(false);
  const brands_we_trust = {
    title: "Brands We Trust",
    logos: [
      { image: "/brand1.png" },
      { image: "/brand2.png" },
      { image: "/brand3.png" },
      { image: "/brand4.png" },
      { image: "/brand5.png" },
      { image: "/brand6.png" },
      { image: "/brand7.png" },
    ],
  };

  const lending_partners = {
    title: "Lending Partners",
    logos: [
      { image: "/lending_partner1.png" },
      { image: "/lending_partner2.png" },
      { image: "/lending_partner3.png" },
      { image: "/lending_partner4.png" },
      { image: "/lending_partner5.png" },
      { image: "/lending_partner6.png" },
      { image: "/lending_partner7.png" },
      { image: "/lending_partner8.png" },
      { image: "/lending_partner9.png" },
    ],
  };
  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    // { title: " ", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];
  const StepColor = {
    left: "#ffe299",
    right: "#ffc73c",
  };
  const loanImages = {
    image1: "/loan1.png",
    image2: "/loan2.png",
    image3: "/loan3.png",
    image4: "/loan4.png",
    image5: "/loan5.png",
    image6: "/loan6.png",
  };
  const cibilImgaes = {
    image1: "/cibil1.png",
    image2: "/cibil2.png",
    image3: "/cibil3.png",
    image4: "/cibil4.png",
    image5: "/cibil5.png",
    image6: "/cibil7.png",
  };

  const stepImage = "/step.png";
  const downloadImage = "/download1.svg";
  
  return (
    <>
      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path='/refund-policy' element={<Refund/>}/>
      </Routes>
    
      <div className="bg-white">
      <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />
        <Outlet />
        <DayLoan></DayLoan>
        <HomeMainSection
          COLOR="#ffc73cBF"
          downloadImage={downloadImage}
          TXTCOLOR="#"
        ></HomeMainSection>
        <HomeAnimatedCounter COLOR="#ffc73c"></HomeAnimatedCounter>
        <HomeLoanDisplay
          COLOR="#ffc73c"
          loanImages={loanImages}
        ></HomeLoanDisplay>
        <HomeSteps StepColor={StepColor} stepImage={stepImage}></HomeSteps>
        <WhyChooseUs COLOR="#ffc73c" TXTCOLOR="#"></WhyChooseUs> {/* Add this line */}
        <div className="mt-20 lg:mt-36">
          <HomeAnimatedTitle
            COLOR="#ffc73c"
            DIVCOLOR="#28B3ACA1"
          ></HomeAnimatedTitle>
          <AnimatedPhones Home="Home"></AnimatedPhones>
        </div>
        <RewardsSection COLOR="#" TXTCOLOR="#"></RewardsSection>
        {/* <div className="mt-32"><FeaturedBrands allLogos={lending_partners}></FeaturedBrands></div> */}
        {/* <HomeCibilScoreSection
          COLOR="#ffc73c"
          cibilImgaes={cibilImgaes}
        ></HomeCibilScoreSection> */}
        <TestimonialsSection COLOR="#754eff" />
        <HomeFAQSection COLOR="#754eff"></HomeFAQSection>
        {/* <div className="mt-32"><FeaturedBrands allLogos={brands_we_trust}></FeaturedBrands></div> */}
        <LendingPartners />
        <BottomHeader/>
        <Footer COLOR="#ffc73c"></Footer>
        {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <MobileFrame imageSrc="https://via.placeholder.com/350x700" />
    </div> */}
      
      </div>
    </>
  );
}

export default App;
