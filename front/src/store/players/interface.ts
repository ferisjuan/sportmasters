import { Player } from '../../generated/graphql'

export interface IPlayersStore {
    players: Partial<Player>[]
}
