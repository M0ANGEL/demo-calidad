import { useTheme } from '../theme'

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={`theme-toggle ${compact ? 'is-compact' : ''}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      title={isDark ? 'Tema claro' : 'Tema oscuro'}
    >
      <span className={`theme-toggle-thumb ${isDark ? 'is-dark' : ''}`} />
      <span className="theme-toggle-icon sun" aria-hidden>
       ☀
      </span>
      <span className="theme-toggle-icon moon" aria-hidden>
       ☾
      </span>
      {!compact && <span className="theme-toggle-label">{isDark ? 'Oscuro' : 'Claro'}</span>}
    </button>
  )
}
