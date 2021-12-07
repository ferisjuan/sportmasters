// @interface
import { IPlayer } from 'interfaces'

export interface IPlayerProfileStore {
    player: IPlayer
    playersProfiles: IPlayer[]
    getPlayers(): Promise<void>
}
