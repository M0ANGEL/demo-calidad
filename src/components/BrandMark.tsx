type BrandMarkProps = {
  compact?: boolean
  inverted?: boolean
}

export function BrandMark({ compact = false, inverted = false }: BrandMarkProps) {
  return (
    <div className={`brand-lockup ${compact ? 'is-compact' : ''} ${inverted ? 'is-inverted' : ''}`}>
      <img src="/zemyx-logo.jpg" alt="Zemyx" className="brand-logo" />
      <div className="brand-text">
        <strong>
          zemyx <span className="brand-sep">|</span> HSEQ
        </strong>
        {!compact && <small>Sistema Integrado de Gestión · Demo</small>}
      </div>
    </div>
  )
}
