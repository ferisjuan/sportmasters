// @interface
import { IPlayer } from 'interfaces'

export interface IPlayerProfileStore {
    addPlayer(player: IPlayer): void
    playerProfile: IPlayer
    playersProfiles: IPlayer[]
    getPlayer(id: string): Promise<void>
}
