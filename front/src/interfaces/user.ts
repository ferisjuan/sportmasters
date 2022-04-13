import { User as firebaseUser } from '@firebase/auth'

export type User = firebaseUser | null
