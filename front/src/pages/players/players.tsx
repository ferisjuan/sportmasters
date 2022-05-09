// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Box, Container, Grid, Pagination, ThemeIcon } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @components
import { PlayerCard, PlayerForm, SMModal } from '~/components'

// @interfaces
import { Player } from '~/generated/graphql'

// @utils
import { showSMNotification, firstPagination, nextScroll } from '~/utils'

export const Players = (): JSX.Element => {
    const { t } = useTranslation('notifications')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [players, setPlayers] = useState<Player[]>([])
    const [lastKey, setLastKey] = useState('')
    const [isLoading, setIsloading] = useState(false)
    const [activePage, setPage] = useState(1)

    useEffect(() => {
        firstPagination().then(n => {
            setPlayers(n.players)
            setLastKey(n.lastKey)
        })
        {
            isLoading && showSMNotification(t('loadingPlayers'), 'LOADING', isLoading)
        }
    }, [])

    const handleNextPosts = (key: string): void => {
        if (key.length > 0) {
            setIsloading(true)
            nextScroll(key)
                .then(n => {
                    setPlayers(n.players)
                    setLastKey(n.lastKey)
                    setIsloading(false)
                })
                .catch(err => {
                    console.log('error', err)
                    setIsloading(false)
                })
        }
    }

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

                <Pagination
                    style={{ marginTop: '2rem' }}
                    onClick={() => handleNextPosts(lastKey)}
                    page={activePage}
                    onChange={setPage}
                    total={10}
                />
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
