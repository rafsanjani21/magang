import React, { createContext, useContext, useState, useEffect } from 'react'

type User = { name: string; email: string } | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(() => {
    const saved = localStorage.getItem('logged_user')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (user) localStorage.setItem('logged_user', JSON.stringify(user))
    else localStorage.removeItem('logged_user')
  }, [user])

  const login = async (email: string, password: string) => {
    if (email === 'admin@example.com' && password === 'admin123') {
      setUser({ name: 'Admin', email })
      return true
    }
    return false
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
