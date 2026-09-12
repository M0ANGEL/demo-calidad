import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useAuth } from '../auth'
import { modules, navGroups } from '../data/modules'
import { ThemeToggle } from './ThemeToggle'
import { NotificationCenter } from './NotificationCenter'
import { BrandMark } from './BrandMark'
import { UserMenu } from './UserMenu'

export function AppShell() {
  const { user } = useAuth()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const activeGroup = useMemo(() => {
    const current = modules.find((m) => `/${m.path}` === location.pathname)
    return current?.group ?? null
  }, [location.pathname])

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(navGroups.map((g) => [g, g === activeGroup || g === 'Gerencia'])),
  )

  useEffect(() => {
    if (!activeGroup) return
    setExpanded((prev) => ({ ...prev, [activeGroup]: true }))
  }, [activeGroup])

  const toggleGroup = (group: string) => {
    setExpanded((prev) => ({ ...prev, [group]: !prev[group] }))
  }

  return (
    <div className="shell">
      <aside className={`sidebar ${open ? 'is-open' : ''}`}>
        <div className="sidebar-brand">
          <BrandMark inverted />
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setOpen(false)}
          >
            Panel principal
          </NavLink>

          {navGroups.map((group) => {
            const items = modules.filter((m) => m.group === group)
            if (!items.length) return null
            const isOpen = !!expanded[group]
            const hasActiveChild = items.some((m) => `/${m.path}` === location.pathname)

            return (
              <div key={group} className={`nav-menu ${isOpen ? 'is-open' : ''} ${hasActiveChild ? 'has-active' : ''}`}>
                <button
                  type="button"
                  className="nav-menu-trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggleGroup(group)}
                >
                  <span>{group}</span>
                  <span className={`nav-chevron ${isOpen ? 'is-open' : ''}`} aria-hidden>
                    ▾
                  </span>
                </button>

                <div className="nav-submenu" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="nav-submenu-inner" onClick={() => setOpen(false)}>
                    {items.map((m) => (
                      <NavLink
                        key={m.id}
                        to={`/${m.path}`}
                        className={({ isActive }) =>
                          isActive ? 'nav-sublink active' : 'nav-sublink'
                        }
                      >
                        {m.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        <div className="sidebar-foot">
          <p>Demo comercial. Datos mock · sin persistencia en servidor.</p>
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
          <div className="topbar-actions">
            <ThemeToggle compact />
            <NotificationCenter />
            <UserMenu />
          </div>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
