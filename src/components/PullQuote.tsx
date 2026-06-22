import { Icon } from './Icon'

/** Cita corta (frase textual de José) para intercalar entre secciones. */
export function PullQuote({ texto }: { texto: string }) {
  return (
    <section className="section pullquote">
      <div className="container pullquote__inner reveal">
        <Icon name="quote" size={30} className="pullquote__mark" />
        <p className="pullquote__text">{texto}</p>
        <span className="pullquote__author">Dr. José Baldeón</span>
      </div>
    </section>
  )
}
