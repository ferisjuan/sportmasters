// @interface
import { Player } from '~/generated/graphql'
import { IPlayersStore } from './interface'
import { makeAutoObservable } from 'mobx'

// @store
import { RootStore } from '../store'

export class PlayersStore implements IPlayersStore {
    public players

    readonly rootStore

    constructor(rootStore: RootStore) {
        this.players = [] as Player[]
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }
}
