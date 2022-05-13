// @vendors
import { observer } from 'mobx-react-lite'

// @components
import { PlayerProfile, PlayerCard, PlayerGeneralStats, SoccerField } from '~/components'

// @hooks
import { useStores } from '~/hooks'

const Player: React.VFC = observer(() => {
    const { playerStore } = useStores()

    return (
        <PlayerProfile>
            <PlayerCard player={playerStore.player} />
            <PlayerGeneralStats />
            <SoccerField />
        </PlayerProfile>
    )
})

export default Player
