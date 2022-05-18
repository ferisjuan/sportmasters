import { Grid } from '@mantine/core'
import { PlayerCard } from '../../components'
import { Player } from '../../generated/graphql'

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
