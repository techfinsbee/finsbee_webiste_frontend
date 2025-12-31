"use client";

import { Navbar } from "@/components/Navbar";
// import BottomCTA from "@/Booking_Components/BookingBtn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Frame from "@/components/footer/Fram";
import FreeClassCTA from "@/components/buttoms/FreeClassCTA";
import BookingCTA from "@/components/buttoms/BookingCTA";
import Desktopbuttom from "@/components/footer/Desktopbuttom";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(null);
  const [showBottomCTA, setShowBottomCTA] = useState(null);

  useEffect(() => {
    // pages where Navbar + CTA should be hidden
    const hiddenRoutes = [
      "/booking",
      "/Instant-form",
      "/loan/eligibility-documents",
    ];

    const shouldShow = !hiddenRoutes.includes(pathname);

    setShowNavbar(shouldShow);
    setShowBottomCTA(shouldShow);
  }, [pathname]);

  if (showNavbar === null || showBottomCTA === null) return null;

  return (
    <>
      {showNavbar && <Navbar />}

      <main className="relative  w-full">
        {/* pb-20 so page content does not hide behind fixed CTA */}
        {children}
      </main>
      {/* {showNavbar && <Frame/>} */}
      {/* Mobile Bottom Button */}
      {showBottomCTA && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
          <div className="flex flex-col gap-3 px-4 pb-5 pt-3">
            <FreeClassCTA />
            <BookingCTA />
          </div>
        </div>
      )}

      {showBottomCTA && (<div className=" fixed bottom-0 left-0 w-full z-50">
        <Desktopbuttom/></div>) }
    </>
  );
}
