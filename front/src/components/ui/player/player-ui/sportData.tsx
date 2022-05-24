import { Grid, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { Player } from '~/generated/graphql'

interface IPlayerAvatar {
    player: Player
}

export const SportData: React.FC<IPlayerAvatar> = ({ player }) => {
    const { t } = useTranslation('playerData')

    return (
        <Grid grow gutter="xl" style={{ padding: '10px', paddingTop: '30px' }}>
            <Grid.Col span={6}>
                <Text weight="bold">{t('sportsData.category')}</Text>
                <Text>{player.hobbies}</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('sportsData.dominantProfile')}</Text>
                <Text>Ambidiestro</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('sportsData.playingPosition')}</Text>
                <Text>Delantero</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('sportsData.dateOfEntry')}</Text>
                <Text>08/02/2021</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('sportsData.previousTeams')}</Text>
                <Text>86</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('sportsData.jerseyNumber')}</Text>
                <Text>2</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('sportsData.comments')}</Text>
                <Text>Pollito</Text>
            </Grid.Col>
        </Grid>
    )
}
