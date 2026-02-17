// "use client";

// export default function FormCard({ children }) {
//   return (
//     <div
//       className="
//         flex 
//         justify-center 
//         px-4 
//         pt-4
//         min-h-screen
//         bg-[#EEEAFF]
//         bg-no-repeat
//         bg-cover
//         bg-center
//       "
//       style={{
//         backgroundImage: "url('/booking/planbg.png')",
//       }}
//     >
//       <div
//         className="
//           w-[590px]
//           bg-white
//           rounded-[24px]
//           px-8
//           py-10
//           shadow-[0_30px_80px_rgba(0,0,0,0.08)]
//         "
//       >
//         {children}
//       </div>
//     </div>
//   );
// }


"use client";

export default function FormCard({ children }) {
  return (
    <div className="relative min-h-screen flex justify-center px-4 pt-4 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/booking/planbg.png')",
        }}
      />

      {/* Color Overlay (on top of image) */}
      <div className="absolute inset-0 bg-[#EEEAFF] opacity-60" />

      {/* Card Content */}
      <div className="relative w-[590px] bg-white rounded-[24px] px-8 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        {children}
      </div>
    </div>
  );
}
