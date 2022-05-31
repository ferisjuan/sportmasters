// @vendors
import { Card, Container, Group, Tabs } from '@mantine/core'

// @components
import { MedicalDataProfile } from './MedicalDataProfile'
import { PersonalDataProfile } from './PersonalDataProfile'
import { PlayerAttendance } from './PlayerAttendance'
import { ProfileData } from './ProfileData'
import { SportData } from './SportDataProfile'

export const PlayerDataProfile: React.FC = () => {
    return (
        <Container fluid sx={{ backgroundColor: 'white' }}>
            <div>
                <Group>
                    <ProfileData />

                    <Card shadow="sm" sx={{ width: '618px', height: '85vh', display: 'flex', paddingTop: '80px' }}>
                        <Tabs grow style={{ width: '100%' }}>
                            <Tabs.Tab label="Datos Personales">
                                <PersonalDataProfile />
                            </Tabs.Tab>

                            <Tabs.Tab label="Datos Medicos">
                                <MedicalDataProfile />
                            </Tabs.Tab>

                            <Tabs.Tab label="Datos Deportivos">
                                <SportData />
                            </Tabs.Tab>

                            <Tabs.Tab label="Asistencia">
                                <PlayerAttendance />
                            </Tabs.Tab>
                        </Tabs>
                    </Card>
                </Group>
            </div>
        </Container>
    )
}
