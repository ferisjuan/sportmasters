import { makeObservable } from 'mobx'
import { IPlayer } from '../../interfaces'

class Player {
    constructor() {
        makeObservable(this)
    }

    player = {} as IPlayer
}

export const PlayerProfileStore = new Player()
