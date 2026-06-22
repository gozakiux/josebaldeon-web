import { manifiesto } from '../data/content'
import { Icon } from './Icon'

/** Pieza destacada con la filosofía central del Dr. Baldeón (textual). */
export function Manifiesto() {
  return (
    <section className="section manifiesto">
      <div className="container">
        <div className="manifiesto__note reveal">
          <span className="manifiesto__tape manifiesto__tape--a" aria-hidden="true" />
          <span className="manifiesto__tape manifiesto__tape--b" aria-hidden="true" />
          <span className="manifiesto__eyebrow">Su filosofía</span>
          <Icon name="quote" size={40} className="manifiesto__mark" />
          <blockquote className="manifiesto__text">
            <span className="manifiesto__lead">{manifiesto.destacado}</span>
            {manifiesto.cuerpo}
          </blockquote>
          <cite className="manifiesto__author">{manifiesto.autor}</cite>
        </div>
      </div>
    </section>
  )
}
