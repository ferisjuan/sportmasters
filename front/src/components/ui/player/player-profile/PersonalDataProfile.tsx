import { Grid } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { usePlayerDataQuery } from '~/generated/graphql'

import { useStores } from '~/hooks'
import { Age } from '~/utils'
import { PlayerGridCol } from './PlayerGridCol'

export const PersonalDataProfile: React.FC = observer(() => {
    const { playerStore } = useStores()

    const { t } = useTranslation('playerData')

    const { data: playerData } = usePlayerDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    playerStore.player.id = playerData?.player?.id || ''

    const player = playerData?.player

    if (!player) return null

    return (
        <Grid>
            <PlayerGridCol span={6} title={t('firstName')} text={player.name} />

            <PlayerGridCol span={6} title={t('lastName')} text={player.lastName} />

            <PlayerGridCol span={6} title={t('birthDay')} text={player?.playerData.birthday} />

            <PlayerGridCol span={6} title={t('idPlayer')} text={player?.playerData.playerIdNumber} />

            <PlayerGridCol span={4} title={t('age')} text={`${Age(player?.playerData.birthday)}`} />

            <PlayerGridCol span={4} title={t('layer')} text="2" />

            <PlayerGridCol span={4} title={t('clothingSize')} text="10" />

            <PlayerGridCol span={4} title={t('shoeSize')} text="10" />

            <PlayerGridCol span={4} title={t('sex')} text="Hombre" />

            <PlayerGridCol span={4} title={t('address')} text="Carrera 26 # 18-31" />

            <PlayerGridCol span={4} title={t('payment')} text="Si" />

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '8px' }}>
                <PlayerGridCol span={8} title={t('firstParent')} text={player?.playerGuardian?.guardianName} />

                <PlayerGridCol span={5} title={t('phoneFirstParent')} text={player?.playerGuardian?.guardianPhone} />

                <PlayerGridCol span={5} title={t('emailFirstParent')} text={player?.playerGuardian?.guardianEmail} />
            </Grid>

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '2px' }}>
                <PlayerGridCol span={8} title={t('firstParent')} text={player?.playerGuardian?.guardianName} />

                <PlayerGridCol span={5} title={t('phoneFirstParent')} text={player?.playerGuardian?.guardianPhone} />

                <PlayerGridCol span={5} title={t('emailFirstParent')} text={player?.playerGuardian?.guardianEmail} />
            </Grid>
        </Grid>
    )
})
