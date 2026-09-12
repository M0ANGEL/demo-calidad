import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

const DEMO_USER = {
  username: 'admin',
  password: 'demo123',
  name: 'Ana Rodríguez',
  role: 'Coordinadora SIG',
  company: 'Industrias Andinas S.A.S.',
}

type User = Omit<typeof DEMO_USER, 'password'>

type AuthContextValue = {
  user: User | null
  login: (username: string, password: string) => { ok: boolean; error?: string }
  logout: () => void
  credentials: { username: string; password: string }
}

const AuthContext = createContext<AuthContextValue | null>(null)
const STORAGE_KEY = 'calida-demo-session'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as User) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    else sessionStorage.removeItem(STORAGE_KEY)
  }, [user])

  const login = (username: string, password: string) => {
    if (
      username.trim().toLowerCase() === DEMO_USER.username &&
      password === DEMO_USER.password
    ) {
      const { password: _pw, ...rest } = DEMO_USER
      setUser(rest)
      return { ok: true }
    }
    return { ok: false, error: 'Usuario o contraseña incorrectos (demo).' }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        credentials: {
          username: DEMO_USER.username,
          password: DEMO_USER.password,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}
