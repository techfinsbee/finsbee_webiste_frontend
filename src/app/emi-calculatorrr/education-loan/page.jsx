
import { Suspense } from "react";
import EL_EMI from "@/Emi_Pages/El_EMI"


export default function Page() {
  return (
    
     <Suspense fallback={null}>
           <EL_EMI/>
        </Suspense>
  )
}
