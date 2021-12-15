// @vendors
import { observer } from 'mobx-react-lite'

// @hooks
import { useStores } from 'hooks/store'
import { Card, Col, Container, Image, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export const PlayerAvatar: React.FC = observer(() => {
    const { t } = useTranslation()

    const {
        playerProfileStore: { playerProfile },
    } = useStores()

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
                        <Image
                            alt={playerProfile?.image?.alt}
                            fit="contain"
                            src={playerProfile?.image?.src}
                            width={120}
                        />
                    </Container>
                </Card.Section>

                <Container>
                    <Text align="center" mt={8} size="xl" transform="uppercase" weight={600}>
                        {playerProfile?.lastName}
                    </Text>
                </Container>

                <Text align="center" size="md" weight={300}>
                    {t(`fieldPosition.${playerProfile?.fieldPosition}`)}
                </Text>
                <Text align="center" size="md" weight={300}>
                    {playerProfile?.team?.name}
                </Text>
            </Card>
        </Col>
    )
})
