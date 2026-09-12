import type { AppModule, Semaphore } from '../data/modules'

function Dot({ level }: { level?: Semaphore }) {
  if (!level) return null
  return <span className={`semaforo semaforo-${level}`} aria-hidden />
}

export function ModulePage({ module }: { module: AppModule }) {
  return (
    <div className="page fade-in">
      <header className="page-header">
        <div>
          <p className="eyebrow">{module.group}</p>
          <h1>{module.label}</h1>
          <p className="page-sub">{module.description}</p>
          {module.iso && <p className="iso-tag">{module.iso}</p>}
        </div>
        <div className="demo-pill">Solo lectura · datos mock</div>
      </header>

      <section className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Estado</th>
              <th>Detalle</th>
              <th>Semáforo</th>
            </tr>
          </thead>
          <tbody>
            {module.items.map((item) => (
              <tr key={item.id}>
                <td>
                  <strong>{item.title}</strong>
                </td>
                <td>{item.status ?? '—'}</td>
                <td>{item.meta ?? '—'}</td>
                <td>
                  <span className="semaforo-cell">
                    <Dot level={item.semaphore} />
                    {item.semaphore === 'green' && 'En control'}
                    {item.semaphore === 'yellow' && 'Atención'}
                    {item.semaphore === 'red' && 'Crítico'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <p className="foot-note">
        En esta maqueta puedes navegar y ver el flujo. No hay API ni base de datos: todo es local en el navegador.
      </p>
    </div>
  )
}
