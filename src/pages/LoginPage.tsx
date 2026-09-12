import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'
import { ThemeToggle } from '../components/ThemeToggle'
import { BrandMark } from '../components/BrandMark'

export function LoginPage() {
  const { user, login, credentials } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState(credentials.username)
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)
  const [loading, setLoading] = useState(false)

  if (user) return <Navigate to="/" replace />

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      const result = login(username, password)
      setLoading(false)
      if (result.ok) {
        navigate('/')
        return
      }
      setError(result.error ?? 'Error de acceso')
      setShake(true)
      window.setTimeout(() => setShake(false), 450)
    }, 420)
  }

  return (
    <div className="login-page">
      <div className="login-theme">
        <ThemeToggle />
      </div>

      <section className="login-hero" aria-hidden={false}>
        <div className="login-hero-glow" aria-hidden />
        <div className="login-hero-grid" aria-hidden />
        <div className="login-hero-content">
          <div className="login-brand-wrap">
            <BrandMark inverted />
          </div>
          <p className="login-kicker">ERP HSEQ · Oferta comercial</p>
          <h1 className="login-brand">
            zemyx <span className="brand-sep">|</span> HSEQ
          </h1>
          <p className="login-hero-lead">
            Sistema Integrado de Gestión para Calidad, Ambiental y SST.
            Evidencia, trazabilidad y decisiones con semáforo en un solo lugar.
          </p>
          <ul className="login-features">
            <li>
              <span>01</span>
              ISO 9001 · 14001 · 45001
            </li>
            <li>
              <span>02</span>
              Alertas críticas en tiempo real
            </li>
            <li>
              <span>03</span>
              Dashboard gerencial listo para auditoría
            </li>
          </ul>
          <div className="login-orbit">
            <div className="orbit-ring" />
            <div className="orbit-card o1">NC abiertas · 7</div>
            <div className="orbit-card o2">Cumplimiento legal · 96%</div>
            <div className="orbit-card o3">Riesgos críticos · 3</div>
          </div>
        </div>
      </section>

      <section className={`login-panel ${shake ? 'shake' : ''}`}>
        <div className="login-panel-inner">
          <div className="login-panel-brand">
            <BrandMark compact />
          </div>
          <p className="login-panel-kicker">Acceso demostración</p>
          <h2>Bienvenido</h2>
          <p className="login-lead">
            Explora la maqueta interactiva. No requiere backend: ideal para presentar el producto.
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
              <div className="password-field">
                <input
                  type={showPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="btn-text password-toggle"
                  onClick={() => setShowPass((v) => !v)}
                >
                  {showPass ? 'Ocultar' : 'Ver'}
                </button>
              </div>
            </label>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Entrando…' : 'Entrar al demo'}
            </button>
          </form>

          <div className="login-hint">
            <strong>Credenciales de demo</strong>
            <span>
              usuario <code>admin</code> · clave <code>demo123</code>
            </span>
            <button
              type="button"
              className="btn-text"
              onClick={() => {
                setUsername(credentials.username)
                setPassword(credentials.password)
              }}
            >
              Autocompletar
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
