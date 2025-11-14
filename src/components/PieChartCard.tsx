import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import users from "../data/users.json";

// Hitung jumlah user berdasarkan role
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

// Warna pie (optional, bisa diganti)
const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#3B82F6"];

export default function PieChartCard() {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={roleData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label
          >
            {roleData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
