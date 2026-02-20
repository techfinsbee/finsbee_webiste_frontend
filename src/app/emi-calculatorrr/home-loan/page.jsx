
import HL_EMI from '@/Emi_Pages/HL_EMI'
import { Suspense } from "react";



export default function Page() {
  return (
     <Suspense fallback={null}>
             <HL_EMI/>
        </Suspense>
  )
}