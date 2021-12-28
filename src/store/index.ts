// @stores
import { PlayerStore } from './player'
import { PlayersStore } from './players'

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
