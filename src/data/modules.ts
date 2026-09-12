export type Semaphore = 'green' | 'yellow' | 'red'

export type ModuleItem = {
  id: string
  title: string
  status?: string
  meta?: string
  semaphore?: Semaphore
}

export type AppModule = {
  id: string
  path: string
  label: string
  group: string
  description: string
  iso?: string
  items: ModuleItem[]
}

export const modules: AppModule[] = [
  {
    id: 'admin-sig',
    path: 'administracion',
    label: 'Administración del SIG',
    group: 'Gestión integrada',
    description:
      'Estructura organizacional, alcance, política integrada y matriz de responsabilidades.',
    iso: 'ISO 9001 / 14001 / 45001',
    items: [
      { id: '1', title: 'Alcance del SIG', status: 'Vigente', meta: 'Rev. 04 — 2026', semaphore: 'green' },
      { id: '2', title: 'Política integrada HSEQ', status: 'Publicada', meta: 'Aprobada gerencia', semaphore: 'green' },
      { id: '3', title: 'Organigrama y cargos', status: 'Actualizado', meta: '48 cargos', semaphore: 'green' },
      { id: '4', title: 'Comité del SIG', status: 'Próxima sesión', meta: '18 Sep 2026', semaphore: 'yellow' },
      { id: '5', title: 'Partes interesadas', status: 'En revisión', meta: '12 partes', semaphore: 'yellow' },
    ],
  },
  {
    id: 'documental',
    path: 'documental',
    label: 'Gestión documental',
    group: 'Gestión integrada',
    description:
      'Control de documentos: crear, revisar, aprobar, publicar, modificar y retirar.',
    iso: 'Numeral 7.5',
    items: [
      { id: '1', title: 'PRO-CAL-012 Control de no conformidades', status: 'Vigente', meta: 'v3.2', semaphore: 'green' },
      { id: '2', title: 'MAN-SIG-001 Manual integrado', status: 'Por revisar', meta: 'Vence 30 Sep', semaphore: 'yellow' },
      { id: '3', title: 'FOR-SST-008 Inspección EPP', status: 'Borrador', meta: 'En aprobación', semaphore: 'yellow' },
      { id: '4', title: 'PRO-AMB-003 Manejo RESPEL', status: 'Obsoleto', meta: 'Retirado', semaphore: 'red' },
      { id: '5', title: 'POL-INT-001 Política integrada', status: 'Vigente', meta: 'v2.0', semaphore: 'green' },
    ],
  },
  {
    id: 'procesos',
    path: 'procesos',
    label: 'Gestión de procesos',
    group: 'Calidad',
    description: 'Mapa de procesos, caracterización, interacciones e indicadores asociados.',
    iso: 'ISO 9001',
    items: [
      { id: '1', title: 'Producción', status: 'Caracterizado', meta: 'Líder: M. Peña', semaphore: 'green' },
      { id: '2', title: 'Compras', status: 'Caracterizado', meta: 'Líder: L. Gómez', semaphore: 'green' },
      { id: '3', title: 'Gestión humana', status: 'En actualización', meta: 'Riesgos pendientes', semaphore: 'yellow' },
      { id: '4', title: 'Mantenimiento', status: 'Caracterizado', meta: 'Líder: J. Ruiz', semaphore: 'green' },
    ],
  },
  {
    id: 'riesgos',
    path: 'riesgos',
    label: 'Riesgos y oportunidades',
    group: 'Gestión integrada',
    description: 'Identificación, valoración, controles y seguimiento transversal al SIG.',
    items: [
      { id: '1', title: 'Falla en control de proceso crítico', status: 'Alto', meta: 'Calidad', semaphore: 'red' },
      { id: '2', title: 'Derrame de sustancias químicas', status: 'Medio', meta: 'Ambiental', semaphore: 'yellow' },
      { id: '3', title: 'Trabajo en alturas sin control', status: 'Alto', meta: 'SST', semaphore: 'red' },
      { id: '4', title: 'Oportunidad: digitalización documental', status: 'En curso', meta: 'Mejora', semaphore: 'green' },
    ],
  },
  {
    id: 'legal',
    path: 'legal',
    label: 'Requisitos legales',
    group: 'Gestión integrada',
    description: 'Legislación aplicable, obligaciones, evidencias y alertas de vencimiento.',
    iso: 'Ambiental y SST',
    items: [
      { id: '1', title: 'Resolución 0312/2019 — Estándares mínimos SG-SST', status: 'Cumple', meta: 'Eval. Jul 2026', semaphore: 'green' },
      { id: '2', title: 'Decreto 1076/2015 — Residuos peligrosos', status: 'Por evaluar', meta: 'Vence 25 Sep', semaphore: 'yellow' },
      { id: '3', title: 'Ley 1335 — Espacios libres de humo', status: 'Cumple', meta: 'Evidencia OK', semaphore: 'green' },
      { id: '4', title: 'Permiso de vertimientos', status: 'En riesgo', meta: 'Vence 10 Oct', semaphore: 'red' },
    ],
  },
  {
    id: 'ambiental',
    path: 'ambiental',
    label: 'Aspectos e impactos',
    group: 'Ambiental',
    description: 'Aspectos ambientales significativos, controles y programas ambientales.',
    iso: 'ISO 14001',
    items: [
      { id: '1', title: 'Consumo de energía eléctrica', status: 'Significativo', meta: 'Programa ahorro', semaphore: 'yellow' },
      { id: '2', title: 'Generación de RESPEL', status: 'Significativo', meta: 'Control activo', semaphore: 'green' },
      { id: '3', title: 'Emisiones por combustión', status: 'Significativo', meta: 'Monitoreo Q3', semaphore: 'yellow' },
      { id: '4', title: 'Consumo de agua industrial', status: 'No significativo', meta: 'Estable', semaphore: 'green' },
    ],
  },
  {
    id: 'residuos',
    path: 'residuos',
    label: 'Residuos y RESPEL',
    group: 'Ambiental',
    description: 'Generación, almacenamiento, transporte y disposición con gestores autorizados.',
    items: [
      { id: '1', title: 'Aceites usados — lote AU-0926', status: 'Dispuesto', meta: 'Cert. 08 Sep', semaphore: 'green' },
      { id: '2', title: 'Envases contaminados', status: 'En almacén', meta: '120 kg', semaphore: 'yellow' },
      { id: '3', title: 'RAEE oficina', status: 'Retiro programado', meta: '20 Sep', semaphore: 'yellow' },
      { id: '4', title: 'Residuos aprovechables', status: 'OK', meta: '450 kg/mes', semaphore: 'green' },
    ],
  },
  {
    id: 'sst',
    path: 'sst',
    label: 'Gestión SST',
    group: 'SST',
    description: 'Peligros, inspecciones, accidentes, medicina laboral y EPP.',
    iso: 'ISO 45001',
    items: [
      { id: '1', title: 'Matriz de peligros — Producción', status: 'Actualizada', meta: 'Ago 2026', semaphore: 'green' },
      { id: '2', title: 'Inspección extintores', status: 'Pendiente', meta: 'Programada 14 Sep', semaphore: 'yellow' },
      { id: '3', title: 'Incidente casi accidente — línea 2', status: 'Investigación', meta: 'Abierto', semaphore: 'red' },
      { id: '4', title: 'Exámenes ocupacionales Q3', status: 'En curso', meta: '72% avance', semaphore: 'yellow' },
      { id: '5', title: 'Entrega EPP — turno mañana', status: 'Completada', meta: '28 registros', semaphore: 'green' },
    ],
  },
  {
    id: 'contratistas',
    path: 'contratistas',
    label: 'Contratistas',
    group: 'SST',
    description: 'Documentos, afiliaciones, inducciones, permisos de trabajo y vencimientos.',
    items: [
      { id: '1', title: 'Servicios Eléctricos del Valle', status: 'Habilitado', meta: 'Docs OK', semaphore: 'green' },
      { id: '2', title: 'Montajes Industriales SAS', status: 'Alerta', meta: 'ARL vence 16 Sep', semaphore: 'yellow' },
      { id: '3', title: 'Limpieza Total Ltda.', status: 'Bloqueado', meta: 'Inducción vencida', semaphore: 'red' },
    ],
  },
  {
    id: 'proveedores',
    path: 'proveedores',
    label: 'Proveedores',
    group: 'Calidad',
    description: 'Homologación, evaluación, reevaluación y desempeño de proveedores.',
    iso: 'ISO 9001',
    items: [
      { id: '1', title: 'Químicos del Pacífico', status: 'Homologado A', meta: 'Score 94', semaphore: 'green' },
      { id: '2', title: 'Empaques Andinos', status: 'Reevaluación', meta: 'Oct 2026', semaphore: 'yellow' },
      { id: '3', title: 'Transportes Rápidos', status: 'Condicionado', meta: '2 NC abiertas', semaphore: 'red' },
    ],
  },
  {
    id: 'clientes',
    path: 'clientes',
    label: 'Clientes y satisfacción',
    group: 'Calidad',
    description: 'Encuestas, quejas, reclamos, peticiones y tendencias de satisfacción.',
    iso: 'ISO 9001',
    items: [
      { id: '1', title: 'Satisfacción Q2 2026', status: '92%', meta: 'Meta ≥ 90%', semaphore: 'green' },
      { id: '2', title: 'Queja CLI-184 — demora entrega', status: 'En gestión', meta: 'Abierta 5d', semaphore: 'yellow' },
      { id: '3', title: 'Felicitación CLI-191 — calidad lote', status: 'Cerrada', meta: 'Registrada', semaphore: 'green' },
    ],
  },
  {
    id: 'nc',
    path: 'no-conformidades',
    label: 'No conformidades y AC',
    group: 'Mejora',
    description: 'Hallazgos, análisis de causa, acciones correctivas y verificación de eficacia.',
    items: [
      { id: '1', title: 'NC-042 — Desvío en registro de lote', status: 'Abierta', meta: 'Vence 15 Sep', semaphore: 'red' },
      { id: '2', title: 'NC-039 — Señalización incompleta', status: 'Seguimiento', meta: 'Eficacia pendiente', semaphore: 'yellow' },
      { id: '3', title: 'AC-028 — Capacitación manipulación química', status: 'Cerrada', meta: 'Eficaz', semaphore: 'green' },
    ],
  },
  {
    id: 'auditorias',
    path: 'auditorias',
    label: 'Auditorías',
    group: 'Mejora',
    description: 'Programa anual, planes, listas de verificación, hallazgos e informes.',
    iso: 'ISO 19011',
    items: [
      { id: '1', title: 'Auditoría interna — Calidad', status: 'Programada', meta: '22 Sep 2026', semaphore: 'yellow' },
      { id: '2', title: 'Auditoría interna — SST', status: 'Completada', meta: 'Ago 2026', semaphore: 'green' },
      { id: '3', title: 'Auditoría de certificación — Stage 2', status: 'Próxima', meta: 'Nov 2026', semaphore: 'green' },
    ],
  },
  {
    id: 'inspecciones',
    path: 'inspecciones',
    label: 'Inspecciones',
    group: 'SST',
    description: 'Listas de chequeo personalizables con hallazgos, evidencias y acciones.',
    items: [
      { id: '1', title: 'Extintores planta', status: 'Pendiente', meta: '14 Sep', semaphore: 'yellow' },
      { id: '2', title: 'Condiciones locativas almacén', status: 'OK', meta: '09 Sep', semaphore: 'green' },
      { id: '3', title: 'EPP línea de empaque', status: 'Con hallazgos', meta: '2 acciones', semaphore: 'red' },
    ],
  },
  {
    id: 'indicadores',
    path: 'indicadores',
    label: 'Indicadores',
    group: 'Gerencia',
    description: 'Fórmulas, metas, frecuencia, semáforo, tendencias y análisis.',
    items: [
      { id: '1', title: 'Cumplimiento programa de auditorías', status: '88%', meta: 'Meta ≥ 90%', semaphore: 'yellow' },
      { id: '2', title: 'Índice de frecuencia de accidentalidad', status: '1.2', meta: 'Meta ≤ 2.0', semaphore: 'green' },
      { id: '3', title: 'Cumplimiento legal', status: '96%', meta: 'Meta ≥ 95%', semaphore: 'green' },
      { id: '4', title: 'Cierre oportuno de NC', status: '74%', meta: 'Meta ≥ 85%', semaphore: 'red' },
    ],
  },
  {
    id: 'objetivos',
    path: 'objetivos',
    label: 'Objetivos y programas',
    group: 'Gerencia',
    description: 'Objetivos HSEQ con metas, actividades, responsables y avance.',
    items: [
      { id: '1', title: 'Programa ahorro de agua', status: '68% avance', meta: 'Meta -10% consumo', semaphore: 'yellow' },
      { id: '2', title: 'Programa de capacitaciones SST', status: '91% avance', meta: 'On track', semaphore: 'green' },
      { id: '3', title: 'Programa de auditorías 2026', status: '75% avance', meta: '3 pendientes', semaphore: 'yellow' },
    ],
  },
  {
    id: 'capacitacion',
    path: 'capacitacion',
    label: 'Capacitación y competencias',
    group: 'Gestión integrada',
    description: 'Matriz de competencias, inducciones, asistencia y vencimiento de certificaciones.',
    items: [
      { id: '1', title: 'Trabajo en alturas — reentrenamiento', status: 'Vence pronto', meta: '8 personas', semaphore: 'yellow' },
      { id: '2', title: 'Inducción contratistas Sep', status: 'Programada', meta: '16 Sep', semaphore: 'yellow' },
      { id: '3', title: 'Brigada de emergencias', status: 'Vigente', meta: 'Certificados OK', semaphore: 'green' },
    ],
  },
  {
    id: 'emergencias',
    path: 'emergencias',
    label: 'Emergencias',
    group: 'SST',
    description: 'Escenarios, brigadas, recursos, simulacros y acciones de mejora.',
    items: [
      { id: '1', title: 'Simulacro evacuación planta', status: 'Programado', meta: '28 Sep', semaphore: 'yellow' },
      { id: '2', title: 'Plan de emergencias', status: 'Vigente', meta: 'Rev. 03', semaphore: 'green' },
      { id: '3', title: 'Inspección equipos emergencia', status: 'Hallazgo menor', meta: '1 linterna', semaphore: 'yellow' },
    ],
  },
  {
    id: 'mantenimiento',
    path: 'mantenimiento',
    label: 'Mantenimiento',
    group: 'Operaciones',
    description: 'Hojas de vida, preventivo/correctivo, OT y calendario de equipos.',
    items: [
      { id: '1', title: 'Compresor C-02 — preventivo', status: 'Programado', meta: '15 Sep', semaphore: 'yellow' },
      { id: '2', title: 'Báscula B-01 — calibración', status: 'Vencida', meta: 'Requiere acción', semaphore: 'red' },
      { id: '3', title: 'OT-441 — Fuga hidráulica prensa', status: 'Cerrada', meta: '09 Sep', semaphore: 'green' },
    ],
  },
  {
    id: 'pnc',
    path: 'producto-no-conforme',
    label: 'Producto no conforme',
    group: 'Calidad',
    description: 'Identificación, segregación, disposición y análisis de causas.',
    iso: 'ISO 9001',
    items: [
      { id: '1', title: 'Lote L-8841 — dimensión fuera de tol.', status: 'Segregado', meta: 'Reproceso', semaphore: 'yellow' },
      { id: '2', title: 'Lote L-8790 — empaque dañado', status: 'Desechado', meta: 'Cerrado', semaphore: 'green' },
    ],
  },
  {
    id: 'comunicaciones',
    path: 'comunicaciones',
    label: 'Comunicaciones',
    group: 'Gestión integrada',
    description: 'Comunicaciones internas/externas con partes interesadas y evidencias.',
    iso: '7.4',
    items: [
      { id: '1', title: 'Comunicado política HSEQ 2026', status: 'Publicado', meta: 'Interno', semaphore: 'green' },
      { id: '2', title: 'Reporte ambiental a autoridad', status: 'En preparación', meta: 'Fecha límite 30 Sep', semaphore: 'yellow' },
    ],
  },
  {
    id: 'cambios',
    path: 'cambios',
    label: 'Gestión de cambios',
    group: 'Gestión integrada',
    description: 'Trazabilidad de cambios: necesidad, riesgos, recursos e implementación.',
    items: [
      { id: '1', title: 'Cambio línea de empaque automatizada', status: 'En evaluación', meta: 'Riesgos en análisis', semaphore: 'yellow' },
      { id: '2', title: 'Actualización software de pesaje', status: 'Implementado', meta: 'Seguimiento 30d', semaphore: 'green' },
    ],
  },
  {
    id: 'revision',
    path: 'revision-direccion',
    label: 'Revisión por la dirección',
    group: 'Gerencia',
    description: 'Entradas automáticas del SIG y generación de acta de revisión.',
    items: [
      { id: '1', title: 'Revisión gerencial H2 2026', status: 'Programada', meta: '05 Oct', semaphore: 'yellow' },
      { id: '2', title: 'Acta revisión H1 2026', status: 'Aprobada', meta: 'Firmada', semaphore: 'green' },
    ],
  },
  {
    id: 'alertas',
    path: 'alertas',
    label: 'Alertas y notificaciones',
    group: 'Gerencia',
    description: 'Avisos de vencimientos, pendientes críticos y proximidad de eventos.',
    items: [
      { id: '1', title: 'Documento próximo a vencer', status: 'Naranja', meta: 'MAN-SIG-001', semaphore: 'yellow' },
      { id: '2', title: 'Acción correctiva vencida', status: 'Rojo', meta: 'NC-042', semaphore: 'red' },
      { id: '3', title: 'Auditoría próxima', status: 'Naranja', meta: '22 Sep', semaphore: 'yellow' },
      { id: '4', title: 'Examen ocupacional vencido', status: 'Rojo', meta: '3 personas', semaphore: 'red' },
    ],
  },
  {
    id: 'reportes',
    path: 'reportes',
    label: 'Reportes y analítica',
    group: 'Gerencia',
    description: 'Informes gerenciales HSEQ exportables (demo visual, sin backend).',
    items: [
      { id: '1', title: 'Informe gerencial SIG — Sep 2026', status: 'Disponible', meta: 'PDF demo', semaphore: 'green' },
      { id: '2', title: 'Informe accidentalidad YTD', status: 'Disponible', meta: 'Excel demo', semaphore: 'green' },
      { id: '3', title: 'Informe cumplimiento legal', status: 'Borrador', meta: 'En revisión', semaphore: 'yellow' },
    ],
  },
]

