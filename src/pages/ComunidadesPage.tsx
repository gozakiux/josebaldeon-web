import { usePageMeta } from '../lib/usePageMeta'
import { Comunidades } from '../components/Comunidades'
import { PullQuote } from '../components/PullQuote'
import { CtaBand } from '../components/CtaBand'
import { frases } from '../data/content'

export function ComunidadesPage() {
  usePageMeta(
    'Comunidades terapéuticas',
    'Tres procesos grupales de sanación: para ti, para tu pareja y para tu familia, acompañados por el Dr. José Baldeón. Únete por WhatsApp.',
    '/comunidades',
  )
  return (
    <>
      <h1 className="sr-only">Comunidades terapéuticas del Dr. José Baldeón</h1>
      <Comunidades />
      <PullQuote texto={frases.recuperacion} />
      <CtaBand
        titulo="¿Dudas sobre cuál es para ti?"
        texto="Escríbele por WhatsApp y te orientamos según tu momento."
      />
    </>
  )
}
