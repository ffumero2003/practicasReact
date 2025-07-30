import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { date: "24.03", value: 30 },
  { date: "25.03", value: 80 },
  { date: "26.03", value: 40 },
  { date: "27.01", value: 60 },
  { date: "28.03", value: 100 }, 
  { date: "29.03", value: 40 },
  { date: "30.03", value: 90 },
  { date: "21.05", value: 30 },
  { date: "25.06", value: 80 },
  { date: "26.07", value: 40 },
  { date: "27.08", value: 100 },
  { date: "28.09", value: 20 }, 
  { date: "29.10", value: 40 },
  { date: "30.11", value: 30 },
];

 function SmoothChart() {
  return (
    <div className="w-full h-[248px] rounded-lg shadow p-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient  x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <XAxis dataKey="date" tick={{ fill: "#64748b", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ecf0ff",
              color: "black",
              border: "none",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            fill="url(#colorFill)"
            strokeWidth={3}
            activeDot={{ r: 6, fill: "#3b82f6" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SmoothChart;
