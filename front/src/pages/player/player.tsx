// @vendors
import { observer } from 'mobx-react-lite'

// @components
import { PlayerProfile, PlayerCard, PlayerGeneralStats, SoccerField } from '~/components'

// @hooks
import { useStores } from '~/hooks'
import { usePlayerQuery } from '../../generated/graphql'

const Player: React.FC = observer(() => {
    const { playerStore } = useStores()

    const { data: playerData } = usePlayerQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const player = playerData?.player

    return (
        <PlayerProfile>
            {player && <PlayerCard player={player} />}
            <PlayerGeneralStats />
            <SoccerField />
        </PlayerProfile>
    )
})

export default Player
