"use client"
import React from 'react'
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

export default function index() {
  return (
    <div className=''>
        <Header/>
        <div className="pt-8   bg-white flex items-center justify-center md:p-8">
      <AnimatedTextSection />
      
    </div>
    <Section3/>
    <div className='hidden lg:block'>
      <WhyInvest /> 
    </div>
        
         <HowItWork/>
         <WhyChooseFinsbee/>
         <ProductsSection/>
        <Section5/>
        <Frame/>  
        </div>
  )
}
