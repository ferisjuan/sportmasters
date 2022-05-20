// @vendors
import { Grid } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

// @components
import { PlayerCard } from '../player-profile'

// @constants
import { ROUTES } from '~/constants'

// @generated
import { usePlayersQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'
import { observer } from 'mobx-react-lite'

export const PlayersGrid: React.FC = observer(() => {
    const {
        playerStore,
        playersStore: { paginationSkip, paginationTake },
    } = useStores()

    const { data: playersData } = usePlayersQuery({
        skip: paginationSkip,
        take: paginationTake,
    })

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.email = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    if (!playersData) return null

    return (
        <Grid>
            {playersData.players?.map(player => (
                <Grid.Col key={player.id} onClick={() => handleClick(player.playerEmail)} span={4}>
                    <PlayerCard player={player} />
                </Grid.Col>
            ))}
        </Grid>
    )
})
