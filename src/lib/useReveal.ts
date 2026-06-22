import { useEffect } from 'react'

/**
 * Revela los elementos con clase `.reveal` cuando entran al viewport.
 * Soporta retraso escalonado vía style="--d: 120ms" en cada elemento.
 * Pasa `dep` (p. ej. la ruta actual) para reiniciar el observador al cambiar de página.
 */
export function useScrollReveal(dep?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
