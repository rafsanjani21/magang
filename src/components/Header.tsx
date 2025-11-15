import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { Menu, LogOut } from "lucide-react";

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const { toggle, isMobile, collapsed } = useSidebar();

  const pageTitle =
    {
      "/": "Dashboard",
      "/users": "Users",
      "/reports": "Reports",
    }[location.pathname] || "";

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white/20  backdrop-blur-2xl p-4 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3">
        {isMobile && collapsed && (
          <button
            onClick={toggle}
            className="p-2 rounded-lg bg-[#d9aa00] hover:bg-[#b79001 text-white shadow"
          >
            <Menu size={22} />
          </button>
        )}

        <h2 className="text-md md:text-xl font-semibold text-white">
          {pageTitle}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <p className={`text-white ${isMobile ? "text-xs" : "text-sm"}`}>
          Halo, <span className="font-semibold">{user?.name}</span>
        </p>

        {!isMobile && (
          <button
            onClick={logout}
            className="
              px-3 py-1 shadow-md rounded text-white bg-[#d9aa00] hover:bg-[#b79001] transition duration-300 cursor-pointer font-semibold"
          >
            Logout
          </button>
        )}

        {isMobile && (
          <button
            onClick={logout}
            className="p-2 rounded-lg bg-[#d9aa00] hover:bg-[#b79001] text-white shadow"
          >
            <LogOut size={22} />
          </button>
        )}
      </div>
    </header>
  );
}
