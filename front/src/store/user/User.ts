// @vendors
import { makeAutoObservable } from 'mobx'

// @generated
import { Roles } from '~/generated/graphql'

// @store
import { RootStore } from '../store'

export class UserStore {
    private _id = ''
    private _email = ''
    private _firstName = ''
    private _lastName = ''
    private _roles: Roles[] = [Roles.None]
    private _schoolEmail = ''

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

    public get firstName(): string {
        return this._firstName
    }

    public set firstName(firstName: string) {
        this._firstName = firstName
    }

    public get lastName(): string {
        return this._lastName
    }

    public set lastName(lastName: string) {
        this._lastName = lastName
    }

    public get roles(): Roles[] {
        return this._roles
    }

    public set roles(roles: Roles[]) {
        this._roles = roles
    }

    public set schoolEmail(schoolId: string) {
        this._schoolEmail = schoolId
    }

    public get schoolEmail(): string {
        return this._schoolEmail
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

        makeAutoObservable(this)
    }
}
