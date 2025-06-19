import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { UserRole } from '../types/roles'
import { userPrueba } from '../data/userPrueba' // reemplaza por auth real

interface ProtectedRouteProps {
  allowedRoles: UserRole[]
  children: ReactNode
}

export default function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const currentUserRole = userPrueba.user as UserRole

  if (!allowedRoles.includes(currentUserRole)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <>{children}</>
}