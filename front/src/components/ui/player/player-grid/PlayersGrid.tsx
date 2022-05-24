// @vendors
import { Box, ScrollArea } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

// @components
import { PlayerCard } from '../player-profile'

// @constants
import { ROUTES } from '~/constants'

// @generated
import { usePlayersQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'

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

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    if (!playersData) return null

    return (
        <ScrollArea>
            {playersData.players?.map(player => (
                <Box key={player.id} onClick={() => handleClick(player.playerEmail)}>
                    <PlayerCard player={player} />
                </Box>
            ))}
        </ScrollArea>
    )
})
