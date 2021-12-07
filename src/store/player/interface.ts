// @interface
import { IPlayer } from 'interfaces'

export interface IPlayerProfileStore {
    addPlayer(player: IPlayer): void
    player: IPlayer
    playersProfiles: IPlayer[]
    getPlayers(): Promise<void>
}
