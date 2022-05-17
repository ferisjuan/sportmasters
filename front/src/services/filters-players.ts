// @vendors
import { collection, getDocs, orderBy, query, limit, where } from '@firebase/firestore'
import { db } from '~/db/connect'

// @interface
import { Player } from '~/generated/graphql'

export const filtersPlayers = async (fieldPosition: string): Promise<any> => {
    const q = query(collection(db, 'players'), where('fieldPosition', '==', fieldPosition))
    const querySnapshot = await getDocs(q)

    const players: Player[] = []

    const _collection = querySnapshot.forEach(_doc => {
        players.push(_doc.data() as Player)
    })
    console.log('🚀 ~ file: filters-players.ts ~ line 18 ~ filtersPlayers ~ _collection', _collection)
    return { players }
}
