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
import { getNsTranslation } from '~/utils/getTranslation'

// @queries
import { Players } from '~/query-client/queries'

export const Playerss: React.FC = observer(() => {
    const t = getNsTranslation('notifications')

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [players, setPlayers] = useState<Player[]>([])

    const { data } = useQuery('players', () => Players().then(res => res))

    useEffect(() => {
        setPlayers(data?.players as Player[])
    }, [data])

    useEffect(() => {
        players?.length === 0 && showSMNotification(t('loadingPlayers'), 'LOADING')
    }, [players?.length])

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
                    {players?.length > 0 &&
                        players?.map((player: Player) => <PlayerCard key={player.id} player={player} />)}
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
