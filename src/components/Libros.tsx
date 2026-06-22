import { libros, site, waLink } from '../data/content'
import { Icon } from './Icon'

export function Libros() {
  return (
    <section className="section libros" id="libros">
      <div className="container">
        <div className="block-head block-head--row">
          <div>
            <span className="eyebrow reveal">Libros</span>
            <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
              Su sabiduría, para llevar a casa
            </h2>
          </div>
          <span className="hotmart-badge reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
            <Icon name="whatsapp" size={16} />
            Pídelos por WhatsApp · entrega a domicilio
          </span>
        </div>

        <div className="libros__grid">
          {libros.map((l, i) => {
            const wa = waLink(
              site.whatsappConsultas,
              `Hola, quiero el libro "${l.titulo}" del Dr. Baldeón.`,
            )
            const style = { '--d': `${(i % 4) * 80}ms` } as React.CSSProperties
            const inner = (
              <>
                <div className="libro__cover">
                  <Icon name="book" size={30} />
                  {l.tipo && <span className="libro__flag">{l.tipo}</span>}
                  {l.agotado && <span className="libro__flag libro__flag--out">Agotado</span>}
                </div>
                <div className="libro__info">
                  <h3 className="libro__title">{l.titulo}</h3>
                  <p className="libro__tema">{l.tema}</p>
                  <span className="libro__buy">
                    {l.agotado ? 'No disponible' : 'Pedir'}
                    {!l.agotado && <Icon name="arrow" size={16} />}
                  </span>
                </div>
              </>
            )
            return l.agotado ? (
              <div className="libro libro--out reveal" key={l.titulo} style={style}>
                {inner}
              </div>
            ) : (
              <a
                className="libro reveal lift"
                key={l.titulo}
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pedir el libro "${l.titulo}" por WhatsApp`}
                style={style}
              >
                {inner}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
