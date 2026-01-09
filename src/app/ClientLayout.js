// "use client";

// import { Navbar } from "@/components/Navbar";
// // import BottomCTA from "@/Booking_Components/BookingBtn";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// // import Frame from "@/components/footer/Fram";
// import FreeClassCTA from "@/components/buttoms/FreeClassCTA";
// import BookingCTA from "@/components/buttoms/BookingCTA";
// import Desktopbuttom from "@/components/footer/Desktopbuttom";

// export default function ClientLayout({ children }) {
//   const pathname = usePathname();
//   const [showNavbar, setShowNavbar] = useState(null);
//   const [showBottomCTA, setShowBottomCTA] = useState(null);

//   useEffect(() => {
//     // pages where Navbar + CTA should be hidden
//     const hiddenRoutes = [
//       "/booking",
//       "/Instant-form",
//       "/loan/eligibility-documents",
        
//     ];

//     const shouldShow = !hiddenRoutes.includes(pathname);

//     setShowNavbar(shouldShow);
//     setShowBottomCTA(shouldShow);
//   }, [pathname]);

//   if (showNavbar === null || showBottomCTA === null) return null;

//   return (
//     <>
//       {showNavbar && <Navbar />}

//       <main className="relative  w-full">
//         {/* pb-20 so page content does not hide behind fixed CTA */}
//         {children}
//       </main>
//       {/* {showNavbar && <Frame/>} */}
//       {/* Mobile Bottom Button */}
//       {showBottomCTA && (
//         <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
//           <div className="flex flex-col gap-3 px-4 pb-5 pt-3">
//             <FreeClassCTA />
//             <BookingCTA />
//           </div>
//         </div>
//       )}

//       {showBottomCTA && (<div className=" fixed bottom-0 left-0 w-full z-50">
//         <Desktopbuttom/></div>) }
//     </>
//   );
// }


"use client";

import { Navbar } from "@/components/Navbar";
import FreeClassCTA from "@/components/buttoms/FreeClassCTA";
import BookingCTA from "@/components/buttoms/BookingCTA";
import Desktopbuttom from "@/components/footer/Desktopbuttom";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PersonalLoanPopup from "@/components/PersonalLoanPopup";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [showBottomCTA, setShowBottomCTA] = useState(true);

  useEffect(() => {
    // Regular routes where we intentionally hide layout
    const hiddenRoutes = [
      "/booking",
      "/Instant-form",
      "/loan/eligibility-documents",
      "/webinar-form",
    ];

    // Check if current path is one of the hidden routes
    const isHiddenRoute = hiddenRoutes.includes(pathname);

    // Detect 404 page:
    // 1. Document title contains "Not Found" (set by your metadata or not-found.jsx)
    // 2. OR pathname is completely unknown (fallback safety)
    const is404Page =
      document.title.includes("Not Found") ||
      document.title.includes("404");

    const shouldShow = !isHiddenRoute && !is404Page;

    setShowNavbar(shouldShow);
    setShowBottomCTA(shouldShow);
  }, [pathname]);

  // Show loading state until we decide
  if (showNavbar === null || showBottomCTA === null) return null;

  return (
    <>
      {showNavbar && <Navbar />}

      <main className="relative w-full">
        {children}
        <PersonalLoanPopup/>
      </main>

      {/* Mobile CTA */}
      {showBottomCTA && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
          <div className="flex flex-col gap-3 px-4 pb-5 pt-3">
            <FreeClassCTA />
            <BookingCTA />
          </div>
        </div>
      )}

      {/* Desktop CTA */}
      {showBottomCTA && (
        <div className="fixed bottom-0 left-0 w-full z-50">
          <Desktopbuttom />
        </div>
      )}
    </>
  );
}