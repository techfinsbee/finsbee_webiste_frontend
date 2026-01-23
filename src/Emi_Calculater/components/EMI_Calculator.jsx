// "use client";
// import { useState } from "react";
// import { PieChart, Pie, Cell, Label, LabelList } from "recharts";

// const EmiCalculator = () => {
//   // State
//   const [loanAmount, setLoanAmount] = useState(125000);
//   const [interestRate, setInterestRate] = useState(12);
//   const [tenure, setTenure] = useState(12);

//   // EMI Calculation Formula
//   const r = interestRate / (12 * 100); // monthly interest rate
//   const emi =
//     (loanAmount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);

//   const totalAmount = emi * tenure;
//   const totalInterest = totalAmount - loanAmount;

//   // Chart Data
//   const data = [
//     { name: "Loan Amount", value: loanAmount, color: "#F59E9E" },
//     { name: "Interest", value: totalInterest, color: "#8B5CF6" },
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
//       {/* LEFT SIDE */}
//       <div className="flex flex-col gap-6 w-full md:w-1/2">
//         {/* EMI Card */}
//         <div className="border border-yellow-300 rounded-xl bg-yellow-50 p-4">
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

//         {/* Chart */}
//         <div className="flex flex-col items-center">
//           <PieChart width={700} height={300}>
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               innerRadius={80}
//               outerRadius={120}
//               startAngle={90}
//               endAngle={-270}
//               paddingAngle={0}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}

//               {/* Custom fixed connectors + labels */}
//               <g>
//                 {/* 🟣 Interest Line (Top Right - L shaped) */}
//                 <path
//                   d={`M210,90 L260,90 L285,65`} // L-shape connector (horizontal then diagonal)
//                   stroke="#8B5CF6"
//                   strokeWidth="1.5"
//                   fill="none"
//                 />
//                 <circle cx="285" cy="65" r="3" fill="#8B5CF6" />
//                 <text
//                   x="295"
//                   y="63"
//                   className="text-sm font-medium"
//                   fill="#333"
//                   textAnchor="start"
//                 >
//                   Interest
//                 </text>
//                 <text
//                   x="295"
//                   y="78"
//                   className="text-xs font-semibold"
//                   fill="#8B5CF6"
//                   textAnchor="start"
//                 >
//                   ₹{totalInterest.toFixed(0)}
//                 </text>

//                 {/* 🌸 Loan Amount Line (Bottom Right - straight) */}
//                 <path
//                   d={`M210,210 L280,210`} // straight line
//                   stroke="#F59E9E"
//                   strokeWidth="1.5"
//                   fill="none"
//                 />
//                 <circle cx="280" cy="210" r="3" fill="#F59E9E" />
//                 <text
//                   x="290"
//                   y="208"
//                   className="text-sm font-medium"
//                   fill="#333"
//                   textAnchor="start"
//                 >
//                   Loan Amount
//                 </text>
//                 <text
//                   x="290"
//                   y="223"
//                   className="text-xs font-semibold"
//                   fill="#F59E9E"
//                   textAnchor="start"
//                 >
//                   ₹{loanAmount.toFixed(0)}
//                 </text>
//               </g>
//             </Pie>
//           </PieChart>

//           {/* Loan + Interest Info */}
//           <div className="flex justify-between w-full px-6 mt-2 text-gray-700">
//             <div>
//               <p>Interest rate per annum</p>
//               <p className="font-medium">{interestRate}%</p>
//             </div>
//             <div>
//               <p>Loan amount</p>
//               <p className="font-medium">₹{loanAmount.toLocaleString()}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="flex flex-col gap-6 w-full md:w-1/2">
//         {/* Loan Amount */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">
//             Loan Amount
//           </label>
//           <input
//             type="number"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(Number(e.target.value))}
//             className="w-full border rounded-lg px-3 py-2 mb-2"
//           />
//           <input
//             type="range"
//             min="5000"
//             max="500000"
//             step="1000"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(Number(e.target.value))}
//             className="w-full accent-yellow-400"
//           />
//           <div className="flex justify-between text-sm text-gray-500">
//             <span>Min 5k</span>
//             <span>Max 5 Lac</span>
//           </div>
//         </div>

//         {/* Interest Rate */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">
//             Interest Rate
//           </label>
//           <input
//             type="number"
//             value={interestRate}
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//             className="w-full border rounded-lg px-3 py-2 mb-2"
//           />
//           <input
//             type="range"
//             min="6"
//             max="36"
//             step="1"
//             value={interestRate}
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//             className="w-full accent-yellow-400"
//           />
//           <div className="flex justify-between text-sm text-gray-500">
//             <span>Min 6%</span>
//             <span>Max 36%</span>
//           </div>
//         </div>

//         {/* Tenure */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">
//             Loan Tenure
//           </label>
//           <input
//             type="number"
//             value={tenure}
//             onChange={(e) => setTenure(Number(e.target.value))}
//             className="w-full border rounded-lg px-3 py-2 mb-2"
//           />
//           <input
//             type="range"
//             min="12"
//             max="60"
//             step="1"
//             value={tenure}
//             onChange={(e) => setTenure(Number(e.target.value))}
//             className="w-full accent-yellow-400"
//           />
//           <div className="flex justify-between text-sm text-gray-500">
//             <span>Min 12 months</span>
//             <span>Max 60 months</span>
//           </div>
//         </div>

//         {/* Button */}
//         <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg shadow">
//           Apply Now for Loan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmiCalculator;

