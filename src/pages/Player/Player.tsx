import { PlayerProfile } from 'components/ui/PlayerProfile'
import { PlayerAvatar } from '../../components/ui/PlayerProfile/PlayerAvatar'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../hooks/store'
import { PlayerGeneralStats } from '../../components/ui/PlayerProfile/PlayerStats'
import { SoccerField } from '../../components/ui/SoccerField/index'

export const Player: React.VFC = observer(() => {
    const { playerProfileStore } = useStores()

    playerProfileStore.getPlayer('0192015c-5aa0-4604-b278-8e5dcc85c9bb')

    return (
        <section>
            <PlayerProfile>
                <PlayerAvatar />
                <PlayerGeneralStats />
                <SoccerField />
            </PlayerProfile>
        </section>
    )
})
