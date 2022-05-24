import { Avatar, Card, Container, Group, Tabs, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'

import { Player } from '~/generated/graphql'
import { MedicalData, PersonalData, SportData } from './index'

interface IPlayerAvatar {
    player: Player
}

export const PlayerCardUi: React.FC<IPlayerAvatar> = ({ player }) => {
    const { t } = useTranslation('fieldPosition')

    return (
        <Container fluid sx={{ backgroundColor: 'white' }}>
            <div>
                <Group>
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
                            <Avatar
                                radius="xl"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                            />
                        </Card.Section>

                        <Group direction="column" spacing={1} align="center" style={{ marginTop: '50px' }}>
                            <Text component="h1" style={{ margin: '0px' }}>
                                {player.name}
                            </Text>
                            <Text>{t(`${player?.fieldPosition}`)}</Text>
                        </Group>
                        <Group direction="column" spacing={1} align="center" style={{ marginTop: '20px' }}>
                            <Text component="p" weight="bold">
                                Biografia
                            </Text>
                            <Text size="sm" align="center">
                                Jugador con buen manejo de pelota, amiguero, líder y siempre apoya a sus compañeros.
                            </Text>
                        </Group>
                        <Group direction="column" spacing={1} align="center" style={{ marginTop: '20px' }}>
                            <Text component="p" weight="bold">
                                Hobbies
                            </Text>
                            <Text size="sm" align="center">
                                Montar a caballo, Pasear con su familia, Ver Paw Patrol.{' '}
                            </Text>
                        </Group>
                    </Card>
                    <Card
                        shadow="sm"
                        style={{
                            width: '618px',
                            height: '85vh',
                            display: 'flex',
                            paddingTop: '80px',
                        }}
                    >
                        <Tabs grow style={{ width: '100%' }}>
                            <Tabs.Tab label="Datos Personales">
                                <PersonalData player={player} />
                            </Tabs.Tab>
                            <Tabs.Tab label="Datos Medicos">
                                <MedicalData player={player} />
                            </Tabs.Tab>
                            <Tabs.Tab label="Datos Deportivos">
                                <SportData player={player} />
                            </Tabs.Tab>
                        </Tabs>
                    </Card>
                </Group>
            </div>
        </Container>
    )
}
