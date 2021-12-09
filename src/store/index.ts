// @interfaces
import { IPlayerProfileStore } from './player/interface'

// @stores
import { PlayerProfileStore } from './player/player'

export class RootStore {
    playerProfileStore: IPlayerProfileStore

    constructor() {
        this.playerProfileStore = new PlayerProfileStore(this)
    }
}

export const rootStore = new RootStore()
