// @vendors
import { observer } from 'mobx-react-lite'

// @hooks
import { useStores } from 'hooks/store'
import { Card, Image, Text } from '@mantine/core'

export const PlayerAvatar: React.FC = observer(() => {
    const {
        playerProfileStore: { playersProfiles },
    } = useStores()

    const { image, lastName, fieldPosition, teamId } = playersProfiles[0]

    return (
        <Card shadow="sm" padding="md" component="article">
            <Card.Section>
                <Image alt={image?.alt} fit="contain" src={image?.src} height={160} />
            </Card.Section>

            <Text weight={500} size="lg">
                {lastName}
            </Text>

            <Text size="sm">{fieldPosition}</Text>
            <Text size="sm">{teamId}</Text>
        </Card>
    )
})
