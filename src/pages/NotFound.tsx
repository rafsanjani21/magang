import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-[#242547] to-[#111827] text-center px-6">
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-lg max-w-md w-full">
        <AlertTriangle size={80} className="mx-auto text-yellow-600 mb-6" />

        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-lg text-white mb-6">
          Halaman yang kamu cari tidak ditemukan.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#d9aa00] text-white px-6 py-3 rounded-lg shadow hover:bg-[#b79001] transition"
        >
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
