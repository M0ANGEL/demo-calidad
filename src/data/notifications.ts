export type AlertLevel = 'critical' | 'warning' | 'info' | 'success'

export type AppNotification = {
  id: string
  title: string
  body: string
  level: AlertLevel
  time: string
  to: string
  unread?: boolean
}

export const criticalAlerts = [
  {
    id: 'c1',
    title: 'Acción correctiva vencida',
    body: 'NC-042 — Desvío en registro de lote venció hace 2 días.',
    to: '/no-conformidades',
  },
  {
    id: 'c2',
    title: 'Permiso ambiental en riesgo',
    body: 'Permiso de vertimientos vence el 10 Oct · evidencia incompleta.',
    to: '/legal',
  },
  {
    id: 'c3',
    title: 'Riesgo SST crítico sin control',
    body: 'Trabajo en alturas — 3 puestos con controles vencidos.',
    to: '/riesgos',
  },
]

export const notifications: AppNotification[] = [
  {
    id: 'n1',
    title: 'Documento próximo a vencer',
    body: 'MAN-SIG-001 Manual integrado · revisión 30 Sep',
    level: 'warning',
    time: 'hace 12 min',
    to: '/documental',
    unread: true,
  },
  {
    id: 'n2',
    title: 'Auditoría programada',
    body: 'Auditoría interna Calidad — 22 Sep 09:00',
    level: 'info',
    time: 'hace 45 min',
    to: '/auditorias',
    unread: true,
  },
  {
    id: 'n3',
    title: 'Examen ocupacional vencido',
    body: '3 colaboradores requieren reagendamiento',
    level: 'critical',
    time: 'hace 2 h',
    to: '/sst',
    unread: true,
  },
  {
    id: 'n4',
    title: 'Inspección completada',
    body: 'Condiciones locativas almacén — resultado OK',
    level: 'success',
    time: 'hace 3 h',
    to: '/inspecciones',
    unread: false,
  },
  {
    id: 'n5',
    title: 'Capacitación próxima',
    body: 'Reentrenamiento trabajo en alturas — 8 personas',
    level: 'warning',
    time: 'ayer',
    to: '/capacitacion',
    unread: false,
  },
  {
    id: 'n6',
    title: 'Mantenimiento preventivo',
    body: 'Compresor C-02 programado para 15 Sep',
    level: 'info',
    time: 'ayer',
    to: '/mantenimiento',
    unread: false,
  },
]
