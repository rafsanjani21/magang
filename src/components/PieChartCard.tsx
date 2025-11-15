import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import users from "../data/users.json";

const roleData = (() => {
  const map = new Map<string, number>();

  users.forEach((u) => {
    map.set(u.role, (map.get(u.role) || 0) + 1);
  });

  return Array.from(map.entries()).map(([role, count]) => ({
    name: role,
    value: count,
  }));
})();

const GRADIENTS = [
  { id: "grad1", from: "#4F46E5", to: "#6366F1" },
  { id: "grad2", from: "#10B981", to: "#34D399" },
  { id: "grad3", from: "#F59E0B", to: "#FBBF24" },
  { id: "grad4", from: "#EF4444", to: "#F87171" },
  { id: "grad5", from: "#3B82F6", to: "#60A5FA" },
];

const renderCenterLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;

  const RADIAN = Math.PI / 180;

  const radius = innerRadius + (outerRadius - innerRadius) / 2;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
      style={{ pointerEvents: "none" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartCard() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            {GRADIENTS.map((g) => (
              <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={g.from} />
                <stop offset="100%" stopColor={g.to} />
              </linearGradient>
            ))}
          </defs>

          <Pie
            data={roleData}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            stroke="none"
            label={renderCenterLabel}
            labelLine={false}
          >
            {roleData.map((_, i) => (
              <Cell
                key={i}
                fill={`url(#${GRADIENTS[i % GRADIENTS.length].id})`}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend wrapperStyle={{ color: "#ffffff" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
