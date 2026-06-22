import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { SobrePage } from './pages/SobrePage'
import { CentroPage } from './pages/CentroPage'
import { ComunidadesPage } from './pages/ComunidadesPage'
import { CharlasPage } from './pages/CharlasPage'
import { LibrosPage } from './pages/LibrosPage'
import { BlogPage } from './pages/BlogPage'
import { ArticlePage } from './pages/ArticlePage'
import { ConsultasPage } from './pages/ConsultasPage'
import './styles/components.css'

export default function App() {
  return (
    <BrowserRouter basename="/josebaldeon-web" future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/centro" element={<CentroPage />} />
          <Route path="/comunidades" element={<ComunidadesPage />} />
          <Route path="/charlas" element={<CharlasPage />} />
          <Route path="/libros" element={<LibrosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/consultas" element={<ConsultasPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
