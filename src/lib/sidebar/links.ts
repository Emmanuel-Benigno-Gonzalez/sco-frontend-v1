/*import type { SidebarLink } from '../../types/sidebar'
import { PlusIcon, SearchIcon, EditIcon, BarIcon } from '../../components/icons/sidebarIcons'


export const sidebarLinks: SidebarLink[] = [

  // Operaciones
  { label: 'Registrar', icon: PlusIcon, path: '/ops/registrar', roles: [1, 2, 3] },
  { label: 'Consultar', icon: SearchIcon, path: '/ops/consultar', roles: [1, 2, 3] },
  { label: 'Editar', icon: EditIcon, path: '/ops/editar', roles: [1, 2] },
  { label: 'Reportes', icon: BarIcon, path: '/ops/reportes', roles: [1, 2] },

  // Matriculas
  { label: 'Registrar', icon: PlusIcon, path: '/matricula/registrar', roles: [1, 2] },
  { label: 'Consultar', icon: SearchIcon, path: '/matricula/consultar', roles: [1, 2] },
  { label: 'Editar', icon: EditIcon, path: '/matricula/editar', roles: [1, 2] }
]*/

import type { SidebarLink } from '../../types/sidebar'
import { PlusIcon, SearchIcon, EditIcon, BarIcon } from '../../components/icons/sidebarIcons'

export const sidebarLinksBySection: Record<string, SidebarLink[]> = {
  ops: [
    { label: 'Registrar', icon: PlusIcon, path: '/ops/registrar', roles: [1, 2, 3] },
    { label: 'Consultar', icon: SearchIcon, path: '/ops/consultar', roles: [1, 2, 3] },
    { label: 'Ciclos', icon: EditIcon, path: '/ops/ciclos', roles: [1, 2] },
    { label: 'Reportes', icon: BarIcon, path: '/ops/reportes', roles: [1, 2] }
  ],
  matricula: [
    { label: 'Registrar', icon: PlusIcon, path: '/matricula/registrar', roles: [1, 2] },
    { label: 'Consultar', icon: SearchIcon, path: '/matricula/consultar', roles: [1, 2] },
    { label: 'Editar', icon: EditIcon, path: '/matricula/editar', roles: [1, 2] }
  ]
  ,
  aeropuerto: [
    { label: 'Registrar', icon: PlusIcon, path: '/aeropuerto/registrar', roles: [1, 2] },
    { label: 'Consultar', icon: SearchIcon, path: '/aeropuerto/consultar', roles: [1, 2] },
    { label: 'Editar', icon: EditIcon, path: '/aeropuerto/editar', roles: [1, 2] }
  ],
  compania: [
    { label: 'Registrar', icon: PlusIcon, path: '/compania/registrar', roles: [1, 2] },
    { label: 'Consultar', icon: SearchIcon, path: '/compania/consultar', roles: [1, 2] },
    { label: 'Editar', icon: EditIcon, path: '/compania/editar', roles: [1, 2] }
  ],
  aeronave: [
    { label: 'Registrar', icon: PlusIcon, path: '/aeronave/registrar', roles: [1, 2] },
    { label: 'Consultar', icon: SearchIcon, path: '/aeronave/consultar', roles: [1, 2] },
    { label: 'Editar', icon: EditIcon, path: '/aeronave/editar', roles: [1, 2] }
  ],
  calificador: [
    { label: 'Registrar', icon: PlusIcon, path: '/calificador/registrar', roles: [1, 2] },
    { label: 'Consultar', icon: SearchIcon, path: '/calificador/consultar', roles: [1, 2] }
  ],
  usuario: [
    { label: 'Registrar', icon: PlusIcon, path: '/usuario/registrar', roles: [1, 2] },
    { label: 'Consultar', icon: SearchIcon, path: '/usuario/consultar', roles: [1, 2] }
  ]
  // más módulos aquí en el futuro
}
