// @vendors
import { Container, Button, Group, Loader, NativeSelect, ScrollArea, Select } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerCard } from '~/components/ui/player'

// @hooks
import { usePlayersFilters } from './../hooks'

export const PlayersGrid: React.FC = observer(() => {
    const {
        category,
        handleClearFilter,
        isLoading,
        playerCategories,
        playersDataFilters,
        setCategory,
        names,
        setName,
        name,
    } = usePlayersFilters()

    return (
        <Container>
            <Group>
                <Select
                    value={name}
                    onChange={setName}
                    searchable
                    placeholder="Buscar por nombre"
                    data={names}
                    label="Nombres"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                    nothingFound="Jugador no encontrado"
                    maxDropdownHeight={150}
                />

                <NativeSelect
                    value={category}
                    onChange={event => {
                        setCategory(event.target.value)
                    }}
                    data={playerCategories}
                    label="Categoria"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <Button color="indigo" onClick={handleClearFilter} variant="subtle" style={{ marginTop: '1.5rem' }}>
                    Limpiar
                </Button>
            </Group>

            <ScrollArea>
                {isLoading ? (
                    <Loader
                        color="indigo"
                        variant="bars"
                        sx={{ left: '50%', position: 'fixed', transform: 'translate(-50%, -50%)', top: '50%' }}
                    />
                ) : (
                    <PlayerCard players={playersDataFilters?.players} />
                )}
            </ScrollArea>
        </Container>
    )
})
