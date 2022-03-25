// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Container, ScrollArea, Text, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { SMModal } from '~/components/modal'
import { PlayerCard } from '~/components/ui/PlayerProfile'
import { PlayerForm } from '~/components/forms'

// @stores
import { IPlayer } from '~/interfaces'

// @hooks
import { useStores } from '~/hooks/store'

export const Players: React.FC = observer(() => {
    const { playersStore } = useStores()

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        playersStore.getPlayers()
    }, [playersStore])

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
                {playersStore.players.length > 0 &&
                    playersStore.players.map((player: IPlayer) => <PlayerCard key={player.id} player={player} />)}
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
