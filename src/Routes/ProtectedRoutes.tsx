import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useUserStore from '../stores/UserStore'

type Props = {
  children: ReactNode
}

export default function ProtectedRoutes({ children }: Props) {
  const isLogged = useUserStore((s) => s.isLogged)
  const location = useLocation()

  if (!isLogged) {
    const logar = confirm("voce precisa estar logado para acessar o carrinho, gostaria de loggar?")
    if(logar) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
  }

  return <>{children}</>
}
