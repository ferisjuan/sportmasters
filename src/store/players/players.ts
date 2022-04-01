// @interface
import { IPlayer } from '~/interfaces'
import { IPlayersStore } from './interface'
import { action, makeAutoObservable } from 'mobx'

// @services
import { FirebaseService } from '~/services/firebase'

// @store
import { RootStore } from '../store'

export class PlayersStore implements IPlayersStore {
    public players

    private firebaseService
    readonly rootStore

    constructor(rootStore: RootStore) {
        this.firebaseService = new FirebaseService<IPlayer>('players')
        this.players = [] as IPlayer[]
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }

    async getPlayers(): Promise<void> {
        this.firebaseService.getCollection().then(
            action((players: IPlayer[]) => {
                this.players = players
            }),
        )
    }
}
