// @vendors
import { createContext, useState, useEffect } from 'react'
import { ErrorFn, getAuth, onAuthStateChanged } from '@firebase/auth'
import cookie from 'react-cookies'

// @~/interfaces
import { User } from '~/interfaces/user'
import { IChildren } from '~/interfaces'

export interface IAuthContext {
    user?: User
    error?: ErrorFn
}

export const AuthContext = createContext<IAuthContext | null>(null)

export const AuthContextProvider = ({ children }: IChildren): JSX.Element => {
    const [user, setUser] = useState<User>(null)
    const [isAuthenticating, setIsAuthenticating] = useState(true)

    const sessionCookie = cookie.load(import.meta.env.REACT_APP_SESSION_COOKIE_NAME)
    console.log(
        '🚀🚀🚀 ~ file: auth.tsx ~ line 14 ~ import.meta.env.REACT_APP_SESSION_COOKIE_NAME',
        import.meta.env.REACT_APP_SESSION_COOKIE_NAME,
    )
    console.log('🚀🚀🚀 ~ file: auth.tsx ~ line 14 ~ sessionCookie', sessionCookie)

    // const handleAuthStateChanged = (_user: User): void => {
    //     if (_user) {
    //         setUser(_user)
    //         setIsAuthenticating(false)
    //     }
    // }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(getAuth(), handleAuthStateChanged)

    //     return () => unsubscribe()
    // }, [])

    const values = {
        isAuthenticating,
        user,
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
