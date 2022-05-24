import { Grid, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { Player } from '~/generated/graphql'

interface IPlayerAvatar {
    player: Player
}

export const MedicalData: React.FC<IPlayerAvatar> = ({ player }) => {
    const { t } = useTranslation('playerData')

    return (
        <Grid style={{ padding: '10px', paddingTop: '30px' }}>
            <Grid grow style={{ width: '100%', padding: '8px' }}>
                <Grid.Col span={6}>
                    <Text weight="bold">{t('medicalData.eps')}</Text>
                    <Text>{player.name}</Text>
                </Grid.Col>

                <Grid.Col span={6}>
                    <Text weight="bold">{t('medicalData.bloodType')}</Text>
                    <Text>{player.lastName}</Text>
                </Grid.Col>
            </Grid>

            <Grid grow style={{ width: '50%', padding: '8px' }}>
                <Grid.Col span={2}>
                    <Text weight="bold">{t('medicalData.height')}</Text>
                    <Text>150</Text>
                </Grid.Col>

                <Grid.Col span={3}>
                    <Text weight="bold">{t('medicalData.weight')}</Text>
                    <Text>50</Text>
                </Grid.Col>

                <Grid.Col span={2}>
                    <Text weight="bold">{t('medicalData.bmi')}</Text>
                    <Text>86</Text>
                </Grid.Col>
            </Grid>

            <Grid.Col span={6} style={{ width: '50%' }}>
                <Text weight="bold">{t('medicalData.idPlayer')}</Text>
                <Text>2</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('medicalData.injuries')}</Text>
                <Text>Pollito</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold"> {t('medicalData.surgeries')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('medicalData.diseasesSuffered')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('medicalData.allergies')}</Text>
                <Text>Carrera 26 # 18-31</Text>
            </Grid.Col>

            <Grid.Col>
                <Text weight="bold">{t('medicalData.comments')}</Text>
                <Text>Videojuegos Musica</Text>
            </Grid.Col>
        </Grid>
    )
}
