// @vendors
import { makeAutoObservable } from 'mobx'

// @interface
import { Player } from '~/generated/graphql'
import { IPlayerProfileStore } from './interface'

// @services

// @store
import { RootStore } from '../store'

export class PlayerStore implements IPlayerProfileStore {
    public player

    readonly rootStore

    constructor(rootStore: RootStore) {
        this.player = {} as Player
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }
}
