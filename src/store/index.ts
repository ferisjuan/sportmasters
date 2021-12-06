import { PlayerProfileStore } from './player/player'

export class RootStore {
    playerProfileStore: PlayerProfileStore

    constructor() {
        this.playerProfileStore = new playerProfileStore()
    }
}
