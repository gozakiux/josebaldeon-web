import { sobre, frases, asset } from '../data/content'
import { Icon } from './Icon'

export function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="container sobre__grid">
        <div className="sobre__visual reveal">
          <div className="portrait portrait--sobre">
            <img
              className="portrait__img"
              src={asset('jose-sobre.webp')}
              alt="Dr. José Baldeón"
              loading="lazy"
            />
          </div>
          <div className="sobre__quote">
            <Icon name="quote" size={26} />
            <p>{frases.desamor}</p>
          </div>
        </div>

        <div className="sobre__copy">
          <span className="eyebrow reveal">Sobre José</span>
          <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            {sobre.titulo}
          </h2>
          {sobre.parrafos.map((p, i) => (
            <p
              className="sobre__p reveal"
              key={i}
              style={{ '--d': `${120 + i * 70}ms` } as React.CSSProperties}
            >
              {p}
            </p>
          ))}

          <ul className="sobre__creds reveal" style={{ '--d': '320ms' } as React.CSSProperties}>
            {sobre.credenciales.map((c) => (
              <li key={c}>
                <Icon name="check" size={18} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
