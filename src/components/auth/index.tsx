import { useLocation, Navigate } from 'react-router-dom'
import { useAuthState } from 'hooks/auth'
import { IChildren } from 'interfaces'

export const AuthenticatedRoute = ({ children }: IChildren): JSX.Element => {
    const { isAuthenticated } = useAuthState()
    const location = useLocation()

    if (!isAuthenticated) return <Navigate to="/auth/login" state={{ from: location }} />

    return children
}
