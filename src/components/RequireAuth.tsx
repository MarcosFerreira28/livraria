import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useUserStore from '../stores/UserStore'

type Props = {
  children: ReactNode
}

export default function RequireAuth({ children }: Props) {
  const isLogged = useUserStore((s) => s.isLogged)
  const location = useLocation()

  if (!isLogged) {
    // redirect to login, keep attempted location in state
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
