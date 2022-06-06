// @vendors
import { BsPlus } from 'react-icons/bs'
import { Box, Loader, Pagination, ThemeIcon } from '@mantine/core'

// @components
import { PlayerForm, PlayersGrid, SMModal } from '~/components'

// @hooks
import { usePlayers } from './hooks'
import { observer } from 'mobx-react-lite'

const Players: React.FC = observer(() => {
    const { handleOnAddPlayer, handleOnPaginationChange, isPlayersLoading, pages, skip } = usePlayers()

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '87vh',
                justifyContent: 'space-between',
                paddingBlockEnd: '2rem',
                position: 'relative',
                width: '100%',
            }}
        >
            <SMModal>
                <PlayerForm />
            </SMModal>

            {isPlayersLoading ? (
                <Loader
                    color="indigo"
                    variant="bars"
                    sx={{ left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%' }}
                />
            ) : (
                <PlayersGrid />
            )}

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
