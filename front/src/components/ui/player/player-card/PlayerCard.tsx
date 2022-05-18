// @vendors
import { observer } from 'mobx-react-lite'
import { Card, Container, Image, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @interfaces
import { Player } from '~/generated/graphql'

interface IPlayerAvatar {
    player: Player
}

export const PlayerCard: React.FC<IPlayerAvatar> = observer(({ player }) => {
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
                    <Image alt="Player image" fit="contain" src={player?.image} width={120} />
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