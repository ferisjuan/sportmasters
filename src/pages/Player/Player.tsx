import { PlayerProfile } from 'components/ui/PlayerProfile'
import { PlayerAvatar } from '../../components/ui/PlayerProfile/PlayerAvatar'
import {
    FAMILY_SUPPORT,
    FIELD_POSITION,
    PERSONAL_QUALITIES,
    PHYSICAL_CAPABILITIES,
    PHYSICAL_QUALITIES,
    PLAYER_CATEGORY,
} from 'enums'
import { IPlayer } from 'interfaces'
import { v4 } from 'uuid'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../hooks/store'
import { PlayerStats } from '../../components/ui/PlayerProfile/PlayerStats'

export const Player: React.VFC = observer(() => {
    const { playerProfileStore } = useStores()

    playerProfileStore.getPlayer('6TL5cLQyqZP7Y8UkTOC0')

    const handleClick = async (): Promise<void> => {
        try {
            const birthDate = new Date(1993, 10, 10)
            const data: IPlayer = {
                name: 'Robert',
                birthday: { seconds: birthDate.getTime(), nanoseconds: 0 },
                IMC: 1.8,
                category: PLAYER_CATEGORY.FIRST,
                familySupport: [FAMILY_SUPPORT.BOTH_PARENTS],
                fieldPosition: FIELD_POSITION.ATTACKING_MIDFIELDER,
                height: 1.7,
                weight: 70,
                hobbies: ['football', 'music'],
                id: v4(),
                image: {
                    alt: 'robert',
                    src: 'https://firebasestorage.googleapis.com/v0/b/sportmasters.appspot.com/o/bbdcfc32-a2e0-47f2-ad61-33d9fc72e386.jpeg?alt=media&token=8fbb66b7-e589-41a0-953d-1f17b467d87e',
                },
                lastName: 'Espitia',
                personalQualities: [PERSONAL_QUALITIES.FELLOWSHIP],
                physicalCapabilities: [PHYSICAL_CAPABILITIES.COORDINATION],
                physicalQualities: [PHYSICAL_QUALITIES.DIRBLING],
                playerNumber: '10',
                sportHistory: 'lorem ipsum',
                team: {
                    id: v4(),
                    name: 'Real Madrid',
                },
                placeOfBirth: 'sincelejo',
            }

            const playerId = await playerProfileStore.addPlayer(data)
            console.log('🚀🚀🚀 ~ file: Player.tsx ~ line 52 ~ handleClick ~ playerId', playerId)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section>
            <PlayerProfile>
                <PlayerAvatar />
                <PlayerStats />
            </PlayerProfile>
            <button onClick={handleClick}>Add</button>
        </section>
    )
})
