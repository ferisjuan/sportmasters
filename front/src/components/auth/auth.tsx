// @vendors
import { observer } from 'mobx-react-lite'
import { useLocation, Navigate } from 'react-router-dom'

// @constants
import { ROUTES } from '~/constants'

// @interfaces
import { IChildren } from '~/interfaces'

// @hooks
import { useAuthState } from './auth.hook'

export const AuthenticatedRoute: React.FC<IChildren> = observer(({ children }) => {
    const { isAuthenticated } = useAuthState()

    const location = useLocation()

    if (!isAuthenticated) return <Navigate to={`../${ROUTES.login}`} state={{ from: location }} />

    return children
})
