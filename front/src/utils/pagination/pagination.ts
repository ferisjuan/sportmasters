// @interface
import { Player } from '~/generated/graphql'

// @services
import { FirebaseService } from '~/services/firebase'

const firebaseService = new FirebaseService<Player>('players')

export const pagination = async (): Promise<Array<Player>> => {
    return new Promise(resolve => {
        firebaseService.getPagination().then(pag => resolve(pag))
    })
}
