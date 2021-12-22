// @vendors
import { action, makeAutoObservable } from 'mobx'

// @interface
import { IPlayer } from 'interfaces'
import { IPlayerProfileStore } from './interface'

// @services
import { FirebaseService } from 'services/firebase'

// @store
import { RootStore } from '..'

export class PlayerProfileStore implements IPlayerProfileStore {
    public playerProfile
    public playersProfiles

    private firebaseService
    readonly rootStore

    constructor(rootStore: RootStore) {
        this.firebaseService = new FirebaseService<IPlayer>('players')
        this.playerProfile = {} as IPlayer
        this.playersProfiles = [] as IPlayer[]
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }

    async addPlayer(player: IPlayer): Promise<string> {
        const response = await this.firebaseService.add(player)

        return response
    }

    async getPlayer(id: string): Promise<void> {
        this.firebaseService.getById(id).then(
            action((player) => {
                this.playerProfile = player
            }),
        )
    }
}
