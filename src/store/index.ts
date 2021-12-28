// @stores
import { PlayerStore } from './player/player'
import { PlayersStore } from './players/players'

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
