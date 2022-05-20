// @vendors
import { makeAutoObservable } from 'mobx'

// @generated
import { UserQuery } from '~/generated/graphql'

// @interface
import { IUserStore } from './User.interface'

// @store
import { RootStore } from '../store'

export class UserStore implements IUserStore {
    public user = {} as UserQuery['user']

    readonly rootStore

    public setEmail(email: string | null): void {
        if (!this.user?.email) return
        if (!email) return

        this.user.email = email
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

        makeAutoObservable(this)
    }
}
