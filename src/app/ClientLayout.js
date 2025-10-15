"use client";

import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Hide Navbar only on /booking page
    const hideNavbarRoutes = ["/booking"];
    setShowNavbar(!hideNavbarRoutes.includes(pathname));
  }, [pathname]);

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="relative w-full">{children}</main>
    </>
  );
}
