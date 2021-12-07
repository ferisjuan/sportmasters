// @vendors
import { makeObservable } from 'mobx'

// @interface
import { IPlayer } from 'interfaces'
import { RootStore } from '..'

export class PlayerProfileStore {
    rootStore: RootStore

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

        makeObservable(this, { rootStore: false })
    }

    player = {} as IPlayer
}
