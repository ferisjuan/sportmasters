// @vendors
import { Box, Group, ScrollArea, Select } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

// @components
import { PlayerCard } from '../player-profile'

// @constants
import { CATEGORYFILTERS, FIELDPOSITIONS, MONTHLYSTATUS, ROUTES } from '~/constants'

// @generated
import { usePlayersGridQuery } from '~/generated/graphql'

// @hooks
import { useStores } from '~/hooks'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const PlayersGrid: React.FC = observer(() => {
    const { playerStore } = useStores()

    // const { t } = useTranslation('fieldPosition')

    // const category = FIELDPOSITIONS.map(value => t(value))

    const [value, setValue] = useState({ category: '', fieldPosition: '', status: '' })
    const [players, setPlayers] = useState<any[]>([])

    const { data: playersData } = usePlayersGridQuery({
        where: {
            playerSportData: {
                is: {},
            },
        },
    })

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    if (!playersData) return null

    return (
        <>
            <Group grow>
                <Select
                    value={value.category}
                    onChange={e => {
                        setValue({ ...value, category: e || '' })
                    }}
                    data={CATEGORYFILTERS}
                    placeholder="Elige una opción"
                    label="Categoria"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <Select
                    value={value.fieldPosition}
                    onChange={e => {
                        setValue({ ...value, fieldPosition: e || '' })
                    }}
                    data={FIELDPOSITIONS}
                    placeholder="Elige una opción"
                    label="Posicion"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />

                <Select
                    value={value.status}
                    onChange={e => {
                        setValue({ ...value, status: e || '' })
                    }}
                    data={MONTHLYSTATUS}
                    placeholder="Elige una opción"
                    label="Estado mensual"
                    variant="filled"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                />
            </Group>

            <ScrollArea>
                {playersData.players?.map(player => (
                    <Box key={player.id} onClick={() => handleClick(player.playerEmail)}>
                        <PlayerCard player={player} />
                    </Box>
                ))}
            </ScrollArea>
        </>
    )
})
