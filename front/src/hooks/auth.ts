// @vendors
import { useContext } from 'react'
import { AuthContext, IAuthContext } from '~/context'
import { useUserQuery } from '../generated/graphql'

interface IUseAuthState extends IAuthContext {
    isAuthenticated: boolean
}

export const useAuthState = (): IUseAuthState => {
    const auth = useContext(AuthContext)

    const email = localStorage.getItem('email')
    if (!email) return { ...auth, isAuthenticated: false }

    const { error } = useUserQuery({ where: { email } })
    if (error) return { ...auth, isAuthenticated: false }

    return { ...auth, isAuthenticated: true }
}
