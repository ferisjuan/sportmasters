import { Button, Grid, Group } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { usePlayerDataQuery } from '~/generated/graphql'

import { useStores } from '~/hooks'
import { Age } from '~/utils'
import { PlayerGridCol } from '~/components'
import { useState } from 'react'

export const PersonalDataProfile: React.FC = observer(() => {
    const { playerStore } = useStores()

    const [isEditable, setIsEditable] = useState(true)

    const { t } = useTranslation('playerData')

    const { data: playerData } = usePlayerDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    playerStore.player.id = playerData?.player?.id || ''

    const player = playerData?.player

    if (!player) return null

    return (
        <Grid>
            <PlayerGridCol span={6} title={t('firstName')} text={player.name} isEditable={isEditable} />

            <PlayerGridCol span={6} title={t('lastName')} text={player.lastName} />

            <PlayerGridCol span={6} title={t('idPlayer')} text={player?.playerData.playerIdNumber} />

            <PlayerGridCol span={6} title={t('birthDay')} date={player?.playerData.birthday} />

            <PlayerGridCol span={2} title={t('age')} text={`${Age(player?.playerData.birthday)}`} />

            <PlayerGridCol span={2} title={t('layer')} text="2" />

            <PlayerGridCol span={2} title={t('sex')} text="Hombre" />

            <PlayerGridCol span={4} title={t('address')} text="Carrera 26 # 18-31" />

            <PlayerGridCol span={2} title={t('payment')} text="Si" />

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '8px' }}>
                <PlayerGridCol span={8} title={t('firstParent')} text={player?.playerGuardian?.guardianName} />

                <PlayerGridCol span={5} title={t('phoneFirstParent')} text={player?.playerGuardian?.guardianPhone} />

                <PlayerGridCol span={5} title={t('emailFirstParent')} text={player?.playerGuardian?.guardianEmail} />
            </Grid>

            <Group
                sx={theme => ({
                    backgroundColor: theme.colors.gray[1],
                    position: 'absolute',
                    right: '20px',
                    bottom: '20px',
                })}
            >
                <Button onClick={() => setIsEditable(!isEditable)}>Editar</Button>
                <Button>Guardar</Button>
            </Group>
        </Grid>
    )
})
