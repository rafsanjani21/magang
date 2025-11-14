import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const nav = useNavigate()
  const { login } = useAuth()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await login(email, password)
    if (ok) {
      nav('/')
    } else {
      setError('Email atau password salah')
    }
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#d8a801] to-[#b58f01] px-4">
    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

    <form
      onSubmit={submit}
      className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-white/40"
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">
          Selamat Datang
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Silakan masuk untuk melanjutkan
        </p>
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Masukkan email..."
          className="w-full border border-gray-300/70 p-3 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#d8a801] transition"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Masukkan password..."
          className="w-full border border-gray-300/70 p-3 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#d8a801] transition"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      {error && (
        <p className="text-red-600 mb-3 text-sm font-medium">{error}</p>
      )}

      <button
        className="w-full bg-[#111827] hover:bg-[#d8a801] transition text-white p-3 rounded-lg font-semibold shadow-lg active:scale-95 cursor-pointer"
      >
        Masuk
      </button>

      <p className="text-xs mt-4 text-gray-700 text-center opacity-80">
        Contoh login: <span className="font-medium">admin@example.com / admin123</span>
      </p>
    </form>
  </div>
)

}
