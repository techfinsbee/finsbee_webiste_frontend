// import React from "react";

// export default function LoanApplicationSection()  {
//   const loanLinks = [
//     "Personal Loan in Banglore",
//     "Personal Loan in Banglore",
//     "Personal Loan in Banglore",
//     "Personal Loan in Banglore",
//     "Personal Loan in Banglore",
//     "Personal Loan in Banglore",
//   ];

//   const columns = [
//     { links: loanLinks },
//     { links: loanLinks },
//     { links: loanLinks },
//     { links: loanLinks },
//   ];

//   return (
//     <section className="justify-center gap-6 px-0 py-12 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
//       <h2 className="w-full text-white text-3xl font-bold">
//         Apply for Loan in Your City
//       </h2>

//       <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] gap-4">
//         {columns.map((column, columnIndex) => (
//           <div
//             key={columnIndex}
//             className="flex-1 gap-4 flex flex-col items-start relative"
//           >
//             <nav className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
//               {column.links.map((link, linkIndex) => (
//                 <div
//                   key={linkIndex}
//                   className="flex items-center gap-1 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]"
//                 >
//                   <a
//                     href="#"
//                     className="flex-1 leading-4 relative text-base hover:text-purple-200 transition-colors cursor-pointer"
//                   >
//                     <span
//                       className={`${linkIndex === 0 ? "text-purple-100" : "text-purple-200"}`}
//                     >
//                       {link}
//                     </span>
//                   </a>
//                 </div>
//               ))}
//             </nav>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };



// import React from "react";

// export default function LoanApplicationSection() {
//   // Example city-wise loan links, adjust the values for real data
//   const loanLinks = [
//     "Personal Loan in Bangalore",
//     "Business Loan in Bangalore",
//     "Home Loan in Bangalore",
//     "Education Loan in Bangalore",
//     "LAP in Bangalore",
//     "LAS in Bangalore",
//   ];

//   // You can adjust the number of columns or diversify city arrays per column as needed
//   const columns = [
//     { links: loanLinks },
//     { links: loanLinks },
//     { links: loanLinks },
//     { links: loanLinks },
//   ];

//   return (
//     <section className="w-full flex flex-col items-start px-4 sm:px-6 lg:px-10 py-12 gap-8">
//       <h2 className="w-full text-white text-3xl font-bold mb-4">
//         Apply for Loan in Your City
//       </h2>
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {columns.map((column, columnIndex) => (
//           <nav key={columnIndex} className="flex flex-col gap-3">
//             {column.links.map((link, linkIndex) => (
//               <a
//                 key={linkIndex}
//                 href="#"
//                 className={`block py-2 px-5 rounded transition-colors duration-200 outline-none
//                   ${
//                     linkIndex === 0
//                       ? "bg-purple-900 text-purple-100 font-semibold"
//                       : "bg-transparent text-purple-200 hover:bg-purple-800"
//                   } focus:bg-purple-700 focus:text-white`}
//               >
//                 {link}
//               </a>
//             ))}
//           </nav>
//         ))}
//       </div>
//     </section>
//   );
// }


import React from "react";

export default function LoanApplicationSection() {
  const loanLinks = [
    "Personal Loan in Bangalore",
    "Business Loan in Bangalore",
    "Home Loan in Bangalore",
    "Education Loan in Bangalore",
    "LAP in Bangalore",
    "LAS in Bangalore",
  ];

  const columns = [
    { links: loanLinks },
    { links: loanLinks },
    { links: loanLinks },
    { links: loanLinks },
  ];

  return (
    <section className="w-full flex flex-col items-start px-4 sm:px-6 lg:px-10 py-12 gap-8">
      <h2 className="w-full text-white text-3xl font-bold mb-4">
        Apply for Loan in Your City
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column, columnIndex) => (
          <nav key={columnIndex} className="flex flex-col gap-3">
            {column.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className={`block py-2 px-5 rounded transition-colors duration-200 outline-none
                  ${
                    linkIndex === 0
                      ? "bg-purple-900 text-purple-100 font-semibold"
                      : "bg-transparent text-purple-200 hover:bg-purple-800"
                  } focus:bg-purple-700 focus:text-white`}
              >
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>
    </section>
  );
}