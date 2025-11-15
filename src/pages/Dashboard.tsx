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
  const { collapsed, isMobile } = useSidebar();

  const totalUsers = users.length;
  const admins = users.filter((u) => u.role === "Admin").length;
  const managers = users.filter((u) => u.role === "Manager").length;
  const user = users.filter((u) => u.role === "User").length;

  return (
    <div
      className={`min-h-screen bg-[#242547] transition-all duration-300
        ${isMobile ? "ml-0" : collapsed ? "ml-20" : "ml-60"}  // ⭐ Fix mobile
      `}
    >
      <Sidebar />

      <div className="p-6">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <SummaryCard
            variant="highlight"
            title="Users"
            value={user}
            icon={<User />}
            colors={{
              cardBg: "",
              title: "#ffffff",
              value: "#ffffff",
              iconBg: "#10B981",
            }}
          />
          <SummaryCard
            variant="highlight"
            title="Admins"
            value={admins}
            icon={<Shield />}
            colors={{
              cardBg: "",
              title: "#ffffff",
              value: "#ffffff",
              iconBg: "#4F46E5",
            }}
          />
          <SummaryCard
            variant="highlight"
            title="Managers"
            value={managers}
            icon={<Briefcase />}
            colors={{
              cardBg: "",
              title: "#ffffff",
              value: "#ffffff",
              iconBg: "#F59E0B",
            }}
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
          <div className="bg-white/20 backdrop-blur-2xl p-5 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-3 text-white">
              Users Table
            </h2>
            <DataTable />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-white/20 backdrop-blur-2xl p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">
                  User Growth
                </h2>
                <span className="text-sm text-white">Last 12 months</span>
              </div>
              <ChartCard />
            </div>

            <div className="bg-white/20 backdrop-blur-2xl p-6 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">
                User by Role
              </h2>
              <PieChartCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
