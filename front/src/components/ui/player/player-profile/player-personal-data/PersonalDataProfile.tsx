// @vendors

import { Button, Grid, Group, Select, TextInput } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { DatePicker } from '@mantine/dates'

// @components
import { PlayerGridCol } from '~/components'

// hooks
import { useStores } from '~/hooks'
import { useUpdatePersonalData } from '~/components/ui/player/player-profile/player-personal-data/usePersonalData'

// @utils
import { Age } from '~/utils'

export const PersonalDataProfile: React.FC = observer(() => {
    const {
        gender,
        handleUpdatePlayerData,
        lastName,
        name,
        playerData,
        setDateValue,
        setGender,
        setLastName,
        setName,
        playerId,
        setPlayerId,
        setGuardianName,
        setGuardianLastName,
        setGuardianEmail,
        setGuardianPhone,
        guardianLastName,
        guardianName,
        guardianEmail,
        guardianPhone,
        setPlayerIdType,
        payment,
        setPayment,
        playerIdType,
        dateValue,
    } = useUpdatePersonalData()

    const { playerStore } = useStores()

    const { t } = useTranslation('playerData')

    playerStore.player.id = playerData?.player?.id || ''

    const player = playerData?.player

    if (!player) return null

    return (
        <Grid p="md" gutter={10}>
            <Grid.Col span={6}>
                <TextInput
                    label={t('firstName')}
                    value={name}
                    required
                    onChange={event => setName(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <TextInput
                    label={t('lastName')}
                    value={lastName}
                    required
                    onChange={event => setLastName(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <Select
                    label={t('idSelectLabel')}
                    data={t('idSelect', { returnObjects: true })}
                    placeholder={t('idSelectPlaceholder')}
                    sx={{ flex: 1 }}
                    value={playerIdType}
                    readOnly
                    onChange={setPlayerIdType}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <TextInput
                    label={t('idPlayer')}
                    value={playerId}
                    required
                    onChange={event => setPlayerId(event.target.value)}
                />
            </Grid.Col>

            <Grid.Col span={6}>
                <DatePicker defaultValue={dateValue} label={t('birthDay')} required onChange={setDateValue} />
            </Grid.Col>
            <Grid.Col span={3}>
                <TextInput label={t('age')} value={`${Age(dateValue)}`} readOnly />
            </Grid.Col>

            <Grid.Col span={3}>
                <Select
                    label={t('sex')}
                    data={t('gender', { returnObjects: true })}
                    value={gender}
                    onChange={setGender}
                    required
                />
            </Grid.Col>

            <PlayerGridCol span={6} title={t('address')} text="Carrera 26 # 18-31" />

            <Grid.Col span={6}>
                <Select
                    label={t('payment')}
                    required
                    data={t('paymenStatus', { returnObjects: true })}
                    onChange={setPayment}
                    value={payment}
                />
            </Grid.Col>

            <Grid gutter="xs" grow style={{ paddingTop: 30, padding: '8px' }}>
                <Grid.Col span={6}>
                    <TextInput
                        label={t('guardianName')}
                        value={guardianName}
                        required
                        onChange={event => setGuardianName(event.target.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        label={t('guardianLastName')}
                        value={guardianLastName}
                        required
                        onChange={event => setGuardianLastName(event.target.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        label={t('phoneFirstParent')}
                        value={guardianPhone}
                        required
                        onChange={event => setGuardianPhone(event.target.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        label={t('emailFirstParent')}
                        value={guardianEmail}
                        required
                        onChange={event => setGuardianEmail(event.target.value)}
                    />
                </Grid.Col>
            </Grid>

            <Group
                sx={theme => ({
                    backgroundColor: theme.colors.gray[1],
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                })}
            >
                <Button onClick={handleUpdatePlayerData}>Guardar</Button>
            </Group>
        </Grid>
    )
})
