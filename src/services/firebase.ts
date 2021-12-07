import { addDoc, collection, Firestore, getDocs } from '@firebase/firestore'
import { db } from '../db/connect'

export class FirebaseService<T> {
    private collection: string
    private db: Firestore

    constructor(_collection: string) {
        this.collection = _collection
        this.db = db
    }

    async add(data: T): Promise<string> {
        const docRef = await addDoc(collection(this.db, this.collection), data)

        return docRef.id
    }

    async getCollection(): Promise<T[]> {
        const querySnapshot = await getDocs(collection(this.db, this.collection))

        const _collection = querySnapshot.docs.map((doc) => doc.data()) as T[]

        return [..._collection]
    }
}
