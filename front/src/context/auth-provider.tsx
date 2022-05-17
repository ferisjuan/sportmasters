// @vendors
import { createContext, useEffect, useState } from 'react'
import { ErrorFn } from '@firebase/auth'

// @~/interfaces
import { User } from '~/interfaces/user'
import { IChildren } from '~/interfaces'

export interface IAuthContext {
    user?: User
    error?: ErrorFn
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthContextProvider = ({ children }: IChildren): JSX.Element => {
    const [user] = useState<User>({} as User)
    const [isAuthenticating] = useState(false)

    const values = {
        isAuthenticating,
        user,
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
