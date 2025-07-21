import { routeConfig } from '../../config/routes'
import type { UserRole } from '../../types/roles'
import type { SidebarLink } from '../../types/sidebar'

export function getSidebarLinksForModule(
  moduleName: string,
  userRole: UserRole
): SidebarLink[] {
  return routeConfig
    .filter(route => 
      route.module === moduleName &&
      route.showInSidebar === true &&
      route.roles.includes(userRole)
    )
    .map(route => ({
      label: route.label,
      icon: route.icon!,  // asumiendo que el icon existe si showInSidebar=true
      path: route.path,
      roles: route.roles
    }))
}
