import { videoSeries } from '../data/content'
import { Icon } from './Icon'

const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`
const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

export function Videocharlas() {
  return (
    <section className="section charlas" id="charlas">
      <div className="container">
        <div className="block-head">
          <span className="eyebrow reveal">Videocharlas</span>
          <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            Aprende de él, gratis, desde donde estés
          </h2>
          <p className="lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
            Sus programas y entrevistas en YouTube. Haz clic en cualquiera y se abre en su canal.
          </p>
        </div>

        {videoSeries.map((s) => (
          <div className="vserie" key={s.nombre}>
            <div className="vserie__head reveal">
              <div>
                <span className="vserie__para">{s.para}</span>
                <h3 className="vserie__name">{s.nombre}</h3>
                <p className="vserie__text">{s.texto}</p>
              </div>
              <a className="text-link" href={s.canal} target="_blank" rel="noopener noreferrer">
                Ver el canal
                <Icon name="arrowUp" size={18} />
              </a>
            </div>

            <div className="vgrid">
              {s.videos.map((v, i) => (
                <a
                  className="vcard reveal"
                  key={v.id}
                  href={yt(v.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--d': `${(i % 3) * 70}ms` } as React.CSSProperties}
                >
                  <div className="vcard__thumb">
                    <img src={thumb(v.id)} alt="" loading="lazy" />
                    <span className="vcard__play">
                      <Icon name="play" size={22} />
                    </span>
                  </div>
                  <p className="vcard__title">{v.titulo}</p>
                  <span className="sr-only"> (abre en YouTube)</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
