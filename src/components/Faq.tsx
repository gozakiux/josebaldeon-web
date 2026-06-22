import { useState } from 'react'
import { faqs } from '../data/content'
import { Icon } from './Icon'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section faq">
      <div className="container faq__grid">
        <div className="faq__intro">
          <span className="eyebrow reveal">Preguntas frecuentes</span>
          <h2 className="section-title reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
            Lo que necesitas saber antes de empezar
          </h2>
          <p className="lead reveal" style={{ '--d': '150ms' } as React.CSSProperties}>
            ¿Te queda alguna duda? Escríbele directo por WhatsApp y con gusto te responden.
          </p>
        </div>

        <div className="faq__list reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <button
                  id={`faq-btn-${i}`}
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{f.q}</span>
                  <span className="faq__chev">
                    <Icon name="chevron" size={20} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  aria-hidden={!isOpen}
                  className="faq__a"
                  style={{ maxHeight: isOpen ? '320px' : '0px' }}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
