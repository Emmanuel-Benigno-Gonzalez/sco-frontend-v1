import { useLocation, NavLink } from 'react-router-dom'
import { sidebarLinksBySection } from '../lib/sidebar/links'
import type { UserRole } from '../types/roles'
import { userPrueba } from '../data/userPrueba'//ESTA LINEA ES DE PRUeBA

const currentUserRole = userPrueba.user as UserRole////sustituir por auth

export default function Sidebar() {

  const location = useLocation()

  // Detecta la raíz de la sección, por ejemplo 'ops' o 'matricula'
  const section = location.pathname.split('/')[1]

  const links = sidebarLinksBySection[section] || []

  const filteredLinks = links.filter(link =>
    link.roles.includes(currentUserRole)
  )

  if (filteredLinks.length === 0) return null

  // Si no hay accesos disponibles, muestra mensaje
  if (filteredLinks.length === 0) {
    return (
      <aside className="sidebar">
        <p className="sidebar__empty">No hay accesos disponibles.</p>
      </aside>
    )
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {filteredLinks.map(({ label, icon: Icon, path }) => (
          <NavLink
            to={path}
            key={path}
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