// @vendors
import { Card, Col } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { StatsLead } from '~/components'

// @hooks
import { useStores } from '~/hooks'

// @utils
import { formatDate, getAge } from '~/utils'

export const PlayerStats: React.VFC = observer(() => {
    const {
        playerStore: { player: playerProfile },
    } = useStores()

    return (
        <Col span={4}>
            <Card sx={theme => ({ backgroundColor: theme.colors.violet[9] })}>
                <Card.Section>
                    <StatsLead
                        title={getAge(playerProfile.playerData.birthday)}
                        subTitle={formatDate(playerProfile.playerData.birthday)}
                    />
                </Card.Section>
            </Card>
        </Col>
    )
})
