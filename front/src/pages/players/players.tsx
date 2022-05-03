// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Box, Container, Grid, Pagination, Skeleton, Text, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

// @components
import { PlayerCard, PlayerForm, SMModal } from '~/components'

// @interfaces
import { Player } from '~/generated/graphql'

// @utils
import { showSMNotification } from '~/utils'

// @queries
import { Players as PlayerQuery } from '~/queries'

export const Players = observer(() => {
    const { t } = useTranslation('notifications')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activePage, setPage] = useState(0)

    const variables = {
        take: 9,
        skip: activePage,
    }

    const { data, isLoading } = useQuery(['players', variables], async () => await PlayerQuery(variables), {
        keepPreviousData: true,
    })

    useEffect(() => {
        {
            isLoading && showSMNotification(t('loadingPlayers'), 'LOADING', isLoading)
        }
    }, [isLoading, data])

    return (
        <Container fluid sx={{ height: '100%', position: 'relative' }}>
            <SMModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <PlayerForm setIsModalOpen={setIsModalOpen} />
            </SMModal>

            <Text sx={{ fontSize: '48px', fontWeight: 700 }}>Players</Text>

            <Box style={{ height: '80vh', width: '100%' }}>
                <Grid>
                    {data?.players?.map(player => (
                        <PlayerCard key={player.id} player={player as Player} />
                    ))}
                </Grid>

                <Skeleton visible={true} />

                <Pagination style={{ marginTop: '2rem' }} page={activePage} total={10} onChange={setPage} />
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
