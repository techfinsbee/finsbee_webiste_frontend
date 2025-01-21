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
import MobileFrame from './components/MobileFrame';
import './App.css'

function App() {
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
  return (
    <>
      <Header></Header>
      <SocialSidebar></SocialSidebar>
      <MainSection></MainSection>
      <JoinFundMama></JoinFundMama>
      <Mobile></Mobile>
      <LoanDisplay></LoanDisplay>
      <CibilScoreSection></CibilScoreSection>
      
      <Steps></Steps>
      <FeaturedBrands allLogos={lending_partners}></FeaturedBrands>

      <AnimatedTitle></AnimatedTitle>
      <AnimatedPhones></AnimatedPhones>
      <FeatureCards></FeatureCards>
      <FeaturedBrands allLogos={brands_we_trust}></FeaturedBrands>
      <Footer></Footer>
      {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <MobileFrame imageSrc="https://via.placeholder.com/350x700" />
    </div> */}
    </>
  )
}

export default App
