import { getAuth } from '@firebase/auth'
import { Navigate, useLocation } from 'react-router'

import { IChildren } from '../../interfaces/index'

export const RequireAuth = ({ children }: IChildren): JSX.Element => {
    const auth = getAuth()
    console.log('🚀 ~ file: index.tsx ~ line 8 ~ auth', auth)
    const location = useLocation()

    if (!auth.currentUser) return <Navigate to="/auth/login" state={{ from: location }} />

    return children
}
