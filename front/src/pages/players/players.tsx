// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Box, Container, Grid, Pagination, Skeleton, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

// @components
import { PlayerCard, PlayerForm, SMModal } from '~/components'

// @interfaces
import { Player } from '~/generated/graphql'

// @utils
import { showSMNotification } from '~/utils'
import { pagination } from '~/utils/pagination/'

// @hooks

export const Players = observer(() => {
    const { t } = useTranslation('notifications')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activePage, setPage] = useState(1)
    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        pagination().then(n => setPlayers(n))
        players.length === 0 && showSMNotification(t('loadingPlayers'), 'LOADING', true)
    }, [])

    return (
        <Container fluid sx={{ height: '100%', position: 'relative' }}>
            <SMModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <PlayerForm setIsModalOpen={setIsModalOpen} />
            </SMModal>

            <Box style={{ height: '80vh', width: '100%' }}>
                <Grid>
                    {players?.map(player => (
                        <PlayerCard key={player.id} player={player as Player} />
                    ))}
                </Grid>

                <Skeleton visible={true} />

                <Pagination style={{ marginTop: '7rem' }} page={activePage} total={10} onChange={setPage} />
            </Box>

            <ThemeIcon
                radius="md"
                size="xl"
                onClick={() => setIsModalOpen(true)}
                sx={{ bottom: 0, cursor: 'pointer', position: 'absolute', right: 0 }}
            >
                <BsPlus size={100} />
            </ThemeIcon>
        </Container>
    )
})
