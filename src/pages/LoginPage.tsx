import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'

export function LoginPage() {
  const { user, login, credentials } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState(credentials.username)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  if (user) return <Navigate to="/" replace />

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = login(username, password)
    if (result.ok) {
      navigate('/')
      return
    }
    setError(result.error ?? 'Error de acceso')
    setShake(true)
    window.setTimeout(() => setShake(false), 450)
  }

  return (
    <div className="login-page">
      <div className="login-atmosphere" aria-hidden />
      <section className={`login-panel ${shake ? 'shake' : ''}`}>
        <p className="login-kicker">Plataforma de demostración</p>
        <h1 className="login-brand">CALIDA</h1>
        <p className="login-lead">
          Sistema Integrado de Gestión HSEQ — maqueta visual sin backend.
        </p>

        <form className="login-form" onSubmit={onSubmit}>
          <label>
            Usuario
            <input
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn btn-primary btn-block">
            Entrar al demo
          </button>
        </form>

        <div className="login-hint">
          <strong>Credenciales quemadas</strong>
          <span>
            usuario <code>admin</code> · clave <code>demo123</code>
          </span>
        </div>
      </section>
    </div>
  )
}
