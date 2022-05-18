// @vendors
import { Grid } from '@mantine/core'

// @generated
import { Player } from '~/generated/graphql'

// @components
import { PlayerCard } from '../player-profile'

interface PlayersGridProps {
    players: Partial<Player>[]
}

export const PlayersGrid: React.FC<PlayersGridProps> = ({ players }) => (
    <Grid>
        {players?.map(player => (
            <PlayerCard key={player.id} player={player as Player} />
        ))}
    </Grid>
)
