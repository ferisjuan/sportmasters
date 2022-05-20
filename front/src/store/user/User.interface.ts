import { UserQuery } from '../../generated/graphql'

export interface IUserStore {
    user: UserQuery['user']
}
