// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Container, Grid, ScrollArea, Text, ThemeIcon } from '@mantine/core'
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

    const { data, isLoading } = useQuery('players', async () => await PlayerQuery(), {
        keepPreviousData: true,
    })

    useEffect(() => {
        isLoading && showSMNotification(t('loadingPlayers'), 'LOADING')
    }, [])

    return (
        <Container fluid sx={{ height: '100%', position: 'relative' }}>
            <SMModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                <PlayerForm setIsModalOpen={setIsModalOpen} />
            </SMModal>

            <Text sx={{ fontSize: '48px', fontWeight: 700 }}>Players</Text>

            <ScrollArea
                type="auto"
                style={{ height: '80vh', width: '100%' }}
                offsetScrollbars
                scrollbarSize={4}
                scrollHideDelay={350}
            >
                <Grid grow>
                    {data?.players?.map(player => (
                        <PlayerCard key={player.id} player={player as Player} />
                    ))}
                </Grid>
            </ScrollArea>

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
