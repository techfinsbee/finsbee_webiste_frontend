// "use client";
// import Image from "next/image";

// export default function TestimonialsPage() {
//   const testimonials = [
//     {
//       id: 1,
//       text: `"Finsbee makes gold investment process a breeze! It’s fast, reliable, and so easy to use. Whether I’m selling or buying gold, Finsbee truly simplifies all my payment processes."`,
//       name: "Priya K.",
//       title: "Small Business Owner",
//       img: "/form_page/user1.jpg", // replace with your user image
//     },
//     {
//       id: 2,
//       text: `"Finsbee makes gold investment process a breeze! It’s fast, reliable, and so easy to use. Whether I’m selling or buying gold, Finsbee truly simplifies all my payment processes."`,
//       name: "Priya K.",
//       title: "Small Business Owner",
//       img: "/form_page/user1.jpg",
//     },
//     {
//       id: 3,
//       text: `"Finsbee makes gold investment process a breeze! It’s fast, reliable, and so easy to use. Whether I’m selling or buying gold, Finsbee truly simplifies all my payment processes."`,
//       name: "Priya K.",
//       title: "Small Business Owner",
//       img: "/form_page/user1.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
//       {/* Header */}
//       <div className="text-center max-w-2xl mb-16">
//         <p className="text-gray-700 font-medium mb-2">Trusted by</p>
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-4">
//           10 Lakh+ <br className="" /> Finsbee Users
//         </h1>
//         <p className="text-gray-500 text-base leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//         </p>
//       </div>

//       {/* Testimonials */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
//         {testimonials.map((item, i) => (
//           <div
//             key={item.id}
//             className={`relative rounded-2xl bg-[#2C1E8A] text-white px-8 py-10 shadow-lg transition-transform duration-300 ${
//               i === 0 ? "border-4 border-[#7D5FFF]" : ""
//             }`}
//           >
//             {/* Quote Icon */}
//             <div className="text-5xl text-white font-serif mb-4">“</div>
//             <p className="text-base leading-relaxed opacity-90">{item.text}</p>

//             {/* User Info */}
//             <div className="flex items-center gap-3 mt-8">
//               <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                 <Image
//                   src={item.img}
//                   alt={item.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h4 className="text-sm font-semibold">{item.name}</h4>
//                 <p className="text-xs text-gray-300">{item.title}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";

const CARD_BG = "#2C1E8A";        // deep royal purple
const CARD_ACCENT = "#7D5FFF";    // lavender outline for first card

const DATA = [
  {
    id: 1,
    text: `“FinsBee simplified my business loan process. The low interest rates and quick approval helped me expand my workshop without delays. The rewards were an added bonus which I used for essential purchases.”`,
    name: "Ankit Verma",
    title: "Delhi · Small Manufacturer",
    img: "/landing_page/image.svg", // replace with your asset
    highlight: true,             // first card outlined
  },
  {
    id: 2,
    text: `“Mujhe ek personal loan chahiye tha family emergency ke liye. FinsBee ne sirf kuch ghanton me approval de diya. App use karna super easy hai aur repayment track karna bhi tension-free. Rewards system ne loan lene ko rewarding bana diya!"`,
    name: "Neha Kulkarni",
    title: "Pune · IT Professional",
    img: "/landing_page/image.svg",
  },
  {
    id: 3,
    text: `“After checking multiple options, I chose FinsBee for my home loan. The interest rate was the lowest I found, and the paperless process saved me weeks of effort. Their team was always available to answer my doubts patiently.”`,
    name: "Rajesh Nair",
    title: "Kochi · Teacher",
    img: "/landing_page/image.svg",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 md:pt-24">
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-700 font-medium mb-3">Trusted by</p>
          <h1 className="text-[36px] leading-tight md:text-[56px] font-extrabold text-[#111827]">
            10 Lakh+ <br className="" /> Finsbee Users
          </h1>
          <p className="mt-4 text-[14px] md:text-base text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </section>

      {/* cards */}
      <section className="max-w-6xl mx-auto px-6 mt-12 md:mt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {DATA.map((item) => (
            <Testimonial key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Testimonial({ text, name, title, img, highlight }) {
  return (
    <div className="flex flex-col items-start">
      {/* OUTER highlight frame only for the first card */}
      <div
        className={[
          "w-full",
           "",
        ].join(" ")}
        style={highlight ? { borderColor: CARD_ACCENT } : {}}
      >
        {/* CARD */}
        <div
          className="w-full rounded-tl-[64px] rounded-br-[64px]  rounded-tr-2xl shadow-lg"
          style={{ backgroundColor: CARD_BG }}
        >
          <div className="px-8 py-9 md:px-10 md:py-10">
            {/* opening quote */}
            <div className="text-white/95 text-[44px] leading-none select-none mb-3">“</div>

            {/* content */}
            <p className="text-white text-[15px] leading-6 md:text-base md:leading-7 opacity-95">
              {text}
            </p>
          </div>
        </div>
      </div>

      {/* USER meta is OUTSIDE the card */}
      <div className="flex items-center gap-3 mt-5">
        <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-white shadow">
          {/* if you don't have next/image, replace with <img ... /> */}
          <Image
            src={img}
            alt={name}
            width={44}
            height={44}
            className="object-cover"
          />
        </div>
        <div>
          <div className="text-[#111827] text-sm font-semibold">{name}</div>
          <div className="text-gray-500 text-xs md:text-sm">{title}</div>
        </div>
      </div>
    </div>
  );
}

