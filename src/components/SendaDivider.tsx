/**
 * "La senda": una línea curva hecha a mano que se dibuja al aparecer.
 * Es el motivo distintivo del sitio — el camino de sanación (Nuevas Sendas).
 */
export function SendaDivider() {
  return (
    <div className="senda reveal" aria-hidden="true">
      <svg viewBox="0 0 1100 120" fill="none" preserveAspectRatio="none">
        <path
          className="senda-path"
          pathLength={1}
          d="M0 60 C 150 10, 270 110, 420 60 S 690 10, 840 60 980 95, 1100 50"
          stroke="var(--clay)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="1 1"
        />
        <circle className="senda-dot" cx="1100" cy="50" r="5" fill="var(--clay)" />
      </svg>
    </div>
  )
}
