// @stores
import { IPlayerProfileStore, PlayerStore } from './player'
import { IPlayersStore, PlayersStore } from './players'

export interface IRootStore {
    player: IPlayerProfileStore
    players: IPlayersStore
}

export class RootStore {
    playerStore
    playersStore

    constructor() {
        this.playerStore = new PlayerStore(this)
        this.playersStore = new PlayersStore(this)
    }
}

const rootStore = new RootStore()

export { rootStore }
