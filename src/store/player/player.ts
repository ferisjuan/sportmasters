// @vendors
import { action, makeObservable } from 'mobx'

// @interface
import { IPlayer } from 'interfaces'
import { RootStore } from '..'
import { FirebaseService } from '../../services/firebase'
import { IPlayerProfileStore } from './interface'

export class PlayerProfileStore implements IPlayerProfileStore {
    firebaseService
    playersProfiles
    rootStore

    constructor(rootStore: RootStore) {
        this.firebaseService = new FirebaseService<IPlayer>('player')
        this.playersProfiles = [] as IPlayer[]
        this.rootStore = rootStore

        makeObservable(this, { rootStore: false })
    }

    async addPlayer(player: IPlayer): Promise<void> {
        this.firebaseService.add(player)
    }

    async getPlayers(): Promise<void> {
        this.firebaseService.getCollection().then(
            action((players) => {
                this.playersProfiles.push(...players)
            }),
        )
    }

    player = {} as IPlayer
}
