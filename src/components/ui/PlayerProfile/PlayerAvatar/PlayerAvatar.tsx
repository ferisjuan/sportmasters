import { Observer } from 'mobx-react-lite'
import { playerProfileStore } from 'store'

export const PlayerAvatar = Observer(() => {
    const {
        player: { lastName, playingPosition, teamId },
    } = playerProfileStore
    return <div></div>
})
