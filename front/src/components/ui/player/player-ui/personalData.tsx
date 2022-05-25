import { Grid, Text } from '@mantine/core'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'

import { useStores } from '~/hooks'

export const PersonalData: React.FC = observer(() => {
    const { playerStore } = useStores()

    const { t } = useTranslation('playerData')

    return (
        <Grid>
            <Grid.Col span={6}>
                <Text weight="bold">{t('firstName')}</Text>
                <Text>Nombre</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('lastName')}</Text>
                <Text>Apellidos</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('birthDay')}</Text>
                <Text>{'31/10/2019'}</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('idPlayer')}</Text>
                <Text>850908-121355</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('age')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('layer')}</Text>
                <Text>2</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('clothingSize')}</Text>
                <Text>Pollito</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('shoeSize')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('sex')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('address')}</Text>
                <Text>Carrera 26 # 18-31</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('hobbies')}</Text>
                <Text>Videojuegos Musica</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('payment')}</Text>
                <Text>Si</Text>
            </Grid.Col>

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '8px' }}>
                <Grid.Col span={8}>
                    <Text weight="bold">{t('firstParent')}</Text>
                    <Text>Padre</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('phoneFirstParent')}</Text>
                    <Text>Carrera 26 # 18-31</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('emailFirstParent')}</Text>
                    <Text>email@email.com</Text>
                </Grid.Col>
            </Grid>

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '2px' }}>
                <Grid.Col span={8}>
                    <Text weight="bold">{t('secondParent')}</Text>
                    <Text>Madre</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('phoneSecondParent')}</Text>
                    <Text>Carrera 26 # 18-31</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('emailSecondParent')}</Text>
                    <Text>email@email.com</Text>
                </Grid.Col>
            </Grid>
        </Grid>
    )
})
