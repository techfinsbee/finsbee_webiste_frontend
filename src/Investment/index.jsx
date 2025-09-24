"use client"
import React from 'react'
import { Header } from './Header/Header'
import { WhyInvest } from './why_Invest/WhyInvest'
import { HowItWork } from './HowItWork/HotItWork'
import { WhyChooseFinsbee } from './WhyChooseFinsbee/WhyChooseFin'
import Frame from '@/components/footer/Fram'

export default function index() {
  return (
    <div>
        <Header/>
        <WhyInvest/> 
         <HowItWork/>
         <WhyChooseFinsbee/>
        <Frame/>  
        </div>
  )
}
