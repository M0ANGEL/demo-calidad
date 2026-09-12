import { Link } from 'react-router-dom'
import { criticalAlerts } from '../data/notifications'

export function CriticalAlertsBanner() {
  if (!criticalAlerts.length) return null

  return (
    <section className="critical-banner" aria-live="polite">
      <div className="critical-banner-head">
        <span className="critical-pulse" aria-hidden />
        <div>
          <strong>Alertas críticas</strong>
          <span>{criticalAlerts.length} requieren atención inmediata</span>
        </div>
      </div>
      <div className="critical-track">
        {criticalAlerts.map((alert, i) => (
          <Link
            key={alert.id}
            to={alert.to}
            className="critical-card"
            style={{ animationDelay: `${120 + i * 80}ms` }}
          >
            <span className="critical-index">0{i + 1}</span>
            <div>
              <strong>{alert.title}</strong>
              <p>{alert.body}</p>
            </div>
            <span className="critical-go">Ver</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
