
// import React from 'react'

// export default function page() {
//   return (
//     <div>
     
//     </div>
//   )
// }
// app/emi-calculator/business-loan/page.jsx
import { Suspense } from "react";
import LoanAP_EMI from '@/Emi_Pages/Car_EMI'

export default function Page() {
  return (
    <Suspense fallback={null}>
         <LoanAP_EMI/>
    </Suspense>
  );
}
