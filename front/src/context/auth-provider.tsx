// @vendors
import { createContext, useState } from 'react'

// @~/interfaces
import { IChildren } from '~/interfaces'
import { User } from '../generated/graphql'

export interface IAuthContext {
    user?: User
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
