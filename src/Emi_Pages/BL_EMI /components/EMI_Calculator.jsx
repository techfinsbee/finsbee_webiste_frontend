
// "use client";
// import { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
//   Sector,
//   Label,
// } from "recharts";

// const EmiCalculator = () => {
//   const [loanAmount, setLoanAmount] = useState(125000);
//   const [interestRate, setInterestRate] = useState(12);
//   const [tenure, setTenure] = useState(12);

//   const r = interestRate / (12 * 100);
//   const emi =
//     (loanAmount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
//   const totalAmount = emi * tenure;
//   const totalInterest = totalAmount - loanAmount;

//   const data = [
//     { name: "Loan Amount", value: loanAmount, color: "#F59E9E" },
//     { name: "Interest", value: totalInterest, color: "#8B5CF6" },
//   ];

//   const renderCustomConnector = ({
//     cx,
//     cy,
//     midAngle,
//     outerRadius,
//     fill,
//     payload,
//   }) => {
//     const RADIAN = Math.PI / 180;
//     const sin = Math.sin(-midAngle * RADIAN);
//     const cos = Math.cos(-midAngle * RADIAN);

//     // Point on outer edge of the pie
//     const sx = cx + outerRadius * cos;
//     const sy = cy + outerRadius * sin;

//     // End point of connector
//     const ex = cx + (outerRadius + 40) * cos; // distance from center
//     const ey = cy + (outerRadius + 40) * sin;

//     // Horizontal end for L-shape (top-right or bottom-left)
//     const hx = ex + (cos >= 0 ? 30 : -30);
//     const hy = ey + (sin >= 0 ? 20 : -20);

//     return (
//       <>
//         <path
//           d={`M${sx},${sy} L${ex},${ey} L${hx},${hy}`}
//           stroke={fill}
//           strokeWidth={1.5}
//           fill="none"
//         />
//         <circle cx={hx} cy={hy} r={3} fill={fill} />
//         <text
//           x={hx + (cos >= 0 ? 5 : -5)}
//           y={hy - 5}
//           fill="#333"
//           fontSize={12}
//           textAnchor={cos >= 0 ? "start" : "end"}
//         >
//           {payload.name}
//         </text>
//         <text
//           x={hx + (cos >= 0 ? 5 : -5)}
//           y={hy + 10}
//           fill={fill}
//           fontSize={12}
//           fontWeight={600}
//           textAnchor={cos >= 0 ? "start" : "end"}
//         >
//           ₹{payload.value.toLocaleString()}
//         </text>
//       </>
//     );
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6 w-full  mx-auto flex flex-col md:flex-row gap-6">
//       <div className="flex flex-col  w-full md:w-1/2">
//         <div className="border border-yellow-300 rounded-xl gap-6 bg-yellow-50 p-4">
//           <div className="flex justify-between items-center mb-2">
//             <p className="text-gray-700 font-medium">Your Monthly EMI Amount</p>
//             <p className="text-blue-600 font-bold text-lg">₹{emi.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between text-gray-700">
//             <p>Total interest</p>
//             <p>₹{totalInterest.toFixed(2)}</p>
//           </div>
//           <div className="flex justify-between text-gray-700">
//             <p>Total Amount</p>
//             <p>₹{totalAmount.toFixed(2)}</p>
//           </div>
//         </div>

//         {/* Responsive PieChart */}
//         <div className="flex flex-col items-center w-full">
//           <ResponsiveContainer width="100%" height={350}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={40}
//                 outerRadius={100}
//                 startAngle={90}
//                 endAngle={-270}
//                 label={renderCustomConnector}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       {/* </div> */}
//       {/* Loan + Interest Info */}
//            <div className="flex flex-col w-full px-6 mt-2 text-gray-700">
//              <div className="flex justify-between">
//               <p>Interest rate per annum</p>
//               <p className="font-medium">{interestRate}%</p>
//             </div>
//             <div className="flex justify-between">
//               <p>Loan amount</p>
//               <p className="font-medium">₹{loanAmount.toLocaleString()}</p>
//             </div>
//           </div>
//         </div>
  
//       {/* Right side inputs remain unchanged */}
//       <div className="flex flex-col gap-10 w-full md:w-1/2  ">
//         <div className="space-y-5">
//           <div className="flex justify-between">
//           <label className="block text-gray-700 font-medium py-6">
//             Loan Amount
//           </label>
//           <input
//             type="number"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(Number(e.target.value))}
//             className="w-fit border border-gray-400 rounded-lg px-3 py-5 mb-2"
//           />
//           </div>
//           <input
//             type="range"
//             min="5000"
//             max="500000"
//             step="1000"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(Number(e.target.value))}
//             className="w-full border-gray-400 accent-yellow-400"
//           />
//         </div>

//          <div className="space-y-5">
//           <div className="flex justify-between">
//           <label className="block text-gray-700 font-medium py-6">
//             Interest Rate
//           </label>
//           <input
//             type="number"
//             value={interestRate}
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//             className="w-fit border border-gray-400 rounded-lg px-3 py-5 mb-2"
//           />
//           </div>
//           <input
//             type="range"
//             min="6"
//             max="36"
//             step="1"
//             value={interestRate}
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//             className="w-full accent-yellow-400"
//           />
//         </div>

