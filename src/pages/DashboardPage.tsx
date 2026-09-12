import { Link } from 'react-router-dom'
import { dashboardKpis, modules } from '../data/modules'
import type { Semaphore } from '../data/modules'

function Dot({ level }: { level: Semaphore }) {
  return <span className={`semaforo semaforo-${level}`} aria-hidden />
}

export function DashboardPage() {
  const pending = [
    { text: 'NC-042 próxima a vencer', to: '/no-conformidades', level: 'red' as Semaphore },
    { text: 'Auditoría interna Calidad — 22 Sep', to: '/auditorias', level: 'yellow' as Semaphore },
    { text: 'Permiso de vertimientos en riesgo', to: '/legal', level: 'red' as Semaphore },
    { text: 'Inspección de extintores pendiente', to: '/inspecciones', level: 'yellow' as Semaphore },
  ]

  const spotlight = modules.filter((m) =>
    ['documental', 'legal', 'riesgos', 'auditorias', 'nc', 'indicadores'].includes(m.id),
  )

  return (
    <div className="page fade-in">
      <header className="page-header">
        <div>
          <p className="eyebrow">Panel principal</p>
          <h1>Estado del SIG</h1>
          <p className="page-sub">
            Vista gerencial de calidad, ambiente y SST con semáforo de decisión.
          </p>
        </div>
        <div className="demo-pill">Demo · sin persistencia</div>
      </header>

      <section className="kpi-grid">
        {dashboardKpis.map((kpi) => (
          <article key={kpi.label} className="kpi-tile">
            <div className="kpi-top">
              <Dot level={kpi.semaphore} />
              <span>{kpi.label}</span>
            </div>
            <strong>{kpi.value}</strong>
            <small>{kpi.detail}</small>
          </article>
        ))}
      </section>

      <div className="dash-split">
        <section className="panel">
          <h2>Acciones y alertas</h2>
          <ul className="action-list">
            {pending.map((item) => (
              <li key={item.text}>
                <Dot level={item.level} />
                <Link to={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>MVP sugerido</h2>
          <p className="muted">
            Núcleo comercial inicial: documentos, legal, riesgos, auditorías, NC/acciones, indicadores y dashboard.
          </p>
          <div className="chip-row">
            {spotlight.map((m) => (
              <Link key={m.id} className="chip" to={`/${m.path}`}>
                {m.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
