import type { ComponentType } from "react"
import type { UserRole } from "./roles"

export interface AppRoute {
  path: string
  label: string
  module: string
  roles: UserRole[]
  element: ComponentType
  icon?: React.ComponentType<{ className?: string }>
  showInNav?: boolean
  showInSidebar?: boolean
}

export type Operaciones = string;