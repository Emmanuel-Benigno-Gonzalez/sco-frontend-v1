import type { ComponentType } from 'react'
import type { UserRole } from './roles'

export interface SidebarLink {
  label: string
  icon: ComponentType<{ className?: string }>
  path: string
  roles: UserRole[]
}