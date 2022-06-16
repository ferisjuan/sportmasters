// @vendors
import { observer } from 'mobx-react-lite'
import { Avatar, Box, Card, Image, Switch, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @generated
import { Field_Position, Player_Category } from '~/generated/graphql'
import { useChangeStatus } from '~/components/ui/player/player-card/hooks'
import { usePlayersFilters } from '~/pages/players/hooks'
import { useStores } from '~/hooks'
import { ROUTES } from '~/constants'
import { useNavigate } from 'react-router-dom'

// @interfaces
interface PlayerMedicalData {
    height?: string
    weight?: string
}

interface PlayerData {
    birthday?: string | null
}

interface PlayerSportData {
    category?: Player_Category | null
    fieldPosition?: Field_Position | null
}

interface PlayerCards {
    image?: string | null
    lastName?: string
    name?: string
    playerEmail?: string
    playerData?: PlayerData | null
    playerSportData?: PlayerSportData | null
    playerMedical?: PlayerMedicalData | null
    playerStatus?: string
    playerPaymentStatus?: string
    id?: string
}

interface PlayerCardProps {
    players: PlayerCards[] | undefined
}

export const PlayerCard: React.FC<PlayerCardProps> = observer(({ players }) => {
    const { playerStore } = useStores()

    const { t } = useTranslation('fieldPosition')

    const { refetchPlayersFilters } = usePlayersFilters()

    const { handleChangeStatus } = useChangeStatus(refetchPlayersFilters)

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    const action = [{ cb: handleChangeStatus }]

    return (
        <div>
            {players?.map(d => {
                const index = players?.indexOf(d)
                return (
                    <Box key={d.id} onClick={() => handleClick(d.playerEmail)} style={{ width: '100%' }}>
                        <Card
                            key={d.id}
                            shadow="sm"
                            sx={theme => ({
                                backgroundColor: index % 2 === 0 ? theme.colors.gray[9] : theme.colors.gray[7],
                                height: '5em',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderRadius: '0',
                                alignItems: 'center',
                            })}
                        >
                            {d.image ? (
                                <Image alt="Player image" fit="contain" src={d.image || ''} width={120} />
                            ) : (
                                <Avatar src="/player.png" alt="Player Avatar" />
                            )}

                            <Text align="center" size="xl" transform="uppercase">
                                {d.name} {d.lastName}
                            </Text>

                            <Text align="center" size="xl" transform="uppercase">
                                {t(`${d.playerSportData?.fieldPosition}`) || 'Position not found'}
                            </Text>

                            <Text align="center" size="xl" transform="uppercase">
                                {d.playerData?.birthday ? d.playerData?.birthday : '0'}
                            </Text>

                            <Text align="center" size="xl">
                                {d.playerMedical?.height ? d.playerMedical?.height : '0'}cm
                            </Text>

                            <Text align="center" size="xl">
                                {d.playerMedical?.weight ? d.playerMedical?.weight : '0'}kg
                            </Text>

                            <Text align="center" size="xl">
                                {d.playerStatus}
                            </Text>

                            {action.map(({ cb }) => (
                                <Switch
                                    checked={d.playerStatus === 'ACTIVE'}
                                    readOnly={true}
                                    key={d.id}
                                    onClick={() => {
                                        if (!cb) return
                                        cb(d as never)
                                    }}
                                >
                                    Estado
                                </Switch>
                            ))}
                        </Card>
                    </Box>
                )
            })}
        </div>
    )
})
