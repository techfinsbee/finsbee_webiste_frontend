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

export default function index() {
  return (
    <div>
        <Header/>
        <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <AnimatedTextSection />
      
    </div>
    <Section3/>
        <WhyInvest/> 
         <HowItWork/>
         <WhyChooseFinsbee/>
        <Frame/>  
        </div>
  )
}
