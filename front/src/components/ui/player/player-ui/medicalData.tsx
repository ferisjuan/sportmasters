import { Grid, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { Player } from '~/generated/graphql'

interface IPlayerAvatar {
    player: Player
}

export const MedicalData: React.FC<IPlayerAvatar> = ({ player }) => {
    const { t } = useTranslation('medicalData')

    return (
        <Grid style={{ padding: '10px', paddingTop: '30px' }}>
            <Grid grow style={{ width: '100%', padding: '8px' }}>
                <Grid.Col span={6}>
                    <Text weight="bold">{t('eps')}</Text>
                    <Text>{player.name}</Text>
                </Grid.Col>

                <Grid.Col span={6}>
                    <Text weight="bold">{t('bloodType')}</Text>
                    <Text>{player.lastName}</Text>
                </Grid.Col>
            </Grid>

            <Grid grow style={{ width: '50%', padding: '8px' }}>
                <Grid.Col span={2}>
                    <Text weight="bold">{t('height')}</Text>
                    <Text>150</Text>
                </Grid.Col>

                <Grid.Col span={3}>
                    <Text weight="bold">{t('weight')}</Text>
                    <Text>50</Text>
                </Grid.Col>

                <Grid.Col span={2}>
                    <Text weight="bold">{t('bmi')}</Text>
                    <Text>86</Text>
                </Grid.Col>
            </Grid>

            <Grid.Col span={6} style={{ width: '50%' }}>
                <Text weight="bold">{t('idPlayer')}</Text>
                <Text>2</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('injuries')}</Text>
                <Text>Pollito</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold"> {t('surgeries')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('diseasesSuffered')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('allergies')}</Text>
                <Text>Carrera 26 # 18-31</Text>
            </Grid.Col>

            <Grid.Col>
                <Text weight="bold">{t('comments')}</Text>
                <Text>Videojuegos Musica</Text>
            </Grid.Col>
        </Grid>
    )
}