"use client";
import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  Label,
} from "recharts";
import Link from 'next/link';
const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(125000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(12);

  const r = interestRate / (12 * 100);
  const emi =
    (loanAmount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
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

    // Point on outer edge of the pie
    const sx = cx + outerRadius * cos;
    const sy = cy + outerRadius * sin;

    // End point of connector
    const ex = cx + (outerRadius + 40) * cos; // distance from center
    const ey = cy + (outerRadius + 40) * sin;

    // Horizontal end for L-shape (top-right or bottom-left)
    const hx = ex + (cos >= 0 ? 30 : -30);
    const hy = ey + (sin >= 0 ? 20 : -20);

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
          x={hx + (cos >= 0 ? 5 : -5)}
          y={hy - 5}
          fill="#333"
          fontSize={12}
          textAnchor={cos >= 0 ? "start" : "end"}
        >
          {payload.name}
        </text>
        <text
          x={hx + (cos >= 0 ? 5 : -5)}
          y={hy + 10}
          fill={fill}
          fontSize={12}
          fontWeight={600}
          textAnchor={cos >= 0 ? "start" : "end"}
        >
          ₹{payload.value.toLocaleString()}
        </text>
      </>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full  mx-auto flex flex-col md:flex-row gap-6">
      <div className="flex flex-col  w-full md:w-1/2">
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

        {/* Responsive PieChart */}
        <div className="flex flex-col items-center w-full">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={100}
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
      {/* </div> */}
      {/* Loan + Interest Info */}
           <div className="flex flex-col w-full px-6 mt-2 text-gray-700">
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
  
      {/* Right side inputs remain unchanged */}
      <div className="flex flex-col gap-10 w-full md:w-1/2  ">
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
            className="w-full border-gray-400 accent-yellow-400"
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
            <Link href="/apply-for-personal-loan-online?autoApply=true" className="w-full">
         <button className="bg-yellow-400 w-full bottom-0 hover:bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg shadow">
          Apply Now for Loan
        </button>
        </Link>
      </div>
    </div>
  );
};

export default EmiCalculator;


// "use client";
// import { useState } from "react";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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

//   const renderConnector = ({ cx, cy, midAngle, outerRadius, fill, payload }) => {
//     const RADIAN = Math.PI / 180;
//     const cos = Math.cos(-midAngle * RADIAN);
//     const sin = Math.sin(-midAngle * RADIAN);

//     const sx = cx + outerRadius * cos;
//     const sy = cy + outerRadius * sin;

//     let hx, hy, labelX, labelY, textAnchor;

//     if (payload.name === "Interest") {
//       // Purple connector - top-right
//       hx = sx + 40 + payload.value / 5000; // horizontal end point
//       hy = sy; // horizontal line only
//       labelX = hx + 5;
//       labelY = hy - 5;
//       textAnchor = "start";
//     } else {
//       // Pink connector - bottom-left
//       hx = sx - 40 - payload.value / 5000; // horizontal end point
//       hy = sy; // horizontal line only
//       labelX = hx - 5;
//       labelY = hy - 5;
//       textAnchor = "end";
//     }

//     return (
//       <>
//         {/* Only one 90-degree turn L-shape */}
//         <path
//           d={`M${sx},${sy} L${hx},${hy}`}
//           stroke={fill}
//           strokeWidth={1.5}
//           fill="none"
//         />
//         <circle cx={hx} cy={hy} r={4} fill={fill} />
//         <text x={labelX} y={labelY} fill="#333" fontSize={12} textAnchor={textAnchor}>
//           {payload.name}
//         </text>
//         <text
//           x={labelX}
//           y={labelY + 15}
//           fill={fill}
//           fontSize={12}
//           fontWeight={600}
//           textAnchor={textAnchor}
//         >
//           ₹{payload.value.toLocaleString()}
//         </text>
//       </>
//     );
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-6 w-full  mx-auto flex flex-col md:flex-row gap-6">
//       {/* LEFT SIDE */}
//       <div className="flex flex-col gap-6 w-full md:w-1/2">
//         <div className="border border-yellow-300 rounded-xl bg-yellow-50 p-4">
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

//         {/* PieChart */}
//         <div className="flex flex-col items-center w-full" style={{ overflow: "visible" }}>
//           <ResponsiveContainer width="100%" height={350}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={80}
//                 outerRadius={120}
//                 startAngle={90}
//                 endAngle={-270}
//                 label={renderConnector}
//               >
//                 {data.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* RIGHT SIDE - Inputs */}
//       <div className="flex flex-col gap-6 w-full md:w-1/2">
//         {/* Loan Amount */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">Loan Amount</label>
//           <input
//             type="number"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(Number(e.target.value))}
//             className="w-full border rounded-lg px-3 py-2 mb-2"
//           />
//           <input
//             type="range"
//             min="5000"
//             max="500000"
//             step="1000"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(Number(e.target.value))}
//             className="w-full accent-yellow-400"
//           />
//         </div>

//         {/* Interest Rate */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">Interest Rate</label>
//           <input
//             type="number"
//             value={interestRate}
//             onChange={(e) => setInterestRate(Number(e.target.value))}
//             className="w-full border rounded-lg px-3 py-2 mb-2"
//           />
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

//         {/* Tenure */}
//         <div>
//           <label className="block text-gray-700 font-medium mb-1">Loan Tenure</label>
//           <input
//             type="number"
//             value={tenure}
//             onChange={(e) => setTenure(Number(e.target.value))}
//             className="w-full border rounded-lg px-3 py-2 mb-2"
//           />
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

//         <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg shadow">
//           Apply Now for Loan
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmiCalculator;
