import { usePageMeta } from '../lib/usePageMeta'
import { Videocharlas } from '../components/Videocharlas'
import { PullQuote } from '../components/PullQuote'
import { CtaBand } from '../components/CtaBand'
import { frases } from '../data/content'

export function CharlasPage() {
  usePageMeta(
    'Videocharlas y entrevistas',
    'Aprende gratis con las videocharlas y entrevistas del Dr. José Baldeón sobre familia, pareja, crianza y salud emocional. Míralas en YouTube.',
    '/charlas',
  )
  return (
    <>
      <h1 className="sr-only">Videocharlas del Dr. José Baldeón</h1>
      <Videocharlas />
      <PullQuote texto={frases.antibiotico} />
      <CtaBand
        titulo="¿Quieres un acompañamiento personal?"
        texto="Las charlas son un primer paso. Para tu caso, agenda una consulta."
      />
    </>
  )
}
