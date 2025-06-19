import type { UserRole } from './roles'

export interface NavigationLink {
  label: string
  path: string
  roles: UserRole[]
}