// src/lib/navigation/index.ts
import { routeConfig } from '../../config/routes'
import type { UserRole } from '../../types/roles'
import type { NavigationLink } from '../../types/navigation'

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getNavigationLinksForRole(userRole: UserRole): NavigationLink[] {
  const modulesMap = new Map<string, NavigationLink>()

  for (const route of routeConfig) {
    if (!route.showInNav) continue
    if (!route.roles.includes(userRole)) continue

    if (!modulesMap.has(route.module)) {
      modulesMap.set(route.module, {
        label: capitalize(route.module),
        path: route.path,
        roles: route.roles,
      })
    }
  }

  return Array.from(modulesMap.values())
}
