import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, limit, startAt } from '@firebase/firestore'
import { db } from '~/db/connect'

export class FirebaseService<T> {
    private collection: string

    constructor(_collection: string) {
        this.collection = _collection
    }

    async add(data: T): Promise<string> {
        const docRef = await addDoc(collection(db, this.collection), data)

        return docRef.id
    }

    async getCollection(): Promise<T[]> {
        const q = query(collection(db, this.collection), orderBy('lastName', 'asc'))
        const querySnapshot = await getDocs(q)

        const _collection = querySnapshot.docs.map(_doc => _doc.data()) as T[]

        return [..._collection]
    }

    async getPagination(): Promise<T[]> {
        const q = query(collection(db, this.collection), orderBy('lastName', 'asc'), limit(9))
        const querySnapshot = await getDocs(q)

        const _collection = querySnapshot.docs.map(_doc => _doc.data()) as T[]

        return [..._collection]
    }

    async pagination(): Promise<T[]> {
        const q = query(collection(db, this.collection), orderBy('lastName', 'asc'), limit(9))
        const documentSnapshots = await getDocs(q)

        const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        console.log(
            '🚀 ~ file: firebase.ts ~ line 40 ~ FirebaseService<T> ~ pagination ~ documentSnapshots.docs.length',
            documentSnapshots.docs.length,
        )

        const next = query(collection(db, this.collection), orderBy('lastName', 'asc'), limit(9), startAt(lastVisible))
        const querySnapshot = await getDocs(next)

        return [...(querySnapshot.docs.map(_doc => _doc.data()) as T[])]
    }

    async getById(id: string): Promise<T> {
        const docRef = doc(db, this.collection, id)
        const docSnapshot = await getDoc(docRef)

        return docSnapshot.data() as T
    }
}
