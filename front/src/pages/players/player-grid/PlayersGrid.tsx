// @vendors
import { Box, Button, Group, Loader, NativeSelect, ScrollArea } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

// @components
import { PlayerCard } from '~/components/ui/player/player-profile'

// @constants
import { MONTHLYSTATUS, ROUTES } from '~/constants'

// @hooks
import { useStores } from '~/hooks'

// @generated
import { usePlayersFilters } from '~/pages/players/player-grid/hooks'
import { Field_Position, Player_Category } from '~/generated/graphql'

const fieldPositions = Object.keys(Field_Position).map(key => ({ value: key, label: key }))

const playerCategories = Object.keys(Player_Category).map(key => ({ value: key, label: key }))

fieldPositions.unshift({ value: '', label: 'Todos' })
playerCategories.unshift({ value: '', label: 'Todos' })

export const PlayersGrid: React.FC = observer(() => {
    const { playerStore } = useStores()

    const {
        playersDataFilters,
        isLoading,
        category,
        handleClearFilter,
        setCategory,
        fieldPosition,
        setFieldPosition,
        status,
        setStatus,
    } = usePlayersFilters()

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    if (isLoading)
        return (
            <Loader
                color="indigo"
                variant="bars"
                sx={{ left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%' }}
            />
        )

    return (
        <>
            <Group grow>
                <NativeSelect
                    value={category}
                    onChange={event => {
                        setCategory(event.target.value as keyof typeof Player_Category)
                    }}
                    data={playerCategories}
                    placeholder="Elige una opción"
                    label="Categoria"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <NativeSelect
                    value={fieldPosition}
                    onChange={event => {
                        setFieldPosition(event.target.value as keyof typeof Field_Position)
                    }}
                    data={fieldPositions}
                    placeholder="Elige una opción"
                    label="Posicion"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <NativeSelect
                    value={status}
                    onChange={event => {
                        setStatus(event.target.value)
                    }}
                    data={MONTHLYSTATUS}
                    placeholder="Elige una opción"
                    label="Estado mensual"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
                <Button color="indigo" onClick={handleClearFilter} variant="subtle" style={{ marginTop: '1.5rem' }}>
                    Limpiar
                </Button>
            </Group>

            <ScrollArea>
                {playersDataFilters?.players.map(player => (
                    <Box key={player.id} onClick={() => handleClick(player.playerEmail)}>
                        <PlayerCard player={player} />
                    </Box>
                ))}
            </ScrollArea>
        </>
    )
})
