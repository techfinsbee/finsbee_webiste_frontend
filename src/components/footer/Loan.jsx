// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function LoanApplicationSection() {
//   const loanLinks1 = [
//     { label: "Personal Loan in Bangalore", path: "/personal-loan" },
//     { label: "Business Loan in Bangalore", path: "/business-loan" },
//     { label: "Home Loan in Bangalore", path: "/home-loan" },
//     { label: "Education Loan in Bangalore", path: "/personal-loan" },
//   ];

//   const loanLinks2 = [
//     { label: "Personal Loan in Delhi", path: "/personal-loan" },
//     { label: "Business Loan in Delhi", path: "/business-loan" },
//     { label: "Home Loan in Delhi", path: "/home-loan" },
//     { label: "Education Loan in Delhi", path: "/personal-loan" },
//   ];

//   const loanLinks3 = [
//     { label: "Personal Loan in Mumbai", path: "/personal-loan" },
//     { label: "Business Loan in Mumbai", path: "/business-loan" },
//     { label: "Home Loan in Mumbai", path: "/home-loan" },
//     { label: "Education Loan in Mumbai", path: "/personal-loan" },
//   ];

//   const loanLinks4 = [
//     { label: "Personal Loan in Lucknow", path: "/personal-loan" },
//     { label: "Business Loan in Lucknow", path: "/personal-loan" },
//     { label: "Home Loan in Lucknow", path: "/home-loan" },
//     { label: "Education Loan in Lucknow", path: "/personal-loan" },
//   ];

//   const columns = [
//     { links: loanLinks1 },
//     { links: loanLinks2 },
//     { links: loanLinks3 },
//     { links: loanLinks4 },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const [showScrollBtn, setShowScrollBtn] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
//       // Show button if scrolled more than 20% of the page or more than 2 viewport heights
//       setShowScrollBtn(scrollPercent > 0.2 || scrollY > 2 * window.innerHeight);
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative w-full flex flex-col items-start px-4 sm:px-0 gap-8 mb-6 md:mb-0">
//       <h2 className="w-full text-white text-3xl font-bold mb-4">
//         Apply for Loan in Your City
//       </h2>

//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {columns.map((column, columnIndex) => (
//           <nav key={columnIndex} className="flex flex-col gap-3">
//             {column.links.map((link, linkIndex) => (
//               <Link
//                 key={linkIndex}
//                 href={link.path}
//                 className={`block  rounded transition-colors duration-200 outline-none
//                   ${
//                     linkIndex === 0
//                       ? "text-white hover:underline"
//                       : "text-white hover:underline"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         ))}
//       </div>

//       {/* Scroll To Top Button - only show when footer is in view */}
//       {showScrollBtn && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 mb-[114px] lg:mb-[86px] text-black rounded-full shadow-lg cursor-pointer transition-all duration-300"
//           aria-label="Scroll to top"
//         >
//           <img src="/arrow_button.svg" alt="Scroll to top" className="w-15 h-15" />
//         </button>
//       )}
//     </section>
//   );
// }





// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function LoanApplicationSection() {
//   // Define cities and loan types
//   const cities = ["Bangalore", "Delhi", "Mumbai", "Lucknow"];

//   const loanTypes = [
//     { name: "Personal Loan", slug: "personal-loan" },
//     { name: "Business Loan", slug: "business-loan" },
//     { name: "Home Loan", slug: "home-loan" },
//     { name: "Education Loan", slug: "personal-loan" }, // or create separate if needed
//   ];

//   // Generate columns dynamically
//   const columns = cities.map((city) => ({
//     links: loanTypes.map((loan) => ({
//       label: `${loan.name} in ${city}`,
//       path: `/${loan.slug}?title=${encodeURIComponent(`${loan.name} in ${city}`)}`,
//     })),
//   }));

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// export default function LoanApplicationSection() {
//   const cities = ["Bangalore", "Delhi", "Mumbai", "Lucknow"];

//   const loanTypes = [
//     { name: "Personal Loan",slug: "personal-loan",bg: "bg/bangalore.webp" }, // example custom for personal
//     { name: "Business Loan",slug: "business-loan",bg: "bg/delhi.webp" },
//     { name: "Home Loan",slug: "home-loan",bg: "bg/lucknow.webp" },
//     { name: "Education Loan",slug: "personal-loan",bg: "city/education.webp" }, // reuse personal slug or create new
//   ];

