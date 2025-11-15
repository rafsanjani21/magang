import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import users from "../data/users.json";

const chartData = (() => {
  const map = new Map<string, number>();

  users.forEach((u) => {
    const date = new Date(u.createdAt);
    const label = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    map.set(label, (map.get(label) || 0) + 1);
  });

  return Array.from(map.entries()).map(([name, count]) => ({
    name,
    count,
  }));
})();

export default function ChartCard() {
  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -40, bottom: 0 }}>
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#d8a801" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#d8a801" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#d8a801" />
              <stop offset="100%" stopColor="#d8a801" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            tick={{ fill: "#ffffff", fontSize: 12 }}
            axisLine={{ stroke: "#d1d5db" }}
          />

          <YAxis
            tick={{ fill: "#ffffff", fontSize: 12 }}
            axisLine={{ stroke: "#d1d5db" }}
            allowDecimals={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              padding: "8px 12px",
              background: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
            labelStyle={{ color: "#6b7280", fontSize: 12 }}
          />

          <Area
            type="monotone"
            dataKey="count"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            fill="url(#areaGradient)"
            animationDuration={800}
          />

          <Line
            type="monotone"
            dataKey="count"
            stroke="url(#lineGradient)"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#d8a801" }}
            activeDot={{ r: 7, strokeWidth: 2, stroke: "#fff" }}
            animationDuration={800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
