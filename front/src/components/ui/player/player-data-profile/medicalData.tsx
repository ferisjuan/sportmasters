import { Grid } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { usePlayerMedicalDataQuery } from '~/generated/graphql'
import { useStores } from '~/hooks'
import { PlayerGrid } from './playerGrid'

export const MedicalData: React.FC = () => {
    const { playerStore } = useStores()

    const { t } = useTranslation('medicalData')

    const { data: playerData } = usePlayerMedicalDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const player = playerData?.player

    return (
        <Grid style={{ padding: '10px', paddingTop: '30px' }}>
            <Grid grow style={{ width: '100%', padding: '8px' }}>
                <PlayerGrid
                    span={6}
                    weight="bold"
                    title={t('healthProvider')}
                    text={player?.playerMedical?.healthProvider}
                />

                <PlayerGrid span={6} weight="bold" title={t('bloodType')} text={player?.playerMedical?.bloodType} />
            </Grid>

            <Grid grow style={{ width: '50%', padding: '8px' }}>
                <PlayerGrid span={2} weight="bold" title={t('height')} text={player?.playerMedical?.height} />
                <PlayerGrid span={3} weight="bold" title={t('weight')} text={player?.playerMedical?.weight} />
                <PlayerGrid span={3} weight="bold" title={t('bmi')} text={player?.playerMedical?.IMC} />
            </Grid>

            <PlayerGrid span={6} weight="bold" title={t('injuries')} text={player?.PlayerInjuries?.name} />
            <PlayerGrid span={6} weight="bold" title={t('surgeries')} text={player?.playerSurgeries?.name} />
            <PlayerGrid
                span={6}
                weight="bold"
                title={t('diseasesSuffered')}
                text={player?.playerMedical?.diseases[0]}
            />
            <PlayerGrid span={4} weight="bold" title={t('allergies')} text={player?.playerMedical?.alergies[0]} />
            <PlayerGrid weight="bold" title={t('comments')} text={`${player?.playerMedical?.observations}`} />
        </Grid>
    )
}
