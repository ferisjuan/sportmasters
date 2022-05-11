// @vendors
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { Card, Col, Container } from '@mantine/core'

// @components
import { StatsLead } from '~/components'

// @hooks
import { useStores } from '~/hooks'

// @utils
import { formatDate, getAge } from '~/utils/index'

export const PlayerGeneralStats: React.VFC = observer(() => {
    const { t } = useTranslation('stats')

    const {
        playerStore: { player: playerProfile },
    } = useStores()

    return (
        <Col span={4}>
            <Card sx={theme => ({ backgroundColor: theme.colors.violet[9], height: '230px', width: '600px' })}>
                <Card.Section>
                    <Container
                        sx={{
                            borderBottom: '1px solid #ffffffaa',
                            display: 'flex',
                            flexWrap: 'wrap',
                            height: '115px',
                            marginInline: '20px',
                        }}
                    >
                        <StatsLead
                            title={getAge(playerProfile?.birthday?.seconds)}
                            subTitle={formatDate(playerProfile?.birthday?.seconds)}
                        />
                        <StatsLead title={t('weight')} subTitle={`${playerProfile?.weight}`} />
                        <StatsLead title={'stat titl'} subTitle={'stat sub title'} />
                        <StatsLead title={'stat titl'} subTitle={'stat sub title'} />
                        <StatsLead title={'stat titl'} subTitle={'stat sub title'} />
                    </Container>
                </Card.Section>
                <Container
                    sx={{
                        alignContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '115px',
                    }}
                >
                    <StatsLead
                        title={getAge(playerProfile?.birthday?.seconds)}
                        subTitle={formatDate(playerProfile?.birthday?.seconds)}
                    />
                    <StatsLead
                        title={getAge(playerProfile?.birthday?.seconds)}
                        subTitle={formatDate(playerProfile?.birthday?.seconds)}
                    />
                </Container>
            </Card>
        </Col>
    )
})
