// @vendors
import { observer } from 'mobx-react'

// @hooks
import { useStores } from 'hooks/store'
import { Card, Image, Text } from '@mantine/core'

export const PlayerAvatar: React.FC = observer(() => {
    const {
        playerProfileStore: {
            player: { image, lastName, playingPosition, teamId },
        },
    } = useStores()

    return (
        <Card shadow="sm" padding="md" component="article">
            <Card.Section>
                <Image src={image.src} height={160} alt={image.alt} />
            </Card.Section>

            <Text weight={500} size="lg">
                {lastName}
            </Text>

            <Text size="sm">{playingPosition}</Text>
            <Text size="sm">{teamId}</Text>
        </Card>
    )
})
