import { getAuth } from '@firebase/auth'

export const RequireAuth = (): JSX.Element => {
    const auth = getAuth()
    console.log('🚀 ~ file: index.tsx ~ line 5 ~ auth', auth)
    return <></>
}
