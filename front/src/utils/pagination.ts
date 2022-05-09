// @vendors
import { collection, getDocs, orderBy, query, limit, startAfter } from '@firebase/firestore'
import { db } from '~/db/connect'

// @interface
import { Player } from '~/generated/graphql'

export const firstPagination = async (): Promise<any> => {
    const q = query(collection(db, 'players'), orderBy('lastName', 'asc'), limit(9))
    const querySnapshot = await getDocs(q)

    const players: Player[] = []
    let lastKey = ''

    querySnapshot.forEach(_doc => {
        players.push(_doc.data() as Player)
        lastKey = _doc.data().lastName
    })
    return { players, lastKey }
}

export const nextPagination = async (key: string): Promise<any> => {
    const q = query(collection(db, 'players'), orderBy('lastName', 'asc'), limit(9), startAfter(key))
    const querySnapshot = await getDocs(q)

    const players: Player[] = []
    let lastKey = ''

    querySnapshot.forEach(_doc => {
        players.push(_doc.data() as Player)
        lastKey = _doc.data().lastName
    })
    return { players, lastKey }
}
