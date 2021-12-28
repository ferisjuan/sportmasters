// @interface
import { IPlayer } from 'interfaces'

export interface IPlayerProfileStore {
    addPlayer(player: IPlayer): void
    player: IPlayer
    getPlayer(id: string): Promise<void>
}
