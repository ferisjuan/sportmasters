import { Grid, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { Player } from '~/generated/graphql'

interface IPlayerAvatar {
    player: Player
}

export const PersonalData: React.FC<IPlayerAvatar> = ({ player }) => {
    const { t } = useTranslation('playerData')

    return (
        <Grid>
            <Grid.Col span={6}>
                <Text weight="bold">{t('personalData.firstName')}</Text>
                <Text>{player.name}</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('personalData.lastName')}</Text>
                <Text>{player.lastName}</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('personalData.birthDay')}</Text>
                <Text>{'31/10/2019'}</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('personalData.idPlayer')}</Text>
                <Text>850908-121355</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('personalData.age')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('personalData.layer')}</Text>
                <Text>2</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('personalData.clothingSize')}</Text>
                <Text>Pollito</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('personalData.shoeSize')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('personalData.sex')}</Text>
                <Text>7</Text>
            </Grid.Col>

            <Grid.Col span={4}>
                <Text weight="bold">{t('personalData.address')}</Text>
                <Text>Carrera 26 # 18-31</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('personalData.hobbies')}</Text>
                <Text>Videojuegos Musica</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text weight="bold">{t('personalData.payment')}</Text>
                <Text>Si</Text>
            </Grid.Col>

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '8px' }}>
                <Grid.Col span={8}>
                    <Text weight="bold">{t('personalData.firstParent')}</Text>
                    <Text>Padre</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('personalData.phoneFirstParent')}</Text>
                    <Text>Carrera 26 # 18-31</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('personalData.emailFirstParent')}</Text>
                    <Text>email@email.com</Text>
                </Grid.Col>
            </Grid>

            <Grid gutter="xs" grow style={{ paddingTop: 30, width: '50%', padding: '2px' }}>
                <Grid.Col span={8}>
                    <Text weight="bold">{t('personalData.secondParent')}</Text>
                    <Text>Madre</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('personalData.phoneSecondParent')}</Text>
                    <Text>Carrera 26 # 18-31</Text>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Text weight="bold">{t('personalData.emailSecondParent')}</Text>
                    <Text>email@email.com</Text>
                </Grid.Col>
            </Grid>
        </Grid>
    )
}
