// "use client"
// import React from 'react'
// import { Header } from './Header/Header'
// import { WhyInvest } from './why_Invest/WhyInvest'
// import { HowItWork } from './HowItWork/HotItWork'
// import { WhyChooseFinsbee } from './WhyChooseFinsbee/WhyChooseFin'
// import Frame from '@/components/footer/Fram'
// import Transparent from './Transparaent text/Transparent'
// import AnimatedTextSection from './Transparaent text/Transparent'
// import Section3 from './Section3/Section3'
// import ProductsSection from './ProductSection/ProductsSection'
// import Section5 from './Section8/Section8'

// export default function index() {
//   return (
//     <div className=''>
//         <Header/>
//         <div className="pt-8   bg-white flex items-center justify-center md:p-8">
//       <AnimatedTextSection />
      
//     </div>
//     <Section3/>
//     <div className='hidden lg:block'>
//       <WhyInvest /> 
//     </div>
        
//          <HowItWork/>
//          <WhyChooseFinsbee/>
//          <ProductsSection/>
//         <Section5/>
//         <Frame/>  
//         </div>
//   )
// }




import { getInvestmentPage } from "@/app/lib/getInvestmentPage";
import { Header } from './Header/Header'
import { WhyInvest } from './why_Invest/WhyInvest'
import { HowItWork } from './HowItWork/HotItWork'
import { WhyChooseFinsbee } from './WhyChooseFinsbee/WhyChooseFin'
import Frame from '@/components/footer/Fram'
import Transparent from './Transparaent text/Transparent'
import AnimatedTextSection from './Transparaent text/Transparent'
import Section3 from './Section3/Section3'
import ProductsSection from './ProductSection/ProductsSection'
import Section5 from './Section8/Section8'

export default async function InvestmentPage() {
  const data = await getInvestmentPage();

  return (
    <>
      <Header data={data.heroSection} />
      <AnimatedTextSection text={data.introText.content} />
      <Section3 data={data.gatewaySection} headers={data.allHeader[0]} />
      <WhyInvest
        features={data.whyInvestFeatures}
        slides={data.whyInvestSlides}
        headers={data.allHeader[1]}
      />
      <HowItWork
        steps={data.howItWorks}
        headers={data.allHeader[2]}
      />
      <WhyChooseFinsbee
        cards={data.whyChooseCards}
        headers={data.allHeader[3]}
      />
      <ProductsSection
        products={data.products}
        headers={data.allHeader[4]}
      />
      <Section5
        priceCards={data.priceCards}
        headers={data.allHeader[5]}
        footer={data.allHeader[6]}
      />
      <Frame />
    </>
  );
}
