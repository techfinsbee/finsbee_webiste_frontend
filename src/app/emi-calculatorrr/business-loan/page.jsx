// import BL_EMI from '@/Emi_Pages/BL_EMI '
// import { Suspense } from "react";
// import React from 'react'


// function page() {
//   return (
//     <div>
//       <Suspense fallback={null}>

//         <BL_EMI/>
//         </Suspense>
//     </div>
//   )
// }

// export default page


// app/emi-calculator/business-loan/page.jsx
import BL_EMI from "@/Emi_Pages/BL_EMI ";
import { Suspense } from "react";


export default function Page() {
  return (
    <Suspense fallback={null}>
      <BL_EMI/>
    </Suspense>
  );
}
