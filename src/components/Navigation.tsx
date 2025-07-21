/*import { NavLink } from 'react-router-dom'
import { navigationLinks } from '../lib/nav/bar'
import type { UserRole } from '../types/roles'
import { userPrueba } from '../data/userPrueba'//// esta linea es de pruba


const currentUserRole = userPrueba.user as UserRole////sustituir por auth

export default function Navigation() {

  const filteredLinks = navigationLinks.filter(link =>
    link.roles.includes(currentUserRole)
  )

  return (

      <nav className="navegacion">
        {filteredLinks.map(({ label, path }) => (
          <NavLink
            to={path}
            key={path}
            className={() =>
              `navegacion__enlace`
            }
          >
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

  )

}*/

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

