// @stores
import { IPlayerProfileStore, PlayerStore } from './player'
import { IPlayersStore, PlayersStore } from './players'
import { IUserStore, UserStore } from './user'

export interface IRootStore {
    player: IPlayerProfileStore
    players: IPlayersStore
    user: IUserStore
}

export class RootStore {
    playerStore
    playersStore
    userStore

    constructor() {
        this.playerStore = new PlayerStore(this)
        this.playersStore = new PlayersStore(this)
        this.userStore = new UserStore(this)
    }
}

const rootStore = new RootStore()

export { rootStore }
