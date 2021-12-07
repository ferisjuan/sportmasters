// @vendors
import { action, makeObservable } from 'mobx'

// @interface
import { IPlayer } from 'interfaces'
import { RootStore } from '..'
import { FirebaseService } from '../../services/firebase'
import { IPlayerProfileStore } from './interface'

export class PlayerProfileStore implements IPlayerProfileStore {
    rootStore
    playersProfiles

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        this.playersProfiles = [] as IPlayer[]

        makeObservable(this, { rootStore: false })
    }

    async getPlayers(): Promise<void> {
        const firebaseService = new FirebaseService<IPlayer>('players')

        firebaseService.getCollection().then(
            action((players) => {
                this.playersProfiles.push(...players)
            }),
        )
    }

    player = {} as IPlayer
}
