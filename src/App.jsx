import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import HabilidadesTecnologias from './pages/HabilidadesTecnologias'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/habilidades-tecnologias" element={<HabilidadesTecnologias />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App