// @interface
import { Player } from '~/generated/graphql'
import { IPlayersStore } from './interface'
import { makeAutoObservable } from 'mobx'

// @store
import { RootStore } from '../store'

export class PlayersStore implements IPlayersStore {
    public players

    private _isAddPlayerModalOpen = false
    private _paginationSkip = 0
    private _paginationTake = 10

    public get isAddPlayerModalOpen(): boolean {
        return this._isAddPlayerModalOpen
    }

    public set isAddPlayerModalOpen(isAddPlayerModalOpen: boolean) {
        this._isAddPlayerModalOpen = isAddPlayerModalOpen
    }

    public get paginationSkip(): number {
        return this._paginationSkip
    }

    public set paginationSkip(paginationSkip: number) {
        this._paginationSkip = paginationSkip
    }

    public get paginationTake(): number {
        return this._paginationTake
    }

    public set paginationTake(paginationTake: number) {
        this._paginationTake = paginationTake
    }

    readonly rootStore

    constructor(rootStore: RootStore) {
        this.players = [] as Player[]
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }
}
