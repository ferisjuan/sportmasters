import { Grid } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { usePlayerSportDataQuery } from '~/generated/graphql'
import { useStores } from '~/hooks'
import { PlayerGridCol } from './PlayerGridCol'

export const SportData: React.FC = observer(() => {
    const { t } = useTranslation('sportData')

    const { playerStore } = useStores()

    const { data: playerData } = usePlayerSportDataQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    const player = playerData?.player

    return (
        <Grid grow gutter="xl" style={{ padding: '10px', paddingTop: '30px' }}>
            <PlayerGridCol span={6} title={t('category')} text={player?.PlayerSportData?.category} />

            <PlayerGridCol span={6} title={t('dominantProfile')} text={player?.PlayerSportData?.handedness} />

            <PlayerGridCol span={6} title={t('playingPosition')} text={player?.PlayerSportData?.fieldPosition} />

            <PlayerGridCol span={6} title={t('dateOfEntry')} text={player?.PlayerSportData?.admissionDate} />

            <PlayerGridCol span={6} title={t('previousTeams')} text={player?.PlayerSportData?.previousSchool} />

            <PlayerGridCol span={6} title={t('jerseyNumber')} text={player?.PlayerSportData?.shirtNumber} />

            <PlayerGridCol span={6} title={t('comments')} text={player?.PlayerSportData?.observations} />
        </Grid>
    )
})
