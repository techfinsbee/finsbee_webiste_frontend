import PL_EMI from '@/Emi_Pages/PL_EMI'
import React from 'react'
import { Suspense } from "react";
export default function page() {
  return (
     <Suspense fallback={null}>
           <PL_EMI/>
        </Suspense>
  )
}
