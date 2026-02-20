// import React from 'react'
// import Index from '@/Investment'

// export default function page() {
//   return (
//     <div>
//     <Index/>
//     </div>
//   )
// }

import React from 'react';
import Index from '@/Investment';

// Page-specific metadata (overrides RootLayout metadata)
export const metadata = {
  title: "Finsbee - Investment Options",
  description: "Check all your investment options with Finsbee, including gold, silver, and more.",
  keywords: ["investment", "gold", "silver", "finance", "Finsbee"],
};

export default function page() {
  return (
    <div>
      <Index />
    </div>
  );
}
