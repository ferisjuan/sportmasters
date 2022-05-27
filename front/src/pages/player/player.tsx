// @vendors
import { observer } from 'mobx-react-lite'

// @components
import { PlayerProfile } from '~/components'
import { PlayerDataProfile } from '~/components/ui/player/player-data-profile'

// @hooks
import { useStores } from '~/hooks'
import { usePlayerQuery } from '../../generated/graphql'

const Player: React.FC = observer(() => {
    const { playerStore } = useStores()

    const { data: playerData } = usePlayerQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const player = playerData?.player

    if (!player) return null

    return <PlayerProfile>{player && <PlayerDataProfile />}</PlayerProfile>
})

export default Player
