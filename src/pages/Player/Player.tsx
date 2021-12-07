import { PlayerProfile } from 'components/ui/PlayerProfile'
import { PlayerAvatar } from '../../components/ui/PlayerProfile/PlayerAvatar'

export const Player: React.VFC = () => {
    return (
        <section>
            <PlayerProfile>
                <PlayerAvatar />
            </PlayerProfile>
        </section>
    )
}
