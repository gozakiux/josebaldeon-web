import { formacion, site, youtube2, waLink } from '../data/content'
import { Icon } from './Icon'

export function Formacion() {
  const wa = waLink(site.whatsappComunidades, 'Hola, me interesa la formación para terapeutas con José.')
  return (
    <section className="section formacion">
      <div className="container">
        <div className="block-head">
          <span className="eyebrow reveal">{formacion.eyebrow}</span>
          <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            {formacion.titulo}
          </h2>
          <p className="lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
            {formacion.intro}
          </p>
        </div>

        <div className="cards-3">
          {formacion.items.map((it, i) => (
            <article className="formc reveal lift" key={it.nombre} style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
              <span className="formc__icon">
                <Icon name="sparkle" size={24} />
              </span>
              <h3 className="formc__name">{it.nombre}</h3>
              <p className="formc__text">{it.texto}</p>
            </article>
          ))}
        </div>

        <div className="formacion__cta reveal">
          <a className="btn btn-primary" href={youtube2} target="_blank" rel="noopener noreferrer">
            <Icon name="youtube" size={20} />
            Ver "La Belleza de Sanar"
          </a>
          <a className="btn btn-ghost" href={wa} target="_blank" rel="noopener noreferrer">
            {formacion.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
