// @vendors
import { observer } from 'mobx-react-lite'

// @hooks
import { useStores } from 'hooks/store'
import { Card, Image, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { IPlayer } from '../../../../interfaces'

export const PlayerAvatar: React.FC = observer(() => {
    const [players, setPlayers] = useState<IPlayer[]>([])

    const {
        playerProfileStore: { playersProfiles },
    } = useStores()

    useEffect(() => {
        setPlayers(playersProfiles)
    }, [playersProfiles])

    return (
        <Card shadow="sm" padding="md" component="article">
            <Card.Section>
                <Image alt={players[0]?.image.alt} fit="contain" src={players[0]?.image.src} height={160} />
            </Card.Section>

            <Text weight={500} size="lg">
                {players[0]?.lastName}
            </Text>

            <Text size="sm">{players[0]?.fieldPosition}</Text>
            <Text size="sm">{players[0]?.teamId}</Text>
        </Card>
    )
})