//   // If you want city-specific backgrounds, define a map
//   const cityBgMap = {
//     Bangalore: "bg/banglore.webp",
//     Delhi: "bg/delhi.webp",
//     Lucknow: "bg/lucknow.webp",
//     Mumbai: "bg/mumbai.webp",
    
//   };

//   const columns = cities.map((city) => ({
//     links: loanTypes.map((loan) => {
//       // Priority: city-specific > loan-type bg > null (use default)
//       const customBg = cityBgMap[city] || loan.bg || null;

//       const params = new URLSearchParams();
//       params.set("title", encodeURIComponent(`${loan.name} in ${city}`));
//       if (customBg) {
//         params.set("bg", customBg);  // send the bg path
//       }

//       return {
//         label: `${loan.name} in ${city}`,
//         path: `/${loan.slug}?${params.toString()}`,
//       };
//     }),
//   }));

//   // ... rest of your component (scroll button etc.) remains the same


//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const [showScrollBtn, setShowScrollBtn] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
//       setShowScrollBtn(scrollPercent > 0.2 || scrollY > 2 * window.innerHeight);
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative w-full flex flex-col items-start px-4 sm:px-0 gap-8 mb-6 md:mb-0">
//       <h2 className="w-full text-white text-3xl font-bold mb-4">
//         Apply for Loan in Your City
//       </h2>

//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {columns.map((column, columnIndex) => (
//           <nav key={columnIndex} className="flex flex-col gap-3">
//             {column.links.map((link, linkIndex) => (
//               <Link
//                 key={linkIndex}
//                 href={link.path}
//                 className="block text-white hover:underline transition-colors duration-200"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//         ))}
//       </div>

//       {/* Scroll To Top Button */}
//       {showScrollBtn && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 mb-[114px] lg:mb-[86px] text-black rounded-full shadow-lg cursor-pointer transition-all duration-300"
//           aria-label="Scroll to top"
//         >
//           <img src="/arrow_button.svg" alt="Scroll to top" className="w-15 h-15" />
//         </button>
//       )}
//     </section>
//   );
// }



"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function LoanApplicationSection() {
  const cities = ["Bangalore", "Delhi", "Mumbai", "Lucknow"];

  const cityBgMap = {
    Bangalore: "bg/banglore.webp",
    Delhi: "bg/delhi.webp",
    Lucknow: "bg/lucknow.webp",
    Mumbai: "bg/mumbai.webp",
  };

  const loanTypes = [
    { name: "Personal Loan", slug: "personal-loan" },
    { name: "Business Loan", slug: "apply-for-business-loan" },
    { name: "Home Loan", slug: "apply-for-home-loan" },
    { name: "Education Loan", slug: "education-loan" },
  ];

  const columns = cities.map((city) => {
    const cityBg = cityBgMap[city];

    return {
      city,
      links: loanTypes.map((loan) => {
        const query = {
          title: `${loan.name} in ${city}`,  
          ...(cityBg && { bg: cityBg }),
        };

        return {
          label: `${loan.name} in ${city}`,
          href: {
            pathname: `/${loan.slug}`,
            query,
          },
        };
      }),
    };
  });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = Math.max(window.innerHeight * 2, document.documentElement.scrollHeight * 0.2);
      setShowScrollBtn(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-start px-4 sm:px-0 gap-8 mb-6 md:mb-0">
      <h2 className="w-full text-white text-3xl font-bold mb-4">
        Apply for Loan in Your City
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {columns.map((column, idx) => (
          <nav key={idx} className="flex flex-col gap-3">
            <p className="text-yellow-300 font-semibold text-lg mb-2">{column.city}</p>
            {column.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}  // Pass object: { pathname, query }
                className="block text-white hover:underline transition-colors duration-200 text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>

      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 mb-[114px] lg:mb-[86px] rounded-full shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <img src="/arrow_button.svg" alt="Scroll to top" className="w-15 h-15" />
        </button>
      )}
    </section>
  );
}