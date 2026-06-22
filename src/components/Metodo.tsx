import { metodo } from '../data/content'
import { Icon } from './Icon'

const iconos = ['message', 'heart', 'users']

export function Metodo() {
  return (
    <section className="section metodo" id="metodo">
      <div className="container">
        <div className="metodo__head">
          <span className="eyebrow reveal">Su método</span>
          <h2 className="metodo__title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            <span className="metodo__sigla">{metodo.sigla}</span>
            {metodo.titulo}
          </h2>
          <p className="lead reveal" style={{ '--d': '160ms' } as React.CSSProperties}>
            {metodo.intro}
          </p>
        </div>

        <div className="metodo__pilares">
          {metodo.pilares.map((p, i) => (
            <article
              className="pilar reveal"
              key={p.titulo}
              style={{ '--d': `${i * 110}ms` } as React.CSSProperties}
            >
              <span className="pilar__num">0{i + 1}</span>
              <span className="pilar__icon">
                <Icon name={iconos[i]} size={26} />
              </span>
              <h3 className="pilar__title">{p.titulo}</h3>
              <p className="pilar__text">{p.texto}</p>
            </article>
          ))}
        </div>

        <div className="mapa reveal">
          <div className="mapa__icon">
            <Icon name="compass" size={30} />
          </div>
          <div className="mapa__body">
            <span className="mapa__kicker">Marco insignia</span>
            <h3 className="mapa__title">{metodo.mapa.titulo}</h3>
            <p className="mapa__text">{metodo.mapa.texto}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
