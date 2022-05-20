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

    private _id = ''
    private _email = ''

    readonly rootStore

    public get id(): string {
        return this._id
    }

    public set id(id: string) {
        this._id = id
    }

    public get email(): string {
        return this._email
    }

    public set email(email: string) {
        this._email = email
    }

    constructor(rootStore: RootStore) {
        this.player = {} as Player
        this.rootStore = rootStore

        makeAutoObservable(this, { rootStore: false })
    }
}
