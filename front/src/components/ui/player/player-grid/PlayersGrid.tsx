// @vendors
import { Box, ScrollArea } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

// @components
import { PlayerCard } from '../player-profile'

// @constants
import { ROUTES } from '~/constants'

// @hooks
import { useStores } from '~/hooks'
import { usePlayerFilters } from './hooks/usePlayers'

export const PlayersGrid: React.FC = observer(() => {
    const { playerStore } = useStores()

    const { playersGrid } = usePlayerFilters()
    console.log('🚀 ~ file: PlayersGrid.tsx ~ line 20 ~ constPlayersGrid:React.FC=observer ~ playersGrid', playersGrid)

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    if (!playersGrid) return null

    return (
        <>
            <ScrollArea>
                {playersGrid?.map(player => (
                    <Box key={player.id} onClick={() => handleClick(player.playerEmail)}>
                        <PlayerCard player={player} />
                    </Box>
                ))}
            </ScrollArea>
        </>
    )
})
