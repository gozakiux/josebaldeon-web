import { Link } from 'react-router-dom'
import { site, hero, stats, waLink, asset } from '../data/content'

export function Hero() {
  const wa = waLink(site.whatsappConsultas, 'Hola Dr. Baldeón, quisiera agendar una consulta.')

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow hero-rise" style={{ '--d': '0ms' } as React.CSSProperties}>
            {hero.eyebrow}
          </span>

          <h1 className="hero__title">
            <span className="hero-rise" style={{ '--d': '90ms' } as React.CSSProperties}>
              El desamor enferma,
            </span>
            <span className="hero-rise hero__title-accent" style={{ '--d': '220ms' } as React.CSSProperties}>
              el amor sana.
              <svg className="hero__underline" viewBox="0 0 320 24" fill="none" aria-hidden="true">
                <path
                  className="hero__underline-path"
                  pathLength={1}
                  d="M4 16 C 70 4, 150 4, 214 12 S 300 20, 316 8"
                  stroke="var(--clay)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="hero__lead lead hero-rise" style={{ '--d': '360ms' } as React.CSSProperties}>
            {hero.bajada}
          </p>

          <div className="hero__actions hero-rise" style={{ '--d': '460ms' } as React.CSSProperties}>
            <a className="btn btn-primary" href={wa} target="_blank" rel="noopener noreferrer">
              {hero.ctaPrimario}
            </a>
            <Link className="btn btn-ghost" to="/sobre">
              {hero.ctaSecundario}
            </Link>
          </div>
        </div>

        <div className="hero__visual hero-rise" style={{ '--d': '300ms' } as React.CSSProperties}>
          <div className="portrait portrait--hero">
            <img
              className="portrait__img"
              src={asset('jose-hero.webp')}
              alt="Dr. José Baldeón, psicoterapeuta familiar y de pareja"
              loading="eager"
            />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Atención presencial en Lima y online
          </div>
        </div>
      </div>

      <div className="container hero__stats">
        {stats.map((s, i) => (
          <div
            className="hero__stat reveal"
            key={s.etiqueta}
            style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
          >
            <span className="hero__stat-value">{s.valor}</span>
            <span className="hero__stat-label">{s.etiqueta}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
