// "use client";

// export default function ProductsSection() {
//   const products = [
//     {
//       id: 1,
//       image: "/Investment/gc1.svg",
//       title: "DG 2 Gram Gold Coin",
//       purity: "24k (99.9%)",
//     },
//     {
//       id: 2,
//       image: "/Investment/gb1.svg",
//       title: "DG 2 Gram Gold Coin",
//       purity: "24k (99.9%)",
//     },
//     {
//       id: 3,
//       image: "/Investment/sl1.svg",
//       title: "DG 2 Gram Gold Coin",
//       purity: "24k (99.9%)",
//     },
//     {
//       id: 4,
//       image: "/Investment/sb1.svg",
//       title: "DG 2 Gram Gold Coin",
//       purity: "24k (99.9%)",
//     },
//   ];

//   return (
//     <div className="min-h-screen px-[136px] bg-white">
//       <section className="flex flex-col items-center gap-12  py-24">
//         <div className="flex flex-col items-start gap-12 w-full ">
          
//           {/* Header */}
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-normal tracking-wide">
//             <span className="text-gray-700">Stay ahead with the latest </span>
//             <span className="text-yellow-400">digital gold and silver investment</span>
//             <span className="text-gray-700"> products, designed to meet diverse financial goals. From flexible micro-investments to advanced trading options, explore what's trending and </span>
//             <span className="text-yellow-400">make your portfolio future-ready.</span>
//           </h2>

//           {/* Products Grid */}
//           <div className="flex items-center justify-center md:justify-around gap-4 md:gap-10 pt-24 w-full flex-wrap">
//             <div className="flex items-center justify-between flex-1 flex-wrap gap-4 md:gap-0">
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex flex-col w-full sm:w-72 items-center justify-end gap-3 pt-0 pb-8 px-4 bg-gray-50 rounded-2xl border border-yellow-400 hover:scale-105 transition-transform duration-300"
//                 >
//                   {/* Image */}
//                   <div className="flex flex-col h-28 items-center justify-end p-2 w-full">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-60 h-52 -mt-28 object-cover"
//                     />
//                   </div>

//                   {/* Info */}
//                   <div className="flex flex-col items-center gap-2 w-full">
//                     <h3 className="text-xl font-bold text-gray-800 text-center leading-8">
//                       {product.title}
//                     </h3>
//                     <p className="text-base font-normal text-gray-800 text-center leading-normal tracking-wide">
//                       {product.purity}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      image: "/Investment/gc1.svg",
      title: "DG 2 Gram Gold Coin",
      purity: "24k (99.9%)",
    },
    {
      id: 2,
      image: "/Investment/gb1.svg",
      title: "DG 2 Gram Gold Coin",
      purity: "24k (99.9%)",
    },
    {
      id: 3,
      image: "/Investment/sl1.svg",
      title: "DG 2 Gram Gold Coin",
      purity: "24k (99.9%)",
    },
    {
      id: 4,
      image: "/Investment/sb1.svg",
      title: "DG 2 Gram Gold Coin",
      purity: "24k (99.9%)",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-8 md:px-16 lg:px-[136px]">
      <section className="flex flex-col items-center gap-8 sm:gap-12 py-16 sm:py-20 md:py-24">
        {/* Header */}
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 leading-relaxed tracking-wide text-center md:text-left">
          <span className="text-gray-700">Stay ahead with the latest </span>
          <span className="text-yellow-400">
            digital gold and silver investment{" "}
          </span>
          <span className="text-gray-700">
            products, designed to meet diverse financial goals. From flexible
            micro-investments to advanced trading options, explore what's
            trending and{" "}
          </span>
          <span className="text-yellow-400">make your portfolio future-ready.</span>
        </h2>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-end gap-3 pt-0 pb-8 px-4 bg-gray-50 rounded-2xl border border-yellow-400 hover:scale-105 transition-transform duration-300"
            >
              {/* Image */}
              <div className="flex flex-col h-28 items-center justify-end p-2 w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-52 -mt-20 sm:-mt-24 md:-mt-28 object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center gap-2 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center leading-8">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base font-normal text-gray-800 text-center leading-normal tracking-wide">
                  {product.purity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
