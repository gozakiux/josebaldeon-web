import { useEffect } from 'react'

const SITE = 'Dr. José Baldeón'
const ORIGIN = 'https://josebaldeon.com'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Actualiza title, description, Open Graph y canonical por página (SEO en SPA). */
export function usePageMeta(title: string, description: string, path = '') {
  useEffect(() => {
    const full = `${title} · ${SITE}`
    document.title = full
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', full)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', ORIGIN + path)

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = ORIGIN + path
  }, [title, description, path])
}
