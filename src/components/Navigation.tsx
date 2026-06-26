import { getNavigationLinksForRole } from '../lib/navigation'
import { userPrueba } from '../data/userPrueba'
import { NavLink } from 'react-router-dom'
import type { UserRole } from '../types/roles'

const currentUserRole = userPrueba.user as UserRole

export default function Navigation() {
  const navigationLinks = getNavigationLinksForRole(currentUserRole)

  return (
    <nav className="navegacion">
      {navigationLinks.map(({ label, path }) => (
        <NavLink
          key={label}
          to={path}
          className="navegacion__enlace"
        >
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

