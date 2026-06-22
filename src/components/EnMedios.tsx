import { Link } from 'react-router-dom'
import { Icon } from './Icon'

const apariciones = ['RPP Noticias', 'Televisión nacional', 'Charlas y congresos', 'YouTube']

export function EnMedios() {
  return (
    <section className="section enmedios">
      <div className="container block-head--center">
        <span className="eyebrow reveal">En los medios</span>
        <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
          Una voz de referencia, dentro y fuera del consultorio
        </h2>
        <p className="lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
          Más de veinte años acompañando familias, 11 libros publicados y su programa "La Belleza de Amar".
        </p>

        <div className="enmedios__logos reveal" style={{ '--d': '220ms' } as React.CSSProperties}>
          {apariciones.map((a) => (
            <span className="enmedios__logo" key={a}>
              {a}
            </span>
          ))}
        </div>

        <Link className="text-link reveal" to="/charlas" style={{ '--d': '300ms' } as React.CSSProperties}>
          Ver sus entrevistas y charlas
          <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  )
}
