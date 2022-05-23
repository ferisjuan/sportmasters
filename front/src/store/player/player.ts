// @vendors
import { makeAutoObservable } from 'mobx'

// @interface
import { IPlayerProfileStore } from './interface'

// @generated
import { Player } from '~/generated/graphql'

// @store
import { RootStore } from '../store'

export class PlayerStore implements IPlayerProfileStore {
    public player

    private _id = ''
    private _playerEmail = ''

    readonly rootStore

    public get id(): string {
        return this._id
    }

    public set id(id: string) {
        this._id = id
    }

    public get playerEmail(): string {
        return this._playerEmail
    }

    public set playerEmail(email: string) {
        this._playerEmail = email
    }

    constructor(rootStore: RootStore) {
        this.player = {} as Player
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }
}
