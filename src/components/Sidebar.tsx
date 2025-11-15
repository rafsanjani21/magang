import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileBarChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";

export default function Sidebar() {
  const { collapsed, toggle, isMobile, setCollapsed } = useSidebar();

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile, setCollapsed]);

  const sidebarWidth = isMobile ? "w-60" : collapsed ? "w-20" : "w-60";

  return (
    <>
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setCollapsed(true)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen shadow-xl bg-[#111827] py-5 
          flex flex-col z-40 transition-all duration-300
          ${sidebarWidth}
          ${isMobile && collapsed ? "-translate-x-full" : "translate-x-0"}
        `}
      >
        {isMobile && (
          <button
            onClick={() => setCollapsed(true)}
            className="absolute right-4 top-4 text-white"
          >
            X
          </button>
        )}

        {!isMobile && (
          <button
            onClick={toggle}
            className="absolute -right-4 top-6 w-8 h-8 bg-[#111827] 
            text-white flex items-center justify-center rounded-full shadow cursor-pointer"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        )}

        {!collapsed && (
          <div className="px-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5 mb-5 text-white text-center">
              Magang
            </h1>
          </div>
        )}

        <nav className="flex flex-col gap-1 px-5 text-sm md:text-lg">
          <SidebarItem
            to="/"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/users"
            icon={<Users size={20} />}
            label="Users"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/reports"
            icon={<FileBarChart size={20} />}
            label="Reports"
            collapsed={collapsed}
          />
        </nav>
      </aside>
    </>
  );
}

function SidebarItem({ to, icon, label, collapsed }: any) {
  const { isMobile, setCollapsed } = useSidebar();

  return (
    <NavLink
      to={to}
      onClick={() => isMobile && setCollapsed(true)}
      className={({ isActive }) =>
        `flex items-center gap-3 py-2 px-3 text-white rounded-lg hover:bg-[#b79001] transition
        ${isActive ? "bg-[#d9aa00]" : "bg-transparent"}`
      }
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}