//         <div className="space-y-5">
//           <div className="flex justify-between">
//           <label className="block text-gray-700 font-medium py-6">
//             Loan Tenure
//           </label>
//           <input
//             type="number"
//             value={tenure}
//             onChange={(e) => setTenure(Number(e.target.value))}
//             className="w-fit border border-gray-400 rounded-lg px-3 py-5 mb-2"
//           />
//           </div>
//           <input
//             type="range"
//             min="12"
//             max="60"
//             step="1"
//             value={tenure}
//             onChange={(e) => setTenure(Number(e.target.value))}
//             className="w-full accent-yellow-400"
//           />
         
//         </div>
      
//          <button className="bg-yellow-400 bottom-0 hover:bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg shadow">
//           Apply Now for Loan
//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default EmiCalculator;


"use client";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Link from 'next/link';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(125000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const r = interestRate / (12 * 100);
  const emi =
    (loanAmount * r * Math.pow(1 + r, tenure)) /
    (Math.pow(1 + r, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  const data = [
    { name: "Loan Amount", value: loanAmount, color: "#F59E9E" },
    { name: "Interest", value: totalInterest, color: "#8B5CF6" },
  ];

  const renderCustomConnector = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    fill,
    payload,
  }) => {
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-midAngle * RADIAN);
    const cos = Math.cos(-midAngle * RADIAN);

    // shorten connector on mobile
    const offset = isMobile ? 20 : 40; // distance from outer edge
    const labelOffset = isMobile ? 18 : 30; // horizontal end offset
    const textOffset = isMobile ? 2 : 5; // text padding

    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;

    const ex = cx + (outerRadius + offset) * cos;
    const ey = cy + (outerRadius + offset) * sin;

    const hx = ex + (cos >= 0 ? labelOffset : -labelOffset);
    const hy = ey + (sin >= 0 ? 10 : -10);

    return (
      <>
        <path
          d={`M${sx},${sy} L${ex},${ey} L${hx},${hy}`}
          stroke={fill}
          strokeWidth={1.5}
          fill="none"
        />
        <circle cx={hx} cy={hy} r={3} fill={fill} />
        <text
          x={hx + (cos >= 0 ? textOffset : -textOffset)}
          y={hy - 5}
          fill="#333"
          fontSize={isMobile ? 9 : 12}
          textAnchor={cos >= 0 ? "start" : "end"}
        >
          {payload.name}
        </text>
        <text
          x={hx + (cos >= 0 ? textOffset : -textOffset)}
          y={hy + 10}
          fill={fill}
          fontSize={isMobile ? 9 : 12}
          fontWeight={600}
          textAnchor={cos >= 0 ? "start" : "end"}
        >
          ₹{payload.value.toLocaleString()}
        </text>
      </>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-[5px] md:p-6 w-full mx-auto flex flex-col lg:flex-row gap-6">
      {/* Left side */}
      <div className="flex flex-col w-full lg:w-1/2">
        <div className="border border-yellow-300 rounded-xl gap-6 bg-yellow-50 p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700 font-medium">Your Monthly EMI Amount</p>
            <p className="text-blue-600 font-bold text-lg">₹{emi.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Total interest</p>
            <p>₹{totalInterest.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Total Amount</p>
            <p>₹{totalAmount.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <ResponsiveContainer width="100%" height={isMobile ? 250 : 370}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={isMobile ? 25 : 40}
                outerRadius={isMobile ? 56 : 100}
                startAngle={90}
                endAngle={-270}
                label={renderCustomConnector}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col w-full px-6  text-gray-700">
          <div className="flex justify-between">
            <p>Interest rate per annum</p>
            <p className="font-medium">{interestRate}%</p>
          </div>
          <div className="flex justify-between">
            <p>Loan amount</p>
            <p className="font-medium">₹{loanAmount.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Right side inputs */}
      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <div className="space-y-5">
          <div className="flex justify-between">
            <label className="block text-gray-700 font-medium py-6">
              Loan Amount
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-fit border border-gray-400 rounded-lg px-3 py-5 mb-2"
            />
          </div>
          <input
            type="range"
            min="5000"
            max="500000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full accent-yellow-400"
          />
        </div>

        <div className="space-y-5">
          <div className="flex justify-between">
            <label className="block text-gray-700 font-medium py-6">
              Interest Rate
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-fit border border-gray-400 rounded-lg px-3 py-5 mb-2"
            />
          </div>
          <input
            type="range"
            min="6"
            max="36"
            step="1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-yellow-400"
          />
        </div>

        <div className="space-y-5">
          <div className="flex justify-between">
            <label className="block text-gray-700 font-medium py-6">
              Loan Tenure
            </label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-fit border border-gray-400 rounded-lg px-3 py-5 mb-2"
            />
          </div>
          <input
            type="range"
            min="12"
            max="60"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-yellow-400"
          />
        </div>

               <Link href="/flutterapp/index.html" className="w-full">
         <button className="bg-yellow-400 w-full bottom-0 hover:bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg shadow">
          Apply Now for Loan
        </button>
        </Link>
      </div>
    </div>
  );
};

export default EmiCalculator;
