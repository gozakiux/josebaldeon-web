import { usePageMeta } from '../lib/usePageMeta'
import { Consultas } from '../components/Consultas'
import { Faq } from '../components/Faq'
import { Icon } from '../components/Icon'
import { primeraSesion, motivosConsulta } from '../data/content'

export function ConsultasPage() {
  usePageMeta(
    'Agenda tu consulta',
    'Agenda tu sesión con el Dr. José Baldeón: terapia individual, de pareja y familiar, presencial en Lima u online. Escríbele por WhatsApp.',
    '/consultas',
  )
  return (
    <>
      <h1 className="sr-only">Agenda tu consulta con el Dr. José Baldeón</h1>
      <Consultas />

      <section className="section proceso">
        <div className="container proceso__grid">
          <div className="reveal">
            <span className="eyebrow">Tu proceso</span>
            <h2 className="section-title" style={{ '--d': '60ms' } as React.CSSProperties}>
              {primeraSesion.titulo}
            </h2>
            <p className="lead" style={{ '--d': '120ms' } as React.CSSProperties}>
              {primeraSesion.texto}
            </p>
          </div>
          <div className="motivos reveal">
            <h3 className="motivos__title">¿En qué te puede acompañar?</h3>
            <ul className="motivos__list">
              {motivosConsulta.map((m) => (
                <li key={m}>
                  <Icon name="check" size={16} />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq />
    </>
  )
}
