import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useScrollReveal } from '../lib/useReveal'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './FloatingWhatsApp'

export function Layout() {
  const { pathname } = useLocation()

  // Reinicia las animaciones de aparición en cada cambio de página.
  useScrollReveal(pathname)

  // Cada página empieza desde arriba.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Nav />
      <main className="page" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
