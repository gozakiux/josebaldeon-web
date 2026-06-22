import { useParams, Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { articulosFull } from '../data/articulos'
import { CtaBand } from '../components/CtaBand'

export function ArticlePage() {
  const { slug } = useParams()
  const a = articulosFull.find((x) => x.slug === slug)
  usePageMeta(
    a ? a.titulo : 'Artículo no encontrado',
    a ? a.excerpt : 'Artículo del blog del Dr. José Baldeón.',
    a ? `/blog/${a.slug}` : '/blog',
  )

  if (!a) {
    return (
      <section className="section">
        <div className="container articulo-full__wrap">
          <h1 className="section-title">Artículo no encontrado</h1>
          <p className="lead">No encontramos ese artículo.</p>
          <Link className="text-link" to="/blog">
            ← Volver al blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <article className="section articulo-full">
        <div className="container articulo-full__wrap">
          <Link className="text-link articulo-full__back" to="/blog">
            ← Volver al blog
          </Link>
          <span className="post__cat">{a.categoria}</span>
          <h1 className="articulo-full__title">{a.titulo}</h1>
          <p className="articulo-full__meta">Por Dr. José Baldeón · {a.lectura} de lectura</p>

          <div className="articulo-full__body">
            {a.cuerpo.map((b, i) => {
              if (b.tipo === 'h') return <h2 key={`${b.tipo}-${i}`}>{b.texto}</h2>
              if (b.tipo === 'quote') return <blockquote key={`${b.tipo}-${i}`}>{b.texto}</blockquote>
              return <p key={`${b.tipo}-${i}`}>{b.texto}</p>
            })}
          </div>
        </div>
      </article>
      <CtaBand
        titulo="¿Esto resonó contigo?"
        texto="Da el primer paso: agenda una consulta o escríbele por WhatsApp."
      />
    </>
  )
}
