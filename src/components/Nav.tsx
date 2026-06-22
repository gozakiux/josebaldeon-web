import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site, nav, waLink } from '../data/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú al cambiar de página (incluye atrás/adelante del navegador).
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Cierra con Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const wa = waLink(site.whatsappConsultas, 'Hola Dr. Baldeón, quisiera agendar una consulta.')

  return (
    <header className={`nav ${scrolled || !isHome ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label="Inicio" onClick={() => setOpen(false)}>
          <span className="nav__brand-name">José Baldeón</span>
          <span className="nav__brand-role">Psicoterapeuta</span>
        </Link>

        <nav
          id="nav-mobile-panel"
          className={`nav__links ${open ? 'is-open' : ''}`}
          aria-label="Navegación principal"
        >
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'is-current' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="btn btn-primary nav__cta--mobile"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda tu consulta
          </a>
        </nav>

        <a className="btn btn-primary nav__cta" href={wa} target="_blank" rel="noopener noreferrer">
          Agenda tu consulta
        </a>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="nav-mobile-panel"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
