// @vendors
import { useContext } from 'react'

// @context
import { AuthContext, IAuthContext } from '~/context'

// @generated
import { useUserQuery } from '~/generated/graphql'

interface IUseAuthState extends IAuthContext {
    isAuthenticated: boolean
}

export const useAuthState = (): IUseAuthState => {
    const auth = useContext(AuthContext)

    function cleanSession(): Record<string, unknown> {
        localStorage.removeItem('email')

        return { ...auth, isAuthenticated: false }
    }
    const email = localStorage.getItem('email')
    if (!email) cleanSession()

    const { error } = useUserQuery({ where: { email } })
    if (error) cleanSession()

    return { ...auth, isAuthenticated: true }
}
