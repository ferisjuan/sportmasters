// @vendors
import { observer } from 'mobx-react-lite'
import { ActionIcon, Avatar, Card, Image, Switch, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { BiEditAlt, BiCheck } from 'react-icons/bi'
import { IoWarningOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

// @generated
import { Field_Position, Player_Category } from '~/generated/graphql'

// @Hooks
import { useChangeStatus } from '~/components/ui/player/player-card/hooks'
import { usePlayersFilters } from '~/pages/players/hooks'
import { useStores } from '~/hooks'

// @Constants
import { ROUTES } from '~/constants'

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
                        {d.image ? (
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Image alt="Player image" fit="contain" src={d.image || ''} width={120} />

                                {d.playerStatus === 'INACTIVE' ? (
                                    <ActionIcon color="yellow" variant="filled">
                                        <IoWarningOutline />
                                    </ActionIcon>
                                ) : (
                                    <ActionIcon color="green" size="sm" radius="sm" variant="filled">
                                        <BiCheck />
                                    </ActionIcon>
                                )}
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar src="/player.png" alt="Player Avatar" />
                                {d.playerStatus === 'INACTIVE' ? (
                                    <ActionIcon
                                        color="yellow"
                                        size="sm"
                                        radius="sm"
                                        variant="filled"
                                        style={{ alignSelf: 'end' }}
                                    >
                                        <IoWarningOutline />
                                    </ActionIcon>
                                ) : (
                                    <ActionIcon
                                        color="green"
                                        size="sm"
                                        radius="sm"
                                        variant="filled"
                                        style={{ alignSelf: 'end' }}
                                    >
                                        <BiCheck />
                                    </ActionIcon>
                                )}
                            </div>
                        )}
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
