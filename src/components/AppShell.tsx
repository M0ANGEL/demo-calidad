import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth'
import { modules, navGroups } from '../data/modules'

export function AppShell() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="shell">
      <aside className={`sidebar ${open ? 'is-open' : ''}`}>
        <div className="sidebar-brand">
          <span className="brand-mark">C</span>
          <div>
            <strong>CALIDA</strong>
            <small>SIG HSEQ · Demo</small>
          </div>
        </div>

        <nav className="sidebar-nav" onClick={() => setOpen(false)}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Panel principal
          </NavLink>

          {navGroups.map((group) => {
            const items = modules.filter((m) => m.group === group)
            if (!items.length) return null
            return (
              <div key={group} className="nav-group">
                <p className="nav-group-label">{group}</p>
                {items.map((m) => (
                  <NavLink
                    key={m.id}
                    to={`/${m.path}`}
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  >
                    {m.label}
                  </NavLink>
                ))}
              </div>
            )
          })}
        </nav>

        <div className="sidebar-foot">
          <p>Datos de demostración. No se guarda información en servidor.</p>
        </div>
      </aside>

      {open && <button className="sidebar-backdrop" aria-label="Cerrar menú" onClick={() => setOpen(false)} />}

      <div className="shell-main">
        <header className="topbar">
          <button type="button" className="menu-btn" onClick={() => setOpen(true)} aria-label="Abrir menú">
            ☰
          </button>
          <div className="topbar-company">
            <span>{user?.company}</span>
            <small>ISO 9001 · 14001 · 45001</small>
          </div>
          <div className="topbar-user">
            <div>
              <strong>{user?.name}</strong>
              <small>{user?.role}</small>
            </div>
            <button type="button" className="btn btn-ghost" onClick={handleLogout}>
              Salir
            </button>
          </div>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
