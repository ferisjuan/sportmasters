import { Grid } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { usePlayerSportDataQuery } from '~/generated/graphql'
import { useStores } from '~/hooks'
import { PlayerGrid } from './playerGrid'

export const SportData: React.FC = () => {
    const { t } = useTranslation('sportData')

    const { playerStore } = useStores()

    const { data: playerData } = usePlayerSportDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const player = playerData?.player

    return (
        <Grid grow gutter="xl" style={{ padding: '10px', paddingTop: '30px' }}>
            <PlayerGrid span={6} weight="bold" title={t('category')} text={player?.PlayerSportData?.category} />
            <PlayerGrid
                span={6}
                weight="bold"
                title={t('dominantProfile')}
                text={player?.PlayerSportData?.handedness}
            />
            <PlayerGrid
                span={6}
                weight="bold"
                title={t('playingPosition')}
                text={player?.PlayerSportData?.fieldPosition}
            />
            <PlayerGrid span={6} weight="bold" title={t('dateOfEntry')} text={player?.PlayerSportData?.admissionDate} />
            <PlayerGrid
                span={6}
                weight="bold"
                title={t('previousTeams')}
                text={player?.PlayerSportData?.previousSchool}
            />
            <PlayerGrid span={6} weight="bold" title={t('jerseyNumber')} text={player?.PlayerSportData?.shirtNumber} />
            <PlayerGrid span={6} weight="bold" title={t('comments')} text={player?.PlayerSportData?.observations} />
        </Grid>
    )
}
