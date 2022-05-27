import { Avatar, Card, Group, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { usePlayerCardSectionQuery } from '~/generated/graphql'
import { useStores } from '~/hooks'

export const CardSectionProfile: React.FC = () => {
    const { t } = useTranslation('fieldPosition')

    const { playerStore } = useStores()


    const { data: playerData } = usePlayerCardSectionQuery({
        where: { playerEmail: playerStore.playerEmail },
    })

    

    const player = playerData?.player

    return (
        <Card
            shadow="sm"
            style={{
                width: '200px',
                height: '85vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '100px',
            }}
        >
            <Card.Section component="a">
                <Avatar radius="xl" src={playerStore.player.image} alt="avatar" />
            </Card.Section>

            <Group direction="column" spacing={1} align="center" style={{ marginTop: '50px' }}>

                <Text component="h1" style={{ margin: '0px' }}>
                    {playerStore.player.name}
                </Text>

                <Text>{t(`${player?.PlayerSportData?.fieldPosition}`)}</Text>
                
            </Group>

            <Group direction="column" spacing={1} align="center" style={{ marginTop: '20px' }}>

                <Text component="p" weight="bold">
                    Biografia
                </Text>

                <Text size="sm" align="center">
                    {player?.playerPsychology?.personalQualities}
                </Text>

            </Group>

            <Group direction="column" spacing={1} align="center" style={{ marginTop: '20px' }}>

                <Text component="p" weight="bold">
                    Hobbies
                </Text>

                <Text size="sm" align="center">
                    {player?.playerPsychology?.hobbies}
                </Text>

            </Group>
        </Card>
    )
}
