// @vendors
import { Grid } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

// @components
import { PlayerCard } from '../player-profile'

// @constants
import { ROUTES } from '~/constants'

// @generated
import { PlayersQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

export const PlayersGrid: React.FC<PlayersQuery> = ({ players }) => {
    const { playerStore } = useStores()

    const navigate = useNavigate()

    const handleClick = (id: string | undefined): void => {
        if (!id) return

        playerStore.playerId = id

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    return (
        <Grid>
            {players?.map(player => (
                <Grid.Col key={player.id} onClick={() => handleClick(player.id)} span={4}>
                    <PlayerCard player={player} />
                </Grid.Col>
            ))}
        </Grid>
    )
}
