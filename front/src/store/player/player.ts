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

    private _playerId = ''

    readonly rootStore

    public set playerId(id: string) {
        this._playerId = id
    }

    public get playerId(): string {
        return this._playerId
    }

    constructor(rootStore: RootStore) {
        this.player = {} as Player
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }
}
