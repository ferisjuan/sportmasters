// @vendors
import { SyntheticEvent } from 'react'
import { ActionIcon, Button, Card, Group, Modal, NativeSelect, Text, useMantineColorScheme } from '@mantine/core'
import { BiEditAlt } from 'react-icons/bi'
import { BsCashCoin } from 'react-icons/bs'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// @components
import { AvatarPlayerCard } from '~/components/ui/player/player-card/AvatarPlayerCard'

// @generated
import { Player_Status } from '~/generated/graphql'

// @Hooks
import { useChangeStatus } from '~/components/ui/player/player-card/hooks'
import { usePlayersFilters } from '~/pages/players/hooks'
import { useStores } from '~/hooks'

// @Constants
import { ROUTES } from '~/constants'

// @interfaces
import { PlayerCardProps } from '~/components/ui/player/player-card/types'

const playerStatus = Object.keys(Player_Status).map(key => ({ value: key, label: key }))

playerStatus.unshift({ value: '', label: 'Selecione un estado ...' })

export const PlayerCard: React.FC<PlayerCardProps> = observer(({ players }) => {
    const { playerStore } = useStores()

    const { colorScheme } = useMantineColorScheme()

    const lightColor = colorScheme === 'light'

    const { t } = useTranslation('fieldPosition')

    const { refetchPlayersFilters } = usePlayersFilters()

    const { handleChangeStatus, setChangeStatus, changeStatus, handleOpenModal, isModalOpen, closeModal, playerName } =
        useChangeStatus(refetchPlayersFilters)

    const navigate = useNavigate()

    const handleClick = (email: string | undefined): void => {
        if (!email) return

        playerStore.playerEmail = email

        navigate(`../${ROUTES.player}`, { replace: true })
    }

    const action = [{ cb: handleOpenModal }]

    return (
        <>
            <Modal opened={isModalOpen} onClose={closeModal} title={`Cambiar estado del jugador ${playerName}`}>
                <NativeSelect
                    data={playerStatus}
                    value={changeStatus}
                    onChange={(event: SyntheticEvent<HTMLSelectElement>) =>
                        setChangeStatus(event.currentTarget.value as keyof typeof Player_Status)
                    }
                />

                <Group position="right" mt="md">
                    <Button color="indigo" variant="subtle" onClick={closeModal}>
                        Cancelar
                    </Button>

                    <Button disabled={!changeStatus.length} onClick={handleChangeStatus}>
                        Confirmar
                    </Button>
                </Group>
            </Modal>

            <div>
                {players?.map(player => {
                    const index = players?.indexOf(player)
                    return (
                        <Card
                            key={player.id}
                            shadow="sm"
                            sx={theme => ({
                                backgroundColor: lightColor && index % 2 === 0 ? 'white' : theme.colors.gray[2],
                                height: '5em',
                                width: '880px',
                                color: theme.colorScheme === 'light' ? 'black' : 'white',
                                display: 'flex',
                                borderRadius: '0',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '1em',
                            })}
                        >
                            <Group position="center">
                                <AvatarPlayerCard image={player.image} />
                            </Group>

                            <Text size="xl">{player.playerSportData?.shirtNumber}</Text>

                            <Text size="xl" color="indigo">
                                {t(`${player.playerSportData?.fieldPosition}`) || 'Position not found'}
                            </Text>

                            <div style={{ minWidth: '200px' }}>
                                <Text align="center" size="lg" transform="uppercase">
                                    {player.name} {player.lastName}
                                </Text>
                            </div>

                            <Text align="center" size="lg" style={{ width: '68px' }}>
                                {player.playerData?.birthday ? player.playerData?.birthday : '0'} Años
                            </Text>

                            <Text align="center" size="lg">
                                {player.playerMedical?.height ? player.playerMedical?.height : '0'} cm
                            </Text>

                            <Text align="center" size="lg">
                                {player.playerMedical?.weight ? player.playerMedical?.weight : '0'} kg
                            </Text>

                            <Text>{player.playerStatus}</Text>

                            {action.map(({ cb }) => (
                                <div key={player.id} style={{ display: 'flex', gap: '1em' }}>
                                    <ActionIcon
                                        color="indigo"
                                        size="xl"
                                        variant="filled"
                                        sx={{ zIndex: 910 }}
                                        onClick={() => {
                                            if (!cb) return
                                            cb(player as never)
                                        }}
                                    >
                                        <BsCashCoin />
                                    </ActionIcon>
                                    <ActionIcon
                                        color="indigo"
                                        size="xl"
                                        variant="filled"
                                        onClick={() => handleClick(player.playerEmail)}
                                    >
                                        <BiEditAlt />
                                    </ActionIcon>
                                </div>
                            ))}
                        </Card>
                    )
                })}
            </div>
        </>
    )
})
