// @vendors
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Card, Col, Container, Image, Text } from '@mantine/core'

// @~/interfaces
import { IPlayer } from '~/interfaces'

interface IPlayerAvatar {
    player: IPlayer
}

export const PlayerCard: React.FC<IPlayerAvatar> = observer(({ player }) => {
    const { t } = useTranslation()

    return (
        <Col span={2}>
            <Card
                radius="lg"
                shadow="sm"
                padding="md"
                component="article"
                sx={(theme) => ({ backgroundColor: theme.colors.yellow[5], height: '230px' })}
            >
                <Card.Section>
                    <Container fluid padding={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Image alt={player?.image?.alt} fit="contain" src={player?.image?.src} width={120} />
                    </Container>
                </Card.Section>

                <Container>
                    <Text align="center" mt={8} size="xl" transform="uppercase" weight={600}>
                        {player?.lastName}
                    </Text>
                </Container>

                <Text align="center" size="md" weight={300}>
                    {t(`fieldPosition.${player?.fieldPosition}`)}
                </Text>
                <Text align="center" size="md" weight={300}>
                    {player?.team?.name}
                </Text>
            </Card>
        </Col>
    )
})
