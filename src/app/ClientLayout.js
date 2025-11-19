// "use client";

// import { Navbar } from "@/components/Navbar";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ClientLayout({ children }) {
//   const pathname = usePathname();
//   const [showNavbar, setShowNavbar] = useState(true);

//   useEffect(() => {
//     // Hide Navbar only on /booking page
//     const hideNavbarRoutes = ["/booking", "/form_Page"];
//     setShowNavbar(!hideNavbarRoutes.includes(pathname));
//   }, [pathname]);

//   return (
//     <>
//       {showNavbar && <Navbar />}
//       <main className="relative w-full">{children}</main>
//     </>
//   );
// }


"use client";

import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(null); // <-- start as null to delay render

  useEffect(() => {
    const hideNavbarRoutes = ["/booking", "/Instant-form"];
    setShowNavbar(!hideNavbarRoutes.includes(pathname));
  }, [pathname]);

  if (showNavbar === null) return null; // Render nothing until route check completes

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="relative w-full">{children}</main>
    </>
  );
}
