import { Grid } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { usePlayerDataQuery } from '~/generated/graphql'

import { useStores } from '~/hooks'
import { Age } from '~/utils'
import { PlayerGrid } from './playerGrid'

export const PersonalData: React.FC = observer(() => {
    const { playerStore } = useStores()

    const { t } = useTranslation('playerData')

    const { data: playerData } = usePlayerDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const player = playerData?.player

    return (
        <Grid>
            <PlayerGrid span={6} weight="bold" title={t('firstName')} text={player?.name} />
            <PlayerGrid span={6} weight="bold" title={t('lastName')} text={player?.lastName} />
            <PlayerGrid span={6} weight="bold" title={t('birthDay')} text={player?.playerData.birthday} />
            <PlayerGrid span={6} weight="bold" title={t('idPlayer')} text={player?.playerData.playerIdNumber} />
            <PlayerGrid span={4} weight="bold" title={t('age')} text={`${Age(player?.playerData.birthday)}`} />
            <PlayerGrid span={4} weight="bold" title={t('layer')} text="2" />
            <PlayerGrid span={4} weight="bold" title={t('clothingSize')} text="10" />
            <PlayerGrid span={4} weight="bold" title={t('shoeSize')} text="10" />
            <PlayerGrid span={4} weight="bold" title={t('sex')} text="Hombre" />
            <PlayerGrid span={4} weight="bold" title={t('address')} text="Carrera 26 # 18-31" />
            <PlayerGrid span={4} weight="bold" title={t('payment')} text="Si" />

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '8px' }}>
                <PlayerGrid
                    span={8}
                    weight="bold"
                    title={t('firstParent')}
                    text={player?.playerGuardian?.guardianName}
                />
                <PlayerGrid
                    span={5}
                    weight="bold"
                    title={t('phoneFirstParent')}
                    text={player?.playerGuardian?.guardianPhone}
                />
                <PlayerGrid
                    span={5}
                    weight="bold"
                    title={t('emailFirstParent')}
                    text={player?.playerGuardian?.guardianEmail}
                />
            </Grid>
            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '2px' }}>
                <PlayerGrid
                    span={8}
                    weight="bold"
                    title={t('firstParent')}
                    text={player?.playerGuardian?.guardianName}
                />
                <PlayerGrid
                    span={5}
                    weight="bold"
                    title={t('phoneFirstParent')}
                    text={player?.playerGuardian?.guardianPhone}
                />
                <PlayerGrid
                    span={5}
                    weight="bold"
                    title={t('emailFirstParent')}
                    text={player?.playerGuardian?.guardianEmail}
                />
            </Grid>
        </Grid>
    )
})
