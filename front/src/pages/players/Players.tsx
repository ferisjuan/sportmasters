// @vendors
import { BsPlus } from 'react-icons/bs'
import { Box, Pagination, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerForm, SMModal } from '~/components'
import { PlayersGrid } from '~/pages/players/player-grid'

// @hooks
import { usePlayers } from './hooks'

const Players: React.FC = observer(() => {
    const { handleOnAddPlayer, handleOnPaginationChange, pages, skip } = usePlayers()

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '80vh',
                paddingBlockEnd: '2rem',
                position: 'relative',
                width: '100%',
            }}
        >
            <SMModal>
                <PlayerForm />
            </SMModal>

            <PlayersGrid />

            <Pagination
                onChange={handleOnPaginationChange}
                page={skip || 1}
                position="center"
                pt="lg"
                total={pages}
                sx={{ bottom: 0, position: 'absolute', left: 0, right: 0 }}
            />

            <ThemeIcon
                radius="md"
                size="xl"
                onClick={handleOnAddPlayer}
                sx={{ bottom: 0, cursor: 'pointer', position: 'absolute', right: '2em' }}
            >
                <BsPlus size={100} />
            </ThemeIcon>
        </Box>
    )
})

export default Players