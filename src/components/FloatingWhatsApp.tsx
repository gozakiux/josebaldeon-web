import { site, waLink } from '../data/content'
import { Icon } from './Icon'

export function FloatingWhatsApp() {
  const wa = waLink(site.whatsappConsultas, 'Hola Dr. Baldeón, quisiera más información.')
  return (
    <a
      className="fab-wa"
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <Icon name="whatsapp" size={28} />
      <span className="fab-wa__label">Escríbenos</span>
      <span className="fab-wa__pulse" aria-hidden="true" />
    </a>
  )
}
