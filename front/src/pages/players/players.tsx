// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Container, Grid, ScrollArea, Text, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerCard, PlayerForm, SMModal } from '~/components'

// @interfaces
import { Player } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'
import { showSMNotification } from '../../utils'
import { useTranslation } from 'react-i18next'

export const Players: React.FC = observer(() => {
    const { t } = useTranslation('playersPage')
    const { playersStore } = useStores()

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        playersStore.getPlayers()
    }, [playersStore])

    useEffect(() => {
        playersStore.players.length === 0 && showSMNotification(t('loadingPlayers'), 'LOADING')
    }, [playersStore.players])

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
                    {playersStore.players.length > 0 &&
                        playersStore.players.map((player: Player) => <PlayerCard key={player.id} player={player} />)}
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
