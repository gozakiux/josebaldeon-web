import { Link } from 'react-router-dom'
import { Icon } from './Icon'

const items = [
  {
    to: '/sobre',
    icon: 'user',
    titulo: 'Sobre José y su método',
    texto: 'Su trayectoria y la TENCA: Terapia Narrativa Centrada en el Amor.',
  },
  {
    to: '/comunidades',
    icon: 'users',
    titulo: 'Comunidades terapéuticas',
    texto: 'Tres procesos grupales para ti, tu pareja y tu familia.',
  },
  {
    to: '/charlas',
    icon: 'video',
    titulo: 'Videocharlas',
    texto: 'Aprende de él, gratis, desde donde estés.',
  },
  {
    to: '/libros',
    icon: 'book',
    titulo: 'Libros',
    texto: 'Su sabiduría para llevar a casa, con compra segura.',
  },
  {
    to: '/blog',
    icon: 'message',
    titulo: 'Blog',
    texto: 'Lecturas que te acompañan en el camino.',
  },
  {
    to: '/consultas',
    icon: 'calendar',
    titulo: 'Consultas',
    texto: 'Agenda tu sesión, presencial en Lima u online.',
  },
]

export function Explora() {
  return (
    <section className="section explora">
      <div className="container">
        <div className="block-head block-head--center">
          <span className="eyebrow reveal">Explora</span>
          <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            Todo lo que encontrarás aquí
          </h2>
        </div>

        <div className="explora__grid">
          {items.map((it, i) => (
            <Link
              className="explora__card reveal"
              to={it.to}
              key={it.to}
              style={{ '--d': `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <span className="explora__icon">
                <Icon name={it.icon} size={24} />
              </span>
              <h3 className="explora__title">{it.titulo}</h3>
              <p className="explora__text">{it.texto}</p>
              <span className="explora__more">
                Entrar <Icon name="arrow" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
