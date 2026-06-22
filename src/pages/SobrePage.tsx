import { usePageMeta } from '../lib/usePageMeta'
import { Sobre } from '../components/Sobre'
import { Metodo } from '../components/Metodo'
import { Formacion } from '../components/Formacion'
import { SendaDivider } from '../components/SendaDivider'
import { PullQuote } from '../components/PullQuote'
import { CtaBand } from '../components/CtaBand'
import { frases } from '../data/content'

export function SobrePage() {
  usePageMeta(
    'Sobre José Baldeón y su método TENCA',
    'Conoce al Dr. José Baldeón: psicoterapeuta, maestro y escritor. Su método TENCA —Terapia Narrativa Centrada en el Amor— para sanar tus vínculos.',
    '/sobre',
  )
  return (
    <>
      <h1 className="sr-only">Sobre el Dr. José Baldeón y su método TENCA</h1>
      <Sobre />
      <SendaDivider />
      <Metodo />
      <Formacion />
      <PullQuote texto={frases.medicina} />
      <CtaBand titulo="¿Listo para reescribir tu historia?" />
    </>
  )
}
