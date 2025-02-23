import ReactDOM from "react-dom";
import { Outlet } from "react-router-dom";
import "./App.css";
import HomeMainSection from "./components/Home/HomeMainSection";
import Header from "./components/Header";

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
function App() {
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
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Loans",
      link: "loan-section-home",
    },
    {
      title: "Mart",
      link: "mart-home",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Contact Us",
      link: "contact-us-home",
    },
  ];
  const StepColor = {
    left: "#69B6B2",
    right: "#09615D",
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
      <div className="bg-white">
        <HomeHeader
          dropdownData={dropdownData}
          COLOR="#fff"
          Hover="home"
          TXTCOLOR="#"
        ></HomeHeader>
        <Outlet />
        <HomeMainSection
          COLOR="#18ADA5BF"
          downloadImage={downloadImage}
          TXTCOLOR="#"
        ></HomeMainSection>
        <HomeAnimatedCounter COLOR="#18ADA5"></HomeAnimatedCounter>
        <HomeLoanDisplay
          COLOR="#18ADA5"
          loanImages={loanImages}
        ></HomeLoanDisplay>
        <HomeSteps StepColor={StepColor} stepImage={stepImage}></HomeSteps>
        <HomeAnimatedTitle
          COLOR="#09615D"
          DIVCOLOR="#28B3ACA1"
        ></HomeAnimatedTitle>
        <AnimatedPhones Home="Home"></AnimatedPhones>
        <RewardsSection COLOR="#"></RewardsSection>
        <FeaturedBrands allLogos={lending_partners}></FeaturedBrands>
        <HomeCibilScoreSection
          COLOR="#09615D"
          cibilImgaes={cibilImgaes}
        ></HomeCibilScoreSection>
        <FeaturedBrands allLogos={brands_we_trust}></FeaturedBrands>
        <HomeFooter COLOR="#09615D"></HomeFooter>
        {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <MobileFrame imageSrc="https://via.placeholder.com/350x700" />
    </div> */}
      </div>
    </>
  );
}

export default App;
