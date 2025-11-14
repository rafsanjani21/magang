import React, { useMemo, useState } from "react";
import users from "../data/users.json";

type User = typeof users[number];
type SortKey = keyof User | null;
type SortDir = "asc" | "desc";

const usePagination = <T,>(items: T[], perPage = 5) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(items.length / perPage);

  const current = useMemo(() => {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [page, perPage, items]);

  const go = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return { page, totalPages, current, go };
};

export default function DataTable() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("All");
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const roles = useMemo(
    () => ["All", ...Array.from(new Set(users.map((u) => u.role)))],
    []
  );

  const filtered = useMemo(() => {
    let temp = [...users];

    if (role !== "All") temp = temp.filter((u) => u.role === role);

    if (query.trim() !== "") {
      const q = query.toLowerCase();
      temp = temp.filter((u) =>
        `${u.name} ${u.email}`.toLowerCase().includes(q)
      );
    }

    if (sortKey) {
      temp.sort((a: any, b: any) => {
        const L = a[sortKey];
        const R = b[sortKey];

        if (typeof L === "number") {
          return sortDir === "asc" ? L - R : R - L;
        }
        return sortDir === "asc"
          ? String(L).localeCompare(String(R))
          : String(R).localeCompare(String(L));
      });
    }

    return temp;
  }, [query, role, sortKey, sortDir]);

  const { page, totalPages, current, go } = usePagination(filtered, 5);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search name or email..."
          className="shadow-md p-2 rounded-lg flex-1 focus:ring-2 focus:ring-[#d9aa00] outline-none transition"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="p-2 rounded-lg shadow-md focus:ring-2 focus:ring-[#d9aa00] outline-none transition"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-[#383333]">
          <thead className="bg-[#d9aa00] shadow-md">
            <tr className="text-left text-white">
              {["id", "name", "email", "role", "createdAt"].map((key) => (
                <th
                  key={key}
                  className="p-3 font-semibold cursor-pointer hover:bg-[#b79001] transition "
                  onClick={() => toggleSort(key as SortKey)}
                >
                  <div className="flex items-center gap-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    {sortKey === key && (
                      <span>{sortDir === "asc" ? "▲" : "▼"}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {current.map((u) => (
              <tr
                key={u.id}
                className="hover:bg-gray-50 transition shadow-sm"
              >
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3">{u.createdAt}</td>
              </tr>
            ))}

            {current.length === 0 && (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 shadow-md rounded-lg disabled:opacity-50 bg-[#d9aa00] hover:bg-[#b79001] transition cursor-pointer text-white"
          >
            Prev
          </button>
          <button
            onClick={() => go(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 shadow-md rounded-lg disabled:opacity-50 bg-[#d9aa00] hover:bg-[#b79001] transition cursor-pointer text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
