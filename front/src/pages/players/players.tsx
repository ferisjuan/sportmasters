// @vendors
import { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { Container, Grid, Pagination, ThemeIcon, Group, Button, NativeSelect, ScrollArea } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @components
import { PlayerCard, PlayerForm, SMModal } from '~/components'

// @interfaces
import { Player } from '~/generated/graphql'

// @utils
import { showSMNotification } from '~/utils'

// @services
import { firstPagination, nextPagination, filtersPlayers } from '~/services'

// @constants
import { CATEGORYFILTERS, FIELDPOSITIONS, MONTHLYSTATUS } from '~/constants'

export const Players = (): JSX.Element => {
    const { t } = useTranslation('notifications')

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [players, setPlayers] = useState<Player[]>([])
    const [lastKey, setLastKey] = useState('')
    const [isLoading, setIsloading] = useState(false)
    const [activePage, setPage] = useState(1)
    const [value, setValue] = useState({ category: '', position: '', status: '' })

    useEffect(() => {
        firstPagination().then(n => {
            setPlayers(n.players)
            setLastKey(n.lastKey)
        })

        // filtersPlayers().then(n => {
        //     setPlayers(n.players)
        // })
        {
            isLoading && showSMNotification(t('loadingPlayers'), 'LOADING', isLoading)
        }
    }, [])

    const handleNextPagination = (key: string): void => {
        if (key.length > 0) {
            setIsloading(true)
            nextPagination(key)
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
            <Group grow>
                <NativeSelect
                    value={value.category}
                    onChange={e => {
                        setValue({ ...value, category: e.target.value })
                    }}
                    data={CATEGORYFILTERS}
                    placeholder="Elige una opción"
                    label="Categoria"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <NativeSelect
                    value={value.position}
                    onChange={e => {
                        setValue({ ...value, position: e.target.value })
                    }}
                    data={FIELDPOSITIONS}
                    placeholder="Elige una opción"
                    label="Posicion"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
                <NativeSelect
                    value={value.status}
                    onChange={e => {
                        setValue({ ...value, status: e.target.value })
                    }}
                    data={MONTHLYSTATUS}
                    placeholder="Elige una opción"
                    label="Estado mensual"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
                <Button style={{ alignSelf: 'end', marginBottom: '1rem' }}>Filtrar</Button>
            </Group>

            <ScrollArea style={{ height: '70vh' }}>
                <Grid>
                    {players?.map(player => (
                        <PlayerCard key={player.id} player={player as Player} />
                    ))}
                </Grid>
            </ScrollArea>

            <Pagination
                style={{ marginTop: '2rem', position: 'absolute', bottom: 0 }}
                onClick={() => handleNextPagination(lastKey)}
                page={activePage}
                onChange={setPage}
                total={10}
            />

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