export const navGroups = [
  'Gerencia',
  'Gestión integrada',
  'Calidad',
  'Ambiental',
  'SST',
  'Mejora',
  'Operaciones',
] as const

export const dashboardKpis = [
  { label: 'Estado general del SIG', value: 'En control', semaphore: 'green' as Semaphore, detail: '3 frentes en alerta' },
  { label: 'No conformidades abiertas', value: '7', semaphore: 'yellow' as Semaphore, detail: '2 vencidas' },
  { label: 'Auditorías próximas', value: '2', semaphore: 'yellow' as Semaphore, detail: 'Próxima: 22 Sep' },
  { label: 'Riesgos críticos', value: '3', semaphore: 'red' as Semaphore, detail: 'Requieren acción' },
  { label: 'Cumplimiento legal', value: '96%', semaphore: 'green' as Semaphore, detail: 'Meta ≥ 95%' },
  { label: 'Capacitaciones pendientes', value: '11', semaphore: 'yellow' as Semaphore, detail: '8 reentrenamientos' },
  { label: 'Inspecciones programadas', value: '5', semaphore: 'green' as Semaphore, detail: 'Esta semana' },
  { label: 'Documentos por revisar', value: '4', semaphore: 'yellow' as Semaphore, detail: '1 obsoleto' },
]
