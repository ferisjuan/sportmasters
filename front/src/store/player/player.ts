// @vendors
import { action, makeAutoObservable } from 'mobx'

// @interface
import { Player } from '~/generated/graphql'
import { IPlayerProfileStore } from './interface'

// @services
import { FirebaseService } from '~/services/firebase'

// @store
import { RootStore } from '../store'

export class PlayerStore implements IPlayerProfileStore {
    public player

    private firebaseService
    readonly rootStore

    constructor(rootStore: RootStore) {
        this.firebaseService = new FirebaseService<Player>('players')
        this.player = {} as Player
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }

    async addPlayer(player: Player): Promise<string> {
        const response = await this.firebaseService.add(player)

        this.rootStore.playersStore.getPlayers()

        return response
    }

    async getPlayer(id: string): Promise<void> {
        this.firebaseService.getById(id).then(
            action((player: Player) => {
                this.player = player
            }),
        )
    }
}
