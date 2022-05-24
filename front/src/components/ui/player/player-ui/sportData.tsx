import { Grid, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { Player } from '~/generated/graphql'

interface IPlayerAvatar {
    player: Player
}

export const SportData: React.FC<IPlayerAvatar> = ({ player }) => {
    const { t } = useTranslation('sportData')

    return (
        <Grid grow gutter="xl" style={{ padding: '10px', paddingTop: '30px' }}>
            <Grid.Col span={6}>
                <Text weight="bold">{t('category')}</Text>
                <Text>{player.hobbies}</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('dominantProfile')}</Text>
                <Text>Ambidiestro</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('playingPosition')}</Text>
                <Text>Delantero</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('dateOfEntry')}</Text>
                <Text>08/02/2021</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('previousTeams')}</Text>
                <Text>86</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('jerseyNumber')}</Text>
                <Text>2</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('comments')}</Text>
                <Text>Pollito</Text>
            </Grid.Col>
        </Grid>
    )
}
