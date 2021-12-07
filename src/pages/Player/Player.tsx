import { PlayerProfile } from 'components/ui/PlayerProfile'
import { PlayerAvatar } from '../../components/ui/PlayerProfile/PlayerAvatar'
import { db } from '../../db/connect'
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
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../hooks/store'

export const Player: React.VFC = observer(() => {
    const [players, setPlayers] = useState<IPlayer[]>([] as IPlayer[])

    const { playerProfileStore } = useStores()

    useEffect(() => {
        playerProfileStore.getPlayers()
        setPlayers(playerProfileStore.playersProfiles)
        console.log(players)
    }, [playerProfileStore, players])

    const handleClick = async (): Promise<void> => {
        try {
            const data: IPlayer = {
                name: 'Robert',
                birthday: new Date(1990, 1, 1),
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
                teamId: v4(),
                placeOfBirth: 'sincelejo',
            }

            playerProfileStore.addPlayer(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section>
            <PlayerProfile>
                <PlayerAvatar />
            </PlayerProfile>
            <button onClick={handleClick}>Add</button>
        </section>
    )
})
