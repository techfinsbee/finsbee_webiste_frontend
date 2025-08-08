import Header from './components/Header'
import SocialSidebar from './components/SocialSidebar'
import MainSection from './components/MainSection'
import JoinFundMama from './components/JoinFundMama'
import Mobile from './components/Mobile'
import LoanDisplay from './components/LoanDisplay'
import CibilScoreSection from './components/CibilScoreSection'
import Steps from './components/Steps'
import AnimatedTitle from './components/AnimatedTitle'
import AnimatedPhones from './components/AnimatedPhones'
import FeaturedBrands from './components/FeaturedBrands'
import FeatureCards from './components/FeatureCards'
import Footer from './components/Footer'
import ReactDOM from 'react-dom'
import './Landing.css'
import { Outlet } from 'react-router-dom';
const Landing = () => {
  const brands_we_trust ={ 
    title: "Brands We Trust",
    logos:[
    { image: "/brand1.png" },
    { image: "/brand2.png" },
    { image: "/brand3.png" },
    { image: "/brand4.png" },
    { image: "/brand5.png" },
    { image: "/brand6.png" },
    { image: "/brand7.png" },
  ]}

  const lending_partners = {
    title: "Lending Partners",
    logos:[
    { image: "/lending_partner1.png" },
    { image: "/lending_partner2.png" },
    { image: "/lending_partner3.png" },
    { image: "/lending_partner4.png" },
    { image: "/lending_partner5.png" },
    { image: "/lending_partner6.png" },
    { image: "/lending_partner7.png" },
    { image: "/lending_partner8.png" },
    { image: "/lending_partner9.png" },
  ]};
  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    // { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];
  return (
    <>
    <div className='Landing'>
      <Header dropdownData={dropdownData}></Header>
      <Outlet />
      <SocialSidebar></SocialSidebar>
      <MainSection></MainSection>
      <JoinFundMama></JoinFundMama>
      <Mobile></Mobile>
      <LoanDisplay></LoanDisplay>
      <CibilScoreSection></CibilScoreSection>
      
      <Steps></Steps>
      <FeaturedBrands allLogos={lending_partners} Color="#006d5b"></FeaturedBrands>

      <AnimatedTitle></AnimatedTitle>
      <AnimatedPhones></AnimatedPhones>
      <FeatureCards></FeatureCards>
      <FeaturedBrands allLogos={brands_we_trust} Color="#006d5b"></FeaturedBrands>
      <Footer></Footer>
      </div>
    </>
  )
}

export default Landing
