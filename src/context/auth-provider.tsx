// @vendors
import { createContext, useState, useEffect } from 'react'
import { ErrorFn, getAuth, onAuthStateChanged } from 'firebase/auth'

// @interfaces
import { User } from 'interfaces/user'
import { IChildren } from '../interfaces'

export interface IAuthContext {
    user?: User
    error?: ErrorFn
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthContextProvider = ({ children }: IChildren): JSX.Element => {
    const [user, setUser] = useState<User>(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)
    // const [error] = useState<ErrorFn | (() => ErrorFn)>()

    const handleAuthStateChanged = (_user: User | null): void => {
        setUser(_user)
        setIsAuthenticating(false)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), handleAuthStateChanged)

        return () => unsubscribe()
    }, [])

    const values = {
        isAuthenticating,
        user,
    }

    return <AuthContext.Provider value={values}>{!isAuthenticating && children}</AuthContext.Provider>
}
