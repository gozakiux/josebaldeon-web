import { testimonios } from '../data/content'
import { Icon } from './Icon'

export function Testimonios() {
  return (
    <section className="section testimonios">
      <div className="container">
        <div className="block-head block-head--center">
          <span className="eyebrow reveal">Testimonios</span>
          <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            Historias que volvieron a empezar
          </h2>
        </div>

        <div className="cards-3">
          {testimonios.map((t, i) => (
            <figure
              className="testi reveal"
              key={i}
              style={{ '--d': `${i * 110}ms` } as React.CSSProperties}
            >
              <span className="testi__quote">
                <Icon name="quote" size={28} />
              </span>
              <blockquote className="testi__text">{t.texto}</blockquote>
              <figcaption className="testi__author">
                <span className="testi__avatar">{t.iniciales}</span>
                {t.autor}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
