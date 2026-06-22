import { usePageMeta } from '../lib/usePageMeta'
import { Hero } from '../components/Hero'
import { Manifiesto } from '../components/Manifiesto'
import { Explora } from '../components/Explora'
import { SendaDivider } from '../components/SendaDivider'
import { EnMedios } from '../components/EnMedios'
import { CtaBand } from '../components/CtaBand'

export function Home() {
  usePageMeta(
    'Psicoterapeuta familiar y de pareja en Lima',
    'El desamor enferma, el amor sana. Terapia para personas, parejas y familias con el Dr. José Baldeón, presencial en Lima y online. Método TENCA.',
    '/',
  )
  return (
    <>
      <Hero />
      <Manifiesto />
      <Explora />
      <SendaDivider />
      <EnMedios />
      <CtaBand />
    </>
  )
}
