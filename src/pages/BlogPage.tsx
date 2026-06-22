import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'
import { articulosFull } from '../data/articulos'
import { Icon } from '../components/Icon'
import { CtaBand } from '../components/CtaBand'

export function BlogPage() {
  usePageMeta(
    'Blog de psicología y terapia familiar',
    'Reflexiones del Dr. José Baldeón sobre el amor, la familia y la sanación: artículos sobre pareja, crianza y crecimiento personal.',
    '/blog',
  )
  return (
    <>
      <section className="section blog">
        <div className="container">
          <div className="block-head">
            <span className="eyebrow reveal">Del blog</span>
            <h1 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
              Lecturas que te acompañan
            </h1>
            <p className="lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
              Reflexiones sobre el amor, la familia y la sanación, desde la mirada del Dr. José Baldeón.
            </p>
          </div>

          <div className="blog__grid">
            {articulosFull.map((a, i) => (
              <Link
                className="post reveal"
                to={`/blog/${a.slug}`}
                key={a.slug}
                style={{ '--d': `${(i % 3) * 70}ms` } as React.CSSProperties}
              >
                <span className="post__cat">{a.categoria}</span>
                <h2 className="post__title">{a.titulo}</h2>
                <p className="post__excerpt">{a.excerpt}</p>
                <span className="post__meta">
                  {a.lectura} de lectura
                  <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
