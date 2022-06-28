import { Grid } from '@mantine/core'
import { PlayerGridCol } from '~/components'
import { usePlayerMedicalDataQuery } from '~/generated/graphql'
import { useStores } from '~/hooks'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'

export const MedicalDataProfile: React.FC = observer(() => {
    const { playerStore } = useStores()

    const { t } = useTranslation('medicalData')

    const { data: playerData } = usePlayerMedicalDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const player = playerData?.player

    return (
        <Grid p="md">
            <Grid grow style={{ width: '100%', padding: '8px' }}>
                <PlayerGridCol span={6} title={t('healthProvider')} text={player?.playerMedical?.healthProvider} />

                <PlayerGridCol span={6} title={t('bloodType')} text={player?.playerMedical?.bloodType} />
            </Grid>

            <Grid grow style={{ width: '50%', padding: '8px' }}>
                <PlayerGridCol span={2} title={t('height')} text={player?.playerMedical?.height} />

                <PlayerGridCol span={3} title={t('weight')} text={player?.playerMedical?.weight} />

                <PlayerGridCol span={3} title={t('bmi')} text={player?.playerMedical?.IMC} />
            </Grid>

            <PlayerGridCol span={6} title={t('injuries')} text={player?.playerInjuries?.name} />

            <PlayerGridCol span={6} title={t('surgeries')} text={player?.playerSurgeries?.name} />

            <PlayerGridCol span={6} title={t('diseasesSuffered')} text={player?.playerMedical?.diseases[0]} />

            <PlayerGridCol span={4} title={t('allergies')} text={player?.playerMedical?.alergies[0]} />

            <PlayerGridCol title={t('comments')} text={`${player?.playerMedical?.observations}`} />
        </Grid>
    )
})
