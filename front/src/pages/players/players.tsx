// @vendors
import { BsPlus } from 'react-icons/bs'
import { Box, Container, Pagination, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerForm, PlayersGrid, SMModal } from '~/components'

// @hooks
import { usePlayers } from './hooks'

const Players: React.FC = observer(() => {
    const { handleOnAddPlayer, handleOnPaginationChange, pages, skip } = usePlayers()

    return (
        <Container fluid sx={{ height: '100%', position: 'relative' }}>
            <SMModal>
                <PlayerForm />
            </SMModal>

            <Box style={{ height: '80vh', width: '100%' }}>
                <PlayersGrid />

                <Pagination
                    onChange={handleOnPaginationChange}
                    page={skip || 1}
                    position="center"
                    pt="lg"
                    total={pages}
                />
            </Box>

            <ThemeIcon
                radius="md"
                size="xl"
                onClick={handleOnAddPlayer}
                sx={{ bottom: 0, cursor: 'pointer', position: 'absolute', right: 0 }}
            >
                <BsPlus size={100} />
            </ThemeIcon>
        </Container>
    )
})

export default Players
