// @vendors
import { useContext } from 'react'

// @context
import { AuthContext, IAuthContext } from '~/context'

// @generated
import { useUserQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

interface IUseAuthState extends IAuthContext {
    isAuthenticated: boolean
}

export const useAuthState = (): IUseAuthState => {
    const auth = useContext(AuthContext)
    const { userStore } = useStores()

    const email = localStorage.getItem('email')
    if (!email) return { ...auth, isAuthenticated: false }

    const { error, data } = useUserQuery({ where: { email } })

    if (error) {
        localStorage.removeItem('email')

        return { ...auth, isAuthenticated: false }
    }

    userStore.email = data?.user?.email || ''
    userStore.firstName = data?.user?.firstName || ''
    userStore.lastName = data?.user?.lastName || ''
    userStore.id = data?.user?.id || ''
    userStore.roles = data?.user?.roles || []
    userStore.schoolEmail = data?.user?.school.email || ''
    userStore.schoolId = data?.user?.school.id || ''

    return { ...auth, isAuthenticated: true }
}
