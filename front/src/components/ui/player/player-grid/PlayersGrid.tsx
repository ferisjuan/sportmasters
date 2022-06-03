// @vendors
import { useEffect, useState } from 'react'
import { Box, Group, NativeSelect, ScrollArea } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

// @components
import { PlayerCard } from '../player-profile'

// @constants
import { CATEGORYFILTERS, FIELDPOSITIONS, MONTHLYSTATUS, ROUTES } from '~/constants'

// @hooks
import { useStores } from '~/hooks'

// @generated
import {
    Field_Position,
    Player_Category,
    PlayersGridQuery,
    PlayersQuery,
    usePlayersGridQuery,
    usePlayersQuery,
} from '~/generated/graphql'

export const PlayersGrid: React.FC = observer(() => {
    const { playerStore } = useStores()

    const [fieldPosition, setFieldPosition] = useState('ALL')
    const [category, setCategory] = useState('ALL')
    const [status, setStatus] = useState()
    const [playersDataGrid, setPlayersDataGrid] = useState<PlayersQuery[]>()
    console.log(playersDataGrid)

    const { data: allPlayers } = usePlayersQuery()

    const { data: playersGridData } = usePlayersGridQuery(
        {
            where: {
                playerSportData: {
                    is: {
                        fieldPosition: {
                            in: fieldPosition,
                        },
                        category: {
                            in: category,
                        },
                    },
                },
            },
        },
        { enabled: fieldPosition !== 'ALL' && category !== 'ALL' },
    )

    useEffect(() => {
        if (fieldPosition === 'ALL' && category === 'ALL') {
            setPlayersDataGrid(allPlayers)
        } else {
            setPlayersDataGrid(playersGridData)
        }
    }, [playersDataGrid, fieldPosition, allPlayers, playersGridData])

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    // if (!playersDataGrid) return <p>...Loading</p>

    return (
        <>
            <Group grow>
                <NativeSelect
                    value={category}
                    onChange={e => {
                        setCategory(e.target.value)
                    }}
                    data={CATEGORYFILTERS}
                    placeholder="Elige una opción"
                    label="Categoria"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <NativeSelect
                    value={fieldPosition}
                    onChange={e => {
                        setFieldPosition(e.target.value)
                    }}
                    data={FIELDPOSITIONS}
                    placeholder="Elige una opción"
                    label="Posicion"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <NativeSelect
                    value={status}
                    onChange={e => {
                        setStatus(e.target.value)
                    }}
                    data={MONTHLYSTATUS}
                    placeholder="Elige una opción"
                    label="Estado mensual"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
            </Group>

            <ScrollArea>
                {playersDataGrid?.players.map(player => (
                    <Box key={player.id} onClick={() => handleClick(player.playerEmail)}>
                        <PlayerCard player={player} />
                    </Box>
                ))}
            </ScrollArea>
        </>
    )
})
