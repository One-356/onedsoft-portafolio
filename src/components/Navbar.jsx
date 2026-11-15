import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '16px' }}>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/sobre-mi">Sobre mí</NavLink>
      <NavLink to="/proyectos">Proyectos</NavLink>
      <NavLink to="/habilidades-tecnologias">Habilidades y tecnologías</NavLink>
      <NavLink to="/servicios">Servicios</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  )
}

export default Navbar