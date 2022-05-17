// @vendors
import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Box, Container, Grid, Pagination, ThemeIcon } from '@mantine/core'

// @components
import { PlayerCard, PlayerForm, SMModal } from '~/components'

// @generated
import { Player, usePlayersCountQuery, usePlayersQuery } from '~/generated/graphql'

const PLAYERS_BY_PAGE = 12

const Players = (): JSX.Element => {
    const [skip, setSkip] = useState(0)
    const [take] = useState(PLAYERS_BY_PAGE)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { data: playersData } = usePlayersQuery({ skip, take })
    const { data: playersCount } = usePlayersCountQuery()
    const count = playersCount?.aggregatePlayer._count?.id

    const pages = (): number | undefined => {
        if (count) return Math.ceil(count / PLAYERS_BY_PAGE)
    }

    return (
        <Container fluid sx={{ height: '100%', position: 'relative' }}>
            <SMModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <PlayerForm setIsModalOpen={setIsModalOpen} />
            </SMModal>

            <Box style={{ height: '80vh', width: '100%' }}>
                <Grid>
                    {playersData?.players?.map(player => (
                        <PlayerCard key={player.id} player={player as Player} />
                    ))}
                </Grid>

                <Pagination onChange={setSkip} page={skip || 1} position="center" pt="lg" total={pages() || 0} />
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
}

export default Players
