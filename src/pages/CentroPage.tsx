import { centro, staff, asset } from '../data/content'
import { usePageMeta } from '../lib/usePageMeta'
import { Icon } from '../components/Icon'
import { CtaBand } from '../components/CtaBand'

type Miembro = (typeof staff)[number]

function StaffCard({ m, i }: { m: Miembro; i: number }) {
  return (
    <article className="staffc reveal" style={{ '--d': `${(i % 4) * 80}ms` } as React.CSSProperties}>
      <div className="staffc__avatar">
        <img src={asset(m.foto)} alt={m.nombre} loading="lazy" />
      </div>
      <span className="staffc__pais">{m.pais}</span>
      <h3 className="staffc__name">{m.nombre}</h3>
      <p className="staffc__rol">{m.rol}</p>
      <p className="staffc__uni">{m.uni}</p>
      <ul className="staffc__esp">
        {m.esp.slice(0, 3).map((e) => (
          <li key={e}>
            <Icon name="check" size={15} />
            {e}
          </li>
        ))}
      </ul>
      <p className="staffc__frase">{m.frase}</p>
    </article>
  )
}

export function CentroPage() {
  usePageMeta(
    'PsicoMunay · Centro de Psicoterapia en Lima',
    'PsicoMunay, centro de psicoterapia integral dirigido por el Dr. José Baldeón. Atención individual, de pareja y familiar con un equipo internacional.',
    '/centro',
  )
  const [director, ...equipo] = staff
  if (!director) return null

  return (
    <>
      <section className="section centro-intro">
        <div className="container">
          <div className="centro__head">
            <span className="eyebrow reveal">Centro de Psicoterapia</span>
            <h1 className="centro__name reveal" style={{ '--d': '70ms' } as React.CSSProperties}>
              {centro.nombre}
            </h1>
            <p className="centro__subtitle reveal" style={{ '--d': '130ms' } as React.CSSProperties}>
              {centro.subtitulo}
            </p>
            <p className="centro__tagline reveal" style={{ '--d': '190ms' } as React.CSSProperties}>
              “{centro.tagline}”
            </p>
          </div>

          <div className="centro__layout">
            <div className="centro__text">
              {centro.parrafos.map((p, i) => (
                <p className="reveal" key={i} style={{ '--d': `${i * 80}ms` } as React.CSSProperties}>
                  {p}
                </p>
              ))}
            </div>

            <aside className="director reveal" aria-labelledby="director-name">
              <div className="director__photo">
                <img src={asset(director.foto)} alt={director.nombre} loading="lazy" />
              </div>
              <h3 className="director__name" id="director-name">
                {director.nombre}
              </h3>
              <p className="director__rol">{director.rol}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section staff">
        <div className="container">
          <div className="block-head">
            <span className="eyebrow reveal">Nuestro equipo</span>
            <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
              Psicoterapeutas de Perú, Argentina y México
            </h2>
            <p className="lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
              Un equipo internacional formado en terapia familiar sistémica y especialidades complementarias.
            </p>
          </div>

          <div className="staff__grid">
            {equipo.map((m, i) => (
              <StaffCard m={m} i={i} key={m.nombre} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        titulo="¿Quieres una cita con nuestro equipo?"
        texto="Escríbenos por WhatsApp y te orientamos con el profesional indicado para tu caso."
      />
    </>
  )
}
