import { NavLink } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

function Navbar() {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
        px: 2,
        py: 1,
        bgcolor: 'background.default',
        color: 'text.primary',
        borderBottom: '3px solid',
        borderColor: 'text.primary',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            bgcolor: 'text.primary',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: 'secondary.main' }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          ONE
        </Typography>
      </Box>

      <Typography component={NavLink} to="/" end sx={{ px: 2, py: 1, color: 'inherit', textDecoration: 'none', '&.active': { bgcolor: 'primary.main', color: '#FFFFFF', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' } }}>
        Inicio
      </Typography>
      <Typography component={NavLink} to="/sobre-mi" sx={{ px: 2, py: 1, color: 'inherit', textDecoration: 'none', '&.active': { bgcolor: 'primary.main', color: '#FFFFFF', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' } }}>
        Sobre mí
      </Typography>
      <Typography component={NavLink} to="/proyectos" sx={{ px: 2, py: 1, color: 'inherit', textDecoration: 'none', '&.active': { bgcolor: 'primary.main', color: '#FFFFFF', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' } }}>
        Proyectos
      </Typography>
      <Typography component={NavLink} to="/habilidades-tecnologias" sx={{ px: 2, py: 1, color: 'inherit', textDecoration: 'none', '&.active': { bgcolor: 'primary.main', color: '#FFFFFF', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' } }}>
        Habilidades y tecnologías
      </Typography>
      <Typography component={NavLink} to="/servicios" sx={{ px: 2, py: 1, color: 'inherit', textDecoration: 'none', '&.active': { bgcolor: 'primary.main', color: '#FFFFFF', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' } }}>
        Servicios
      </Typography>
      <Typography component={NavLink} to="/contacto" sx={{ px: 2, py: 1, color: 'inherit', textDecoration: 'none', '&.active': { bgcolor: 'primary.main', color: '#FFFFFF', clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)' } }}>
        Contacto
      </Typography>
    </Box>
  )
}

export default Navbar