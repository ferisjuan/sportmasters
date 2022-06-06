// @vendors
import { useNavigate } from 'react-router-dom'
import { Box, Button, Group, Loader, NativeSelect, ScrollArea } from '@mantine/core'
import { observer } from 'mobx-react-lite'

// @components
import { PlayerCard } from '~/components/ui/player/player-profile'

// @constants
import { ROUTES } from '~/constants'

// @hooks
import { useStores } from '~/hooks'
import { usePlayersFilters } from './../hooks'

export const PlayersGrid: React.FC = observer(() => {
    const { playerStore } = useStores()

    const {
        category,
        fieldPosition,
        fieldPositions,
        handleClearFilter,
        isLoading,
        playerCategories,
        playersDataFilters,
        setCategory,
        setFieldPosition,
    } = usePlayersFilters()

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    return (
        <>
            <Group>
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

                <NativeSelect
                    value={fieldPosition}
                    onChange={event => {
                        setFieldPosition(event.target.value)
                    }}
                    data={fieldPositions}
                    label="Posicion"
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
                    playersDataFilters?.players.map(player => (
                        <Box key={player.id} onClick={() => handleClick(player.playerEmail)}>
                            <PlayerCard
                                image={player.name}
                                lastName={player.lastName}
                                fieldPosition={player.playerSportData?.fieldPosition}
                            />
                        </Box>
                    ))
                )}
            </ScrollArea>
        </>
    )
})
