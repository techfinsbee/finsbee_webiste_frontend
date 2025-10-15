
import BookingHero from '@/Booking_Components/BookingHero'
import FaqSection from '@/Booking_Components/FaqSection'
import HowItWorksScroll from '@/Booking_Components/HowItWorkSection'
import ConsultantLandingPage from '@/Booking_Components/MainBookingPage'
import PlansSection from '@/Booking_Components/PlansSection'
import SupportSection from '@/Booking_Components/SupportSection'
import WhyFinsbeeHover from '@/Booking_Components/WhyFinsbee'
import React from 'react'

export default function page() {
  return (
    <div>
        {/* <BookingHero/>
        <PlansSection/>
        // {/* <HowItWorksScroll/> 
        <WhyFinsbeeHover/>
        <SupportSection/>

        <FaqSection/> */}
        <ConsultantLandingPage/>
    </div>
  )
}
