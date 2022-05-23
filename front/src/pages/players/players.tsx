// @vendors
import { BsPlus } from 'react-icons/bs'
import { Box, Pagination, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerForm, PlayersGrid, SMContainer, SMModal } from '~/components'

// @hooks
import { usePlayers } from './hooks'

const Players: React.FC = observer(() => {
    const { handleOnAddPlayer, handleOnPaginationChange, isPlayersLoading, pages, skip } = usePlayers()

    return (
        <SMContainer isLoading={isPlayersLoading}>
            <SMModal>
                <PlayerForm />
            </SMModal>
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
                <PlayersGrid />

                <Pagination
                    onChange={handleOnPaginationChange}
                    page={skip || 1}
                    position="center"
                    pt="lg"
                    total={pages}
                    sx={{ bottom: '20px', position: 'absolute', left: 0, right: 0 }}
                />

                <ThemeIcon
                    radius="md"
                    size="xl"
                    onClick={handleOnAddPlayer}
                    sx={{ bottom: '20px', cursor: 'pointer', position: 'absolute', right: 0 }}
                >
                    <BsPlus size={100} />
                </ThemeIcon>
            </Box>
        </SMContainer>
    )
})

export default Players
