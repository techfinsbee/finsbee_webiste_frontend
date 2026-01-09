"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const LoanPieChart = () => {
  const data = [
    { name: "Loan Amount", value: 125000, color: "#F59E9E" }, // pink
    { name: "Interest", value: 8273, color: "#8B5CF6" }, // violet
  ];

  return (
    <div className="flex flex-row justify-center items-center p-0 gap-[30px]  h-[289px]">
      {/* <PieChart width={300} height={300}>
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    innerRadius={80}
    outerRadius={120}
    paddingAngle={0}
    labelLine={false}
    label={({ cx, cy, midAngle, outerRadius, fill, name, value }) => {
      const RADIAN = Math.PI / 180;
      const startRadius = outerRadius + 10;
      const bendRadius = outerRadius + 30; // how far line goes before bending
      const x1 = cx + startRadius * Math.cos(-midAngle * RADIAN);
      const y1 = cy + startRadius * Math.sin(-midAngle * RADIAN);
      const x2 = cx + bendRadius * Math.cos(-midAngle * RADIAN);
      const y2 = cy + bendRadius * Math.sin(-midAngle * RADIAN);

      const isRight = x2 > cx;
      const horizontalLength = 30; // horizontal part of connector
      const x3 = isRight ? x2 + horizontalLength : x2 - horizontalLength;
      const y3 = y2;

      return (
        <>
          {/* Connector path — angled then horizontal */}
          {/* <path
            d={`M${x1},${y1} L${x2},${y2} L${x3},${y3}`}
            stroke={fill}
            strokeWidth="1.5"
            fill="none"
          />
          {/* Circular dot at the end of connector */}
          {/* <circle cx={x3} cy={y3} r={2.5} fill={fill} />

          // {/* Label name 
          <text
            x={isRight ? x3 + 6 : x3 - 6}
            y={y3 - 4}
            textAnchor={isRight ? "start" : "end"}
            className="text-sm"
            fill="#333"
            fontWeight={500}
          >
            {name}
          </text> */}

          {/* Label value */}
          {/* <text
            x={isRight ? x3 + 6 : x3 - 6}
            y={y3 + 12}
            textAnchor={isRight ? "start" : "end"}
            className="text-xs"
            fill={fill}
            fontWeight={600}
          >
            {value.toFixed(0)}
          </text>
        </>
      );
    }}
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}
  </Pie>
</PieChart> */} 

{/* <PieChart width={300} height={300}>
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    innerRadius={80}
    outerRadius={120}
    paddingAngle={0}
    labelLine={false}
    label={({ cx, cy, midAngle, outerRadius, fill, name, value }) => {
      const RADIAN = Math.PI / 180;
      const startRadius = outerRadius + 10;
      const bendRadius = outerRadius + 30;

      // First (radial) point
      const x1 = cx + startRadius * Math.cos(-midAngle * RADIAN);
      const y1 = cy + startRadius * Math.sin(-midAngle * RADIAN);

      // Second (bend) point
      const x2 = cx + bendRadius * Math.cos(-midAngle * RADIAN);
      const y2 = cy + bendRadius * Math.sin(-midAngle * RADIAN);

      // Determine direction (right or left side)
      const isRight = x2 > cx;
      const horizontalLength = 30;

      // Final label point (after curve)
      const x3 = isRight ? x2 + horizontalLength : x2 - horizontalLength;
      const y3 = y2;

      // Control points for a smooth cubic bezier curve
      const controlX1 = x1 + (isRight ? 10 : -10);
      const controlY1 = y1;
      const controlX2 = x2 + (isRight ? 15 : -15);
      const controlY2 = y2;

      return (
        <>
          {/* Curved connector */}
          {/* <path
            d={`M${x1},${y1} C${controlX1},${controlY1} ${controlX2},${controlY2} ${x3},${y3}`}
            stroke={fill}
            strokeWidth="1.5"
            fill="none"
          /> */}

          {/* Soft shadowed dot at line end */}
          {/* <circle cx={x3} cy={y3} r={3} fill={fill} className="drop-shadow-sm" /> */}

          {/* Label name */}
          {/* <text
            x={isRight ? x3 + 6 : x3 - 6}
            y={y3 - 4}
            textAnchor={isRight ? "start" : "end"}
            className="text-sm font-medium"
            fill="#333"
          >
            {name}
          </text> */}

          {/* Label value */}
          {/* <text
            x={isRight ? x3 + 6 : x3 - 6}
            y={y3 + 12}
            textAnchor={isRight ? "start" : "end"}
            className="text-xs font-semibold"
            fill={fill}
          >
            {value.toFixed(0)}
          </text>
        </>
      );
    }}
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}
  </Pie>
</PieChart>  */}

<PieChart width={300} height={300}>
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    innerRadius={80}
    outerRadius={120}
    startAngle={90}
    endAngle={-270}
    paddingAngle={0}
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={entry.color} />
    ))}

    {/* Custom fixed connectors + labels */}
    <g>
      {/* 🟣 Interest Line (Top Right - L shaped) */}
      <path
        d={`M210,90 L260,90 L285,65`} // L-shape connector (horizontal then diagonal)
        stroke="#8B5CF6"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="285" cy="65" r="3" fill="#8B5CF6" />
      <text
        x="295"
        y="63"
        className="text-sm font-medium"
        fill="#333"
        textAnchor="start"
      >
        Interest
      </text>
      <text
        x="295"
        y="78"
        className="text-xs font-semibold"
        fill="#8B5CF6"
        textAnchor="start"
      >
        ₹{totalInterest.toFixed(0)}
      </text>

      {/* 🌸 Loan Amount Line (Bottom Right - straight) */}
      <path
        d={`M210,210 L280,210`} // straight line
        stroke="#F59E9E"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="280" cy="210" r="3" fill="#F59E9E" />
      <text
        x="290"
        y="208"
        className="text-sm font-medium"
        fill="#333"
        textAnchor="start"
      >
        Loan Amount
      </text>
      <text
        x="290"
        y="223"
        className="text-xs font-semibold"
        fill="#F59E9E"
        textAnchor="start"
      >
        ₹{loanAmount.toFixed(0)}
      </text>
    </g>
  </Pie>
</PieChart>



    </div> 
  );
};

export default LoanPieChart;
