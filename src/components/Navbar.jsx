import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

const enlaces = [
  { texto: 'Inicio', ruta: '/' },
  { texto: 'Sobre mí', ruta: '/sobre-mi' },
  { texto: 'Proyectos', ruta: '/proyectos' },
  { texto: 'Habilidades y tecnologías', ruta: '/habilidades-tecnologias' },
  { texto: 'Servicios', ruta: '/servicios' },
  { texto: 'Contacto', ruta: '/contacto' },
]

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E88E5' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          OneDSoft
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {enlaces.map((enlace) => (
            <Button
              key={enlace.ruta}
              color="inherit"
              component={NavLink}
              to={enlace.ruta}
            >
              {enlace.texto}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar