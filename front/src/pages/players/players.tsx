// @vendors
import { BsPlus } from 'react-icons/bs'
import { Box, Button, Group, Loader, NativeSelect, Pagination, Select, ThemeIcon } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerForm, PlayersGrid, SMModal } from '~/components'

// @hooks
import { usePlayers } from './hooks'
import { CATEGORYFILTERS, FIELDPOSITIONS, MONTHLYSTATUS } from '~/constants'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Players: React.FC = observer(() => {
    const { t } = useTranslation('fieldPosition')
    const { handleOnAddPlayer, handleOnPaginationChange, isPlayersLoading, pages, skip } = usePlayers()
    const category = FIELDPOSITIONS.map(value => t(value))

    const [value, setValue] = useState({ category: '', position: '', status: '' })
    console.log('🚀 ~ file: players.tsx ~ line 21 ~ constPlayers:React.FC=observer ~ value', value)

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '87vh',
                justifyContent: 'space-between',
                paddingBlockEnd: '2rem',
                position: 'relative',
                width: '100%',
            }}
        >
            <SMModal>
                <PlayerForm />
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

                <Select
                    value={value.position}
                    onChange={e => {
                        setValue({ ...value, position: e || '' })
                    }}
                    searchable
                    nothingFound="No se encontraron resultados"
                    data={category}
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
                <Button
                    // onClick={() => handleFilters(value.position)}
                    style={{ alignSelf: 'end', marginBottom: '1rem' }}
                >
                    Filtrar
                </Button>
            </Group>

            {isPlayersLoading ? (
                <Loader
                    color="indigo"
                    variant="bars"
                    sx={{ left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%' }}
                />
            ) : (
                <PlayersGrid />
            )}

            <Pagination
                onChange={handleOnPaginationChange}
                page={skip || 1}
                position="center"
                pt="lg"
                total={pages}
                sx={{ bottom: 0, position: 'absolute', left: 0, right: 0 }}
            />

            <ThemeIcon
                radius="md"
                size="xl"
                onClick={handleOnAddPlayer}
                sx={{ bottom: 0, cursor: 'pointer', position: 'absolute', right: '2em' }}
            >
                <BsPlus size={100} />
            </ThemeIcon>
        </Box>
    )
})

export default Players
