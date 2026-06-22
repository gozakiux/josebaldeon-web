import { usePageMeta } from '../lib/usePageMeta'
import { Libros } from '../components/Libros'
import { PullQuote } from '../components/PullQuote'
import { CtaBand } from '../components/CtaBand'
import { frases } from '../data/content'

export function LibrosPage() {
  usePageMeta(
    'Libros del Dr. José Baldeón',
    'Los libros del Dr. José Baldeón sobre el amor, el perdón, la identidad y la familia. Compra segura por Hotmart.',
    '/libros',
  )
  return (
    <>
      <h1 className="sr-only">Libros del Dr. José Baldeón</h1>
      <Libros />
      <PullQuote texto={frases.desamor} />
      <CtaBand
        titulo="Lleva su sabiduría a tu vida"
        texto="¿Prefieres acompañamiento personal? Agenda una consulta cuando quieras."
      />
    </>
  )
}
