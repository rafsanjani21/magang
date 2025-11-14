import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const pageTitle = {
    "/": "Dashboard",
    "/users": "Users",
    "/reports": "Reports",
  }[location.pathname] || "";

  return (
    <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold text-[#383333]">
        {pageTitle}
      </h2>

      <div className="flex items-center gap-4">
        <p className="text-sm text-[#383333]">
          Halo, <span className="font-semibold">{user?.name}</span>
        </p>

        <button
          onClick={logout}
          className="px-3 py-1 shadow-md rounded text-white bg-[#d9aa00] hover:bg-[#b79001] transition duration-300 cursor-pointer font-semibold"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
