// @vendors
import { observer } from 'mobx-react-lite'
import { Card, Container, Grid, Image, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// @interfaces
import { Player } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

// @constant
import { ROUTES } from '~/constants'

interface IPlayerAvatar {
    player: Player
}

export const PlayerCard: React.FC<IPlayerAvatar> = observer(({ player }) => {
    const { t } = useTranslation()

    const { playerStore } = useStores()

    const navigate = useNavigate()

    const handleClick = (): void => {
        playerStore.playerId = player.id
        navigate(`../${ROUTES.player}`, { replace: true })
    }

    return (
        <Grid.Col span={4}>
            <Card
                radius="lg"
                shadow="sm"
                component="article"
                sx={theme => ({ backgroundColor: theme.colors.yellow[5], height: '230px' })}
                onClick={handleClick}
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
        </Grid.Col>
    )
})
