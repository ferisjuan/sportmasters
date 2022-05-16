// @vendors
import { useLocation, Navigate } from 'react-router-dom'

// @constants
import { ROUTES } from '~/constants'

// @interfaces
import { IChildren } from '~/interfaces'

// @hooks
import { useAuthState } from '~/hooks'
import { getSessionCookie } from '../../utils/cookies'

export const AuthenticatedRoute = ({ children }: IChildren): JSX.Element => {
    const { isAuthenticated } = useAuthState()

    const sessionCookie = getSessionCookie()

    const location = useLocation()

    if (!sessionCookie) return <Navigate to={ROUTES.login} state={{ from: location }} />

    return children
}
