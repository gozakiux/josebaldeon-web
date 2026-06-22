# Web personal · Dr. José Baldeón

Sitio web personal del **Dr. José Baldeón**, psicoterapeuta familiar y de pareja.
Reemplazo moderno del sitio actual (josebaldeon.com), con dirección de diseño
**editorial-narrativa** basada en su carácter: maestro, escritor y mentor cuyo
método es la **TENCA — Terapia Narrativa Centrada en el Amor** ("el desamor
enferma, el amor sana").

## Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- GSAP disponible para animaciones (las actuales son CSS + IntersectionObserver)
- Sistema de diseño propio en CSS (tokens cálidos: arcilla, crema, oliva, oro)
- Sin frameworks de UI · fuentes Fraunces (display) + Hanken Grotesk (texto)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción (type-check + bundle)
npm run preview  # previsualiza el build
```

## Estructura

Sitio **multipágina** con `react-router-dom` (HashRouter → funciona en cualquier
hosting estático). Rutas: `/` (inicio), `/sobre`, `/comunidades`, `/charlas`,
`/libros`, `/blog`, `/consultas`.

- `src/App.tsx` — enrutador y rutas.
- `src/pages/` — una página por ruta (Home, SobrePage, ComunidadesPage…).
- `src/components/Layout.tsx` — nav + footer + WhatsApp comunes a todas las páginas.
- `src/data/content.ts` — todo el contenido (sintetizado de su web oficial).
- `src/components/` — secciones reutilizables (Hero, Sobre, Metodo, Comunidades,
  Videocharlas, Libros, Articulos, Testimonios, Faq, Consultas, Explora, CtaBand…).
- `src/styles/` — `tokens.css` (variables), `global.css` (base), `components.css`.
- `src/lib/useReveal.ts` — animación de aparición al hacer scroll.

## Decisiones de diseño

- **El motivo de "la senda"**: línea curva que se dibuja al hacer scroll →
  el camino de sanación (alude a *Nuevas Sendas*).
- **Paleta cálida** (nada de azul clínico ni neón): el amor sana → tonos tierra.
- **WhatsApp accesible** en todo momento (botón flotante + CTAs) y compra de
  libros/programas vía **Hotmart** (resuelve el cobro roto del sitio actual).

## Pendiente (necesita material de José)

Marcado con `// TODO` en `src/data/content.ts`:

- [ ] Foto profesional en alta resolución.
- [ ] Testimonios reales y verificables (los actuales son de ejemplo).
- [ ] Enlaces reales de Hotmart por cada libro / perfil de Hotmart.
- [ ] Tarifa de consulta y número de colegiatura (CPsP).
- [ ] Confirmar correo de contacto público.

## SEO

- URLs limpias con `BrowserRouter` (`/sobre`, `/blog/<slug>`…) y `base: '/'` en Vite.
- Título, descripción, Open Graph y canonical por página vía `usePageMeta` (`src/lib/usePageMeta.ts`).
- Datos estructurados JSON-LD (Person + MedicalBusiness) en `index.html`.
- `public/robots.txt` y `public/sitemap.xml` (actualizar el sitemap al añadir artículos).
- `public/og-cover.jpg` (1200×630) para previsualizaciones al compartir.

## Despliegue

- `npm run build` genera `dist/` y copia `index.html` a `dist/404.html` (paso `postbuild`)
  para que el enrutado del lado cliente funcione en hosting estático (GitHub Pages).
- Recomendado: **Netlify/Vercel** (reescritura nativa `/* -> /index.html`) o GitHub Pages
  con el `404.html` ya incluido. Apuntar el dominio `josebaldeon.com`.
- Tras publicar: enviar el sitemap a Google Search Console y conectar Analytics.
