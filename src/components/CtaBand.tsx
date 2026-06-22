import { Link } from 'react-router-dom'
import { site, waLink } from '../data/content'
import { Icon } from './Icon'

type CtaBandProps = {
  titulo?: string
  texto?: string
}

export function CtaBand({
  titulo = 'Da el primer paso hoy',
  texto = 'Escríbele por WhatsApp y agenda tu primera sesión, o conoce cómo es el proceso.',
}: CtaBandProps) {
  const wa = waLink(site.whatsappConsultas, 'Hola Dr. Baldeón, quisiera agendar una consulta.')
  return (
    <section className="ctaband">
      <div className="container ctaband__inner reveal">
        <div>
          <h2 className="ctaband__title">{titulo}</h2>
          <p className="ctaband__text">{texto}</p>
        </div>
        <div className="ctaband__actions">
          <a className="btn btn-wa" href={wa} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} />
            Conversemos
          </a>
          <Link className="btn btn-ghost btn-ghost--light" to="/consultas">
            Ver cómo funciona
          </Link>
        </div>
      </div>
    </section>
  )
}
