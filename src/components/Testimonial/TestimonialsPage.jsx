

// "use client";


// const CARD_BG = "#2C1E8A";        // deep royal purple
// const CARD_ACCENT = "#7D5FFF";    // lavender outline for first card

// const DATA = [
//   {
//     id: 1,
//     text: `“FinsBee simplified my business loan process. The low interest rates and quick approval helped me expand my workshop without delays. The rewards were an added bonus which I used for essential purchases.”`,
//     name: "Ankit Verma",
//     title: "Delhi · Small Manufacturer",
    
//     highlight: true,             // first card outlined
//   },
//   {
//     id: 2,
//     text: `“Mujhe ek personal loan chahiye tha family emergency ke liye. FinsBee ne sirf kuch ghanton me approval de diya. App use karna super easy hai aur repayment track karna bhi tension-free. Rewards system ne loan lene ko rewarding bana diya!"`,
//     name: "Neha Kulkarni",
//     title: "Pune · IT Professional",
   
//   },
//   {
//     id: 3,
//     text: `“After checking multiple options, I chose FinsBee for my home loan. The interest rate was the lowest I found, and the paperless process saved me weeks of effort. Their team was always available to answer my doubts patiently.”`,
//     name: "Rajesh Nair",
//     title: "Kochi · Teacher",
 
//   },
// ];

// export default function TestimonialsPage() {
//   return (
//     <div className="">
//       {/* header */}
//       <section className="max-w-6xl mx-auto px-6 ">
//         <div className="text-center">
//           <p className="text-sm md:text-base text-gray-700 font-medium  gap-3">Trusted by</p>
//           <h1 className="text-[36px] leading-tight md:text-[56px] font-extrabold text-[#111827]">
//             10 Lakh+ <br className="" /> Finsbee Users
//           </h1>
        
//         </div>
//       </section>

//       {/* cards */}
// <section className="max-w-6xl mx-auto px-6">
//   <div className="
//     flex gap-6 overflow-x-auto pb-4
//     md:grid md:grid-cols-3 md:gap-10
//     md:overflow-visible
//     snap-x snap-mandatory
//   ">
//           {DATA.map((item) => (
//             <Testimonial key={item.id} {...item} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// function Testimonial({ text, name, title, img, highlight }) {
//   return (
//     <div className="flex flex-col items-start pt-5 pb-12 md:pb-24 min-w-[280px] snap-start">
//       {/* OUTER highlight frame only for the first card */}
//       <div
//         className={[
//           "w-full",
//            "",
//         ].join(" ")}
//         style={highlight ? { borderColor: CARD_ACCENT } : {}}
//       >
//         {/* CARD */}
//         <div 
//         className="w-full rounded-tl-[64px] rounded-br-[64px] rounded-tr-2xl shadow-lg min-h-[320px] flex flex-col"
//           style={{ backgroundColor: CARD_BG }}
//         >
//           <div className="px-4  md:px-8 py-9">
//             {/* opening quote */}
//             <div className="text-white/95 text-[40px] leading-none select-none ">“</div>

//             {/* content */}
//             <p className="text-white text-[15px] leading-6 md:text-base md:leading-7 opacity-95">
//               {text}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* USER meta is OUTSIDE the card */}
//       <div className="flex items-center gap-3 mt-5">
       
//         <div>
//           <div className="text-[#111827] text-sm font-semibold">{name}</div>
//           <div className="text-gray-500 text-xs md:text-sm">{title}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";

const CARD_BG = "#2C1E8A";
const CARD_ACCENT = "#7D5FFF";

export default function TestimonialsPage() {
  const [header, setHeader] = useState({
    heading: "",
    title: "",
  });

  const [data, setData] = useState([]);

  // 🔥 CLIENT-SIDE API FETCH (same style as other sections)
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          "https://admin.finsbee.com/api/testimonials"
        );
        const json = await res.json();

        const section = json?.data?.[0];

        setHeader({
          heading: section?.heading || "",
          title: section?.title || "",
        });

        const mappedData = (section?.review || []).map((item, index) => ({
          id: index + 1,
          text: `“${item.review}”`,
          name: item.reviewer_name,
          title: item.profession,
          highlight: index === 0, // first card outlined
        }));

        setData(mappedData);
      } catch (error) {
        console.error("Testimonials fetch failed", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div>
      {/* header */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            {header.heading}
          </p>
          <h1 className="text-[36px] leading-tight md:text-[56px] font-extrabold text-[#111827] whitespace-pre-line">
            {header.title}
          </h1>
        </div>
      </section>

      {/* cards */}
      <section className="max-w-6xl mx-auto px-6">
        <div
          className="
            flex gap-6 overflow-x-auto pb-4
            md:grid md:grid-cols-3 md:gap-10
            md:overflow-visible
            snap-x snap-mandatory
          "
        >
          {data.map((item) => (
            <Testimonial key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Testimonial({ text, name, title, highlight }) {
  return (
    <div className="flex flex-col items-start pt-5 pb-12 md:pb-24 min-w-[280px] snap-start">
      {/* OUTER highlight frame only for first card */}
      <div
        className="w-full"
        style={highlight ? { borderColor: CARD_ACCENT } : {}}
      >
        {/* CARD */}
        <div
          className="w-full rounded-tl-[64px] rounded-br-[64px] rounded-tr-2xl shadow-lg min-h-[320px] flex flex-col"
          style={{ backgroundColor: CARD_BG }}
        >
          <div className="px-4 md:px-8 py-9">
            <div className="text-white/95 text-[40px] leading-none select-none">
              “
            </div>

            <p className="text-white text-[15px] leading-6 md:text-base md:leading-7 opacity-95">
              {text}
            </p>
          </div>
        </div>
      </div>

      {/* USER meta */}
      <div className="flex items-center gap-3 mt-5">
        <div>
          <div className="text-[#111827] text-sm font-semibold">
            {name}
          </div>
          <div className="text-gray-500 text-xs md:text-sm">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
