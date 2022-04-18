// @interface
import { Player } from '~/generated/graphql'

export interface IPlayerProfileStore {
    addPlayer(player: Player): void
    player: Player
    getPlayer(id: string): Promise<void>
}
