// @vendors
import { observer } from 'mobx-react-lite'
import { Card, Container, Image, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @generated
import { Field_Position } from '~/generated/graphql'

interface IPlayerCardProps {
    player: Player
}

interface Player {
    image?: string
    lastName: string
    fieldPosition?: Field_Position
}

export const PlayerCard: React.FC<IPlayerCardProps> = observer(({ player }) => {
    const { t } = useTranslation()

    return (
        <Card
            radius="xs"
            shadow="sm"
            component="article"
            sx={theme => ({ backgroundColor: theme.colors.yellow[5], height: '230px' })}
        >
            <Card.Section>
                <Container fluid sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image alt="Player image" fit="contain" src={player?.image || ''} width={120} />
                </Container>
            </Card.Section>

            <Container>
                <Text align="center" mt={8} size="xl" transform="uppercase" weight={600}>
                    {player?.lastName}
                </Text>
            </Container>

            <Text align="center" size="md" weight={300}>
                {t(`${player?.fieldPosition}`) || 'Position not found'}
            </Text>
        </Card>
    )
})
