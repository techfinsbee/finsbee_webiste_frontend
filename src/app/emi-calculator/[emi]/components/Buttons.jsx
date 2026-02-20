// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { emiData } from "@/data/emiData";

// const Buttons = ({ currentEmi }) => {
//   const router = useRouter();

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "2rem",
//         justifyContent: "center",
//       }}
//     >
//       {Object.entries(emiData).map(([slug, item]) => {
//         if (slug === currentEmi) return null; // ❌ hide current page button

//         return (
//           <div
//             key={slug}
//             onClick={() => router.push(`/emi-calculator/${slug}`)}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               background: "#fff",
//               borderRadius: "16px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
//               padding: "1.25rem 2rem",
//               margin: "0.5rem",
//               minWidth: "280px",
//               cursor: "pointer",
//               transition: "box-shadow 0.3s",
//             }}
//           >
//             <img
//               src={item.icon}
//               alt={item.title}
//               style={{ width: "28px", height: "28px", marginRight: "1rem" }}
//             />

//             <span
//               style={{
//                 flex: 1,
//                 fontSize: "1.1rem",
//                 color: "#333",
//               }}
//             >
//               {item.title}
//             </span>

//             <img
//               src="/brand_logo/arrow-right.svg"
//               alt="arrow"
//               style={{ width: "28px", height: "28px" }}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Buttons;



"use client";

import { useRouter } from "next/navigation";

const STRAPI_URL = "https://admin.finsbee.com";

export default function Buttons({ currentSlug, pages }) {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      {pages.map((item) => {
        if (item.slug === currentSlug) return null;

        return (
          <div
            key={item.slug}
            onClick={() =>
              router.push(`/emi-calculator/${item.slug}`)
            }
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              padding: "1.25rem 2rem",
              minWidth: "280px",
              cursor: "pointer",
            }}
          >
            <img
              src={`${STRAPI_URL}${item.icon}`}
              alt={item.title}
              style={{ width: 28, height: 28, marginRight: "1rem" }}
            />

            <span style={{ flex: 1 }}>
              {item.title}
            </span>

            <img
              src="/brand_logo/arrow-right.svg"
              alt="arrow"
              style={{ width: 28, height: 28 }}
            />
          </div>
        );
      })}
    </div>
  );
}
