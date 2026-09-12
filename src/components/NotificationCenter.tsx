import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { notifications as seed } from '../data/notifications'
import type { AppNotification } from '../data/notifications'

const levelLabel: Record<AppNotification['level'], string> = {
  critical: 'Crítica',
  warning: 'Alerta',
  info: 'Info',
  success: 'OK',
}

export function NotificationCenter() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(seed)
  const rootRef = useRef<HTMLDivElement>(null)
  const unread = items.filter((n) => n.unread).length

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  return (
    <div className="notif-root" ref={rootRef}>
      <button
        type="button"
        className={`notif-bell ${unread ? 'has-unread' : ''}`}
        aria-label="Notificaciones"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="notif-bell-icon" aria-hidden>
          ⌁
        </span>
        {unread > 0 && <span className="notif-badge">{unread}</span>}
      </button>

      {open && (
        <div className="notif-panel" role="dialog" aria-label="Centro de notificaciones">
          <header className="notif-panel-head">
            <div>
              <strong>Notificaciones</strong>
              <small>{unread} sin leer</small>
            </div>
            <button type="button" className="btn-text" onClick={markAllRead}>
              Marcar leídas
            </button>
          </header>
          <ul className="notif-list">
            {items.map((n, i) => (
              <li key={n.id} style={{ animationDelay: `${i * 40}ms` }}>
                <Link
                  to={n.to}
                  className={`notif-item level-${n.level} ${n.unread ? 'is-unread' : ''}`}
                  onClick={() => {
                    setItems((prev) =>
                      prev.map((x) => (x.id === n.id ? { ...x, unread: false } : x)),
                    )
                    setOpen(false)
                  }}
                >
                  <span className={`notif-level level-${n.level}`}>{levelLabel[n.level]}</span>
                  <strong>{n.title}</strong>
                  <p>{n.body}</p>
                  <time>{n.time}</time>
                </Link>
              </li>
            ))}
          </ul>
          <footer className="notif-panel-foot">
            <Link to="/alertas" onClick={() => setOpen(false)}>
              Ver todas las alertas →
            </Link>
          </footer>
        </div>
      )}
    </div>
  )
}
