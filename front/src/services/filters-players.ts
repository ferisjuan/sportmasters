// @vendors
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '~/db/connect'

// @interface
import { Player } from '~/generated/graphql'

export const filtersPlayers = async (fieldPosition: string): Promise<Player[]> => {
    const q = query(collection(db, 'players'), where('fieldPosition', '==', fieldPosition))
    const querySnapshot = await getDocs(q)

    const _collection = querySnapshot.docs.map(_doc => _doc.data()) as Player[]

    return [..._collection]
}
