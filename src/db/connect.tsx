import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { FIREBASE_CONFIG } from '../constants/firebase'

const firebaseApp = initializeApp(FIREBASE_CONFIG as FirebaseOptions)

export const db = getFirestore()
export default firebaseApp
