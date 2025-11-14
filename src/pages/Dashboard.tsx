import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import DataTable from "../components/DataTable";
import ChartCard from "../components/ChartCard";
import PieChartCard from "../components/PieChartCard";
import { useSidebar } from "../context/SidebarContext";
import users from "../data/users.json";
import { User, Shield, Briefcase, UserPlus } from "lucide-react";

export default function Dashboard() {
  const { collapsed } = useSidebar();
  const totalUsers = users.length;
  const admins = users.filter((u) => u.role === "Admin").length;
  const managers = users.filter((u) => u.role === "Manager").length;
  const user = users.filter((u) => u.role === "User").length;

  return (
    <div
      className={`min-h-screen bg-slate-100 transition-all duration-300 ${
        collapsed ? "ml-20" : "ml-60"
      }`}
    >
      <Sidebar />

      <div className="p-6">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
      <SummaryCard 
        title="Users" 
        value={user} 
        icon={<User />} 
      />

      <SummaryCard 
        title="Admins" 
        value={admins} 
        icon={<Shield />} 
      />

      <SummaryCard 
        title="Managers" 
        value={managers} 
        icon={<Briefcase />} 
      />

      <SummaryCard
  variant="highlight"
  title="Total Users"
  value={totalUsers}
  icon={<UserPlus />}
  colors={{
    cardBg: "#111827",
    title: "#ffffff",
    value: "#ffffff",
    iconBg: "#d8a801",
  }}
/>
    </div>

        <div className="mt-6 flex flex-col gap-6">

  {/* Users Table - Full Width */}
  <div className="bg-white p-5 rounded-2xl shadow-lg">
    <h2 className="text-xl font-semibold mb-3 text-[#383333]">Users Table</h2>
    <DataTable />
  </div>

  {/* Charts - Side by Side */}
<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

  {/* Bar/Line Chart */}
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold text-[#383333]">User Growth</h2>
      <span className="text-sm text-gray-500">Last 12 months</span>
    </div>
    <ChartCard />
  </div>

  {/* Pie Chart */}
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h2 className="text-xl font-semibold mb-4 text-[#383333]">User by Role</h2>
    <PieChartCard />
  </div>

</div>


</div>

        </div>
      </div>
    
  );
}
