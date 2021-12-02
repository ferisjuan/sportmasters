// @vendors
import { useContext } from 'react'
import { AuthContext, IAuthContext } from 'context/auth-provider'

interface IUseAuthState extends IAuthContext {
    isAuthenticated: boolean
}

export const useAuthState = (): IUseAuthState => {
    const auth = useContext(AuthContext)

    return { ...auth, isAuthenticated: auth?.user !== null }
}
