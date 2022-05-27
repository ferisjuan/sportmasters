import { Card, Container, Group, Tabs } from '@mantine/core'

import { CardSection } from './cardSection'
import { MedicalData, PersonalData, SportData } from './index'

export const PlayerDataProfile: React.FC = () => {
    return (
        <Container fluid sx={{ backgroundColor: 'white' }}>
            <div>
                <Group>
                    <CardSection />
                    <Card shadow="sm" sx={{ width: '618px', height: '85vh', display: 'flex', paddingTop: '80px' }}>
                        <Tabs grow style={{ width: '100%' }}>
                            <Tabs.Tab label="Datos Personales">
                                <PersonalData />
                            </Tabs.Tab>
                            <Tabs.Tab label="Datos Medicos">
                                <MedicalData />
                            </Tabs.Tab>
                            <Tabs.Tab label="Datos Deportivos">
                                <SportData />
                            </Tabs.Tab>
                        </Tabs>
                    </Card>
                </Group>
            </div>
        </Container>
    )
}
