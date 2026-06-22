import { Link } from 'react-router-dom'
import { site, nav, navExtra } from '../data/content'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__name">Dr. José Baldeón</span>
          <p className="footer__tag">El desamor enferma, el amor sana.</p>
          <div className="footer__social">
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Icon name="youtube" size={22} />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={22} />
            </a>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Pie de página">
          <span className="footer__col-title">Explora</span>
          {[...nav, ...navExtra].map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="footer__contact">
          <span className="footer__col-title">Contacto</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.ciudad}</span>
          <span>Presencial y online</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Dr. José Baldeón · Todos los derechos reservados</span>
        <span>
          Psicoterapeuta familiar y de pareja{site.colegiatura ? ` · ${site.colegiatura}` : ''}
        </span>
      </div>
    </footer>
  )
}
