import { useLocation, Navigate } from 'react-router-dom'
import { useAuthState } from 'hooks/auth'
import { IChildren } from 'interfaces'
import { ROUTES } from '../../constants'

export const AuthenticatedRoute = ({ children }: IChildren): JSX.Element => {
    const { isAuthenticated } = useAuthState()
    const location = useLocation()

    if (!isAuthenticated) return <Navigate to={ROUTES.login} state={{ from: location }} />

    return children
}
