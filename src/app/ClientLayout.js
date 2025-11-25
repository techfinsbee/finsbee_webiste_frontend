

// "use client";

// import { Navbar } from "@/components/Navbar";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ClientLayout({ children }) {
//   const pathname = usePathname();
//   const [showNavbar, setShowNavbar] = useState(null); // <-- start as null to delay render

//   useEffect(() => {
//     const hideNavbarRoutes = ["/booking", "/Instant-form"];
//     setShowNavbar(!hideNavbarRoutes.includes(pathname));
//   }, [pathname]);

//   if (showNavbar === null) return null; // Render nothing until route check completes

//   return (
//     <>
//       {showNavbar && <Navbar />}
//       <main className="relative w-full">{children}</main>
//     </>
//   );
// }


"use client";

import { Navbar } from "@/components/Navbar";
import BottomCTA from "@/Booking_Components/BookingBtn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(null);
  const [showBottomCTA, setShowBottomCTA] = useState(null);

  useEffect(() => {
    // pages where Navbar + CTA should be hidden
    const hiddenRoutes = ["/booking", "/Instant-form"];

    const shouldShow = !hiddenRoutes.includes(pathname);

    setShowNavbar(shouldShow);
    setShowBottomCTA(shouldShow);
  }, [pathname]);

  if (showNavbar === null || showBottomCTA === null) return null;

  return (
    <>
      {showNavbar && <Navbar />}

      <main className="relative w-full">
        {/* pb-20 so page content does not hide behind fixed CTA */}
        {children}
      </main>

      {/* Mobile Bottom Button */}
      {showBottomCTA && <BottomCTA />}
    </>
  );
}
