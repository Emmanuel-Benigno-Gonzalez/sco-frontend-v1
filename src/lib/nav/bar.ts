import type { NavigationLink } from '../../types/navigation'


export const navigationLinks: NavigationLink[] = [
  { label: 'Operaciones', path: '/ops/registrar', roles: [1, 2, 3] },
  { label: 'Matriculas', path: '/matricula/registrar', roles: [1, 2] },
  { label: 'Aeropuertos', path: '/aeropuerto/registrar', roles: [1, 2] },
  { label: 'FBO/Aerolineas', path: '/compania/registrar', roles: [1, 2] },
  { label: 'Aeronaves', path: '/aeronave/registrar', roles: [1, 2] },
  { label: 'Calificador', path: '/calificador/registrar', roles: [1, 2] },
  { label: 'Usuarios', path: '/usuario/registrar', roles: [1] }
]