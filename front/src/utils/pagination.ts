// @interface
import { Player } from '~/generated/graphql'

// @services
import { FirebaseService } from '~/services/firebase'

const firebaseService = new FirebaseService<Player>('players')

export const pagination = async (): Promise<Player[]> => {
    return new Promise(resolve => {
        firebaseService.pagination().then(pag => resolve(pag))
    })
}
