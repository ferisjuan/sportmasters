// @vendors
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerProfile, PlayerCard, PlayerGeneralStats, SoccerField } from '~/components'

// @hooks
import { useStores } from '~/hooks/store'

export const Player: React.VFC = observer(() => {
    const { playerStore } = useStores()

    useEffect(() => {
        playerStore.getPlayer('0192015c-5aa0-4604-b278-8e5dcc85c9bb')
    }, [playerStore])

    return (
        <PlayerProfile>
            <PlayerCard player={playerStore.player} />
            <PlayerGeneralStats />
            <SoccerField />
        </PlayerProfile>
    )
})
