// @vendors
import { action, makeObservable } from 'mobx'

// @interface
import { IPlayer } from 'interfaces'
import { RootStore } from '..'
import { FirebaseService } from '../../services/firebase'
import { IPlayerProfileStore } from './interface'

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

        makeObservable(this, { rootStore: false })
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

    async getPlayers(): Promise<void> {
        this.firebaseService.getCollection().then(
            action((players) => {
                this.playersProfiles.push(...players)
            }),
        )
    }

    player = {} as IPlayer
}
