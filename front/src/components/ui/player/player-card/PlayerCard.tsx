// @vendors
import { ActionIcon, Card, Switch, Text } from '@mantine/core'
import { BiEditAlt } from 'react-icons/bi'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// @generated
import { Field_Position, Player_Category } from '~/generated/graphql'

// @Hooks
import { useChangeStatus } from '~/components/ui/player/player-card/hooks'
import { usePlayersFilters } from '~/pages/players/hooks'
import { useStores } from '~/hooks'

// @Constants
import { ROUTES } from '~/constants'
import { AvatarPlayerCard } from '~/components/ui/player/player-card/AvatarPlayerCard'

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
    id?: string
    image?: string | null
    lastName?: string
    name?: string
    playerData?: PlayerData | null
    playerEmail?: string
    playerMedical?: PlayerMedicalData | null
    playerPaymentStatus?: string
    playerSportData?: PlayerSportData | null
    playerStatus?: string
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
                    <Card
                        key={d.id}
                        shadow="sm"
                        sx={theme => ({
                            backgroundColor: index % 2 === 0 ? theme.colors.gray[9] : theme.colors.gray[7],
                        })}
                        style={{
                            height: '5em',
                            width: '880px',
                            color: 'white',
                            display: 'flex',
                            borderRadius: '0',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '1em',
                        }}
                    >
                        <AvatarPlayerCard playerStatus={d.playerStatus} image={d.image} />

                        <div style={{ minWidth: '200px' }}>
                            <Text align="center" size="lg" transform="uppercase">
                                {d.name} {d.lastName}
                            </Text>

                            <Text align="center" size="xs" transform="uppercase" color="dimmed">
                                {t(`${d.playerSportData?.fieldPosition}`) || 'Position not found'}
                            </Text>
                        </div>

                        <Text align="center" size="lg" style={{ width: '68px' }}>
                            {d.playerData?.birthday ? d.playerData?.birthday : '0'} Años
                        </Text>

                        <Text align="center" size="lg">
                            {d.playerMedical?.height ? d.playerMedical?.height : '0'} cm
                        </Text>

                        <Text align="center" size="lg">
                            {d.playerMedical?.weight ? d.playerMedical?.weight : '0'} kg
                        </Text>

                        {action.map(({ cb }) => (
                            <div key={d.id} style={{ display: 'flex', gap: '1em' }}>
                                <Switch
                                    style={{
                                        alignSelf: 'center',
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column-reverse',
                                        gap: '1em',
                                    }}
                                    label={d.playerStatus}
                                    size="sm"
                                    checked={d.playerStatus === 'ACTIVE'}
                                    readOnly={true}
                                    onClick={() => {
                                        if (!cb) return
                                        cb(d as never)
                                    }}
                                />
                                <ActionIcon
                                    color="blue"
                                    size="lg"
                                    variant="filled"
                                    onClick={() => handleClick(d.playerEmail)}
                                >
                                    <BiEditAlt />
                                </ActionIcon>
                            </div>
                        ))}
                    </Card>
                )
            })}
        </div>
    )
})
