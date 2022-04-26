// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Container, ScrollArea, Text, ThemeIcon, Grid } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useQuery } from 'react-query'

// @components
import { PlayerCard, PlayerForm, SMModal } from '~/components'

// @interfaces
import { Player } from '~/generated/graphql'

// @util
import { showSMNotification } from '~/utils'

import { useTranslation } from 'react-i18next'

// @queries
import { Players as PlayerQuery } from '~/query-client/queries'

export const Players: React.FC = observer(() => {
    const { t } = useTranslation('notifications')

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { data } = useQuery('players', () => PlayerQuery().then(res => res))

    useEffect(() => {
        data?.players || showSMNotification(t('loadingPlayers'), 'LOADING')
    }, [data?.players])

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
                <Grid>
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
