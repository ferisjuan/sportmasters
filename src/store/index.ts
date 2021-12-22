// @stores
import { PlayerProfileStore } from './player/player'
import { PlayersStore } from './players/players'

export class RootStore {
    playerProfileStore
    playersStore

    constructor() {
        this.playerProfileStore = new PlayerProfileStore(this)
        this.playersStore = new PlayersStore(this)
    }
}

export const rootStore = new RootStore()
