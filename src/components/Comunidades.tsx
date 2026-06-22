import { comunidades, site, waLink } from '../data/content'
import { Icon } from './Icon'

const iconMap: Record<string, string> = {
  'heart-handshake': 'heart',
  users: 'users',
  'mood-kid': 'child',
}

export function Comunidades() {
  return (
    <section className="section comunidades" id="comunidades">
      <div className="container">
        <div className="block-head">
          <span className="eyebrow reveal">Comunidades terapéuticas</span>
          <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            Tres caminos para sanar, según lo que necesitas hoy
          </h2>
          <p className="lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
            Procesos grupales acompañados por José. Te unes con un solo mensaje.
          </p>
        </div>

        <div className="cards-3">
          {comunidades.map((c, i) => {
            const wa = waLink(
              site.whatsappComunidades,
              `Hola, quiero información para unirme a la comunidad "${c.nombre}".`,
            )
            return (
              <article
                className="comu reveal"
                key={c.nombre}
                style={{ '--d': `${i * 110}ms` } as React.CSSProperties}
              >
                <span className="comu__tag">{c.para}</span>
                <span className="comu__icon">
                  <Icon name={iconMap[c.icono] ?? 'heart'} size={28} />
                </span>
                <h3 className="comu__name">{c.nombre}</h3>
                <p className="comu__taller">{c.taller}</p>
                <p className="comu__text">{c.texto}</p>
                <a className="btn btn-primary comu__cta" href={wa} target="_blank" rel="noopener noreferrer">
                  Unirme
                  <Icon name="arrow" size={18} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
