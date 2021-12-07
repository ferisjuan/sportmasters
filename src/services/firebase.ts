import { collection, DocumentData, Firestore, getDocs, QuerySnapshot } from '@firebase/firestore'
import { db } from '../db/connect'

export class FirebaseService<T> {
    collection: string
    db: Firestore

    constructor(_collection: string) {
        this.collection = _collection
        this.db = db
    }

    async getCollection(): Promise<T[]> {
        const querySnapshot = await getDocs(collection(this.db, this.collection))

        const _collection = querySnapshot.docs.map((doc) => doc.data()) as T[]

        return [..._collection]
    }
}
