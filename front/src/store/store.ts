// @stores
import { PlayerStore } from './player'
import { PlayersStore } from './players'
import { UserStore } from './user'

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
