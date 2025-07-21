import { getSidebarLinksForModule } from '../lib/sidebar'
import { userPrueba } from '../data/userPrueba' // reemplazar por auth real
import { useLocation, NavLink } from 'react-router-dom'
import type { UserRole } from '../types/roles'

export default function Sidebar() {
  const currentUserRole = userPrueba.user as UserRole
  const location = useLocation()

  // Obtener el módulo actual de la ruta
  // Ejemplo sencillo: dividir la ruta y tomar el primer segmento (p. ej. '/ops/registrar' => 'ops')
  const currentModule = location.pathname.split('/')[1] || ''

  const sidebarLinks = getSidebarLinksForModule(currentModule, currentUserRole)

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {sidebarLinks.map(({ label, icon: Icon, path }) => (
          <NavLink
            to={path}
            key={label}
            className={({ isActive }) =>
              `sidebar__link text-bold ${isActive ? 'activo' : ''}`
            }
          >
            <Icon className="w-10 h-10" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
