import { site, pasosConsulta, waLink } from '../data/content'
import { Icon } from './Icon'

export function Consultas() {
  const waConsultas = waLink(
    site.whatsappConsultas,
    'Hola Dr. Baldeón, quisiera agendar una consulta.',
  )
  const waComunidades = waLink(
    site.whatsappComunidades,
    'Hola, quiero información sobre las comunidades terapéuticas.',
  )

  return (
    <section className="section consultas" id="consultas">
      <div className="container consultas__grid">
        <div className="consultas__left">
          <span className="eyebrow eyebrow--light reveal">Consultas</span>
          <h2 className="consultas__title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            Da el primer paso hoy
          </h2>
          <p className="consultas__lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
            Empezar es más simple de lo que crees. Cuatro pasos y estás en proceso.
          </p>

          <ol className="pasos">
            {pasosConsulta.map((p, i) => (
              <li
                className="paso reveal"
                key={p.n}
                style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
              >
                <span className="paso__num">{p.n}</span>
                <div className="paso__body">
                  <h3 className="paso__title">{p.titulo}</h3>
                  <p className="paso__text">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="consultas__card reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
          <h3 className="ccard__title">Conversemos</h3>
          <p className="ccard__sub">
            La forma más rápida de empezar es por WhatsApp. Te responde su equipo.
          </p>

          <a className="btn btn-wa ccard__btn" href={waConsultas} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} />
            Agendar una consulta
          </a>
          <a className="btn btn-ghost ccard__btn" href={waComunidades} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} />
            Info de comunidades
          </a>

          <p className="ccard__note">
            <Icon name="lock" size={15} />
            Espacio 100% confidencial · sin compromiso
          </p>

          <ul className="ccard__meta">
            <li>
              <Icon name="whatsapp" size={18} />
              <span>+51 979 386 830 · te responde su equipo</span>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>Presencial en Lima · online en todo el mundo</span>
            </li>
            <li>
              <Icon name="calendar" size={18} />
              <span>Sesiones de 50 minutos</span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>

          <div className="ccard__social">
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Icon name="youtube" size={22} />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={22} />
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
